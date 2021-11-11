//keyboard functionality
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

// get everything with class key
const keys = document.querySelectorAll('.key')

const whiteKeys = document.querySelectorAll('.key.whiteKey')
const blackKeys = document.querySelectorAll('.key.blackKey')

//event listener when the key is pressed
keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

//event listener for keys pressed
document.addEventListener('keydown', e => {
  if (e.repeat) return
  //get the key pressed
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  //play note when index found, don't do anything if wrong key pressed
  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

//play a note in the event listeners
function playNote(key) {
  //get the actual value of key from data
  const noteAudio = document.getElementById(key.dataset.note)
  //play the notes con-currently
  noteAudio.currentTime = 0
  noteAudio.play()
  //change background colors when keys are pressed
  key.classList.add('active')
  //remove the color
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}