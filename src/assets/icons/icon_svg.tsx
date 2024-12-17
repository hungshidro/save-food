import {IconProps} from 'interfaces';
import * as React from 'react';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from 'react-native-svg';
import {colors, getSize} from 'themes';
export const DocumentText = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.primary,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 10v5c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h5"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 10h-4c-3 0-4-1-4-4V2l8 8ZM7 13h6M7 17h4"
      />
    </Svg>
  );
};

export const AlertCircle = (props: IconProps) => {
  const {size = getSize(20), ...rest} = props;

  return (
    <Svg width={size} height={size} fill="none" {...rest}>
      <G
        stroke="#0596C3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        clipPath="url(#a)">
        <Path d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666ZM10 13.333h.008M10 6.667V10" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const ArrowLeft = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor1,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M15 19.92 8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
      />
    </Svg>
  );
};

export const ArrowRight = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.primary2,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"
      />
    </Svg>
  );
};

export const ArrowDown = (props: IconProps) => {
  const {
    size = getSize(20),
    width,
    height,
    color = colors.neutralColor4,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 3.333v13.334m0 0 5-5m-5 5-5-5"
      />
    </Svg>
  );
};

export const ArrowUp = (props: IconProps) => {
  const {
    size = getSize(20),
    width,
    height,
    color = colors.neutralColor4,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 16.667V3.333m0 0 5 5m-5-5-5 5"
      />
    </Svg>
  );
};

export const CakeIcon = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.primary,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 22h20M3.11 22v-9c0-1.66 1.49-3 3.33-3h11.11c1.84 0 3.33 1.34 3.33 3v9M5.56 10V7.17C5.56 5.97 6.64 5 7.98 5h8.05c1.33 0 2.41.97 2.41 2.17V10"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m3.53 13.98.37.01c.74.01 1.33.61 1.33 1.35v.33a1.35 1.35 0 0 0 2.7 0v-.31a1.35 1.35 0 0 1 2.7 0v.31a1.35 1.35 0 0 0 2.7 0v-.31a1.35 1.35 0 0 1 2.7 0v.31a1.35 1.35 0 0 0 2.7 0v-.31c0-.74.6-1.35 1.35-1.35h.45M8 5V3M16 5V3M12 5V2"
      />
    </Svg>
  );
};

export const CategoryIcon = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor1,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M5 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3H5C3 2 2 3 2 5v2c0 2 1 3 3 3ZM17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM17 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3Z"
      />
    </Svg>
  );
};

export const Check = (props: IconProps) => {
  const {
    size = getSize(18),
    color = colors.primary,
    strokeWidth = 3,
    ...rest
  } = props;

  return (
    <Svg width={size} height={size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="m15 4.5-8.25 8.25L3 9"
      />
    </Svg>
  );
};

export const ChevronLeft = (props: IconProps) => {
  const {size = 24, width, height, color = '#0596C3', ...rest} = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        fill={color}
        d="m10.828 12 4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414-4.95 4.95Z"
      />
    </Svg>
  );
};
export const CloseIcon = (props: IconProps) => {
  const {color = colors.white, size = 32, strokeWidth = 2} = props;

  return (
    <Svg width={size} height={size} fill="none" {...props}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M24 8 8 24M8 8l16 16"
      />
    </Svg>
  );
};
export const CloseOutline = (props: IconProps) => {
  const {size = getSize(18), color = colors.neutralColor3, ...rest} = props;

  return (
    <Svg width={size} height={size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13.5 4.5-9 9M4.5 4.5l9 9"
      />
    </Svg>
  );
};
export const DropIcon = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.primary,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M12.61 2.21a.991.991 0 0 0-1.22 0C9.49 3.66 3.88 8.39 3.91 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.01-5.43-5.61-10.24-7.5-11.7Z"
      />
    </Svg>
  );
};

export const EyeIcon = (props: IconProps) => {
  const {
    size = getSize(20),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.983 10A2.98 2.98 0 0 1 10 12.983 2.98 2.98 0 0 1 7.017 10 2.98 2.98 0 0 1 10 7.017 2.98 2.98 0 0 1 12.983 10Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 16.892c2.942 0 5.683-1.734 7.592-4.734.75-1.175.75-3.15 0-4.325-1.909-3-4.65-4.733-7.592-4.733-2.942 0-5.683 1.733-7.592 4.733-.75 1.175-.75 3.15 0 4.325 1.909 3 4.65 4.734 7.592 4.734Z"
      />
    </Svg>
  );
};

