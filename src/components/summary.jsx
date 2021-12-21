import React from 'react'
import { Grid } from '@mui/material';
import NumberFormat from 'react-number-format';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import '../styles/style.css'
const Summary = ({summary}) => {
    return (
        
            
             <Grid xs={12} md={6} className="Border" style={{"marginTop":"20px"}}>
                      <Box>
                        <Typography gutterBottom >
                          <strong>Invested: </strong><NumberFormat value={summary.investment} thousandsGroupStyle="lakh" displayType={'text'} thousandSeparator={true} prefix={'₹'} />
                        </Typography>
                        <Typography gutterBottom >
                          <strong>Est. Returns: </strong><NumberFormat value={summary.returns} thousandsGroupStyle="lakh" displayType={'text'} thousandSeparator={true} prefix={'₹'} />
                        </Typography>
                        <Typography gutterBottom >
                          <strong>Total: </strong><NumberFormat value={summary.maturity} thousandsGroupStyle="lakh" displayType={'text'} thousandSeparator={true} prefix={'₹'} />
                        </Typography>
                      </Box>
                 </Grid>

    )
}

export default Summary
