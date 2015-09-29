angular.module('anniversary').controller('GridController', function ($scope) {
    $scope.gridConfig = {
        currentFilter: 0,
        ui: {
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            masonry: {
                columnWidth: 100
            }
        },
        filters: [
            {
                id: 0,
                title: 'All'
            },
            {
                id: 1,
                title: 'Works in i.materialise more than 4 years'},
            {
                id: 2,
                title: 'Worked in different Materialise projects before joined i.materialise'},
            {
                id: 3,
                title: 'Knows more than 3 languages'},
            {
                id: 4,
                title: 'Never drunk beer in Leuven'},

            {
                id: 5,
                title: 'Never tested Ukrainian "grechka'},

            {
                id: 6,
                title: 'Is married'},
            {
                id: 7,
                title: 'Ordered 3D printed model for yourself'},
            {
                id: 8,
                title: 'Created a 3D model'
            }
        ],
        elements: [
            {
                id: 0,
                name: 'Taras Matsyk',
                image: 'img/team_photos/Taras.jpg',
                filters: {
                    0: {
                        text: 'Software engineer'
                    },
                    3: {
                        text: '4 languages'
                    },
                    4: {
                        text: ' '
                    },
                    8: {
                        text: ' '
                    }
                }
            },
            {
                id: 1,
                name: 'Wim Verstraeten',
                image: 'img/team_photos/Wim.jpg',
                filters: {
                    0: {
                        text: 'Our big boss'
                    },
                    1: {
                        text: '6 years'
                    },
                    2: {
                        text: '10 years before i.materialise'
                    },
                    3: {
                        text: '4 languages'
                    },
                    6: {
                        text: 'Yes and has 2 daughters'
                    },
                    7: {
                        text: '30 euro'
                    },
                    8: {
                        text: ' '
                    }
                }
            },
            {
                id: 2,
                name: 'Lyudmila Balakleyskaya',
                image: 'img/team_photos/Lydmila.jpg',
                filters: {
                    0: {
                        text: 'Customer Support services'
                    },
                    2: {
                        text: '8 years before i.materialise'
                    },
                    6: {
                        text: 'Yes and has child'
                    },
                    7: {
                        text: '20 euro'
                    },
                    8: {
                        text: ''
                    }
                }
            },
            {
                id: 3,
                name: 'Ivanna Kolisnyk',
                image: 'img/team_photos/Ivanna.jpg',
                filters: {
                    0: {
                        text: 'Frontend developer'
                    },
                    2: {
                        text: 'about 2 years'
                    },
                    8: {
                        text: ''
                    }
                }
            },
            {
                id: 4,
                name: 'Olga Naidonova',
                image: 'img/team_photos/Olga.jpg',
                filters: {
                    0: {
                        text: 'Customer Support Engineer'
                    },
                    3: {
                        text: '4 languages'
                    },
                    6: {
                        text: 'Yes and has child'
                    }
                }
            },
            {
                id: 5,
                name: 'Dmitriy Lobko',
                image: 'img/team_photos/Dima.jpg',
                filters: {
                    0: {
                        text: 'Support Engineer'
                    },
                    1: {
                        text: '4 years'
                    },
                    7: {
                        text: '50 euro'
                    },
                    6: {
                        text: ' '
                    },
                    8: {
                        text: ' '
                    }
                }
            },
            {
                id: 6,
                name: 'Andrey Kuzmenko',
                image: 'img/team_photos/Andrey.jpg',
                filters: {
                    0: {
                        text: 'Team Leader'
                    },
                    6: {
                        text: ' '
                    },
                    8: {
                        text: ' '
                    }
                }
            },
            {
                id: 7,
                name: 'Darya Kireyeva',
                image: 'img/team_photos/Dasha.jpg',
                filters: {
                    0: {
                        text: 'Customer Support Engineer'
                    },
                    1: {
                        text: '4 years'
                    },
                    2: {
                        text: '2 years before i.materialise'
                    },
                    3: {
                        text: '4 languages'
                    },
                    6: {
                        text: ' '
                    }
                }
            },
            {
                id: 8,
                name: 'Vladyslav Pokolenko',
                image: 'img/team_photos/Vlad.jpg',
                filters: {
                    0: {
                        text: 'Software engineer'
                    },
                    4: {
                        text: ' '
                    },
                    6: {
                        text: ' '
                    },
                    8: {
                        text: ' '
                    }
                }
            },
            {
                id: 9,
                name: 'Sergey Tomashevich',
                image: 'img/team_photos/Sergey.jpg',
                filters: {
                    0: {
                        text: 'Software engineer'
                    },
                    4: {
                        text: ' '
                    },
                    8: {
                        text: ' '
                    }
                }
            },
            {
                id: 10,
                name: 'Karen Meulemans',
                image: 'img/team_photos/Karen.jpg',
                filters: {
                    0: {
                        text: 'Customer Service'
                    },
                    1: {
                        text: '5 years'
                    },
                    2: {
                        text: '5 years before i.materialise'
                    },
                    5: {
                        text: 'Not sure'
                    },
                    6: {
                        text: 'Yes and has child'
                    },
                    8: {
                        text: ' '
                    }
                }
            },
            {
                id: 11,
                name: 'Timofii Pavliuk',
                image: 'img/team_photos/Timofey.jpg',
                filters: {
                    0: {
                        text: 'Software enginee'
                    },
                    2: {
                        text: '7 years before i.materialise'
                    },
                    4: {
                        text: ' '
                    }
                }
            },
            {
                id: 12,
                name: 'Sam Vandormael',
                image: 'img/team_photos/Sam.jpg',
                filters: {
                    0: {
                        text: 'Business Development Manager'
                    },
                    3: {
                        text: '4 languages'
                    },
                    5: {
                        text: ' '
                    },
                    7: {
                        text: '35 euro'
                    }
                }
            },
            {
                id: 13,
                name: 'Bert De Niel',
                image: 'img/team_photos/Bert.jpg',
                filters: {
                    0: {
                        text: 'Product designer'
                    },
                    2: {
                        text: '4 years before i.materialise'
                    },
                    3: {
                        text: '4 languages'
                    },
                    4: {
                        text: 'Not sure'
                    },
                    5: {
                        text: ' '
                    },
                    8: {
                        text: ' '
                    }
                }
            },
            {
                id: 14,
                name: 'Annelies Meulemans',
                image: 'img/team_photos/Annelies.jpg',
                filters: {
                    0: {
                        text: 'Marketing Coordinator'
                    },
                    2: {
                        text: '2 years before i.materialise'
                    },
                    5: {
                        text: ' '
                    },
                    6: {
                        text: 'Yes and has child'
                    }
                }
            },
            {
                id: 15,
                name: 'Elena Ishchuk',
                image: 'img/team_photos/Elena.jpg',
                filters: {
                    0: {
                        text: 'Customer Support Engineer'
                    },
                    6: {
                        text: 'Yes and has child'
                    }
                }
            },
            {
                id: 16,
                name: 'Katrien Vandenplas',
                image: 'img/team_photos/Katrien.jpg',
                filters: {
                    0: {
                        text: 'Marketing Manager'
                    },
                    2: {
                        text: '6 mouth before i.materialise'
                    },
                    3: {
                        text: '4 languages'
                    },
                    5: {
                        text: ' '
                    }
                }
            },
            {
                id: 17,
                name: 'Sletlana Lutsenko',
                image: 'img/team_photos/Sveta.jpg',
                filters: {
                    0: {
                        text: 'Frontend developer'
                    },
                    6: {
                        text: ' '
                    }
                }
            },
            {
                id: 18,
                name: 'Vitalii Prokopchuk',
                image: 'img/team_photos/Vitalik_pro.jpg',
                filters: {
                    0: {
                        text: 'Software enginee'
                    },
                    4: {
                        text: ' '
                    },
                    8: {
                        text: 'Cube'
                    }
                }
            },
            {
                id: 19,
                name: 'Miranda Bastijns',
                image: 'img/team_photos/Miranda.jpg',
                filters: {
                    0: {
                        text: 'Director'
                    },
                    1: {
                        text: '6 years'
                    },
                    2: {
                        text: '11 years before i.materialise'
                    },
                    3: {
                        text: '4 languages'
                    },
                    4: {
                        text: ' '
                    },
                    5: {
                        text: ' '
                    },
                    6: {
                        text: 'Yes and has 2 children'
                    },
                    7: {
                        text: 'about 160 euro'
                    }
                }
            },
            {
                id: 20,
                name: 'Niels Lannoo',
                image: 'img/team_photos/Niels.jpg',
                filters: {
                    0: {
                        text: 'Customer Support'
                    },
                    5: {
                        text: ' '
                    },
                    8: {
                        text: ' '
                    }
                }
            },
            {
                id: 21,
                name: 'Dmitrii Kovaliev',
                image: 'img/team_photos/Dima_K.jpg',
                filters: {
                    0: {
                        text: 'Software enginee'
                    },
                    1: {
                        text: '4 years'
                    },
                    4: {
                        text: ' '
                    },
                    6: {
                        text: ' '
                    },

                    8: {
                        text: 'Yeah '
                    }
                }
            },
            {
                id: 22,
                name: 'Kateryna Khyl',
                image: 'img/team_photos/Katya.jpg',
                filters: {
                    0: {
                        text: 'Test Engineer'
                    },
                    6: {
                        text: ' '
                    },
                    7: {
                        text: '20 euro incl VAT'
                    },
                    8: {
                        text: 'only cube'
                    }
                }
            },
            {
                id: 23,
                name: 'Kirill Akatiev',
                image: 'img/team_photos/Kirill.jpg',
                filters: {
                    0: {
                        text: 'Functional Analyst'
                    },
                    3: {
                        text: '4 languages'
                    },
                    4: {
                        text: ' '
                    }
                }
            },
            {
                id: 24,
                name: 'Ruzhena Yatsenko',
                image: 'img/team_photos/Ruzhena.jpg',
                filters: {
                    0: {
                        text: 'Functional Analyst'
                    },
                    2: {
                        text: '3.5 years before i.materialise'
                    },
                    8: {
                        text: ' '
                    }
                }
            },
            {
                id: 25,
                name: 'Franky De Schouwer',
                image: 'img/team_photos/Franky.jpg',
                filters: {
                    0: {
                        text: 'Website Manager'
                    },
                    1: {
                        text: '6 years'
                    },
                    2: {
                        text: 'about 2 years before i.materialise'
                    },
                    3: {
                        text: 'more than 10 languages'
                    },
                    6: {
                        text: ' '
                    },
                    7: {
                        text: '12.5 euro plus tax'
                    },
                    8: {
                        text: ' '
                    }
                }
            },
            {
                id: 26,
                name: 'Elena Pushkelia',
                image: 'img/team_photos/Lena.jpg',
                filters: {
                    0: {
                        text: 'Test Engineer'
                    },
                    4: {
                        text: ' '
                    },
                    6: {
                        text: ' '
                    },
                    7: {
                        text: 'Yes... cube )))'
                    }
                }
            },
            {
                id: 27,
                name: 'Vitaliy Panchenko',
                image: 'img/team_photos/Vitalik_pan.jpg',
                filters: {
                    0: {
                        text: 'Software enginee'
                    },
                    2: {
                        text: 'about 6 mouth before i.materialise '
                    },
                    4: {
                        text: ' '
                    }
                }
            },
            {
                id: 28,
                name: 'Vladimir Burilko',
                image: 'img/team_photos/Vova.jpg',
                filters: {
                    0: {
                        text: 'Software enginee'
                    },
                    4: {
                        text: ' '
                    },
                    6: {
                        text: ' '
                    }
                }
            },
            {
                id: 29,
                name: 'Edouard Moens de Hase',
                image: 'img/team_photos/Edouard.jpg',
                filters: {
                    0: {
                        text: 'Business Developer'
                    }
                }
            },
            {
                id: 29,
                name: 'Fabian Backer',
                image: 'img/team_photos/Fabian.jpg',
                filters: {
                    0: {
                        text: 'Community Manager'
                    }
                }
            },
            {
                id: 29,
                name: 'Yui Takahara',
                image: 'img/team_photos/Yui.jpg',
                filters: {
                    0: {
                        text: 'Community Manager'
                    },
                    5: {
                        text: ' '
                    },
                    7: {
                        text: '30 euro'
                    },
                    8: {
                        text: ' '
                    }
                }
            },
        {
                id: 30,
                name: 'Roman Krutko',
                image: 'img/team_photos/Roma.jpg',
                filters: {
                    0: {
                        text: 'Department Manager'
                    }

                }
        }

        ]
    }
});