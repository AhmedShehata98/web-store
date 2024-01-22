import { useState, useEffect, useRef } from 'react';
import { FastAverageColor, FastAverageColorResult } from 'fast-average-color';

type Props = {
  imageElement: HTMLImageElement | null;
};

export function useAverageColor({ imageElement }: Props) {
  const fac = useRef(new FastAverageColor());
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [averageColor, setAverageColor] = useState<FastAverageColorResult>();

  async function getAverageColor(imageElement: HTMLImageElement | null) {
    try {
      const colors = await fac.current.getColorAsync(imageElement);
      setAverageColor(colors);
      setIsSuccess(true);
      setIsError(false);
    } catch (error) {
      setIsSuccess(false);
      setIsError(true);
    }
  }

  useEffect(() => {
    if (!imageElement) return;
    getAverageColor(imageElement);
  }, [imageElement, fac.current]);

  return { isError, isSuccess, averageColor };
}

export default useAverageColor;
