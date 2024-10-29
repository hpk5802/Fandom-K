import App from 'pages/App';
import Components from 'pages/Components';
import ModalComponent from 'pages/ModalComponent';
import ListPage from 'pages/ListPage';

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
];

export default routes;
