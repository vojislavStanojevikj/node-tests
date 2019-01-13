const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'ToDo App v1.0'});
});

app.get('/users', (req, res) => {
    res.status(200).send([{name: 'Vojo', age: 33}, {name: 'Kika', age: 27}, {name: 'Vera', age: 56}]);
});

app.listen(3000, () => {

    console.log('Server runs at: 3000');

});

module.exports.app = app;