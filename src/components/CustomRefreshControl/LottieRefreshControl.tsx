import React, { PureComponent } from 'react';
import { Animated, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { SmartRefreshControl, AnyHeader } from 'react-native-smartrefreshlayout';
import { px2rem } from '@/utils/px2rem';
import IconConstant from '@/constant/iconConstant';

interface IProps {
  onRefresh?: any;
  aniUrl?: any;
  aniHeight?: number;
  aniWidth?: number;
}

interface IState {
  scale: any;
}

export default class LottieRefreshControl extends PureComponent<
  IProps,
  IState
> {
  private lottieView: any;
  private _refreshc: any;
  constructor(props) {
    super(props);
    this.state = {
      scale: new Animated.Value(0.1),
    };
    this.lottieView = null;
    this._refreshc = null;
  }

  _onRefresh = () => {
    let { onRefresh } = this.props;
    onRefresh && onRefresh();
    this.lottieView.play(this.state.scale.__getValue());
  };
  finishRefresh = params => {
    this._refreshc && this._refreshc.finishRefresh(params);
    this.lottieView.reset();
  };
  _onHeaderMoving = event => {
    let { percent } = event.nativeEvent;
    if (percent <= 1) {
      this.state.scale.setValue(event.nativeEvent.percent);
    }
  };
  render() {
    const {
      aniUrl = IconConstant.loadingAni,
      aniHeight = px2rem(50),
      aniWidth = px2rem(50),
    } = this.props;
    return (
      <SmartRefreshControl
        onHeaderMoving={this._onHeaderMoving}
        style={{ flex: 1, zIndex: 1 }}
        ref={ref => (this._refreshc = ref)}
        children={this.props.children}
        onRefresh={this._onRefresh}
        headerHeight={px2rem(80)}
        HeaderComponent={
          <AnyHeader>
            <Animated.View
              style={{
                height: px2rem(80),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <LottieView
                speed={2}
                ref={obj => (this.lottieView = obj)}
                style={{ width: aniWidth, height: aniHeight }}
                hardwareAccelerationAndroid
                progress={this.state.scale}
                source={aniUrl}
              />
              <Text>正在加载中...</Text>
            </Animated.View>
          </AnyHeader>
        }
      />
    );
  }
}
