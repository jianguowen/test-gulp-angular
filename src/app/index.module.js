/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { MainController } from './index.controller';
import { LoginController } from '../app/views/login/login.controller';
import { RegisterController } from '../app/views/register/register.controller';

import { ToggleSidebarDirective } from '../app/components/toggleSidebar/toggleSidebar.directive';
import { ToggleSubmenuDirective } from '../app/components/toggleSubmenu/toggleSubmenu.directive';
import { ChangeLayoutDirective } from '../app/components/changeLayout/changeLayout.directive';

import { LoginService } from '../app/views/login/login.service';
import { RegisterService } from '../app/views/register/register.service';


angular.module('demoGulpAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .controller('RegisterController', RegisterController)
  .directive('toggleSidebar',ToggleSidebarDirective)
  .directive('toggleSubmenu',ToggleSubmenuDirective)
  .directive('changeLayout',ChangeLayoutDirective)
  .service('LoginService', LoginService)
  .service('RegisterService', RegisterService);
