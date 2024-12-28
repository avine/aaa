import { Component } from '@angular/core';
import { LoremComponent } from '../lorem/lorem.component';
import { SidenavModule } from '../sidenav';

@Component({
  selector: 'app-prompt',
  imports: [LoremComponent, SidenavModule],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.scss',
})
export class PromptComponent {}
