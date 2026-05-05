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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 16,
  },

  profile: {
    width: 55,
    height: 55,
    backgroundColor: '#ccc',
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHeader: {
    fontSize: 21,
    fontWeight: '500',
    color: '#002118'
  },

  content: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 25,
    fontWeight: '500',
    color: '#00513F',
    marginVertical: 28
  },

  rowBtn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    gap: 18
  },

  button: {
    width: 185,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    gap: 17
  },

  textButton: {
    fontSize: 20,
    fontWeight: '500',
    color: '#1E333C'
  },

  navbar: {
    width: '100%',
    height: 88,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 100
  },

  navButton: {
    width: 70,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  navLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ccc',
    letterSpacing: 0.5
  }
  

});