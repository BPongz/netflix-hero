import { Component, Input } from '@angular/core';

@Component({
  selector: 'poppular',
  templateUrl: './poppular.component.html',
  styleUrls: ['./poppular.component.scss'],
})
export class PoppularComponent {
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
