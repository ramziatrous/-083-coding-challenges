function startCountdown(duration) {
  let timer = duration;
  const interval = setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    console.log(`Verbleibende Zeit: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
    timer--;

    if (timer < 0) {
      clearInterval(interval);
      console.log('Countdown abgelaufen!');
    }
  }, 1000);
}

const countdownDuration = 5; 
startCountdown(countdownDuration);