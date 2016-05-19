/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { MainController } from './index.controller';

import { ToggleSidebarDirective } from '../app/components/toggleSidebar/toggleSidebar.directive';
import { ToggleSubmenuDirective } from '../app/components/toggleSubmenu/toggleSubmenu.directive';
import { ChangeLayoutDirective } from '../app/components/changeLayout/changeLayout.directive';


angular.module('demoGulpAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .directive('toggleSidebar',ToggleSidebarDirective)
  .directive('toggleSubmenu',ToggleSubmenuDirective)
  .directive('changeLayout',ChangeLayoutDirective);
