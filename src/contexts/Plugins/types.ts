// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

export interface PluginsContextInterface {
  togglePlugin: (k: string) => void;
  pluginEnabled: (key: string) => boolean;
  plugins: string[];
}
