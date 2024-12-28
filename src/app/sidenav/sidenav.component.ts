import {
  Component,
  contentChild,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import {
  SidenavContentDirective,
  SidenavNavDirective,
} from './sidenav.directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  host: { class: 'app-sidenav' },
  imports: [NgTemplateOutlet],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent {
  protected nav = contentChild(SidenavNavDirective);

  protected content = contentChild(SidenavContentDirective);

  sidenavOpen = signal(true);

  protected toggleSidenavOpen() {
    this.sidenavOpen.update((v) => !v);
  }
}
