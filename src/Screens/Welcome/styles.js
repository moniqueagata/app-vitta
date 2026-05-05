import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30
  },

  logo: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  content: {
    flex: 0.4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  texts: {
    width: '100%',
    alignItems: 'center',
    gap: 8,
  },

  titulo: {
    fontSize: 29,
    fontWeight: '500',
    color: '#354A53'
  },

  subtitulo: {
    fontSize: 17,
    fontWeight: '400',
    color: '#717171'
  },

  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#3CA184',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  },

  white: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff'
  },

  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5
  },

  link: {
    fontSize: 18,
    fontWeight: '400',
    color: '#bbb'
  },

  linkGreen: {
    fontSize: 18,
    fontWeight: '500',
    color: '#5ABC9E',
    textDecorationLine: 'underline'
  }



});