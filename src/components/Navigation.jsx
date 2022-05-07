import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from 'react-router-dom';
const categories = [
  {
    id: 'Manage',
    children: [
      {
        id: 'Users',
        icon: <PeopleIcon />,
        active: true,
      },
      {
        id: 'Chats',
        icon: <ChatIcon />,
        active: false,
      }
    ],
  },
  {
    id: 'Settings',
    children: [
      { id: 'Settings', icon: <SettingsIcon /> },

    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List sx={{ background: "#181818" }} disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          Study App
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <Link to="/admin/dashboard">
            <ListItemText>Home</ListItemText>
          </Link>

        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#181818' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <Link to={`/admin/${childId.toLowerCase()}`}>

                <ListItem style={{ background: "#181818" }} disablePadding key={childId}>
                  <ListItemButton selected={active} sx={item}>

                    <ListItemIcon>{icon}</ListItemIcon>

                    <ListItemText>{childId}</ListItemText>

                  </ListItemButton>

                </ListItem>
              </Link>

            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}