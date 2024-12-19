import {IconProps} from 'interfaces';
import * as React from 'react';
import Svg, {Circle, Path, Rect} from 'react-native-svg';
import {colors, getSize} from 'themes';

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

export const ArrowBack = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      // className="ionicon"
      viewBox="0 0 512 512"
      color={color}
      width={width ?? size}
      height={height ?? size}
      {...rest}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M244 400 100 256l144-144M120 256h292"
      />
    </Svg>
  );
};

export const Search = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={width ?? size}
      height={height ?? size}
      color={color}
      {...rest}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"
      />
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M338.29 338.29 448 448"
      />
    </Svg>
  );
};

export const Home = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      viewBox="0 0 512 512"
      width={width ?? size}
      height={height ?? size}
      color={color}
      {...rest}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"
      />
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
      />
    </Svg>
  );
};

export const Plus = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      width={width ?? size}
      height={height ?? size}
      color={color}
      viewBox="0 0 512 512"
      {...rest}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 112v288m144-144H112"
      />
    </Svg>
  );
};

export const PlusCircle = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      width={width ?? size}
      height={height ?? size}
      color={color}
      viewBox="0 0 512 512"
      {...rest}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      />
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 176v160m80-80H176"
      />
    </Svg>
  );
};

export const GameController = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      width={width ?? size}
      height={height ?? size}
      color={color}
      viewBox="0 0 512 512"
      {...rest}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M467.51 248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5 91.5 0 0 0 352 96c-26.89 0-48.11 16-96 16s-69.15-16-96-16a99.09 99.09 0 0 0-27.2 3.66C89 112.59 61.94 165.7 43.33 248.83c-19 84.91-15.56 152 21.58 164.88 26 9 49.25-9.61 71.27-37 25-31.2 55.79-40.8 119.82-40.8s93.62 9.6 118.66 40.8c22 27.41 46.11 45.79 71.42 37.16 41.02-14.01 40.44-79.13 21.43-165.04z"
      />
      <Circle cx={292} cy={224} r={20} />
      <Path d="M336 288a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288z" />
      <Circle cx={336} cy={180} r={20} />
      <Circle cx={380} cy={224} r={20} />
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M160 176v96m48-48h-96"
      />
    </Svg>
  );
};

export const Funnel = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      width={width ?? size}
      height={height ?? size}
      color={color}
      viewBox="0 0 512 512"
      {...rest}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="m35.4 87.12 168.65 196.44A16.07 16.07 0 0 1 208 294v119.32a7.93 7.93 0 0 0 5.39 7.59l80.15 26.67A7.94 7.94 0 0 0 304 440V294a16.07 16.07 0 0 1 4-10.44L476.6 87.12A14 14 0 0 0 466 64H46.05A14 14 0 0 0 35.4 87.12z"
      />
    </Svg>
  );
};

export const Refresh = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      width={width ?? size}
      height={height ?? size}
      color={color}
      viewBox="0 0 512 512"
      {...rest}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160"
      />
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="m256 58 80 80-80 80"
      />
    </Svg>
  );
};

export const Restaurant = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      width={width ?? size}
      height={height ?? size}
      color={color}
      viewBox="0 0 512 512"
      {...rest}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
        d="m57.49 47.74 368.43 368.43a37.28 37.28 0 0 1 0 52.72 37.29 37.29 0 0 1-52.72 0l-90-91.55a32 32 0 0 1-9.2-22.43v-5.53a32 32 0 0 0-9.52-22.78l-11.62-10.73a32 32 0 0 0-29.8-7.44 48.53 48.53 0 0 1-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74z"
      />
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="m400 32-77.25 77.25A64 64 0 0 0 304 154.51v14.86a16 16 0 0 1-4.69 11.32L288 192m32 32 11.31-11.31a16 16 0 0 1 11.32-4.69h14.86a64 64 0 0 0 45.26-18.75L480 112m-40-40-80 80M200 368l-99.72 100.28a40 40 0 0 1-56.56 0h0a40 40 0 0 1 0-56.56L128 328"
      />
    </Svg>
  );
};

export const Trash = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      width={width ?? size}
      height={height ?? size}
      color={color}
      viewBox="0 0 512 512"
      {...rest}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="m112 112 20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
      />
      <Path
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M80 112h352"
      />
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40m-64 64v224m-72-224 8 224m136-224-8 224"
      />
    </Svg>
  );
};

