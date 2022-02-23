import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default class Forgot extends Component {
    render() {
        const paperStyle={padding :20,height:'80vh',width:440, margin:"20px auto"}
        const avatarStyle={backgroundColor:'#201bbd'}
        const btnstyle={margin:'8px 0'}
        return (
            <div class="col-md-12 mt-5">
                  <Grid class="col-md-12">
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2 class="text-primary">OIMS Reset Password</h2>
                </Grid>
                <hr class="bg-light"/>
                <form method="post">                
                <input type="email" className="form-control mt-3" fullWidth required placeholder='Enter Email'/><br/>
              
                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Reset</Button>
                </form>
                <hr class="bg-light"/>
                <Typography >
                     <Link to="/login" class="text-primary" >
                        Login
                </Link>
                </Typography>
                
              
            </Paper>
        </Grid>

        <footer class="footer fixed-bottom text-center text-white">Alright Reserver By <span class="text-white">University of Rwanda </span></footer>
                 
            </div>
        )
    }
}
