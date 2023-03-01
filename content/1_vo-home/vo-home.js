console.log("vo-home");

var lastKnownScrollPosition = 0;
var ticking = false;

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


window.addEventListener("load", (event) => {
  //MASTHEAD
  let masthead = document.querySelector(".masthead-container");
  //MAIN MENU

  let cols = document.querySelectorAll(".menu-section");
  let precontainer = document.querySelector(".menu-precontainer");
  let menu = document.querySelector(".menu-main");
  let products = precontainer.querySelectorAll(".product");

  let mobileview = document.querySelector("#mobile-view")
  let allproducts = document.querySelector(".all-products")
  // let cover = document.querySelector(".interactive-cover")
  // //SET BODY HEIGHT OF ORIGINAL AND CLONE MENU
  let mastheadheight = masthead.offsetHeight;
  // createObserver(cover);

  if (window.innerWidth > 800) {
    createMenu(products, cols, mastheadheight, precontainer, menu); //create menu, activate hover thumbnail, create scroll over labels on product grid
  }
  else {
    mobileViewToggle(mobileview, precontainer, allproducts)
    
  }
});




//FUNCTIONS -------------------------------------------------------------------------------------//

function getScroll(scrollPos) {
  var scroll =
    window.scrollY ||
    window.scrollTop ||
    document.getElementsByTagName("html")[0].scrollTop;
  // scroll = scroll - 2*window.innerHeight
  document.documentElement.style.setProperty("--scroll-var", scroll + "px");

}


function scroll100(bool) {
  if (window.innerWidth<800) {
    let mobilemenu = document.querySelector(".mobile.hamburgermenu")
    if (bool){
      mobilemenu.style.backgroundColor = "rgba(255,255,255,0)"
    }else {
      mobilemenu.style.backgroundColor = "rgba(255,255,255,255)"
    }
  } else {
    let navscroll = document.querySelector(".nav-scroll")
    if (bool){
      navscroll.style.opacity = 1
    }else {
      navscroll.style.opacity = 0
    }
  }

}
function mobileViewToggle(mobileview, precontainer, allproducts) {
  let list = mobileview.querySelector(".view-list")
  let grid = mobileview.querySelector(".view-grid")

  list.addEventListener("click", (e)=> {
    if (!list.classList.contains("active")) {
      precontainer.style.display = "block"
      allproducts.style.display = "none"
      list.classList.add("active")
      grid.classList.remove("active")

    } else {
      list.classList.remove("active")
    }
  })

  grid.addEventListener("click", (e)=> {
    if (!grid.classList.contains("active")) {
      precontainer.style.display = "none"
      allproducts.style.display = "grid"
      grid.classList.add("active")
      list.classList.remove("active")

    } else {
      grid.classList.remove("active")
    }
  })
}

function createMenu(products, cols, mastheadheight, precontainer, menu) {
  let cur_height_total = 0;
  let cur_col = 0;
  let cur_col_count = 0;
  let setup_class;
  let setup_class_num;
  var taglist = ["Tops", "Bottoms", "Accessories"];

  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let productheight = product.getBoundingClientRect().height;
    cur_height_total += productheight + 0.25 * 16; //0.5REM MARGIN BOTTOM

    if (i == 0) {
      setup_class = product.classList[1];
      setup_class_num = 1;
      cur_height_total += 1.5 * 16;
    }
    if (
      cur_height_total >= window.innerHeight - mastheadheight ||
      product.classList[1] != setup_class
    ) {
      cur_col++;
      cur_col_count = 1;
      cur_height_total = productheight + 0.25 * 16 + 1.5 * 16; //0.25REM MARGIN BOTTOM OF EACH ITEM, HED = 1.5REM;

      let hed_div = document.createElement("div");
      hed_div.classList.add("menu-hed");
      cols[cur_col].appendChild(hed_div);
      if (product.classList[1] != setup_class) {
        let col_hed = taglist[setup_class_num];

        let hed_p = document.createElement("h6");
        let hed_content = document.createTextNode(col_hed);
        hed_p.appendChild(hed_content);
        hed_div.appendChild(hed_p);

        setup_class = product.classList[1];
        setup_class_num++;

      }
    }

    cols[cur_col].appendChild(product);
    cur_col_count++;
  } 
  precontainer.remove();

  let menuitems = menu.querySelectorAll(".product");
  activateThumbnail(menuitems, menu)
  activateSubheds(menuitems, menu)

}
function activateSubheds(menuitems, menu) {
 let menuheds = menu.querySelectorAll("h6")
 console.log(menuheds)
 menuheds.forEach((hed) =>{
  console.log(hed)
  hed.addEventListener("mouseover", (e)=> {
    menuitems.forEach((item) => {
      if (!item.classList.contains(hed.innerHTML)) {
        // console.log(item)
        item.classList.add("lowlight")
      }
      else {
        item.classList.remove("lowlight")
      }
    })
  })
  hed.addEventListener("mouseout", (e)=> {
    menuitems.forEach((item) => {
      item.classList.remove("lowlight")
    })
  })
 })

  

}

function activateThumbnail(menuitems, menu) {
  menuitems.forEach((item) => {
    let curid = item.id;
    let realid = curid.slice(9);
    // console.log(item, realid)
    if (document.querySelector("#thumbnail-" + realid)) {
      let thumb = document.querySelector("#thumbnail-" + realid);
      item.addEventListener("mouseover", (e) => {
        // console.log("mouseddd")
        thumb.classList.add("on");
      });
      item.addEventListener("mouseout", (e) => {
        thumb.classList.remove("on");
      });
    }
  });
  let labels = menu.querySelectorAll(".product-hed");
  createLabels(labels, menuitems, menu)
}

function createLabels(labels,  menuitems, menu) {
  let all_labels = document.querySelector(".all-labels");
  let label_container;
  for (let i = 0; i < labels.length; i++) {
    let cloned = labels[i].cloneNode(true);
    cloned.id = "cloned-" + menuitems[i].id;
    cloned.classList.add("clone");

    cloned_data = labels[i].getBoundingClientRect();
    // console.log(cloned_data)
    cloned.style.opacity = 1;
    cloned.style.position = "absolute";
    cloned.style.width = cloned_data.width + "px";
    cloned.style.top = cloned_data.top + "px";
    cloned.style.height = cloned_data.height + "px";
    cloned.style.left = cloned_data.left + "px";

    if (i % 2 == 0) {
      // console.log(i)
      label_container = document.createElement("div");
      label_container.appendChild(cloned);
      // console.log(label_container)
      // label_container = false;
    } else {
      label_container.appendChild(cloned);
      let label_container_outer = document.createElement("div");
      label_container_outer.appendChild(label_container);
      all_labels.appendChild(label_container_outer);

      label_container.style.top =
        "calc(var(--scroll-var) - " + (((i + 1) / 2) * 100 + 150) + "vh)"; //LAST NUMBER IS BASED ON THE MARGIN OF THE SECTION IN VO-INDEX.CSS, around line 199
      label_container_outer.classList.add("label-container_outer");
      label_container.classList.add("label-container");
      label_container = false;
    }
  }
  let thumbnail = document.querySelector("#thumbnail");
  menu.appendChild(thumbnail);
}