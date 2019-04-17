var cards_drawn = 0;
var cards_tot = 0;
var deck = [];
var num_decks = 6;
var all_cards = num_decks * 52;
var tot = 0;
var run_count = 0;
var count_show = 1;
var total_show = 1;
var dealing = 0;

function draw(){
    if (!dealing){
        for (let i = 0; i<cards_drawn;i++){
            document.getElementById("I" + i).src = "//:0";
            document.getElementById("I" + i).style.opacity = 0;
        }
        cards_drawn = 0
        dealing = 1;
        document.getElementById("bust").innerHTML = "";
        tot = 0;
    }
    var pos = "I" + cards_drawn.toString();
    console.log(pos);
 //   document.getElementById(pos).style.left = cards_drawn * 0.001; 
//    console.log(document.getElementById(pos).style.left);
    var card = deck[cards_tot];
    var val = get_val(card);
    tot = tot + val;
    if (tot > 21){
        document.getElementById("bust").innerHTML = "BUSTED";
        dealing = 0;
    }                          

    if (count_show === 1){
        document.getElementById("count").innerHTML = "Count: " + run_count;
    }
    if (total_show === 1){
        document.getElementById("total").innerHTML = "Total: " + tot;
    }
    console.log(val);
    console.log(tot);
    document.getElementById(pos).src = "cards/PNG/" + card + ".png";
    document.getElementById(pos).style.opacity = 1;
    cards_drawn++;
    cards_tot++;
    }
function create_deck(){
    const s = ['H','S','C','D'];
    const v = ['A','2', '3','4','5','6','7','8','9','10','J','Q','K'];
    for(let i = 0; i < num_decks; i++){    
        for(let suit in s){
            for(let card in v){
                //console.log(card+suit);
                deck.push(v[card] + s[suit]);
            }
     
        }
    }
}

function shuffle_deck(){
    var temp = null;
    var c = 0;
    for(let i = all_cards -1; i>0;i--){
        temp = deck[i];
        c = Math.floor(Math.random() * (i+1));
        deck[i] = deck[c];
        deck[c] = temp;
   }
}

function setup(){
    create_deck();
    //console.log(deck);
    shuffle_deck();
    //console.log(deck);
}

function get_val(c){
    var sub = c.substring(0,c.length-1);
    if (sub === 'K' || sub === 'Q' || sub === 'J' || sub == '10'){
        run_count--;
        return 10; 
    } 
    if (sub === 'A'){
        run_count--;
        return 1;
    }
    var num = parseInt(sub);
    if (num < 7){
        run_count++;
    }
    return num;
}
function count_hide(){
    if (count_show === 1){
        document.getElementById("count").innerHTML = "";
        count_show = 0;
    } else {
        document.getElementById("count").innerHTML = "Count: " + run_count;
        count_show = 1;
    }
}
function total_hide(){
    if (total_show === 1){
        document.getElementById("total").innerHTML = "";
		total_show = 0;
    } else {
        document.getElementById("total").innerHTML = "Total: " + tot;
        total_show = 1;
    }
} 
window.onload = setup;
