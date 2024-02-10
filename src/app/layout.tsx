import type { Metadata, Viewport } from 'next';
import { Lato } from 'next/font/google';
import '@/styles/globals.css';
import PrimaryLayout from '@/layout/primary-layout/PrimaryLayout';
import RecoilWrapper from '@/lib/RecoilWrapper';
import RegisterModalWrapper from '@/components/register-component/RegisterModalWrapper';
import ReactQueryWrapper from '@/lib/ReactQueryWrapper';
import UserDataWrapper from '@/lib/UserDataWrapper';
import CreateAppModalWrapper from '@/layout/primary-layout/header/CreateAppModalWrapper';

const lato = Lato({ weight: ['100', '300', '400', '700', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web store',
  description: 'Generated by create next app',
};

export const viewport: Viewport = {
  width: 'device-width',
  minimumScale: 0.7,
  maximumScale: 1,
  themeColor: '#219C90',
  userScalable: true,
  viewportFit: 'cover',
  interactiveWidget: 'overlays-content',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark'>
      <body className={lato.className}>
        <ReactQueryWrapper>
          <RecoilWrapper>
            <UserDataWrapper>
              <PrimaryLayout>{children}</PrimaryLayout>
              <RegisterModalWrapper />
              <CreateAppModalWrapper />
              <div id='modal'></div>
            </UserDataWrapper>
          </RecoilWrapper>
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
