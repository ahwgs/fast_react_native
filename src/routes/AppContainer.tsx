import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import getScreenOptions from './getScreenOptions';
import routerConfig, { tabConfig } from './routerConfig';
import theme from '@/utils/theme';
import { navigationRef } from '@/utils/navigation';
import MyTabBar from './MyTabBar';
import getActiveRoute from './getActiveRoute';
import { useDispatch } from 'react-redux';

const RootStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomTabScreen = () => (
  <BottomTab.Navigator
    tabBar={props => <MyTabBar {...props} />}
    tabBarOptions={{
      activeTintColor: theme.primary,
      inactiveTintColor: 'gray',
    }}>
    {tabConfig &&
      tabConfig.map(tab => (
        <BottomTab.Screen
          name={tab.name}
          component={tab.screen}
          key={tab.name}
          options={{ title: tab.title }}
        />
      ))}
  </BottomTab.Navigator>
);

/**
 * 路由配置
 */
const StackNavigatorConfig = {
  initialRouteName: 'Bootstrap',
  screenOptions: getScreenOptions(),
};

export default () => {
  const routeNameRef = React.useRef(null);
  const dispatch = useDispatch();
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={state => {
        const previousRouteName = routeNameRef.current;
        const currentRoute = getActiveRoute(state);
        if (previousRouteName !== currentRoute.name) {
          dispatch({
            type: 'user/fetchUserInfo',
          });
        }
        // Save the current route name for later comparision
        routeNameRef.current = currentRoute.name;
      }}>
      <RootStack.Navigator {...StackNavigatorConfig}>
        <RootStack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={BottomTabScreen}
        />
        {routerConfig &&
          routerConfig.map(router => {
            console.log('12312312', router);
            return (
              <RootStack.Screen
                key={router.name}
                name={router.name}
                component={router.screen}
                options={{
                  headerTitle: router.title,
                  headerShown: router.header === 'none' ? false : true,
                }}
              />
            );
          })}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
