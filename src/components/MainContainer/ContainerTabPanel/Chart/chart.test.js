import moment from 'moment';

let props = [
  {
    number: 1,
    nameTask: 'test task',
    timeStart: new Date(2019, 10, 10, 11, 0, 0),
    timeEnd: new Date(2019, 10, 10, 11, 33, 0),
    timeSpend: new Date(2019, 10, 10, 11, 33, 0) - new Date(2019, 10, 10, 11, 0, 0),
  },
  {
    number: 2,
    nameTask: 'test task',
    timeStart: new Date(2019, 10, 10, 12, 40, 0),
    timeEnd: new Date(2019, 10, 10, 13, 22, 0),
    timeSpend: new Date(2019, 10, 10, 13, 22, 0) - new Date(2019, 10, 10, 12, 40, 0),
  },
  {
    number: 3,
    nameTask: 'test task',
    timeStart: new Date(2019, 10, 10, 16, 0, 0),
    timeEnd: new Date(2019, 10, 10, 16, 8, 0),
    timeSpend: new Date(2019, 10, 10, 16, 8, 0) - new Date(2019, 10, 10, 16, 0, 0),
  },
  {
    number: 4,
    nameTask: 'test task',
    timeStart: new Date(2019, 10, 10, 16, 11, 0),
    timeEnd: new Date(2019, 10, 10, 16, 22, 0),
    timeSpend: new Date(2019, 10, 10, 16, 22, 0) - new Date(2019, 10, 10, 16, 11, 0),
  },
  {
    number: 5,
    nameTask: 'test task',
    timeStart: new Date(2019, 10, 10, 16, 45, 0),
    timeEnd: new Date(2019, 10, 10, 16, 55, 0),
    timeSpend: new Date(2019, 10, 10, 16, 55, 0) - new Date(2019, 10, 10, 16, 45, 0),
  },
]
let arr = []
for (let i = 0; i < 24; i++) {
  arr.push({
    h: i,
    minutes: 0,
    maxMinutes: 60
  })
}

const createChartMinutesOnHour = (props, arr) => {
  for (let x = 0; x < props.length; x++) {

    let hourStart = parseInt(moment(props[x].timeStart).format('H'))
    let hourEnd = parseInt(moment(props[x].timeEnd).format('H'))
    let hourStartMinutes = parseInt(moment(props[x].timeStart).format('m'))
    let hourEndMinutes = parseInt(moment(props[x].timeEnd).format('m'))
    let timeSpend = moment.duration(moment(props[x].timeEnd)
      .diff(moment(props[x].timeStart)))
      .asMinutes() - ((60 - hourStartMinutes) + hourEndMinutes)

    if (hourStart === hourEnd) {
      arr[hourStart].minutes += (hourEndMinutes - hourStartMinutes)
    } else {
      arr[hourStart].minutes += (60 - parseInt(moment(props[x].timeStart).format('m')))
      arr[hourEnd].minutes += parseInt(moment(props[x].timeEnd).format('m'))
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
  //   number: 1,
  //   nameTask: 'test task',
  //   timeStart: new Date(2019, 10, 10, 12, 0, 0),
  //   timeEnd: new Date(2019, 10, 10, 12, 33, 0),
  //   timeSpend: new Date(2019, 10, 10, 12, 33, 0) - new Date(2019, 10, 10, 12, 0, 0),

  it('correct add hour and minutes', () => {
    const hourStart = parseInt
      (moment(props[0].timeStart)
        .format('H'))
    expect(arr[11].h)
      .toBe(11)
    expect(arr[hourStart].minutes)
      .toBe(33)
  })

  //   number: 2,
  //   nameTask: 'test task',
  //   timeStart: new Date(2019, 10, 10, 12, 40, 0),
  //   timeEnd: new Date(2019, 10, 10, 13, 22, 0),
  //   timeSpend: new Date(2019, 10, 10, 12, 33, 0) - new Date(2019, 10, 10, 12, 0, 0),

  it('correct add hour and minutes if time spent is more then 60', () => {
    expect(arr[12].minutes)
      .toBe(20) // 33(c прошлего теста) + 20 (того времени что этот тест длился в этом часу)
    expect(arr[13].minutes)
      .toBe(22)
  })

  it('correct addition of minutes for several tasks running at 1 oclock', () => {
    expect(arr[16].minutes)
      .toBe(29) //16:00 - 16:08, 16:11 - 16:22, 16:45 - 16:55 
  })
})