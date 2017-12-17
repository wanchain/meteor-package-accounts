Package.describe({
  name: 'wanchain:accounts',
  summary: 'Provides and updates the ethereum accounts in the Accounts collection',
  version: '0.5.1',
  git: 'http://github.com/wanchain/meteor-package-accounts'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', ['client', 'server']);
  api.use('mongo', ['client', 'server']);
//  api.use('wanchain_util',['client','server']);

  api.use('frozeman:persistent-minimongo@0.1.8', 'client');
  api.use('ethereum:web3@0.15.1', ['client', 'server']);

  api.export(['EthAccounts'], ['client', 'server']);

  api.addFiles('accounts.js', ['client', 'server']);
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('wanchain:accounts');
//   api.addFiles('accounts-tests.js');
// });

