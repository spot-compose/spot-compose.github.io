const videos = [
    "wNKP0TeSLVc",
    "bGzEKbzgy2Y",
    "zDu7lYW_ScU",
];

let currentVideo = 0;

function changeVideo(direction) {
    currentVideo += direction;

    if (currentVideo >= videos.length) {
        currentVideo = 0; // Loop back to the first video
    } else if (currentVideo < 0) {
        currentVideo = videos.length - 1; // Loop to the last video
    }

    document.getElementById("videoFrame").src = "https://www.youtube.com/embed/" + videos[currentVideo];
}
