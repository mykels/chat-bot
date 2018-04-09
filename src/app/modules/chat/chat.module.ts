import {NgModule} from '@angular/core';
import {CHAT_COMPONENTS} from './components';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CHAT_PIPES} from './pipes';
import {ConversationModule} from '../conversation/conversation.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ConversationModule
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
