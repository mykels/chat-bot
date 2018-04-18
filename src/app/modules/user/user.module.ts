import {NgModule} from '@angular/core';
import {USER_SERVICES} from './services';
import {USER_PIPES} from './pipes';
import {USER_COMPONENTS} from './components';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ...USER_COMPONENTS,
    ...USER_PIPES
  ],
  providers: [
    ...USER_SERVICES
  ],
  exports: [
    ...USER_COMPONENTS,
    ...USER_PIPES
  ]
})
export class UserModule {
}
