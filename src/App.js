import React from "react";
import {
  BrowserRouter as Router, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RouteConfig from './routeconfig';
import NavPage from'./nav';
import my from './img/my.jpg';
import Skill from './skill';
import Education from './education';
import Project from './project';
import Contact from './contact';

export default function App() {

  
fetch('https://www.voofacts.com/2020/07/some-of-most-annoying-movie-cliches.html',{   
  mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': 'cors',
    'Access-Control-Allow-Headers': 'origin'
  },
  redirect: 'follow', // manual, *follow, error,
  responseType: 'document'
  
  }).then(function (response) {
    // The API call was successful!
      console.log(response)
    return response.text();
  }).then(function (html) {
  
    // Convert the HTML string into a document object
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
  
    // Get the image file
    var img = doc.querySelector('meta[name="description"]');
    console.log(img);
  
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  })

  return (
    <Router>
     
      <RouteConfig />
    </Router>
  );
}




export function Home() {
  var aboutMe = "A motivated, goal oriented natural team player Wants to convert the challenges into opportunities. Looking forward to work in a high profile organization and use my skills and capabilities to contribute to its profitability and growth."

  return ( 
   <div className="App"><NavPage  />
   <div id="intro" className="container-fluid" style={{padding:"0", width:"100%"}} >
     <div  className="row  align-items-center">
         <div className="col-6 d-none d-sm-block">
           <h2 style={{fontSize:"30px"}}> <span className="d-none d-md-block" >I'm</span> Sathish Kumar S</h2><p className=" fontSize-sm-small " style={{textAlign:"justify", margin:"5%"}}  >{aboutMe}
</p><p> </p>
           <a className="App-link" style={{width:"fit-content", textDecoration:"none"}} target="_blank" href="https://drive.google.com/file/d/1ZMiJ4wpFBLgmgxT9a1kicj0v-u-roQWN/view?usp=sharing" > &#x25B7; Resume </a>
         </div>
          <div  className="col-12 col-sm-6 " >
            <img style={{boxShadow:"inset white 10px 10px 15px"}} src={my} width="100%"  />
            <div className="reimg d-none d-sm-block"></div>
            <div className="eimg d-block d-sm-none">

            </div>
 </div>
         <div className="container d-block d-sm-none" style={{border:"none", marginTop:"-150px", zIndex:"1"}}>
         <h2 style={{fontSize:"30px", color:"black", textTransform:"uppercase"}}> <span className="d-none d-md-block" >I'm</span> Sathish Kumar S</h2>
          <p style={{textAlign:"justify", margin:"5%"}} className="" >{aboutMe}
</p> <a className="App-link" style={{width:"fit-content", textDecoration:"none"}} target="_blank" href="https://drive.google.com/file/d/1ZMiJ4wpFBLgmgxT9a1kicj0v-u-roQWN/view?usp=sharing" > &#x25B7; Resume </a></div>
          </div>
         </div>
         <div className="m-auto" style={{maxWidth: "1280px"}}>
        <Education /> 
        {/* <Skill />  */}
        <Project />
        <Contact/>
      </div></div>

   
  );
}

