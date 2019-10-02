import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AllInfoTasks from "./AllInfoTasks";
import Stopwatch from "./Stopwatch";
import { connect } from 'react-redux';
import { setButtonText } from './../store/mainContainer/action'

function MainContainer(props) {

  // const changeButtonText = (e) => {
  //   let toggleValue = (e.currentTarget.value === "start") ? "stop" : "start";
  //   props.setButtonText(toggleValue)
  // }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Stopwatch />
        <Container>
          <AllInfoTasks />
        </Container>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    text: state.mainContainer.text,
  }
}

const mapDispatchToProps = {
  setButtonText,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
