

$(document).ready(function() {

  $('form').on('submit', function(event){
    const songInput = $('#song-form > input[name="notes"]').val();
    const nameInput = $('#song-form > input[name="song-name"]').val();
    $('#song-queue').append('<li>' + '<em>' + nameInput + '</em>'
     + " " + '<strong class="data">' + songInput + '</strong>' + '</li>');
    event.preventDefault();
    $('#song-form')[0].reset();

  })

  $('#play-button').click(function() {
    $('#play-button').slideUp("slow","swing", function () {
      playIt();
    });
    let playIt = function () {
      if($("#song-queue li").length == 0){
        $('#play-button').slideDown("fast","swing");
        $('#now-playing').replaceWith("<h5 id='now-playing'> Enter a song to play...</h5>");
        return;
      }
      else {
        let notes = ($('#song-queue > li:nth-child(1) > strong').text());
        const title = ($('#song-queue > li:nth-child(1) > em').text());
        $('#now-playing').replaceWith("<h5 id='now-playing'> Now playing: " + title + "</h5>");
        let song = (parseSong(notes));
        const bpm = 100;
        playSong(song, bpm, playIt);
        $("#song-queue > li").eq(0).remove();
        };
    };

  });
});
