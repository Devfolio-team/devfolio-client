import ReactDOM from 'react-dom';

const Portal = ({ children, id }) => {
  const el = document.getElementById(id);
  return ReactDOM.createPortal(children, el);
};

export default Portal;
