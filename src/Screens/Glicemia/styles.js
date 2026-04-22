import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFA',
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
    paddingTop: 15
  },

  card: {
    backgroundColor: '#fff',
    width: '85%',
    height: 200,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#909090",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity:  0.21,
    shadowRadius: 6.65,
    elevation: 9,
    marginBottom: 26,
  },

  row: {
    width: '90%',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingLeft: 10
  },

  label: {
    fontSize: 29,
    fontWeight: '700',
    color: '#657A85'
  },

  input: {
    width: '55%',
    height: 50,
    backgroundColor: 'transparent',
    fontSize: 23,
    fontWeight: '500',
    color: '#616161',
    paddingLeft: 20,
    outlineStyle: 'none'
  },

  desc: {
    fontSize: 17,
    fontWeight: '500',
    color: '#919191'
  },

  button: {
    width: 200,
    height: 50,
    backgroundColor: '#16866B',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginBottom: 26
  },

  textButton: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff'
  },

  titulo: {
    fontSize: 30,
    fontWeight: '700',
    color: '#16866B',
    letterSpacing: 0.4
  },

  cardHistorico: {
    width: '90%',
    height: 130,
    backgroundColor: '#fff',
    shadowColor: "#909090",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity:  0.21,
    shadowRadius: 6.65,
    elevation: 9,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 11,
    marginVertical: 22,
    paddingHorizontal: 20,
    paddingVertical: 13
  },

  headerCard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  tag: {
    width: 130,
    height: 33,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },

  textData: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.7,
  },

  textTipo: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff'
  },

  bodyCard: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 22
  },

  textValor: {
    fontSize: 30,
    fontWeight: '400',
  },

  textSmall: {
    fontSize: 20,
    fontWeight: '500',
  },

  textObs: {
    fontSize: 25,
    paddingLeft: 80,
    fontWeight: '500'
  },

});