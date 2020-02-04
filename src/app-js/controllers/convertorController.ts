
import * as angular from "angular";
//import 'RoutingApp';
//import 'hexafy';
export const convertercon = angular.module('RoutingApp').controller('convertorController', function($scope, hexafy) {
    $scope.hex = hexafy.myFunc(255);
  });	