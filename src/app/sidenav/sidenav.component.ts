import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, ElementRef, signal, viewChild, ViewEncapsulation } from '@angular/core';
import { SidenavContentDirective, SidenavNavDirective } from './sidenav.directive';

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

  protected backdrop = viewChild<ElementRef<HTMLElement>>('backdrop');

  protected onBackdropScroll(event: Event) {
    console.log('OK');
    event.stopPropagation();
  }
}
