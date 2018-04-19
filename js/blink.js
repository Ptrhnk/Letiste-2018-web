var l, e, t, i, s, hacek, tt, ee, hacek_, logo, pismena;
const words = [
  'Letišťě',
  'Let',
  'Letiš',
  'Les',
  'Lesť',
  'Lis',
  'Lisť',
  'Liť',
  'Et',
  'Ti',
  'Tiť',
  'Tišé',
  'Isťě',
  'Iť',
  'ťě',
];
//
function blinkRandom() {
  setTimeout(() => {
    var interval = setInterval("showLetter()", 600);
    var interval = setInterval("randomWords()", 3000);
    var interval = setInterval("logoBlink()", 800);
  }, 10000);
}

function showLetter() {
  l = document.getElementById("l");
  e = document.getElementById("e");
  t = document.getElementById("t");
  i = document.getElementById("i");
  s = document.getElementById("s");
  hacek = document.getElementById("hacek");
  tt = document.getElementById("tt");
  ee = document.getElementById("ee");
  hacek_ = document.getElementById("hacek_");

  var charArr = [l, e, t, i, s, hacek, tt, ee, hacek_];
  var letter = charArr[Math.floor(Math.random() * charArr.length)];

  setTimeout(function() {
    letter.style.visibility = "visible";
      setTimeout(function() {
        letter.style.visibility = "hidden";
    }, Math.floor(Math.random() * 900) + 100);
  }, Math.floor((Math.random() * 5000) + 300));
}

function logoBlink() {
  var logo = document.getElementById("logo");
  setTimeout(function() {
    logo.style.visibility = "hidden";
      setTimeout(function() {
        logo.style.visibility = "visible";
    }, Math.floor(Math.random() * 50) + 10);
  }, Math.floor((Math.random() * 4000) + 300));
}

function randomWords() {
  l = document.getElementById("l");
  e = document.getElementById("e");
  t = document.getElementById("t");
  i = document.getElementById("i");
  s = document.getElementById("s");
  hacek = document.getElementById("hacek");
  tt = document.getElementById("tt");
  ee = document.getElementById("ee");
  hacek_ = document.getElementById("hacek_");

  var word = words[Math.floor(Math.random() * words.length)].toLowerCase();

  setTimeout(function() {
    toggleWord(word, true);
      setTimeout(function() {
        toggleWord(word, false)
      }, Math.floor(Math.random() * 1600) + 400);
  }, Math.floor((Math.random() * 1600) + 400));

  function toggleWord(word, setVisible) {
    var visibility = setVisible ? "visible" : "hidden";
    var j = 0;
    function writeChar() {
      setTimeout(function() {
        switch(word.charAt(j)) {
          case 'l':
          l.style.visibility = visibility;
          break;
          case 'e':
          e.style.visibility = visibility;
          break;
          case 't':
          t.style.visibility = visibility;
          break;
          case 'i':
          i.style.visibility = visibility;
          break;
          case 's':
          s.style.visibility = visibility;
          break;
          case 'š':
          hacek.style.visibility = visibility;
          s.style.visibility = visibility;
          break;
          case 'ť':
          tt.style.visibility = visibility;
          break;
          case 'é':
          ee.style.visibility = visibility;
          break;
          case 'ě':
          ee.style.visibility = visibility;
          hacek_.style.visibility = visibility;
          break;
        }
        j++;
        if (j < word.length) {
          writeChar();
        }
      }, Math.floor(Math.random() * 50) + 10);
    }
    writeChar();
  }
}
