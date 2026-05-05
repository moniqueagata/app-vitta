import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  },

  sessionFiltro: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },

  scroll: {
    width: '100%',
  },

  scrollContent: {
    gap: 15,
    paddingHorizontal: 11,
    alignItems: 'center'
  },

  button: {
    minWidth: 150,
    height: 47,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingHorizontal: 5
  },

  textButton: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.5,
    color: '#fff'
  },

  card: {
    backgroundColor: '#fff',
    width: '85%',
    minHeight: 140,
    borderRadius: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
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
    paddingTop: 10
  },

  tituloCard: {
    fontSize: 25,
    fontWeight: '500',
    color: '#5ABC9E',
    marginBottom: 15,
    paddingLeft: 22
  },

  textVacina: {
    fontSize: 19,
    fontWeight: '400',
    color: '#657A85',
    marginBottom: 7,
    paddingLeft: 27,
  }


});