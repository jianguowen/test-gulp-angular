export function runBlock($log, $rootScope) {
  'ngInject';
  $log.debug('runBlock end');

  let rootScope = $rootScope;
  rootScope.$on('$stateChangeStart', function() {

  });
}
