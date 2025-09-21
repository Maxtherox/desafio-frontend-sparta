import { AnimatePresence } from "framer-motion";
import { NotificationContainer, NotificationMessage } from "./styles";

const notificationVariants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const Notification = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <NotificationContainer
          variants={notificationVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={onClose}
        >
          <NotificationMessage>{message}</NotificationMessage>
        </NotificationContainer>
      )}
    </AnimatePresence>
  );
};

export default Notification;
