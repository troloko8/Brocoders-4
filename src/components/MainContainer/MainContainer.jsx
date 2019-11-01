import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ContainerTabPanel from "./ContainerTabPanel/ContainerTabPanel";
import Stopwatch from "./Stopwatch/Stopwatch";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  mainContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

export default function MainContainer() {
  const clasess = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} className={clasess.mainContainer}>
        <Stopwatch />
        <Container>
          <ContainerTabPanel />
        </Container>
      </Container>
    </React.Fragment>
  );
}