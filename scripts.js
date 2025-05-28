let currentSection = "";
const audio = document.getElementById("clickSound");

window.toggleSection = function(section) {
    
    const iframe = document.getElementById("skillsFrame");

    // Play the sound
    audio.currentTime = 0;  // Reset to start
    audio.play();           // Play the sound

    if (currentSection !== section) {
        if (section === "skills") {
            iframe.src = "skills.html";
        } else if (section === "achievements") {
            iframe.src = "bagged.html";
        } else if (section === "involvement") {
            iframe.src = "involvement.html";  
        }else if (section === "aboutme") {
            iframe.src = "aboutme.html";  
        }
        iframe.style.display = "block";
        currentSection = section;
    } else {
        iframe.src = "";
        iframe.style.display = "none";
        currentSection = "";
    }
    
}

function playSoundandNavigate(event, url) {
    event.preventDefault(); // Stop immediate navigation
    const audio = document.getElementById('clickSound');
    audio.currentTime = 0;
    audio.play();

    // Wait for sound duration (e.g., 500ms), then navigate
    setTimeout(() => {
        window.location.href = url;
    }, 500); // Adjust the delay to match the sound length
} 