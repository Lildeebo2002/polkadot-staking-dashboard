// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';
import type { PayoutListContextInterface } from 'pages/Pools/types';

export const PayoutListContext = createContext<PayoutListContextInterface>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  setListFormat: (v: string) => {},
  listFormat: 'col',
});

export const usePayoutList = () => useContext(PayoutListContext);

export const PayoutListProvider = ({ children }: { children: ReactNode }) => {
  const [listFormat, _setListFormat] = useState('col');

  const setListFormat = (v: string) => {
    _setListFormat(v);
  };

  return (
    <PayoutListContext.Provider
      value={{
        setListFormat,
        listFormat,
      }}
    >
      {children}
    </PayoutListContext.Provider>
  );
};
