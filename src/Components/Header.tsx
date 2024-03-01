import React from 'react'
import { Box, Button, ButtonGroup, Grid, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { IoLogoYoutube } from "react-icons/io5"

function Header() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box
        component="img"
        sx={{
          height: 160,
          width: 160,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          cursor: 'pointer'
        }}
        alt="logo"
        src="https://img.freepik.com/premium-vector/food-recipes-blog-logo-template_142351-149.jpg?w=740"
      />

      {/* Navigation Links */}
      <Grid item sx={{ flexGrow: 1, fontSize: '16px' }}>
        <Grid container spacing={8} justifyContent="center" >

          {/* Home */}
          <Grid item
            sx={{
              cursor: 'pointer',
              fontWeight: 'normal',
              '&:hover': { fontWeight: 'bold' },
            }}
          >
            Home
          </Grid>

          {/* About Us */}
          <Grid item
            sx={{
              cursor: 'pointer',
              fontWeight: 'normal',
              '&:hover': { fontWeight: 'bold' },
            }}
          >
            About Us
          </Grid>
          
          {/* Contact */}
          <Grid item
            sx={{
              cursor: 'pointer',
              fontWeight: 'normal',
              '&:hover': { fontWeight: 'bold' },
            }}
          >
            Contact
          </Grid>
        </Grid>
      </Grid>


      {/* Subscribe Button */}
      <Button
      sx={{
        backgroundColor: '#f00', borderRadius: '9999px', color: '#fff', display: 'flex', alignItems: 'center'
      }} 
      >
        Subscribe <IoLogoYoutube />
      </Button>
    </Box>
  )
}

export default Header;
