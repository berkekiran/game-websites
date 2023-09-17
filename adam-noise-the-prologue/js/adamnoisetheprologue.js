$(document).ready(function(){

  const player = new Plyr('#player', {
    title: 'Adam Noise: The Prologue',
    quality: { default: 1440, options: [1440, 1080, 720, 480] },
  });

  player.source = {
    type: 'video',
    title: 'Adam Noise: The Prologue',
    sources: [
        {
            src: 'images/videos/Adam Noise The Prologue Teaser Trailer 480.mp4',
            type: 'video/mp4',
            size: 480,
        },
        {
            src: 'images/videos/Adam Noise The Prologue - Teaser Trailer 720.mp4',
            type: 'video/mp4',
            size: 720,
        },
        {
            src: 'images/videos/Adam Noise The Prologue - Teaser Trailer 1080.mp4',
            type: 'video/mp4',
            size: 1080,
        },
        {
            src: 'images/videos/Adam Noise The Prologue - Teaser Trailer.mp4',
            type: 'video/mp4',
            size: 1440,
        },
    ],
    poster: 'images/YoutubeThumbnail.png',
  };

})
