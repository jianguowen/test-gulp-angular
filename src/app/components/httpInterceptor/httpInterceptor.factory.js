export class HttpInterceptor {
  constructor() {
    'ngInject';
  }

  response(response) {
    return response;
  }

  responseError(response) {
    if (response.status === 406 && location.hash !== '#/login') {
      location.hash = '#/login';
    }
    return response;
  }

  request(requestCfg) {
    return requestCfg;
  }

  requestError(rejection) {
    return rejection;
  }
}
