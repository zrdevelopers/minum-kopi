import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Index = ({ name, description, imageUrl }) => (
  <Card sx={{ maxWidth: 345, m: 2 }}>
    <CardMedia component="img" height="140" image={imageUrl} alt={name} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default Index;
