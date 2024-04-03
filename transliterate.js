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
  TODO : https://gitlab.cceh.uni-koeln.de/mpcd/handbooks/-/wikis/Handbook%20Text%20encoding 
  
  TODO : Review 
    Please find attached the paper by Kianoosh Rezania on Pahlavi transcription and Nyberg's manual with the letter matrix.
    The information on letter combinations in Nyberg (you can open it as a pdf) are on the pdf-p.49 (book page ۱۳۲-۱۳۳), a script overview is found on p.51 with some information on variations on p.50.
    Rezania gives a good overview. You can browse the tables, they display nicely the problems, ambiguities and variations of letters.
    Regarding Avestan, it came into my mind that there is so-called Pāzand writing of Middle Persian. This is using Avestan letters to write a Middle Persian word. One could ignore this for most words, but names in particular are sometimes only attested in Pāzand writing (even in a Pahlavi manuscript). In such cases the Pahlavi writing would be a mere guess, and it would be better to display the word in Avestan script as attested.

  TODO : Multiple phonetic value for same character : matres lectionis
  TODO : Latin to Pahlavi (Inscriptional or Book) and at times Avestan (Pāzand writing)
  TODO : Multiple forms of Pahlavi reading
  TODO : Possible Font modification for glyph representation - https://www.unicode.org/L2/L2024/24040-book-pahlavi.pdf 
*/

