import {
  IRootScreenParams,
  //NEW ROUTE PARAMS HERE
} from './NavigationParams';
import RouteName from './RouteName';

type RootStackParamList = {
  [RouteName.ROOT]: IRootScreenParams;
  //NEW ROUTE STACK HERE
};

export default RootStackParamList;
