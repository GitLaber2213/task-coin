import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './route'
import { worker } from '../shared'
import { AuthProvider } from '../features'

const enableMocking = async () => {
  return worker.start({
    onUnhandledFrame: 'bypass'
  });
};


enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>,
  );
});
