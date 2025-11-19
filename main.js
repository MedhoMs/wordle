window.addEventListener("load", () => {
    checkNumberColumns();
});

const rows = [
  document.querySelectorAll("#row-1 td"),
  document.querySelectorAll("#row-2 td"),
  document.querySelectorAll("#row-3 td"),
  document.querySelectorAll("#row-4 td"),
  document.querySelectorAll("#row-5 td"),
  document.querySelectorAll("#row-6 td")
];

const hiddenWordsArrays = {
    "array3Letters" : [
        "AJO", "ALA", "AMO", "ANO", "ASA",
        "AVE", "AUN", "ESE", "BAL", "BAR",
        "BUE", "BUS", "CAE", "CAL", "SOL",
        "CAR", "OJO", "CON", "COZ", "RIO",
        "CUY", "DAL", "DAR", "DEB", "DEL",
        "DIZ", "DOS", "DUL", "ECO", "EJE",
        "UNO", "ERA", "FIN", "ZOO",
        "FUI", "TEL", "GIL", "GOL", "PAN",
        "GUE", "GUS", "HAN", "HEZ",
        "HIC", "TAL", "HOY", "HUY",
        "IRA", "VER", "MOR", "LIM",
        "TON", "JUA", "JUE", "RED", "SON",
        "LAB", "LAI", "LAZ", "LEO", "LEY",
        "LOA", "LUZ", "MAL", "MAS", "MIL",
        "MIO", "MAR", "SAL", "NOC", "NOR",
        "NOS", "OAS", "OLA", "OSA", "RÍO",
        "PEZ", "PIE", "PIS", "POZ", "PRO",
        "PUA", "QUE", "TÉN", "RAE", "REY"
        ],
    "array4Letters" : [
        "AGUA", "AIRE", "ALTO", "ALMA", "AMAR",
        "ANTE", "ARCO", "ARMA", "ARTE", "ASIA",
        "AULA", "AZUL", "BAJO", "BALE", "BASE",
        "BOCA", "BOLA", "CABE", "CALA", "CAFE",
        "CAJA", "CAMA", "CANA", "CASA", "CASI",
        "CAZA", "CELA", "CENA", "CERO", "CITA",
        "CODA", "COPA", "CORO", "COSO", "CRUZ",
        "CUAL", "CUBA", "CURA", "DAMA", "DADO",
        "DEJA", "DELE", "DIAS", "DIJE", "DIME",
        "TRES", "DUDA", "ECHO", "EDAD", "EJES",
        "ELLA", "ELOS", "ERAS", "ESOS", "ESTA",
        "FAMA", "FRIO", "JAKE", "FLOR", "FUER",
        "GANA", "GATO", "GIRA", "GOLF", "GRAN",
        "GRIS", "HACE", "HAYA", "HELA", "HILO",
        "HOJA", "HOLA", "HORA", "IDAS", "IRAS",
        "IRSE", "ISLA", "JUEZ", "JUNO", "LABO",
        "LADO", "LAGO", "LEER", "LEVE", "LIGO",
        "LIRA", "LISO", "LOBO", "LOCO", "LONA",
        "LUGO", "LUJO", "LUNA", "MAIZ", "MALA"
        ],
    "array5Letters" : [
        "ABRAZ", "ACERO", "ACTOR", "ADAPT", "AHORA",
        "AGUAS", "ALBUM", "ALEGR", "ALTAR", "AMARE",
        "AMIGO", "APOYO", "ARBOL", "ARENA", "ARTES",
        "ATRAS", "AVION", "VERDE", "BAILE", "BANCO",
        "BARCO", "BESOS", "BICHO", "BOCAS", "BOMBA",
        "BROMA", "CALLE", "CAMPO", "CARTA", "CASAS",
        "CAZAR", "CELDA", "CERCA", "CINES", "CIELO",
        "CLARO", "CLIMA", "COCHE", "COMER", "COSAS",
        "CREDO", "SALIR", "CUELA", "CURSO", "DANZA",
        "DEJAR", "DICHA", "DIOSA", "DOLOR", "DONDE",
        "DULCE", "ERROR", "ESTAR", "FALSO", "FAMAS",
        "FAROL", "FIERA", "FINAL", "FIRME", "MORIR",
        "FORMA", "FRASE", "FUEGO", "GANAR", "GENTE",
        "GOLPE", "MARES", "GRITO", "GRUPO", "HABER",
        "HIELO", "HIJOS", "HONOR", "IDEAS", "IGUAL",
        "JUEGO", "JUNIO", "LABOR", "LADOS", "LAGOS",
        "LECHE", "LEJOS", "LIBRO", "LUCES", "LUNAR",
        "MADRE", "MAGIA", "MANOS", "MARCA", "MASAS",
        "METRO", "MIEDO", "MITAD", "MODAS", "MONTE",
        "MOVIL", "MUNDO", "NARIZ", "NOCHE", "NUEVO"
        ],
    "array6Letters" : [
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
        ],
    "array7Letters" : [
        "ACEROLA", "ADOBADO", "AGARRAR", "ALABADO", "ALEROZA",
        "ALETAZO", "AMARRAR", "APELADO", "ARROZAL", "ASEGURA",
        "AVENIDA", "AZOTABA", "AZULEJO", "BAILADO", "BANDERA",
        "BARREDA", "BARRERA", "BOTIQUE", "CABEZAS", "CAJONES",
        "PALADAR", "CALLEJA", "CAMBIAR", "CAMPEON", "CANTABA",
        "CAPOTEZ", "CARRETA", "CELAJEZ", "COBRADO", "COCINAS",
        "COLEGAS", "COMPLEZ", "CORREOS", "CORTADO", "CORTESA",
        "CREYERA", "CUIDADO", "DELICIA", "DEDALES", "DEFORMA",
        "DESAYUN", "DESDEJA", "DESECHO", "DIAMETR", "DIGNIDA",
        "DIVIDAN", "DULZURA", "ECOSIST", "ENFADAN", "ENTERAZ",
        "ENTREGA", "ENVASEZ", "ENVIADO", "EQUIDAD", "ESCOBAS",
        "ESTETAS", "EXTRAZA", "FACETAS", "FANALES", "FAMILIA",
        "FAROLES", "FINALIZ", "FIRMEZA", "FLOJERA", "FORMULA",
        "FRIALEZ", "GARRAFA", "GENERAZ", "GOLPEAR", "GUANTES",
        "HABITAN", "HACEDOR", "HELADOS", "HORNEAZ", "HUMEDAD",
        "IMAGINA", "IMPORTA", "INSUMOS", "INVENTO", "INVITAS",
        "JUEGUEZ", "LAVABAS", "LECTORA", "LENTEJA", "LIBRETA",
        "LLENADO", "MALETAS", "MANTESA", "MARTEZA", "MATERAS",
        "MINUTOS", "MONEDAS", "NOMBREZ", "NORMALA", "NOTABLE",
        "NUMERAZ", "OBRERAZ", "OCULTAN", "PACIFIS", "PAQUETE"
        ]
}


