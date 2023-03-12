var slider;
var int_cover_canv
var datacanvas1;
var datacanvas2;
var pause=false;
var resizetimer;
window.addEventListener("load", (event) => {
  //COVER
  let cover_div = document.querySelector(".interactive-cover");
  let interactive_cover = document.querySelector(".interactive-cover-canvas");
  let data1_canvas = document.querySelector(".interactive-cover-data1");
  let data2_canvas = document.querySelector(".interactive-cover-data2");

  let images = document.querySelectorAll(".interactive-image");

  slider = document.querySelector("#cover-slider");
  slider.addEventListener("input", function(e) {
    int_cover_canv.sliderUpdate(e.target.value);
  });

  cover_div.style.height = window.innerHeight+"px"
  //INITIALIZE CANVAS-------------------------------------------------------------------------------------//
  int_cover_canv = new jsCanvas(interactive_cover);
  datacanvas1 = new jsCanvas(data1_canvas);
  datacanvas2 = new jsCanvas(data2_canvas);
  int_cover_canv.createCanvas();
  datacanvas1.createCanvas();
  datacanvas2.createCanvas();

  int_cover_canv.slider = slider;
  for (let i = 0; i < images.length; i++) {
    images[i].onload = datacanvas1.pasteImages(images[i]);
    images[i].onload = datacanvas2.pasteImages(images[i]);
  }
  datacanvas1.newImage_data(1, images.length);
  datacanvas2.newImage_data(2, images.length);

  updateCanvas();


  const io = new IntersectionObserver((entries) => {
    // console.log("intersection")
    entries.forEach((entry) => {
   
      if (entry.isIntersecting) {
        console.log("unpause intersection")
            pause = false;
            updateCanvas();
            scroll100(true);

      } else {
        // console.log("pause intersection")
        pause = true;
        scroll100(false);
      }
    });
  });


io.observe(interactive_cover)
});


// window.addEventListener("resize", (event) => { 
//   pause = true;
//   clearTimeout(resizetimer);
//   resizetimer = setTimeout(resizer, 100)
// })

// function resizer(){
//   console.log("hi")
//   int_cover_canv.createCanvas();
//   datacanvas1.createCanvas();
//   datacanvas2.createCanvas();
//   pause = false;
//   updateCanvas();
//   console.log(pause)
// }
// //---------------------------------------------------------------------------------------------------------------------//

//ON AFTER INTERSECTION -------------------------------------------------------------------------------------//

//---------------------------------------------------------------------------------------------------------------------//

//CANVAS CLASS FOR INTERACTIVE TOP -------------------------------------------------------------------------------------//
class jsCanvas {
  constructor(canvas) {
    // console.log(canvas)
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d", {
        willReadFrequently: true,
        desynchronized: true,
    });

    
    this.images = [];
    this.cur_image = -1;
    this.sliderval = 1;
    this.sliderdirection = 1;
    // this.updateImage();
  }
  createCanvas(canvas, aspectratio) {
    this.canvas = this.setHiDPICanvas(
      document.body.clientWidth, //INNERWIDTH WILL OVERSHOOT THE VIEWPORT WIDTH
      // window.innerWidth,
      window.innerHeight
    );
    // this.ctx.font = "25px Helvetica";
    
  }
  pixel_ratio() {
    let ctx_pxr = this.ctx,
      dpr = window.devicePixelRatio || 1,
      bsr =
        ctx_pxr.webkitBackingStorePixelRatio ||
        ctx_pxr.mozBackingStorePixelRatio ||
        ctx_pxr.msBackingStorePixelRatio ||
        ctx_pxr.oBackingStorePixelRatio ||
        ctx_pxr.backingStorePixelRatio ||
        1;

    return dpr / bsr;
  }

  setHiDPICanvas(w, h, ratio) {
    // console.log(canv)
    if (!ratio) {
      if (window.innerWidth<800) {
        ratio = 1.5
      } else {
        ratio = 1//this.pixel_ratio();
      }
      
      console.log(ratio)
    }
    console.log("ratio:", ratio)
    // let can = canv;
    this.canvas.ratio = ratio
    this.canvas.width = w * this.canvas.ratio;
    this.canvas.height = h * this.canvas.ratio;
    this.canvas.style.width = w + "px";
    this.canvas.style.height = h + "px";
    this.canvas.getContext("2d").setTransform(this.canvas.ratio, 0, 0, this.canvas.ratio, 0, 0);
    return this.canvas;
  }
  pasteImages(img) {
    // console.log("hi");
    this.images.push(img);
  }

  sliderUpdate(value) {
    console.log(value);
    this.sliderval = Number(value);
  }
  newImage_data(index, length) {
    //INDEX == CURRENT IMAGE INDEXER
    this.cur_image = (this.cur_image + index) % length; //
    drawImageProp(this.ctx, this.images[this.cur_image], 0,0,this.canvas.width/this.canvas.ratio, this.canvas.height/this.canvas.ratio)
    this.cur_data = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }
}

