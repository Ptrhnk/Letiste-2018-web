var partnerTypes = [
    "financne",
    "medialni",
    "partneri"
];
var typeNames = [
    "Finančně podpořili:",
    "Mediální partneři:",
    "Partneři:"
];

function partnersGallery() {
    // clean up
    var modalBody = document.getElementById('modalBody');
  while (modalBody.firstChild) {
      modalBody.removeChild(modalBody.firstChild);
  }

  var allPartnersContainer = document.createElement('div');
  allPartnersContainer.classList.add('d-flex', 'flex-column', 'align-items-center', 'partners-container');

  for (var i = 0; i < partnerTypes.length; i++) {
    var partnerGroupTitle = document.createElement('h3');
    partnerGroupTitle.classList.add('partners-title', 'text-center');
    partnerGroupTitle.innerHTML = typeNames[i];
    var partnerGroupLogos = createPartners(partnerTypes[i]);
    var partnerGroup = document.createElement('div');
    partnerGroup.appendChild(partnerGroupTitle);
    partnerGroup.appendChild(partnerGroupLogos);
    allPartnersContainer.appendChild(partnerGroup);
  }
  modalBody.appendChild(allPartnersContainer);
}

function createPartners(category) {
    var groupContainer = document.createElement('div');
    groupContainer.classList.add('d-flex', 'flex-fix', 'flex-row', 'flex-wrap', 'justify-content-center', 'partners-group-container');

    var j = 0;
    function createPartner() {
        var partner = partners[category][j];
        var partnerContainer = document.createElement('div');
        partnerContainer.classList.add('d-flex', 'flex-column', 'align-items-center', 'partner-container')
        if (partner.name) {
            var partnerTitle = document.createElement('h5');
            partnerTitle.classList.add('text-center');
            var partnerNameTitle = partner.name;
            partnerTitle.innerHTML = partnerNameTitle;
            partnerContainer.appendChild(partnerTitle);
        }
        if (partner.icon) {
            var img = document.createElement('img');
            img.src = '/partners/' + partner.icon;
            img.classList.add('partner-logo');
            partnerContainer.appendChild(img);
        }
        groupContainer.appendChild(partnerContainer);
        
        j++;
        if (j < partners[category].length) {
            createPartner();
        }
    }
    createPartner();
    return groupContainer;
}
