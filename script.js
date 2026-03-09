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

// DIalog außerhalb des Dialogfensters schließen

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

const dialogRef = document.getElementById("imgDialog");

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
    currentIndex = twelveMonthImg.length; // vorher stand dort 12 - Man sollte aber immer mit der Länge des Array's arbeiten! Also keine fixen Werte!
  } // gerade wenn noch ein Bild hinzugefügt wird, ist es mit festen Zahlen ungünstig, da man manuell anpassen muss.

  renderDialog();
}
