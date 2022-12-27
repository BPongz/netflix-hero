import { Component, Input } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
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
