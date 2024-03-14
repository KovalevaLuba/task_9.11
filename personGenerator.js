const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Екатерина",
            "id_3": "Любовь",
            "id_4": "Елена",
            "id_5": "Маргарита",
            "id_6": "Полина",
            "id_7": "Дарья",
            "id_8": "Мария",
            "id_9": "Анастасия",
            "id_10": "Наталия"
        }
    }`,

    maleProfession: `{
        "count": 9,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Шахтер",
            "id_3": "Сантехник",
            "id_4": "Врач",
            "id_5": "Педагог",
            "id_6": "Бухгалтер",
            "id_7": "Программист",
            "id_8": "Художник",
            "id_9": "Психолог"
        }
    }`,

    femaleProfession: `{
        "count": 8,
        "list": {     
            "id_1": "Врач",
            "id_2": "Педагог",
            "id_3": "Бухгалтер",
            "id_4": "Программист",
            "id_5": "Художник",
            "id_6": "Психолог",
            "id_7": "Воспитатель",
            "id_8": "Актриса"
        }
    }`,

    birthMonth: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function () {
        return (this.randomIntNumber() == 0 ? this.GENDER_MALE : this.GENDER_FEMALE);
    },
 
    //функция возвращает случайное значение из объекта json:
    randomValue: function (json) { 
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];                                 
    },

    //функция возвращает случайное имя из разных объектов json в зависимости от пола:
    randomFirstName: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    //функция возвращает случайную фамилию и в зависимости от пола меняет или не меняет окончание:
     randomSurname: function() { 
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else { 
        return this.randomValue(this.surnameJson)+'а';
        }
    },

    //функция возвращает случайный год рождения в диапазоне от 1930 до 2000 гг.
    randomBirthYear: function() { 
       return this.randomIntNumber(2000, 1930);
    },

    //функция возвращает случайный месяц рождения
    randomBirthMonth: function() { 
        return this.randomValue(this.birthMonth);
    },

    //функция возвращает случайный день (диапазоны варьируются в зависимости от месяца и от (високосного) года)
    randomBirthDay: function() { 
        let month = this.person.birthMonth;
        if (month == "апреля" || month == "июня" || month == "сентября" || month == "ноября") {
            return this.randomIntNumber(30, 1);
        } else if (month == "февраля") {
            if (this.person.birthYear % 4 === 0) { // проверяем високосный ли год рождения
            return this.randomIntNumber(29, 1); }
            else {
                return this.randomIntNumber(28, 1);
            }
        } else {
            return this.randomIntNumber(31, 1);
        }
     },

    //функция возвращает случайную профессию из разных объектов json в зависимости от пола: 
    randomProfession: function() { 
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.maleProfession);
        } else {
            return this.randomValue(this.femaleProfession);
        }
    },

    //генерация отчества:
    randomPatronymic : function() { 
        let patronymic = this.randomValue(this.firstNameMaleJson); //случайное мужское имя из имеющегося объекта json
        if (this.person.gender == this.GENDER_MALE) {   //зависимость от пола
            if (patronymic.endsWith("й")) {
                return patronymic.replace("й", "евич"); //Дмитрий, Андрей
            } else if (patronymic.endsWith("а")) {
                return patronymic.replace("а", "ич");   //Никита
            } else if (patronymic == "Михаил") {
                return "Михайлович";
            } else {
                return patronymic+"ович";
            } 
        }  else {
            if (patronymic.endsWith("й")) {
                return patronymic.replace("й", "евна");
            } else if (patronymic.endsWith("а")) {
                return patronymic.replace("а", "ична");
            } else if (patronymic == "Михаил") {
                return "Михайловна";            
            } else {
                return patronymic+"овна";
            } 
        } 
    },
 
    getPerson: function () {
        this.person = {}; 
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(); 
        this.person.surname = this.randomSurname();
        this.person.birthYear = this.randomBirthYear();
        this.person.birthMonth = this.randomBirthMonth();
        this.person.birthDay = this.randomBirthDay();
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};




