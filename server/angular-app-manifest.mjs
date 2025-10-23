
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/dapp-dashboard-angular20/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/dapp-dashboard-angular20"
  },
  {
    "renderMode": 2,
    "route": "/dapp-dashboard-angular20/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/dapp-dashboard-angular20/assets"
  },
  {
    "renderMode": 2,
    "route": "/dapp-dashboard-angular20/transactions"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2214, hash: '852a47a5a687f736a72080612cd124a92982e2528ac4d356255938f6b01b34e8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '67839f093edceda937ad02b374a46a953b731c99cb856cbea44e605d367af062', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'transactions/index.html': {size: 2415, hash: 'c58ac1d8d8a11d3112cc6b6e342892f4afc2b3ff4c2ef004ab023324e4ec19d6', text: () => import('./assets-chunks/transactions_index_html.mjs').then(m => m.default)},
    'assets/index.html': {size: 2415, hash: 'c58ac1d8d8a11d3112cc6b6e342892f4afc2b3ff4c2ef004ab023324e4ec19d6', text: () => import('./assets-chunks/assets_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 2415, hash: 'c58ac1d8d8a11d3112cc6b6e342892f4afc2b3ff4c2ef004ab023324e4ec19d6', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-DRXTWDK4.css': {size: 10994, hash: 'a5wDzdErsW4', text: () => import('./assets-chunks/styles-DRXTWDK4_css.mjs').then(m => m.default)}
  },
};
