import ApiTest from 'pages/ApiTest';
import App from 'pages/App';
import Components from 'pages/Components';
import TestDonate from 'pages/TestDonate';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/components',
    element: <Components />,
  },
  {
    path: 'api',
    element: <ApiTest />,
  },
  {
    path: 'donate',
    element: <TestDonate />,
  },
];

export default routes;
