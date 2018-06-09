<<<<<<< HEAD
=======
// artists declaration
var artistJazz = ['Jedna', 'Kaytranada', 'tri', 'ctyri', 'Jedna', 'Kaytranada', 'tri', 'ctyri'];
var artistElectro = ['nekdo'];
var artistDivadlo = ['nekdo'];

>>>>>>> e2e2e3f9a9b8604463a80fe7bd76324313f5a704
function showGallery(genre) {
  // var title = document.getElementById('modalTitle');
  // title.innerHTML = genre;

  document.getElementById('back');
  back.classList.add('invisible');
  back.onclick = function() { showGallery(genre) };
  // $("#bfCaptchaEntry").click(function(){ myFunction(); });

  // clean up
  var modalBody = document.getElementById('modalBody');
  while (modalBody.firstChild) {
      modalBody.removeChild(modalBody.firstChild);
  }

  // dosazení konkrétního žánru do artistNames
  genre = genre.toLowerCase();
  switch (genre) {
    case 'jazz':
    var artistNames = artistJazz;
    break;
    case 'elektronika':
    var artistNames = artistElectro;
    break;
    case 'divadlo':
    var artistNames = artistDivadlo;
    break;
  }

  // self invoking function for creating gallery
  var j = 0;
  function createArtist() {
    var artist = artistNames[j];

    var text = document.createElement('h6');
    text.innerHTML = artist.replace("_", " ");

    var img = createImg(genre, artist);
    img.classList.add('card__picture');

    var frontSide = document.createElement('div');
    frontSide.classList.add('card__side', 'card__side--front');
    frontSide.appendChild(img);
    frontSide.appendChild(text);

    var backSide = document.createElement('div');
    backSide.classList.add('card__side', 'card__side--back', 'd-flex', 'align-items-center', 'justify-content-center');
    backSide.appendChild(text);

    var a = document.createElement('a');
    a.classList.add('card');
    a.href = 'javascript:;';
    a.id = j.toString();
    a.onclick = function() { openArtist(genre, artist) };
    a.appendChild(frontSide);
    a.appendChild(backSide);

    modalBody.appendChild(a);
    j++;
    if (j < artistNames.length) {
      createArtist();
    }
  }
  createArtist();
  // scroll to top
  // var modalContent = document.getElementById('modalContent');
  modalBody.scrollTo(0, 0);
}

function openArtist(genre, artist) {
  // TODO: improve this page!
  // var title = document.getElementById('modalTitle');
  // title.innerHTML = artist.replace("_", " ");
  var modalBody = document.getElementById('modalBody');
  // clean up
  while (modalBody.firstChild) {
      modalBody.removeChild(modalBody.firstChild);
  }
  // add back button
  var back = document.getElementById('back');
  back.classList.remove('invisible');
  //
  var div = document.createElement('div');
  div.classList.add('clearfix');

  var img = createImg(genre, artist);
  img.classList.add('cover-in-text', 'mx-auto', 'd-block', 'rounded-circle', 'img-thumbnail');

  div.appendChild(img);
  div.innerHTML += readTextFile('/artists/' + genre + '/' + artist + '.txt');
  modalBody.appendChild(div);

  var modalContent = document.getElementById('modalContent');
  modalBody.scrollTo(0, 0);
}

function createImg(genre, artist) {
  var img = document.createElement('img');
  img.src = '/artists/' + genre + '/' + artist + '.jpg';
  if (artist != null) {
    img.alt = artist;
  }
  return img;
}

function readTextFile(file) {
  var text;
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
      if(rawFile.readyState === 4) {
          if(rawFile.status === 200 || rawFile.status == 0) {
              var allText = rawFile.responseText;
              text = allText;
          }
      }
  }
  rawFile.send(null);
  return text;
}
