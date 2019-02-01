/*jslint browser:true */
"use strict";

function buildNav(){
let topNav = document.querySelectorAll('ul#primaryNavigation li a');
let bottomUL = document.createElement('ul');
document.getElementById('smallNavArea').appendChild(bottomUL);


//loop through the top nav to get every menu item and append to the bottom of the html page)
let i;
    for (i=0; i<topNav.length; i++){
        let topNavHref = topNav[i].getAttribute('href');
        let topNavText = topNav[i].text;
      
        let bottomLi = document.createElement('li');
        let bottomA = document.createElement('a');
        bottomA.setAttribute('href', topNavHref);
        bottomA.innerHTML = topNavText;

        bottomLi.appendChild(bottomA);
        bottomUL.appendChild(bottomLi);
    };
   
}//end function

buildNav()