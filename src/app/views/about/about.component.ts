import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  styles: [
    `
      :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
        position: sticky;
        top: 0px;
      }
    `,
  ],
})
export class AboutComponent {
  customers: any[] = [
    {
      name: '1',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: '2',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: '3',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: '4',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: '5',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
    {
      name: 'a',
      country: 'b',
      representative: 'c',
      status: 'd',
    },
  ];
}
