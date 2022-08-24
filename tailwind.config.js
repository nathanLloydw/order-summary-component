module.exports = {
  content: [
      './*.html',
      './public/**/*.html',
      './public/**/*.js'
  ],
  theme: {
    extend: {
        fontFamily:
        {
            'red-hat':['Red Hat Display']
        },
        colors:
        {
            'pale-blue':'hsl(225, 100%, 94%)',
            'bright-blue':'hsl(245, 75%, 52%)',
            'very-pale-blue':'hsl(225, 100%, 98%)',
            'desaturated-blue':'hsl(224, 23%, 55%)',
            'dark-blue':'hsl(223, 47%, 23%)'
        },
        backgroundImage:
        {
        'desktop': "url('../images/pattern-background-desktop.svg')",
        'mobile': "url('../images/pattern-background-mobile.svg')"
        },
    },
  },
  plugins: [],
}
