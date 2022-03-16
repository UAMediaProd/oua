const imageIDs = [
    '1Y4SMVrASrzpW_b7nCosJakJX8tY7GrlW',
    '1aiFh19LlHM8ysGVUBY3bg5urc49MY9RL',
    '1ngqXNoSCx6YuNhbw5hFPcfN8yCgFyLoZ',
    '1sJvpkXpiplRGJ-t_mHKIomgzjs3RClDO',
    '1lNzhZj1HRL8Z1RlQcb8WBeGvV0Wl6rJh',
    '190wANDnc_QbXs8htnfm-C1FcakXZK_QU',
    '15wuAYx9Z87WDnghLEyYwZFcNfzrDTC25',
    '1SEjuMbciOdKzW6Jc3yErzinCOupR4BHC',
    '10S0ERzLcAQhcGVQfVR-OX3_BOSaZJaQl',
    '1BJHLm7lImY6DWCc558lYjl9FkYA24Ad3',
    '1qbv5eXaZat-CgMuKwATrE8R6wIOXFm4p',
    '1QP8qtaYcPd5O_UzSTqlmOFAFxvXR1QRi',
    '1InHDA9-ZRfi472SA_xrzo8LJxKN-7W2U',
    '1Ozn08CWe6VVMU-8VTpYRNxl1Q69LdS8p',
];

const baseURL = 'https://drive.google.com/uc?export=download&id=';

let slideIndex = 1;

const defaultList = document.querySelector('.default.image-list');
const modalList = document.querySelector('.modal-content.image-list');
const thumbnailList = document.querySelector('.thumbnail.image-list');

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
