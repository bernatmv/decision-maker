import { Text } from '@rneui/base';
import { StyleSheet, View } from 'react-native';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Tab One</Text>
  </View>
)

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
