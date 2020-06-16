import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';
import { LottieRefreshControl } from '../CustomRefreshControl';
interface IProps extends ScrollViewProps {
  loading: boolean;
  onRefresh: any;
}
interface IState {}
class CustomScrollView extends React.PureComponent<IProps, IState> {
  lrRef: any;
  constructor(props) {
    super(props);
    this.lrRef = null;
  }

  _onRefresh = () => {
    const { loading, onRefresh } = this.props;
    onRefresh();
    if (!loading) {
      this.lrRef && this.lrRef.finishRefresh();
    }
  };

  render() {
    const { children, ...restProps } = this.props;
    return (
      <ScrollView
        refreshControl={
          <LottieRefreshControl
            ref={ref => (this.lrRef = ref)}
            onRefresh={this._onRefresh}
          />
        }
        {...restProps}>
        {children}
      </ScrollView>
    );
  }
}

export default CustomScrollView;
