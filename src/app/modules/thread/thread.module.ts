import {NgModule} from '@angular/core';
import {THREAD_COMPONENTS} from './components';
import {CommonModule} from '@angular/common';
import {ThreadModuleRouting} from './thread.routing';
import {THREAD_SERVICES} from './services';

@NgModule({
  imports: [
    CommonModule,
    ThreadModuleRouting
  ],
  declarations: [
    ...THREAD_COMPONENTS
  ],
  providers: [
    ...THREAD_SERVICES
  ],
  exports: [
    ...THREAD_COMPONENTS
  ]
})
export class ThreadModule {
}
