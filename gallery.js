// Activates the image gallery
// The main task is to attached an event listener to each image in the gallery
// and respond appropriately on click.

function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage  = document.querySelector("#gallery-photo > img");
  let currentClass = "current";
  
  
  thumbnails.forEach(function(thumbnail) {

  // Preload large images.
      let newImageSrc  = thumbnail.dataset.largeVersion;
      let largeVersion = new Image();
      largeVersion.src = newImageSrc;
  
    thumbnail.addEventListener("click", function(){
      // Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src",newImageSrc);
      mainImage.setAttribute("alt",thumbnail.alt);

      // Change which imgae is current
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);
      
      // Update image info. 
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");

      title.innerHTML       = thumbnail.dataset.title.dataset;
      description.innerHTML = thumbnail.dataset.title;
    })
  });
}