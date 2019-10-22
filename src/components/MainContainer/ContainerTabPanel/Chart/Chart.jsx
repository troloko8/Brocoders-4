import React, { useState } from 'react';
import {
  ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip
} from 'recharts';
import moment from 'moment';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import { styled } from '@material-ui/styles';
import { generateNewTasks } from '../../../../store/tableTasks/actions'
import PropTypes from 'prop-types'

const blue900 = blue[900]

const ButtonGenerate = styled(Button)({
  color: blue900,
  backgroundColor: 'white',
  boxShadow: '0 0  5px -1px grey',
  margin: '20px 50%',
})

const Chart = (props) => {
  let arr = []

  for (let i = 0; i < 24; i++) {
    arr.push({
      h: i,
      minutes: 0,
      maxMinutes: 60
    })
  }

  const createChartMinutesOnHour = (props, arr) => {
    for (let x = 0; x < props.rows.length; x++) {

      let hourStart = parseInt(moment(props.rows[x].timeStart).format('H'))
      let hourEnd = parseInt(moment(props.rows[x].timeEnd).format('H'))
      let hourStartMinutes = parseInt(moment(props.rows[x].timeStart).format('m'))
      let hourEndMinutes = parseInt(moment(props.rows[x].timeEnd).format('m'))
      let timeSpend = moment.duration(moment(props.rows[x].timeEnd).diff(moment(props.rows[x].timeStart))).asMinutes() - ((60 - hourStartMinutes) + hourEndMinutes)

      if (hourStart === hourEnd) {
        arr[hourStart].minutes += (hourEndMinutes - hourStartMinutes)
      } else {
        arr[hourStart].minutes += (60 - parseInt(moment(props.rows[x].timeStart).format('m')))
        arr[hourEnd].minutes += parseInt(moment(props.rows[x].timeEnd).format('m'))
      }
      if (hourEnd - hourStart > 1) {
        for (let i = hourStart + 1; i < hourEnd; i++) {
          arr[i].minutes = timeSpend > 60 ? 60 : timeSpend
          timeSpend -= arr[i].minutes
        }
      }
    }
  }

  createChartMinutesOnHour(props, arr)

  return (
    <div>
      <ComposedChart width={1000} height={350} data={arr} margin={{ top: 50, right: 0, bottom: 0, left: 0 }}>
        <XAxis dataKey="h" />
        <YAxis dataKey="maxMinutes" />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Tooltip />
        <Bar dataKey="minutes" barSize={20} fill="#413ea0" />
      </ComposedChart >
      <ButtonGenerate onClick={() => props.generateNewTasks()}>generate</ButtonGenerate>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    rows: state.tableTasks
  }
}

const mapDispatchToProps = {
  generateNewTasks
}

Chart.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(Chart)
