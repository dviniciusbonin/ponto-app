import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
    en: { registerPoint: 'Register point', pointsHistory: 'Points history', logout: 'Logout', workedDays: 'Worked days', workedDaysDescription: 'Hours worked in the month', hoursWorked: 'hours worked', enterToWork: 'Enter', leaveWork: 'Leave', loading: 'Loading', registeredEntryPoint: 'Registered entry point!', registeredExitPoint: 'Registered exit point!' },
    pt: {
        registerPoint: 'Registrar ponto', pointsHistory: 'Histórico de pontos', logout: 'Sair', workedDays: 'Dias trabalhados', workedDaysDescription: 'Horas trabalhadas no mês', hoursWorked: 'horas trabalhadas', enterToWork: 'Entrar', leaveWork: 'Sair', loading: 'Carregando', registeredEntryPoint: 'Ponto de entrada registrado!',
        registeredExitPoint: 'Ponto de saida registrado!'
    },
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default i18n;