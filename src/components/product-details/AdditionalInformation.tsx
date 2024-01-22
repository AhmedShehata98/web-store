import React, { ReactNode } from 'react';
import { BsBox } from 'react-icons/bs';
import { RiProfileLine } from 'react-icons/ri';

type Props = {
  data: {
    publishBy: string;
    category: string;
    releaseDate: string;
    publisherInfo: {
      linkedIn: string;
      github: string;
    };
    technologiesAndLibraries: Array<string>;
  };
};
const AdditionalInformation = ({ data }: Props) => {
  return (
    <div className='w-full flex flex-col items-start rounded-lg mb-5 dark:bg-dark-primary-200 shadow-lg dark:brightness-150 divide-y dark:divide-slate-600'>
      <span className='w-full flex items-center justify-between gap-4 py-4 px-6'>
        <h3 className='capitalize dark:text-white text-xl font-medium m-0'>additional information</h3>
      </span>
      <ul className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-6'>
        <InfoItem title='publish By' icon={<RiProfileLine />}>
          <p className='flex flex-col text-slate-400 ps-8'>{data.publishBy}</p>
        </InfoItem>
        <InfoItem title='category' icon={<RiProfileLine />}>
          <p className='flex flex-col text-slate-400 ps-8'>{data.category}</p>
        </InfoItem>
        <InfoItem title='releaseDate' icon={<RiProfileLine />}>
          <p className='flex flex-col text-slate-400 ps-8'>{data.releaseDate}</p>
        </InfoItem>
        <InfoItem title='publisher Info' icon={<RiProfileLine />}>
          <ul className='flex flex-col mt-3'>
            <a className='text-sky-500 text-sm ps-6 mb-1 uppercase' href={data.publisherInfo.linkedIn}>
              linkedIn
            </a>
            <a className='text-sky-500 text-sm ps-6 mb-1 uppercase' href={data.publisherInfo.github}>
              github
            </a>
          </ul>
        </InfoItem>
        <InfoItem title='technologies And Libraries' icon={<RiProfileLine />}>
          <ul className='grid grid-flow-row mt-3 ps-2'>
            {data.technologiesAndLibraries.map((tech: string) => (
              <li key={tech} className='text-slate-400 text-sm ps-6 mb-1 uppercase'>
                {tech}
              </li>
            ))}
          </ul>
        </InfoItem>
      </ul>
    </div>
  );
};

export default AdditionalInformation;

type InfoProps = {
  title: string;
  icon: ReactNode;
  children?: ReactNode;
};
function InfoItem({ title, icon, children }: InfoProps) {
  return (
    <li>
      <span className='flex items-center justify-start gap-2'>
        <span className='text-slate-200 text-xl'>
          <span className='text-slate-200 text-xl'>{icon}</span>
        </span>
        <p className='text-slate-300 capitalize font-medium'>{title}</p>
      </span>
      {children}
    </li>
  );
}
