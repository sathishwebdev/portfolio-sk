import React from 'react';
import bs from './img/bs.ico';
import vf from './img/vf.png';
import bubloo from './img/bubloo.png';
import bslogo from './img/bs_logo.png';
import copd from './img/copd.jpg'
import prox from './img/proxi.jpg'
import cmbmd from './img/cmbmd.jpg'

export default function Project(){
  
    return(
        <div id="pro" className="container-fluid" > <br/><br/>
            <h2 className="title">PROJECTS.</h2>   <h2 style={{fontSize:"30px"}}>PERSONAL </h2>
           <div className="row justify-content-center align-items-center jumbotron" >        
            <div className="col-12 col-md-4">
            <div className="card pad" >
            
        
<div className="card-image  pad  "><img className="edu mx-auto" style={{height:"100px"}} src={vf}/>
   
    </div> <div className="card-title">  <h3>BLOGGER SITE - <a style={{color:"rgb(73, 179, 240)",
   textDecoration: "none"}} href="https://www.voofacts.com" >VOOFACTS</a></h3></div> 
    <div className="hide pad ">
        <p style={{textAlign:"justify"}}>{/*<span style={{fontSize:"small"}}>(Currently in this blog we removed all the posts to update the contents. )<br/></span>*/}This Project is works with <b> Google Blogger</b>. Just a blogger site which has some fun and interesting facts. In this project we provide custom domain called <a style={{color:"rgb(73, 179, 240)",
   textDecoration: "none"}} href="https://www.voofacts.com" >Voofacts.com</a> that bought and configured in Godaddy. From this project we learn about Content Creation, SEO, Google analytics, Google Ads, Adsense, Search console and How to maintain a Blog. <a style={{textDecoration: "none"}} target="_blank" href="https://www.voofacts.com"  className="btn btn-primary" > View Project </a></p></div>
</div></div>



     <div className="col-12 col-md-4" >
         <div className="card pad">
             <div className="card-image pad">
    <img className="edu mx-auto" style={{height:"100px"}} src={bslogo}/></div>
             <div className="card-title">
         <h3>FIREBASE SITE - <a style={{color:"rgb(73, 179, 240)",
   textDecoration: "none"}} href="https://blackstudiozz.web.app" >BLACK STUDIOZZ</a></h3></div>
 
<div className="hide pad"><p style={{textAlign:"justify"}}>
This project works with <b>Google Firebase</b> . A site which is deployed for hosting in Firebase. Objective of this project is to learn about firebase hosting, How to deploy a webpage in firebase, how to host a webpage in firebase. This project has webpages, a html files which is created with nodejs. Deploy a webpage by using npm. <a style={{textDecoration: "none"}} target="_blank" href="https://blackstudiozz.web.app" className="btn btn-primary" > View Project </a>
</p>
</div>
</div></div>



<div className="col-12 col-md-4" >
    <div className="card pad">
        <div className="card-image pad  "> <img src={bubloo} className="edu mx-auto" style={{height:"100px"}} />  </div>
            <div className="card-title">   <h3><a style={{color:"rgb(73, 179, 240)",
   textDecoration: "none"}} href="https://bubloo2716.web.app" > BUBLOO </a>- The Web Chat App  </h3></div>
                
       <div className="hide pad "><p style={{textAlign:"justify"}}>The web app is created with <b> React js framework and Firebase Real Time Database</b>. In this App we can create a public chat room for group chat and also can do private chit-chat. This Project helps me to learn more about array and react js framework along with firebase. At first this project had firestore but due to usage limitations in firestore, i did with firebase database. <a target="_blank" style={{ textDecoration: "none"}} href="https://bubloo2716.web.app" className="btn btn-primary" > View Project </a> </p></div></div>
       
</div></div>

<div className="sticky-top">
 <h2 style={{fontSize:"30px", marginTop:"100px"}}>ACADEMICs </h2></div>
          
 
          
 <div className="row align-items-center justify-content-center jumbotron" >
          <div className="col-12 col-md-4">  <div className="card pad " >
                <div className="card-image pad "> <img src={prox} className="edu mx-auto" style={{borderRadius:"20%", height:"200px"}} />  </div> 
       <div className="card-title"> <h3> Proximity Warning System for Mining Vehicles
(2018)</h3>       </div>
        
 <div className="hide pad "><p style={{textAlign:"justify"}}>{/*The Project is based on alert system for mining vehicle drivers by using proximity sensors.*/} In heavy vehicles driver has minimum chance to realize the nearby object. So, we provide 
the proximity sensor to detect the object and warn the driver by display and buzzer.</p></div></div></div>

<div className="col-12 col-md-4" >
    <div className="card pad">  <div className="card-image pad"><img src={copd} className="edu mx-auto" style={{borderRadius:"20%", height:"200px"}} /></div>
<div className="card-title" >
<h3>Bio-control based identification and analysis of
COPD (2019 - 2020)</h3></div>
<div className="hide pad "><p style={{textAlign:"justify"}}>Human respiratory system is converted into an electrical model and the time domain and stability analysis is done by comparing
the results inferences are made.</p></div> 
</div></div>

<div className="col-12 col-md-4">
<div className="card pad" >
    <div className="card-image pad "><img src={cmbmd} className="edu mx-auto" style={{borderRadius:"20%", height:"200px"}} /></div>
    <div className="card-title">
<h3>Condition Monitering of BLDC Motor Drive (2020 - 2021)</h3></div>

<div className="hide pad "><p style={{textAlign:"justify"}}>Monitor the fault conditions of BLDC motor drive and handle that fault with reconfiguration circuit. We also process the data and monitor the
condition through the internet or intranet.</p>
</div></div>
</div></div>


        </div>);
}