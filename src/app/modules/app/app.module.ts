import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {BrowserModule} from '@angular/platform-browser';
import {APP_COMPONENTS} from './components';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule
  ],
  declarations: [
    ...APP_COMPONENTS
  ],
  providers: [],
  bootstrap: [
    ...APP_COMPONENTS
  ]
})
export class AppModule {
}
