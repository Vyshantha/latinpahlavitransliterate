function hide() {
  document.getElementById("tooltip1").classList.remove("block");
  document.getElementById("tooltip2").classList.remove("block");
}
function show1() {
  document.getElementById("tooltip1").classList.add("block");
  var self = this;
  setTimeout(function () {
    self.hide();
  }, 3000);
}
function show2() {
  document.getElementById("tooltip2").classList.add("block");
  var self = this;
  setTimeout(function () {
    self.hide();
  }, 3000);
}

function swapTransliteration() {
  if (localStorage.getItem("direction") == null || localStorage.getItem("direction") == undefined || localStorage.getItem("direction") == "latin2pahlavi") {
    localStorage.setItem("direction", "pahlavi2latin");
    document.getElementById("textarea1").readOnly = true;
    document.getElementById('textarea2').removeAttribute('readonly');
    document.getElementById("textarea2").focus();
    document.getElementById("Pahlavi").classList.add("currentTab");
    document.getElementById("Latin").classList.remove("currentTab");
  } else if (localStorage.getItem("direction") == "pahlavi2latin") {
    localStorage.setItem("direction", "latin2pahlavi");
    document.getElementById('textarea1').removeAttribute('readonly');
    document.getElementById("textarea2").readOnly = true;
    if (localStorage.getItem("encoding") == "Latin")
      document.getElementById("textarea1").focus();
    document.getElementById("Pahlavi").classList.remove("currentTab");
    document.getElementById("Latin").classList.add("currentTab");
  }
}

function clearFooter() {
  document.getElementsByClassName("footerOfPage")[0].style = "display:none";
}

function copyContent1() {
  navigator.clipboard.writeText(document.getElementById("textarea1").value);
}

function copyContent2() {
  navigator.clipboard.writeText(document.getElementById("textarea2").value);
}

/*
  TODO : https://gitlab.cceh.uni-koeln.de/mpcd/handbooks/-/wikis/Pahlavi-script
  TODO : Multiple phonetic value for same character
*/

