var artistJazz = ['jedna', 'dva', 'tri', 'ctyri'];
var artistElectro = ['nekdo'];
var artistDivadlo = ['nekdo'];
var genre;


function showGallery(genre) {
  $('#modalCenter').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var genre = button.data('genre'); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here,
    // but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(genre);
  });

  document.getElementById('back')
  back.classList.add('invisible');
  back.onclick = function() { showGallery(genre) };
  // $("#bfCaptchaEntry").click(function(){ myFunction(); });

  // header

  var modalBody = document.getElementById('modalBody');
  this.genre = genre;

  // clean up
  while (modalBody.firstChild) {
      modalBody.removeChild(modalBody.firstChild);
  }

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
  for(var i = 0; i < artistNames.length; i++) {
    var artist = artistNames[i];
    var a = document.createElement('a');
    a.href = 'javascript:;';
    a.id = i.toString();
    console.log('artists in showGallery: ', artist);
    a.onclick = function() { openArtist(genre, artist) };
    a.appendChild(img_create('/artists/' + genre + '/' + artist + '.jpg'), artist, artist);
    modalBody.appendChild(a);
  }
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

function openArtist(genre, artist) {
  var modalBody = document.getElementById('modalBody');
  // clean up
  while (modalBody.firstChild) {
      modalBody.removeChild(modalBody.firstChild);
  }
    // add back button
  var back = document.getElementById('back');
  back.classList.remove('invisible');
    console.log('artist in openArtist: ', artist);
    //
  var div = document.createElement('div');
  // div.innerHTML = readTextFile('/artists/' + genre + '/' + 'nekdo' + '.txt');
  div.innerHTML = readTextFile('/artists/' + genre + '/' + artist + '.txt');
  modalBody.appendChild(div);
}

function img_create(src, alt, title) {
    var img = document.createElement('img');
    img.src = src;
    img.classList.add('cover');
    if ( alt != null ) img.alt = alt;
    if ( title != null ) img.title = title;
    return img;
}
