//light colored pad
let pad = document.querySelector('.pad')

// blue round buttons
let cButton = `
<span>
    <p></p>
</span>
`;

let allButtons = cButton.repeat(16) //generate copies of the button
pad.innerHTML = (allButtons) //add them to the pad, will be displayed as grid


//selecting all spans (calculator buttons)
let bSpan = document.querySelectorAll('span')
const bSize = '60px' 
const bBorderRadius = '50%'
const bColor = 'dodgerblue'
const fontSize = '20pt'

const textBox = document.querySelector('#type')

//generate styles for calculator buttons
bSpan.forEach(span => {
    span.style.width = bSize
    span.style.height = bSize
    span.style.borderRadius = bBorderRadius
    span.style.backgroundColor = bColor
    span.style.fontSize = fontSize
    span.style.fontWeight = 'bold'
    span.style.textAlign = 'center'
    span.style.cursor = 'pointer'
    span.style.display = 'flex'
    span.style.alignItems = 'center'
    span.style.justifyContent = 'center'
    span.addEventListener('click',e=>{ //click listener on button
        updateDisplay(e.target.childNodes[1].textContent) //to update display, updateDisplay()--> line 53
    });
    span.childNodes[1].addEventListener('click',e=>{ //click listener on digit
        updateDisplay(e.target.textContent) //to update display, updateDisplay()--> line 53
    });
});

bSpan[15].style.backgroundColor = 'orange' //make the the equal sign unique

//lay out digits & operations text on buttons
buttonsList = ['7','8','9','+','4','5','6','-','1','2','3','*','0','.','/','=']
for(let i = 0; i<=15;i++){
    bSpan[i].childNodes[1].textContent = buttonsList[i]
}

//updating the text box for each button click
const updateDisplay = (value)=>{
    value!='='? (textBox.value += value):'' // don`t display '=' sign
}

//calculate mathematical expression
const calculate = exp => eval(exp)

//calculate expression and update display when '=' is clicked
bSpan[15].childNodes[1].addEventListener('click', (e)=>{
    textBox.value = calculate(textBox.value)
    console.log(`Text content is: ${textBox.value}`)
    console.log(calculate(textBox.value))
})
bSpan[15].addEventListener('click', (e)=>{
    textBox.value = calculate(textBox.value)
    console.log(`Text content is: ${textBox.value}`)
    console.log(calculate(textBox.value))

})