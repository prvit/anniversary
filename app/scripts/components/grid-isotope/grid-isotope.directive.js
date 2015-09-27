angular.module('anniversary.component.grid-isotope').directive('anniversaryGridIsolate', function ($timeout) {
    return {
        restrict: 'E',
        scope: {
            config: '='
        },
        templateUrl: 'scripts/components/grid-isotope/grid-isotope.directive.html',
        controller: function () {
            console.log('controller');
        },
        link: function (scope, element) {
            var iso;

            $timeout(function () {
                iso = new Isotope(element[0].querySelector('.grid'), scope.config.ui);
            }, 100);

            scope.filterHandler = function (filter) {
                scope.config.currentFilter = filter.id;
            };

            scope.$watch('config.currentFilter', function () {
                if(iso){
                    iso.arrange({
                        filter: function( itemElem ) {
                            var element = _.find(scope.config.elements, {
                                    id: itemElem.attributes['data-id'].value*1
                                });

                            return element.filters[scope.config.currentFilter]
                        }
                    });
                }
            });
        }
    }
});