/* Book Pahlavi "Unicode" encode yet to be "standard" : March 25th, 2024
    • J: joining behavior dual-joining (D), right-joining (R), non-joining (N)
    • Xn: independent form of the letter
    • Xf: form a letter takes in final position
    • Xm: form a letter takes in medial position
    • Xi: form a letter takes in initial position
    • * multiple forms of the above positions per letter
  
        Unicode "probable" code-points                          Book Pahlavi font      Pahlavi MCPD    Pahlavi font  
                                                                    (Arabic)          transliteration     (Latin)
    10BB0 D Xn Xf Xm Xi BOOK PAHLAVI TOOTH                            ـع ع
    10BB1 D Xn Xf** Xm** Xi BOOK PAHLAVI DESCENDING TOOTH             عـ ـعـ
    10BB2 D Xn Xf Xm Xi BOOK PAHLAVI CURLED TOOTH                     ـج ـجـ جـ ج
    10BB3 D Xn Xf** Xm** Xi BOOK PAHLAVI DESCENDING CURLED TOOTH
    10BB4 D Xn Xf Xm Xi BOOK PAHLAVI BELLY
    10BB5 D Xn Xf Xm Xi BOOK PAHLAVI CURLED BELLY

          Xn Xf BOOK PAHLAVI ALEPH-HETH                                 ـا ا                ʾ
                                                                    init.bl medi.ll.br      ʾ
                                                                        ه                   ?
    10BB6 R Xn Xf BOOK PAHLAVI BETH                                     بـ ـبـ ـب ب         b B
          R Xn Xf BOOK PAHLAVI LETTER DALETH                            ـج ـجـ جـ ج         d D
    10BB7 R Xn Xf BOOK PAHLAVI LETTER OLD DALETH                                            ?
          R Xn Xf BOOK PAHLAVI LETTER GIMEL                             d + ◌̈               g G
          R Xn Xf BOOK PAHLAVI LETTER YODH                              d + ◌̤               y Y
          R Xn Xf BOOK PAHLAVI LETTER GIMEL                             d + ◌̂               δ
    10BB8 R Xn Xf BOOK PAHLAVI LETTER WAW-NUN-AYIN-RESH = otiose (EOW)  ـر ر                w W
    10BB9 R Xn Xf BOOK PAHLAVI LETTER SHORT WAW-NUN-AYIN-RESH                               ?
    10BBA R Xn Xf BOOK PAHLAVI LETTER CURVED WAW-NUN-AYIN-RESH                              ?
    10BBB D Xn Xf Xm Xi BOOK PAHLAVI LETTER ZAYIN                       ـضـ ـض ضـ ض         z Z
    10BBC D Xn Xf Xm Xi BOOK PAHLAVI LETTER DESCENDING ZAYIN            ـضـ ضـ              ?
    10BBD D Xn Xf Xm Xi BOOK PAHLAVI LETTER ZAYIN BELLY                                     ?
    10BBE R Xn Xf** BOOK PAHLAVI LETTER KAPH                            ـک ک                k K
    10BBF R Xn Xf BOOK PAHLAVI LETTER OLD KAPH                          ﻚ ك                 γ 
    10BC0 D Xn Xf Xm Xi BOOK PAHLAVI LETTER LAMEKH                      ﻞ ﻝ ـل ل            l L
    10BC1 D Xn Xf Xm Xi BOOK PAHLAVI LETTER DESCENDING LAMEKH           ﻟ ﻠ                 ?
    10BC2 D Xn Xf Xm Xi BOOK PAHLAVI LETTER LAMEKH BELLY                                    ?
    10BC3 D Xn Xf Xm Xi BOOK PAHLAVI LETTER STROKED LAMEKH              ﻞ ﻝ ـل ل            ?
    10BC4 D Xn Xf Xm Xi BOOK PAHLAVI LETTER DESCENDING STROKED LAMEKH   ﻟ ﻠ                 ł Ł
    10BC5 D Xn Xf Xm Xi BOOK PAHLAVI LETTER STROKED LAMEKH BELLY                            ?
    10BC6 D Xn Xf Xm Xi BOOK PAHLAVI LETTER LOOPED LAMEDH                                   ?
    10BC7 D Xn Xf Xm Xi BOOK PAHLAVI LETTER DESCENDING LOOPED LAMEDH                        ?
    10BC8 D Xn Xf Xm Xi BOOK PAHLAVI LETTER LOOPED LAMEDH BELLY                             ?
    10BC9 D Xn Xf Xm Xi BOOK PAHLAVI LETTER HOOKED LAMEDH               ﻟ ﻠ ﻞ ل             ļ Ļ
    10BCA R Xn Xf BOOK PAHLAVI LETTER OLD LAMEDH                                            l L
    10BCB D Xn Xf** Xm*** Xi** BOOK PAHLAVI LETTER MEM-QOPH             ـم ـمـ مـ م         m m
    10BCC D BOOK PAHLAVI LETTER HOOKED MEM-QOPH                                             ?
    10BCD N BOOK PAHLAVI LETTER OLD NUN                                                     ?
    10BB3+10BB3 R Xn Xf BOOK PAHLAVI LETTER SAMEKH                      ـثـ ثـ ـث ث         s S
          R Xn Xf BOOK PAHLAVI LETTER SAMEKH                            ـسـ س               s S
                                                                        ـص ـصـ صـ ص         ?
                                                                        ـش ـشـ شـ ش         ?
    10BB1+10BCE R Xn Xf BOOK PAHLAVI LETTER PE                          پ                   p P
                                                                    seen_(ٿ) seen_(ﭗ)       p P
    10BCE R Xn Xf BOOK PAHLAVI LETTER FINAL PE-SADHE                    ـچ ـچـ              c C
    10BCF R Xn BOOK PAHLAVI LETTER SADHE                                چ چـ                c C
    10BD0 R Xn Xf BOOK PAHLAVI LETTER TAW                               ـت ت ـڌ ڌ           t T
    
    10BD1 R Xn Xf BOOK PAHLAVI LIGATURE X1                              u+F0000             x X
    10BD2 R Xn Xf BOOK PAHLAVI LIGATURE X2                              u.1 u.fina          χ
    10BD3 R Xn Xf BOOK PAHLAVI LIGATURE YODH-HETH
    10BD4 N BOOK PAHLAVI LIGATURE TURNED AHRIMAN
    
    10BD5 BOOK PAHLAVI COMBINING DOT ABOVE
    10BD6 BOOK PAHLAVI COMBINING DOT BELOW
    10BD7 BOOK PAHLAVI COMBINING TWO DOTS ABOVE
    10BD8 BOOK PAHLAVI COMBINING TWO DOTS BELOW
    10BD9 BOOK PAHLAVI COMBINING THREE DOTS ABOVE
    10BDA BOOK PAHLAVI COMBINING THREE DOTS BELOW
    10BDB BOOK PAHLAVI COMBINING HAT ABOVE
    
    10BDC R Xn Xf BOOK PAHLAVI NUMBER ONE
    10BDD BOOK PAHLAVI PUNCTUATION THREE DOTS
    10BDE BOOK PAHLAVI PUNCTUATION THREE CIRCLES
*/