//---------------------------------------------------------------------------------------------------------------------//

function updateCanvas() {
    // console.log(updateCanvas)
    if (datacanvas1.cur_image > -1 && datacanvas2.cur_image > -1) {
        // console.log("hi")
        if (pause){
            console.log("paused")
            return
        }
        int_cover_canv.cur_data = datacanvas1.ctx.getImageData(
            0,
            0,
            datacanvas1.canvas.width,
            datacanvas1.canvas.height
          );
        let data_original= datacanvas1.cur_data.data
        let data_next = datacanvas2.cur_data.data
        let data_new = int_cover_canv.cur_data.data
        // console.log(, data_original)
          for (let i = 0; i < data_original.length; i += 4) {
            let avg = (data_original[i] + data_original[i + 1] + data_original[i + 2]) / 3;
            if (int_cover_canv.sliderdirection ==1 ) {
                if (avg <= int_cover_canv.slider.value) {

                    // data_new[i + 3] = 0;
                    data_new[i] = data_next[i]
                    data_new[i+1] = data_next[i+1]
                    data_new[i+2] = data_next[i+2]
                    // console.log(data_new[i], data_next[i])
                }
            } else {
                if (avg >= int_cover_canv.slider.value) {

                    // data_new[i + 3] = 0;
                    data_new[i] = data_next[i]
                    data_new[i+1] = data_next[i+1]
                    data_new[i+2] = data_next[i+2]
                    // console.log(data_new[i], data_next[i])
                }
            }
           
          }
          int_cover_canv.ctx.putImageData(int_cover_canv.cur_data, 0, 0)

          if (int_cover_canv.sliderval <= 0) {
            int_cover_canv.sliderdirection = 1;
            datacanvas1.newImage_data(1, datacanvas1.images.length);
            datacanvas2.newImage_data(1, datacanvas2.images.length);

            // nextImageDOM(this.cur_image)
          } else if (int_cover_canv.sliderval >= 255) {
            console.log("switch");
            int_cover_canv.sliderdirection = -1;
            datacanvas1.newImage_data(1, datacanvas1.images.length);
            datacanvas2.newImage_data(1, datacanvas2.images.length);
          }
    
          int_cover_canv.sliderval += int_cover_canv.sliderdirection;
          int_cover_canv.slider.value = Number(int_cover_canv.sliderval);
    }
        requestAnimationFrame(updateCanvas);

}

function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {

  if (arguments.length === 2) {
      x = y = 0;
      w = ctx.canvas.width;
      h = ctx.canvas.height;
  }

  // default offset is center
  offsetX = typeof offsetX === "number" ? offsetX : 0.5;
  offsetY = typeof offsetY === "number" ? offsetY : 0.5;

  // keep bounds [0.0, 1.0]
  if (offsetX < 0) offsetX = 0;
  if (offsetY < 0) offsetY = 0;
  if (offsetX > 1) offsetX = 1;
  if (offsetY > 1) offsetY = 1;

  var iw = img.width,
      ih = img.height,
      r = Math.min(w / iw, h / ih),
      nw = iw * r,   // new prop. width
      nh = ih * r,   // new prop. height
      cx, cy, cw, ch, ar = 1;

  // decide which gap to fill    
  if (nw < w) ar = w / nw;                             
  if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
  nw *= ar;
  nh *= ar;

  // calc source rectangle
  cw = iw / (nw / w);
  ch = ih / (nh / h);

  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY;

  // make sure source rectangle is valid
  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih;

  // fill image in dest. rectangle
  ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
}