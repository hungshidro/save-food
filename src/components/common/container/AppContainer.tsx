import React, {ReactElement, ReactNode} from 'react';
import {
  ImageBackground,
  Keyboard,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, getSize} from 'themes';
import {AppHeader, AppheaderProps} from '../header';
import {DrawerContainer} from '../drawer';

export const AppContainer = (props: AppContainerProps) => {
  const {
    style,
    containerStyle,
    backgroundColor = colors.white,
    backGroundImage,
    isSafeView = true,
    children,
    headerShown = true,
    insideTab = false,
    scrollable = false,
    title,
    footer,
    absolute,
    iconReturn,
    iconRight,
    mode,
    statusBarProps,
    onReturn,
    returnEnabled,
    onClickRight,
    closeInputOnTouch,
    renderDrawerContent,
    showDrawer,
    alignDrawer,
    onCloseDrawer,
    headerFixed = true,
    ...otherProps
  } = props;
  const inset = useSafeAreaInsets();
  const paddingBottom = isSafeView && !insideTab ? inset.bottom : 0;
  const paddingTop = isSafeView ? inset.top : 0;

  const dismissKeyboard = () => {
    if (!Keyboard.isVisible) {
      return;
    }
    Keyboard.dismiss();
  };

  const renderHeader = () => {
    return (
      <AppHeader
        title={title}
        absolute={absolute}
        iconReturn={iconReturn}
        iconRight={iconRight}
        mode={mode}
        onReturn={onReturn}
        headerShown={headerShown}
        returnEnabled={returnEnabled}
        onClickRight={onClickRight}
        statusBarProps={statusBarProps}
      />
    );
  };

  const renderContent = () => {
    return (
      <>
        {headerFixed && renderHeader()}
        {scrollable ? (
          <ScrollView
            keyboardShouldPersistTaps={'handled'}
            style={[styles.container, containerStyle]}
            {...otherProps}>
            {!headerFixed && renderHeader()}
            {children}
          </ScrollView>
        ) : (
          <View style={[styles.container, containerStyle]}>
            {!headerFixed && renderHeader()}
            {children}
          </View>
        )}
        {footer && footer}
        {renderDrawerContent && (
          <DrawerContainer
            onCloseDrawer={onCloseDrawer}
            align={alignDrawer}
            show={showDrawer}>
            {renderDrawerContent()}
          </DrawerContainer>
        )}
      </>
    );
  };

  const Container = closeInputOnTouch ? TouchableOpacity : View;

  if (backGroundImage) {
    return (
      // @ts-ignore
      <Container
        onPress={dismissKeyboard}
        activeOpacity={1}
        disabled={!closeInputOnTouch}
        style={styles.container}>
        <ImageBackground
          source={backGroundImage}
          style={[
            styles.container,
            {
              backgroundColor: backgroundColor,
              paddingTop: paddingTop,
              paddingBottom: paddingBottom,
            },
            style,
          ]}>
          {renderContent()}
        </ImageBackground>
      </Container>
    );
  }
  return (
    // @ts-ignore
    <Container
      activeOpacity={1}
      onPress={dismissKeyboard}
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
        },
        style,
      ]}>
      {renderContent()}
    </Container>
  );
};

type AppContainerNonScrollableProps = AppheaderProps & {
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  backGroundImage?: any;
  /**set to True: paddingTop, paddingBottom by inset
   * default is true
   */
  isSafeView?: boolean;
  children?: ReactElement | ReactNode;
  appBarShown?: boolean;
  insideTab?: boolean;
  footer?: ReactElement | ReactNode;
  closeInputOnTouch?: boolean;
  renderDrawerContent?: () => ReactElement;
  showDrawer?: boolean;
  alignDrawer?: 'left' | 'right';
  onCloseDrawer?: () => void;
  headerFixed?: boolean;
};

type AppContainerScrollableProps = AppContainerNonScrollableProps &
  ScrollViewProps;

type AppContainerProps =
  | ({scrollable?: true} & AppContainerScrollableProps)
  | ({scrollable?: false} & AppContainerNonScrollableProps);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTop: {
    marginTop: getSize(23),
  },
});
