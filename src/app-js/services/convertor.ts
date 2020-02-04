//import 'RoutingApp';
import * as angular from "angular";
//import baseapp from '../script';
export const serviceng1 = angular.module('RoutingApp').service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});
