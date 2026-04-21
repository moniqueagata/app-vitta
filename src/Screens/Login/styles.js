import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  header: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 22,
  },

  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    paddingBottom: 22,
  },

  logo: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4
  },

  titulo: {
    fontSize: 30,
    fontWeight: '500',
    color: '#3ca184'
  },

  desc: {
    fontSize: 20,
    fontWeight: '400',
    color: '#404040'
  },

  inputContainer: {
    width: '95%',
    justifyContent: 'center',
    gap: 10
  },

  label: {
    fontSize: 20,
    fontWeight: '500',
    color: '#3ca184',
    paddingLeft: 8
  },

  input: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#ccc',
    marginBottom: 8,
    outlineStyle: 'none',
    fontSize: 18,
    paddingHorizontal: 20
  },

  button: {
    width: '80%',
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