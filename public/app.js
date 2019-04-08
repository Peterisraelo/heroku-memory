var cardPlate = document.querySelectorAll(".card");

var cards = [...cardPlate];

var decker =  document.querySelector(".deck");

var openCards = [];

var matchedCards = [];

var moves = document.querySelector(".moves");

var mover;

mover= 0;

var timer= document.querySelector(".timer");

var stars =  document.querySelectorAll(".fa-star");

var starhold =  document.querySelector(".stars");



function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

document.body.onload =  function(){
    cards = shuffle(cards);

    decker.innerHTML = "";
    
    typeWriter();
    
    startTimer();

    stars.forEach(function(star){
        star.style.color= "#FFD700";
    })

    cards.forEach(function(item){
        decker.appendChild(item);
    });

    cards.forEach(function(car){
        car.classList.remove("open","show","match");
    })
};

cards.forEach(function(car){

    car.addEventListener("click", function(){
        car.classList.add("open","show","disabled");
        openCards.push(this);

        if((mover>10)&&(mover<15)){
            stars[2].style.visibility="collapse";
        }
        else if(mover>20){
            stars[1].style.visibility="collapse";
        }

        if((openCards.length)==2){

            cards.forEach(function(card){
                card.classList.add("disabled");
            });
            mover++;
            moves.innerHTML= mover;
            if((openCards[0].querySelector("i").className)==(openCards[1].querySelector("i").className)){
                

                (openCards[0].classList.add("match"));
                (openCards[1].classList.add("match"));

                cards.forEach(function(card){
                    card.classList.remove("disabled");
                })

                matchedCards.push(openCards[0],openCards[1]);

                matchedCards.forEach(function(card){
                    card.classList.add("disabled");
                })


                openCards = [];

                if(matchedCards.length==16){
                    finishGame();
                };

            }else{
                openCards[0].classList.add("wrong");
                openCards[1].classList.add("wrong");
                setTimeout(function(){
                    (openCards[0].classList.remove("open","show","disabled","wrong"));
                    (openCards[1].classList.remove("open","show","disabled","wrong"));

                    cards.forEach(function(card){
                        card.classList.remove("disabled");
                    });


                    openCards = [];
                }, 1000);
            }
        }
    });
});

var second = 0;
var minute = 0;
var hour = 0;
function startTimer(){
    Interval= setInterval(function(){
        timer.innerHTML = minute + " mins" + second + "secs";
        second++;
        if(second==60){
            minute++;
            second=0;
        };
        if(minute==60){
            hour++;
            minute=0;
        }
    }, 1000);
    
}


var mode= document.querySelector(".modal");

function finishGame(){
    mode.style.display = "block";
    document.querySelector("#totalmoves").innerHTML = mover;
    document.querySelector("#totaltime").innerHTML = (timer).innerHTML;
    document.querySelector("#starrating").innerHTML = document.querySelector(".stars").innerHTML;

}

/*Footer animations*/
var i = 0;
var txt = 'Israel-Ovirih Peter, 2019©'; /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
if (i < txt.length) {
document.querySelector(".ovirih").innerHTML += txt.charAt(i);
i++;
 setTimeout(typeWriter, speed);
    }
    }