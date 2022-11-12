fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((data) => getPhotos(data));

const parentRow = document.getElementById("row");
const getPhotos = (photos) => {
  for (let i = 0; i <= 50; i++) {
    parentRow.innerHTML += `
        <div class="col-6">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${photos[i].url}" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${photos[i].title}</h5>
                    <p class="card-text">Item Id : ${photos[i].id}</p>
                    <p class="card-text">Album Id : ${photos[i].albumId}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    `;
  }
};
