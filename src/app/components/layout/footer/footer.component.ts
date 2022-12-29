import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  footerList = [
    { label: 'Audio Description' },
    { label: 'Help Center' },
    { label: 'Gift Cards' },
    { label: 'Media Center' },
    { label: 'Invester Relations' },
    { label: 'Jobs' },
    { label: 'Jobs' },
    { label: 'Terms of Use' },
    { label: 'Privacy' },
    { label: 'Legal Notices' },
    { label: 'Coporate Information' },
    { label: 'Contact Us' },
  ];
}
