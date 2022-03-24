import reactDom from 'react-dom'
import "./Modal.css";

export default function Modal({ children }) {
  return reactDom.createPortal(
      <div className='ModalBackground'>
          {children}
      </div>,
      document.getElementById('modal')
  );
}

export {Modal};
