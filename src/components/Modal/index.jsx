import { AnimatePresence } from 'framer-motion';
import { ModalOverlay, ModalContainer, CloseButton } from './styles';
import { FaTimes } from 'react-icons/fa';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: "-50px", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

export default function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <ModalContainer
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro do modal
          >
            <CloseButton onClick={onClose}>
              <FaTimes />
            </CloseButton>
            {children}
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
}
