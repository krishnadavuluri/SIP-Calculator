import React from 'react'
import Typography from '@mui/material/Typography';
import '../styles/style.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Summary from './summary'
import Utils from '../utils/utils'
import SipChart from './charts/sipChart'

export default class HomePage extends React.Component{

   state={
       monthAmount:5000,
       rateOfInterest:12,
       noOfYears:5
   }

  //  componentDidMount()
  //  {
  //      //alert("gjhsdas")
  //     this.findTotal()
  //  }
   
   inc=(event)=>{
      //alert(event.target.name)
      if(typeof(event.target.value)=='string')
      {
        const name=event.target.name
        if(name=='monthAmount')
        {
            var value=parseInt(event.target.value)   
            if(value>100000)
              value=100000
            this.setState({[event.target.name]: value ? value :""})
        }
        else if(name=='rateOfInterest')
        {
            var value=parseInt(event.target.value)
            if(value>100)
              value=100
            this.setState({[event.target.name]: value ? value :""})
        }
        else
        {
            var value=parseInt(event.target.value)
            if(value>30)
              value=30
            this.setState({[event.target.name]: value ? value :""})
        }
      }

      else{
        this.setState({[event.target.name]:event.target.value})
      }
   }

   findTotal=()=>{
       const p=this.state.monthAmount;
       const n=this.state.noOfYears*12
       const i=(this.state.rateOfInterest/100)/12

       const x=((1+i)**n)-1
       const z=x/i
       console.log(z)
       const m=parseInt((p*z*(i+1)))
       return m
       //console(m)
       //alert(m)
   }
  
    render(){
        const summary=Utils.GetSIPSummary(this.state.monthAmount,this.state.noOfYears,this.state.rateOfInterest)
        return(

            <Grid container  rowSpacing={2} justifyContent="center" className="Border" style={{"marginTop":"100px"}}>
                 <h1></h1>
                 <Grid container xs={11} md={11} className="Border">
                     
                     <Grid item xs={12} md={6} container className="Border">
                         <Grid item xs={8} md={7}>
                           <Box>
                             <Typography gutterBottom >Monthly Investment</Typography>
                             <Slider name="monthAmount" color="primary" max={100000} value={this.state.monthAmount} 
                              onChange={this.inc}  aria-label="pretto slider" valueLabelDisplay="auto" />
                           </Box>
                         </Grid>
                         <Grid item xs={4} md={5}>
                            <TextField name="monthAmount" onChange={this.inc} size="small" value={this.state.monthAmount}
                             label="₹" />
                         </Grid>

                         <Grid item xs={8} md={7}>
                           <Box>
                             <Typography gutterBottom >Expected Rate</Typography>
                             <Slider name="rateOfInterest" color="primary" max={100} value={this.state.rateOfInterest} 
                              onChange={this.inc}  aria-label="pretto slider" valueLabelDisplay="auto" />
                           </Box>
                         </Grid>
                         <Grid item xs={4} md={5}>
                            <TextField name="rateOfInterest" size="small" label="%" value={this.state.rateOfInterest}
                            onChange={this.inc}/>
                         </Grid>

                         <Grid item xs={8} md={7}>
                           <Box>
                             <Typography gutterBottom >Time Period</Typography>
                             <Slider name="noOfYears" color="primary" max={30} value={this.state.noOfYears} 
                              onChange={this.inc}  aria-label="pretto slider" valueLabelDisplay="auto" />
                           </Box>
                         </Grid>
                         <Grid item xs={4} md={5}>
                           <TextField name="noOfYears" onChange={this.inc} size="small" label="YR"
                            value={this.state.noOfYears}/>
                         </Grid>
                     </Grid>

                     <Grid item xs={11} md={5} className="Border">
                         <SipChart data={summary}/>
                     </Grid>   
                 </Grid>
                <Summary style={{"marginTop":"200px"}} summary={summary}/>
            </Grid>
        )
    }
}