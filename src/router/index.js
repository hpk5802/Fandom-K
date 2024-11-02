import App from 'pages/App';
import Components from 'pages/Components';
import ModalComponent from 'pages/ModalComponent';
import ListPage from 'pages/ListPage';
import LandingPage from 'pages/Landing';
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
    path: '/modal-component',
    element: <ModalComponent />,
  },
  {
    path: '/list-component',
    element: <ListPage />,
  },
  {
    path: '/landing',
    element: <LandingPage />,
  },
];

export default routes;
