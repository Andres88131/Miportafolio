

const MenuR = document.querySelectorAll('#nav_link  a');
const menuhear = document.getElementById("Conmenu");
const Quitarmenu = document.getElementById("Conmenu");
 
function selecion (nav_link){

        MenuR[0].className = "";
        MenuR[1].className = "";
        MenuR[2].className = "";
        MenuR[3].className = "";
        MenuR[4].className = "";
        nav_link.className = "selecionado";
        
       Quitarmenu.className="";

}
function Menuresponsive(){
    if (menuhear.className===""){
        menuhear.className = "responsive";
    }else{
        menuhear.className ="";
    }

}
