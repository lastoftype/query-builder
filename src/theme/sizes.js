const sizes = {
  breakpoints: ['40em', '52em', '64em'],
  // Used for convenience, maps semantic sizes to array indices for other propertries
  sizes: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5
  },
  dimensions: [0, 6, 12, 16, 24, 36, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // Used for typographic scale
  fontSizes: ['10px', '12px', '13px', '14px', '16px', '20px', '24px', '36px', '48px'],
  // Line heights
  lineHeights: [1, 1.125, 1.25, 1.5, 1.75, 2, 2],
  // Font weights
  fontWeights: {
    regular: 400,
    normal: 500,
    semibold: 600,
    bold: 700
  },
  // Letter spacing
  letterSpacings: {
    normal: 'normal',
    caps: '0.25em'
  },
  // Border radius
  radii: ['1px', '2px', '3px', '4px', '6px', '8px', '10px'],
  // Borders
  borders: [0, '1px solid', '2px solid'],
  // Shadows
  shadows: ['0 0 1px 0 rgba(204,204,204,0.50), 0 1px 3px 0 rgba(222,222,222,0.80)', '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)', '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)']
}

export default sizes