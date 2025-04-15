# Mapeo y reducción de datos 

from collections import defaultdict # importamos la librería para hacer diccionarios

# Datos de entrada
text_data = [
    "Hola mundo ola",
    "Hola MapReduce",
    "MapReduce es poderoso HOLA",
    "Hola MapReduce",
]

# Fase; ap: Leer los datos y transformar cada línea en pares (llave, valor) (palabra, 1)
def map_fuction(lines):
    mapped_values = [] # Lista para almacenar los pares (palabra, 1)
    for line in lines: # Recorre línea por línea el texto
        for word in line.split(): # Dividir por palabras
            mapped_values.append((word.lower(), 1)) # Convierte cada palabra en minuscula y genera una llave
    return mapped_values # Retorna la lista

mapped_data = map_fuction(text_data)
#print(mapped_data)

# Fase de ordenamiento y agrupación
def shuffle_sort(data):
    grouped_data = defaultdict(list)
    for key, value in data:
        grouped_data[key].append(value)
    return grouped_data

shuffle_data = shuffle_sort(mapped_data)
#print(shuffle_data)

# Fase de conteo y/o reduce
def reduce_function(order):
    reduced_data = {}
    for key, values in order.items(): # Recupera cada palabra en la lista
        reduced_data[key] = sum(values)
    return reduced_data

reduced = reduce_function(shuffle_data)
print(reduced)

