import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BrowseComponent } from 'src/app/pages/browse/browse.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isClick = false;
  navList = [
    {
      separator: true,
    },
    { label: 'Home', current: true },
    {
      label: 'Top Picks',
      link: 'top',
      command: () => {
        this.scrollToElement('top');
      },
    },
    {
      label: 'Movies',
      link: 'mov',
      command: () => {
        this.scrollToElement('mov');
      },
    },
    {
      label: 'New & Poppular',
      link: 'pop',
      command: () => {
        this.scrollToElement('pop');
      },
    },
    {
      label: 'My List',
      link: 'list',
      command: () => {
        this.scrollToElement('list');
      },
    },
  ];
  items!: MenuItem[];

  constructor(
    private router: Router,
    private browseComp: BrowseComponent,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.items = [
      {
        label: 'Manage Profiles',
        icon: 'pi pi-fw pi-pencil',
      },
      { label: 'Exit Profiles', icon: 'pi pi-fw pi-external-link' },
      { label: 'Account', icon: 'pi pi-fw pi-users' },
      {
        label: 'Help Center',
        icon: 'pi pi-fw pi-question-circle',
      },
      {
        separator: true,
      },
      {
        label: 'Sign out of Netflix',
        command: () => {
          this.openVideo();
        },
      },
    ];
  }

  setEnable() {
    this.isClick = true;
  }
  setDisable() {
    this.isClick = false;
  }

  scrollToElement(elName: any) {
    console.log(elName);
    let scrollTo: any;
    if (elName === 'top')
      scrollTo = this.browseComp.ToppicksElement.nativeElement;
    else if (elName === 'mov')
      scrollTo = this.browseComp.MoviesElement.nativeElement;
    else if (elName === 'pop')
      scrollTo = this.browseComp.PoppularElement.nativeElement;
    else if (elName === 'list') {
      scrollTo = this.browseComp.ListElement.nativeElement;
    }
    scrollTo.scrollIntoView({ behavior: 'smooth' });
  }

  toRickRoll() {
    let videoUrl = '';
    this.route.params.subscribe((params) => {
      videoUrl = `https://www.youtube.com/embed/dQw4w9WgXcQ`;
    });
  }

  openVideo() {
    window.open(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`, '_self');
  }
}
