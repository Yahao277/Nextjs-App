import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';

import useProjectContext from '@/contexts/project.context';

export type IModalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const BulkEditModal = ({ isOpen, onOpen, onClose }: IModalProps) => {
  const [keywords, setKeywords] = React.useState('');
  const { addBulkKeywords } = useProjectContext();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setKeywords(event.target.value);
  };

  const handleSave = () => {
    addBulkKeywords(keywords.split('\n').map((keyword) => ({ keyword })));
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              placeholder="Separate keywords (post) per line"
              value={keywords}
              onChange={handleChange}
              height="400px"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={1} onClick={handleSave} size={'sm'}>
              Save
            </Button>
            <Button variant="ghost" size={'sm'} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BulkEditModal;
