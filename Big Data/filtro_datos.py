from datetime import datetime

# Datos originales
raw_data = [
    {
        'nombre': 'Alicia',
        'edad': 25,
        'ciudad': 'Manizales',
    },
    {
        'nombre': 'Pedro',
        'edad': 30,
        'ciudad': 'Cartagena',
    },
    {
        'nombre': 'Carlos',
        'edad': 35,
        'ciudad': 'Bogotá',
    },
    {
        'nombre': 'Carlos',
        'edad': 40,
        'ciudad': 'Cali',
    }
]

print("Datos: ",raw_data)

# Datos procesados
def procesar_datos(datos):
    processed_data = []
    current_year = datetime.now().year # Año actual
    for persona in datos:
        persona["año_nacimiento"] = current_year - persona['edad']
        processed_data.append(persona)
    return processed_data

data = procesar_datos(raw_data)
print("\n\n\n Procesados: ",data)

# Filtrar datos
def filtrar_datos(datos):
    filtrated_data = []
    for persona in datos:
        if persona['edad'] > 30:
            filtrated_data.append(persona)
    return filtrated_data

filtro = filtrar_datos(data)
print(f"\n\n\n Filtro: {filtro}")