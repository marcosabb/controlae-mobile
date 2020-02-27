import { hasIrEmitter, transmitProntoCode } from 'react-native-ir-manager'

export async function transmit (code) {
  try {
    if (code && await hasIrEmitter()) await transmitProntoCode(code)
  } catch (error) {
    console.log(error)
  }
}
