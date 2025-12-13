// Image gallery data collection
const imageCollection = [
  {
    preview:
      "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=400",
    original:
      "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Нічне місто"
  },
  {
    preview:
      "https://images.pexels.com/photos/3493771/pexels-photo-3493771.jpeg?auto=compress&cs=tinysrgb&w=400",
    original:
      "https://images.pexels.com/photos/3493771/pexels-photo-3493771.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Гори на світанку"
  },
  {
    preview:
      "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=400",
    original:
      "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Лісова стежка"
  },
  {
    preview:
      "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=400",
    original:
      "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Міст через річку"
  },
  {
    preview:
      "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=400",
    original:
      "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Поле лаванди"
  },
  {
    preview:
      "https://images.pexels.com/photos/34087/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    original:
      "https://images.pexels.com/photos/34087/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
    description: "Морське узбережжя"
  }
];

// DOM element references
const galleryContainer = document.querySelector(".gallery");

// Generate HTML markup for gallery items
function buildGalleryHTML(items) {
  return items
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `
    )
    .join("");
}

// Initialize gallery display
galleryContainer.innerHTML = buildGalleryHTML(imageCollection);

// Event handler for gallery item clicks
galleryContainer.addEventListener("click", handleGalleryItemClick);

function handleGalleryItemClick(event) {
  event.preventDefault();

  const clickedElement = event.target;
  if (clickedElement.nodeName !== "IMG") {
    return;
  }

  const fullSizeImageURL = clickedElement.dataset.source;
  const imageDescription = clickedElement.alt ?? "";

  const lightboxInstance = basicLightbox.create(
    `<img src="${fullSizeImageURL}" alt="${imageDescription}" />`
  );

  lightboxInstance.show();
}
