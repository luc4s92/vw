//const paralax = document.querySelector(".banner-paralax")

//window.addEventListener("scroll", () => {
//    paralax.style.backgroundPositionY = `${scrollY / 3}px`;
//})

const accordion = document.getElementsByClassName('version-box')

for (i= 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    } )
}

//accordion.addEventListener('click', function(){
  //  this.classList.toggle('active')
//})