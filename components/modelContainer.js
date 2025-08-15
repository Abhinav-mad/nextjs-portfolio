import { forwardRef } from 'react';
import { Box, Spinner } from '@chakra-ui/react';


// Spinner for when the model is loading
export const ModelSpinner = () => (
    <Spinner
      size="xl"
      position="absolute"
      left="50%"
      top="50%"
      ml="calc(0px - var(--spinner-size) / 2)"
      mt="calc(0px - var(--spinner-size))"
    />
  );


// Container for the 3D model
// eslint-disable-next-line react/display-name
export const ModelContainer = forwardRef(({ children }, ref) => (
    <Box
    ref={ref}
    m="auto"
    mt={['-40px', '-60px', '-100px']} // Adjust margins
    mb={['-20px', '-40px', '-60px']}
    w={[80, 480, 640]}  // Increase width
    h={[280, 480, 640]}  // Increase height
    position="relative"
    >
      {children}
    </Box>
  ));
  
  
  const Loader = () => (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  );
  
  export default Loader;