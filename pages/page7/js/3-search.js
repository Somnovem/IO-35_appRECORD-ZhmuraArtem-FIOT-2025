// API configuration
const PIXABAY_API_KEY = "YOUR_PIXABAY_API_KEY";
const API_BASE_URL = "https://pixabay.com/api/";
const RESULTS_PER_PAGE = 40;

// DOM element references
const searchFormElement = document.querySelector(".search-form");
const searchInputField = searchFormElement.elements.query;
const galleryContainer = document.querySelector(".search-gallery");
const loadingIndicator = document.querySelector(".loader");

let lightboxInstance = null;

// Event listener
searchFormElement.addEventListener("submit", handleSearchSubmission);

function handleSearchSubmission(event) {
  event.preventDefault();

  const searchQuery = searchInputField.value.trim();

  if (searchQuery === "") {
    iziToast.warning({
      title: "Увага",
      message: "Введіть, будь ласка, ключове слово для пошуку",
      position: "topRight"
    });
    return;
  }

  resetGallery();

  showLoadingIndicator();

  retrieveImages(searchQuery)
    .then(data => {
      if (!data.hits || data.hits.length === 0) {
        iziToast.info({
          title: "Результати",
          message:
            "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight"
        });
        return;
      }

      const galleryMarkup = generateGalleryMarkup(data.hits);
      galleryContainer.innerHTML = galleryMarkup;

      if (!lightboxInstance) {
        lightboxInstance = new SimpleLightbox(".search-gallery a", {
          captionsData: "alt",
          captionDelay: 250
        });
      } else {
        lightboxInstance.refresh();
      }
    })
    .catch(error => {
      console.error("Помилка запиту:", error);
      iziToast.error({
        title: "Помилка",
        message: "Сталася помилка під час завантаження зображень",
        position: "topRight"
      });
    })
    .finally(() => {
      hideLoadingIndicator();
    });
}

function retrieveImages(query) {
  const queryParameters = new URLSearchParams({
    key: PIXABAY_API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    per_page: RESULTS_PER_PAGE
  });

  const requestURL = `${API_BASE_URL}?${queryParameters.toString()}`;

  return fetch(requestURL).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  });
}

function generateGalleryMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads
      }) => `
      <li class="gallery__item">
        <a class="photo-card__thumb" href="${largeImageURL}">
          <img
            class="photo-card__image"
            src="${webformatURL}"
            alt="${tags}"
            loading="lazy"
          />
        </a>
        <div class="photo-card__info">
          <div class="photo-card__info-item">
            <span class="photo-card__label">Likes</span>
            <span class="photo-card__value">${likes}</span>
          </div>
          <div class="photo-card__info-item">
            <span class="photo-card__label">Views</span>
            <span class="photo-card__value">${views}</span>
          </div>
          <div class="photo-card__info-item">
            <span class="photo-card__label">Comments</span>
            <span class="photo-card__value">${comments}</span>
          </div>
          <div class="photo-card__info-item">
            <span class="photo-card__label">Downloads</span>
            <span class="photo-card__value">${downloads}</span>
          </div>
        </div>
      </li>
    `
    )
    .join("");
}

function resetGallery() {
  galleryContainer.innerHTML = "";
}

function showLoadingIndicator() {
  loadingIndicator.hidden = false;
}

function hideLoadingIndicator() {
  loadingIndicator.hidden = true;
}
