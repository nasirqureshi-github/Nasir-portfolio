//showsidebar
function showsidebar(){
    const sidebar=document.querySelector(".mobile-sidebar");
    sidebar.style.display="flex";
  

    /*code to prevent scrolling the page in mobile when sidebar open */
    document.body.style.overflow="hidden"

  }

//   hidesidebar 
  function hidesidebar(){
    const sidebar=document.querySelector(".mobile-sidebar");
    sidebar.style.display="none";

    document.body.style.overflow="auto"
  }

  

   //   go to top button
const goTotopBtn=document.querySelector(".go-to-top-btn");

window.addEventListener("scroll", checkheight)

function checkheight(){
    if (window.scrollY>300){
        goTotopBtn.style.display="flex" ;
    }
    else{
        goTotopBtn.style.display="none" ;
    }
}

goTotopBtn.addEventListener("click", ()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  })



