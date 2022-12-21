const personGenerator = {
    surnameJson: `{  
        "count": 15,
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
            "id_2": "Алина",
            "id_3": "Юлия",
            "id_4": "Татьяна",
            "id_5": "Дарья",
            "id_6": "Анастасия",
            "id_7": "Ирина",
            "id_8": "Светлана",
            "id_9": "Оля",
            "id_10": "Катерина"
        }
    }`,
    middleNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Васильев",
            "id_2": "Олегов",
            "id_3": "Иванов",
            "id_4": "Сергеев",
            "id_5": "Викторов",
            "id_6": "Артёмов",
            "id_7": "Максимов",
            "id_8": "Егоров",
            "id_9": "Андреев",
            "id_10": "Владимиров"
        }
    }`,
    jobJson: `{
        "count": 10,
        "list": {     
            "id_1": "Водитель",
            "id_2": "Бухгалтер",
            "id_3": "Учитель",
            "id_4": "Программист",
            "id_5": "Дизайнер",
            "id_6": "Инженер",
            "id_7": "Реставратор",
            "id_8": "Аналитик",
            "id_9": "Повар",
            "id_10": "Врач"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {

        if(this.person.gender == 'Мужчина') 
            return this.randomValue(this.firstNameMaleJson);
        else
            return this.randomValue(this.firstNameFemaleJson);


    },

    randomSurname: function() {

        if(this.person.gender == 'Мужчина') 
            return this.randomValue(this.surnameJson);
        else
            return this.randomValue(this.surnameJson) + 'а';
        

    },

    randomGender: function() { 
        const male = this.randomIntNumber();
        let gender = male == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender;
    },

    randomBirthYear: function() {
        const max = 2022;
        const min = 1922; 
        let year = Math.floor(Math.random() * (max - min) + min); 
        return year;
    },

    randomMiddleName: function() {
        if(this.person.gender == 'Мужчина') 
            return this.randomValue(this.middleNameJson) + 'ич';
        else
            return this.randomValue(this.middleNameJson) + 'на';
    },

    randomJob: function() {
        if(this.person.year<=2004)
            return this.randomValue(this.jobJson);
        else
            return 'Нет профессии';
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.year = this.randomBirthYear();
        this.person.middleName = this.randomMiddleName();
        this.person.job = this.randomJob();
        return this.person;
    }
};