function transliterate() {
  if (document.getElementById("textarea1").value.indexOf("script>") > -1 || document.getElementById("textarea2").value.indexOf("script>") > -1) {
    document.getElementById("textarea1").value = "";
    document.getElementById("textarea2").value = "";
    document.getElementById("textarea1").innerHTML = "";
    document.getElementById("textarea2").innerHTML = "";
  }

  if (localStorage.getItem("direction") == null || localStorage.getItem("direction") == undefined || localStorage.getItem("direction") == "latin2pahlavi") {
    const latinToPahlavi = { " ": "  ", ".": ".", ",": ",", ";": ";", "?": "?", "!": "!", "\"": "\"", "'": "'", "(": "(", ")": ")", ":": ":", "+": "+", "=": "=", "/": "/", "-": "-", "<": "<", ">": ">", "*": "*", "|": "|", "\\": "\\", "₹": "₹", "{": "{", "}": "}", "[": "[", "]": "]", "_": "_", "%": "%", "@": "@", "ˆ": "ˆ", "`": "`", "´": "´", "·": "·", "˙": "˙", "¯": "¯", "¨": "¨", "˚": "˚", "˝": "˝", "ˇ": "ˇ", "¸": "¸", "˛": "˛", "˘": "˘", "’": "’", "t":"𐭲","š":"𐭱","q":"𐭬","r":"𐭥","ṣ":"𐭰","p":"𐭯","s":"𐭮","n":"𐭭","m":"𐭬","l":"𐭫","k":"𐭪","y":"𐭩","ṭ":"𐭨","ḥ":"𐭧","z":"𐭦","w":"𐭥","h":"𐭤","d":"𐭣","g":"𐭢","b":"𐭡","ʾ":"𐭠","1000":"𐭿","100":"𐭾","20":"𐭽","10":"𐭼","4":"𐭻","3":"𐭺","2":"𐭹","1":"𐭸" };

    let resultPahlavi = "";
    let textLa = document.getElementById("textarea1").value;

    for (let u = 0; u < textLa.length; u++) {
      if (textLa[u].indexOf("\n") > -1) { // New Lines
        resultPahlavi = resultPahlavi + "\n";
      } else if (latinToPahlavi[textLa[u]] != undefined && latinToPahlavi[textLa[u]] != null && textLa[u] != "") { // Default Single Character
        resultPahlavi = resultPahlavi + latinToPahlavi[textLa[u]];
      }
    }

    document.getElementById("textarea2").value = resultPahlavi;
    document.getElementById("textarea2").innerHTML = resultPahlavi;
  } else if (localStorage.getItem("direction") == "pahlavi2latin") {
    const pahlaviToLatin = { " ": " ", "।": ".", "॥": ".", ",": ",", ";": ";", "?": "?", "!": "!", "\"": "\"", "'": "'", "(": "(", ")": ")", ":": ":", "+": "+", "=": "=", "/": "/", "-": "-", "<": "<", ">": ">", "*": "*", "|": "|", "\\": "\\", "₹": "₹", "{": "{", "}": "}", "[": "[", "]": "]", "_": "_", "%": "%", "@": "@", "ˆ": "ˆ", "`": "`", "´": "´", "˜": "˜", "·": "·", "˙": "˙", "¯": "¯", "¨": "¨", "˚": "˚", "˝": "˝", "ˇ": "ˇ", "¸": "¸", "˛": "˛", "˘": "˘", "’": "’", "𐭲":"t","𐭱":"š","𐭥":"r","𐭬":"q","𐭰":"ṣ","𐭯":"p","𐭮":"s","𐭭":"n","𐭬":"m","𐭫":"l","𐭪":"k","𐭩":"y","𐭨":"ṭ","𐭧":"ḥ","𐭦":"z","𐭥":"w","𐭤":"h","𐭣":"d","𐭢":"g","𐭡":"b","𐭠":"ʾ","𐭿":"1000","𐭾":"100","𐭽":"20","𐭼":"10","𐭻":"4","𐭺":"3","𐭹":"2","𐭸":"1" };

    let resultLa = "";
    let textPahlavi = document.getElementById("textarea2").value;
    for (let u = 0 ; u < textPahlavi.length ; u++ ) {
      if (textPahlavi[u].indexOf("\n") > -1) {
        resultLa = resultLa + "\n";
      } else if (pahlaviToLatin[textPahlavi[u] + textPahlavi[u+1]] != undefined && pahlaviToLatin[textPahlavi[u] + textPahlavi[u+1]] != null && textPahlavi[u] != "" &&  textPahlavi[u+1] != "") { // Multiple Unicode Points
        resultLa = resultLa + pahlaviToLatin[textPahlavi[u] + textPahlavi[u+1]];
        u++;
      } else if (pahlaviToLatin[textPahlavi[u]] != undefined && pahlaviToLatin[textPahlavi[u]] != null && textPahlavi[u] != "") { // Default Single Character
        resultLa = resultLa + pahlaviToLatin[textPahlavi[u]];
      }
      //console.log(" " + textPahlavi[u].charCodeAt(0) + " \n")
      //console.log(" " + textPahlavi[u].toString(16) + " \n")
    }
    document.getElementById("textarea1").value = resultLa;
    document.getElementById("textarea1").innerHTML = resultLa;
  }
}

function swap(json) {
  var ret = {};
  for (var key in json) {
    ret[json[key]] = key;
  }
  return ret;
}

function openTab(evt, localeName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(localeName).style.display = "block";
  evt.currentTarget.className += " active";
  localStorage.setItem("encoding", localeName);
  transliterate();
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
document.getElementById("textarea1").focus();
if (localStorage.getItem("direction") == null || localStorage.getItem("direction") == undefined || localStorage.getItem("direction") == "pahlavi2latin") {
  localStorage.setItem("direction", "latin2pahlavi");
  localStorage.setItem("encoding", "Latin");
} else if (localStorage.getItem("direction") != "pahlavi2latin" && localStorage.getItem("direction") != "latin2pahlavi") {
  localStorage.clear();
}

if (screen.width >= 300 && screen.width <= 500) {
  document.getElementById("Pahlavi").classList.remove("PahlaviTabText");
  document.getElementById("Pahlavi").classList.add("PahlaviTabSmallScreen");
  document.getElementById("Latin").classList.remove("tabcontent");
  document.getElementById("Latin").classList.add("tabcontentSmallScreen");
}
