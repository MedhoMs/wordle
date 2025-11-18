const rows = [
  document.querySelectorAll("#row-1 td"),
  document.querySelectorAll("#row-2 td"),
  document.querySelectorAll("#row-3 td"),
  document.querySelectorAll("#row-4 td"),
  document.querySelectorAll("#row-5 td"),
  document.querySelectorAll("#row-6 td")
];

const hiddenWordsArray = [
  "CAMINO", "PERDON", "CAMBIO", "PLANTA", "SOMBRA",
  "CAMELA", "CADENA", "RATITA", "TOMATE", "LINAJE",
  "CASARE", "CANTAN", "FRUTAS", "MADERA", "BARCOS",
  "CUERPO", "COCINA", "LAGUNA", "MONTAR", "BANDAS",
  "GATITO", "GASTAR", "PUERTA", "SUELOS", "PRENSA",
  "SARTEN", "LLEGAR", "PUNTOS", "BANCOS", "CARGAR",
  "CARGOS", "GALERA", "LATIDO", "RITMOS", "CURSOS",
  "TORRES", "BOLSAS", "RAMERA", "ANTENA", "GANADO",
  "FORMAS", "CANTOS", "RESTOS", "TENDER", "SABANA",
  "TRAMPA", "BOICOT", "MODELO", "TALLER", "SEXUAL",
  "PAYICO", "CHICHA", "PAYADA", "GITANO", "MARICA",
  "FUEGOS", "PERROS", "FLORES", "LIBROS", "MESERO",
  "CAMPOS", "VIEJOS", "CIELOS", "PUEBLO", "FUENTE",
  "HERMAN", "SILLON", "VENTAS", "OFICIO", "PISTAS",
  "SALIDA", "ENTRAR", "YEGUAS", "CENIZA", "BARATO",
  "COMIDA", "BEBIDA", "FORTIN", "PONCHO", "SENORA",
  "NAVAJA", "HOMBRE", "AMIGOS", "BOLSOS", "CUERNO",
  "DINERO", "TIEMPO", "NOCHES", "SEMANA", "CIUDAD",
  "JARDIN", "PARQUE", "AHOGAR", "PLAYAS", "MONTES",
  "CAMION", "FOLIOS", "ACCESO", "FUERZA", "AEREOS"
]

let randomHiddenWord = Math.floor(Math.random() * hiddenWordsArray.length);

let hiddenWord = hiddenWordsArray[randomHiddenWord];

let inputWord = document.getElementById("input-word");
let winnerText = document.getElementById("winner-text");
let winLoseDialog = document.getElementById("win-lose-dialog");
let showHiddenWord = document.getElementById("show-hidden-word");
let complementPlayer = document.getElementById("complement-player");
let again = document.getElementById("again");


inputWord.addEventListener("keydown", writeWordLetters);
again.addEventListener("mouseup", tryAgain);

let step = -1;

//Es otro step que usaré en validateWord(), simplemente porq si uso el "step" normal, despues de haberlo 
//pasado por el setTimeout, peta el codigo
let currentStep = 0;

function writeWordLetters(e) {
    if (e.key === "Enter") {
        if (inputWord.value.length === 6) {
            //Convierto inputWord a mayus desde antes por que si no da un error de la hostia. VETE TU A SABER POR QUE
            const word = inputWord.value.toUpperCase();
            step++;
            for (let i = 0; i < 6; i++) {
                setTimeout(() => {
                    rows[step][i].innerHTML = word[i];
                    rows[step][i].classList.add("guess-animation");
                    validateWord();

                    //Lo meto aqui, para que una vez que se hayan validado todas las letras y se hayan pintado, lo sume, por que
                    //si lo dejo en validateWord, lo suma 6 veces, por que llama a validateWord 6 veces.
                    if (i === 5) {
                        currentStep++;
                    }

                }, 200 * i);
            }
        }
    }
}


function validateWord() {
    let correctLetters = 0;

    //Detectar cuantas letras se repiten
    const letterCount = {};
    for (let i = 0; i < hiddenWord.length; i++) {
        const letter = hiddenWord[i];
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    //Primero valido las correctas, para quitarmelas de encima
    for (let i = 0; i < 6; i++) {
        if (rows[currentStep][i].innerHTML === hiddenWord[i]) {
            rows[currentStep][i].style.backgroundColor = "green";
            correctLetters++;
            //Esta letra la descuento del contador
            letterCount[hiddenWord[i]]--;
        }
    }

    for (let i = 0; i < 6; i++) {
        
        //Proceso si no es verde y no está vacío
        if (rows[currentStep][i].style.backgroundColor !== "green" && rows[currentStep][i].innerHTML !== "") {
            //Si la letra existe en la palabra oculta y todavía hay disponibilidad
            if (hiddenWord.includes(rows[currentStep][i].innerHTML) && letterCount[rows[currentStep][i].innerHTML] > 0) {
                rows[currentStep][i].style.backgroundColor = "orange";
                letterCount[rows[currentStep][i].innerHTML]--; //Descontarla del contador
            } else {
                rows[currentStep][i].style.backgroundColor = "#2b2b35";
            }
        }

        if (correctLetters === 6) {
            document.body.style.filter = "brightness(.2)";
            winLoseDialog.style.backgroundColor = "green";
            winnerText.style.color = "#71ff71";
            winnerText.innerHTML = "Has ganao tete";
            showHiddenWord.innerHTML = `La palabra correcta era: ${hiddenWord}`;
            complementPlayer.innerHTML = "Eres el puto amo tío";
            winLoseDialog.showModal();
        }

        if (step === 5) {
            document.body.style.filter = "brightness(.2)";
            winLoseDialog.style.backgroundColor = "#ff5858ff";
            winnerText.style.color = "red";
            winnerText.innerHTML = "Has perdido, maldito pringado";
            showHiddenWord.innerHTML = `La palabra correcta era: ${hiddenWord}`;
            complementPlayer.innerHTML = "Eres un fracasado";
            winLoseDialog.showModal();
        }
    }

    inputWord.value = "";
}

function tryAgain() {
    window.location.href = "index.html";
}