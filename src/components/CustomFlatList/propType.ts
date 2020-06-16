/**
 * FlatList类型
 */
export interface CustomFlatListType {
  refreshable?: boolean; // 是否开启下拉刷新
  numColumns?: number;
  renderItem: any; // 每行渲染函数
  renderSeparator?: any; // 是否开启分隔符
  renderHeader?: any; // 渲染头部
  renderFooter?: any;
  waitingSpinnerText?: string;
  allLoadedText?: string;
  renderEmptyView?: any;
  onFetch: any;
  firstLoader?: boolean;
  contentContainerStyle?: any;
  style?: any;
  listStyle?: any;
  loading?: boolean;
}
