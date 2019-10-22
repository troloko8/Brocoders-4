import React, { useState } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import { makeStyles } from '@material-ui/styles';
import { setRowTasks } from '../../../store/tableTasks/actions'
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';

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
  const strogeSaveTimeRinning = JSON.parse(localStorage.getItem('startTime'))
  const strogeTaskName = JSON.parse(localStorage.getItem('taskName'))

  const [runningTime, setRunningTime] = useState(0);
  const [timer, setTimer] = useState(Date.now());
  const [modalStatus, setModalStatus] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [numberTask, setNumberTask] = useState(1);
  const [buttonText, setButtonText] = useState('start');

  const changeTaskName = (e) => {
    setTaskName(e.target.value)
    localStorage.setItem('taskName', JSON.stringify(e.target.value))
  }

  const startStopwatche = (startTime) => {
    props.rows.length === 0 ? setNumberTask(1) : setNumberTask(props.rows[props.rows.length - 1].number + 1)
    setButtonText('stop')
    setTimer(setInterval(() => {
      setRunningTime(Date.now() - startTime);
    }))
    localStorage.setItem('startTime', JSON.stringify(startTime))
  }

  const stopStopwatch = () => {
    clearInterval(timer)
    setButtonText('start')
    setRunningTime(0)
    setTaskName('')
    localStorage.removeItem('startTime')
    localStorage.removeItem('taskName')
  };

  const hadleButtonStart = (e) => {
    taskName === "" ? setModalStatus(true) : setModalStatus(false)

    if (taskName !== "") {

      if (e.currentTarget.value === "start") {
        startStopwatche(Date.now())
        setTimeStart(Date.now())
      } else {
        stopStopwatch()

        localStorage.setItem('newTask', JSON.stringify({
          number: numberTask,
          nameTask: taskName,
          timeStart: timeStart,
          timeEnd: Date.now(),
          timeSpend: runningTime,
        }))
        // const newTask = {
        //   number: numberTask,
        //   nameTask: taskName,
        //   timeStart: timeStart,
        //   timeEnd: Date.now(),
        //   timeSpend: runningTime,
        // }

        props.setRowTasks()//newTask)
      }
    }
  }

  const handleModalClose = () => {
    setModalStatus(false)
  }

  window.onload = () => {
    if (strogeSaveTimeRinning !== null) {
      startStopwatche(strogeSaveTimeRinning)
      setTimeStart(strogeSaveTimeRinning)
      if (strogeTaskName !== null) setTaskName(strogeTaskName)
    }
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
        value={buttonText}
        onClick={hadleButtonStart}
      >
        {buttonText}
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
    rows: state.tableTasks
  }
}

const mapDispatchToProps = {
  setRowTasks,
}

Stopwatch.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number,
    nameTask: PropTypes.string,
    timeStart: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    timeEnd: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    timeSpend: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  }))
}

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch)