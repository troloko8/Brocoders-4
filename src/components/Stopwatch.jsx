import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import { makeStyles } from '@material-ui/styles';
import { setButtonText } from './../store/mainContainer/action'
import {
  getNameStopwatch,
  getTimeToStartStopwatch,
  getTimeToStopStopwatch,
  getTimeToSpendStopwatch
} from './../store/stopwatch/actions'
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import { rows } from './TableTasks';
import Modal from '@material-ui/core/Modal';

const pink600 = pink[600]
const blue900 = blue[900]

const useStyles = makeStyles({
  taskTimer: {
    borderRadius: "50%",
    boxShadow: '0 5px 10px 0px grey',
    width: '200px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    margin: '30px 0'
  },
  timer: {
    color: blue900,
    fontSize: '30px',
    margin: 'auto',
  },
  buttonStopOrStart: {
    color: blue900,
    boxShadow: '0 0  5px -1px grey',
    marginBottom: '30px'
  },
  taskContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  taskNameInput: {
    textAlignLast: 'center',
    color: blue900,
  },
  modal: {
    width: '70%',
    padding: '15px',
    background: 'white',
    height: '200px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50% , -50%)'
  },
  modalTitle: {
    color: pink600,
    fontSize: '20px',
    marginBottom: '15px'
  },
  modalText: {
    color: 'grey'
  },
  modalButton: {
    color: blue900,
    position: "absolute",
    right: '15px',
    bottom: '15px'
  }
})

const Stopwatch = (props) => {
  const classes = useStyles();

  const [runningTime, setRunningTime] = useState(0);
  const [timer, setTimer] = useState(Date.now());
  const [modalStatus, setModalStatus] = useState(false);
  const [taskName, setTaskName] = useState('');

  const changeTaskName = (e) => {
    setTaskName(e.target.value)
  }

  const handleClick = () => {
    const startTime = Date.now();

    setTimer(setInterval(() => {
      setRunningTime(Date.now() - startTime);
    }))
  }

  const handleReset = () => {
    clearInterval(timer)
    setRunningTime(0)
    setTaskName('')
  };

  const hadleButtonStart = (e) => {
    taskName === "" ? setModalStatus(true) : setModalStatus(false)

    if (taskName !== "") {
      if (e.currentTarget.value === "start") {
        handleClick()
        props.getTimeToStartStopwatch(moment(Date.now()).format('LTS'))
      } else {
        handleReset()
        props.getNameStopwatch(taskName)
        props.getTimeToStopStopwatch(moment(Date.now()).format('LTS'))
        props.getTimeToSpendStopwatch(moment.utc(runningTime).format("HH:mm:ss"))
        rows.push({
          nameTask: props.name,
          number: rows.length + 1,
          timeEnd: props.timeToStop,
          timeSpend: props.timeToSpend,
          timeStart: props.timeToStart,
          info: <Button>info</Button>,
          buttonDelete: <Button>Delete</Button>
        })
      }

      const toggleValue = (e.currentTarget.value === "start") ? "stop" : "start";
      props.setButtonText(toggleValue)
    }

  }


  const handleModalClose = () => {
    setModalStatus(false)
  }

  return (
    <div className={classes.taskContainer}>
      <TextField
        placeholder="Name of your task"
        inputProps={{ className: classes.taskNameInput }}
        margin="normal"
        onChange={changeTaskName}
        value={taskName}
      />
      <Box
        className={classes.taskTimer}
        children={
          <Box
            component="span"
            className={classes.timer}
          >{moment.utc(runningTime).format("HH:mm:ss")}</Box>}
      />
      <Button
        variant="text"
        className={classes.buttonStopOrStart}
        value={props.text}
        onClick={hadleButtonStart}
      >
        {props.text}
      </Button>
      <Modal open={modalStatus} >
        <div className={classes.modal}>
          <h3 className={classes.modalTitle}> Empty task name</h3>
          <p className={classes.modalText}>You are truing close your task without name? enter the title and try again!</p>
          <Button
            onClick={handleModalClose}
            className={classes.modalButton}
          >close</Button>
        </div>
      </Modal>
    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    text: state.mainContainer.text,
    name: state.stopwatch.name,
    timeToStart: state.stopwatch.timeToStart,
    timeToStop: state.stopwatch.timeToStop,
    timeToSpend: state.stopwatch.timeToSpend,
  }
}

const mapDispatchToProps = {
  setButtonText,
  getNameStopwatch,
  getTimeToStartStopwatch,
  getTimeToStopStopwatch,
  getTimeToSpendStopwatch
}

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch)