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

    // var textFront = document.createElement('h6');
    // textFront.classList.add('card-text', 'mobilvisible');
    // artistName = artistName.replace("_", " ");
    // artistName = artistName.replace("-", "/");
    // textFront.innerHTML = artistName.replace("_", " ");
    var img = createArtistImg(artistName);
    img.classList.add('card__picture');
    var frontSide = document.createElement('div');
    frontSide.classList.add('card__side', 'card__side--front');
    frontSide.appendChild(img);
    // frontSide.appendChild(textFront);

    var textBack = document.createElement('h6');
    var artistNameTitle = artistName;
    while(artistNameTitle.indexOf('_') !== -1) {
      artistNameTitle = artistNameTitle.replace("_", " ");
    }
    artistNameTitle = artistNameTitle.replace("-", "/");
    textBack.innerHTML = artistNameTitle;
    var backSide = document.createElement('div');
    backSide.classList.add(
      'card__side',
      'card__side--back', 
      'd-flex',
      'align-items-center',
      'justify-content-center',
      'border',
      'border-white'
    );
    backSide.appendChild(textBack);

    var a = document.createElement('a');
    a.classList.add('card');
    a.href = 'javascript:;';
    a.id = j.toString();
    a.onclick = function() { openArtist(artist) };
    a.appendChild(frontSide);
    a.appendChild(backSide);

    modalBody.appendChild(a);
    j++;
    if (j < artists[genre].length) {
      createArtist();
    }
  }
  createArtist();
  var quest = questlove();
  modalBody.appendChild(quest);

  modalBody.scrollTo(0, 0);
}

function openArtist(artist) {
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
  div.classList.add('clearfix', 'artist-gallery-container', 'd-flex', 'flex-column', 'align-items-center');

  var img = createArtistImg(artistName);
  img.classList.add('cover-in-text', 'mx-auto', 'd-flex', 'rounded-circle');
  div.appendChild(img);

  var artistTitle = document.createElement('h3');
  artistTitle.classList.add('text-center', 'artist-title');
  var artistNameTitle = artistName;
  while(artistNameTitle.indexOf('_') !== -1) {
    artistNameTitle = artistNameTitle.replace("_", " ");
  }
  artistNameTitle = artistNameTitle.replace("-", "/");
  artistTitle.innerHTML = artistNameTitle;
  div.appendChild(artistTitle);

  if (artist.text) {
    var p = document.createElement('p');
    p.classList.add('text-center');
    p.innerHTML += readTextFile('/artists/text/' + artistName + '.txt');
    div.appendChild(p);
  }

  if (artist.website || artist.links) {
  var linksContainer = document.createElement('div');
  linksContainer.classList.add('d-flex', 'flex-row', 'justify-content-center', 'align-items-center', 'links-container');
    if (artist.website) {
      var icon = document.createElement('img');
      icon.src = '/images/social_icons/website.png';
      icon.classList.add('artist-website');
      var link = document.createElement('a');
      link.href = artist.website;
      link.target = '_blank';
      link.classList.add('d-flex');
      link.appendChild(icon);
      linksContainer.appendChild(link); 
    }  
    if (artist.links) {
        var links = artist.links;
        for (var i = 0; i < links.length; i++) {
          if (links[i].indexOf('youtube') !== -1 || links[i].indexOf('youtu.be') !== -1) {
            var icon = document.createElement('img');
            icon.src = '/images/social_icons/youtube.png';
            icon.classList.add('artist-social-icon');
            var link = document.createElement('a');
            link.href = links[i];
            link.target = '_blank';
            link.classList.add('d-flex');
            link.appendChild(icon);
            linksContainer.appendChild(link);
          } else if (links[i].indexOf('soundcloud') !== -1) {
            var icon = document.createElement('img');
            icon.src = '/images/social_icons/soundcloud.png';
            icon.classList.add('artist-social-icon');
            var link = document.createElement('a');
            link.href = links[i];
            link.target = '_blank';
            link.classList.add('d-flex');
            link.appendChild(icon);
            linksContainer.appendChild(link);
          } else if (links[i].indexOf('facebook') !== -1) {
            var icon = document.createElement('img');
            icon.src = '/images/social_icons/facebook.png';
            icon.classList.add('artist-facebook');
            var link = document.createElement('a');
            link.href = links[i];
            link.target = '_blank';
            link.classList.add('d-flex');
            link.appendChild(icon);
            linksContainer.appendChild(link);
          }
        }
    }
  div.appendChild(linksContainer);
  }
  modalBody.appendChild(div);

  // var modalContent = document.getElementById('modalContent');
  modalBody.scrollTo(0, 0);
}

function createArtistImg(artist) {
  var img = document.createElement('img');
  img.src = '/artists/foto/' + artist + '.png';
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

function questlove() {
  var textFront = document.createElement('h1');
  textFront.classList.add('d-flex');
  textFront.innerHTML = "?";
  var frontSide = document.createElement('div');
  frontSide.classList.add('card__side', 'card__side--front', 'quest-card');
  frontSide.classList.add('d-flex', 'justify-content-center', 'align-items-center');
  frontSide.appendChild(textFront);

  var textBack = document.createElement('h6');
  textBack.innerHTML = "Soon..";
  var backSide = document.createElement('div');
  backSide.classList.add(
    'card__side',
    'card__side--back',
    'd-flex', 
    'align-items-center',
    'justify-content-center'
  );
  backSide.appendChild(textBack);

  var card = document.createElement('div');
  card.classList.add('card');
  card.appendChild(frontSide);
  card.appendChild(backSide);
  return card;
}
