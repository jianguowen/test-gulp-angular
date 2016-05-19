export function ToggleSubmenuDirective() {
  let directive = {
    restrict: 'A',
    link: linkFunc
  }

  return directive;

  function linkFunc(scope, element) {
    element.click(function() {
      element.next().slideToggle(200);
      element.parent().toggleClass('toggled');
    });
  }
}
