angular.module('app').controller('mainCtrl', function($scope, $document, $window) {

    $scope.scrollTo = function(id) {
        var el = angular.element(document.getElementById(id));
        $document.scrollToElement(el, 50, 200);
    };

    var aboutOff = angular.element(document.getElementById('about'))[0].offsetTop;
    var skillsOff = angular.element(document.getElementById('skills'))[0].offsetTop;

    $scope.pxScr = 0;
    document.getElementById('navAbout').style.textDecoration = 'underline';
    $scope.navStyle = {'color': '#ebeaea'};
    $document.on('scroll', function() {
        $scope.$apply(function() {
            $scope.pxScr = $window.scrollY;
            if ($scope.pxScr > 75) {
                $scope.navStyle = {'color': '#131829'}
            } else {
                $scope.navStyle = {'color': '#ebeaea'};
            }
            if ($scope.pxScr > aboutOff - 65 && $scope.pxScr < skillsOff - 65) {
                document.getElementById('navAbout').style.textDecoration = 'underline';
            } else {
                document.getElementById('navAbout').style.textDecoration = 'none';
            }
            if ($scope.pxScr > skillsOff - 65) {
                document.getElementById('navSkills').style.textDecoration = 'underline';
            } else {
                document.getElementById('navSkills').style.textDecoration = 'none';
            }
            if ($window.innerHeight + $document[0].body.scrollTop >= $document[0].body.scrollHeight - 50) {
                document.getElementById('navContact').style.textDecoration = 'underline';
                document.getElementById('navSkills').style.textDecoration = 'none';
            } else {
                document.getElementById('navContact').style.textDecoration = 'none';
            }
        });
    });

});