export const environment = {
  production: true,
  envName: 'master',
  clientId: 'nJ6Xpc/JYe9c/GfHqqeQhhATrrBFKaoXVZ6g/CJyvJg=',
  domain: 'midatacredito.com',
  gtmPruebas: false,
  APIEndpoint_authn: 'https://pontealdia.midatacredito.com/authn-ws',
  APIEndpoint_company: 'https://pontealdia.midatacredito.com/cmpnymnger-ws',
  APIEndpoint_debts: 'https://pontealdia.midatacredito.com/debtsmanager-ws',
  APIEndpoint_ngttion: 'https://pontealdia.midatacredito.com/ngttion-ws',
  consultaDeudas:    '/midatacredito/pontealdia/v1/debt',
  negociarDeudas: '/EngineNegotiation/getOffers',
  descargarPDF: '/companymanager/paymentAgreement',
  guardarPropuesta: '/midatacredito/pontealdia/v1/agreement',
  pagarLinea: '/midatacredito/pontealdia/v1/audit/pay',
  urlLogin: 'https://usuario.midatacredito.com/login?product=pntd',
  urlRegister: 'https://usuario.midatacredito.com/registro?product=pntd',
  urlSeguridad: 'https://usuario.midatacredito.com/seguridad?product=pntd',
  EvidenteEP: {
    validateQues: 'https://okta-ui-prd-co-sla-datacash.a-internal.appcanvas.net/validation/api/v1/evidente/validateQuestionsCustomer',
    validateCusto: 'https://okta-ui-prd-co-sla-datacash.a-internal.appcanvas.net/validation/api/v1/evidente/validateCustomer'
  },
  country: 'CO',
  product: 'Ponte Al Dia'
};