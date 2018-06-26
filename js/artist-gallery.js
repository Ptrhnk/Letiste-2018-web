function showGallery(genre) {
  // var title = document.getElementById('modalTitle');
  // title.innerHTML = genre;

  document.getElementById('back');
  back.classList.add('invisible');
  // back.classList.remove('d-flex');
  // back.classList.add('d-none');
  back.onclick = function() { showGallery(genre) };
  // $("#bfCaptchaEntry").click(function(){ myFunction(); });

  // clean up
  var modalBody = document.getElementById('modalBody');
  while (modalBody.firstChild) {
      modalBody.removeChild(modalBody.firstChild);
  }
  // dosazení konkrétního žánru do artistNames
  genre = genre.toLowerCase();

  // self invoking function for creating gallery
  var j = 0;
  function createArtist() {
    var artist = artists[genre][j];
    var artistName = artists[genre][j].name;

    var textFront = document.createElement('h6');
    textFront.classList.add('card-text', 'mobilvisible');
    textFront.innerHTML = artistName.replace("_", " ");
    var img = createImg(genre, artistName);
    img.classList.add('card__picture');
    var frontSide = document.createElement('div');
    frontSide.classList.add('card__side', 'card__side--front');
    frontSide.appendChild(img);
    // frontSide.appendChild(textFront);

    var textBack = document.createElement('h6');
    textBack.innerHTML = artistName.replace("_", " ");
    var backSide = document.createElement('div');
    backSide.classList.add('card__side', 'card__side--back', 'd-flex', 'align-items-center', 'justify-content-center');
    backSide.appendChild(textBack);

    var a = document.createElement('a');
    a.classList.add('card');
    a.href = 'javascript:;';
    a.id = j.toString();
    a.onclick = function() { openArtist(genre, artist) };
    a.appendChild(frontSide);
    a.appendChild(backSide);

    modalBody.appendChild(a);
    j++;
    if (j < artists[genre].length) {
      createArtist();
    }
  }
  createArtist();

  

  modalBody.scrollTo(0, 0);
}

function openArtist(genre, artist) {
  console.log(artist.sc);
  console.log(artist.yt);
  var artistName = artist.name;
  var modalBody = document.getElementById('modalBody');
  // clean up
  while (modalBody.firstChild) {
      modalBody.removeChild(modalBody.firstChild);
  }
  // add back button
  var back = document.getElementById('back');
  back.classList.remove('invisible');
  // back.classList.remove('d-none');
  // back.classList.add('d-flex');
  //
  var div = document.createElement('div');
  div.classList.add('clearfix', 'artist-gallery-container');

  var img = createImg(genre, artistName);
  img.classList.add('cover-in-text', 'mx-auto', 'd-block', 'rounded-circle', 'img-thumbnail');
  div.appendChild(img);

  var artistTitle = document.createElement('h3');
  artistTitle.classList.add('text-center', 'artist-title');
  artistTitle.innerHTML = artistName.replace("_", " ");
  div.appendChild(artistTitle);
  // console.log(artists[artist]);
  // alert(artists.artist.sc);

  var p = document.createElement('p');
  p.classList.add('text-center');
  p.innerHTML += readTextFile('/artists/' + genre + '/' + artistName + '.txt');
  div.appendChild(p);
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
