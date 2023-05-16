import { StatusBar } from 'expo-status-bar';
import StackNavigator from './StackNavigator';
import { ModalPortal } from 'react-native-modals';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <StackNavigator />
      <ModalPortal />
    </>
  );
}


