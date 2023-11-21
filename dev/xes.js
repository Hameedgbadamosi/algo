function sentenceAnalysis(sentence) {
    // Initialize counters
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;

    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let character = sentence[i];
        lengthCounter++;

        // Check if the character is a letter
        if (/[a-zA-Z]/.test(character)) {
            // Check if the letter is a vowel
            if (/[aeiouAEIOU]/.test(character)) {
                vowelCounter++;
            }
        } else if (character === ' ') {
            // Check if the character is a space, indicating a new word
            wordCounter++;
        }
    }

    // Account for the last word after the last space
    wordCounter++;

    // Display or use the results
    console.log('Length of the sentence:', lengthCounter);
    console.log('Number of words:', wordCounter);
    console.log('Number of vowels:', vowelCounter);
}

// Example usage:
const inputSentence = "The quick brown fox jumps over the lazy dog.";
sentenceAnalysis(inputSentence);