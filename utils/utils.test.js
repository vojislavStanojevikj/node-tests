const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

    describe('#add', () => {

        it('should add two numbers.', () => {

            const result = utils.add(33, 11);
            expect(result).toBeA('number').toBe(44);

        });

        it('should add two numbers async.', (done) => {

            utils.asyncAdd(33, 11, (result) => {

                expect(result).toBeA('number').toBe(44);
                done();

            });

        });

    });

    describe('#square', () => {
        it('should square two numbers.', () => {

            const result = utils.square(5);
            expect(result).toBeA('number').toBe(25);
        });

        it('should square two numbers async.', (done) => {

            utils.squareAsync(5, (result) => {
                expect(result).toBeA('number').toBe(25);
                done();
            });
        });
    });

});

describe('Playground', () => {
    it('should verify first name and last name are set.', () => {

        let user = {age: 33, location: 'Tetovo'};
        const res = utils.setName(user, 'Vojislav Stanojevikj');

        expect(res).toEqual(user);

        expect(res).toBeA('object').toInclude({firstName: 'Vojislav', lastName: 'Stanojevikj'});
    });

    it('should expect some values', () => {
        expect(12).toNotBe(11);
        expect({name: 'Vojo'}).toEqual({name: 'Vojo'});
        expect({name: 'VCojo'}).toNotEqual({name: 'Vojo'});
        expect([2, 3, 4]).toInclude(2);
        expect([2, 3, 4]).toExclude(5);
        expect({name: 'Vojo', age: 33, location: 'Tetovo'}).toInclude({age: 33});
        expect({name: 'Vojo', age: 33, location: 'Tetovo'}).toExclude({lastName: 'Test'});
    });
});