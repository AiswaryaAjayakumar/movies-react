import { Button, Grid, TextField } from '@mui/material'
import React, { Component } from 'react'

export default class Booking extends Component {
  render() {
    return (
      <div>
        <Grid container style={{padding:100}}>
            <Grid style={{padding:25}}item xs={12}sm={12}md={12}lg={12}xl={12}>
              <TextField
              variant='outlined'
              label="cinema"
              margin='normal'
              />
              
              </Grid>
            <Grid style={{padding:25}}item xs={12}sm={12}md={12}lg={12}xl={12}>
              <Button
              color='secondary'
              variant='contained'
              type='submit'
              >

                BOOK
              </Button>

            </Grid>
        </Grid>
      </div>
    )
  }
}
