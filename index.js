
let imageArray = [
    'dice1.png',
    'dice2.png',
    'dice3.png',
    'dice4.png',
    'dice5.png',
    'dice6.png',
]
 
function get_random_image1() {
    randomIndex = Math.floor(Math.random() * imageArray.length );
    diceImg1 = imageArray[randomIndex]
    document.getElementById('img1').src = `./images/${diceImg1}`
    
}

function get_random_image2() {
    randomIndex = Math.floor(Math.random() * imageArray.length );
    diceImg2 = imageArray[randomIndex]
    document.getElementById('img2').src = `./images/${diceImg2}`
    
}

function button () {
    get_random_image1();
    get_random_image2();

    if (diceImg1 > diceImg2) {
        document.querySelector('h2').innerHTML = "Player 1 wins!"
    }

    else if (diceImg2 > diceImg1) {
        document.querySelector('h2').innerHTML = "Player 2 wins!"
    }

    else { 
        document.querySelector('h2').innerHTML = "Draw!"
    }

}