import { checkIfLetterIsVowel } from "./vowelChecker";

export const selectLettersToSwitch = (word) => {
    let lettersToSwitch = ''

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];

        if (checkIfLetterIsVowel(letter)) {
            break
        } else {
            lettersToSwitch += letter
        }
    }

    return lettersToSwitch
}