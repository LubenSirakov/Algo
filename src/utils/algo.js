import { findAndAlgoWords } from './findAndAlgoWords'
import { selectLettersToSwitch } from './switchLettersSelector'

function algo(input) {
    let inputAsArray = input.split(" ")
    let wordsToAlgo = {}

    inputAsArray.forEach(currentWord => {

        if (currentWord.length > 2) {
            let lettersToSwitch = selectLettersToSwitch(currentWord)

            if (lettersToSwitch !== '') {
                wordsToAlgo[currentWord] = lettersToSwitch
            }
        }
    });

    let algoLetters = Object.entries(wordsToAlgo)

    if (algoLetters.length > 1) {

        return findAndAlgoWords(inputAsArray, algoLetters)

    } else {

        return ""
    }
}

export default algo;
