// ------------------------- Grab Elements ------------------------------
const btnS = document.querySelectorAll('.btn');
const input__box = document.getElementById('lcd');

// ----------------------- Event Listeners -----------------------------

btnS.forEach(btn => btn.addEventListener("mousedown", addClickedClass));
btnS.forEach(btn => btn.addEventListener("mousedown", showClickedValue));
btnS.forEach(btn => btn.addEventListener("mouseup", removeClickedClass));

var ANS = 0;
window.addEventListener("keydown", (e) => {
    const key = (document.querySelector(`div[data-code-1="${e.code}"]`) || document.querySelector(`div[data-code-2="${e.code}"]`));
    addKeyDownClass(e, key);
    showInput(e, key);
    if (e.key === 'Backspace') {
        clearAll(e);
    }
    if (e.key === 'Delete') {
        deleteOne();
    }
    if (e.key === 'Enter') {
        calculate();
    }
});
window.addEventListener("keyup", addKeyUpClass);
// ----------------------- Functions ------------------------------
// functions for styling buttons when pressed
function addClickedClass() {
    this.classList.add('active');
}
function removeClickedClass() {
    this.classList.remove('active');
}
function addKeyDownClass(e, key) {
    if (!key) return;
    key.classList.add('active');
}
function addKeyUpClass(e) {
    const key = (document.querySelector(`div[data-code-1="${e.code}"]`) || document.querySelector(`div[data-code-2="${e.code}"]`));
    if (!key) return;
    key.classList.remove('active');
}

function showClickedValue(e) {
    clickedValue =  e.target.innerHTML;
var clickedValue;
    if(clickedValue === "AC" || clickedValue === "√" || clickedValue === "=" || clickedValue === "DEL") {return};
    input__box.value += clickedValue;
}



// this function will get input number by keyboard and display it 
function showInput(e, key) {
    if (!key || e.key === 'Enter' || e.key === 'Backspace' || e.key === 'Delete') return;
    input__box.value += e.key;
}
// too clear all 
function clearAll() {
    input__box.value = " ";
}
// delete one value 
function deleteOne() {
    input__box.value = input__box.value.slice(0, -1);
}
function calculate() {
    input__box.value = eval(input__box.value);
    ANS = input__box.value;
}
function squrt(){
    input__box.value = Math.pow(input__box.value, 1/2);
}