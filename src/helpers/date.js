export const getCurrentMonth = () => {
    let now = new Date();

    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const filterListByMonth = (list, date) => {
    let newList = [];
    let[year, month] = date.split('-');
   
    for(let i in list) {
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1 ) === parseInt(month)
        ) {
            newList.push(list[i]);
          
        }
    }
    
    return newList;
}

export const formatDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = n => n < 10 ? `0${n}` : n.toString();

export const formatCurrentMonth = (currenMonth) => {
    let[year, month] = currenMonth.split('-');
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro','Dezembro'];

    return `${months[parseInt(month) - 1]} de ${year}`;

}

const weekDays = {
    0: 'Domingo',
    1: 'Segunda',
    2: 'Terça',
    3: 'Quarta',
    4: 'Quinta',
    5: 'Sexta',
    6: 'Sábado'
} 

export const formatCurrentDay = (date) => {
   return weekDays[date.getDay()];
}