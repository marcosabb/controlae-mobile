import IRManager from 'react-native-ir-manager'

export async function transmit (code) {
  try {
    await IRManager.transmitProntoCode(code)
  } catch (error) {
    console.log(error)
  }
}
