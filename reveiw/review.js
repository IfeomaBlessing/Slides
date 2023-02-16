let upArrow = document.querySelector(" .fa-arrow-up");
let downArrow = document.querySelector(" .fa-arrow-down");
let slide= document.querySelector(".slide");


// You can use this also but give one of the cards a classname of active
// let card= document.querySelectorAll(".card");


let X = 0;

upArrow.addEventListener('click', function(){
    if (X > "-660"){
  
        X = X - 220;
        slide.style.top = X + "px";
    }

})


downArrow.addEventListener('click', function(){
    if (X < "0"){
        X = X + 220;
        slide.style.top = X + "px";    
    }
    
})

// upArrow.addEventListener('click', function(){
//     card[X].classList.remove('active');
//     X = (X + 1) % card.length; 
//     card[X].classList.add('active');

//     }

// )


// downArrow.addEventListener('click', function(){
//     card[X].classList.remove('active');
//     X = (X - 1 + card.length) % card.length; 
//     card[X].classList.add('active');
  
//     }
// )