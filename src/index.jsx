import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import AppNavigator from './navigation';
import { styles } from './styles';

const App = () => {
  const [loaded] = useFonts({
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
  });


  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000000" /> 
      </View>
    )
  }
  return <AppNavigator />;
 
}

export default App;

