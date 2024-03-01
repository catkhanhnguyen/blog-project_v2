import { Box, Typography } from '@mui/material';
import React from 'react';

function ContentPost({ post }) {
  return (
    <Box sx={{ fontFamily: 'serif', mx: { xs: '70px', md: '100px' }, mt: 4, mb: 10 }}>
      <Typography mt={5} textAlign="center" sx={{ fontFamily: 'serif', fontSize: '40px' }}>Ingredients</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', mt: 4, fontFamily: 'serif' }}>
        {post.ingredients.map((ingr, index) => (
          <Typography key={index} textAlign="center">• {ingr}</Typography>
        ))}
      </Box>

      <Box sx={{ bgcolor: 'black', color: 'white', borderRadius: '16px', mt: 8 }}>
        <Typography mt={8} textAlign="center" pt={4} sx={{ fontFamily: 'serif', fontSize: '40px' }}>Instructions</Typography>
        <Box sx={{ pb: 8, mt: 4 }}>
          {post.instructions.map((inst, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '16px', py: 1, ml: 4 }}>
              <Box sx={{ bgcolor: 'white', color: 'black', borderRadius: '12px', px: 1, py: 0.5, fontFamily: 'serif', fontSize: '16px' }}>
                {index + 1}
              </Box>
              <Typography sx={{ textAlign: 'left', fontFamily: 'serif', fontSize: '16px' }}>{inst}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Typography mt={10} sx={{fontFamily: 'serif', fontSize: '40px'}} textAlign="center">Enjoy your meal!</Typography>
    </Box>
  );
}

export default ContentPost;
