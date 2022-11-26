const presets = [
  ['@babel/preset-env', {
    targets: { //какие версии браузеров поддерживать, решает заказчик, нужно уточнять?
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },
    useBuiltIns: "entry"
  }]
];

module.exports = { presets };
