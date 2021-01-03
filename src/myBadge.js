
import React from 'react';
import './myBadge.css';





export function Badge (props) {


    return (
      <div className='my-badge' onClick={()=>props.navigate('Home')}>
        <div className={'my-name'} >
          <h2 >&nbsp;AYOUB&nbsp;</h2>
          <h2>&nbsp;SOUD&nbsp;</h2>
        </div>
        <div className={'my-title'} >
          <p style={{color:'#fcf2b0'}}>Full Stack Web & Mobile</p>
          <p style={{color:'#fcf2b0'}}>&nbsp;Engineer&nbsp;</p>
        </div>
      </div>
    );


}
