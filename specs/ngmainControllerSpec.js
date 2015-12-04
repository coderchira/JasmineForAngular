
describe("This is to test the main controller", function () {
    //variables to instantiate controller and its scope
    var myController = null;
    var myScope = null;

    //call to the module
    beforeEach(module("myApp"));

    ////using $controller service to instantiate the controller and $rootScope to instantiate the rootScope
    beforeEach(inject(function ($controller, $rootScope) {
        //assignment of controller service to the myController variable
        myController = $controller;
        //instantiation of scope; with a new scope, in this context,
        //assigned to myScope
        myScope = $rootScope.$new();

    }));

    //assignment of mainController through the myController function
    //myScope also refers to the scope being pointed by the $scope of the mainController
    beforeEach(function () {
        var myCtrl = myController("mainController", { $scope: myScope });
    })
    it("should have a valid name", function () {
        //test the values being pointed by the controller's scope now
        expect(myScope.name).not.toBe(undefined);
        expect(myScope.name).not.toBe(null);
        expect(myScope.name).toBe("Ruchira");
    })
    it("should have a valid id", function () {
        expect(myScope.id).not.toBe(undefined);
        expect(myScope.id).not.toBe(null);
        expect(myScope.id).toBe(1234);
    })
})