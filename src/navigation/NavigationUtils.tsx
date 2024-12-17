import {
  CommonActions,
  NavigationContainerRef,
  Route,
  StackActions,
} from '@react-navigation/native';
import React from 'react';

export const navigationRef =
  React.createRef<NavigationContainerRef<ReactNavigation.RootParamList>>();

export function navigate<Params extends object>(
  routeName: string,
  params?: Params,
) {
  if (navigationRef.current) {
    navigationRef.current?.dispatch(
      CommonActions.navigate({
        name: routeName,
        params,
      }),
    );
  }
}

export function push<Params extends object>(
  routeName: string,
  params?: Params,
) {
  if (navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.push(routeName, params));
  }
}

export function goBack() {
  if (navigationRef.current?.canGoBack()) {
    navigationRef.current.dispatch(CommonActions.goBack());
  }
}

export function pop(value?: number) {
  navigationRef.current?.dispatch(StackActions.pop(value));
}

export function replace<Params extends object>(
  routeName: string,
  params?: Params,
) {
  if (navigationRef.current) {
    navigationRef.current.dispatch(StackActions.replace(routeName, params));
  }
}

export function reset(
  name: string,
  routes?: Omit<Route<string>, 'key'>[],
  index?: number,
) {
  if (navigationRef.current) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: index ?? 0,
        routes: routes
          ? routes
          : [
              {
                name: name,
              },
            ],
      }),
    );
  }
}

export const navigation = {
  navigate,
  goBack,
  pop,
  replace,
  reset,
};
