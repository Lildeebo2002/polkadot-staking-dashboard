// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useLedgers } from 'contexts/Accounts/Ledgers';
import { useConnect } from 'contexts/Connect';
import { useModal } from 'contexts/Modal';
import { useActivePools } from 'contexts/Pools/ActivePools';
import { Title } from 'library/Modal/Title';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Forms } from './Forms';
import { Overview } from './Overview';
import { CardsWrapper, FixedContentWrapper, Wrapper } from './Wrappers';

export const UnlockChunks = () => {
  const { t } = useTranslation('modals');
  const { activeAccount } = useConnect();
  const { config, setModalHeight } = useModal();
  const { bondFor } = config || {};
  const { getLedgerForStash } = useLedgers();
  const { getPoolUnlocking } = useActivePools();

  // get the unlocking per bondFor
  const getUnlocking = () => {
    let unlocking = [];
    let ledger;
    switch (bondFor) {
      case 'pool':
        unlocking = getPoolUnlocking();
        break;
      default:
        ledger = getLedgerForStash(activeAccount);
        unlocking = ledger.unlocking;
    }
    return unlocking;
  };

  const unlocking = getUnlocking();

  // active modal section
  const [section, setSection] = useState(0);

  // modal task
  const [task, setTask] = useState<string | null>(null);

  // unlock value of interest
  const [unlock, setUnlock] = useState(null);

  // refs for wrappers
  const headerRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const formsRef = useRef<HTMLDivElement>(null);

  const getModalHeight = () => {
    let h = headerRef.current?.clientHeight ?? 0;

    if (section === 0) {
      h += overviewRef.current?.clientHeight ?? 0;
    } else {
      h += formsRef.current?.clientHeight ?? 0;
    }
    return h;
  };

  // resize modal on state change
  useEffect(() => {
    setModalHeight(getModalHeight());
  }, [task, section, unlocking]);

  // resize this modal on window resize
  useEffect(() => {
    window.addEventListener('resize', resizeCallback);
    return () => {
      window.removeEventListener('resize', resizeCallback);
    };
  }, []);
  const resizeCallback = () => {
    setModalHeight(getModalHeight());
  };

  return (
    <Wrapper>
      <FixedContentWrapper ref={headerRef}>
        <Title title={t('unlocks')} fixed />
      </FixedContentWrapper>
      <CardsWrapper
        animate={section === 0 ? 'home' : 'next'}
        transition={{
          duration: 0.5,
          type: 'spring',
          bounce: 0.1,
        }}
        variants={{
          home: {
            left: 0,
          },
          next: {
            left: '-100%',
          },
        }}
      >
        <Overview
          unlocking={unlocking}
          bondFor={bondFor}
          setSection={setSection}
          setUnlock={setUnlock}
          setTask={setTask}
          ref={overviewRef}
        />
        <Forms
          setSection={setSection}
          unlock={unlock}
          task={task}
          ref={formsRef}
        />
      </CardsWrapper>
    </Wrapper>
  );
};
