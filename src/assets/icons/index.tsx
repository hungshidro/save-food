export * from './icon_svg';
export * from './error_alert';

import React from 'react';
import {View} from 'react-native';
import {
  EyeClose,
  EyeIcon,
  ArrowBack,
  Search,
  Home,
  Plus,
  PlusCircle,
  Document,
  Funnel,
  GameController,
  Refresh,
  Restaurant,
  Setting,
  Telescope,
  Trash,
  GameControllerFilled,
  HomeFilled,
  SettingFilled,
} from './icon_svg';
import {IconProps} from 'interfaces';

const iconEyeClose = require('./icon_eye_close.png');
const iconSuccess = require('./icon_success.png');

export type IAppIcon = (props: IconProps) => React.JSX.Element;

export const Icons = () => {
  return <View />;
};

Icons.EyeClose = EyeClose;
Icons.EyeIcon = EyeIcon;
Icons.ArrowBack = ArrowBack;
Icons.Search = Search;
Icons.Home = Home;
Icons.Plus = Plus;
Icons.PlusCircle = PlusCircle;
Icons.Document = Document;
Icons.Funnel = Funnel;
Icons.GameController = GameController;
Icons.Refresh = Refresh;
Icons.Restaurant = Restaurant;
Icons.Setting = Setting;
Icons.Telescope = Telescope;
Icons.Trash = Trash;
Icons.GameControllerFilled = GameControllerFilled;
Icons.HomeFilled = HomeFilled;
Icons.SettingFilled = SettingFilled;

export const icons = {
  iconEyeClose,
  iconSuccess,
};
