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

function findAndAlgoWords(inputAsArray, algoLetters) {
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

function doTheAlgo(wordToAlgo, letters, algoLetters, nextIndex) {

    let nextWordToAlgo = algoLetters[nextIndex][0]
    let nextLetters = algoLetters[nextIndex][1]

    let [firstWordLetters, secondWordLetters] = checkAndMaybeMakeUpperCase(wordToAlgo, letters, nextWordToAlgo, nextLetters)

    wordToAlgo = secondWordLetters + wordToAlgo.substring(firstWordLetters.length)
    nextWordToAlgo = firstWordLetters + nextWordToAlgo.substring(secondWordLetters.length)

    return [wordToAlgo, nextWordToAlgo]
}

function checkAndMaybeMakeUpperCase(currentWord, currentLetters, nextWord, nextLetters) {

    let onlyFirstHasCapital = currentWord[0] === currentWord[0].toUpperCase()
        && nextWord[0] === nextWord[0].toLowerCase()
    let onlySecondHasCapital = currentWord[0] === currentWord[0].toLowerCase()
        && nextWord[0] === nextWord[0].toUpperCase()

    if (onlyFirstHasCapital) {
        nextLetters = nextLetters.substring(0, 1).toUpperCase() + nextLetters.substring(1)
        currentLetters = currentLetters.substring(0, 1).toLowerCase() + currentLetters.substring(1)

    } else if (onlySecondHasCapital) {
        nextLetters = nextLetters.substring(0, 1).toLowerCase() + nextLetters.substring(1)
        currentLetters = currentLetters.substring(0, 1).toUpperCase() + currentLetters.substring(1)
    }

    return [currentLetters, nextLetters]

}

function selectLettersToSwitch(word) {
    let lettersToSwitch = ''
    let wordArray = word.split('');

    for (let i = 0; i < wordArray.length; i++) {
        const letter = wordArray[i];

        if (checkIfLetterIsVowel(letter)) {
            break
        } else {
            lettersToSwitch += letter
        }
    }

    return lettersToSwitch
}

function checkIfLetterIsVowel(letter) {
    let vowelLetters = ['а', 'ъ', 'о', 'у', 'е', 'и', 'я', 'a', 'e', 'i', 'o', 'u', 'y']

    return vowelLetters.includes(letter.toLowerCase())
}

export default algo;


// algo("трябва да го прави върху цялото изречение") // прябва да го трави църху вялото изречение
// algo("първи клас") // клърви пас
// algo("хапни си пудинг")
// algo("Хайде да ми ядеш Пишката")
// algo("пръднах Мощно")
// algo("Стана ми кура")
// // console.log("---------")
// algo("пиш ми яжката") // невалиден вход

// algo("A vowel is also a letter that represents a sound produced in this way")
// algo("Suck my dick")
// algo("аз не съм рънвал никога нищо през него")
