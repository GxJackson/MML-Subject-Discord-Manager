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
        "Auth.form.welcome.title": "Student Discord Server Subjects Bot",
        "Auth.form.welcome.subtitle": "Modern Money Lab",
        "Auth.form.button.login": "Login",
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
          primary100: "#2b68ff",
          primary200: "#163480",
          primary300: "#6b95ff",
          primary400: "#000000",
          primary500: "#4077ff",
          primary600: "#b9ffa8",
          primary700: "#ffffff",
          primary800: "#163480",
          primary900: "#040a19",
        }
      }
    }    
  },
  bootstrap,
};
