import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  scroll: {
    width: '100%',
  },

  header: {
    width: '100%',
    height: 88,
    justifyContent:'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 20
  },

  buttonHeader: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHeader: {
    fontSize: 27,
    fontWeight: '500',
    color: '#00382A',
  },

  session: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 25 
  },

  titulo: {
    fontSize: 23,
    fontWeight: '500',
    marginTop: 22,
    marginBottom: 12,
    color: '#354A53'
  },

  content: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '80%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C4C7C7',
    marginBottom: 6,
    paddingLeft: 20,
    fontSize: 17,
    color: '#414141'
  },

  button: {
    width: 200,
    height: 55,
    backgroundColor: '#16866B',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginVertical: 26
  },

  textButton: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff'
  },

  card: {
    backgroundColor: '#fff',
    width: '100%',
    minHeight: 500,
    borderRadius: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBottom: 10,
    shadowColor: "#909090",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity:  0.21,
    shadowRadius: 6.65,
    elevation: 9,
    marginBottom: 26,
    paddingLeft: 26,
    paddingVertical: 23,
    gap: 9
  },

  nome: {
    fontSize: 37,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 15,
    color: '#16866B'
  },

  info: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
    paddingLeft: 8
  },

  label: {
    fontSize: 25,
    fontWeight: '400',
    letterSpacing: 0.5,
    color: '#212121'
  },

  valor: {
    fontSize: 25,
    fontWeight: '400',
    color: '#354A53'
  },

});