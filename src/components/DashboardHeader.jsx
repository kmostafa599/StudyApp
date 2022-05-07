import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Box, Fade, List,  ListItemAvatar, ListItemText, Popper } from '@mui/material';
import Content from './Content';
import TopTitle from '../elements/TopTitle';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { doc, updateDoc} from 'firebase/firestore'
import { db } from '../firebase';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
const people = [
  {
    id: 1,
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    team: 'student',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    bonus: "30%",
    votes: "5",
    currentBonus: "720",
    newRequest: true,
    voting: false,
    finished: false,
    declined: false,
  },
  {
    id: 2,
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    team: 'teacher',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    bonus: "30%",
    votes: "5",
    currentBonus: "720",
    newRequest: false,
    voting: true,
    finished: false,
    declined: false,

  },
  {
    id: 3,
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    team: 'student',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    bonus: "50%",
    votes: "7",
    currentBonus: "720",
    newRequest: false,
    voting: true,
    finished: false,
    declined: false,
  },
  {
    id: 4,
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    team: 'student',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    bonus: "50%",
    votes: "7",
    currentBonus: "720",
    newRequest: false,
    voting: true,
    finished: false,
    declined: false,
  },
  {
    id: 5,
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    team: 'teacher',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    bonus: "50%",
    votes: "7",
    currentBonus: "720",
    newRequest: false,
    voting: true,
    finished: false,
    declined: false,
  },
  {
    id: 6,
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    team: 'student',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    bonus: "50%",
    votes: "7",
    currentBonus: "720",
    newRequest: false,
    voting: false,
    finished: true,
    declined: false,
  },
  {
    id: 7,
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    team: 'student',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    bonus: "50%",
    votes: "7",
    currentBonus: "720",
    newRequest: false,
    voting: false,
    finished: false,
    declined: true,
  },
]

const teachers = 'teacher'
const students = 'student'
const lightColor = 'rgba(255, 255, 255, 0.7)';
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


function DashboardHeader(props) {
  const {currentUser,dispatch} = useContext(AuthContext)
  const navigate = useNavigate()
  const { onDrawerToggle } = props;
  const [openPopper, setOpenPopper] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  
  const [value, setValue] = useState(0);
  const route = props.route.pathname
  const title = route.substring(7)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenPopper((previousOpen) => !previousOpen);
  };
  const canBeOpen = openPopper && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;
  const handleLogout = async () => {
    await updateDoc(doc(db,'users', currentUser.currentUser.uid),{
      isOnline:false,
    })
    await signOut(currentUser)
    dispatch({type:'LOGOUT'})
    navigate('/')
  }
  return (
    <React.Fragment>
      <AppBar style={{ background: "black" }} position="sticky" elevation={0}>
        <Toolbar style={{ background: "black" }}>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />

            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton aria-describedby={id} onClick={handleClick} color="inherit" sx={{ p: 0.5 }}>

                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
              <Popper id={id} open={openPopper} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                      <List>
                        <Link to='/user'>

                          <button onClick={handleLogout}>
                            <ListItemAvatar>
                              <HelpIcon />
                            </ListItemAvatar>
                            <ListItemText>
                              Logout
                            </ListItemText>
                          </button>
                        </Link>



                      </List>
                    </Box>
                  </Fade>
                )}
              </Popper>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar style={{ background: "black" }}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <TopTitle title={title} />
            </Grid>
            {title !== 'users' ?
              <Grid item>

                <Button
                  sx={{ borderColor: lightColor, color: "white" }}
                  variant="outlined"
                  size="small"
                >
                  {/* <Link to="/admin"> */}
                  Add User +
                  {/* </Link> */}
                </Button>

              </Grid> : null
            }

          </Grid>
        </Toolbar>
      </AppBar>
      {props.route.pathname === '/admin/users' ?
        <AppBar style={{ background: "black" }} component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
          <Tabs value={value} onChange={handleChange} textColor="inherit">
            <Tab label="All users" />
            <Tab label="Teachers" />
            <Tab label="Students" />
          </Tabs>
        </AppBar> : null
      }

      <TabPanel style={{ backgroundColor: "#eaeff1" }} value={value} index={0}>
        <Content users={people} />
      </TabPanel>
      <TabPanel style={{ backgroundColor: "#eaeff1" }} value={value} index={1}>
        <Content filter={teachers} users={people} />

      </TabPanel>
      <TabPanel style={{ backgroundColor: "#eaeff1" }} value={value} index={2}>
        <Content filter={students} users={people} />

      </TabPanel>
    </React.Fragment>
  );
}

DashboardHeader.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
export default DashboardHeader;