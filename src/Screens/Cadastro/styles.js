import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingHorizontal: 20
  },

  header: {
    width: '100%',
    height: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  barraProgresso: {
    width: '90%',
    height: 5,
    backgroundColor: '#ddd',
    borderRadius: 10
  },

  logo: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  texts: {
    width: '100%',
    alignItems: 'center',
    gap: 5,
    marginBottom: 12
  },

  titulo: {
    fontSize: 28,
    fontWeight: '500',
    color: '#354A53'
  },

  subtitulo: {
    fontSize: 15,
    fontWeight: '400',
    color: '#717171'
  },

  containerInput: {
    width: '95%',
    justifyContent: 'center',
    gap: 10
  },

  label: {
    fontSize: 18,
    fontWeight: '500',
    color: '#3CA184',
    paddingLeft: 8,
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F8FAFA',
    borderRadius: 10,
    // borderWidth: 1,
    // borderColor: '#EFF1F1',
    outlineStyle: 'none',
    fontSize: 16,
    paddingHorizontal: 20,
    color: '#606060',
    marginBottom: 9
  },

  button: {
    width: '77%',
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
    fontSize: 17,
    fontWeight: '400',
    color: '#aaa'
  },

  linkGreen: {
    fontSize: 17,
    fontWeight: '500',
    color: '#5ABC9E',
    textDecorationLine: 'underline'
  }


});