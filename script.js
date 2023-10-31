const type = {
    'citadine' : 8,
    'cabriolet' : 6,
    'berline' : 6.5,
    'SUV' : 4
}
const energie = {
    'essence' : 5,
    'electrique': 9,
    'gaz': 6,
    'diesel': 4,
    'hybride': 7
}
const kilometrage = {
    'k1' : 9,
    'k2' : 7,
    'k3' : 5,
    'k4' : 3,
    'k5' : 1
}
const année = {
    'a1' : 1,
    'a2' : 2,
    'a3' : 4,
    'a4' : 5,
    'a5' : 7
}
const passagers = {
    '1': 0.11,
    '2': -0.17,
    '3': -0.29,
    '4': -0.53
}
const taux = {
    '10': 3,
    '15': 2.74,
    '25': 2.52,
    '33': 2.10,
    '40': 1.85
}
let score = [];
function creator (object, a) {
    let comparateur = [document.getElementById('type'), document.getElementById('energie'), document.getElementById('kilometrage'), document.getElementById('année')];
    Object.keys(object).forEach(function(key){
        if (key == comparateur[a].value) {
            score.push(object[key]);
        } 
    });
}
function tauxEmprunt () {
    let score_ = "";
    score = eval(score.join('+'));
    Object.keys(taux).reverse().forEach(function(key){
        if (parseInt(key) >= score ) {
            score_ = taux[key];
        }
    });
    score = score_;
    Object.keys(passagers).forEach(function(key){
        if (key == document.getElementById('passagers').value ) {
            score += passagers[key];
        }
    });
    document.querySelector('div').innerHTML = "L'emprunt de votre véhicule est de " + score + " %";
}
document.getElementById('button').addEventListener('click', but);
function but() {
    score = [];
    creator(type,0);
    creator(energie,1);
    creator(kilometrage,2);
    creator(année,3);
    tauxEmprunt();
    //alert(score);
}
