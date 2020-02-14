const shared = (colors) => ({
  colors: {
    danger: '#e74c3c',
    white: '#fff',
    ...colors
  },

  spacing: {
    xs: '6px',
    sm: '12px',
    default: '20px',
    md: '28px',
    lg: '34px'
  },

  radius: {
    xs: '4px',
    sm: '8px',
    default: '16px',
    md: '32px',
    lg: '64px'
  }
})

export default {
  light: shared({
    background: '#fff',
    text: '#171822',
    ripple: 'rgba(23, 24, 34, .08)',
    placeholder: 'rgba(23, 24, 34, .5)',
    grey: '#f1f3f6'
  }),

  dark: shared({
    background: '#171822',
    text: '#fff',
    ripple: 'rgba(255, 255, 255, .08)',
    placeholder: 'rgba(255, 255, 255, .5)',
    grey: '#212330'
  })
}
