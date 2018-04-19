// artists declaration
var artistJazz = ['Jedna', 'Kaytranada', 'tri', 'ctyri'];
var artistElectro = ['nekdo'];
var artistDivadlo = ['nekdo'];

function showGallery(genre) {
  var title = document.getElementById('modalTitle');
  title.innerHTML = genre;

  document.getElementById('back');
  back.classList.add('invisible');
  back.onclick = function() { showGallery(genre) };
  // $("#bfCaptchaEntry").click(function(){ myFunction(); });

  // clean up
  var modalBody = document.getElementById('modalBody');
  while (modalBody.firstChild) {
      modalBody.removeChild(modalBody.firstChild);
  }
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
  var title = document.getElementById('modalTitle');
  title.innerHTML = artist;
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
  img.classList.add('cover-in-text');
  img.classList.add('float-left');

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
    back.classList.add('cover_back');
    back.classList.add('text-center');
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
