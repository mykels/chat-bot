import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CONVERSATION_COMPONENTS} from './components';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ...CONVERSATION_COMPONENTS,
  ],
  providers: [],
  exports: [
    ...CONVERSATION_COMPONENTS,
  ]
})
export class ConversationModule {
}