export const Telescope = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      width={width ?? size}
      height={height ?? size}
      color={color}
      viewBox="0 0 512 512"
      {...rest}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="m39.93 327.56-4.71-8.13A24 24 0 0 1 44 286.64l86.87-50.07a16 16 0 0 1 21.89 5.86l12.71 22a16 16 0 0 1-5.86 21.85l-86.85 50.07a24.06 24.06 0 0 1-32.83-8.79z"
      />
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M170.68 273.72 147.12 233a24 24 0 0 1 8.8-32.78l124.46-71.75a16 16 0 0 1 21.89 5.86l31.57 54.59a16 16 0 0 1-5.84 21.84L203.51 282.5a24 24 0 0 1-32.83-8.78zm171.17-71.51-46.51-80.43a24 24 0 0 1 8.8-32.78l93.29-53.78A24.07 24.07 0 0 1 430.27 44l46.51 80.43a24 24 0 0 1-8.8 32.79L374.69 211a24.06 24.06 0 0 1-32.84-8.79zM127.59 480l96.14-207.99m48.07-15.99L368.55 448"
      />
    </Svg>
  );
};

export const Document = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      width={width ?? size}
      height={height ?? size}
      color={color}
      viewBox="0 0 512 512"
      {...rest}>
      <Rect
        width={320}
        height={416}
        x={96}
        y={48}
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={32}
        rx={48}
        ry={48}
      />
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M176 128h160m-160 80h160m-160 80h80"
      />
    </Svg>
  );
};

export const Setting = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      width={width ?? size}
      height={height ?? size}
      color={color}
      viewBox="0 0 512 512"
      {...rest}>
      <Path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M262.29 192.31a64 64 0 1 0 57.4 57.4 64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22 155.3 155.3 0 0 1-21.46-12.57 16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22 155.3 155.3 0 0 1 21.46 12.57 16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z"
      />
    </Svg>
  );
};

export const HomeFilled = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      width={width ?? size}
      height={height ?? size}
      color={color}
      viewBox="0 0 512 512"
      {...rest}>
      <Path d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z" />
      <Path d="m490.91 244.15-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z" />
    </Svg>
  );
};

export const GameControllerFilled = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      width={width ?? size}
      height={height ?? size}
      color={color}
      viewBox="0 0 512 512"
      {...rest}>
      <Path d="M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 0 0 352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 0 0-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0 0 18.64 3.22c29.93 0 53.93-24.93 70.33-45.34 18.53-23.1 40.22-34.82 107.34-34.82 59.95 0 84.76 8.13 106.19 34.82 13.47 16.78 26.2 28.52 38.9 35.91 16.89 9.82 33.77 12 50.16 6.37 25.82-8.81 40.62-32.1 44-69.24 2.57-28.48-1.39-65.89-12.12-114.37zM208 240h-32v32a16 16 0 0 1-32 0v-32h-32a16 16 0 0 1 0-32h32v-32a16 16 0 0 1 32 0v32h32a16 16 0 0 1 0 32zm84 4a20 20 0 1 1 20-20 20 20 0 0 1-20 20zm44 44a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288zm0-88a20 20 0 1 1 20-20 20 20 0 0 1-20 20zm44 44a20 20 0 1 1 20-20 20 20 0 0 1-20 20z" />
    </Svg>
  );
};

export const SettingFilled = (props: IconProps) => {
  const {
    size = getSize(24),
    width,
    height,
    color = colors.neutralColor3,
    ...rest
  } = props;
  return (
    <Svg
      width={width ?? size}
      height={height ?? size}
      color={color}
      viewBox="0 0 512 512"
      {...rest}>
      <Circle cx={256} cy={256} r={48} />
      <Path d="m470.39 300-.47-.38-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.59 1.59 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56-5.57 39.67a16 16 0 0 1-8.13 11.82 175.21 175.21 0 0 0-10 5.82 15.92 15.92 0 0 1-14.43 1.27l-37.13-15-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38 31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.59 1.59 0 0 1 .13.22 26.86 26.86 0 0 0 32.45 11.3l.35-.13 37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56 5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95.35.14a26.85 26.85 0 0 0 32.48-11.34 2.53 2.53 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11zm-134.48-40.24a80 80 0 1 1-83.66-83.67 80.21 80.21 0 0 1 83.66 83.67z" />
    </Svg>
  );
};
