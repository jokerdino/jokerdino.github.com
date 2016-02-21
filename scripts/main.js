//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hellwo World!';

var myButton = document.querySelector('button');


var goldloot;
var elixirloot;
var darkelixirloot;


var cc_treasury = document.getElementById('cc_treasury');
var cc_treasury_darkelixir;
var goldstorage = document.getElementById('goldstorage');

var goldstorage;
//var elixirstorage;
//var darkelixirstorage;
var loot_multi;
var th_diff_mul;
var cc_mul = 0.03;
var cc_loot;
var loot_cap;
var th_diff;

//var attacker;
//var defender;
////
//var attacker = document.getElementbyId('attacker');
//var defender = document.getElementById('defender');



var final_gold_loot;
var final_elixir_loot;

function displayloot() {

    cc_loot = cc_treasury.value * cc_mul;

    th_diff = attacker.value - defender.value;
    
  //  Town hall differences
    
    if (th_diff <= 0) {
        th_diff_mul = 1;
    } else if (th_diff === 1) {
        th_diff_mul = 0.80;
    } else if (th_diff === 2) {
        th_diff_mul = 0.50;
    } else if (th_diff === 3) {
        th_diff_mul = 0.25;
    } else if (th_diff >= 4) {
        th_diff_mul = 0.05;
    }
    
    // calculate loot cap for each defender TH level

    if ((defender.value) === '1') {
        loot_cap = 500;
    } else if ((defender.value) === '2') {
        loot_cap = 1400;
    } else if ((defender.value) === '3') {
        loot_cap = 20000;
    } else if ((defender.value) === '4') {
        loot_cap = 100000;
    } else if ((defender.value) === '5') {
        loot_cap = 200000;
    } else if ((defender.value) === '6') {
        loot_cap = 200000;
    } else if ((defender.value) === '7') {
        loot_cap = 250000;
    } else if ((defender.value) === '8') {
        loot_cap = 300000;
    } else if ((defender.value) === '9') {
        loot_cap = 350000;
    } else if ((defender.value) === '10') {
        loot_cap = 400000;
    } else if ((defender.value) === '11') {
        loot_cap = 450000;
    }
    
    // calculate loot percentage at each TH level
    if ((defender.value) === '11') {
        loot_multi = 0.10;
    } else if ((defender.value) === '10') {
        loot_multi = 0.12;
    } else if ((defender.value) === '9') {
        loot_multi = 0.14;
    } else if ((defender.value) === '8') {
        loot_multi = 0.16;
    } else if ((defender.value) === '7') {
        loot_multi = 0.18;
    } else if ((defender.value) <= '6') {
        loot_multi = 0.20;
    }
    
    goldloot = goldstorage.value * loot_multi * th_diff_mul;
    elixirloot = elixirstorage.value * loot_multi * th_diff_mul;
    
    if (goldloot > loot_cap) {
        final_gold_loot = loot_cap + cc_loot;
      //  window.alert(final_gold_loot);
    } else if (goldloot < loot_cap) {
        final_gold_loot = goldloot + cc_loot;
    }

        
    if (elixirloot > loot_cap) {
        final_elixir_loot = loot_cap + cc_loot;
      //  window.alert(final_gold_loot);
    } else if (elixirloot < loot_cap) {
        final_elixir_loot = elixirloot + cc_loot;
    }

    
    document.getElementById("goldloot").innerHTML = final_gold_loot;
    document.getElementById("elixirloot").innerHTML = final_elixir_loot;
    
   // goldloot = Math.ceil(goldstorage.value * 0.20) ;
}

myButton.onclick = function () {

    displayloot();
    
    
};

