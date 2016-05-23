import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';


if (webpack.ENV === 'production') {
  enableProdMode();
}

import { AppComponent } from './app/app.component';

bootstrap(AppComponent);

