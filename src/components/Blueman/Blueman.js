import React from 'react';
import rashman from '../../assets/rashman.jpg';
import './Blueman.css';
import BoxToDate from '../BoxToDate';

function Blueman() {

  return (
    <div style={{ backgroundImage: `url(${rashman})`, margin: 10, width: 675, height: 675, position: 'relative', borderRadius: 4 }}>
      <BoxToDate pos={{left: 30, top: 70}} value={{mtd: 8, ytd: 21}} />
      <BoxToDate pos={{left: 30, top: 200}} value={{mtd: 0, ytd: 4}} />
      <BoxToDate pos={{left: 30, top: 320}} value={{mtd: 2, ytd: 7}} />
      <BoxToDate pos={{left: 30, top: 465}} value={{mtd: 2, ytd: 6}} />
      <BoxToDate pos={{left: 30, top: 600}} value={{mtd: 0, ytd: 0}} />
      <BoxToDate pos={{right: 30, top: 105}} value={{mtd: 2, ytd: 8}} />
      <BoxToDate pos={{right: 30, top: 240}} value={{mtd: 6, ytd: 19}} />
      <BoxToDate pos={{right: 30, top: 370}} value={{mtd: 0, ytd: 0}} />
      <BoxToDate pos={{right: 30, top: 590}} value={{mtd: 0, ytd: 4}} />
    </div>
  );
}

export default Blueman;
