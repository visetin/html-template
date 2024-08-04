const names = {
  convert: '.convert',
  css: 'css',
  js: 'js',
  src: 'src',
  dest: 'public',
  app: 'app',
  pages: 'pages',
  core: 'core',
  assets: 'assets',
  fonts: 'fonts',
  images: 'images',
  sprites: 'sprite',
  other: 'other',
};

const gulpGlobs = {
  src: `${names.src}`,
  dest: `${names.dest}`,
  app: `${names.src}/${names.app}`,
  pages: `${names.src}/${names.pages}`,
  core: `${names.src}/${names.core}`,

  assets: `${names.src}/${names.core}/${names.assets}`,
  fonts: `${names.src}/${names.core}/${names.assets}/${names.fonts}`,
  images: `${names.src}/${names.core}/${names.assets}/${names.images}`,
  sprites: `${names.src}/${names.core}/${names.assets}/${names.sprites}`,
  otherAssets: `${names.src}/${names.core}/${names.assets}/${names.other}`,

  fontsToConvert: `${names.convert}/${names.fonts}`,

  publicScripts: `${names.dest}/${names.js}`,
  publicStyles: `${names.dest}/${names.css}`,
  publicAssets: `${names.dest}/${names.assets}`,
  publicFonts: `${names.dest}/${names.assets}/${names.fonts}`,
  publicImages: `${names.dest}/${names.assets}/${names.images}`,
  publicSprites: `${names.dest}/${names.assets}/${names.sprites}`,
};

export default gulpGlobs;
