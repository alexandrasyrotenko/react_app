import React from "react";
import search from "../../img/search.svg";
import per6 from '../../img/per6.png';
import ava from "../../img/ava.png";
import ava1 from "../../img/ava1.png";
import ava11 from "../../img/ava11.png";
import ava1111 from "../../img/ava1111.png";
import per1 from '../../img/per1.png';
import per111 from '../../img/per111.png';
import itms from '../../img/itms.png';

import "./Main.scss";

export const Main = () => (
  <main className="main">

   <section className="row-search">
     <div className="row-search-back">
     <button>
   <img
          src={search}
          width="375"
          height="346"
          alt="search"
        />
      </button>
      </div>
   </section>
   <section className="row">
     <div className="row-back">

     </div>
   </section>






   <section className="main-content">
   <div className="main-content-list">
<div className="main-content-list-item">
<input type="text" placeholder="Search a Project with Name, Task, User..." />
			<div className="btns ">
				<button className="btn_c extra  normalize">New&nbsp;Projects&nbsp;(descending) <i className="fas fa-angle-down"></i></button>
				<button className="rnded green" onclick="add()">+</button>
			</div>
</div>
  </div>
<ul className="main-content-list-item-ul" id="lstmain">
 <li>
  <div className="main-content-list-item">
    <button>
    <span className="promt">
    <img
          src={per6}
          width="55"
          height="26"
          alt="per"
        />
    </span>
    </button>
      <div className="main-content-list-item__cont">Create Contact Formular</div>
      <div className="btns">
          <button className="btn_c extra c2 small">Worlda</button>
          <span className="itms">
    <img
          src={itms}
          width="55"
          height="26"
          alt="per"
        />
    </span>
     	</div>
        
   </div>
        
 </li>
 <li>
		<div className="main-content-list-item">
    <img
          src={per1}
          width="55"
          height="26"
          alt="per"
        />
			<div className="progress"></div>
        <div className="main-content-list-item__cont">Create Subpage PSD</div>
       
        <div className="btns">
           	<button className="btn_c extra c2 medium">Panorama</button>
             <span className="itms">
    <img
          src={itms}
          width="55"
          height="26"
          alt="per"
        />
    </span>
					</div>
						</div>
           
          </li>

          <li>
		<div className="main-content-list-item">
    <img
          src={per111}
          width="55"
          height="26"
          alt="per"
        />
			<div className="progress"></div>
        <div className="main-content-list-item__cont">Layout & Implementation in HTML & CSS</div>
        <div className="btns">
           	<button className="btn_c extra c2 medium">WORLDA</button>
             <span className="itms">
    <img
          src={itms}
          width="55"
          height="26"
          alt="per"
        />
    </span>
					</div>
						</div>
           
          </li>
          <li>
            
		<div className="main-content-list-item">
    <img
          src={per1}
          width="55"
          height="26"
          alt="per"
        />
			<div className="progress"></div>
        <div className="main-content-list-item__cont">Create Contact Formula
</div>
        <div className="btns">
           	<button className="btn_c extra c2 medium">Worlda</button>
             <span className="itms">
    <img
          src={itms}
          width="55"
          height="26"
          alt="per"
        />
    </span>
					</div>
						</div>
           
          </li>
          <li>
		<div className="main-content-list-item">
    <img
          src={per6}
          width="55"
          height="26"
          alt="per"
        />
		
        <div className="main-content-list-item__cont">"Lorem ipsum dolor sit amet, consectetur  elit</div>
        <div className="btns">
           	<button className="btn_c extra c2 medium">Ebay Relaunch</button>
             <span className="itms">
    <img
          src={itms}
          width="55"
          height="26"
          alt="per"
        />
    </span>
					</div>
						</div>
           
          </li>
          <li>
		<div className="main-content-list-item">
    <img
          src={per111}
          width="55"
          height="26"
          alt="per"
        />
		
        <div className="main-content-list-item__cont">Create Subpage PSD</div>
        <div className="btns">
           	<button className="btn_c extra c2 medium">Ebay</button>
             <span className="itms">
    <img
          src={itms}
          width="55"
          height="26"
          alt="per"
        />
    </span>
					</div>
						</div>
           
          </li>

  </ul>	  		
   </section>
   




  
  <section className="main-content-column__section">
   <div className="main-content-column-list__d">
    <ul className="main-content-column-list-item__inline" id="lstmain">
 <li>
  <div className="main-content-list-item">
    <button>
    <img
          src={ava11}
          width="36"
          height="36"
          alt="per"
        />
      </button>
      <div className="main-content-list-item__ccont">Mark P. add an Image into Worlda Today 10:30 PM</div>
   </div>   
 </li>
 <li>
  <div className="main-content-list-item">
    <button>
    <img
          src={ava1111}
          width="36"
          height="36"
          alt="per"
        />
    </button>
      <div className="main-content-list-item__ccont">Mark P. add an Image into Worlda Today 10:30 PM</div>
   </div>   
 </li>
 <li>
  <div className="main-content-list-item">
    <button>
    <img
          src={ava11}
          width="36"
          height="36"
          alt="per"
        />
    </button>
      <div className="main-content-list-item__ccont">Mark P. add an Image into Worlda Today 10:30 PM</div>
   </div>   
 </li>
 <li>
  <div className="main-content-list-item">
    <button>
    <img
          src={ava1}
          width="36"
          height="36"
          alt="per"
        />
    </button>
      <div className="main-content-list-item__ccont">Mark P. add an Image into Worlda Today 10:30 PM</div>
   </div>   
 </li>
 <li>
  <div className="main-content-list-item">
    <button>
    <img
          src={ava1111}
          width="36"
          height="36"
          alt="per"
        />
    </button>
      <div className="main-content-list-item__ccont">Mark P. add an Image into Worlda Today 10:30 PM</div>
   </div>   
 </li>
 <li>
  <div className="main-content-list-item">
    <button>
    <img
          src={ava1}
          width="36"
          height="36"
          alt="per"
        />
    </button>
      <div className="main-content-list-item__ccont">Mark P. add an Image into Worlda Today 10:30 PM</div>
   </div>   
 </li>



     </ul>

  
  </div>



   </section>









  </main>
);
