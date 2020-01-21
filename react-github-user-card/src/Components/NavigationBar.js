import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';

const NavigationBar = () => {
    return(
        <div>
            <AppBar position='static'>
                <ToolBar>
                    <Typography variant='title' color='inherit'>
                        <div>
                            <h2>React Github Usercard - Followers</h2>
                        </div>
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}
export default NavigationBar;