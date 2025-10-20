
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'D:/Program Files/Git/dapp-dashboard-angular20/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/dapp-dashboard-angular20"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2183, hash: 'ae2071064ecc165722a873e0525a2a9e38ff5615a70cc1fd33494c1bba6031d1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: 'dfdc441bd794289b7f6dd4c1999fc505e365b67faadcb9ad4402ece34d1377c1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-QSQSKKTB.css': {size: 5467, hash: 'pxrXc4VIgpQ', text: () => import('./assets-chunks/styles-QSQSKKTB_css.mjs').then(m => m.default)}
  },
};
