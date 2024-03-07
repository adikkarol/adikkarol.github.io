const alternatives = [
    {text:"Happy International Women's Day, My Dear Meruyert", images:"images/cat-01.gif"},
    {text:"You are the most important person in my life", images:"images/cat-02.gif"},
    {text:"Thank you for everything you do for me", images:"images/cat-03.gif"},
    {text:"I know you will achieve all the things you set for yourself", images:"images/cat-04.gif"},
    {text:"I will always support you. Love you, Adil", images:"images/cat-05.gif"}
];

// const ohyes = {text:"Yeah :3", images:"images/cat-yes.gif"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    // console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
    text.style.fontWeight = 'bold';
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Flip'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});