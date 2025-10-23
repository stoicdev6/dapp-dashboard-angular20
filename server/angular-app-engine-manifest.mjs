
export default {
  basePath: '/dapp-dashboard-angular20',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
