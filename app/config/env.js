const env ={
    database :'csv_part2',
    username : '',
    password : '',
    host : '',
    dialect : 'mysql',

    pool:{
        max:5,
        min:0,
        acquire: 300000,
        idle:10000
    }
};

module.exports = env;