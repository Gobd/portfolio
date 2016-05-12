angular.module('app').controller('mainCtrl', function($scope, $document, $window) {

    $scope.scrollTo = function(id) {
        var el = angular.element(document.getElementById(id));
        $document.scrollToElement(el, 50, 200);
    };

    $scope.pxScr = 0;
    $document.on('scroll', function() {
        $scope.$apply(function() {
            $scope.pxScr = $window.scrollY;
        });
    });

});