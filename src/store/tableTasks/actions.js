import moment from 'moment'
// export const GET_NEW_TASKS = 'GET_NEW_TASKS';
export const DELETE_ROW_TASK = 'DELETE_ROW_TASK';
export const GENERATE_NEW_TASKS = 'GENERATE_NEW_TASKS';
export const GET_NEW_TASK = 'GET_NEW_TASK'

const dayInToday = parseInt(moment(Date.now()).format('D'))
const monthInToday = parseInt(moment(Date.now()).format('Mo')) - 1

const randomArrTasks = [
  {
    number: 1,
    nameTask: 'test task',
    timeStart: new Date(2019, monthInToday, dayInToday, 2, 0, 40),
    timeEnd: new Date(2019, monthInToday, dayInToday, 2, 10, 40),
    timeSpend: new Date(2019, monthInToday, dayInToday, 2, 10, 40) - new Date(2019, monthInToday, dayInToday, 2, 0, 40),
  },
  {
    number: 2,
    nameTask: 'test task',
    timeStart: new Date(2019, monthInToday, dayInToday, 2, 15, 40),
    timeEnd: new Date(2019, monthInToday, dayInToday, 2, 20, 40),
    timeSpend: new Date(2019, monthInToday, dayInToday, 2, 20, 40) - new Date(2019, monthInToday, dayInToday, 2, 15, 40),
  },
  {
    number: 3,
    nameTask: 'test task',
    timeStart: new Date(2019, monthInToday, dayInToday, 2, 22, 40),
    timeEnd: new Date(2019, monthInToday, dayInToday, 2, 33, 40),
    timeSpend: new Date(2019, monthInToday, dayInToday, 2, 33, 40) - new Date(2019, monthInToday, dayInToday, 2, 22, 40),
  },
  {
    number: 4,
    nameTask: 'test task',
    timeStart: new Date(2019, monthInToday, dayInToday, 2, 35, 40),
    timeEnd: new Date(2019, monthInToday, dayInToday, 3, 45, 40),
    timeSpend: new Date(2019, monthInToday, dayInToday, 3, 45, 40) - new Date(2019, monthInToday, dayInToday, 2, 35, 40),
  },
  {
    number: 5,
    nameTask: 'test task',
    timeStart: new Date(2019, 10, dayInToday, 3, 46, 40),
    timeEnd: new Date(2019, 10, dayInToday, 3, 54, 40),
    timeSpend: new Date(2019, 10, dayInToday, 3, 54, 40) - new Date(2019, 10, dayInToday, 3, 46, 40),
  },
  {
    number: 6,
    nameTask: 'test task',
    timeStart: new Date(2019, monthInToday, dayInToday, 3, 55, 40),
    timeEnd: new Date(2019, monthInToday, dayInToday, 4, 20, 40),
    timeSpend: new Date(2019, monthInToday, dayInToday, 4, 20, 40) - new Date(2019, monthInToday, dayInToday, 3, 55, 40),
  },
  {
    number: 7,
    nameTask: 'test task',
    timeStart: new Date(2019, monthInToday, dayInToday, 6, 20, 40),
    timeEnd: new Date(2019, monthInToday, dayInToday, 8, 5, 40),
    timeSpend: new Date(2019, monthInToday, dayInToday, 8, 5, 40) - new Date(2019, monthInToday, dayInToday, 6, 20, 40),
  },
  {
    number: 8,
    nameTask: 'test task',
    timeStart: new Date(2019, monthInToday, dayInToday, 9, 6, 40),
    timeEnd: new Date(2019, monthInToday, dayInToday, 9, 22, 40),
    timeSpend: new Date(2019, monthInToday, dayInToday, 9, 22, 40) - new Date(2019, monthInToday, dayInToday, 9, 6, 40),
  },
  {
    number: 9,
    nameTask: 'test task',
    timeStart: new Date(2019, monthInToday, dayInToday, 10, 0, 40),
    timeEnd: new Date(2019, monthInToday, dayInToday, 10, 10, 40),
    timeSpend: new Date(2019, monthInToday, dayInToday, 10, 10, 40) - new Date(2019, monthInToday, dayInToday, 10, 0, 40),
  },
  {
    number: 10,
    nameTask: 'test task',
    timeStart: new Date(2019, 10, dayInToday, 11, 5, 40),
    timeEnd: new Date(2019, 10, dayInToday, 11, 10, 40),
    timeSpend: new Date(2019, 10, dayInToday, 11, 10, 40) - new Date(2019, 10, dayInToday, 11, 5, 40),
  },
  {
    number: 11,
    nameTask: 'test task',
    timeStart: new Date(2019, monthInToday, dayInToday, 11, 15, 40),
    timeEnd: new Date(2019, monthInToday, dayInToday, 11, 17, 40),
    timeSpend: new Date(2019, monthInToday, dayInToday, 11, 17, 40) - new Date(2019, monthInToday, dayInToday, 11, 15, 40),
  },
  {
    number: 12,
    nameTask: 'test task',
    timeStart: new Date(2019, monthInToday, dayInToday, 11, 44, 40),
    timeEnd: new Date(2019, monthInToday, dayInToday, 11, 55, 40),
    timeSpend: new Date(2019, monthInToday, dayInToday, 11, 55, 40) - new Date(2019, monthInToday, dayInToday, 11, 44, 40),
  },
  {
    number: 13,
    nameTask: 'test task',
    timeStart: new Date(2019, monthInToday, dayInToday, 12, 0, 0),
    timeEnd: new Date(2019, monthInToday, dayInToday, 12, 33, 0),
    timeSpend: new Date(2019, monthInToday, dayInToday, 12, 33, 0) - new Date(2019, monthInToday, dayInToday, 12, 0, 0),
  },
  {
    number: 14,
    nameTask: 'test task',
    timeStart: new Date(2019, monthInToday, dayInToday, 12, 40, 0),
    timeEnd: new Date(2019, monthInToday, dayInToday, 13, 22, 0),
    timeSpend: new Date(2019, monthInToday, dayInToday, 13, 22, 0) - new Date(2019, monthInToday, dayInToday, 12, 40, 0),
  }
]

export const deleteRowTask = (index) => ({
  type: DELETE_ROW_TASK,
  payload: index,
})

export const generateNewTasks = () => ({
  type: GENERATE_NEW_TASKS,
  payload: randomArrTasks,
})

export const getNewTask = (task) => ({
  type: GET_NEW_TASK,
  payload: task,
})



