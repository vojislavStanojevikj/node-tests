const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {

    it('should call the spy correctly', () => {

        const spy = expect.createSpy();
        spy('Vojo', 33);

        // expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Vojo', 33);

    });

    it('should call the spy method', () => {

        const db = {
            saveUser: expect.createSpy()
        };
        app.__set__('db', db);

        const email = 'vojo@test.com';
        const password = 'password';

        app.handleSignup(email, password);

        expect(db.saveUser).toHaveBeenCalled();
        expect(db.saveUser).toHaveBeenCalledWith({email, password});

    });

});