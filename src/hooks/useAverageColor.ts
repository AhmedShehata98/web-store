import { useState, useEffect, useRef } from "react";
import { FastAverageColor, FastAverageColorResult } from "fast-average-color";

type Props = {
  imageElement: HTMLImageElement | null;
};
function useAverageColor({ imageElement }: Props) {
  const fac = useRef(new FastAverageColor());
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [averageColor, setAverageColor] = useState<FastAverageColorResult>();

  async function getAverageColor() {
    try {
      const color = await fac.current.getColorAsync(imageElement);
      return color;
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    if (!imageElement) return;
    getAverageColor()
      .then((color) => {
        setIsSuccess(true);
        setIsError(false);
        setAverageColor(color);
      })
      .catch((reason) => {
        setIsSuccess(false);
        setIsError(true);
        console.log(reason);
      });
  }, [imageElement]);

  return { isError, isSuccess, averageColor };
}

export default useAverageColor;
