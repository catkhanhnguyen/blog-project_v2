import { Box, Fab } from '@mui/material'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const TopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
      }}
    >
      <Fab
        aria-label="scroll-to-top"
        onClick={handleScrollToTop}
        sx={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: '#e55039',
          },
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </Fab>
    </Box>
  );
};

export default TopButton;
