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
  },

  header: {
    width: '100%',
    height: 88,
    justifyContent:'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 22,
    flexDirection: 'row',
    gap: 20
  },

  msgHeader: {
    width: '80%',
    justifyContent: 'center',
  },

  nome: {
    fontSize: 25,
    fontWeight: '500',
    color: '#00382A',
  },

  desc: {
    fontSize: 16,
    fontWeight: '400',
    color: '#071E27',
  },

  content: {
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 22,
    marginTop: 20,
    gap: 35,
  },

  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 35
  },

  button: {
    width: 170,
    height: 170,
    backgroundColor: '#fff',
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#999999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,  
    gap: 15
  },

  circle: {
    width: 70,
    height: 70,
    backgroundColor: '#effff8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%'
  },

  textButton: {
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 0.5,
    color: '#006B54'
  },


});