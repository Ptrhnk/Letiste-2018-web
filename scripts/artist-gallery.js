var artistJazz = ['nekdo', 'cover', 'cover_big', 'cover', 'cover_big', 'cover', 'cover_big', 'cover',];
var artistElectro = ['cover_big'];
var artistDivadlo = ['cover'];
var genre;

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var genre = button.data('genre') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(genre)
  // modal.find('.modal-body').empty()
})

function showGallery(genre) {
var modalBody = document.getElementById('modalBody');
this.genre = genre;
// header
  // var genreEdit = genre.charAt(0).toUpperCase() + genre.slice(1);
  // document.getElementById('modalTitle').innerHTML = genreEdit;

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
    var a = document.createElement('a');
    a.href = 'javascript:;';
    a.id =
    a.onclick = function() { openArtist(genre, artistNames[i])};
    a.appendChild(img_create('/artists/' + genre + '/' + artistNames[i] + '.jpg'), artistNames[i], artistNames[i]);
    modalBody.appendChild(a);
  }
}

function readTextFile(file) {
  var text;
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function ()
  {
      if(rawFile.readyState === 4)
      {
          if(rawFile.status === 200 || rawFile.status == 0)
          {
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
    console.log(artist);
    var div = document.createElement('div');
    div.innerHTML = readTextFile('/artists/' + genre + '/' + 'nekdo' + '.txt');
    modalBody.appendChild(div);
}

function img_create(src, alt, title) {
    var img = document.createElement('img');
    img.src = src;
    img.classList.add('cover');
    img.style.width = '200px';
    if ( alt != null ) img.alt = alt;
    if ( title != null ) img.title = title;
    return img;
}
