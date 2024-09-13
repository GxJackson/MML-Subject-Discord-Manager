import favicon from "./extensions/favicon.ico";

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config: {
    // Replace the favicon
    head: {
      favicon: favicon
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Student Discord Subjects Bot",
        "app.components.LeftMenu.navbrand.workplace": "Modern Money Lab",
      }
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
    // Override or extend the theme
    theme: {
      // overwrite dark theme properties
      dark: {
        colors: {
          primary100: "#2b68ff"
        }
      }
    }    
  },
  bootstrap,
};
