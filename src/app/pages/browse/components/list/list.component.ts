import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() banner: string = '';
  topList = [
    { label: 'Movie A', path: '../../../../../assets/img/toppicks/myhero.jpg' },
    { label: 'Movie B', path: '../../../../../assets/img/toppicks/bleach.jpg' },
    { label: 'Movie C', path: '../../../../../assets/img/toppicks/spyfam.jpg' },
    {
      label: 'Movie D',
      path: '../../../../../assets/img/toppicks/knivesout.jpg',
    },
    {
      label: 'Movie E',
      path: '../../../../../assets/img/toppicks/witcher.jpg',
    },
    { label: 'Movie F', path: '../../../../../assets/img/toppicks/alice.jpg' },
    {
      label: 'Movie G',
      path: '../../../../../assets/img/toppicks/jujutsu.jpg',
    },
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
