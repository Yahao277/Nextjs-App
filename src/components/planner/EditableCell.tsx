// @ts-nocheck
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  EditableProps,
  IconButton,
  Input,
  useEditableControls,
} from '@chakra-ui/react';
import React from 'react';

const EditableCell = ({ ...props }: EditableProps) => {
  /* Here's a custom control */
  function EditableControls() {
    const { isEditing, getSubmitButtonProps, getCancelButtonProps } =
      useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="xs">
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <></>
    );
  }

  return (
    <Editable {...props}>
      <EditablePreview />
      {/* Here is the custom input */}
      <Input as={EditableInput} />
      <EditableControls />
    </Editable>
  );
};

export default EditableCell;
