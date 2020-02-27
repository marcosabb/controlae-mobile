import { hasIrEmitter, transmitProntoCode } from 'react-native-ir-manager'

export async function transmit (code) {
  try {
    console.log(code)
    if (code && await hasIrEmitter()) await transmitProntoCode(code)
  } catch (error) {
    console.log(error)
  }
}
