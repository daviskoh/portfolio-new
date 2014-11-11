'use strict';

describe('siteMod App', function () {

    var $state;

    beforeEach(module('siteMod'));

    beforeEach(inject(function (_$state_) {
        $state = _$state_;
    }));

    it('should configure the base route', function () {

        expect($state).toBeTruthy();

    });

});
