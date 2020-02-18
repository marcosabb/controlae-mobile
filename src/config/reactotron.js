import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-community/async-storage'

if (__DEV__) {
  Reactotron
    .setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative()
    .connect()
}
