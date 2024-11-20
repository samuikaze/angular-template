import { Component } from '@angular/core';
import { BaseHeaderComponent } from './core/layouts/base/base-header/base-header.component';
import { BaseBodyComponent } from './core/layouts/base/base-body/base-body.component';
import { BaseFooterComponent } from './core/layouts/base/base-footer/base-footer.component';
import { AppEnvironmentService } from './core/services/app-environment-service/app-environment.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BaseHeaderComponent, BaseBodyComponent, BaseFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent {
  title = 'angular18-template';

  constructor(
    private appEnvironmentService: AppEnvironmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {
        this.appEnvironmentService.retrievingConfigsFromJson();
      }
    });
  }
}
