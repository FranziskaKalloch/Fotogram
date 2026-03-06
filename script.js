// Array mit den Bilder (CHECK = let twelveMonth =[];)
// Funktion für Dialog öffnen erstellen
// Funktion für Dialog schließen erstellen
// Funktion in Dialog nach links und/oder rechts
// Funktion zum Rendern für Dialoginhalt (dynmaisch)
// init Funktion erstellen, die beim Start der App ausgeführt wird & die render Funktion aufruft.

// Funktion für Rendern für Miniaturansicht (dynamisch)
// -> Funtkion erstellen (CHECK)
// -> Funktion muss aufgerufen werden.
// -> Bereich in HTML anlegen <div id="img-container"> (CHECK) , wo die Bilder drin sind. Bilder aus dem Array.
// -> Der Bereich sollte mit CSS entsprechend gestylt werden.
// -> for-Schleife erstellen

const basePath = "assets/img/romy/";

const twelveMonthImg = [
  "Geburt.jpg",
  "1-Monat.jpg",
  "2-Monate.jpg",
  "3-Monate.jpg",
  "4-Monate.jpg",
  "5-Monate.jpg",
  "6-Monate.jpg",
  "7-Monate.jpg",
  "8-Monate.jpg",
  "9-Monate.jpg",
  "10-Monate.jpg",
  "11-Monate.jpg",
  "1-Jahr.jpg",
];

let currentIndex = 0;

for (let image of twelveMonthImg) {
  console.log(image);
}

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

// OPEN DIALOG

function openDialog(index) {
  currentIndex = index;
  console.log("openDialog index:", index);
  const dialogRef = document.getElementById("imgDialog");
  dialogRef.showModal();

  renderDialog();
}

// CLOSE DIALOG

function closeDialog() {
  const dialogRef = document.getElementById("imgDialog");
  dialogRef.close();
}

// RENDER DIALOG

function renderDialog() {
  const pictureRef = document.getElementById("dialogPicture");
  pictureRef.innerHTML = `
  <img class="img" src="${basePath}${twelveMonthImg[currentIndex]}">`;

  const fileNameRef = document.getElementById("fileName");
  fileNameRef.innerHTML = twelveMonthImg[currentIndex];

  const counterRef = document.getElementById("counter");
  counterRef.textContent = `${currentIndex + 1} / ${twelveMonthImg.length}`;
}

/// NEXT und PREV

function nextImage() {
  currentIndex++;
  if (currentIndex >= twelveMonthImg.length) {
    currentIndex = 0;
  }

  renderDialog();
}

function prevImage() {
  currentIndex--;
  if (currentIndex <= twelveMonthImg.length) {
    currentIndex = 12;
  }

  renderDialog();
}
