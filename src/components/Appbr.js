import { AppBar,Grid, Toolbar, Typography } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Appbr extends Component {
  render() {
    return (
      <div>
        <AppBar>
            <Toolbar>
                <Typography>
                    <h1>BookMyTickets</h1>
                </Typography>
             
     
                <Grid container style={{padding:0}}>
                    <Grid style={{padding:10}} item xs={12}sm={4}md={4}lg={4}xl={4}>
                      <Link to="search">Search Cinema</Link>
                    </Grid>
                    <Grid style={{padding:10}} item xs={12}sm={4}md={4}lg={4}xl={4}>
                      <Link to="/">Now Showing</Link>
                    </Grid>
                    <Grid style={{padding:10}} item xs={12}sm={4}md={4}lg={4}xl={4}>
                      <Link to="booking">Book Cinema</Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
      </div>
    )
  }
}
