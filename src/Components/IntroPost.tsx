import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function IntroPost({ post }) {
  const navigate = useNavigate()

  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`)
  }

  return (
    <Box
      onClick={() => handlePostClick(post.id)}
      sx={{
        mx: { xs: '70px', md: '100px' },
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
        gap: '16px',
        mt: 4,
        cursor: 'pointer',
        backgroundColor: 'black',
        p: 4,
        borderRadius: '20px',
        boxShadow: 'md',
        fontFamily: 'serif',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box
        component="img"
        sx={{
          height: '100%',
          width: '50%',
          borderRadius: '8px',
          cursor: 'pointer',
          objectFit: 'cover',
        }}
        alt="card"
        src={post.image}
      />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        ml: 4
      }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {post.mealType.map((type, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: '#e55039',
                color: 'white',
                px: 1.5,
                py: 1,
                borderRadius: '15px',
                fontSize: '16px',
              }}>
              {type}
            </Box>
          ))}
          {post.tags.map((tag, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: '#e55039',
                color: 'white',
                px: 1.5,
                py: 1,
                borderRadius: '15px',
                fontSize: '16px',
              }}>
              {tag}
            </Box>
          ))}
        </Box>

        {/* Title */}
        <Typography
          sx={{
            color: 'white',
            mt: 4,
            fontSize: '40px',
            fontFamily: 'serif',
            textAlign: 'left', // Add this line
          }}>
          {post.name}
        </Typography>

        <Grid container spacing={2} mt={3}>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ color: '#a5b1c2', textAlign: 'left' }}>Preparation Time: <span style={{ color: 'white' }}>{post.prepTimeMinutes} minutes</span></Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ color: '#a5b1c2', textAlign: 'left' }}>Cooking Time: <span style={{ color: 'white' }}>{post.cookTimeMinutes} minutes</span></Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ color: '#a5b1c2', textAlign: 'left' }}>Servings: <span style={{ color: 'white' }}>{post.servings}</span></Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ color: '#a5b1c2', textAlign: 'left' }}>Difficulty: <span style={{ color: 'white' }}>{post.difficulty}</span></Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ color: '#a5b1c2', textAlign: 'left' }}>Cuisine: <span style={{ color: 'white' }}>{post.cuisine}</span></Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default IntroPost;
