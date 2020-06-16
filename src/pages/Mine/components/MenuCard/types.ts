import { ImageSourcePropType } from 'react-native';

export interface MenuCardListItemTypes {
  key: any;
  routerName: string;
  count?: number;
  title: string;
  tipText?: string;
  icon: ImageSourcePropType;
}
