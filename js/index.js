
'use strict';
const GREETING = 'Willkommen ';
const RESETOFFSSET = '0 0 0 0';
const PADDING = '2.2rem 3.5rem';

let container = document.querySelector('.container');
let inputText = document.createElement('input');
inputText.type = 'text';
inputText.placeholder = 'Write a name';
inputText.style.width = '20rem';
inputText.style.boxSizing = 'border-box';
inputText.style.backgroundColor = 'rgb(223, 223, 223)';
inputText.style.color = 'rgb(13, 13, 12)';
inputText.style.fontFamily = 'serif';
inputText.style.padding = PADDING;
inputText.style.border = '0.1rem solid transparent';
inputText.style.margin = RESETOFFSSET;
container.style.margin = RESETOFFSSET;
container.style.padding = RESETOFFSSET;
container.style.minHeight = '100vh';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
let text = document.createElement('p');
text.classList.add('text');
text.style.color = 'skyblue';
text.style.backgroundColor = 'grey';
text.style.fontSize = inputText.style.fontSize = '1.5rem';
container.appendChild(inputText);
container.appendChild(text);

function clearTextContent(element) {
    element.textContent = '';
    element.style.padding = '0';
}

inputText.addEventListener('keyup', (event) => {
    let inputTextValue = inputText.value;

    if (event.key === 'Enter') {
        text.style.padding = PADDING;
        switch (inputTextValue) {
            case 'Thomas':
                text.textContent = (GREETING + inputTextValue + '! ' + (1));
                break;
            case 'Ingrid':
                text.textContent = (GREETING + inputTextValue + '! ' + (2));
                break;
            case 'Boris':
                text.textContent = (GREETING + inputTextValue + '! ' + (3));
                break;
            default:
                clearTextContent(text);
                break;
        }
    } else {
        clearTextContent(text);
    }

});
