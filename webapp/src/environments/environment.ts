// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
  , lang : [  "en" , "de",    "tlh",    "fr",    "nl", "es"   ]
  , deepMl:{
    url: "https://api-free.deepl.com/v2/",
    key: "df2d66e0-e7f1-6381-0142-be63a0bc77fc:fx"
  }
  , chuck: {
    random: "https://api.chucknorris.io/jokes/random"
  },
  mathjaxConfig: {
    "config": {
      "loader": {
        "load": ["output/svg", "[tex]/require", "[tex]/ams" ]
      },
      "tex": {
        "inlineMath": [['$', '$'], ['\\(', '\\)']],
        "extensions": ["AMSmath.js", "AMSsymbols.js"],
        "packages": ["base", "require","displaymath", "ams","amsmath"]
      },
      "svg": { "fontCache": "global" }
    },
    "src": "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/startup.js"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
