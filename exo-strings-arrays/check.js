
let sentence = 'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript'
let word = 'Javascript'
if (sentence.includes(word)) {
  console.log(`The word "${word}" is includes on the text :\n${sentence}`)
} else {
  console.log(`This text do not includes the word "${word}".`)
}