function loadBookPahlavi() {
  document.getElementById("textarea2").placeholder = "(Pahlavi)\n ywk gwptn YDE PWN pty krtn. OD gywk. HT ycngsnbl YHWWN yt";
  localStorage.setItem("direction", "latin2bookpahlavi");
  localStorage.setItem("encoding", "Latin");
  document.getElementById("textarea2").classList.add("bookPahlavi");
  transliterate();
}

function loadInscriptionalPahlavi() {
  document.getElementById("textarea2").placeholder = "(𐭯𐭠𐭫𐭮𐭩𐭪)\n 𐭥𐭩𐭠𐭬𐭥 𐭠𐭫𐭤𐭩𐭬 𐭠𐭫 𐭬𐭱𐭤 𐭠𐭤𐭩𐭤 𐭠𐭱𐭥 𐭠𐭤𐭩𐭤 𐭥𐭩𐭠𐭬𐭥 𐭪𐭤 𐭲𐭠𐭬𐭥 𐭫𐭡𐭭𐭩 𐭩𐭱𐭥𐭠𐭫 𐭠𐭤𐭩𐭤 𐭱𐭫𐭧𐭭𐭩 𐭠𐭫𐭩𐭪𐭬";
  localStorage.setItem("direction", "latin2pahlavi");
  localStorage.setItem("encoding", "Latin");
  document.getElementById("textarea2").classList.remove("bookPahlavi");
  transliterate();
}

function loadAvestan() {
  document.getElementById("textarea2").placeholder = "(𐬎𐬞𐬀𐬯𐬙𐬀𐬎𐬎𐬀𐬐𐬀𐬉𐬥𐬀)\n 𐬞𐬎𐬭𐬕𐬍𐬝 𐬛𐬁𐬢𐬁 𐬋 𐬨𐬀𐬌𐬢𐬌𐬌𐬋 𐬑𐬀𐬭𐬛 𐬐𐬎 𐬐𐬋𐬭𐬏𐬀𐬱𐬨 𐬬𐬀𐬝𐬙𐬀𐬭 𐬀𐬌𐬌𐬃 𐬐𐬋𐬭𐬛𐬌𐬮";
  localStorage.setItem("direction", "latin2avestan");
  localStorage.setItem("encoding", "Latin");
  document.getElementById("textarea2").classList.remove("bookPahlavi");
  transliterate();
}