export const EyeClose = (props: IconProps) => {
  const {
    size = getSize(20),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12.108 7.892-4.216 4.216a2.98 2.98 0 1 1 4.217-4.217Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.85 4.808c-1.458-1.1-3.125-1.7-4.85-1.7-2.942 0-5.683 1.734-7.592 4.734-.75 1.175-.75 3.15 0 4.325a11.938 11.938 0 0 0 2.259 2.641M7.017 16.275c.95.4 1.958.617 2.983.617 2.942 0 5.683-1.734 7.592-4.734.75-1.175.75-3.15 0-4.325a13.523 13.523 0 0 0-.884-1.225"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.925 10.583a2.97 2.97 0 0 1-2.35 2.35M7.892 12.108l-6.225 6.225M18.333 1.667l-6.225 6.225"
      />
    </Svg>
  );
};

export const InvalidIcon = (props: IconProps) => {
  const {size = getSize(96), ...rest} = props;

  return (
    <Svg width={size} height={size} fill="none" {...rest}>
      <G clipPath="url(#a)">
        <Path
          stroke="url(#b)"
          strokeMiterlimit={10}
          strokeWidth={7.5}
          d="M44.25 3.75H48c24.439 0 44.25 19.811 44.25 44.25S72.439 92.25 48 92.25 3.75 72.439 3.75 48v-3.75m1.933-9.72 2.87-6.928m5.506-8.24 5.303-5.303m8.24-5.506 6.929-2.87M48 33v15m0 7.5V63m0-41.25c-14.498 0-26.25 11.752-26.25 26.25S33.502 74.25 48 74.25 74.25 62.498 74.25 48 62.498 21.75 48 21.75Z"
        />
      </G>
      <Defs>
        <LinearGradient
          id="b"
          x1={48}
          x2={48}
          y1={113}
          y2={0}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#0299C6" />
          <Stop offset={1} stopColor="#34D5E7" />
        </LinearGradient>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h96v96H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export const LockIcon = (props: IconProps) => {
  const {
    size = getSize(20),
    width,
    height,
    color = colors.neutralColor5,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 8.333V6.667c0-2.759.833-5 5-5s5 2.241 5 5v1.666M10 15.417a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.167 18.333H5.833c-3.333 0-4.166-.833-4.166-4.166V12.5c0-3.333.833-4.167 4.166-4.167h8.334c3.333 0 4.166.834 4.166 4.167v1.667c0 3.333-.833 4.166-4.166 4.166Z"
      />
    </Svg>
  );
};
export const LogoSvg = (props: IconProps) => {
  const {
    size = getSize(56),
    width = getSize(56),
    height = getSize(46),
    ...rest
  } = props;
  const scale = size / getSize(56);
  return (
    <Svg
      width={width}
      height={height}
      transform={[{scale}]}
      fill="none"
      {...rest}>
      <Path fill="#69B3FF" d="M15 0h25L25 46H0L15 0Z" />
      <Path fill="#007FFF" d="M15 0h16L16 46H0L15 0Z" />
      <Path fill="#69B3FF" d="M36 33h20v13H36z" />
    </Svg>
  );
};
export const LogoutIcon = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.417 6.3c.258-3 1.8-4.225 5.175-4.225h.108c3.725 0 5.217 1.492 5.217 5.217v5.433c0 3.725-1.492 5.217-5.217 5.217h-.108c-3.35 0-4.892-1.209-5.167-4.159M12.5 10H3.017M4.875 7.208 2.083 10l2.792 2.792"
      />
    </Svg>
  );
};
export const NotificationIcon = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor1,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M13.87 3.2a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26Z"
      />
      <Path
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 0 1-.88-2.12"
      />
    </Svg>
  );
};
export const PlusIcon = (props: IconProps) => {
  const {color = '#0596C3', size = getSize(32)} = props;

  return (
    <Svg width={size} height={size} fill="none" {...props}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 6.667v18.666M6.667 16h18.666"
      />
    </Svg>
  );
};

