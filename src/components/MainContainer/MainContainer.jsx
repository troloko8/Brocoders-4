import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ContainerTabPanel from "./ContainerTabPanel/ContainerTabPanel";
import Stopwatch from "./Stopwatch/Stopwatch";

export default function MainContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Stopwatch />
        <Container>
          <ContainerTabPanel />
        </Container>
      </Container>
    </React.Fragment>
  );
}