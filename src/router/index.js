import App from 'pages/App';
import Components from 'pages/Components';
import ModalComponent from 'pages/ModalComponent';
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
    path: '/landing',
    element: <LandingPage />,
  },
];

export default routes;