function transliterate() {
  if (document.getElementById("textarea1").value.indexOf("script>") > -1 || document.getElementById("textarea2").value.indexOf("script>") > -1) {
    document.getElementById("textarea1").value = "";
    document.getElementById("textarea2").value = "";
    document.getElementById("textarea1").innerHTML = "";
    document.getElementById("textarea2").innerHTML = "";
  }

  /*
    Headline : Avestan, Pārsīg, Pahlavi
  */

  if (localStorage.getItem("direction") == null || localStorage.getItem("direction") == undefined || localStorage.getItem("direction") == "latin2pahlavi") {
    /*
      not displayed
      apparently all capital letters (those are used to indicate Aramaeograms and should be treated like minuscules)
      aleph (ʾ) 
      the wordend marker ˈ (however, I am not sure how that looks like in the inscriptions. In the psalterm, it is a special form of y, in Pahlavi it is identical to w/n/r/ʿ). Is this Latin transcription true inscriptional MP?

      strangely displayed
      Brackets [...] result in a kind of Pahlavi ln combination. They appear in transcription to display illegible remnants of letters or loss of text that could be restituted. So they should appear in the "original" script, or, if that is meant to represent the original, [...] with content should be omitted with a placeholder, e.g., empty space, instead. This is a general decision that should be done by the principle investigators.

      I would have to check whether t is really written that low (like n) or whether it is normally on the line.
      Does this information come with the font or do you define that?
    */
    // TODO ":"" ?
    const latinToPahlavi = { " ": "  ", ".": ".", ",": ",", ";": ";", "?": "?", "!": "!", "\"": "\"", "'": "'", "(": "(", ")": ")", ":": ":", "+": "+", "=": "=", "/": "/", "-": "-", "<": "<", ">": ">", "*": "*", "|": "|", "\\": "\\", "₹": "₹", "{": "{", "}": "}", "[": "[", "]": "]", "_": "_", "%": "%", "@": "@", "ˆ": "ˆ", "`": "`", "´": "´", "·": "·", "˙": "˙", "¯": "¯", "¨": "¨", "˚": "˚", "˝": "˝", "ˇ": "ˇ", "¸": "¸", "˛": "˛", "˘": "˘", "’": "’", "t":"𐭲","š":"𐭱","q":"𐭬","r":"𐭥","c":"𐭰","ṣ":"𐭰","p":"𐭯","s":"𐭮","n":"𐭭","m":"𐭬","l":"𐭫","k":"𐭪","y":"𐭩","ṭ":"𐭨","ḥ":"𐭧","z":"𐭦","w":"𐭥","h":"𐭤","d":"𐭣","g":"𐭢","b":"𐭡","ʾ":"𐭠","1000":"𐭿","100":"𐭾","20":"𐭽","10":"𐭼","4":"𐭻","3":"𐭺","2":"𐭹","1":"𐭸", "ˈ":"", "[...]":"" };

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
  } else if (localStorage.getItem("direction") == null || localStorage.getItem("direction") == undefined || localStorage.getItem("direction") == "latin2bookpahlavi") {
    /*
      The script runs left-to-right, but must be displayed right-to-left (like inscriptional MP or Avestan).
      Capital N of PWN and of YHWNNt is displayed like the letter Ḥ (in other transcription conventions E).
      Capital H of YHWWNt is displayed like the letter š.

      Apart from that, several letters show the variant that is connected to the right (although they are not).
      Letters minuscule L is correctly displayed, but r is displayed like L with a hook. This confusion is understandable, because (brace yourself)

          The LETTER r is written like the letters w, n, ʿ and the wordendmarker ˈ. It represents the SOUND r.
          The LETTER l represents the SOUND r as well (it is in fact the common letter for this sound). If, however, it is meant to represent the SOUND l (which rarely appears in Middle Persian), it is sometimes marked with a hook.

      The word pusar "son" is written pwsl or BRḤl (Aramaeogram + Persian l).
    */
    // Word End Marker ˈ
    let resultBookPahlavi = "";
    let textLa = document.getElementById("textarea1").value;
    let lines = textLa.split("\n");
    for (let i = 0; i < lines.length; i++) {
      resultBookPahlavi = resultBookPahlavi + lines[i].split("").reverse().join("") + "\n";
    }
    document.getElementById("textarea2").value = resultBookPahlavi;
    document.getElementById("textarea2").innerHTML = resultBookPahlavi;
  } else if (localStorage.getItem("direction") == null || localStorage.getItem("direction") == undefined || localStorage.getItem("direction") == "latin2avestan") {
    // TODO 2 vareity for h , ń , t̰ , δ , ą̇
    let resultAvestan = "";
    let textLa = document.getElementById("textarea1").value;
    const latinToAvestan = { " ": "⸱", ".": "𐬼", ",": ",", ":": "𐬺", ";": "𐬻", "":"𐬹", "":"𐬽" , "":".", "":"𐬾", "":"𐬿", "?": "?", "!": "!", "\"": "\"", "'": "'", "(": "(", ")": ")", "+": "+", "=": "=", "/": "/", "-": "-", "<": "<", ">": ">", "*": "*", "|": "|", "\\": "\\", "₹": "₹", "{": "{", "}": "}", "[": "[", "]": "]", "_": "_", "%": "%", "@": "@", "ˆ": "ˆ", "`": "`", "´": "´", "·": "·", "˙": "˙", "¯": "¯", "¨": "¨", "˚": "˚", "˝": "˝", "ˇ": "ˇ", "¸": "¸", "˛": "˛", "˘": "˘", "’": "’", "h":"𐬵", "ṣ̌":"𐬴", "š́":"𐬳", "ž":"𐬲", "š":"𐬱", "z":"𐬰", "s":"𐬯", "l":"𐬮", "r":"𐬭", "uu":"𐬎𐬎", "v":"𐬬", "ii":"𐬌𐬌", "ẏ":"𐬫", "y":"𐬪", "m̨":"𐬩", "m":"𐬨", "ṇ":"𐬧", "ń":"𐬦", "n":"𐬥", "ŋᵛ":"𐬤", "ŋ́":"𐬣", "ŋ":"𐬢", "β":"𐬡", "b":"𐬠", "f":"𐬟", "p":"𐬞", "t̰":"𐬝", "δ":"𐬜", "d":"𐬛", "ϑ":"𐬚", "θ":"𐬚", "t":"𐬙", "j":"𐬘", "c":"𐬗", "γ":"𐬖", "ġ":"𐬕", "g":"𐬔", "xᵛ":"𐬓", "x́":"𐬒", "x":"𐬑", "k":"𐬐","ū":"𐬏","u":"𐬎","ī":"𐬍","i":"𐬌","ō":"𐬋","o":"𐬊","ē":"𐬉","e":"𐬈","ǝ̄":"𐬇","ǝ":"𐬆","ə̄":"𐬇","ə":"𐬆","ą̇":"𐬅","ą":"𐬄","ā̊":"𐬃","å":"𐬂","ā":"𐬁","a":"𐬀" };

    for (let u = 0; u < textLa.length; u++) {
      if (textLa[u].indexOf("\n") > -1) { // New Lines
        resultAvestan = resultAvestan + "\n";
      } else if (latinToAvestan[textLa[u]] != undefined && textLa[u+1] != undefined && latinToAvestan[textLa[u]] != null && textLa[u] != "" && textLa[u+1] != "" && textLa[u] == "i" && textLa[u+1] == "i") { // Double Single Character
        resultAvestan = resultAvestan + latinToAvestan["ii"];
        u = u + 1;
      } else if (latinToAvestan[textLa[u]] != undefined && textLa[u+1] != undefined && latinToAvestan[textLa[u]] != null && textLa[u] != "" && textLa[u+1] != "" && textLa[u] == "u" && textLa[u+1] == "u") { // Double Single Character
        resultAvestan = resultAvestan + latinToAvestan["uu"];
        u = u + 1;
      } else if (latinToAvestan[textLa[u]] != undefined && textLa[u+1] != undefined && latinToAvestan[textLa[u]] != null && textLa[u] != "" && textLa[u+1] != "" && textLa[u] == "a" && textLa[u+1] == "h") { // Ligature 𐬀 (a) + 𐬵 (h) = 𐬀𐬵 (ah)
        resultAvestan = resultAvestan + "𐬀𐬵";
        u = u + 1;
      } else if(latinToAvestan[textLa[u] + textLa[u+1]] != undefined && latinToAvestan[textLa[u]] != null && latinToAvestan[textLa[u+1]] != null && textLa[u+1] != "" && textLa[u] == "å" && textLa[u+1] == "\u030A") { // case ā̊
        resultAvestan = resultAvestan + "𐬃";
        u = u + 1;
      } else if(latinToAvestan[textLa[u] + textLa[u+1]] != undefined && latinToAvestan[textLa[u]] != null && latinToAvestan[textLa[u+1]] != null && textLa[u+1] != "" && textLa[u] == "ą" && textLa[u+1] == "\u0307") { // case ą̇
        resultAvestan = resultAvestan + "𐬅";
        u = u + 1;
      } else if(latinToAvestan[textLa[u] + textLa[u+1]] != undefined && latinToAvestan[textLa[u]] != null && latinToAvestan[textLa[u+1]] != null && textLa[u+1] != "" && (textLa[u] == "ǝ" || textLa[u] == "ə") && textLa[u+1] == "\u0304") { // case ǝ̄ ə̄
        resultAvestan = resultAvestan + "𐬇";
        u = u + 1;
      } else if(latinToAvestan[textLa[u] + textLa[u+1]] != undefined && latinToAvestan[textLa[u]] != null && latinToAvestan[textLa[u+1]] != null && textLa[u+1] != "" && textLa[u] == "x" && textLa[u+1] == "\u0301") { // case x́
        resultAvestan = resultAvestan + "𐬒";
        u = u + 1;
      } else if(latinToAvestan[textLa[u] + textLa[u+1]] != undefined && latinToAvestan[textLa[u]] != null && latinToAvestan[textLa[u+1]] != null && textLa[u+1] != "" && textLa[u] == "x" && textLa[u+1] == "\u1D5B") { // case xᵛ
        resultAvestan = resultAvestan + "𐬓";
        u = u + 1;
      } else if(latinToAvestan[textLa[u] + textLa[u+1]] != undefined && latinToAvestan[textLa[u]] != null && latinToAvestan[textLa[u+1]] != null && textLa[u+1] != "" && textLa[u] == "t" && textLa[u+1] == "\u0330") { // case t̰
        resultAvestan = resultAvestan + "𐬝";
        u = u + 1;
      } else if(latinToAvestan[textLa[u] + textLa[u+1]] != undefined && latinToAvestan[textLa[u]] != null && latinToAvestan[textLa[u+1]] != null && textLa[u+1] != "" && textLa[u] == "ŋ" && textLa[u+1] == "\u0301") { // case ŋ́
        resultAvestan = resultAvestan + "𐬣";
        u = u + 1;
      } else if(latinToAvestan[textLa[u] + textLa[u+1]] != undefined && latinToAvestan[textLa[u]] != null && latinToAvestan[textLa[u+1]] != null && textLa[u+1] != "" && textLa[u] == "ŋ" && textLa[u+1] == "\u1D5B") { // case ŋᵛ
        resultAvestan = resultAvestan + "𐬤";
        u = u + 1;
      } else if(latinToAvestan[textLa[u] + textLa[u+1]] != undefined && latinToAvestan[textLa[u]] != null && latinToAvestan[textLa[u+1]] != null && textLa[u+1] != "" && textLa[u] == "m" && textLa[u+1] == "\u0328") { // case m̨
        resultAvestan = resultAvestan + "𐬩";
        u = u + 1;
      } else if(latinToAvestan[textLa[u] + textLa[u+1]] != undefined && latinToAvestan[textLa[u]] != null && latinToAvestan[textLa[u+1]] != null && textLa[u+1] != "" && textLa[u] == "š" && textLa[u+1] == "\u0301") { // case š́
        resultAvestan = resultAvestan + "𐬳";
        u = u + 1;
      } else if (latinToAvestan[textLa[u]] != undefined && textLa[u+1] != undefined && latinToAvestan[textLa[u]] != null && latinToAvestan[textLa[u+1]] != null && textLa[u] != "" && textLa[u+1] != "" && textLa[u] == "š" && textLa[u+1] == "a") { // Ligature 𐬱 (š) + 𐬀 (a) = 𐬱𐬀 (ša)
        resultAvestan = resultAvestan + "𐬱𐬀";
        u = u + 1;
      } else if (latinToAvestan[textLa[u]] != undefined && textLa[u+1] != undefined && latinToAvestan[textLa[u]] != null && latinToAvestan[textLa[u+1]] != null && textLa[u] != "" && textLa[u+1] != "" && textLa[u] == "š" && textLa[u+1] == "c") { // Ligature 𐬱 (š) + 𐬗 (c) = 𐬱𐬗 (šc)
        resultAvestan = resultAvestan + "𐬱𐬗";
        u = u + 1;
      } else if (latinToAvestan[textLa[u]] != undefined && textLa[u+1] != undefined && latinToAvestan[textLa[u]] != null && latinToAvestan[textLa[u+1]] != null && textLa[u] != "" && textLa[u+1] != "" && textLa[u] == "š" && textLa[u+1] == "t") { // Ligature 𐬱 (š) + 𐬙 (t) = 𐬱𐬙 (št)
        resultAvestan = resultAvestan + "𐬱𐬙";
        u = u + 1;
      } else if(latinToAvestan[textLa[u] + textLa[u+1]] != undefined && latinToAvestan[textLa[u]] != null && latinToAvestan[textLa[u+1]] != null && textLa[u+1] != "" && textLa[u] == "ṣ" && textLa[u+1] == "\u030C") { // case ṣ̌
        resultAvestan = resultAvestan + "𐬴";
        u = u + 1;
      } else if (latinToAvestan[textLa[u]] != undefined && latinToAvestan[textLa[u]] != null && textLa[u] != "") { // Default Single Character
        resultAvestan = resultAvestan + latinToAvestan[textLa[u]];
      }
    }

    document.getElementById("textarea2").value = resultAvestan;
    document.getElementById("textarea2").innerHTML = resultAvestan;
  }
  /* else if (localStorage.getItem("direction") == "pahlavi2latin") {
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
  }*/
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
