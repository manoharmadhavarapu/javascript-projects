const input = document.querySelector('input');
const upperCaseOutput = document.querySelector('#uppercase span');
const lowerCaseOutput = document.querySelector('#lowercase span');
const camelCaseOutput = document.querySelector('#camelcase span');
const pascalCaseOutput = document.querySelector('#pascalcase span');
const snakeCaseOutput = document.querySelector('#snakecase span');
const kebabCaseOutput = document.querySelector('#kebabcase span');
const trimOutput = document.querySelector('#trim span');


function capitalizeString(str){
    if(!str) return str
    const firstCharacter = str[0].toUpperCase();
    return firstCharacter + str.slice(1);
}

function toCamelCase(str){
    const lowerCaseString = str.toLowerCase();
    let wordsArray = lowerCaseString.split(" ")
    const finalArray = wordsArray.map((word,index)=>{
        if(index === 0) return word;
        return capitalizeString(word)
    })
    return finalArray.join('');
}

function toPascalCase(str){
    const lowerCaseString = str.toLowerCase();
    let wordsArray = lowerCaseString.split(" ")
    const finalArray = wordsArray.map((word)=>{
        return capitalizeString(word)
    })
    return finalArray.join('');
}

function toSnakeCase(str){
    return str.replaceAll(" ", "_")
}

function toKebabCase(str){
    return str.replaceAll(" ", "-")
}

function trim(str){
    return str.replaceAll(" ", "")
}


function updatedTextTransform () {
    lowerCaseOutput.innerText = input.value.trim().toLowerCase();
    upperCaseOutput.innerText = input.value.trim().toUpperCase();
    camelCaseOutput.innerText = toCamelCase(input.value.trim());
    pascalCaseOutput.innerText = toPascalCase(input.value.trim());
    snakeCaseOutput.innerText = toSnakeCase(input.value.trim());
    kebabCaseOutput.innerText = toKebabCase(input.value.trim());
    trimOutput.innerText = trim(input.value.trim());
}
updatedTextTransform()


input.addEventListener('input',()=>{
        updatedTextTransform()
})