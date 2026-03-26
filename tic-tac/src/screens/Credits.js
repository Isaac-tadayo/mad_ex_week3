import { View, Text, StyleSheet } from 'react-native';
import TButton from '../components/TButton';
import colors from '../constants/color';

export default function Credits({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Credits</Text>
      <Text style={styles.credit}>Developed by Isaac</Text>
      <Text style={styles.credit}>Built with React Native</Text>
      <Text style={styles.credit}>Week 3 Lab Exercise</Text>
      <TButton title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.dark,
  },
  credit: {
    fontSize: 16,
    marginBottom: 10,
    color: colors.dark,
  },
});