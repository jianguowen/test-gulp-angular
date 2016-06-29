export function ChangeLayoutDirective() {
  'ngInject';

  let directive = {
    restrict: 'A',
    scope: {
      changeLayout: '='
    },
    link: linkFunc
  }
  return directive;

  function linkFunc(scope, element) {
    //Default State
    if (scope.changeLayout === '1') {
      element.prop('checked', true);
    }
    //Change State
    element.on('change', function() {
      if (element.is(':checked')) {
        localStorage.setItem('ma-layout-status', 1);
        scope.$apply(function() {
          scope.changeLayout = '1';
        })
      } else {
        localStorage.setItem('ma-layout-status', 0);
        scope.$apply(function() {
          scope.changeLayout = '0';
        })
      }
    })
  }
}
