let currentIndex = 0;
const basePath = "assets/img/romy/";
const dialogRef = document.getElementById("imgDialog");

const twelveMonthImg = [
  "Geburt.jpeg",
  "1-Monat.jpeg",
  "2-Monate.jpeg",
  "3-Monate.jpeg",
  "4-Monate.jpeg",
  "5-Monate.jpeg",
  "6-Monate.jpeg",
  "7-Monate.jpeg",
  "8-Monate.jpeg",
  "9-Monate.jpeg",
  "10-Monate.jpeg",
  "11-Monate.jpeg",
  "1-Jahr.jpeg",
];

function init() {
  render();
}

function render() {
  const imgContainerRef = document.getElementById("img-container");
  imgContainerRef.innerHTML = "";

  for (let i = 0; i < twelveMonthImg.length; i++) {
    imgContainerRef.innerHTML += `
      <img class="gallery-img" onclick="openDialog(${i})" src="${basePath}${twelveMonthImg[i]}" alt="Romy Monat ${i}">
      `;
  }
}

function openDialog(index) {
  currentIndex = index;
  renderDialog();
  dialogRef.showModal();
}

function closeDialog() {
  dialogRef.close();
}

function stopMyPropagation(event) {
  event.stopPropagation();
}

function renderDialog() {
  const pictureRef = document.getElementById("dialogPicture");
  pictureRef.innerHTML = `
  <img class="img" src="${basePath}${twelveMonthImg[currentIndex]}">`;

  const fileNameRef = document.getElementById("fileName");
  fileNameRef.innerHTML = twelveMonthImg[currentIndex];

  const counterRef = document.getElementById("counter");
  counterRef.textContent = `${currentIndex + 1} / ${twelveMonthImg.length}`;
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= twelveMonthImg.length) {
    currentIndex = 0;
  }

  renderDialog();
}

function prevImage() {
  currentIndex--;
  if (currentIndex <= 0) {
    currentIndex = twelveMonthImg.length;
  }

  renderDialog();
}
