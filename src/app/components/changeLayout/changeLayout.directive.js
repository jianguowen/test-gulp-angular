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
    console.log('changeLayout is ' + scope.changeLayout)
    //Default State
    if (scope.changeLayout === '1') {
      element.prop('checked', true);
    }
    //Change State
    element.on('change', function() {
      console.log('element.value is ' + element.is(':checked'))
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
