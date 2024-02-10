import createPlugin from 'tailwindcss/plugin.js';
import theme from "./theme.js";

/** @type { import('tailwindcss/types/config').PluginCreator} */
const pluginCreator = api => {

  const { theme, matchUtilities, addUtilities } = api;

  const dynamicUtils = {
    'animate-delay': { css: 'animation-delay', values: theme('animationDelay') },
    'animate-duration': { css: 'animation-duration', values: theme('animationDuration') }
  }

  Object.entries(dynamicUtils).forEach(([util, { css, values }]) => {
    matchUtilities({
      [util]: value => ({
        [css]: value
      })
    }, {
      values
    });
  });

  addUtilities({
    '.animate-ease': {
      'animation-timing-function': 'ease'
    },
    '.animate-ease-in': {
      'animation-timing-function': 'ease-in'
    },
    '.animate-ease-out': {
      'animation-timing-function': 'ease-out'
    },
    '.animate-ease-in-out': {
      'animation-timing-function': 'ease-in-out'
    },
    '.animate-linear': {
      'animation-timing-function': 'linear'
    },
    '.animate-bounce': {
      'animation-timing-function': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
    }
  });
}
/** @type { import('tailwindcss/types/config').Config} */
const pluginConfig = { theme }

export default createPlugin(pluginCreator, pluginConfig);