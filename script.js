$(document).ready(function(){

  var cNote = document.getElementById('cAudio');
  var dNote = document.getElementById('dAudio');
  var eNote = document.getElementById('eAudio');
  var fNote = document.getElementById('fAudio');
  var gNote = document.getElementById('gAudio');
  var aNote = document.getElementById('aAudio');
  var bNote = document.getElementById('bAudio');

  $('#c').mouseover(function(){
    cNote.play();
    cNote.currentTime = 0;
    $(this).animate({
        marginTop: '-=50', //adds 250px
        height: '+=50'
        }, 'slow' //sets animation speed to slow
      );
  });

  $('#c').mouseout(function(){
    $(this).animate({
        marginTop: '+=50', //adds 250px
        height: '-=50'
        }, 'slow' //sets animation speed to slow
      );
  });

  $('#d').mouseover(function(){
    dNote.play();
    dNote.currentTime = 0;
    $(this).animate({
        marginTop: '-=50', //adds 250px
        height: '+=50'
        }, 'slow' //sets animation speed to slow
      );
  });

  $('#d').mouseout(function(){
    $(this).animate({
        marginTop: '+=50', //adds 250px
        height: '-=50'
        }, 'slow' //sets animation speed to slow
      );
  });

  $('#e').mouseover(function(){
    eNote.play();
    eNote.currentTime = 0;
  
    $(this).animate({
        marginTop: '-=50', //adds 250px
        height: '+=50'
        }, 'slow' //sets animation speed to slow
      );
    });

    $('#e').mouseout(function(){
      $(this).animate({
          marginTop: '+=50', //adds 250px
          height: '-=50'
          }, 'slow' //sets animation speed to slow
        );
    });

  $('#f').mouseover(function(){
    fNote.play();
    fNote.currentTime = 0;
    $(this).animate({
        marginTop: '-=50', //adds 250px
        height: '+=50'
        }, 'slow' //sets animation speed to slow
      );
  });
  $('#f').mouseout(function(){
    $(this).animate({
        marginTop: '+=50', //adds 250px
        height: '-=50'
        }, 'slow' //sets animation speed to slow
      );
  });

  $('#g').mouseover(function(){
    gNote.play();
    gNote.currentTime = 0;
    $(this).animate({
        marginTop: '-=50', //adds 250px
        height: '+=50'
        }, 'slow' //sets animation speed to slow
      );
  });
  $('#g').mouseout(function(){
    $(this).animate({
        marginTop: '+=50', //adds 250px
        height: '-=50'
        }, 'slow' //sets animation speed to slow
      );
  });

  $('#a').mouseover(function(){
    aNote.play();
    aNote.currentTime = 0;
    $(this).animate({
        marginTop: '-=50', //adds 250px
        height: '+=50'
        }, 'slow' //sets animation speed to slow
      );
  });
  
  $('#a').mouseout(function(){
    $(this).animate({
        marginTop: '+=50', //adds 250px
        height: '-=50'
        }, 'slow' //sets animation speed to slow
      );
  });

  $('#b').mouseover(function(){
    bNote.play();
    bNote.currentTime = 0;
    $(this).animate({
        marginTop: '-=50', //adds 250px
        height: '+=50'
        }, 'slow' //sets animation speed to slow
      );
  });
  
  $('#b').mouseout(function(){
    $(this).animate({
        marginTop: '+=50', //adds 250px
        height: '-=50'
        }, 'slow' //sets animation speed to slow
      );
  });
  
})
