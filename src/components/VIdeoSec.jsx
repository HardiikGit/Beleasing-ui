function VideoSec() {

 const videoData = {
  src: "/vid.mp4",
  settings: {
   autoPlay: true,
   loop: true,
   muted: true
  },
  content: {
   text: "MEET THE NEW CROSSOVER. FAST .CONVENIENT .ECONOMICAL."
  }
 };

 return (
  <div className="VideoSection relative">
   <video
    src={videoData.src}
    autoPlay={videoData.settings.autoPlay}
    loop={videoData.settings.loop}
    muted={videoData.settings.muted}
    className="relative"
    style={{objectFit:'cover'}}
   > </video>
  </div>
 );
}

export default VideoSec;