import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles'
import blue from '@material-ui/core/colors/blue';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const blue900 = blue[900]
const useStyles = makeStyles({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    textAlign: 'center'
  },
  title: {
    color: blue900,
    alignText: 'center',
  },
  items: {
    textAlign: 'center',
    listStyleType: 'none',
    color: blue900,
    fontSize: '20px'
  },
  error: {
    textAlign: 'center',
    color: 'red',
  },
  button: {
    color: blue900,
    backgroundColor: 'white',
    boxShadow: '0 0  5px -1px grey',
  },
  link: {
    textDecoration: 'none'
  }
})

const TaskInfo = (props) => {
  const classes = useStyles();
  const numberTask = props.match.params.id
  const thisTask = props.rows.filter((el) => el.number === parseInt(numberTask))
  const taskInfo = thisTask[0]

  return (
    <div>
      {taskInfo !== undefined
        ?
        <div className={classes.container}>
          <h1 className={classes.title}>All info task №{taskInfo.number} name - {taskInfo.nameTask}</h1>
          <ul className={classes.items}>
            <li>timeStart: {moment(taskInfo.timeStart).format("HH:mm:ss")}</li>
            <li>timeEnd: {moment(taskInfo.timeEnd).format("HH:mm:ss")}</li>
            <li>timeSpend: {moment.utc(taskInfo.timeSpend).format("HH:mm:ss")}</li>
          </ul>
          <Link to="/" className={classes.link}>
            <Button className={classes.button}>
              back
        </Button>
          </Link>
        </div>
        :
        <div className={classes.error}>
          <div style={{ margin: '15px' }}> ERORR: this task not found</div>
          <Link to="/" className={classes.link}>
            <Button className={classes.button}>
              back
        </Button>
          </Link>
        </div>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    rows: state.tableTasks
  }
}

TaskInfo.propTypes = {
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
  }))
}

export default connect(mapStateToProps)(TaskInfo)