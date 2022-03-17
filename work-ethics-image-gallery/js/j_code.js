const imageIDs = [
    '1388233762606133254-png__700.jpg',
    '1388314636127195136-png__700.jpg',
    '1388355193511759873-png__700.jpg',
    '1388282848306552832-png__700.jpg',
    '1388317961421824002-png__700.jpg',
    '1388375401756516357-png__700.jpg',
    '1388297999068061696-png__700.jpg',
    '1388324037164605440-png__700-1.jpg',
    '1388476677471285251-png__700.jpg',
    '1388301236710019073-png__700.jpg',
    '1388342408358793217-png__700.jpg',
    '1388515254682849283-png__700.jpg',
    '1388302544443625474-png__700.jpg',
    '1388342978616471552-png__700.jpg',
];

const baseURL = './assets/';

// google drive base link 'https://drive.google.com/uc?export=download&id='
// file IDs:
// '1Y4SMVrASrzpW_b7nCosJakJX8tY7GrlW',
// '1aiFh19LlHM8ysGVUBY3bg5urc49MY9RL',
// '1ngqXNoSCx6YuNhbw5hFPcfN8yCgFyLoZ',
// '1sJvpkXpiplRGJ-t_mHKIomgzjs3RClDO',
// '1lNzhZj1HRL8Z1RlQcb8WBeGvV0Wl6rJh',
// '190wANDnc_QbXs8htnfm-C1FcakXZK_QU',
// '15wuAYx9Z87WDnghLEyYwZFcNfzrDTC25',
// '1SEjuMbciOdKzW6Jc3yErzinCOupR4BHC',
// '10S0ERzLcAQhcGVQfVR-OX3_BOSaZJaQl',
// '1BJHLm7lImY6DWCc558lYjl9FkYA24Ad3',
// '1qbv5eXaZat-CgMuKwATrE8R6wIOXFm4p',
// '1QP8qtaYcPd5O_UzSTqlmOFAFxvXR1QRi',
// '1InHDA9-ZRfi472SA_xrzo8LJxKN-7W2U',
// '1Ozn08CWe6VVMU-8VTpYRNxl1Q69LdS8p',

let slideIndex = 1;

let xDown = null;
let yDown = null;

const defaultList = document.querySelector('.default.image-list');
const modalList = document.querySelector('.modal-content.image-list');
const thumbnailList = document.querySelector('.thumbnail.image-list');

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

for (let i = 0; i < imageIDs.length; i++) {
    const images = document.querySelectorAll('.image-list div:nth-child(' + (i + 1) + ') img');
    if (images) {
      images.forEach(image => {
        image.src = baseURL + imageIDs[i];
      });
    }

    //default image list
    let defaultColumnDiv = document.createElement('div');
    defaultColumnDiv.classList.add('column');
    let imageDefault = document.createElement('img');
    imageDefault.src = baseURL + imageIDs[i];
    imageDefault.classList.add('hover-shadow');
    imageDefault.addEventListener('click', function() {
        openModal();
        currentSlide(i + 1)
    });
    defaultColumnDiv.appendChild(imageDefault);
    defaultList.appendChild(defaultColumnDiv);


    //modal image list
    let slideDiv = document.createElement('div');
    slideDiv.classList.add('mySlides');
    let numbertext = document.createElement('div');
    numbertext.classList.add('numbertext');
    numbertext.innerHTML = (i + 1) + ' / ' + imageIDs.length;
    let imageSlide = document.createElement('img');
    imageSlide.src = baseURL + imageIDs[i];
    slideDiv.appendChild(numbertext);
    slideDiv.appendChild(imageSlide);
    modalList.insertBefore(slideDiv, modalList.children[i]);

    //thumbnail image list
    let thumbnailDiv = document.createElement('div');
    thumbnailDiv.classList.add('column');
    let imageThumbnail = document.createElement('img');
    imageThumbnail.src = baseURL + imageIDs[i];
    imageThumbnail.classList.add('demo');
    imageThumbnail.addEventListener('click', function() {
        currentSlide(i + 1)
    });
    thumbnailDiv.appendChild(imageThumbnail);
    thumbnailList.appendChild(thumbnailDiv);
}


function openModal() {
  document.getElementById("myModal").style.display = "block";
}


function closeModal() {
  document.getElementById("myModal").style.display = "none";
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function handleTouchStart(e) {
  xDown = e.touches[0].clientX;
  yDown = e.touches[0].clientY;
}

function handleTouchMove(e) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = e.touches[0].clientX;
  var yUp = e.touches[0].clientY;

  var xDiff = xUp - xDown;
  var yDiff = yUp - yDown;

  if (Math.abs(xDiff) > Math.abs(yDiff) && Math.abs(xDiff) > 10) {
    /*most significant*/
    if (xDiff > 0) {
      /* left swipe */
      plusSlides(-1);
    } else {
      /* right swipe */
      plusSlides(1);
    }
  }

  /* reset values */
  xDown = null;
  yDown = null;
}