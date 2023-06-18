import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: Platform.OS === 'android' ? 40 : 0,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtContainer: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 8,
  },
  txt: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
