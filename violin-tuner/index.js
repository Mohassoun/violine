function ViolinTuner() {
  const notes = [
    { name: 'G', freq: 196 },
    { name: 'D', freq: 293.66 },
    { name: 'A', freq: 440 },
    { name: 'E', freq: 659.25 },
  ];

  const playTone = (frequency) => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 2);
  };

  return (
    <div>
      <h1>Violin G-D-A-E Tuner</h1>
      {notes.map((note) => (
        <button key={note.name} onClick={() => playTone(note.freq)}>
          {note.name}
        </button>
      ))}
    </div>
  );
}

ReactDOM.render(<ViolinTuner />, document.getElementById('root'));
