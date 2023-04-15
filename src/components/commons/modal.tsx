import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

export interface GeneralModalProps {
  headerText: string;
  bodyText: string;
  buttonText: string;
  onConfirm: () => void;
  onCancel: () => void;
  isModalOpen: boolean;
  onClose: () => void;
}

export interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const GeneralModal = ({
  isModalOpen,
  onClose,
  headerText,
  bodyText,
  buttonText,
  onConfirm,
  onCancel,
}: GeneralModalProps) => {
  return (
    <Modal isOpen={isModalOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{headerText}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{bodyText}</ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onConfirm}>
            {buttonText}
          </Button>
          <Button variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const DeleteModal = (props: ModalProps) => {
  return (
    <GeneralModal
      {...props}
      headerText="Delete project"
      bodyText="Are you sure you want to delete this project?"
      buttonText="Delete"
    />
  );
};

export { DeleteModal };

export default GeneralModal;
