'use client';

import { publishAppModalAtom } from '@/atoms/publish-app-modal';
import Portal from '@/components/Portal';
import PublishNewAppModal from '@/components/PublishNewAppModal';
import React from 'react';
import { useRecoilState } from 'recoil';

const CreateAppWrapper = () => {
  const [isShownAppModal, setIsShownAppModal] = useRecoilState(publishAppModalAtom);
  return (
    <>
      {isShownAppModal && (
        <Portal id='modal'>
          <PublishNewAppModal closeModal={() => setIsShownAppModal(false)} />
        </Portal>
      )}
    </>
  );
};

export default CreateAppWrapper;
