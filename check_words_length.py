hiddenWordsArray = [
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
]

print("Verificando palabras que NO tienen 3 letras exactamente:\n")

palabras_incorrectas = []
palabras_totales = []

for palabra in hiddenWordsArray:
    longitud = len(palabra)
    if longitud != 3:
        palabras_incorrectas.append((palabra, longitud))
    
    if palabra not in palabras_totales:
        palabras_totales.append(palabra)
    else:
        print(f"{palabra} ya existe")
        

if palabras_incorrectas:
    print("Palabras que NO tienen 3 letras:")
    for palabra, longitud in palabras_incorrectas:
        print(f"{palabra} tiene {longitud} letras")
else:
    print("¡Todas las palabras tienen exactamente 3 letras!")

print(f"\nTotal de palabras en el array: {len(hiddenWordsArray)}")
print(f"Palabras con longitud incorrecta: {len(palabras_incorrectas)}")