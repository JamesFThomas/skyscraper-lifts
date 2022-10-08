import React from 'react';
import '../../styles/tripLog.css';

const TripLog = () => {
  return (
    <div className='logContainer'>
      <h4>Trip Log</h4>
      <span>Trp#1 S-3, E-89, Tme-2:45 </span>
      <span>Trp#2 S-89, E-54, Tme-1:22 </span>
      <span>Trp#3 S-34, E-23, Tme-1:56 </span>
      <span>Trp#4 S-0, E-67, Tme-1:10 </span>
      <span>Trp#5 S-2, E-0, Tme-1:05 </span>
      <span>Trp#6 S-0, E-99, Tme-3:00 </span>
      <span>Trp#7 S-78, E-89, Tme-1:45 </span>
      <span>Trp#8 S-13, E-47, Tme-1:15 </span>
    </div>
  );
};

export default TripLog;
