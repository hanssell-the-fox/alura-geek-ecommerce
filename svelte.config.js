import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    scss: {
      includePaths: ['src/theme']
    }
  }),

  kit: {
    adapter: adapter(),
    alias: {
      $shared: 'src/lib/shared'
    }
  }
};

export default config;
