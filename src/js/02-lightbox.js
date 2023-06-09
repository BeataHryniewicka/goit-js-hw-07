import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryArray = document.querySelector(`.gallery`);

const newImages = galleryItems
  .map(
    (image) =>
      `<li>
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

// kliknięcie w obrazki, otwieranie i zamykanie okna modalnego oraz przewijaniem obrazków za pomocą klawiatury.
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
