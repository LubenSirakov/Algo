import { checkAndMaybeMakeUpperCase } from "./upperCaseTransformer"

export const doTheAlgo = (wordToAlgo, letters, algoLetters, nextIndex) => {

    let nextWordToAlgo = algoLetters[nextIndex][0]
    let nextLetters = algoLetters[nextIndex][1]

    let [firstWordLetters, secondWordLetters] = checkAndMaybeMakeUpperCase(wordToAlgo, letters, nextWordToAlgo, nextLetters)

    wordToAlgo = secondWordLetters + wordToAlgo.substring(firstWordLetters.length)
    nextWordToAlgo = firstWordLetters + nextWordToAlgo.substring(secondWordLetters.length)

    return [wordToAlgo, nextWordToAlgo]
}