
const pointDictionary = {
    'ENTRY': 'Entrada',
    'INTERVAL': 'Intervalo',
    'RETURN': 'Retorno',
    'EXIT': 'Saída'
}

export function formatPointType(type) {
    return pointDictionary[type];
}