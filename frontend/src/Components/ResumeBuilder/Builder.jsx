import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export const Builder = () => {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        
      </Container>
    </>
  )
}
