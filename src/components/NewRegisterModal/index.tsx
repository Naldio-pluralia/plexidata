import Modal from 'react-modal'
import { Register } from "../Register";


export function NewRegisterModal({ isOpen, onRequestClose}: any) {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src="/assets/close.svg" alt="Fechar Modal" />
      </button>

      <Register close={onRequestClose} />
    </Modal>
  )
};

