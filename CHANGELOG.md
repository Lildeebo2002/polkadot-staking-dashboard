# Changelog

## [1.2.0](https://github.com/paritytech/polkadot-staking-dashboard/compare/v1.1.2...v1.2.0) (2024-01-08)


### Features

* add block verification interval ([#1837](https://github.com/paritytech/polkadot-staking-dashboard/issues/1837)) ([0b9d6f2](https://github.com/paritytech/polkadot-staking-dashboard/commit/0b9d6f2d0737b0713410143bfb134bcfe5bb485d))
* add docs folder ([#1753](https://github.com/paritytech/polkadot-staking-dashboard/issues/1753)) ([78c506e](https://github.com/paritytech/polkadot-staking-dashboard/commit/78c506e5c97440ed5ee9b8f7f2bc4119b23f6635))
* offline recovery ([#1836](https://github.com/paritytech/polkadot-staking-dashboard/issues/1836)) ([798163f](https://github.com/paritytech/polkadot-staking-dashboard/commit/798163f95f1ea96ce612e9d43d1ec7cf38c71b2e))
* Pool commission provider, compartmentalise forms of commission properties ([#1755](https://github.com/paritytech/polkadot-staking-dashboard/issues/1755)) ([8cc0517](https://github.com/paritytech/polkadot-staking-dashboard/commit/8cc0517e1e85099f51f43f17cf8fe227e8a68a5b))
* **refactor:** add stylistic eslint rules ([#1793](https://github.com/paritytech/polkadot-staking-dashboard/issues/1793)) ([461a438](https://github.com/paritytech/polkadot-staking-dashboard/commit/461a438cbf05b7a104efea52857356733773121a))
* **refactor:** API to static class ([#1826](https://github.com/paritytech/polkadot-staking-dashboard/issues/1826)) ([252547b](https://github.com/paritytech/polkadot-staking-dashboard/commit/252547ba299c3d5ecff773da4da47a458bd27cae))
* **refactor:** enforce curly, braces as needed ([#1795](https://github.com/paritytech/polkadot-staking-dashboard/issues/1795)) ([4199fa1](https://github.com/paritytech/polkadot-staking-dashboard/commit/4199fa1a16b39df8c47210ce4fdf9bafdb98997e))
* **refactor:** Notifications as `CustomEvent` emission ([#1775](https://github.com/paritytech/polkadot-staking-dashboard/issues/1775)) ([dbb3e06](https://github.com/paritytech/polkadot-staking-dashboard/commit/dbb3e06859f19f878b4afbd0d372c9b12a9ffc97))
* **refactor:** Pool members list to canvas ([#1796](https://github.com/paritytech/polkadot-staking-dashboard/issues/1796)) ([eb617f2](https://github.com/paritytech/polkadot-staking-dashboard/commit/eb617f274d6df26450502cfdef4bfcda5d657de4))
* **refactor:** Remove explicit `any` types project-wide ([#1773](https://github.com/paritytech/polkadot-staking-dashboard/issues/1773)) ([fd5a59e](https://github.com/paritytech/polkadot-staking-dashboard/commit/fd5a59eb5933f3ab11fd48eba8015889a7cc5325))
* **refactor:** remove ref from `OtherAccounts` ([#1825](https://github.com/paritytech/polkadot-staking-dashboard/issues/1825)) ([8fc49e1](https://github.com/paritytech/polkadot-staking-dashboard/commit/8fc49e180b0fcd836d8fabe6ac92cc84b6a67a0c))
* **refactor:** Remove remaining explicit `any` types, turn on `no-explicit-any` ([#1792](https://github.com/paritytech/polkadot-staking-dashboard/issues/1792)) ([5daa698](https://github.com/paritytech/polkadot-staking-dashboard/commit/5daa69827081a485d323cd51d24ab3d558954ec2))
* **refactor:** Split pool types, replace explicit any types ([#1774](https://github.com/paritytech/polkadot-staking-dashboard/issues/1774)) ([f921baf](https://github.com/paritytech/polkadot-staking-dashboard/commit/f921baf5a08b3199cd6eff19ea3fb2d2a9897fc3))
* **refactor:** use `html5-qrcode`, remove `react-qr-reader` ([#1802](https://github.com/paritytech/polkadot-staking-dashboard/issues/1802)) ([759a41e](https://github.com/paritytech/polkadot-staking-dashboard/commit/759a41ed0dda7814fbf72eaf5c625a93fc95af4b))
* **refactor:** Use Cloud `LedgerAccounts` context ([#1782](https://github.com/paritytech/polkadot-staking-dashboard/issues/1782)) ([9c59ebe](https://github.com/paritytech/polkadot-staking-dashboard/commit/9c59ebeaa7d83dfe45bd21ed7c0df552fab9f13a))
* **refactor:** useless fragments, linting tidy up ([#1768](https://github.com/paritytech/polkadot-staking-dashboard/issues/1768)) ([d9ecec5](https://github.com/paritytech/polkadot-staking-dashboard/commit/d9ecec52807cbc62b071f2abc2e6c4f1b6b2d177))
* timeout multiplier ([#1838](https://github.com/paritytech/polkadot-staking-dashboard/issues/1838)) ([620ed02](https://github.com/paritytech/polkadot-staking-dashboard/commit/620ed027f88874afd0246cba6425f971a522b4ba))
* upgrade from yarn classic to yarn modern (berry) ([#1752](https://github.com/paritytech/polkadot-staking-dashboard/issues/1752)) ([6f306cb](https://github.com/paritytech/polkadot-staking-dashboard/commit/6f306cbd645ded670090fa16cd804a8cf069ea8b))
* use `navigator.onLine` to handle api connection ([#1827](https://github.com/paritytech/polkadot-staking-dashboard/issues/1827)) ([bfef735](https://github.com/paritytech/polkadot-staking-dashboard/commit/bfef73520220d69841f33a4a001106b23490a103))
* **ux:** block number in network bar ([#1835](https://github.com/paritytech/polkadot-staking-dashboard/issues/1835)) ([0350b31](https://github.com/paritytech/polkadot-staking-dashboard/commit/0350b31234534c3c0a5d05ecd7d8db91dd218081))


### Bug Fixes

* Bond fixes ([#1816](https://github.com/paritytech/polkadot-staking-dashboard/issues/1816)) ([791ece3](https://github.com/paritytech/polkadot-staking-dashboard/commit/791ece366b7319a054f78a1d9b10f9891214c853))
* incorrect use of ?? operand ([d9e2418](https://github.com/paritytech/polkadot-staking-dashboard/commit/d9e2418e0c6ba28a80caea19b02ecadbcb38c61b))
* make odometer values copy-able ([#1834](https://github.com/paritytech/polkadot-staking-dashboard/issues/1834)) ([3cbb9d0](https://github.com/paritytech/polkadot-staking-dashboard/commit/3cbb9d00992848a7eee7c7c118548336bee2cd47))
* read only account import, local account import ([#1833](https://github.com/paritytech/polkadot-staking-dashboard/issues/1833)) ([af843f5](https://github.com/paritytech/polkadot-staking-dashboard/commit/af843f5d706f5123ea54a54b811b56d2f7cf8d24))
* ready after consts ([a7f0bc9](https://github.com/paritytech/polkadot-staking-dashboard/commit/a7f0bc9dfd434bbcd653912a5897f7b6e2acd097))
* replace MAX_EXPOSURE_PAGE_SIZE ([8f44db1](https://github.com/paritytech/polkadot-staking-dashboard/commit/8f44db1d69c91277b446ed1c9ccdbc231495ba85))
* **worker:** add worker format ([f45d6ed](https://github.com/paritytech/polkadot-staking-dashboard/commit/f45d6ed08fbf339b3e27ecc0a53a6246e2f55f8d))
