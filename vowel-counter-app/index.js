function checkVowels() {
    let text = document.getElementById('inputText').value;
    let vowelCount = 0;

    text = text.toLowerCase();

    for(let char of text) {
        if(isVowel(char)) {
            vowelCount++;
        }
    }

    const result = document.getElementById('result');
    result.textContent = "Total Vowels: "+ vowelCount;
}

function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char);
}