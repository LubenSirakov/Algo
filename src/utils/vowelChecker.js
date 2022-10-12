export const checkIfLetterIsVowel = (letter) => {
    let vowelLetters = ['а', 'ъ', 'о', 'у', 'е', 'и', 'я', 'a', 'e', 'i', 'o', 'u', 'y']

    return vowelLetters.includes(letter.toLowerCase())
}