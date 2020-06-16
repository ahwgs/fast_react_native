import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { Provider as AntdProvider } from '@ant-design/react-native';

import store from './store';
import AppContainer from './routes/AppContainer';
import { antdTheme } from './utils/theme';

interface IProps {}

interface IState {}

class App extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public render(): React.ReactNode {
    return (
      <Provider store={store}>
        <AntdProvider theme={antdTheme}>
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <AppContainer />
        </AntdProvider>
      </Provider>
    );
  }
}

export default App;
