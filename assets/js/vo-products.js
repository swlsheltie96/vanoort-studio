window.addEventListener("load", (event) => {
    if (window.innerWidth<800) {
        let imgsequence = document.querySelector(".img-sequence")
        let imgsequenceinner  =  document.querySelector(".img-sequence-container")
        let details =  document.querySelector(".cover")
    
        let parentheight = imgsequence.offsetHeight
        let imgsheight = imgsequenceinner.offsetHeight
        let detailheight = details.offsetHeight
    
        console.log(parentheight, imgsheight, detailheight, window.innerHeight, imgsheight-window.innerHeight)
    
        imgsequence.style.height = imgsheight+detailheight+"px"
        imgsequenceinner.style.height= imgsheight+"px"
        details.style.height= detailheight+"px"
    
        imgsequenceinner.style.top = "-"+(imgsheight-window.innerHeight)+"px"
        details.style.top = imgsheight+"px"
    }
  

});