const firstNameOutputEl = document.getElementById('firstNameOutput');
const genderOutputEl = document.getElementById('genderOutput');
const surnameOutputEl = document.getElementById('surnameOutput');
const birthDayOutputEl = document.getElementById('birthDayOutput');
const birthMonthOutputEl = document.getElementById('birthMonthOutput');
const birthYearOutputEl = document.getElementById('birthYearOutput');
const patronymicEl = document.getElementById('patronymic');
const professionOutputEl = document.getElementById('professionOutput');
const resetManualEl = document.getElementById('resetManual');

document.getElementById('startButton').onclick = function()
{
    const initPerson = personGenerator.getPerson();
    firstNameOutputEl.innerText = "Имя: "+initPerson.firstName;
    genderOutputEl.innerText = "Пол: "+initPerson.gender;
    surnameOutputEl.innerText = "Фамилия: "+initPerson.surname;
    birthDayOutputEl.innerText = "Дата рождения: "+initPerson.birthDay;
    birthMonthOutputEl.innerText = initPerson.birthMonth;
    birthYearOutputEl.innerText = initPerson.birthYear;
    patronymicEl.innerText = "Отчество: "+initPerson.patronymic;
    professionOutputEl.innerText = "Профессия: "+initPerson.profession;
    resetManualEl.innerText = "Для очистки данных нажмите кнопку СБРОС";
};

document.getElementById('resetButton').onclick = function() {
    firstNameOutputEl.innerText = "";
    genderOutputEl.innerText = "";
    surnameOutputEl.innerText = "";
    birthDayOutputEl.innerText = "";
    birthMonthOutputEl.innerText = "";
    birthYearOutputEl.innerText = "";
    patronymicEl.innerText = "";
    professionOutputEl.innerText = "";
    resetManualEl.innerText = "";
};