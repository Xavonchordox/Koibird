const carouselContainer = [...document.querySelectorAll('.card-container')];
const btnNext = [...document.querySelectorAll('.btn-next')];
const btnPrev = [...document.querySelectorAll('.btn-prev')];

carouselContainer.forEach((item, i) =>{
    let containerSize = item.getBoundingClientRect();
    let containerWidth = containerSize.width;
    btnNext[i].addEventListener('click', () => {
        const view = document.documentElement.clientWidth;
        item.scrollLeft += containerWidth + 20;
    })

    btnPrev[i].addEventListener('click', () => {
        const view = document.documentElement.clientWidth;
        item.scrollLeft -= containerWidth + 30;
    })
})

const carouselContainerIcon = [...document.querySelectorAll('#heart')];
carouselContainerIcon.forEach((item, i) => {
    item.addEventListener('click', () => {
        if(item.style.color == 'rgb(224, 255, 4)')
            item.style.color = 'black'
        else 
            item.style.color = 'rgb(224, 255, 4)'
    })
})

const setDisplay = document.getElementsByClassName('nb-bottom-list-dropdown-block');

function hover(){
    setDisplay[0].style.display = 'block';
}

function unHover(){
    setDisplay[0].style.display = 'none';
}

var mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topBtn() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const hamburger = [...document.querySelectorAll("#hamburger-btn")];
hamburger.forEach((item, i) => {
  item.addEventListener("click", () => {
    item.classList.toggle("is-opened");
  });
});

var flag = 1;
function openNav() {
  if(flag == 0){
    document.getElementById("nb-navbar").style.width = "0%";
    document.body.style.overflow = "auto";
    document.body.style.userSelect = "auto";
    flag = 1;
  }
  else{
    document.getElementById("nb-navbar").style.width = "100%";
    document.body.style.overflow = "hidden";
    document.body.style.userSelect = "none";
    flag = 0;
  }
}