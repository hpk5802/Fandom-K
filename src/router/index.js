import App from 'pages/App';
import Components from 'pages/Components';
import ModalComponent from 'pages/ModalComponent';

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
];

export default routes;
