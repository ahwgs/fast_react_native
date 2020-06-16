import React, { useRef, useState, useEffect } from 'react';
import styles from './styles';
import {
  FlatList,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import { CustomFlatListType } from './propType';
import { LottieRefreshControl } from '../CustomRefreshControl';
import theme from '@/utils/theme';
import { px2rem, screenUtils } from '@/utils/px2rem';

const PaginationStatus = {
  firstLoad: 0, // 第一次加载
  waiting: 1, // 加载中
  allLoaded: 2, // 没有更多数据了
};

const CustomFlatList = (props: CustomFlatListType) => {
  const {
    refreshable,
    numColumns,
    renderItem,
    renderSeparator,
    renderHeader,
    renderEmptyView,
    waitingSpinnerText,
    allLoadedText,
    onFetch,
    firstLoader,
    style,
    renderFooter,
    contentContainerStyle,
    listStyle,
    loading,
    ...restProps
  } = props;

  const scrollView = useRef(null);
  const lottieRef = useRef(null);
  const _flatList = useRef(null);

  const [dataSource, setDataSource] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [rows, setRows] = useState([]);
  const [pageStatus, setPageStatus] = useState(PaginationStatus.firstLoad);
  const [isLoading, setIsLoading] = useState(false);

  const endFetch = async () => {
    // console.log('endRefresh()');
    console.log(' _flatList',  _flatList?.current?._listRef);
    await setIsLoading(false);
    _flatList?.current?._listRef?._scrollRef?.onRefreshEnd();
    console.log('lottieRef', lottieRef);
    if (lottieRef && lottieRef.current) {
      lottieRef.current.finishRefresh();
    }
  };

  useEffect(() => {
    if (loading){
      endFetch();
    }
  }, [loading]);

  const updateRows = async (arr, paginationStatus) => {
    if (arr) {
      setRows(arr);
      setDataSource(arr);
      setIsLoading(false);
      setPageStatus(paginationStatus);
    } else {
      setDataSource(rows.slice());
      setIsLoading(false);
      setPageStatus(paginationStatus);
    }
    endFetch();
  };

  const postPaginate = async (rows = []) => {
    await setPageNum(pageNum + 1);
    let mergedRows;
    let paginationStatus;
    if (rows.length === 0) {
      paginationStatus = PaginationStatus.allLoaded;
    } else {
      mergedRows = rows.concat(rows);
      paginationStatus = PaginationStatus.waiting;
    }
    updateRows(mergedRows, paginationStatus);
  };

  const postRefresh = (arr = [], pageLimit) => {
    let paginationStatus = PaginationStatus.waiting;
    if (arr.length < pageLimit) {
      paginationStatus = PaginationStatus.allLoaded;
    }
    updateRows(arr, paginationStatus);
  };

  const onPaginate = async () => {
    if (pageStatus !== PaginationStatus.allLoaded && !isLoading) {
      console.log('onPaginate()');
      await setPageStatus(PaginationStatus.waiting);
      onFetch && onFetch(pageNum + 1, postPaginate, endFetch);
    }
  };

  useEffect(() => {
    if (firstLoader) {
      onFetch && onFetch(pageNum, postRefresh, endFetch);
    }
  }, []);

  const _onRefresh = () => {
    onFetch && onFetch(1, postRefresh, endFetch);
  };

  const renderScrollComponent = () => {
    if (refreshable) {
      return (
        <ScrollView
          ref={scrollView}
          // contentContainerStyle={contentContainerStyle}
          refreshControl={
            <LottieRefreshControl ref={lottieRef} onRefresh={_onRefresh} />
          }
          {...props}
        />
      );
    }
    return <ScrollView {...props} ref={scrollView} />;
  };

  const renderSeparatorFun = () => {
    if (renderSeparator) {
      if (numColumns > 1) {
        return null;
      }
      return renderSeparator();
    }

    return null;
  };

  const paginationFetchingView = () => {
    return (
      <View style={styles.fetchingView}>
        <Text style={styles.paginationViewText}>{waitingSpinnerText}</Text>
      </View>
    );
  };

  const paginationWaitingView = () => {
    return (
      <View style={styles.paginationView}>
        <ActivityIndicator color={theme.primary} size={px2rem(20)} />
        <Text style={[styles.paginationViewText, { marginLeft: 5 }]}>
          {waitingSpinnerText}
        </Text>
      </View>
    );
  };

  const paginationAllLoadedView = () => {
    return (
      <View style={styles.paginationView}>
        <Text style={styles.allLoadedText}>{allLoadedText}</Text>
      </View>
    );
  };

  const renderFooterFun = () => {
    if (renderFooter) {
      return renderFooter();
    }
    if (pageStatus === PaginationStatus.firstLoad) {
      return paginationFetchingView();
    } else if (pageStatus === PaginationStatus.waiting) {
      return paginationWaitingView();
    } else if (pageStatus === PaginationStatus.waiting) {
      return paginationWaitingView();
    } else if (
      // getRows().length !== 0 &&
      pageStatus === PaginationStatus.allLoaded
    ) {
      return paginationAllLoadedView();
    }
    return null;
  };

  const renderEmptyViewFun = () => {
    if (!loading && renderEmptyView) {
      renderEmptyView();
    }
    return null;
  };

  const onEndReached = () => {
    console.log('onEndReached()');
    if (pageStatus === PaginationStatus.waiting) {
      onPaginate();
    }
  };
  console.log('123123123', rows, dataSource);

  return (
    <FlatList
      // contentContainerStyle={listStyle}
      style={style}
      renderScrollComponent={renderScrollComponent}
      key={numColumns}
      onEndReachedThreshold={0.1}
      {...restProps}
      ref={_flatList}
      data={dataSource}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparatorFun}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooterFun}
      ListEmptyComponent={renderEmptyViewFun}
      onEndReached={onEndReached}
      numColumns={numColumns}
    />
  );
};

CustomFlatList.defaultProps = {
  refreshable: true,
  numColumns: 1,
  waitingSpinnerText: '加载中...',
  allLoadedText: '没有更多数据了',
  renderEmptyView: null,
  firstLoader: true,
  renderFooter: null,
};

export default CustomFlatList;
