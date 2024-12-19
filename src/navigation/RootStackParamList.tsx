import {
  IRootScreenParams,
  IHomeScreenParams,
  IExploreScreenParams,
  IRandomScreenParams,
  ISettingScreenParams,
  //NEW ROUTE PARAMS HERE
} from './NavigationParams';
import RouteName from './RouteName';

type RootStackParamList = {
  [RouteName.ROOT]: IRootScreenParams;
  [RouteName.HOME]: IHomeScreenParams;
  [RouteName.EXPLORE]: IExploreScreenParams;
  [RouteName.RANDOM]: IRandomScreenParams;
  [RouteName.SETTING]: ISettingScreenParams;
  //NEW ROUTE STACK HERE
};

export default RootStackParamList;
