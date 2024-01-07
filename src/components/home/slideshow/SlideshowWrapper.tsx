import SwiperSlider from './SwiperSlider';
import { SLIDE_LIST } from 'local-constants';

const SlideshowWrapper = () => {
  return (
    <div className='w-full max-w-full h-[65dvh] flex items-center justify-center'>
      <SwiperSlider isFetched={true} isLoading={false} data={SLIDE_LIST} />
    </div>
  );
};

export default SlideshowWrapper;
