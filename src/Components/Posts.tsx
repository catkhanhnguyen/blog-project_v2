import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

function Posts({ posts }) {
  return (
    <Grid container spacing={3} mt={10} px={10}>
      {posts.map((post) => (
        <Grid item key={post.id} xs={12} md={6} lg={4} px={4} py={4}>
          <Card>
            <Box
              component="img"
              sx={{
                width: '100%',
                height: '250px',
                borderRadius: '8px',
                cursor: 'pointer',
                objectFit: 'cover',
              }}
              alt="card"
              src={post.image}
            />
            <CardContent>
              <Typography sx={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'left' }}>
                {post.name}
              </Typography>
              <Typography sx={{ textAlign: 'left' }}>
                {post.cookTimeMinutes} minutes cooking • Servings: {post.servings}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', mt: 2 }}>
                {post.mealType.map((type, index) => (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor: '#e55039',
                      color: 'white',
                      px: 1.5,
                      py: 1,
                      borderRadius: '15px',
                      fontSize: '14px',
                      textAlign: 'left', // Thêm textAlign để căn trái văn bản
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
                      fontSize: '14px',
                      textAlign: 'left', // Thêm textAlign để căn trái văn bản
                    }}>
                    {tag}
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Posts
