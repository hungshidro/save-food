import {JP_RESOURCE} from 'localization/locales/ja';
import {SvgProps} from 'react-native-svg';

export type IconProps = SvgProps & {
  size?: number;
  color?: string;
};
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 'ultralight'
  | 'thin'
  | 'light'
  | 'medium'
  | 'regular'
  | 'semibold'
  | 'condensedBold'
  | 'condensed'
  | 'heavy'
  | 'black'
  | undefined;

export type TDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type TJustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type TAlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch';

export type TLiteralUnion<T extends U, U = string> =
  | T
  | (Record<never, never> & U);

type GenNode<
  K extends string | number,
  IsRoot extends boolean,
> = IsRoot extends true
  ? `${K}`
  : `.${K}` | (K extends number ? `[${K}]` | `.[${K}]` : never);

export type TObjectKeyPaths<
  T extends object,
  IsRoot extends boolean = true,
  K extends keyof T = keyof T,
> = K extends string | number
  ?
      | GenNode<K, IsRoot>
      | (T[K] extends object
          ? `${GenNode<K, IsRoot>}${TObjectKeyPaths<T[K], false>}`
          : never)
  : never;

export type TKeyTranslation = TLiteralUnion<
  TObjectKeyPaths<typeof JP_RESOURCE>
>;

// Define a generic function to get the type of an array property
export type ArrayElementType<T, S extends keyof T> = T[S] extends (infer U)[]
  ? U
  : never;

export type IAppResponse<T, K extends string = 'data'> = {[P in K]?: T} & {
  data?: T;
  message: string;
  success: boolean;
  title?: string;
  code: number;
};

export interface ILink {
  url: null | string;
  label: string;
  active: boolean;
}

export interface IPageResponse<T> {
  data: T[];
  paging: IPagingData;
}

export interface IPagingData {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: ILink[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}

export type ICalendarDay<T = any, K extends string = 'users'> = {
  [P in K]?: T;
} & {
  month: number;
  year: number;
  date: number;
  day: number;
  dayString: string;
  daysInPrevMonth: number;
  isCurrentMonth?: boolean;
};

export interface ILabelValue<T = any> {
  label?: string;
  value?: T;
}

export type IBaseItem<T extends object = {}> = T & {
  id: number;
  name: string;
};
