import React from 'react';
import {
  ResponsiveContainer, ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip
} from 'recharts';
import moment from 'moment';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import { generateNewTasks } from '../../../../store/tableTasks/actions'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles';
import { withGetScreen } from 'react-getscreen'

const blue900 = blue[900]

const useStyles = makeStyles({
  buttonGenerate: {
    color: blue900,
    backgroundColor: 'white',
    boxShadow: '0 0  5px -1px grey',
    margin: '20px 0  20px 0',
    alignSelf: 'flex-end'
  },
  chartContainer: {
    width: '100%',
    height: '400px',
    display: 'flex',
    flexDirection: "column"
  }

})

const transformTime = (time, format) => {
  return parseInt(moment(time).format(format))
}

export const createData = (props) => {
  const dayInToday = parseInt(moment(Date.now()).format('D'))
  let arr = []
  for (let i = 0; i < 24; i++) {
    arr.push({
      h: i,
      minutes: 0,
      maxMinutes: 60
    })
  }

  for (let x = 0; x < props.rows.length; x++) {

    if (dayInToday === transformTime(props.rows[x].timeStart, 'D')) { // условие для того что бы в график не проходили таски с прошлых дней

      let hourStart = transformTime(props.rows[x].timeStart, 'H'),
        hourEnd = transformTime(props.rows[x].timeEnd, 'H'),
        hourStartMinutes = transformTime(props.rows[x].timeStart, 'm'),
        hourEndMinutes = transformTime(props.rows[x].timeEnd, 'm'),
        allTimeSpend = moment
          .duration(moment(props.rows[x].timeEnd)
            .diff(moment(props.rows[x].timeStart)))
          .asMinutes() - ((60 - hourStartMinutes) + hourEndMinutes)

      if (hourStart === hourEnd) {
        arr[hourStart].minutes += (hourEndMinutes - hourStartMinutes)
      } else {
        arr[hourStart].minutes += (60 - transformTime(props.rows[x].timeStart, 'm'))
        arr[hourEnd].minutes += parseInt(transformTime(props.rows[x].timeEnd, 'm'))
      }
      // условие которое срабатывает если задание покрывает 3 и более часов 
      if (hourEnd - hourStart > 1) {
        for (let i = hourStart + 1; i < hourEnd; i++) {
          arr[i].minutes = allTimeSpend > 60 ? 60 : allTimeSpend
          allTimeSpend -= arr[i].minutes
        }
      }
    }
  }

  return arr
}

const Chart = (props) => {
  const classes = useStyles();
  const innerWidth = window.innerWidth

  return (
    <div className={classes.chartContainer}>
      <ResponsiveContainer width={'100%'} height={400}>
        <ComposedChart data={createData(props)}
          margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
          layout={innerWidth <= 480 ? "vertical" : 'horizontal'} >
          <XAxis
            dataKey={innerWidth <= 480 ? "maxMinutes" : 'h'}
            type="number"
            tickCount={innerWidth <= 480 ? 5 : 24} />
          />
            <YAxis
            dataKey={innerWidth <= 480 ? "h" : 'maxMinutes'}
            type="number"
            tickCount={innerWidth <= 480 ? 24 : 5} />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Tooltip />
          <Bar dataKey="minutes" barSize={20} fill="#413ea0" />
        </ComposedChart >
      </ResponsiveContainer>
      <Button
        className={classes.buttonGenerate}
        onClick={() => props.generateNewTasks()}>
        generate
          </Button>
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
  generateNewTasks: PropTypes.func
}
withGetScreen(Chart)
export default connect(mapStateToProps, mapDispatchToProps)(Chart)
