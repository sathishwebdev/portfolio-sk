import React from 'react';

export default function Contact(){
    // document.addEventListener("click", function(e) {
    //     if (e.target.tagName == "A" &&
    //             !e.target.hasAttribute("target"))
    //     {
    //         e.target.setAttribute("target", "_blank");
    //     }
    // });

const showAddress = () =>{
    var add = document.getElementById("address");
    if(add.style.display === "none"){
        add.style.display = "block"
    }else {
        add.style.display = "none"
    }
}

    return(
<div className="container-fluid row">
    <br/><br/><h2 className="title">CONTACT.</h2>
    <div id="contact"  style={{marginBottom:"50px"}}>
   

      <div style={{fontFamily:"sans-serif"}} className="jumbotron justify-content-center">
             
      <div className="row justify-content-center"> 
                 
                    <div className="d-none d-md-block  col-md-2 "><b><i className="fa fa-map-marker ">  </i>  Address</b></div>
                    <div className="col-12 col-md-4  "> <p style={{fontSize:"medium", textAlign:"left", margin:"2%"}}>S/o., G SOUNTHIRA PANDIYAN,<br/>29/11 , 5TH STREET, <br/>DURAISAMYPURAM,<br/>SAYALGUDI - 623120,<br/>RAMANATHAPURAM(Dst.),<br/>TAMIL NADU.</p></div>
           </div><div className="row justify-content-center"> 
                           
                <div className="d-none d-md-block col-md-2"><b><i className="fa fa-envelope"> </i>  E-Mail</b></div>
                <div className="col-12 col-md-4 " style={{textAlign:"left"}} ><a className="App-link" style={{fontSize:"medium", textAlign:"left", margin:"2%"}} href="mailto:sathishweb27@gmail.com" >sathishweb27@gmail.com</a></div>
                
                 
            </div> 
            </div>
            </div>
        </div>

    );
}