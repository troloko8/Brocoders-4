import moment from 'moment';
import { createData } from './Chart';

const dayInToday = parseInt(moment(Date.now()).format('D'))
const monthInToday = parseInt(moment(Date.now()).format('M')) - 1

let props = {
  rows: [
    {
      number: 1,
      nameTask: 'test task',
      timeStart: new Date(2019, monthInToday, dayInToday, 11, 0, 0),
      timeEnd: new Date(2019, monthInToday, dayInToday, 11, 33, 0),
      timeSpend: new Date(2019, monthInToday, dayInToday, 11, 33, 0) - new Date(2019, monthInToday, dayInToday, 11, 0, 0),
    },
    {
      number: 2,
      nameTask: 'test task',
      timeStart: new Date(2019, monthInToday, dayInToday, 12, 40, 0),
      timeEnd: new Date(2019, monthInToday, dayInToday, 13, 22, 0),
      timeSpend: new Date(2019, monthInToday, dayInToday, 13, 22, 0) - new Date(2019, monthInToday, dayInToday, 12, 40, 0),
    },
    {
      number: 3,
      nameTask: 'test task',
      timeStart: new Date(2019, monthInToday, dayInToday, 16, 0, 0),
      timeEnd: new Date(2019, monthInToday, dayInToday, 16, 8, 0),
      timeSpend: new Date(2019, monthInToday, dayInToday, 16, 8, 0) - new Date(2019, monthInToday, dayInToday, 16, 0, 0),
    },
    {
      number: 4,
      nameTask: 'test task',
      timeStart: new Date(2019, monthInToday, dayInToday, 16, 11, 0),
      timeEnd: new Date(2019, monthInToday, dayInToday, 16, 22, 0),
      timeSpend: new Date(2019, monthInToday, dayInToday, 16, 22, 0) - new Date(2019, monthInToday, dayInToday, 16, 11, 0),
    },
    {
      number: 5,
      nameTask: 'test task',
      timeStart: new Date(2019, monthInToday, dayInToday, 16, 45, 0),
      timeEnd: new Date(2019, monthInToday, dayInToday, 16, 55, 0),
      timeSpend: new Date(2019, monthInToday, dayInToday, 16, 55, 0) - new Date(2019, monthInToday, dayInToday, 16, 45, 0),
    },
  ]
}
let arr = createData(props)

describe('arr length', () => {
  it('arr length', () => {
    expect(arr.length).toBe(24)
  })

  it('write hours', () => {
    for (let i = 0; i < 24; i++) {
      expect(arr[i].h).toBe(i)
    }
  })

  it('minutes not bigger then 60', () => {
    for (let i = 0; i < 24; i++) {

      const minutes = () => {
        return arr[i].minutes <= 60 ? true : false
      }

      expect(minutes()).toBe(true)
    }
  })

  it('correct add hour and minutes', () => {
    const hourStart = parseInt
      (moment(props.rows[0].timeStart)
        .format('H'))
    expect(arr[11].h)
      .toBe(11)
    expect(arr[hourStart].minutes)
      .toBe(33)
  })

  it('correct add hour and minutes if time spent is more then 60', () => {
    expect(arr[12].minutes)
      .toBe(20) // 33(c прошлего теста) + 20(того времени что этот тест длился в этом часу)
    expect(arr[13].minutes)
      .toBe(22)
  })

  it('correct addition of minutes for several tasks running at 1 oclock', () => {
    expect(arr[16].minutes)
      .toBe(29) //16: 00 - 16: 08, 16: 11 - 16: 22, 16: 45 - 16: 55
  })
})