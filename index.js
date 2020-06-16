import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src/App';
import './src/core/core'; // 引入核心文件
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
