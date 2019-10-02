import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel'
import cyan from '@material-ui/core/colors/cyan';
import TableTasks from './TableTasks';
import Chart from './Chart';
import { connect } from 'react-redux';
import { setButtonText } from './../store/mainContainer/action'

const cyan500 = cyan[500]

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles({
  tabs: {
    background: cyan500
  },
  tab: {
    minWidth: '50%'
  }
});

function AllInfoTasks(props) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" component="div">
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab className={classes.tab} label="task log" {...a11yProps(0)} />
          <Tab className={classes.tab} label="task chart" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TableTasks />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Chart />
      </TabPanel>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    text: state.mainContainer.text,
  }
}

const mapDispatchToProps = {
  setButtonText,
}

export default connect(mapStateToProps, mapDispatchToProps)(AllInfoTasks)