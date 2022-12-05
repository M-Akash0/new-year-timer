const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");


function apple() {
    const currentyear = new Date();
    const newyear = new Date(`january 1 $(currentyear+1) 2023 00:00:00`);
    const currentdate = new Date();


    const akash = newyear - currentdate;


    const d = Math.floor(akash / 1000 / 60 / 60 / 24);

    const h = Math.floor((akash / 1000 / 60 / 60) % 24);

    const m = Math.floor((akash / 1000 / 60) % 60);

    const s = Math.floor((akash / 1000) % 60);


    days.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;

}
setInterval(apple, 1000);