import React from 'react';
import rashman from '../../assets/rashman.jpg';
import './Blueman.css';
import BoxToDate from '../BoxToDate';

function Blueman(props) {
  const { data } = props;

  return (
    <div style={{ backgroundImage: `url(${rashman})`, margin: 10, width: 675, height: 675, position: 'relative', borderRadius: 4 }}>
      <BoxToDate pos={{left: 30, top: 70}} value={{mtd: data.neck.mtd, ytd: data.neck.ytd}} />
      <BoxToDate pos={{left: 30, top: 200}} value={{mtd: data.elbow.mtd, ytd: data.elbow.ytd}} />
      <BoxToDate pos={{left: 30, top: 320}} value={{mtd: data.hand.mtd, ytd: data.hand.ytd}} />
      <BoxToDate pos={{left: 30, top: 465}} value={{mtd: data.knee.mtd, ytd: data.knee.ytd}} />
      <BoxToDate pos={{left: 30, top: 600}} value={{mtd: data.other.mtd, ytd: data.other.ytd}} />
      <BoxToDate pos={{right: 30, top: 105}} value={{mtd: data.shoulder.mtd, ytd: data.shoulder.ytd}} />
      <BoxToDate pos={{right: 30, top: 240}} value={{mtd: data.back.mtd, ytd: data.back.ytd}} />
      <BoxToDate pos={{right: 30, top: 370}} value={{mtd: data.hip.mtd, ytd: data.hip.ytd}} />
      <BoxToDate pos={{right: 30, top: 595}} value={{mtd: data.foot.mtd, ytd: data.foot.ytd}} />
    </div>
  );
}

export default Blueman;
