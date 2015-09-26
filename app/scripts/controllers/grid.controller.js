angular.module('anniversary').controller('GridController', function ($scope) {
    $scope.gridConfig = {
        currentFilter: 0,
        ui:{
            layoutMode: 'masonry'
        },
        filters: [
            {
                id: 0,
                title: 'All'
            },
            {
                id: 1,
                title: 'Who knows more than 5 languages'
            }
        ],
        elements: [
            {
                id: 0,
                name: 'Vim',
                image: 'http://www.billboard.com/files/styles/promo_650/public/stylus/1172569-foster-the-people-portrait-lollapalooza-2011-617-509.jpg',
                filters: {
                    0: {
                        text: '0 Vim filter text'
                    },
                    1: {
                        text: '1 Vim filter text'
                    }
                }
            },
            {
                id: 1,
                name: 'Svitlana',
                image: 'http://www.billboard.com/files/styles/promo_650/public/stylus/1172569-foster-the-people-portrait-lollapalooza-2011-617-509.jpg',
                filters: {
                    0: {
                        text: '0 Svitlana filter text'
                    }
                }
            }
        ]
    }
});