export default {
  apiUrl: "http://joeylin.net/api/"
};
const siteConfig = {
  siteName: "joeylin.net",
  siteIcon: "ion-beer",
  footerText: ""
};

const themeConfig = {
  topbar: "themedefault",
  sidebar: "themedefault",
  layout: "themedefault",
  theme: "themedefault"
};
const language = "english";
const AlgoliaSearchConfig = {
  appId: "",
  apiKey: ""
};
const Auth0Config = {
  domain: "",
  clientID: "", //
  options: {
    auth: {
      autoParseHash: true,
      redirect: false
    },
    languageDictionary: {
      title: "joeylin.net",
      emailInputPlaceholder: "demo@gmail.com",
      passwordInputPlaceholder: "demodemo"
    },
    icon: "",
    theme: {
      labeledSubmitButton: true,
      logo: "https://s3.amazonaws.com/redqteam.com/logo/isomorphic.png",
      primaryColor: "#E14615",
      authButtons: {
        connectionName: {
          displayName: "Log In",
          primaryColor: "#b7b7b7",
          foregroundColor: "#000000",
          icon: undefined
        }
      }
    }
  }
};
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
const googleConfig = {
  apiKey: "" //
};
const mapboxConfig = {
  tileLayer: "",
  maxZoom: "",
  defaultZoom: "",
  center: []
};
const youtubeSearchApi = "";

const saveParam = (name, value) => sessionStorage.setItem(name, value);

const getParam = name => sessionStorage.getItem(name);

const removeParam = name => sessionStorage.removeItem(name);

export {
  siteConfig,
  themeConfig,
  language,
  AlgoliaSearchConfig,
  Auth0Config,
  firebaseConfig,
  googleConfig,
  mapboxConfig,
  youtubeSearchApi,
  getParam,
  removeParam,
  saveParam
};
