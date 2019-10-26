import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import { makeStyles } from '@material-ui/styles';
import Modal from '@material-ui/core/Modal';
import { getModalStatus } from './../../../../store/stopwatch/actions'
import PropTypes from 'prop-types';

const pink600 = pink[600]
const blue900 = blue[900]
const useStyles = makeStyles({
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

const ModalWindow = (props) => {
  const classes = useStyles()

  return (
    <Modal open={props.status} >
      <div className={classes.modal}>
        <h3 className={classes.modalTitle}> Empty task name</h3>
        <p className={classes.modalText}>You are truing close your task without name? enter the title and try again!</p>
        <Button
          onClick={() => props.getModalStatus(false)}
          className={classes.modalButton}
        >close</Button>
      </div>
    </Modal>
  )
}

const mapStateToProps = (state) => {
  return {
    status: state.stopwatch.status
  }
}

const mapDispatchToProps = {
  getModalStatus
}

ModalWindow.propTypes = {
  status: PropTypes.bool,
  getModalStatus: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow)