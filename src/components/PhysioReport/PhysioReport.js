import React from 'react';
import './PhysioReport.css';
import Blueman from '../Blueman';
import { makeStyles } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  tableHead: {
    fontWeight: 600
  }
}));

function PhysioReport() {
  const classes = useStyles();
  const [dept, setDept] = React.useState('all');

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={3}>
          <FormControl fullWidth style={{textAlign: 'center'}}>
            <Select value={dept} displayEmpty>
              <MenuItem value={'all'}>Site Overall</MenuItem>
              <MenuItem value={'dept1'}>Dept 1</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          <Table size="small" aria-label="interactions table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>TOTAL INTERACTIONS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">Monthly</TableCell>
                <TableCell align="center">446</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">YTD</TableCell>
                <TableCell align="center">3495</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5}>
          <Table size="small" aria-label="treatments table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>TOTAL TREATMENTS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">Monthly</TableCell>
                <TableCell align="center">89</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">YTD</TableCell>
                <TableCell align="center">667</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <Blueman />
      <Grid container>
        <Grid item xs={5}>
          <Table size="small" aria-label="interactions table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>NEW INJURY EPISODES</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center"></TableCell>
                <TableCell align="center">Monthly</TableCell>
                <TableCell align="center">YTD</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">WR</TableCell>
                <TableCell align="center">16</TableCell>
                <TableCell align="center">69</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">AW</TableCell>
                <TableCell align="center">17</TableCell>
                <TableCell align="center">121</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">NAW</TableCell>
                <TableCell align="center">11</TableCell>
                <TableCell align="center">81</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
          <Table size="small" aria-label="treatments table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>MECHANISHM OF INJURY - YTD</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">Vehicle jolt / jar</TableCell>
                <TableCell align="center">18</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Slip, trip, fall</TableCell>
                <TableCell align="center">11</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Repetitive movement</TableCell>
                <TableCell align="center">9</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Sustained postures</TableCell>
                <TableCell align="center">8</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PhysioReport;
