import ApiTest from 'pages/ApiTest';
import App from 'pages/App';
import Components from 'pages/Components';

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
];

export default routes;
