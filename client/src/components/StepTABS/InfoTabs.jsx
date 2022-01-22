import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HackathonDetails from './HackathonDetails.jsx';
import HackathonDomain from './HackathonDomain.jsx';
import HackathonFAQS from './HackathonFAQS.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import InviteHackathon from './InviteHackathon.jsx';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function InfoTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: '100%' }}>
    <Navbar/>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Domains" {...a11yProps(1)} />
          <Tab label="Guidelines" {...a11yProps(2)} />
          <Tab label="Completed" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <HackathonDetails/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HackathonDomain/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HackathonFAQS/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <InviteHackathon/>
      </TabPanel>
    </Box>
  );
}