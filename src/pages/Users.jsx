import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Tooltip from '@mui/material/Tooltip';
// import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
// import RefreshIcon from '@mui/icons-material/Refresh';
import TableHead from '../components/Admin/TableHead';
import TableBody from '../components/Admin/TableBody';

const Users = ({filter,users}) => {
  return (

        <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
        >
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <SearchIcon color="inherit" sx={{ display: 'block' }} />
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  placeholder="Search by user or email address"
                  InputProps={{
                    disableUnderline: true,
                    sx: { fontSize: 'default' },
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item>
                <Button variant="contained" sx={{ mr: 1 , bgcolor:"black"}}>
                  Add user +
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
          <TableHead/>
          <TableBody filter={filter}users={users}/>
          {/* <Chat sx={{m:10,p:10}}/> */}
        </Typography>
      </Paper>
  )
}

export default Users