let inputWord = document.getElementById("input-word");
let actualColumns = 6; //Numero actual de columnas
let selectedHiddenWordsArray; //El array de letras seleccionado segun las columnas que hayan
let randomHiddenWord; //El indice random del array seleccionado
let hiddenWord = ""; //Palabra oculta

function checkNumberColumns() {
    selectedHiddenWordsArray = hiddenWordsArrays[`array${actualColumns}Letters`];

    //Asigno la palabra oculta con el Math.random segun el array de palabras seleccionado
    randomHiddenWord = Math.floor(Math.random() * selectedHiddenWordsArray.length);
    hiddenWord = selectedHiddenWordsArray[randomHiddenWord];

    inputWord.setAttribute("maxlength", actualColumns);

    console.log(hiddenWord);
}



///////VARIABLES///////

let winnerText = document.getElementById("winner-text");
let winLoseDialog = document.getElementById("win-lose-dialog");
let showHiddenWord = document.getElementById("show-hidden-word");
let complementPlayer = document.getElementById("complement-player");
let again = document.getElementById("again");
let addColumn = document.getElementById("right-arrow");
let removeColumn = document.getElementById("left-arrow");

///////VARIABLES///////


///////GLOBAL VARIABLES///////

let step = -1;
let correctLetters = 0;
//Es otro step que usaré en validateWord(), simplemente porq si uso el "step" normal, despues de haberlo 
//pasado por el setTimeout, peta el codigo
let currentStep = 0;

//let columnsAddedRemovedCount = 0;

///////GLOBAL VARIABLES///////


///////EVENTS///////

inputWord.addEventListener("keydown", writeWordLetters);
again.addEventListener("mouseup", tryAgain);
addColumn.addEventListener("mouseup", function(e) {
    if (actualColumns < 7) {
        actualColumns++;
        addRemoveColumns(e);
    } 
});

removeColumn.addEventListener("mouseup", function(e) {
    if (actualColumns > 3) {
        actualColumns--;
        addRemoveColumns(e);
    }
});

///////EVENTS///////


///////FUNCTIONS///////

