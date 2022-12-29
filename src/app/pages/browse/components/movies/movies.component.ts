import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  @Input() banner: string = '';
  topList = [
    { label: 'Movie A', path: '../../../../../assets/img/movies/peaky.jpg' },
    {
      label: 'Movie B',
      path: '../../../../../assets/img/toppicks/knivesout.jpg',
    },
    {
      label: 'Movie C',
      path: '../../../../../assets/img/toppicks/witcher.jpg',
    },
    {
      label: 'Movie D',
      path: '../../../../../assets/img/movies/onion.jpg',
    },
    {
      label: 'Movie E',
      path: '../../../../../assets/img/movies/stranger.jpg',
    },
    { label: 'Movie F', path: '../../../../../assets/img/movies/enola2.jpg' },
  ];
  @ViewChild('scrollable') scrollable!: ElementRef;
  resetShow: boolean = false;

  scroll() {
    this.scrollable.nativeElement.scrollTo({ left: 1200, behavior: 'smooth' });
    this.resetShow = true;
  }

  scrollTop() {
    this.scrollable.nativeElement.scrollTo({ left: -400, behavior: 'smooth' });
    this.resetShow = false;
  }
}
