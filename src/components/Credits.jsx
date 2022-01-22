import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import img from './../static/avatar.jpeg'

function Credits() {
  return(
    <div>
         <Box sx={{ flexGrow: 1 }}>
           <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
             
           <Toolbar>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Created by- <span><strong>Krishna Kumar</strong></span>
               </Typography>
               <Avatar alt="K" src={img} />
             </Toolbar>
               
           
           </AppBar>
         </Box>
   </div>
  );
}

export default Credits;
