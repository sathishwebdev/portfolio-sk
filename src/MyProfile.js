import React from 'react';
import my from './img/my.jpg';
import Skill from './skill';
import Education from './education';
import Project from './project';
import Contact from './contact';

function MyProfile() {
    
    const showmyself = () =>{
      var x =  document.getElementById('myself') ;
      if(x.style.display === "none"){

        x.style.display = "block";

      } else {
        x.style.display = "none";
    }
    var y =  document.getElementById('edu') ;
        if(y.style.display === "block"){
  
          y.style.display = "none";
  
        } else {
          y.style.display = "none";
      }
    }
      
    const showedu = () =>{
        var y =  document.getElementById('edu') ;
        if(y.style.display === "none"){
  
          y.style.display = "block";
  
        } else {
          y.style.display = "none";
      }
      var x =  document.getElementById('myself') ;
      if(x.style.display === "block"){

        x.style.display = "none";

      } else {
        x.style.display = "none";
    }

      }
    
    
    
    
    return (
        <div className="App " >
            <div className="App-header">
            
        <div >
<div className="row" >
  <div className="col-6 img">
            <img width="600px" src={my} className="" />
            </div>
            <div className="col-6 " >

 <div className="col-8 col-sm-6 col-lg-6 " >
           <h1 style={{fontSize:"40px"}} className="d-none d-md-block">I'm Sathish Kumar S</h1>
           
           <h1 style={{fontSize:"24px"}} className="d-block d-md-none">I'm Sathish Kumar S</h1>

           <p>Web Developer</p>
           <p style={{textAlign:"justify"}} className="d-none d-md-block" >“I'm an experienced Web developer. I can talk more about my experience and skills that make me a good fit in design, but mostly I'm just passionate about web development. It's what I think about 24/7. And Here My Complete  profile... </p>
<button  className="d-block d-md-none btn-mp" onClick={showmyself} > About MySelf</button>

         </div>
         <div className="col-12" style={{padding:"4%"}}><p style={{textAlign:"justify", display:"none"}} id="myself" >“I'm an experienced Web developer. I can talk more about my experience and skills that make me a good fit in design, but mostly I'm just passionate about web development. It's what I think about 24/7. And Here My Complete  profile... </p></div>
            
        </div>

        
            <button className="btn-head" onClick={showedu}> EDUCATION.</button>
       <div style={{display:"none", marginBottom:"70px"}} id="edu">
           <Education/>

       </div>
        
        </div>
        </div>
        <div className=" row fixed-bottom justify-content-center sobar-mp">
<hr/>
      <div className="col-3 ico ">  <h3><a className="phone" href="tel:+918940800307" ><i class="fa fa-phone fa-2x "></i></a></h3> 
</div>

<div className="col-3">
        <h3><a className="insta" target="_blank" href="https://www.instagram.com/sathishkumarsk_" ><i class="fa fa-instagram fa-2x"></i></a></h3></div>
<div className="col-3">
        <h3><a className="linked" target="_blank" href="https://www.linkedin.com/in/sathish-kumar-b96348179" ><i class="fa fa-linkedin fa-2x"></i></a></h3></div>

<div className="col-3">
        <h3><a className="mail" href="mailto:sathishweb27@gmail.com" ><i class="fa fa-envelope fa-2x"></i></a></h3>
</div>

        </div></div>
        </div>
        
    )
}

export default MyProfile
