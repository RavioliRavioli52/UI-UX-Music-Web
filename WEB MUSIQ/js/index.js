var slider = document.getElementById('song-progress');

noUiSlider.create(slider, {
	start: [ 20 ],
	range: {
		'min': [   0 ],
		'max': [ 100 ]
	}
});

var slider = document.getElementById('song-volume');

noUiSlider.create(slider, {
	start: [ 90 ],
	range: {
		'min': [   0 ],
		'max': [ 100 ]
	}
});




$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



$(window).on("resize load", function(){
  
  var totalHeight = $(window).height();

  var headerHeight = $('.header').outerHeight();
  var footerHeight = $('.current-track').outerHeight();
  var playlistHeight = $('.playlist').outerHeight();
  var nowPlaying = $('.playing').outerHeight();

  var navHeight = totalHeight - (headerHeight + footerHeight + playlistHeight + nowPlaying);
  var artistHeight = totalHeight - (headerHeight + footerHeight);

  console.log(totalHeight);
  
  $(".navigation").css("height" , navHeight);
  $(".artist").css("height" , artistHeight);
  $(".social").css("height" , artistHeight);
  
});
    


$(".navigation__list__header").on( "click" , function() {
  
  $(this).toggleClass( "active" );
  
});




$(window).on("resize load", function(){
	if ($(window).width() <= 768){	
		
    $(".collapse").removeClass("in");
    
    $(".navigation").css("height" , "auto");
    
    $(".artist").css("height" , "auto");
    
	}	
});

$(window).on("resize load", function(){
	if ($(window).width() > 768){	
		
    $(".collapse").addClass("in");
    
	}	
});

$(document).ready(function() {

  var audio = document.getElementById("myAudio");  


  var playButton = $(".current-track__actions .ion-ios-play");


  $(".current-track__actions .ion-ios-skipbackward").click(function() {
    audioPlayer.element.currentTime = 0;  
    audioPlayer.element.play();
    
  });


  $(".current-track__actions .ion-ios-skipforward").click(function() {    
    var nextSong = "assets/songs/The Weeknd - Blinding Lights.mp3";
    audioPlayer.element.src = nextSong;
    audioPlayer.element.load();
    audioPlayer.element.play();

    var nextSongDetails = getNextSongDetails(); 
    $(".playing__art img").attr("src", "assets/theweeknd2.png");
    $(".playing__song__name").text("nextSongDetails.name");
    $(".playing__song__artist").text("nextSongDetails.artist");
  });



  playButton.click(function() {
    if (!audioPlayer.isPlaying) {
      audioPlayer.element.play();
      audioPlayer.isPlaying = true;
      $(this).removeClass("ion-ios-play").addClass("ion-ios-pause");
    } else {
      audioPlayer.element.pause();
      audioPlayer.isPlaying = false;
      $(this).removeClass("ion-ios-pause").addClass("ion-ios-play");
    }
  });  
});

var audioPlayer = null;

function initializeAudio(audioElement) {
  audioPlayer = {
    element: audioElement,
    isPlaying: false,
  };
}

window.onbeforeunload = function() {
  if (audioPlayer.isPlaying) {
    localStorage.setItem('audioPlaying', 'true');
  } else {
    localStorage.removeItem('audioPlaying');
  }
  
};


$(document).ready(function() {
  $(".playlist a").click(function() {

    var newPlaylistItem = $("<a>", {
      class: "navigation__list__item",
      href: "#"
    }).append(
      $("<i>", { class: "ion-ios-musical-notes" }),
      $("<span>", { text: "New Playlist" }),
      $("<i>",{ class: "fas fa-trash-alt" })
    );

    $("#playlists").append(newPlaylistItem);
  });
});

function toggleLoremIpsum() {
  const loremIpsumDiv = document.getElementById("lyrics");
  if (loremIpsumDiv.style.display === "none") {
    loremIpsumDiv.style.display = "block";
  } else {
    loremIpsumDiv.style.display = "none";
  }
}

const saveButton = document.querySelector(".button-light");
const artistItems = document.querySelectorAll(".navigation__list__item");

saveButton.addEventListener("click", () => {
  const buttonText = saveButton.textContent;

  artistItems.forEach(item => {
    if (item.querySelector("span").textContent === "KORDHELL") {
      if (buttonText === "UNSAVE") {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    }
  });


  if (buttonText === "UNSAVE") {
    saveButton.textContent = "SAVE";
  } else {
    saveButton.textContent = "UNSAVE";
  }
    
});











