var l, e, t, i, s, hacek, tt, ee, hacek_, logo;

function blinkRandom() {
  var interval = setInterval("showLetter()", 180);
  var interval = setInterval("shadowBlink()", 800);
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

function shadowBlink() {
  var logo = document.getElementById("logo");
  setTimeout(function() {
    logo.style.visibility = "hidden";
      setTimeout(function() {
        logo.style.visibility = "visible";
    }, Math.floor(Math.random() * 50) + 10);
  }, Math.floor((Math.random() * 4000) + 300));
}

// logo.style.setProperty("-webkit-filter", "drop-shadow(0px 0px 1px #2A8EFF)");
