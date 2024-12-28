import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({ selector: '[appSidenavNav]' })
export class SidenavNavDirective {
  templateRef = inject(TemplateRef);
}

@Directive({ selector: '[appSidenavContent]' })
export class SidenavContentDirective {
  templateRef = inject(TemplateRef);
}
