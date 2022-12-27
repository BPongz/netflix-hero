import { Component, Input } from '@angular/core';

@Component({
  selector: 'toppicks',
  templateUrl: './toppicks.component.html',
  styleUrls: ['./toppicks.component.scss'],
})
export class ToppicksComponent {
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