function addRemoveColumns(e) {

    if (e.currentTarget.id === "right-arrow") {
        const trParents = document.querySelectorAll("tr"); //Con esto saco los "tr" por separado, para añadirle como ultimo hijo el nuevo "td"
        for (let i = 0; i < rows.length; i++) {
            let newTd = document.createElement("td");
            newTd.id = `row-${[i + 1]}-${actualColumns}`;
            trParents[i].appendChild(newTd);
        }
        checkNumberColumns();
    }

    if (e.currentTarget.id === "left-arrow") {
        for (let i = 0; i < rows.length; i++) {
            const lastTd = rows[i][rows[i].length - 1]; //lastTd coge el ultimo td del tr seleccionado con [i]
            lastTd.remove(); //Lo elimino
        }
        checkNumberColumns();
    }

    //Recalculo el tamaño de rows tras haber borrado/añadido columnas
    for (let i = 0; i < rows.length; i++) {
        rows[i] = document.querySelectorAll(`#row-${i + 1} td`);
    }
}

function writeWordLetters(e) {
    if (e.key === "Enter") {
        if (inputWord.value.length === hiddenWord.length) {
            //Convierto inputWord a mayus desde antes por que si no da un error de la hostia. VETE TU A SABER POR QUE
            const word = inputWord.value.toUpperCase();
            step++;
            for (let i = 0; i < hiddenWord.length; i++) {
                setTimeout(() => {
                    rows[step][i].innerHTML = word[i];
                    rows[step][i].classList.add("guess-animation");
                    paintLetters()

                    //Lo meto aqui, para que una vez que se hayan pintado todas las letras y se hayan mostrado, sume el currentStep
                    //y valide todas las letras.
                    if (i === hiddenWord.length - 1) {
                        currentStep++;
                        validateWord();
                    }

                }, 200 * i);
            }
        }
    }
}


//Esta funcion pinta las letras de los colores, y una vez que ya estan todas presentes, valido la palabra con "validateWord"
function paintLetters() {

    correctLetters = 0;

    //Detectar cuantas letras se repiten
    const letterCount = {};
    for (let i = 0; i < hiddenWord.length; i++) {
        const letter = hiddenWord[i];
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    //Primero valido las correctas, para quitarmelas de encima
    for (let i = 0; i < hiddenWord.length; i++) {
        if (rows[step][i].innerHTML === hiddenWord[i]) {
            rows[step][i].style.backgroundColor = "green";
            correctLetters++;
            //Esta letra la descuento del contador
            letterCount[hiddenWord[i]]--;
        }
    }

    for (let i = 0; i < hiddenWord.length; i++) {
        
        //Proceso si no es verde y no está vacío
        if (rows[step][i].style.backgroundColor !== "green" && rows[step][i].innerHTML !== "") {
            //Si la letra existe en la palabra oculta y todavía hay disponibilidad
            if (hiddenWord.includes(rows[step][i].innerHTML) && letterCount[rows[step][i].innerHTML] > 0) {
                rows[step][i].style.backgroundColor = "orange";
                letterCount[rows[step][i].innerHTML]--; //Descontarla del contador
            } else {
                rows[step][i].style.backgroundColor = "#2b2b35";
            }
        }
    }
}

function validateWord() {
    
    //Si correctLetters es = a hiddenWord.length has ganado
    if (correctLetters === hiddenWord.length) {
        document.body.style.filter = "brightness(.2)";
        winLoseDialog.style.backgroundColor = "green";
        winnerText.style.color = "#71ff71";
        winnerText.innerHTML = "Has ganao tete";
        showHiddenWord.innerHTML = `La palabra correcta era: ${hiddenWord}`;
        complementPlayer.innerHTML = "Eres el puto amo tío";
        winLoseDialog.showModal();
    
    //Si correctLetters es != de y estamos en la fila hiddenWord.length, pierdes
    } else if (correctLetters !== hiddenWord.length && step === rows.length - 1) {
        document.body.style.filter = "brightness(.2)";
        winLoseDialog.style.backgroundColor = "#ff5858ff";
        winnerText.style.color = "red";
        winnerText.innerHTML = "Has perdido, maldito pringado";
        showHiddenWord.innerHTML = `La palabra correcta era: ${hiddenWord}`;
        complementPlayer.innerHTML = "Eres un fracasado";
        winLoseDialog.showModal();
    }

    inputWord.value = ""; //Reinicio el input para escribir
}

function tryAgain() {
    window.location.href = "index.html"; //Boton que recarga la pagina para empezar de nuevo
}

///////FUNCTIONS///////