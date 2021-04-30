import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MainGrid from './MainGrid';

export function Product() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" style={{ height: '100%', padding: '30px' }} >
          <MainGrid />
        </Typography>
      </Container>
    </React.Fragment>
  );
}
