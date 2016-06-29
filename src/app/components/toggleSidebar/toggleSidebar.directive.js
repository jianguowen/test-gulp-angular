export function ToggleSidebarDirective() {
  'ngInject';

  let directive = {
    restrict: 'A',
    scope: {
      modelLeft: '='
    },
    link: linkFunc
  }
  return directive;

  function linkFunc(scope, element) {
    element.on('click', function() {
      if (element.data('target') === 'mainmenu') {
        if (scope.modelLeft === false) {
          scope.$apply(function() {
            scope.modelLeft = true;
          })
        } else {
          scope.$apply(function() {
            scope.modelLeft = false;
          })
        }
      }
    })
  }
}
