import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  logo: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },

  content: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  textContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },

  titulo: {
    fontSize: 35,
    fontWeight: '500',
    color: '#3ca184'
  },

  desc: {
    fontSize: 22,
    fontWeight: '400',
    color: '#404040'
  },

  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#77d8b8',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  white: {
    fontSize: 22,
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



});