const par = document.getElementById("excuse");

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];

let action = ['ate', 'peed', 'crushed', 'broke'];

let what = ['my homework', 'my phone', 'the car'];

let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generateNumber(va){
		return Math.floor(Math.random() * va.length) ;
}

function generateExcuse(){
    let exc=who[generateNumber(who)]+" "+action[generateNumber(action)]+" "+what[generateNumber(what)]+" "+when[generateNumber(when)];
    par.innerHTML = exc;
}

generateExcuse();