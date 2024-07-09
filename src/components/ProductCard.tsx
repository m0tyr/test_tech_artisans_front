"use client"
import { Card, CardContent, Typography, CardActions, Button, Rating, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function ProductCard() {
  const theme = useTheme();

  return (
    <Card sx={{ minWidth: 275, maxWidth: 355, maxHeight: 175 }}>
    <CardContent>
      <Typography variant="h5" component="div">
        benevolent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Stack direction="row" className=' justify-between items-center' >
      <Rating name="disabled" value={2} disabled />
      <Button variant="contained">Add to Cart</Button>
      </Stack>
    </CardContent>
  </Card>
  );
}