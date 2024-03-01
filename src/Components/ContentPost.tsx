import { Box, Typography } from '@mui/material'
import React from 'react'

function ContentPost({ post }) {
  return (
    <Box sx={{ fontFamily: 'serif', mx: { xs: '70px', md: '100px' }, mt: 4, mb: 24 }}>
      <Typography variant="h2" mt={5} textAlign="center" sx={{fontFamily: 'serif'}}>Ingredients</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', mt: 4, fontFamily: 'serif' }}>
        {post.ingredients.map((ingr, index) => (
          <Typography key={index} textAlign="center">• {ingr}</Typography>
        ))}
      </Box>

      <Box sx={{ bgcolor: 'black', color: 'white', borderRadius: '16px', mt: 8 }}>
        <Typography variant="h2" mt={8} textAlign="center" pt={4}>Instructions</Typography>
        <Box sx={{ pb: 8, mt: 4 }}>
          {post.instructions.map((inst, index) => (
            <Typography key={index} sx={{ px: 8, py: 2 }}>
              <span sx={{ bgcolor: 'white', color: 'black', px: 2, py: 1, borderRadius: '12px', mr: 4 }}>
                {index+1}
              </span> {inst}
            </Typography>
          ))}
        </Box>
      </Box>

      <Typography variant="h2" mt={24} textAlign="center">Enjoy your meal!</Typography>
    </Box>
  )
}

export default ContentPost