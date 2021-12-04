import php from'./img/php.png';
import html from './img/html.png';
import js from './img/js.png';
import css from './img/css.png';
import re from './img/react.png';
import fb from './img/fb.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";

export default function Skill() {
return (<div id="skill" className="row container-fluid">
<div className="col-12"><br /><br />
 <h2 style={{fontSize:"50px", textAlign:"left"}}>SKILLS.</h2>

<div className="row align-items-center justify-content-center">
  <div className=" col-12 col-lg-2 col-xxl-1">  
  <div className="row  align-items-center"><div className="col-12 d-none d-lg-block"><img className="logo" style={{borderRadius:"80%"}} src={html}/>
  </div></div></div>
 <div className=" col-12 col-md-10 col-lg-5"><div className="col-12">
  <p style={{fontSize:"medium"}} > HTML - 8.5 / 10 <i className="fa fa-star" > </i> </p></div>
   <div className="progress">
    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}> 
    </div>
  </div>
</div>
</div>
<div className="row align-items-center justify-content-center">
  <div className=" col-12 col-lg-2 col-xxl-1">  
  <div className="row  align-items-center"><div className="col-12 d-none d-lg-block"><img className="logo mx-auto" style={{borderRadius:"80%"}} src={css}/>
  </div></div></div>
 <div className=" col-12 col-md-10 col-lg-5"><div className="col-12">
  <p style={{fontSize:"medium"}} > CSS - 8/10 <i className="fa fa-star"></i> </p></div>
   <div className="progress">
    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}> 
    </div>
  </div>
</div>
</div>

<div className="row align-items-center justify-content-center">
  <div className=" col-12 col-lg-2 col-xxl-1">  
  <div className="row  align-items-center"><div className="col-12 d-none d-lg-block"><img className="logo mx-auto" style={{borderRadius:"80%"}} src={js}/>
  </div></div></div>
 <div className=" col-12 col-md-10 col-lg-5 "><div className=" col-12">
  <p style={{fontSize:"medium"}} > JAVASCRIPT - 6.5/10 <i className="fa fa-star-half-o" ></i> </p></div>
   <div className="progress">
    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}> 
    </div>
  </div>
</div>
</div>

<div className="row align-items-center justify-content-center">
  <div className=" col-12 col-lg-2 col-xxl-1">  
  <div className="row  align-items-center"><div className="col-6 d-none d-lg-block"><img className="logo mx-auto" style={{borderRadius:"80%"}} src={php}/>
  </div></div></div>
 <div className=" col-12 col-md-10 col-lg-5"><div className="  col-12">
  <p style={{fontSize:"medium"}} > PHP - 4.5/10 <i className="fa fa-star-half-o" ></i>  </p></div>
   <div className="progress">
    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: "45%"}}> 
    </div>
  </div>
</div>
</div>

<div className="row align-items-center justify-content-center">
  <div className=" col-12 col-lg-2 col-xxl-1">  
  <div className="row  align-items-center"><div className="col-6 col-xxl-4 d-none d-lg-block"><img className="logo mx-auto" style={{borderRadius:"80%"}} src={re}/>
  </div></div></div>
 <div className=" col-12 col-md-10 col-lg-5"><div className=" col-12 ">
  <p style={{fontSize:"medium"}} > REACT - 5/10 <i className="fa fa-star-half-o" ></i></p></div>
   <div className="progress">
    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}> 
    </div>
  </div>
</div>
</div>

<div className="row align-items-center justify-content-center">
  <div className=" col-12 col-lg-2 col-xxl-1">  
  <div className="row  align-items-center "><div className="col-12 d-none d-lg-block"><img className="logo mx-auto" style={{borderRadius:"80%"}} src={fb}/>
  </div></div></div>
 <div className=" col-12 col-md-10 col-lg-5"><div className=" col-12">
  <p style={{fontSize:"medium"}} > FIREBASE - 4/10 <i className="fa fa-star-half-o" ></i></p></div>
   <div className="progress">
    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}> 
    </div>
  </div>
</div>
</div>




</div></div> );
}