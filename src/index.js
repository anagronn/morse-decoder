const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const REPLACEMENT = {
  '10': '.',
  '11': '-',
}

function decode(expr) {
  let words = expr.split('**********');

  let morseWords = [];
  words.forEach((word) => {
    morseWords.push(morseWord(word));
  })

  return morseWords.map((word) => decodeWord(word)).join(' ');
}

function decodeWord(morseLetters) {
  let decodedLetters = [];
  morseLetters.forEach((letter) => {
    for (let key in MORSE_TABLE) {
      if (letter === key) {
        decodedLetters.push(MORSE_TABLE[key]);
      }
    }
  })
  return decodedLetters.join('');
}

function morseWord(word) {
  let morseLetters = []

  word.split('').forEach((_, i) => {
    if (i === 0 || i % 10 === 0) {
      morseLetters.push(word.slice(i, i + 10));
    }
  });

  return morseLetters.map((letter) => morseLetter(letter));
}

function morseLetter(letter) {
  let morseLetter = letter.replace(/10|11/g, match => REPLACEMENT[match])
  return morseLetter.replaceAll('0', '');
}

module.exports = {
  decode
}