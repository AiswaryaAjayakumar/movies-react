import { TextField , Button, Grid} from '@mui/material'
import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
        
        <Grid container style={{padding:90}}>
<Grid style={{padding:10}} item xs={12}sm={12}md={12}lg={12}xl={12}>
    <TextField
    variant='outlined'
    margin='normal'
    label="Name of Cinema"
    
    />
    </Grid>
    <Grid style={{padding:10}} item xs={12}sm={12}md={12}lg={12}xl={12}>
  <Button
  variant='contained'
  type='submit'
  color='success'
  >
  SEARCH
  </Button>
  </Grid>

</Grid>
      </div>
    )
  }
}
