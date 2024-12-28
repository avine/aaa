import { Routes } from '@angular/router';
import { LoremComponent } from './lorem/lorem.component';
import { PromptComponent } from './prompt/prompt.component';

export const routes: Routes = [
  {
    path: '',
    component: LoremComponent,
  },
  {
    path: 'prompt',
    component: PromptComponent,
  },
];
