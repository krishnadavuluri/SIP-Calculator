import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return(
        <div>
         <Box sx={{ flexGrow: 1 }}>
           <AppBar position="fixed">
             <Toolbar>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  SIP CALCULATOR
               </Typography>
              
             </Toolbar>
           </AppBar>
         </Box>
        </div>
    );
  }
}
