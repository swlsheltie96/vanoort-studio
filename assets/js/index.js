

var lastKnownScrollPosition = 0;
var ticking = false;
var positionOnOpen = 0;

document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        "#loading").style.visibility = "visible";
  } else {
      document.querySelector(
        "#loading").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
  }
};

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition =
    window.scrollY ||
    window.scrollTop ||
    document.getElementsByTagName("html")[0].scrollTop;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      getScroll(lastKnownScrollPosition);
      ticking = false;
    });
    ticking = true;
  }
});
console.log("new")

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


window.addEventListener("resize", (event) => { 
  let mobilemenu = document.querySelector(".mobile.hamburgermenu")
  mobilemenu.style.height = window.innerHeight +"px"
  console.log("Resize")
  // if (mobilemenu.classList.contains("active")){

  // } else {
  //   mobilemenu.style.height = window.innerHeight +"px"
  // }
})


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
    
    mobilemenu.style.transform = `translateY(calc(-94vh + 2rem))`
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