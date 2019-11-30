import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "8px 18px",
    fontSize: 14
  }
}));

function BoxToDate(props) {
  const { pos, value } = props;
  const classes = useStyles();

  return (
    <Box
      bgcolor="white"
      p={1}
      position="absolute"
      top={pos.top}
      left={pos.left ? pos.left : 'auto'}
      right={pos.right ? pos.right : 'auto'}
      borderRadius={4}
    >
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{value.mtd}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{value.ytd}</Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BoxToDate;
