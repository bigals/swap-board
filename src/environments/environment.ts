// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAaRzoQSoRwaVinvGp-p0DrdPQgAyvG6Dk',
    authDomain: 'swap-board.firebaseapp.com',
    databaseURL: 'https://swap-board.firebaseio.com',
    projectId: 'swap-board',
    storageBucket: 'swap-board.appspot.com',
    messagingSenderId: '290863821478'
  },
  cognito: {
    userPoolId: 'us-east-1_CawWBnN9J', // e.g. us-east-2_uXboG5pAb
    userPoolClientId: '60ntul3476og8022o7oaf7kquv', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
    region: 'us-east-2' // e.g. us-east-2
},
api: {
    invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
}
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
