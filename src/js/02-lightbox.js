import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryArray = document.querySelector(`.gallery`);

const newImages = galleryItems
  .map(
    (image) =>
      //Link do oryginalnego obrazka powinien być przechowywany w atrybucie data source w elemencie <img>, oraz w href linku.
      `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
   
      alt="${image.description}"
    />
  </a>
</li>`
  )
  .join(" ");

galleryArray.insertAdjacentHTML("beforeend", newImages);

console.log(galleryItems);
