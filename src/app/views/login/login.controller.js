export class LoginController {
  constructor($scope, $state, $log, LoginService) {

    'ngInject';

    let lc = this;
    lc.$scope = $scope;
    lc.$state = $state;
    lc.$log = $log;
    lc.LoginService = LoginService;

    lc.user = {
      name: '',
      password: '',
      role: false,
      captch: ''
    }

    lc.checkCodeUrl = "http://192.168.1.176:4800/merServPlat/captcha.json?type=login";

  }

  login() {
    if (!this.LoginService.validate(this.user)) {
      return;
    }
    let form = {
      username: this.user.username,
      password: this.LoginService.encrypt(this.user.password)
    };
    this.$log.log(form)
    var isRight = this.LoginService.sendrequest(this.user);
    this.$log.log(isRight)

  }
  getPassword() {
    this.user.password = localStorage.getItem(this.user.name) ? localStorage.getItem(this.user.name) : '';
  }
  keydown(e) {
    if (e.keyCode !== 13) {
      return;
    }

    // 回车事件
    this.login();
  }
  refreshCheckCode() {
    this.checkCodeUrl += '&';
    this.user.captch = '';
  }
}
