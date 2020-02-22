function biodata() {
    const myData = {
        name: 'Amar Fauzi Wicaksono',
        age: 18,
        address: 'Kalimantan Barat, Pontianak Selatan, Sungai Jawi',
        hobbies: ['Coding', 'Fishing', 'Swimming', 'Futsal'],
        is_married: false,
        list_school:[
            {
                'name': 'SMP 1 Nanga Tayap',
                'year_in' : 2013,
                'year_out' : 2016,
                'major': null,
            },
            {
                'name': 'SMAN 1 Nanga Tayap',
                'year_in': 2016,
                'year_out': 2019,
                'major': 'Sains',
            }
        ],
        skills: [
            {
                'skill_name': 'Javascript',
                'level': 'Beginner',
            },
            {
                'skill_name': 'PHP',
                'level': 'Beginner',
            }
        ],
        interest_in_coding: true
    }
    return JSON.stringify(myData);
}

console.log(biodata())