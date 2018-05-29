// -------------------- ARTISTS --------------------
var artistJazz = [
  'Flying_Lotus', 'Kaytranada', 'Saba', 'Toonorth',
  'Flying_Lotus', 'Kaytranada', 'Saba', 'Toonorth',
  'Flying_Lotus', 'Kaytranada', 'Saba', 'Toonorth',
  'Flying_Lotus', 'Kaytranada', 'Saba', 'Toonorth',
  'Flying_Lotus', 'Kaytranada', 'Saba', 'Toonorth',
];
var artistElectro = [
  'Dorian_Concept',
  'Dorian_Concept',
  'Dorian_Concept',
  'Dorian_Concept',
  'Dorian_Concept',
  'Dorian_Concept',
  'Dorian_Concept',
  'Dorian_Concept',
  'Dorian_Concept',
  'Dorian_Concept',
];
var artistDivadlo = [
  'French_Fries',
  'French_Fries',
  'French_Fries',
  'French_Fries',
  'French_Fries',
  'French_Fries',
  'French_Fries',
  'French_Fries',
  'French_Fries',
  'French_Fries',
  'French_Fries',
];
// -------------------------------------------------
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
      var a = document.createElement('a');
      a.classList.add('cover');
      a.href = 'javascript:;';
      a.id = j.toString();
      a.onclick = function() { openArtist(genre, artist) };

      var img = createImg(genre, artist);
      img.classList.add('cover_front');
      a.appendChild(img);

      var textContainer = document.createElement('div');

      var text = document.createElement('h6');
      text.innerHTML = artist.replace("_", " ");
      text.classList.add('text-over-image');
      text.classList.add('invisible');
      a.onmouseover = function() { text.classList.remove('invisible') }
      a.onmouseout = function() { text.classList.add('invisible') }
      textContainer.appendChild(text);

      a.appendChild(textContainer);
      modalBody.appendChild(a);

      j++;
      if (j < artistNames.length) {
        createArtist();
      }
    }
    createArtist();
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
}

function createImg(genre, artist) {
    var img = document.createElement('img');
    img.src = '/artists/' + genre + '/' + artist + '.jpg';
    if (artist != null) {
      img.alt = artist;
    }
    return img;
}

function createBackSide(artist) {
    var back = document.createElement('div');
    back.classList.add('cover_back', 'text-center');
    back.innerHTML = artist;
    return back;
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
