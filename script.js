let beepSound = new Audio("assets/beep-beep-beep-beep-80262.mp3");
let instructionText = document.getElementById("instruction");
let activateBtn = document.getElementById("activateBtn");
let resetBtn = document.getElementById("resetBtn");

let beepInterval;

// Function to play beep sound continuously
function playBeepSound() {
    beepInterval = setInterval(() => {
        beepSound.currentTime = 0;
        beepSound.play();
    }, 2000);
}

// Function to stop beep sound
function stopBeepSound() {
    clearInterval(beepInterval);
    beepSound.pause();
    beepSound.currentTime = 0;
}

// Function to start experiment
function startExperiment() {
    instructionText.innerHTML = "Verifying your Eyes.....";

    // Hide activate button and show reset button after activation
    activateBtn.style.display = "none";
    resetBtn.style.display = "inline-block";

    // Wait for 10 seconds, then start the beep sound
    setTimeout(() => {
        instructionText.innerHTML = "Beep, Beep, Beep"; // Show beep message
        playBeepSound(); // Start beep sound continuously

        // After 3 seconds, show "Changing lane..."
        setTimeout(() => {
            instructionText.innerHTML = "Changing lane...";

            // After another 3 seconds, show "Slowing down your car..."
            setTimeout(() => {
                instructionText.innerHTML = "Slowing down your car...";

                // After another 3 seconds, show "Your car has stopped."
                setTimeout(() => {
                    instructionText.innerHTML = "Your car has stopped.";
                }, 3000);

            }, 3000);

        }, 3000);

    }, 10000); // 10-second delay
}

// Function to reset experiment
function resetExperiment() {
    instructionText.innerHTML = "Your car has stopped. Stay alert and drive safely! 😊";
    
    // Stop beep sound
    stopBeepSound();

    // Show activate button and hide reset button
    activateBtn.style.display = "inline-block";
    resetBtn.style.display = "none";
}
