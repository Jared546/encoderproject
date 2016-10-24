var CaesarCipherToEnglish = {
  "Z" : "A" ,
  "A" : "B" ,
  "C" : "D" ,
  "D" : "E" ,
  "E" : "F" ,
  "F" : "G" ,
  "G" : "H" ,
  "H" : "I" ,
  "I" : "J" ,
  "J" : "K" ,
  "K" : "L" ,
  "L" : "M" ,
  "M" : "N" ,
  "N" : "O" ,
  "O" : "P" ,
  "P" : "Q" ,
  "Q" : "R" ,
  "R" : "S" ,
  "S" : "T" ,
  "T" : "U" ,
  "U" : "V" ,
  "V" : "W" ,
  "W" : "X" ,
  "X" : "Y" ,
  "Y" : "Z" ,
  " " : " " ,
  " " : " " ,
}

var HeiroglyphicCipher = {
  "A":"<img src='images/Heiroglyphics/a.gif'>",
   "B":"<img src='images/Heiroglyphics/b.gif'>",
   "C":"<img src='images/Heiroglyphics/c.gif'>",
   "D":"<img src='images/Heiroglyphics/d.gif'>",
   "E":"<img src='images/Heiroglyphics/e.gif'>",
   "F":"<img src='images/Heiroglyphics/f.gif'>",
   "G":"<img src='images/Heiroglyphics/g.gif'>",
   "H":"<img src='images/Heiroglyphics/h.gif'>",
   "I":"<img src='images/Heiroglyphics/i.gif'>",
   "J":"<img src='images/Heiroglyphics/j.gif'>",
   "K":"<img src='images/Heiroglyphics/k.gif'>",
   "L":"<img src='images/Heiroglyphics/l.gif'>",
   "M":"<img src='images/Heiroglyphics/m.gif'>",
   "N":"<img src='images/Heiroglyphics/n.gif'>",
   "O":"<img src='images/Heiroglyphics/o.gif'>",
   "P":"<img src='images/Heiroglyphics/p.gif'>",
   "Q":"<img src='images/Heiroglyphics/q.gif'>",
   "R":"<img src='images/Heiroglyphics/r.gif'>",
   "S":"<img src='images/Heiroglyphics/s.gif'>",
   "T":"<img src='images/Heiroglyphics/t.gif'>",
   "U":"<img src='images/Heiroglyphics/u.gif'>",
   "V":"<img src='images/Heiroglyphics/v.gif'>",
   "W":"<img src='images/Heiroglyphics/w.gif'>",
   "X":"<img src='images/Heiroglyphics/x.gif'>",
   "Y":"<img src='images/Heiroglyphics/y.gif'>",
   "Z":"<img src='images/Heiroglyphics/z.gif'>",
   "":"",
   " ":" "
}

var RuneCipher = {
  "A": "<img src='images/Runes/a.gif'>",
  "B": "<img src='images/Runes/b.gif'>",
  "C":"<img src='images/Runes/c.gif'>",
  "D": "<img src='images/Runes/d.gif'>",
  "E":"<img src='images/Runes/e.gif'>",
  "F":"<img src='images/Runes/f.gif'>",
  "G":"<img src='images/Runes/g.gif'>",
  "H":"<img src='images/Runes/h.gif'>",
  "I":"<img src='images/Runes/i.gif'>",
  "J":"<img src='images/Runes/j.gif'>",
  "K":"<img src='images/Runes/k.gif'>",
  "L":"<img src='images/Runes/l.gif'>",
  "M":"<img src='images/Runes/m.gif'>",
  "N":"<img src='images/Runes/n.gif'>",
  "O":"<img src='images/Runes/o.gif'>",
  "P":"<img src='images/Runes/p.gif'>",
  "Q":"<img src='images/Runes/q.gif'>",
  "R":"<img src='images/Runes/r.gif'>",
  "S":"<img src='images/Runes/s.gif'>",
  "T":"<img src='images/Runes/t.gif'>",
  "U":"<img src='images/Runes/u.gif'>",
  "V":"<img src='images/Runes/v.gif'>",
  "W":"<img src='images/Runes/w.gif'>",
  "X":"<img src='images/Runes/x.gif'>",
  "Y":"<img src='images/Runes/y.gif'>",
  "Z":"<img src='images/Runes/z.gif'>",
  "":"",
  " ":" "
}

caesar = {
32: " ",
65: "z",
66: "a",
67: "b",
68: "c",
69: "d",
70: "e",
71: "f",
72: "g",
73: "h",
74: "i",
75: "j",
76: "k",
77: "l",
78: "m",
79: "n",
80: "o",
81: "p",
82: "q",
83: "r",
84: "s",
85: "t",
86: "u",
87: "v",
88: "w",
89: "x",
90: "y",
}

$("#inputText").keydown(function(e) {

});

$("input[type = 'radio']").click(function(e) {
  $("input.checked").prop('checked', true);
  $(this).prop('checked', false);
});

if($( "input :checked").val() == "echo") {
  $( "textArea").append(String.fromCharCode(event.which));
}

else if($("input:checked").val() == "Heiroglyphics"){
    var MessageToEncode = String.fromCharCode(event.which);
    var Encoding = MessageToEncode.split('');
    MessageToEncode = HeiroglyphicCipher[Encoding[0]];
             $("#textArea").append( MessageToEncode );
}
