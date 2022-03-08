const bcyrpt = require('bcrypt');

const password = '123456*';

bcyrpt.hash(password, 10, (err, hash) => {
    console.log(hash);

    bcyrpt.compare(password, hash, (err, res) => {
        //console.log(err);
        console.log(res);
    });
});