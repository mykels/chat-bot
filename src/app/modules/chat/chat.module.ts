import {NgModule} from '@angular/core';
import {CHAT_COMPONENTS} from './components';
import {CommonModule} from '@angular/common';
import {MessagesModule} from '../messages/messages.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MessagesModule
  ],
  declarations: [
    ...CHAT_COMPONENTS
  ],
  providers: [],
  exports: [
    ...CHAT_COMPONENTS
  ]
})
export class ChatModule {
}
