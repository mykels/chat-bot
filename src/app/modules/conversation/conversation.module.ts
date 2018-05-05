import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CONVERSATION_COMPONENTS} from './components';
import {FormsModule} from '@angular/forms';
import {UserModule} from '../user/user.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UserModule
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
