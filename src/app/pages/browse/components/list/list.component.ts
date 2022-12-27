import { Component, Input } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() banner: string = '';
  topList = [
    { label: 'Movie A' },
    { label: 'Movie B' },
    { label: 'Movie C' },
    { label: 'Movie D' },
    { label: 'Movie E' },
    { label: 'Movie F' },
    { label: 'Movie G' },
  ];
}
