import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'poppular',
  templateUrl: './poppular.component.html',
  styleUrls: ['./poppular.component.scss'],
})
export class PoppularComponent {
  @Input() banner: string = '';
  topList = [
    { label: 'Movie F', path: '../../../../../assets/img/movies/onion.jpg' },
    { label: 'Movie A', path: '../../../../../assets/img/toppicks/myhero.jpg' },
    { label: 'Movie B', path: '../../../../../assets/img/toppicks/bleach.jpg' },
    { label: 'Movie C', path: '../../../../../assets/img/toppicks/spyfam.jpg' },
    { label: 'Movie F', path: '../../../../../assets/img/toppicks/alice.jpg' },
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
