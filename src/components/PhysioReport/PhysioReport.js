import React, { useState } from 'react';
import './PhysioReport.css';
import allData from '../../assets/data';
import Blueman from '../Blueman';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function PhysioReport() {
  const [dept, setDept] = useState('all');
  const [data, setData] = useState(allData.all);

  const handleDeptChange = event => {
    setDept(event.target.value);
    setData(allData[event.target.value]);
  };

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item xs={3}>
          <FormControl fullWidth style={{textAlign: 'center'}}>
            <Select value={dept} onChange={handleDeptChange} displayEmpty>
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
                <TableCell align="center">{ data.totalInteractions.mtd }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">YTD</TableCell>
                <TableCell align="center">{ data.totalInteractions.ytd }</TableCell>
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
                <TableCell align="center">{ data.totalTreatments.mtd }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">YTD</TableCell>
                <TableCell align="center">{ data.totalTreatments.ytd }</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <Blueman data={data.treatments} />
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
                <TableCell align="center">{ data.newInjury.wr.mtd }</TableCell>
                <TableCell align="center">{ data.newInjury.wr.ytd }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">AW</TableCell>
                <TableCell align="center">{ data.newInjury.aw.mtd }</TableCell>
                <TableCell align="center">{ data.newInjury.aw.ytd }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">NAW</TableCell>
                <TableCell align="center">{ data.newInjury.naw.mtd }</TableCell>
                <TableCell align="center">{ data.newInjury.naw.ytd }</TableCell>
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
                <TableCell align="center">{ data.mechanismInjury.vehicle }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Slip, trip, fall</TableCell>
                <TableCell align="center">{ data.mechanismInjury.slip }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Repetitive movement</TableCell>
                <TableCell align="center">{ data.mechanismInjury.repetitive }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Sustained postures</TableCell>
                <TableCell align="center">{ data.mechanismInjury.postures }</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PhysioReport;
