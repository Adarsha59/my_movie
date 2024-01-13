
<div ref={movieContainerRef} className="movie-play-container">
<h2 className="movie-title">
  Player 1 : {details.title || details.name}
</h2>
<div className="video-player">
  {/* Replace the video source with the appropriate one for Mplay */}
  <iframe
    title={details.title || details.name}
    // src="https://www.youtube.com/embed/your-mplay-video-id"
    src={videoURL}
    width="100%"
    height="100%"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>
</div>
<div className="space"></div>

<div ref={movieContainerRef} className="movie-play-container">
<h2 className="movie-title">
  Player 2 : {details.title || details.name}
</h2>
<div className="video-player">
  {/* Replace the video source with the appropriate one for Mplay */}
  <iframe
    title={details.title || details.name}
    // src="https://www.youtube.com/embed/your-mplay-video-id"
    src={videoURL1}
    width="100%"
    height="100%"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>
</div>