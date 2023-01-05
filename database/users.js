const users = [
    {
        id: 1,
        name: 'Tom Cruise',
        moviesRented: [
            { moviesId: 4, dateRented: new Date, returned: false },
            { moviesId: 9, dateRented: new Date, returned: true },
        ]
    },
    {
        id: 2,
        name: 'Woodruff',
        moviesRented: [
            { moviesId: 4, dateRented: new Date, returned: false },
            { moviesId: 7, dateRented: new Date, returned: true },
        ]
    },
    {
        id: 3,
        name: 'Osayande',
        moviesRented: [
            { moviesId: 1, dateRented: new Date, returned: false },
            { moviesId: 3, dateRented: new Date, returned: true },
        ]
    },
    {
        id: 4,
        name: 'Denze Washington',
        moviesRented: [
            { moviesId: 6, dateRented: new Date, returned: false },
            { moviesId: 8, dateRented: new Date, returned: true },
        ]
    },
    {
        id: 5,
        name: 'Felix',
        moviesRented: [
            { moviesId: 1, dateRented: new Date, returned: false },
            { moviesId: 2, dateRented: new Date, returned: true },
        ]
    },
    {
        id: 6,
        name: 'Smith',
        moviesRented: [
            { moviesId: 1, dateRented: new Date, returned: false },
            { moviesId: 3, dateRented: new Date, returned: true },
        ]
    },
    {
        id: 7,
        name: 'Marlon',
        moviesRented: [
            { moviesId: 3, dateRented: new Date, returned: false },
            { moviesId: 5, dateRented: new Date, returned: true },
        ]
    },
    {
        id: 8,
        name: 'Johnny',
        moviesRented: [
            { moviesId: 6, dateRented: new Date, returned: false },
            { moviesId: 1, dateRented: new Date, returned: true },
        ]
    },
    {
        id: 9,
        name: 'Joyner',
        moviesRented: [
            { moviesId: 10, dateRented: new Date, returned: false },
            { moviesId: 1, dateRented: new Date, returned: true },
        ]
    },
]
module.exports = users;