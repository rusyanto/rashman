import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function Blueman() {
  const classes = useStyles();
  const [dept, setDept] = React.useState('all');

  return (
    <Grid container justify="center">
      <Grid item xs={1}>
        <FormControl fullWidth style={{textAlign: 'center'}}>
          <Select value={dept} displayEmpty>
            <MenuItem value={'all'}>Site Overall</MenuItem>
            <MenuItem value={'dept1'}>Dept 1</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default Blueman;
