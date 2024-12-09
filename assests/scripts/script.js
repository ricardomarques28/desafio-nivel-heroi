
function initialize() {
    

let nameHero = document.querySelector('#name-hero').value;
let xpHero = document.querySelector('#xp-hero').value;
let resultHero = document.querySelector('#result-hero');

function nivelXp(xp) {

    if (parseInt(xp) <= 1000){
        return "Ferro";
    } else if (parseInt(xp)<= 2000){
        return "Bronze";
    } else if (parseInt(xp)<= 5000){
        return "Prata";
    } else if (parseInt(xp)<= 7000){
        return "Ouro"
    } else if (parseInt(xp)<= 8000){
        return "Platina";
    } else if (parseInt(xp)<= 9000){
        return "Assendente"
    } else if (parseInt(xp)<= 10000){
        return "Imortal";
    } else (parseInt(xp)>= 10001)
        return "Radiante";
}

function clearInput(){
    document.querySelector('#name-hero').value = '';
    document.querySelector('#xp-hero').value = '';
}

let resultLevel = nivelXp(xpHero);
resultHero.innerText = `O Herói de nome ${nameHero} está no nível de ${resultLevel}`;
clearInput();
}