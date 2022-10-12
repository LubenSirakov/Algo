import { doTheAlgo } from "./algoBuilder"

export const findAndAlgoWords = (inputAsArray, algoLetters) => {
    let secondAlgoWord = ''
    let outputAlgo = []

    for (let i = 0; i < inputAsArray.length; i++) {
        let currentWord = inputAsArray[i]

        for (let j = 0; j < algoLetters.length; j++) {
            let [wordToAlgo, letters] = [...algoLetters[j]]
            let nextIndex = j + 1

            if (currentWord === wordToAlgo) {
                if (secondAlgoWord === '') {

                    if (nextIndex < algoLetters.length) {

                        let [currentWordToAlgo, nextWordToAlgo] = doTheAlgo(wordToAlgo, letters, algoLetters, nextIndex)

                        currentWord = currentWordToAlgo
                        secondAlgoWord = nextWordToAlgo
                    }
                } else {
                    currentWord = secondAlgoWord
                    secondAlgoWord = ''
                }
            }
        }

        if (currentWord !== '') {
            outputAlgo.push(currentWord)
        }
    }

    return outputAlgo.join(' ')
}