export class MainController {
  constructor($scope, $log, $state) {
    'ngInject';

    let mactrl = this;

    mactrl.$scope = $scope;
    mactrl.$log = $log;
    mactrl.$state = $state;

    mactrl.sidebarToggle = {
      left: false,
      right: false
    };

    this.layoutType = localStorage.getItem('ma-layout-status')
  }

  sidebarStat(event) {
    let mactrl = this;

  }

  logout(){
    this.$state.go('login');
  }
}
