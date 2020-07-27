export const environment = {
  production: false,

  clientId: 'nJ6Xpc/JYe9c/GfHqqeQhhATrrBFKaoXVZ6g/CJyvJg=',
  domain: 'localhost',
  gtmPruebas: true,
  
  //APIEndpoint_authn: 'https://ws-authn-dev-co-sla-datacash.apps.appcanvas.net', //DEV
  //APIEndpoint_company: 'https://ws-cmpnymnger-dev-co-sla-datacash.apps.appcanvas.net', //DEV
  // APIEndpoint_debts: 'https://ws-debtsmanager-dev-co-sla-datacash.apps.appcanvas.net', //DEV
  //APIEndpoint_ngttion: 'https://ws-ngttion-dev-co-sla-datacash.apps.appcanvas.net', //DEV
  APIEndpoint_authn: 'https://pontealdia.midatacredito.com/authn-ws', //PROD
  APIEndpoint_company: 'https://pontealdia.midatacredito.com/cmpnymnger-ws', //PROD
  APIEndpoint_debts: 'https://pontealdia.midatacredito.com/debtsmanager-ws', //PROD
  APIEndpoint_ngttion: 'https://pontealdia.midatacredito.com/ngttion-ws', //PROD

  consultaDeudas:    '/midatacredito/pontealdia/v1/debt',
  negociarDeudas: '/EngineNegotiation/getOffers',
  descargarPDF: '/companymanager/paymentAgreement',
  guardarPropuesta: '/midatacredito/pontealdia/v1/agreement',
  pagarLinea: '/midatacredito/pontealdia/v1/audit/pay',
  urlLogin: 'https://okta-ui-dev-co-sla-datacash.apps.internal.appcanvas.net/login?product=pntd',
  urlRegister: 'https://okta-ui-dev-co-sla-datacash.apps.internal.appcanvas.net/registro?product=pntd',
  urlSeguridad: 'https://okta-ui-dev-co-sla-datacash.apps.internal.appcanvas.net/seguridad?product=pntd',
  EvidenteEP: {
    validateQues: 'http://localhost:4203/validation/api/v1/evidente/validateQuestionsCustomer',
    validateCusto: 'http://localhost:4203/validation/api/v1/evidente/validateCustomer'
  },
  country: 'CO',
  product: 'Ponte Al Dia'
};
/*
https://okta-ui-dev-co-sla-datacash.apps.appcanvas.net
*/
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

