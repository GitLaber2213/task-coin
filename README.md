# task-coin

SPA с тремя экранами: вход, курсы валют к USD с графиком динамики и пошаговая форма создания карточки задачи.

## Запуск

Нужен Node.js **20.19+ или 22.12+** (требование Vite 8) и Yarn.

```bash
yarn install
yarn dev        # dev-сервер на http://localhost:5173
```

Прочие команды:

| Команда        | Что делает                                         |
| -------------- | -------------------------------------------------- |
| `yarn build`   | проверка типов (`tsc -b`) и production-сборка в `dist/` |
| `yarn preview` | раздаёт собранный `dist/` локально                 |
| `yarn lint`    | ESLint по всему проекту                            |

Тестовый аккаунт:

```
email:    admin@gmail.com
password: admin123
```

Переменных окружения нет: адреса API зашиты в модулях `api/`.

## Экраны и маршруты

| Маршрут                        | Доступ        | Что там                                   |
| ------------------------------ | ------------- | ----------------------------------------- |
| `/auth`                        | только гостям | форма входа                               |
| `/dashboard/rates`             | после входа   | таблица курсов и график по выбранной валюте |
| `/dashboard/cards/new?step=…`  | после входа   | форма карточки: `edit` → `preview` → `confirm` |

`/` перенаправляет на `/dashboard/rates`. Защиту маршрутов делают `GuardRoutes` и `GuestRoutes` в [src/app/route/guard.tsx](src/app/route/guard.tsx).

## Выбранные API

### Курсы валют — Frankfurter

`GET https://api.frankfurter.dev/v1/{дата-год-назад}..?from=USD&to=AUD,BGN,BRL,CAD,CHF,EUR,GBP,JPY`

