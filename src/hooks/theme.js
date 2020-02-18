import { useContext } from 'react'

import { ThemeContext } from '~/contexts/theme'

export default function useTheme () {
  return useContext(ThemeContext)
}
