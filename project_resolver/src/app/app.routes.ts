import { Routes } from '@angular/router';
import { ResolverService } from './resolver.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./container/container.component').then(
        (m) => m.ContainerComponent
      ),
    resolve: {
      someData: ResolverService,
    },
  },
];
