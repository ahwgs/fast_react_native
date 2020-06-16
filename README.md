## fast_react-native

基于 `react-native+dvajs+antd-mobile-rn+react-navigation@5.x+axios+typescript`
开发的通用`react-native`模板，方便快速开发

该项目基于本人之前仿写的一个生鲜 app，从中抽离基础部分作为模板方便新项目开发

### 功能

- `AuthLoginButton`组件，可传入要跳转的页面`routeName`，统一登录跳转逻辑，登录之后才可访问。

- 自定义`NavigationBar`,在`routerConfig.ts` 配置 `header:none` 后，再页面内可使用自定义导航，默认子页面全局导航

- 使用`dva-core` `dva-loading` 管理全局状态以及`loading` 状态

- 封装自定义滚动容易及下拉刷新交互`CustomRefreshControl` `CustomFlatList`

### 注意事项

在开发前，需要重命名 `安卓` 以及`ios` 包名
