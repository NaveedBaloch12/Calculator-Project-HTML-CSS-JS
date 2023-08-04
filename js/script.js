// ------------------------- Grab Elements ------------------------------
const btnS = document.querySelectorAll('.btn');

const answer = document.getElementById('answer');
const calculations = document.getElementById('calc');

// ----------------------- Event Listeners -----------------------------

btnS.forEach(btn => btn.addEventListener("mousedown", addClickedClass))
btnS.forEach(btn => btn.addEventListener("mouseup", removeClickedClass))

window.addEventListener("keydown", addKeyDownClass);
window.addEventListener("keyup", addKeyUpClass);


// ----------------------- Functions ------------------------------

function addClickedClass() {
    this.classList.add('active');
}

function removeClickedClass() {
    this.classList.remove('active');
}

function addKeyDownClass(e) {
    const key = (document.querySelector(`div[data-code-1="${e.code}"]`) || document.querySelector(`div[data-code-2="${e.code}"]`));
    if (!key) return;
    key.classList.add('active');
}

function addKeyUpClass(e) {
    const key = (document.querySelector(`div[data-code-1="${e.code}"]`) || document.querySelector(`div[data-code-2="${e.code}"]`));
    if (!key) return;
    key.classList.remove('active');
}


// =====================================================================================

