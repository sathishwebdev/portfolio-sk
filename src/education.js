import React from 'react';
import ssn from './img/ssn.png';
import ss from './img/ss.jpg';
export default function Education() {
// const showbody=()=>{
//     var add = document.getElementById("ssn");
   
//     if(add.style.display === "none"){
//         add.style.display = "block"
//     }else {
//         add.style.display = "none"
//     }
// }

    return(
        
        <div id="edu" className="jumbotron row align-items-center justify-content-center" > 
           <br/> <br/> <h2 style={{fontSize:"50px", textAlign:"left"}}>EDUCATION.</h2>
           {/* <div className="row align-items-center  justify-content-center pad">
                <div className="col-12 col-lg-3 ">
                    <img className="edu mx-auto" style={{height:"70px"}}  src={ssn}/>
  </div>
            <div className="col-12 col-lg-4  row align-items-center">
                <h2>SSN COLLEGE OF ENGINEERING</h2>
                <p> <i class="fa fa-map-marker" aria-hidden="true"></i> CHENNAI </p>
            <div className="col-8 ">
            <h3>BACHLER OF ENGINEERING</h3>
            <p>ELECTRICAL AND ELECTRONICS ENGINEERING</p>
            </div>
            <div className="col-4 ">
            <p style={{fontSize:"larger"}}>CGPA - 7.4</p>
            
            
            </div><hr/>
            </div>
            </div> */}
            <div className="col-12 col-md-4">
            <div className="card" id="id"  >
                
                <div className="card-image " >
                    <img className="edu mx-auto"  style={{borderRadius:"15px"}} src={ssn}/>
  </div>
           
             <div className="card-title ">   <h2>BACHLER OF ENGINEERING</h2><p> <i class="fa fa-map-marker" aria-hidden="true"></i>  SSN COLLEGE OF ENGINEERING, CHENNAI </p></div> 
              <div className="pad hide"  >   
             <b>ELECTRICAL AND ELECTRONICS ENGINEERING</b>
            <p style={{fontSize:"larger"}}><i className="fa fa-star" ></i><i className="fa fa-star" ></i><i className="fa fa-star" ></i><i className="fa fa-star-half-o" ></i><i className="fa fa-star-o" ></i></p>CGPA - 7.62 
            </div></div>
            
</div>
<div className="col-12 col-md-4">
            <div className="card"> 

                <div className="card-image">
            
                <img className="edu mx-auto" style={{borderRadius:"15px"}} src={ss}/>
  </div>
  <div className="card-title" ><h2>SELF-LEARN</h2>
                <p>INTERNET &#x1F310; </p> </div>
            
            
            <div className="pad hide "><h6>WEB DEVELOPMENT</h6><p>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star" ></i>
                <i className="fa fa-star-half-o" ></i>
                <i className="fa fa-star-o" ></i>
                <i className="fa fa-star-o" ></i>
                </p>
<p>React JS &#x25CF; HTML &#x25CF; JavaScript &#x25CF; CSS </p>

        </div></div>
           

        </div></div>
        
        );
}