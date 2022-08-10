import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery')
const cardsMarkup = createImagesCards(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)

function createImagesCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return`<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
    }).join('')
}

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("gallery")) return;
  const source = event.target.dataset.source;
    
    
  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();

  if (instance.show() === true) {

    galleryContainer.addEventListener('keydown', keyPress)
    
    function keyPress(event) {
   
    if(event.key === "Escape") {
        instance.close()
    }
}
}
})
