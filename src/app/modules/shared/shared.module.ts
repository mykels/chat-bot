import {NgModule} from '@angular/core';
import {SHARED_COMPONENTS} from './components';

@NgModule({
  imports: [],
  declarations: [
    ...SHARED_COMPONENTS
  ],
  providers: [],
  exports: [
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule {
}
