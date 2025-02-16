import { RouteObject } from 'react-router-dom';
import { RoutePaths } from './routePaths';
import { MainPageLazy } from '@/pages';

export const routeConfig: RouteObject[] = [
  {
    path: RoutePaths.main,
    element: <MainPageLazy />,
  },
];
