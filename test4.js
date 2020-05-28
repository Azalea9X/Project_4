let toggle = document.querySelector('#toggle');
let sideBar = document.querySelector('.nav-sidebar ul');
function showSideBar(){
    
    
//Working code.    
if (sideBar.style.visibility === "hidden") {
    sideBar.style.visibility = "visible";
     
  } else {
    sideBar.style.visibility = "hidden";
  }
}

 
 

  


toggle.addEventListener('click', showSideBar, false);
 
//Note! I have to copy and paste the example that they use here in W3schools (https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp). When I try to type out this particular example, it does not work in the same way.