export const QRCode = (props: IconProps) => {
  const {color, size = getSize(96), ...rest} = props;

  return (
    <Svg width={size} height={size} fill="none" color={color} {...rest}>
      <G clipPath="url(#a)">
        <Path
          fill="url(#b)"
          d="M14.25 81.75h30v-30h-30v30Zm7.5-22.5h15v15h-15v-15ZM7.5 73.5H0V96h22.5v-7.5h-15v-15Zm74.25-59.25h-30v30h30v-30Zm-7.5 22.5h-15v-15h15v15ZM7.5 7.5h15V0H0v22.5h7.5v-15Zm44.25 74.25h7.5v-7.5h-7.5v7.5Zm30 0v-7.5h-15v7.5h15Zm6.75 6.75h-15V96H96V73.5h-7.5v15ZM73.5 0v7.5h15v15H96V0H73.5ZM14.25 44.25h30v-30h-30v30Zm7.5-22.5h15v15h-15v-15Zm52.5 45h7.5v-15h-15v7.5h7.5v7.5Zm-15-7.5v-7.5h-7.5v15h7.5v7.5h7.5v-15h-7.5Z"
        />
      </G>
      <Defs>
        <LinearGradient
          id="b"
          x1={48}
          x2={48}
          y1={96}
          y2={0}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#0396C5" />
          <Stop offset={1} stopColor="#3ADEED" />
        </LinearGradient>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h96v96H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const QRCodeIcon = (props: IconProps) => {
  const {size = getSize(19)} = props;

  return (
    <Svg width={size} height={18} fill="none" {...props}>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.813 3.375H4.438a.563.563 0 0 0-.563.563v3.374c0 .311.252.563.563.563h3.375c.31 0 .562-.252.562-.563V3.938a.563.563 0 0 0-.563-.562ZM7.813 10.125H4.438a.562.562 0 0 0-.563.563v3.374c0 .311.252.563.563.563h3.375c.31 0 .562-.252.562-.563v-3.374a.562.562 0 0 0-.563-.563ZM14.563 3.375h-3.376a.562.562 0 0 0-.562.563v3.374c0 .311.252.563.563.563h3.374c.311 0 .563-.252.563-.563V3.938a.562.562 0 0 0-.563-.562ZM10.625 10.125v2.25M10.625 14.625h2.25v-4.5M12.875 11.25h2.25M15.125 13.5v1.125"
      />
    </Svg>
  );
};

export const SmsIcon = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.primary,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
      />
    </Svg>
  );
};

export const Underline = (props: IconProps) => {
  const {
    width = getSize(196),
    height = getSize(11),
    color = colors.primary2,
    ...rest
  } = props;

  return (
    <Svg width={width} height={height} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={3}
        d="M2 9c15.662-1.303 31.419-1.228 47.114-1.748 29.93-.993 59.83-1.466 89.773-1.641 16.456-.096 32.635-.657 48.97-2.77 1.917-.249 7.659-.207 5.765-.62-2.296-.498-6.576 0-8.537 0-20.788 0-41.469 1.34-62.232 2.26-18.174.807-36.354.646-54.537.646-4.07 0-7.705.869-11.73.941-15.851.285-63.412.352-47.559.511 61.34.618 122.708 0 184.051 0"
      />
    </Svg>
  );
};

export const VerifyIcon = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.primary,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8.38 12 2.41 2.42 4.83-4.84"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.75 2.45c.69-.59 1.82-.59 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.18c-1.06 0-1.93-.87-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.2c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47l1.58-1.35Z"
      />
    </Svg>
  );
};

export const XOutline = (props: IconProps) => {
  const {
    width = getSize(58),
    height = getSize(69),
    color = colors.primary,
    ...rest
  } = props;

  return (
    <Svg width={width} height={height} fill="none" {...rest}>
      <Path
        stroke={color}
        d="m34.338 19.39.354.354.353-.354L52.922 1.513 67.477 16.07 49.6 33.945l-.353.354.353.354 17.453 17.452-14.948 14.948L34.653 49.6l-.354-.353-.354.353L16.07 67.477 1.513 52.922 19.39 35.045l.354-.353-.354-.354L1.937 16.885 16.885 1.937 34.338 19.39Z"
      />
    </Svg>
  );
};

