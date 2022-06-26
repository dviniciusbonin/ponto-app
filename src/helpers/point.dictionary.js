import i18n from "../config/locale";

const pointDictionary = {
    'ENTRY': i18n.locale == 'pt-BR' ? 'Entrada' : 'Entry',
    'INTERVAL': i18n.locale == 'pt-BR' ? 'Intervalo' : 'Interval',
    'RETURN': i18n.locale == 'pt-BR' ? 'Retorno' : 'Return',
    'EXIT': i18n.locale == 'pt-BR' ? 'Saída' : 'Exit'
}

export function formatPointType(type) {
    return pointDictionary[type];
}