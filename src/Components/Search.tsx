import { Box, Grid, InputBase } from '@mui/material';
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import banner from './../assets/Images/banner.jpg'

function Search() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tags = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Breakfast' },
    { id: 3, name: 'Lunch' },
    { id: 4, name: 'Dinner' },
    { id: 5, name: 'Snacks' },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', mt: 4,
        flexDirection: 'column',
        px: { xs: '70px', md: '100px' }
    }}>

      {/* Banner */}
      <Box
        component="img"
        sx={{
          width: '100%',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
        alt="logo"
        src={banner}
      />

      {/* Input Text Field */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          p: 1,
          borderRadius: '12px',
          mt: '-20px',
          mx: '25%',
          pl: 3,
          width: '50%'
        }}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <InputBase
          value=""
          type='text'
          placeholder='Search'
          sx={{ ml: '2', '& input': { px: 2 } }}
        />
      </Box>

      {/* Filter tags */}
      <Grid container justifyContent="center" sx={{ mt: 3 }}>
        {tags.map((item, index) => (
          <Grid item key={item.id} sx={{ px: 2 }}>
            <Box
              onClick={() => { setActiveIndex(index) }}
              sx={{
                backgroundColor: index === activeIndex ? '#e55039' : 'transparent',
                color: index === activeIndex ? '#fff' : '#000',
                px: 2,
                py: 1,
                borderRadius: '20px',
                cursor: 'pointer',
                mx: 1,
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': { transform: 'scale(1.1)', transition: 'all 100ms ease-in-out' },
              }}
            >
              {item.name}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Search