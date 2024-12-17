import FastImage, {FastImageProps} from '@d11/react-native-fast-image';
import {IMAGES} from 'assets';
import React from 'react';
import {colors} from 'themes';

type AppImageProps = FastImageProps & {
  size?: number;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  width?: number;
  height?: number;
  defaultSource?: any;
};

export const AppImage = (props: AppImageProps) => {
  const {
    source,
    size,
    borderColor = colors.neutralColor7,
    borderWidth,
    borderRadius,
    width,
    height,
    style,
    defaultSource = IMAGES.defaultAvatar,
    ...rest
  } = props;
  // const [isLoading, setIsLoading] = React.useState(true);

  //   const onLoadStart = () => {};
  //
  //   const onLoadEnd = () => {};

  //../../../asset/images/default_avatar.jpeg
  const getSource = () => {
    if (source) {
      if (typeof source === 'number' || !!(source as any)?.uri) {
        return source;
      } else {
        return defaultSource;
      }
    }
    return defaultSource;
  };

  return (
    <FastImage
      source={getSource()}
      // onLoadStart={onLoadStart}
      // onLoadEnd={onLoadEnd}
      style={[
        {
          width: width ?? size,
          height: height ?? size,
          borderRadius,
          borderColor,
          borderWidth,
        },
        style,
      ]}
      defaultSource={defaultSource}
      {...rest}
    />
  );
};
