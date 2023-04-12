import type { ButtonProps } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { BiDownload } from 'react-icons/bi';

const ButtonWithLoading = ({
  onButtonClick,
  variant = 'solid',
  colorScheme = 'blue',
  size = 'sm',
  mr = 4,
  leftIcon = <BiDownload />,
  ...props
}: ButtonProps & { onButtonClick: () => Promise<boolean> }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    console.log('ButtonWithLoading handleClick');
    setIsLoading(true);
    // setTimeout(() => setIsLoading(false), 5000);
    onButtonClick().then(() => {
      setIsLoading(false);
      console.log('ButtonWithLoading handleClick done');
    });
  };

  return (
    <Button
      {...props}
      variant={variant}
      colorScheme={colorScheme}
      size={size}
      mr={mr}
      id="interlinks"
      aria-label="Extract Interlinks"
      leftIcon={leftIcon}
      isLoading={isLoading}
      onClick={handleClick}
    >
      {props.children}
    </Button>
  );
};

export default ButtonWithLoading;
