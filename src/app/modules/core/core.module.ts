import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CoreRoutingModule} from './core.routing';
import {ChatModule} from '../chat/chat.module';
import {CORE_COMPONENTS} from './components';
import {UserModule} from '../user/user.module';
import {StoreModule} from '@ngrx/store';
import {initialState, reducerMap} from './store/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ThreadModule} from '../thread/thread.module';

@NgModule({
  imports: [
    CoreRoutingModule,
    ThreadModule,
    ChatModule,
    UserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducerMap, {initialState})
  ],
  declarations: [
    ...CORE_COMPONENTS
  ],
  providers: [],
  exports: [
    RouterModule,
    ThreadModule,
    ChatModule,
    UserModule,
    ...CORE_COMPONENTS
  ]
})
export class CoreModule {
}
