$(document).ready(function(){

  var cNote = document.getElementById('cAudio');
  var dNote = document.getElementById('dAudio');
  var eNote = document.getElementById('eAudio');
  var fNote = document.getElementById('fAudio');
  var gNote = document.getElementById('gAudio');
  var aNote = document.getElementById('aAudio');
  var bNote = document.getElementById('bAudio');

  $('#c').mousedown(function(){
    cNote.play();
    cNote.currentTime = 0;
  });
  $('#d').mousedown(function(){
    dNote.play();
    dNote.currentTime = 0;
  });
  $('#e').mousedown(function(){
    eNote.play();
    eNote.currentTime = 0;
  });
  $('#f').mousedown(function(){
    fNote.play();
    fNote.currentTime = 0;
  });
  $('#g').mousedown(function(){
    gNote.play();
    gNote.currentTime = 0;
  });
  $('#a').mousedown(function(){
    aNote.play();
    aNote.currentTime = 0;
  });
  $('#b').mousedown(function(){
    bNote.play();
    bNote.currentTime = 0;
  });  
})
