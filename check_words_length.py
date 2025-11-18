hiddenWordsArray = [
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

print("Verificando palabras que NO tienen 6 letras exactamente:\n")

palabras_incorrectas = []
palabras_totales = []

for palabra in hiddenWordsArray:
    longitud = len(palabra)
    if longitud != 6:
        palabras_incorrectas.append((palabra, longitud))
    
    if palabra not in palabras_totales:
        palabras_totales.append(palabra)
    else:
        print(f"{palabra} ya existe")
        

if palabras_incorrectas:
    print("Palabras que NO tienen 6 letras:")
    for palabra, longitud in palabras_incorrectas:
        print(f"{palabra} tiene {longitud} letras")
else:
    print("¡Todas las palabras tienen exactamente 6 letras!")

print(f"\nTotal de palabras en el array: {len(hiddenWordsArray)}")
print(f"Palabras con longitud incorrecta: {len(palabras_incorrectas)}")