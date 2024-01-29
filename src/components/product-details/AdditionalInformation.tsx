import Link from 'next/link';
import React, { ReactNode } from 'react';
import { RiProfileLine } from 'react-icons/ri';
import { GrLinkedin } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import clsx from 'clsx';

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
  isLoading: boolean;
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
          <ul className='flex flex-col mt-4'>
            <Link className='flex items-center justify-start gap-3 ps-6 mb-3' href={data.publisherInfo.linkedIn}>
              <span className='text-[#0A66C2] text-2xl'>
                <GrLinkedin />
              </span>
              <p className='text-sky-500 text-sm uppercase'>linkedIn</p>
            </Link>
            <Link className='flex items-center justify-start gap-3 ps-6 mb-3' href={data.publisherInfo.github}>
              <span className='dark:text-slate-200 text-slate-800 text-2xl'>
                <FaGithub />
              </span>
              <p className='text-sky-500 text-sm uppercase'>github</p>
            </Link>
          </ul>
        </InfoItem>
        <InfoItem title='technologies And Libraries' icon={<RiProfileLine />}>
          <ul
            className={`grid ${clsx(
              data.technologiesAndLibraries.length >= 6 ? 'grid-cols-2' : 'grid-flow-row',
            )} mt-3 ps-2`}
          >
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
