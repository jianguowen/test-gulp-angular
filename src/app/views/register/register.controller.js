export class RegisterController {
  constructor($scope, $state, $log, RegisterService) {

    'ngInject';

    let rc = this;
    rc.$scope = $scope;
    rc.$state = $state;
    rc.$log = $log;
    rc.RegisterService = RegisterService;

    rc.register = {
      username: '',
      password: '',
      repeatPassword: '',
      mobile: '',
      checkCode: ''
    }

    rc.pattern = {
      user: /^\w{6,16}$/,
      mobile: /(^(13[0-9]|14[57]|15[0-35-9]|17[678]|18[0-9])[0-9]{8}$)|(^170[0-9]\d{7}$)/
    }

    rc.result = {
      usernameIsExit: false,
      mobileIsExit: false
    }
  }

  // 1:判断手机号是否已重复注册。
  // 2:向输入的手机号发送验证码
  sendCheckCode() {

  }

  // 用户名验证
  isUsernameExit() {

  }

  keydown(e) {
    if (e.keyCode !== 13) {
      return;
    }
    // 回车事件
    this.saveUserInfo();
  }
  // 保存用户信息
  saveUserInfo(){

  }
}
