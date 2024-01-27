    document.addEventListener('keydown', playSound);

function playSound(e) {
  // Get the data-keys attribute value for the pressed key
  const key = e.keyCode || e.which;
  const element = document.querySelector(`[data-keys="${key}"]`);

  // If a corresponding key is found, play the sound
  if (element) {
    const soundName = element.querySelector('.sound').textContent;
    const audio = document.querySelector(`audio[data-keys="${key}"]`);

    if (audio) {
      audio.currentTime = 0; // Reset the audio to the beginning to allow rapid consecutive plays
      audio.play();
    }

    // Add a class to highlight the pressed key (optional)
    element.classList.add('pressed');

    // Remove the class after a short delay (optional)
    setTimeout(() => {
      element.classList.remove('pressed');
    }, 100);
  }
}
