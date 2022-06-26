import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
    en: { registerPoint: 'Register point', pointsHistory: 'Points history', logout: 'Logout', workedDays: 'Worked days', workedDaysDescription: 'Hours worked in the month', hoursWorked: 'hours worked', enterToWork: 'Enter', leaveWork: 'Leave', loading: 'Loading', registeredEntryPoint: 'Registered entry point!', registeredExitPoint: 'Registered exit point!', signup: 'Sign up', name: 'Fullname', password: 'Password', company: 'Company', save: 'Save', registeredMsg: 'You have been successfully registered and will be redirected to the login page', userValidateMsg: 'All fields need at least 3 characters', signin: 'Sig in', registerUserLink: `I'm new here ?`, signinRequireField: 'All fields required!', entering: 'Entering', signinError: 'Incorrect email or password!', 
    validatePointsMsg: 'As many entries and exits as possible have already been registered!' },
    pt: {
        registerPoint: 'Registrar ponto', pointsHistory: 'Histórico de pontos', logout: 'Sair', workedDays: 'Dias trabalhados', workedDaysDescription: 'Horas trabalhadas no mês', hoursWorked: 'horas trabalhadas', enterToWork: 'Entrar', leaveWork: 'Sair', loading: 'Carregando', registeredEntryPoint: 'Ponto de entrada registrado!',
        registeredExitPoint: 'Ponto de saida registrado!', signup: 'Registre-se', name: 'Nome', password: 'Senha', company: 'Empresa', save: 'Salvar', registeredMsg: 'Você foi registrado com sucesso e será redirecionado para a página de login', userValidateMsg: 'Todos os campos precisam de no minimo 3 caracteres', signin: 'Entrar', registerUserLink: 'Sou novo aqui ?', signinRequireField: 'Todos os campos são obrigatórios!', entering: 'Entrando', signinError: 'Email ou senha incorretos!',
        validatePointsMsg: 'Já foram registrados o máximo de entradas e saídas possíveis!'
    },
};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

export default i18n;