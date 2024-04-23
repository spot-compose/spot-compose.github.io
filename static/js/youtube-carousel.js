const videos = [
    "4BRKIzyaT3o", // Teaser Video
    "wNKP0TeSLVc", // Book Niche
    "uaElyTMxlpU", // Drawer Success
    "bGzEKbzgy2Y", // Cow Plushy Cabinet
    "4qO9M6rTcHo", // Drawer Fail
    "zDu7lYW_ScU", // Poro Niche
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
