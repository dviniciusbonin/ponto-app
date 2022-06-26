import i18n from "../config/locale";

export const getCurrentMonth = () => {
    let now = new Date();

    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const filterListByMonth = (list, date) => {
    let newList = [];
    let [year, month] = date.split('-');

    for (let i in list) {
        if (
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]);

        }
    }

    return newList;
}

export const formatDate = (date) => {
    if(i18n.locale != 'pt-BR')
        return date.toLocaleDateString();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

export const formatDateTime = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${year}-${addZeroToDate(month)}-${addZeroToDate(day)}`;
}

const addZeroToDate = n => n < 10 ? `0${n}` : n.toString();

export const formatCurrentMonth = (currenMonth) => {
    let [year, month] = currenMonth.split('-');
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return `${months[parseInt(month) - 1]} de ${year}`;

}

const weekDays = {
    0: i18n.locale == 'pt-BR' ? 'Domingo' : 'Sunday',
    1: i18n.locale == 'pt-BR' ? 'Segunda' : 'Monday',
    2: i18n.locale == 'pt-BR' ? 'Terça' : 'Tuesday',
    3: i18n.locale == 'pt-BR' ? 'Quarta' : 'Wednesday',
    4: i18n.locale == 'pt-BR' ? 'Quinta' : 'Thursday',
    5: i18n.locale == 'pt-BR' ? 'Sexta' : 'Friday',
    6: i18n.locale == 'pt-BR' ? 'Sábado' : 'Saturday'
}

export const formatCurrentDay = (date) => {
    return weekDays[date.getDay()];
}

export const formatHour = (date) => {

    return date;
}