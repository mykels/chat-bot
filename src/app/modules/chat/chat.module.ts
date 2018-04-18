import {NgModule} from '@angular/core';
import {CHAT_COMPONENTS} from './components';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConversationModule} from '../conversation/conversation.module';
import {UserModule} from '../user/user.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ConversationModule,
    UserModule
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