[Frankfurter](https://frankfurter.dev) отдаёт опорные курсы Европейского центрального банка. Почему он:

- бесплатный, без ключа и регистрации, с CORS — можно звать прямо из браузера;
- один запрос с диапазоном дат (`start..`) возвращает всю историю за год, поэтому график по любому периоду (1W / 1M / 3M / 6M / 1Y) строится на клиенте без повторных запросов;
- стабильный формат ответа: `{ base, start_date, end_date, rates: { "YYYY-MM-DD": { CUR: number } } }`.

Что считается на клиенте:

- **изменение** — разница последнего и предпоследнего торгового дня ([src/features/rates/model/rows.ts](src/features/rates/model/rows.ts));
- **курсы продажи и покупки** — от опорного курса с наценкой +2 % и скидкой −1,5 % ([src/entities/rate/model/get-exchange-prices.ts](src/entities/rate/model/get-exchange-prices.ts)). Это условные значения: у ЕЦБ есть только опорный курс.

ЕЦБ публикует курсы по рабочим дням, поэтому в выходные и праздники последняя дата в ответе — предыдущий рабочий день.

### Флаги — FlagCDN

`https://flagcdn.com/{код страны}.svg` — SVG-флаги без ключа. Код страны берётся из первых двух букв кода валюты (`USD` → `us`, `GBP` → `gb`) в [src/entities/rate/lib/get-country-flag.ts](src/entities/rate/lib/get-country-flag.ts). Для `EUR` это даёт `eu` — флаг ЕС, который на FlagCDN тоже есть.

### Авторизация — мок на MSW

Настоящего бэкенда нет. Запросы к `https://example.com/*` перехватывает [Mock Service Worker](https://mswjs.io) в браузере ([src/shared/mocks/auth-handlers.ts](src/shared/mocks/auth-handlers.ts)):

| Запрос                              | Ответ |
| ----------------------------------- | ----- |
| `POST /auth` `{ email, password }`  | `200 { user, token }` для тестового аккаунта (с задержкой 1,5 с, чтобы был виден лоадер), иначе `401` |
| `GET /auth` c `Authorization: <token>` | `200 user`, если токен верный, иначе `401` |
| `POST /logout`                      | `204` |

Токен хранится в `localStorage` (`accessToken`); при загрузке приложение проверяет его через `GET /auth` и восстанавливает сессию. Worker стартует до рендера в [src/app/main.tsx](src/app/main.tsx), остальные запросы (Frankfurter, FlagCDN) он пропускает в сеть без изменений. Чтобы подключить реальный бэкенд, достаточно поменять адреса в [src/features/auth/api/index.ts](src/features/auth/api/index.ts) и убрать `worker.start()`.

### Сохранение карточки

Отдельного API нет: на шаге `confirm` форма собирается в `FormData` (поля, теги, файлы изображений) и её содержимое показывается в уведомлении. Это место, где будет `POST` на сервер.

## Технологии

### Сборка и язык

- **Vite 8** — dev-сервер с HMR и сборка. `recharts` вынесен в `optimizeDeps.include`: график подгружается лениво, и без этого Vite переоптимизировал бы зависимости посреди сессии ([vite.config.ts](vite.config.ts)).
- **TypeScript 6** — строгие флаги `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `verbatimModuleSyntax`.
- **React Compiler** (`babel-plugin-react-compiler` через `@rolldown/plugin-babel`) — автоматическая мемоизация, поэтому в компонентах нет ручных `useMemo` / `useCallback`.
- **ESLint 10** + `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`.

### UI и состояние

- **React 19** — компоненты и хуки. Глобальное состояние без библиотек:
  - сессия — React Context в `AuthProvider` ([src/features/auth/provider/index.tsx](src/features/auth/provider/index.tsx));
  - уведомления — модульный store на `useSyncExternalStore`, вызывается откуда угодно через `notify.success()` / `notify.error()` ([src/shared/ui/notifications/store.ts](src/shared/ui/notifications/store.ts)).
- **styled-components 6** — стили рядом с компонентами (`styles.tsx`), глобальные стили в [src/app/styles/global.ts](src/app/styles/global.ts), цвета и типографика в `src/shared/colors.ts` и `src/shared/typography.ts`. Варианты компонентов (кнопок, бейджей, полей) заданы enum-ами в файлах `*-variations.ts`.
- **Адаптивность** — брейкпоинты 1024 px (планшет) и 640 px (мобильный) в [src/shared/constants/breakpoints.ts](src/shared/constants/breakpoints.ts) и хук `useMediaQuery`.

### Роутинг

- **React Router 7** (`createBrowserRouter`) — вложенные маршруты, guard-обёртки для гостей и авторизованных, общий `AppLayout` с навбаром. Шаг формы карточки хранится в query-параметре `?step=`, так что работает кнопка «назад» браузера; открыть сразу `preview` или `confirm` без валидной формы нельзя — компонент вернёт на `edit`.

### Формы

- **React Hook Form 7** — один `useForm` на все три шага, общий `FormProvider`, валидация в режиме `onChange`.
- **react-datepicker** — выбор дедлайна.
- **react-images-uploading** — загрузка изображений с превью (png, jpg, jpeg, svg, webp).

### Графики

- **Recharts 3** — area-график динамики курса. Компонент загружается через `React.lazy` и не попадает в основной бандл, пока пользователь не выберет валюту ([src/shared/ui/line-chart/index.tsx](src/shared/ui/line-chart/index.tsx)).

### Моки

- **MSW 3** — Service Worker (`public/mockServiceWorker.js`) перехватывает запросы авторизации в браузере. Код приложения ходит обычным `fetch` и не знает, что сервер замокан.

## Структура

Проект разложен по слоям [Feature-Sliced Design](https://feature-sliced.design); слой импортирует только из слоёв ниже себя.

```
src/
├── app/        точка входа, роутер, guard-ы, layout, глобальные стили
├── pages/      страницы: auth, rates, cards
├── widgets/    составные блоки страниц: nav-bar
├── features/   сценарии пользователя
│   ├── auth/       вход, выход, восстановление сессии
│   ├── rates/      загрузка курсов, таблица, график, периоды
│   └── cards/      пошаговое создание карточки
├── entities/   доменные модели
│   ├── user/       тип пользователя
│   ├── rate/       типы курсов, расчёт продажи/покупки, история, флаги
│   └── card/       поля формы, опции селектов, форма и просмотр карточки
└── shared/     UI-кит, константы, хуки, моки MSW
```

Внутри слайса: `api/` — запросы, `model/` — типы и логика без UI, `lib/` — утилиты, `ui/` — компоненты. Наружу слайс отдаёт только то, что реэкспортирует его `index.ts`.
