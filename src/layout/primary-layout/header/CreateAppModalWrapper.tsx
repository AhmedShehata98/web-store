'use client';

import { publishAppModalAtom } from '@/atoms/publish-app-modal';
import Portal from '@/components/Portal';
import PublishNewAppModal from '@/components/publish-new-application-modal/PublishNewAppModal';
import { addNewApplication } from '@/services/app.api';
import { uploadImage } from '@/services/upload.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useRecoilState } from 'recoil';

const CreateAppModalWrapper = () => {
  const { mutateAsync: mutateUploadImage, isPending: isPendingUpload } = useMutation({
    mutationKey: ['upload-app-image'],
    mutationFn: uploadImage,
  });
  const { mutateAsync: publishNewApp, isPending: isPendingPublishApp } = useMutation({
    mutationKey: ['create-new-application'],
    mutationFn: addNewApplication,
  });
  const [isShownAppModal, setIsShownAppModal] = useRecoilState(publishAppModalAtom);
  const queryClient = useQueryClient();
  return (
    <>
      {isShownAppModal && (
        <Portal id='modal'>
          <PublishNewAppModal
            closeModal={() => setIsShownAppModal(false)}
            revalidateApplicationList={() => queryClient.invalidateQueries({ queryKey: ['applications'] })}
            isPendingPublishApp={isPendingPublishApp}
            isPendingUpload={isPendingUpload}
            mutateUploadImage={mutateUploadImage}
            publishNewApp={publishNewApp}
          />
        </Portal>
      )}
    </>
  );
};

export default CreateAppModalWrapper;
