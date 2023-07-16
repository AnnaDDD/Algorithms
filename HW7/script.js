// Постройте частотный словарь букв русского (или английского) текста. (Javascript - object, Java - Hashmap).

function buildFrequencyDictionary(text) {
  const frequencyDictionary = {};

  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (!/[а-я]/.test(char)) {
      continue;
    }

    if (frequencyDictionary[char]) {
      frequencyDictionary[char]++;
    } else {
      frequencyDictionary[char] = 1;
    }
  }
  return frequencyDictionary;
}

const text = "Рандомный текст на русском языке";
const result = buildFrequencyDictionary(text);
console.log(result);
