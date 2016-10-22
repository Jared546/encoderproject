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

if($( "input :checked").val() == "Heiroglyphics") {
  $( "textArea").append(String.fromCharCode(event.which));
}

if($( "input :checked").val() == "Caesar cipher") {
  $( "textArea").append(String.fromCharCode(event.which));
}
