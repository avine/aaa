export * from './sidenav.component';
export * from './sidenav.directive';

import { SidenavComponent } from './sidenav.component';
import {
  SidenavContentDirective,
  SidenavNavDirective,
} from './sidenav.directive';

export const SidenavModule = [
  SidenavComponent,
  SidenavContentDirective,
  SidenavNavDirective,
] as const;
