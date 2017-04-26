import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Perfil } from "../perfil/perfil";
import { AlbumPage } from "../album/album";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AlbumPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = Perfil
  tab5Root = HomePage
  
  constructor() {

  }
}
