export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/home/home.html'
    })
    .state('headers', {
      url: '/headers',
      templateUrl: 'app/views/common-2.html'
    })
    .state('headers.textual-menu', {
      url: '/textual-menu',
      templateUrl: 'app/views/headers/textualMenu/textual.html'
    })
    .state('headers.image-logo', {
      url: '/imageLogo',
      templateUrl: 'app/views/headers/imageLogo/logo.html'
    })
    .state('headers.mainmenu-on-top', {
      url: '/mainMenuOnTop',
      templateUrl: 'app/views/headers/mainMenuOnTop/ontop.html'
    })
    .state('typography', {
      url: '/typography',
      templateUrl: 'app/views/typography/typography.html'
    });

  $urlRouterProvider.otherwise('/');
}
