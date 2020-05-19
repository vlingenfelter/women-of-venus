import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"
import oceanBeachTheme from 'typography-theme-ocean-beach'

oceanBeachTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

// const typography = new Typography(Wordpress2016)

const typography = new Typography({
	googleFonts: [
	  {
	    name: 'Roboto Mono',
	    styles: [
	      '700',
	    ],
	  },
	  {
	    name: 'Merriweather',
	    styles: [
	      '400',
	      '400i',
	      '700',
	      '700i',
	    ],
	  },
	],
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Roboto Mono', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'serif'],
  // See below for the full list of options.
})

// const typography = new Typography(oceanBeachTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
