import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import { makeStyles } from '@material-ui/styles';
import { getNewTask } from '../../../store/tableTasks/actions'
import { setModalStatus } from '../../../store/stopwatch/actions'
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import PropTypes from 'prop-types';
import ModalWindow from './ModalWindow/ModalWindow'

const blue900 = blue[900]
const useStyles = makeStyles({
  boxTimer: {
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
})

localStorage.setItem('buttonText', 'start')

const Stopwatch = (props) => {
  const classes = useStyles();
  const strogeSaveTimeRinning = JSON.parse(localStorage.getItem('startTime'))
  const strogeTaskName = JSON.parse(localStorage.getItem('taskName'))
  const strogeButtonText = localStorage.getItem('buttonText', 'start')

  const [runningTime, setRunningTime] = useState(0);
  const [timer, setTimer] = useState(Date.now());
  const [taskName, setTaskName] = useState('');
  const [timeStart, setTimeStart] = useState('');
  const [numberTask, setNumberTask] = useState(1);

  const changeTaskName = (e) => {
    setTaskName(e.target.value)
    localStorage.setItem('taskName', JSON.stringify(e.target.value))
  }

  const startStopwatch = (startTime) => {
    if (props.rows.length !== 0) setNumberTask(props.rows[props.rows.length - 1].number + 1)
    setTimer(setInterval(() => {
      setRunningTime(Date.now() - startTime);
    }))
    setTimeStart(Date.now())
    localStorage.setItem('buttonText', 'stop')
    localStorage.setItem('startTime', JSON.stringify(startTime))
  }

  const stopStopwatch = () => {
    if (taskName === "") {
      props.setModalStatus(true)
    } else {
      clearInterval(timer)
      setRunningTime(0)
      setTaskName('')
      localStorage.setItem('buttonText', 'start')
      localStorage.removeItem('startTime')
      localStorage.removeItem('taskName')

      localStorage.setItem('newTask', JSON.stringify({
        number: numberTask,
        nameTask: taskName,
        timeStart: timeStart,
        timeEnd: Date.now(),
        timeSpend: runningTime,
      }))

      props.getNewTask()
    }
  };

  useEffect(() => {
    if (strogeSaveTimeRinning !== null) {
      startStopwatch(strogeSaveTimeRinning)
      setTimeStart(strogeSaveTimeRinning)
      if (strogeTaskName !== null) setTaskName(strogeTaskName)
    }
    return () => {
      clearInterval(timer)
    }
  }, [])

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
        className={classes.boxTimer}
        children={
          <Box
            component="span"
            className={classes.timer}
          >{moment.utc(runningTime).format("HH:mm:ss")}</Box>
        }
      />
      <Button
        variant="text"
        className={classes.buttonStopOrStart}
        value={strogeButtonText}
        onClick={
          (e) => {
            e.currentTarget.value === "start"
              ? startStopwatch(Date.now())
              : stopStopwatch()
          }
        }
      >
        {strogeButtonText}
      </Button>
      <ModalWindow />
    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    rows: state.tableTasks
  }
}

const mapDispatchToProps = {
  getNewTask,
  setModalStatus
}

Stopwatch.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number,
    nameTask: PropTypes.string,
    timeStart: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
    timeEnd: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
    timeSpend: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  })),
  getNewTask: PropTypes.func,
  setModalStatus: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch)