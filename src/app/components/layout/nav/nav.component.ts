import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  browse = false;
  tvShows = false;
  movies = false;
  isClick = false;
  navList = [
    {
      separator: true,
    },
    { label: 'Home', link: '/', current: true },
    {
      label: 'Top Picks',
      link: '/toppicks',
    },
    { label: 'Movies', link: '/movies' },
    { label: 'New & Poppular', link: '/poppular' },
    { label: 'My List', link: '/list' },
  ];
  items!: MenuItem[];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.browse = false;
        this.tvShows = false;
        this.movies = false;
        if (event.url.includes('browse')) {
          this.browse = true;
        }
        if (event.url.includes('shows')) {
          this.tvShows = true;
        }
        if (event.url.includes('movies')) {
          this.movies = true;
        }
      }
    });
  }
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
      },
    ];
  }

  setEnable() {
    this.isClick = true;
  }
  setDisable() {
    this.isClick = false;
  }
}
