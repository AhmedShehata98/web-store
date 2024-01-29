import { nanoid } from 'nanoid';
import { useEffect, useState, useMemo, useRef, MutableRefObject, useCallback } from 'react';

type Props = {
  inputFile: MutableRefObject<HTMLInputElement | null>;
};
const useImageFile = ({ inputFile }: Props) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [imagesList, setImagesList] = useState<ImagesListType[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleConvertToUrl = useCallback(
    (files: FileList) => {
      const urls = [];
      for (const file of Array.from(files)) {
        const url = URL.createObjectURL(file);
        urls.push({ url, file, id: nanoid(6), size: file.size, title: file.name });
      }
      return urls;
    },
    [files],
  );
  //
  const handleRemoveImageById = useCallback((id: string) => {
    const newImagesList = imagesList.filter((img) => img.id !== id);
    if (!id) return false;
    if (imagesList.length <= 0) return false;

    setImagesList(newImagesList);
    return true;
  }, []);
  const handleSelectImage = useCallback((image: string) => {
    setSelectedImage(image);
  }, []);
  const handleClearImages = useCallback(() => {
    setImagesList([]);
  }, []);
  const handleClearFiles = useCallback(() => {
    setFiles(null);
  }, []);

  useEffect(() => {
    function handleChange(ev: Event) {
      const files = (ev.target as HTMLInputElement).files;
      if (!files) return;
      if (files.length <= 0) return;

      setFiles(files);
      const urls = handleConvertToUrl(files);
      setImagesList((img) => [...img, ...urls]);
    }

    inputFile.current?.addEventListener('change', handleChange);

    return () => {
      inputFile.current?.removeEventListener('change', handleChange);
    };
  }, [inputFile]);

  return {
    imagesList,
    files,
    selectedImage,
    methods: { handleClearFiles, handleClearImages, handleRemoveImageById, handleSelectImage },
  };
};

export default useImageFile;
