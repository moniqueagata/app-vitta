import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  scroll: {
    width: '100%',
    paddingVertical: 20
  },

  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30
  },

  textHeader: {
    fontSize: 30,
    fontWeight: '700',
    color: '#354A53'
  },

  session: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },

  botoes: {
    width: '100%',
    flexDirection: 'row',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 44
  },

  button: {
    backgroundColor: '#fff',
    width: 160,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#ddd'
  },

  textButton: {
    color: '#515151',
    fontSize: 19,
    fontWeight: '400',
    paddingTop: 18
  },


});