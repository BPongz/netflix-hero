//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ImageModule } from 'primeng/image';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';

//Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './pages/browse/components/movie/movie.component';
import { ToppicksComponent } from './pages/browse/components/toppicks/toppicks.component';
import { MoviesComponent } from './pages/browse/components/movies/movies.component';
import { PoppularComponent } from './pages/browse/components/poppular/poppular.component';
import { ListComponent } from './pages/browse/components/list/list.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BrowseComponent,
    MovieComponent,
    ToppicksComponent,
    MoviesComponent,
    PoppularComponent,
    ListComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    CommonModule,
    DividerModule,
    ImageModule,
    MenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
