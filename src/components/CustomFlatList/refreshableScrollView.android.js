import React from 'react';
import { Dimensions, ScrollView } from 'react-native';

const { height } = Dimensions.get('window');
const RefreshStatus = {
  pullToRefresh: 0,
  releaseToRefresh: 1,
  refreshing: 2,
};

export default class RefreshableScrollView extends ScrollView {
  static defaultProps = {
    horizontal: false,
    scrollEnabled: true,
    header: null,
    refreshable: true,
    refreshableTitlePull: 'Pull to refresh',
    refreshableTitleRefreshing: 'Loading...',
    refreshableTitleRelease: 'Release to load',
    customRefreshView: null,
    displayDate: false,
    dateFormat: 'yyyy-MM-dd hh:mm',
    dateTitle: 'Last updated: ',
    arrowImageStyle: undefined,
    refreshViewStyle: undefined,
    dateStyle: undefined,
    refreshViewHeight: 80,
    insideOfUltimateListView: false,
  };

  _offsetY = 0;
  _isRefreshing = false;
  _dragFlag = false;

  constructor(props) {
    super(props);
    this.state = {
      refreshStatus: RefreshStatus.refreshing,
      showRefreshHeader: false,
    };
  }

  onScroll = event => {
    // console.log('onScroll()');
    const { y } = event.nativeEvent.contentOffset;
    const { refreshViewHeight } = this.props;
    if (y <= refreshViewHeight) {
      this._offsetY = y - refreshViewHeight;
    }
    if (this._dragFlag) {
      if (!this._isRefreshing) {
        if (y <= 10) {
          if (this.state.refreshStatus !== RefreshStatus.releaseToRefresh) {
            this.setState({
              refreshStatus: RefreshStatus.releaseToRefresh,
            });
          }
        } else if (this.state.refreshStatus !== RefreshStatus.pullToRefresh) {
          this.setState({
            refreshStatus: RefreshStatus.pullToRefresh,
          });
        }
      }
    } else if (y <= 5) {
      setTimeout(
        () =>
          this._scrollview.scrollTo({
            x: 0,
            y: refreshViewHeight,
            animated: false,
          }),
        100,
      );
    }
    if (this.props.onScroll) {
      this.props.onScroll(event);
    }
  };

  onScrollBeginDrag = event => {
    // console.log('onScrollBeginDrag()');
    this._dragFlag = true;
    const { refreshViewHeight } = this.props;
    this._offsetY = event.nativeEvent.contentOffset.y - refreshViewHeight;
    if (this.props.onScrollBeginDrag) {
      this.props.onScrollBeginDrag(event);
    }
  };

  onScrollEndDrag = event => {
    this._dragFlag = false;
    const { y } = event.nativeEvent.contentOffset;
    const { refreshViewHeight } = this.props;
    this._offsetY = y - refreshViewHeight;
    // console.log('onScrollEndDrag()' + y);
    if (!this._isRefreshing) {
      if (this.state.refreshStatus === RefreshStatus.releaseToRefresh) {
        this._isRefreshing = true;
        this.setState({
          refreshStatus: RefreshStatus.refreshing,
        });
        this._scrollview.scrollTo({ x: 0, y: 0, animated: true });
        if (this.props.insideOfUltimateListView) {
          this.props.onRefresh();
        } else {
          this.props.onRefresh(() => {
            this.onRefreshEnd();
          });
        }
      } else if (y <= refreshViewHeight) {
        this._scrollview.scrollTo({ x: 0, y: refreshViewHeight, animated: true });
      }
    } else if (y <= refreshViewHeight) {
      this._scrollview.scrollTo({ x: 0, y: 0, animated: true });
    }
    if (this.props.onScrollEndDrag) {
      this.props.onScrollEndDrag(event);
    }
  };

  scrollTo = option => {
    this._scrollview.scrollTo(option);
  };

  scrollToEnd = option => {
    this._scrollview.scrollToEnd(option);
  };

  onRefreshEnd = () => {
    // console.log('onRefreshEnd()');
    if (this.state.refreshStatus === RefreshStatus.refreshing) {
      this._isRefreshing = false;
      this.setState({
        showRefreshHeader: true,
      });
      setTimeout(() => {
        if (this._scrollview.scrollTo) {
          this._scrollview.scrollTo({
            x: 0,
            y: this.props.refreshViewHeight,
            animated: true,
          });
        }
        this.setState({
          refreshStatus: RefreshStatus.pullToRefresh,
        });
      }, 1000);
    }
  };

  render() {
    return (
      <ScrollView
        ref={c => (this._scrollview = c)}
        {...this.props}
        scrollEventThrottle={16}
        onScroll={this.onScroll}
        contentContainerStyle={{ minHeight: height }}
        // onMomentumScrollEnd={this.onScrollEndDrag}
        onScrollEndDrag={this.onScrollEndDrag}
        onScrollBeginDrag={this.onScrollBeginDrag}>
        {this.props.children}
      </ScrollView>
    );
  }
}
