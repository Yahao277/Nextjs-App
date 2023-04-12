// @ts-nocheck
/* eslint-disable unused-imports/no-unused-vars */
import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

export type IModalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onClearFilter: () => void;
};

const FilterModal = ({
  isOpen,
  onOpen,
  onClose,
  onClearFilter,
}: IModalProps) => {
  const [checked, setChecked] = React.useState(false);
  const [findValue, setFindValue] = React.useState('');
  const [replaceValue, setReplaceValue] = React.useState('');

  const handleFind = () => {
    console.log('find', findValue);
    onClose();
  };

  const handleReplace = () => {
    console.log('replace', replaceValue);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Find And Replace</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              variant="outline"
              placeholder="Find"
              value={findValue}
              onChange={(e) => setFindValue(e.target.value)}
            />
            <hr />
            <Checkbox
              isChecked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            >
              Enable replace
            </Checkbox>
            <Input
              variant="outline"
              disabled={!checked}
              placeholder="Replace"
              value={replaceValue}
              onChange={(e) => setReplaceValue(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={1} onClick={handleFind} size={'sm'}>
              Find
            </Button>
            <Button variant="ghost" size={'sm'} onClick={onClearFilter}>
              Clear Filter
            </Button>
            <Button
              colorScheme="blue"
              mr={1}
              onClick={handleReplace}
              size={'sm'}
              isDisabled={!checked}
            >
              Replace
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterModal;
