import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <>
      <Box
        position={"absolute"}
        left={"50%"}
        sx={{ transform: "translateX(-50%)" }}
      >
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
        />
      </Box>
    </>
  );
};

export default Spinner;
