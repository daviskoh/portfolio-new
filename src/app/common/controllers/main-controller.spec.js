'use strict';

describe('siteMod.common.MainController', function () {

    var $scope, createController;

    beforeEach(module('siteMod.common'));

    beforeEach(inject(function (_$rootScope_, _$log_, $controller) {
        $scope = _$rootScope_.$new();

        createController = helpers.getControllerCompiler($controller,  'MainController', {
                $scope: $scope,
                $log: _$log_
            });

    }));

    it('controller should exist', function () {
        var ctrl = createController();
        expect(ctrl).toBeTruthy();
    });


});
