<<<<<<< HEAD
const medias = {audio : false, video : {
        facingMode : {
          exact : "environment"
        }
      }},
      video  = document.getElementById("video"),
      canvas = document.getElementById("canvas"),
      ctx    = canvas.getContext("2d");

navigator.getUserMedia(medias, successCallback, errorCallback);

requestAnimationFrame(draw);

=======
const medias = {audio : false, video : true},
      video  = document.getElementById("video");

navigator.getUserMedia(medias, successCallback, errorCallback);

>>>>>>> 1a08bcec48ad41866e65501afb982225df0974bf
function successCallback(stream) {
  video.srcObject = stream;
};

function errorCallback(err) {
  alert(err);
};
<<<<<<< HEAD

function draw() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.drawImage(video, 0, 0);

  requestAnimationFrame(draw);
}
=======
>>>>>>> 1a08bcec48ad41866e65501afb982225df0974bf
