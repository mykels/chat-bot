import {BOT_SERVICES} from './services';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    ...BOT_SERVICES
  ],
  exports: []
})
export class BotModule {
}
