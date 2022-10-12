export const checkAndMaybeMakeUpperCase = (currentWord, currentLetters, nextWord, nextLetters) => {

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