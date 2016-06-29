export class LoginService {
  constructor($http, $window, $state, toastr) {
    'ngInject';

    this.$http = $http;
    this.$state = $state;
    this.$window = $window;
    this.toastr = toastr;
  }

  validate(request) {

    if (!request.name) {
      this.toastr.warning('用户名不能为空');
      return false;
    }
    if (!request.password) {
      this.toastr.warning('密码不能为空');
      return false;
    }
    return true;
  }

  encrypt(plainText) {
    let key = '-----BEGIN PUBLIC KEY-----\
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDF4xejo7F1JVPU555mG6Kei8XU\
2bT+V0Y+DaxzoBChaxYGOtlkf6vCh3y6Op/3OWdZAG8W17S3w9V7Skw0PvFvqqqc\
8JLlnr9/zDKoit5X17VHX8Ky3jdl7Ll2h3MFghAbzcf0P7CRGxgpTm+lqsPQXETz\
DEBEqXeE7Q7WeseaHQIDAQAB\
-----END PUBLIC KEY-----';
    let rsa = new JSEncrypt();
    rsa.setPublicKey(key);
    return rsa.encrypt(plainText);
  }

  sendrequest(request) {
    var self = this;
    return this.$http.get('./app/views/login/userInfo.json').then(function(response) {
      for (let i = 0; i < response.data.length; i++) {
        let oneinfo = response.data[i];
        if (request.name === oneinfo.name && request.password === oneinfo.password) {
          // request.role === true,存密码
          self.setPassword(request);
          self.toastr.success('登录成功');
          self.$state.go('home');
        } else {
          return false;
        }
      }
    })
  }

  setPassword(request) {
    if (request.role) {
      localStorage.setItem(request.name, request.password);
    }
  }

}
