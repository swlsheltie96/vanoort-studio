var positionOnOpen = 0

window.addEventListener("load", (event) => {
  console.log("index load")
  //MASTHEAD 
  let masthead = document.querySelector(".masthead-container");
  let footer = document.querySelector(".footer")

  //mobile menu
  let ham = document.querySelector("#hamburger") 

  //SET BODY HEIGHT OF ORIGINAL AND CLONE MENU -------------------------------------------------------------------------------------//
  let mastheadheight = masthead.offsetHeight;
  let footerheight = footer.offsetHeight
  // console.log(mastheadheight)
  setfooterheight(footerheight)
  setbodyheight(mastheadheight)
  // console.log("boo")
  if (window.innerWidth < 800) {
    mobileHamburger(ham)
    
  }



});

// window.addEventListener("scroll", (event) => { 
  
// })


//OTHER FUNCTIONS    -------------------------------------------------------------------------------------//
function setfooterheight(height) {
  if (window.CSS && CSS.supports('color', 'var(--fake-var)')) {
    const root = document.documentElement;
    root.style.setProperty('--footer-height', `${height}px`);
  }
}
function setbodyheight(height) {
  // Checking for css variables support
  if (window.CSS && CSS.supports('color', 'var(--fake-var)')) {
    const root = document.documentElement;
    let bodyheight = window.innerHeight - height;
    root.style.setProperty('--beneath-masthead', `${bodyheight}px`);
    root.style.setProperty('--masthead-height', `${height}px`);
    // console.log("hi")
  }
 }


 function mobileHamburger(ham) {
  ham.addEventListener("click", (e)=> {
    handleHam(e, ham)
  })
  ham.addEventListener("touchstart", (e)=> {
    handleHam(e, ham)
  })
}
function handleHam(e, ham) {
  e.preventDefault()
  let mobilemenu = document.querySelector(".mobile.hamburgermenu")
  // console.log(mobilemenu)
  if (mobilemenu.classList.contains("active")){
    // console.log(positionOnOpen)
    document.body.style.position = '';
    window.scrollTo(0, positionOnOpen);
    mobilemenu.classList.toggle("active")
    mobilemenu.style.transform = `translateY(calc(-${window.innerHeight}px + 4rem))`
    ham.textContent = "+"
  } else {
    positionOnOpen = lastKnownScrollPosition
    mobilemenu.classList.toggle("active")
    mobilemenu.style.transform = "translateY(0px)"
    mobilemenu.style.height = window.innerHeight +"px"
    ham.textContent = "—"
    setTimeout(() => {
      document.body.style.position = 'fixed';
    }, 500)
   
  }

}