export const SearchNormal = (props: IconProps) => {
  const {
    width,
    height,
    size = getSize(20),
    color = colors.neutralColor4,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.125 15a6.875 6.875 0 1 0 0-13.75 6.875 6.875 0 0 0 0 13.75ZM18.75 18.75 15 15"
      />
    </Svg>
  );
};

export const ChevronRightIcon = (props: IconProps) => {
  const {
    width,
    height,
    size = 24,
    color = colors.neutralColor5,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        fill={color}
        d="m13.172 12-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414 4.95-4.95Z"
      />
    </Svg>
  );
};

export const ChevronDownIcon = (props: IconProps) => {
  const {
    width,
    height,
    size = getSize(20),
    color = colors.primary,
    strokeWidth = 2,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
        d="m2.72 5.94 4.346 4.347a1.324 1.324 0 0 0 1.867 0l4.346-4.347"
      />
    </Svg>
  );
};

export const DownloadIcon = (props: IconProps) => {
  const {
    width,
    height,
    size = getSize(16),
    color = colors.neutralColor1,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4.668 7.555 3.333 3.334 3.334-3.334M8.002 10.889v-8.89M1.334 13.111a21.055 21.055 0 0 0 13.333 0"
      />
    </Svg>
  );
};

export const DocumentIcon = (props: IconProps) => {
  const {
    width,
    height,
    size = getSize(24),
    color = colors.neutralColor1,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M10 6h4c2 0 2-1 2-2 0-2-1-2-2-2h-4C9 2 8 2 8 4s1 2 2 2Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M16 4.02c3.33.18 5 1.41 5 5.98v6c0 4-1 6-6 6H9c-5 0-6-2-6-6v-6c0-4.56 1.67-5.8 5-5.98"
      />
    </Svg>
  );
};

export const TrashIcon = (props: IconProps) => {
  const {
    width,
    height,
    size = getSize(24),
    color = colors.neutralColor1,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5"
      />
    </Svg>
  );
};

export const CalendarIcon = (props: IconProps) => {
  const {
    width,
    height,
    size = getSize(24),
    color = colors.neutralColor3,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.695 13.7h.009M15.695 16.7h.009M11.995 13.7h.01M11.995 16.7h.01M8.294 13.7h.01M8.294 16.7h.01"
      />
    </Svg>
  );
};
export const CheckSquareIcon = (props: IconProps) => {
  const {
    width,
    height,
    size = getSize(32),
    color = colors.primary2,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeWidth={2}
        d="M2.667 16c0-6.285 0-9.428 1.953-11.38C6.572 2.666 9.715 2.666 16 2.666c6.286 0 9.428 0 11.381 1.952C29.334 6.572 29.334 9.715 29.334 16s0 9.428-1.953 11.38c-1.953 1.953-5.095 1.953-11.38 1.953-6.286 0-9.429 0-11.381-1.952C2.667 25.428 2.667 22.285 2.667 16Z"
      />
    </Svg>
  );
};

