const startButton = document.getElementById('startButton');
const screenSharingVideo = document.getElementById('screen-sharing-video');

if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
    alert('Screen sharing is not supported in this device')
} else {
    startButton.addEventListener('click', startScreenSharing);
}


function startScreenSharing() {
    navigator.mediaDevices.getDisplayMedia({ video: true })
        .then((stream) => {
            screenSharingVideo.srcObject = stream;
            startButton.disabled = true;
        })
        .catch((error) => {
            console.log('Error accessing Screen sharing', error)
        });
}