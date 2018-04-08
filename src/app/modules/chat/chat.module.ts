import {NgModule} from '@angular/core';
import {CHAT_COMPONENTS} from './components';
import {CommonModule} from '@angular/common';
import {MessagesModule} from '../messages/messages.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CHAT_PIPES} from './pipes';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MessagesModule
  ],
  declarations: [
    ...CHAT_COMPONENTS,
    ...CHAT_PIPES,
  ],
  providers: [],
  exports: [
    ...CHAT_COMPONENTS,
    ...CHAT_PIPES
  ]
})
export class ChatModule {
}