export const ClockCircleIcon = (props: IconProps) => {
  const {
    width,
    height,
    size = getSize(20),
    color = colors.primary,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <G stroke={color} strokeWidth={1.5} clipPath="url(#a)">
        <Circle cx={10} cy={10} r={8.333} />
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 6.667V10l2.083 2.083"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const CheckSquareInnerIcon = (props: IconProps) => {
  const {width, height, size = getSize(20), color = '#0ABA3B', ...rest} = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        fill={color}
        fillRule="evenodd"
        d="M10 18.333c-3.928 0-5.892 0-7.113-1.22-1.22-1.22-1.22-3.185-1.22-7.113 0-3.928 0-5.893 1.22-7.113 1.22-1.22 3.185-1.22 7.113-1.22 3.929 0 5.893 0 7.113 1.22 1.22 1.22 1.22 3.185 1.22 7.113 0 3.928 0 5.893-1.22 7.113-1.22 1.22-3.184 1.22-7.113 1.22ZM13.36 7.475a.625.625 0 0 1 0 .884l-4.167 4.166a.625.625 0 0 1-.884 0L6.642 10.86a.625.625 0 0 1 .884-.884l1.224 1.224 3.725-3.724a.625.625 0 0 1 .884 0Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export const ExportCSVIcon = (props: IconProps) => {
  const {
    width,
    height,
    size = getSize(24),
    color = colors.primary2,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <G fill={color} stroke={color} clipPath="url(#a)">
        <Path d="M23.484 10.97ZM.5 11Zm.017-.032ZM20.5 5.011v-.002.002ZM11.097 14.032l-.025-.01.005-.012.46.196-.44-.174Zm0 0a1.47 1.47 0 0 0-.101.59c0 .209.027.361.067.47v.001c.047.13.107.234.178.319.04.048.083.093.128.134m-.272-1.514v-.002l-.024-.01a1.523 1.523 0 0 0-.1.603c.004.163.03.322.086.471a1.147 1.147 0 0 0 .307.455m.003-.003-.003.003m.003-.003h.001m0 0 .333-.367-.333.367m-.003.003c.045.042.093.082.143.12.119.092.25.178.392.257l.006.004c.057.031.115.062.175.092.131.065.267.142.407.23a1.52 1.52 0 0 1 .287.235 1.291 1.291 0 0 0-.094-.094 2.729 2.729 0 0 0-.185-.153 3.504 3.504 0 0 0-.396-.255 4.56 4.56 0 0 0-.175-.093l-.007-.003a3.345 3.345 0 0 1-.403-.229 1.289 1.289 0 0 1-.147-.114m-.003.003.003-.003m1.574-2.054-.266.346c.146.066.277.17.393.309l.31-.405a1.74 1.74 0 0 0-.06-.06m-.377-.19c.12.064.221.147.308.248l.069-.059m-.377-.19.043-.057m-.043.058a1.21 1.21 0 0 0-.11-.052l.154-.006m.333.247.311-.265-.396-.305-.248.323m.333.247a1.576 1.576 0 0 0-.333-.247m0 0a1.496 1.496 0 0 0-.126-.061l.126.061Zm.107 3.785a1.803 1.803 0 0 1 .002.166c-.005.214-.043.39-.101.532a1.233 1.233 0 0 1-.265.41l-.003.002a1.037 1.037 0 0 1-.37.238c-.15.057-.311.086-.486.086h-.016a1.683 1.683 0 0 1-.913-.263m2.152-1.171-2.277.497c.109.132.236.241.381.326l-.256.348m2.152-1.171a1.556 1.556 0 0 1 .009.166c0 .186-.027.37-.089.54a1.202 1.202 0 0 1-.261.425l-.002.002a1.202 1.202 0 0 1-.88.374h-.016a1.76 1.76 0 0 1-.786-.187 1.917 1.917 0 0 1-.169-.093m2.194-1.227-2.83 1.245.403.298.233-.316m.042-.056a1.279 1.279 0 0 1-.298-.25l-.065.055c.098.095.205.179.321.25m.042-.055-.042.056M7.676 18.419l.022.016a1.633 1.633 0 0 1-.456-.46 2.814 2.814 0 0 1-.374-.848 4.333 4.333 0 0 1-.14-1.136c0-.421.048-.8.14-1.14v-.001c.092-.342.22-.623.376-.85.086-.126.18-.233.283-.323a1.932 1.932 0 0 0-.383.521c-.128.25-.218.53-.277.836v.001a5.137 5.137 0 0 0-.085.956c0 .329.028.645.085.947l.491-.093-.49.093c.057.306.146.587.276.838.132.255.306.475.532.643Zm0 0 .299-.401-.298.401Zm1.655-4.83-.282.342c.134.083.253.2.359.352l.326-.398a1.87 1.87 0 0 0-.073-.086m-.33-.21c.097.072.18.16.252.264l.078-.054m-.33-.21.038-.047m-.038.046a1.199 1.199 0 0 0-.195-.12m.525.33.333-.23-.386-.317-.24.291m.293.257a1.665 1.665 0 0 0-.292-.257m0 0a1.492 1.492 0 0 0-.21-.12m-.023.047.024-.047m-.024.047.023-.047m-.023.047a1.507 1.507 0 0 0-.689-.14c-.253 0-.472.058-.668.169l1.38-.076m0 0 .198-.402-.198.402m0 0a1.521 1.521 0 0 0-.712-.14c-.242.01-.47.076-.674.203l1.386-.063Zm-.107 4.607.275.324c.092-.08.173-.172.242-.276l-.517-.048Zm0 0c.137-.1.253-.22.347-.363M16.003 18.31h.252l-.047.19h-.509l-.046-.19H16.003Zm1.452-4.828-.254 1.02.212-1.02h.042Zm-2.982 0h.095l.541 2.604-.636-2.604Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export const ReloadIcon = (props: IconProps) => {
  const {
    width,
    height,
    size = getSize(20),
    color = colors.primary2,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.875 9.5a7.125 7.125 0 0 0 11.875 5.31l2.375-2.143m0 0v3.958m0-3.958h-3.958M17.125 9.5A7.125 7.125 0 0 0 5.25 4.19L2.875 6.332m0 0V2.375m0 3.958h3.958"
      />
    </Svg>
  );
};

export const ClipboardCheckIcon = (props: IconProps) => {
  const {
    width,
    height,
    size = getSize(16),
    color = colors.white,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeWidth={1.5}
        d="M10.667 2.667c1.45.008 2.235.072 2.747.584C14 3.837 14 4.78 14 6.666v4c0 1.885 0 2.828-.586 3.414-.586.585-1.528.585-3.414.585H6c-1.886 0-2.828 0-3.414-.585C2 13.494 2 12.55 2 10.665v-4c0-1.885 0-2.828.586-3.414.512-.512 1.297-.576 2.747-.584"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 8.933 7.143 10 10 7.333"
      />
      <Path
        stroke="#fff"
        strokeWidth={1.5}
        d="M5.333 2.333a1 1 0 0 1 1-1h3.333a1 1 0 0 1 1 1V3a1 1 0 0 1-1 1H6.333a1 1 0 0 1-1-1v-.667Z"
      />
    </Svg>
  );
};

export const OptionHorizontalIcon = (props: IconProps) => {
  const {color = colors.neutralColor4, ...rest} = props;

  return (
    <Svg width={10} height={2} fill="none" {...rest}>
      <Path
        fill={color}
        d="M1.426 1.944c.516 0 .924-.408.924-.972C2.35.396 1.942 0 1.426 0 .898 0 .502.396.502.972c0 .564.396.972.924.972ZM5 1.944c.516 0 .924-.408.924-.972C5.924.396 5.516 0 5 0c-.528 0-.924.396-.924.972 0 .564.396.972.924.972ZM8.574 1.944c.516 0 .924-.408.924-.972C9.498.396 9.09 0 8.574 0c-.528 0-.924.396-.924.972 0 .564.396.972.924.972Z"
      />
    </Svg>
  );
};

export const CheckCircleIcon = (props: IconProps) => {
  const {width, height, size = 16, color = colors.ok, ...rest} = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Rect width={15} height={15} x={0.5} y={0.5} stroke={color} rx={7.5} />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 8 1.665 1.5L11 6.5"
      />
    </Svg>
  );
};

export const CloseCircleIcon = (props: IconProps) => {
  const {width, height, size = 16, color = colors.ng, ...rest} = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Rect width={15} height={15} x={0.5} y={0.5} stroke={color} rx={7.5} />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5 11.16 5.66-5.66M10.66 11.16 5 5.5"
      />
    </Svg>
  );
};

