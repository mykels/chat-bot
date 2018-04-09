import {RouterModule, Routes} from '@angular/router';
import {ThreadDetailsComponent} from './components/thread-details/thread-details.component';

const routes: Routes = [
  {
    path: ':id',
    component: ThreadDetailsComponent,
  }
];

export const ThreadModuleRouting = RouterModule.forChild(routes);
