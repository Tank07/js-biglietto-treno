let chilometriUtente = prompt("Quanti chilometri dovrà percorrere ?");

let etaUtente = prompt("Quanti anni ha ?");

console.log(chilometriUtente +  etaUtente);

let prezzoBase = chilometriUtente * 0.21;

console.log(prezzoBase);

let prezzoUnder = prezzoBase - (prezzoBase/100 * 20);

let prezzoOver = prezzoBase - (prezzoBase/100 * 40);

if ( etaUtente < 18 ) {
    //istruzioni se condizione è vera
    console.log(prezzoUnder);
  } else if ( etaUtente > 65) {
    //istruzioni se condizione 2 è vera
    console.log(prezzoOver);
  } else {
    //istruzioni nessuna condizione precedente è vera
    console.log(prezzoBase);
  }


// let prezzoFinale = prezzoUnder + prezzoOver;

// console.log(prezzoFinale);

// const coloreUtente = prompt("Qual è il tuo colore preferito ?");

// const numeroUtente = prompt("Qual è il tuo numero fortunato ?");

// let password = ` La tua password indecifrabile è: ${nomeUtente}${cognomeUtente}${coloreUtente}${numeroUtente}`;

// console.log(password);

// document.getElementById("contenitore_password").innerHTML = password;

// document.getElementById("contenitore_password").style.color = "magenta";