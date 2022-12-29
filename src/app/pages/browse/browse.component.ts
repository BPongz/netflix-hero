import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  ngOnInit(): void {}
  @ViewChild('toTop') toTop!: ElementRef;
  @ViewChild('toMov') toMov!: ElementRef;
  @ViewChild('toPop') toPop!: ElementRef;
  @ViewChild('toList') toList!: ElementRef;

  public get ToppicksElement(): ElementRef {
    return this.toTop;
  }
  public get MoviesElement(): ElementRef {
    return this.toMov;
  }
  public get PoppularElement(): ElementRef {
    return this.toPop;
  }
  public get ListElement(): ElementRef {
    return this.toList;
  }
}
