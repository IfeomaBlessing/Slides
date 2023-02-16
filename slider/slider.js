let userPixs = document.getElementsByClassName("user-pix");
let cards = document.getElementsByClassName("card");



function showCard(){
    for(userPix of userPixs){
        userPix.classList.remove('active-pix');    
    }
    for (card of cards){
        card.classList.remove('active-card');
    }
    let X = Array.from(userPixs).indexOf(event.target);
    cards[X].classList.add('active-card');
    userPixs[X].classList.add('active-pix');

}







