import Components from 'pages/Components';
import ModalComponent from 'pages/ModalComponent';
import LandingPage from 'pages/Landing';
const routes = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/components',
    element: <Components />,
  },
  {
    path: '/modal-component',
    element: <ModalComponent />,
  },
];

export default routes;
