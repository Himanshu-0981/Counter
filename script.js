const output = document.querySelector(".output");
const decrementBtn = document.querySelector(".btn-one");
const resetBtn = document.querySelector(".btn-two");
const incrementBtn = document.querySelector(".btn-three");

let count = 0;

incrementBtn.addEventListener('click', () => {
    count++;
    output.textContent = count
})

resetBtn.addEventListener('click', () => {
    count = 0;
    output.textContent = count;
})

decrementBtn.addEventListener('click', () => {
    count--
    output.textContent = count
})


