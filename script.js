//your code here

const main = document.getElementById('app');
const btn = document.getElementById('swap');

btn.addEventListener('click', () => {
    if(main.classList.contains("night")){
        main.classList.remove("night");
        btn.classList.remove("button_night");
    }
    else{
        main.classList.add("night");
        btn.classList.add("button_night");
    }
});