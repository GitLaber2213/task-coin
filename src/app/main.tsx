import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './route'
import { worker } from '../shared'
import { AuthProvider } from '../features'
import { GlobalStyle } from './styles/global'

const enableMocking = async () => {
  return worker.start({
    onUnhandledFrame: 'bypass'
  });
};


enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <GlobalStyle />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>,
  );
});