export const CopyIcon = (props: IconProps) => {
  const {
    width,
    height,
    size = getSize(24),
    color = colors.white,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16v-3.1C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9Z"
      />
    </Svg>
  );
};

export const InventoryIcon = (props: IconProps) => {
  const {
    width,
    height,
    size = 20,
    color = colors.neutralColor5,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10.842 2.433 4.916 2.184c1.417.625 1.417 1.658 0 2.283l-4.916 2.183c-.559.25-1.475.25-2.034 0L3.892 6.9c-1.417-.625-1.417-1.658 0-2.283l4.916-2.184c.559-.25 1.475-.25 2.034 0Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 9.167c0 .7.525 1.508 1.167 1.791l5.658 2.517c.433.192.925.192 1.35 0l5.658-2.517c.642-.283 1.167-1.091 1.167-1.791"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2.5 13.333c0 .775.458 1.475 1.167 1.792l5.658 2.517c.433.191.925.191 1.35 0l5.658-2.517a1.964 1.964 0 0 0 1.167-1.792"
      />
    </Svg>
  );
};

export const NotificationOvertimeIcon = (props: IconProps) => {
  const {width, height, size = 30, color = '#0068C9', ...rest} = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        d="M12.591 7.278h4.815c2.407 0 2.407-1.204 2.407-2.408 0-2.407-1.203-2.407-2.407-2.407H12.59c-1.204 0-2.407 0-2.407 2.407 0 2.408 1.203 2.408 2.407 2.408Z"
      />
      <Path
        stroke={color}
        d="M19.814 4.894c4.009.217 6.019 1.698 6.019 7.199v7.222c0 4.815-1.204 7.222-7.223 7.222h-7.222c-6.018 0-7.222-2.407-7.222-7.222v-7.222c0-5.49 2.01-6.982 6.018-7.199"
      />
    </Svg>
  );
};

