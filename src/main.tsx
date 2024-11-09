import { StrictMode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Main from './components/pages/Main.tsx';
import Layout from './components/layout/Layout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <Main /> }],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
