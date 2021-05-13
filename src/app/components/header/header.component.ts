import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public items: MenuItem[] = [];

  public constructor(private router: Router) {}

  public ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Bestellen',
        icon: 'pi pi-book',
        routerLink: 'bestellen',
      },
      {
        label: 'Statistik',
        icon: 'pi pi-chart-bar',
        routerLink: 'statistik',
      },
      {
        label: 'About',
        icon: 'pi pi-briefcase',
        routerLink: 'about',
      },
    ];
  }

  public switchToMainRoute(): void {
    this.router.navigate(['']);
  }
}
