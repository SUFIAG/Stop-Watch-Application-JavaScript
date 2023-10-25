/// Document
let hour = document.getElementById("time_hour");
let min = document.getElementById("time_min");
let sec = document.getElementById("time_sec");
let start = document.getElementById("btn_start");
let reset = document.getElementById("btn_reset");
let pause = document.getElementById("btn_pause");


/// Variable
let _hour = 0;
let _min = 0;
let _sec = 0;
let runing = false;
let timer;


// Event Listener
start.addEventListener("click", fStart);
reset.addEventListener("click", fReset);
pause.addEventListener("click", fPause);


// Function
function fStart() {
    if (!runing) {
        runing = true;
        timer = setInterval(() => {
            _sec += 1;
            if (_sec === 60){
                _sec = 0;
                _min += 1;
            };
            if (_min === 60) {
                _min = 0;
                _hour += 1;
            };
            if (_hour === 24) {
                _hour = 0;
            };
            sec.innerText = _sec;
            min.innerText = _min;
            hour.innerText = _hour;
        }, 1000);
    };
};

function fReset() {
    runing = false;
    clearInterval(timer);
    _hour = 0;
    _min = 0;
    _sec = 0;
    hour.innerText = _hour;
    min.innerText = _min;
    sec.innerText = _sec;
};

function fPause() {
    runing = false;
    clearInterval(timer);
};