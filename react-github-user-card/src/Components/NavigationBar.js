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
                        React Github Usercard
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}
export default NavigationBar;