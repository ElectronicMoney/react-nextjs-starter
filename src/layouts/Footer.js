import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function SimpleContainer() {
    
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="false">
                <Typography component="div" style={{ backgroundColor: '#1a237e'}} >

                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>xs=12</Paper>
                            </Grid>

                            <Grid item xs={3}>
                                <Paper className={classes.paper}>xs=3</Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>xs=3</Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>xs=3</Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper className={classes.paper}>xs=3</Paper>
                            </Grid>
                            
                            <Grid item xs={6}>
                                <div className={classes.paper}>
                                    Copyright &copy; 2020 CIBank, Inc. Ltd
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                              <div className={classes.paper}>
                                Footer Menu
                              </div>
                            </Grid>
                        </Grid>
                    </div>
                    
                </Typography>
            </Container>
        </React.Fragment>
    );
}
