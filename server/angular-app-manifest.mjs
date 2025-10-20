
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2138, hash: '590445dba09a30989de51f58fe35d1275bbedea28da952e9092f7bb4c755195b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: '303d832676040121bc926d367b76447eb8c01ef5d71dc21bbecd9d16844c0a9b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23717, hash: '69daea1b313968b77d462176bb25892e61b973cdc9170297878ddf5453b4090e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QSQSKKTB.css': {size: 5467, hash: 'pxrXc4VIgpQ', text: () => import('./assets-chunks/styles-QSQSKKTB_css.mjs').then(m => m.default)}
  },
};