export const NotificationInstrumentIcon = (props: IconProps) => {
  const {width, height, size = 30, color = '#D00096', ...rest} = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        d="M12.436 7.38 8.319 9.885 6.441 6.803a2.418 2.418 0 0 1 .807-3.31 2.419 2.419 0 0 1 3.31.806l1.878 3.082ZM14.783 11.582l-3.804 2.31a4.789 4.789 0 0 0-1.818 6.236l2.468 5.031c.794 1.625 2.72 2.191 4.261 1.24l7.74-4.706c1.553-.94 1.926-2.901.855-4.358l-3.335-4.502c-1.444-1.95-4.152-2.6-6.367-1.251Z"
      />
      <Path
        stroke={color}
        d="m13.502 6.692-6.168 3.756 2.504 4.113 6.169-3.757-2.505-4.112ZM17.78 20.79l1.985 3.262M14.697 22.668l1.986 3.262M20.861 18.912l1.986 3.262"
      />
    </Svg>
  );
};

export const NotificationVehicleIcon = (props: IconProps) => {
  const {width, height, size = 30, color = '#D07000', ...rest} = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        d="M18.611 2.963V15a2.415 2.415 0 0 1-2.407 2.407H2.963v-9.63a4.813 4.813 0 0 1 4.815-4.814H18.61Z"
      />
      <Path
        stroke={color}
        d="M27.037 17.408v3.61a3.606 3.606 0 0 1-3.611 3.612h-1.204a2.414 2.414 0 0 0-2.407-2.408 2.415 2.415 0 0 0-2.408 2.408h-4.815a2.414 2.414 0 0 0-2.407-2.408 2.414 2.414 0 0 0-2.407 2.408H6.574a3.606 3.606 0 0 1-3.611-3.611v-3.611h13.24A2.415 2.415 0 0 0 18.612 15V6.574h2.215c.866 0 1.66.47 2.094 1.216l2.059 3.599h-1.553c-.662 0-1.204.542-1.204 1.204v3.61c0 .663.542 1.205 1.204 1.205h3.611Z"
      />
      <Path
        stroke={color}
        d="M10.185 27.037a2.407 2.407 0 1 0 0-4.815 2.407 2.407 0 0 0 0 4.815ZM19.814 27.037a2.407 2.407 0 1 0 0-4.815 2.407 2.407 0 0 0 0 4.815ZM27.035 15v2.408h-3.61a1.207 1.207 0 0 1-1.204-1.204v-3.611c0-.662.541-1.204 1.203-1.204h1.553L27.035 15Z"
      />
    </Svg>
  );
};

export const NotificationRequestTimesheetIcon = (props: IconProps) => {
  const {width, height, size = 24, color = '#292D32', ...rest} = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        d="M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6Z"
      />
      <Path
        stroke={color}
        d="M13.87 3.2a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26ZM15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 0 1-.88-2.12"
      />
    </Svg>
  );
};

export const LoginIcon = (props: IconProps) => {
  const {
    width,
    height,
    size = 24,
    color = colors.neutralColor1,
    ...rest
  } = props;

  return (
    <Svg width={width ?? size} height={height ?? size} fill="none" {...rest}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m11.68 14.62 2.56-2.56-2.56-2.56M4 12.06h10.17"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M12 4c4.42 0 8 3 8 8s-3.58 8-8 8"
      />
    </Svg>
  );
};
