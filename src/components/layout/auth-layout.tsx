import Image from "next/image";
import React, { type ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-[100svh] w-full grid-flow-row grid-cols-1 grid-rows-6 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-1">
      <div className="relative row-span-1 h-full lg:col-span-1 lg:block">
        {/* <Image
          src='https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
          alt='construction site'
          layout='fill'
          objectFit='cover'
          className='blur-3xl'
        /> */}
        <div className="h-full w-full">
          <div className="relative flex h-full w-full flex-col items-center justify-center bg-gray-900">
            <div className="relative h-full w-full bg-gray-900">
              <Image
                // src="/images/abstract.jpg"
                src="https://images.unsplash.com/photo-1515489472349-73b65ec1247c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                // src="https://images.pexels.com/photos/14190579/pexels-photo-14190579.jpeg?auto=compress&cs=tinysrgb&w=1600"
                // src="https://images.pexels.com/photos/2844316/pexels-photo-2844316.jpeg?auto=compress&cs=tinysrgb&w=1600"
                // src="https://images.pexels.com/photos/5204273/pexels-photo-5204273.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                // src="https://images.pexels.com/photos/7245333/pexels-photo-7245333.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Building"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="h-auto w-auto opacity-10"
              />
            </div>
            <div className="absolute flex h-full w-full">
              {/* <div className="relative ml-6 mt-6 h-20 w-20 sm:h-96 sm:w-36 lg:h-14 lg:w-40">
                <Image
                  src="/images/invix-logo-full.png"
                  alt="invix logo"
                  // width='300'
                  // height='300'
                  layout="fill"
                  className="object-cover opacity-80"
                />
              </div> */}

              <p className="label-sm absolute bottom-6 left-5 text-gray-600">
                Copyright © {new Date().getFullYear()}{" "}
                <span className="underline decoration-primary-600 decoration-2 underline-offset-2 duration-200 ease-in-out hover:text-primary-500">
                  Invix
                </span>
                . All rights reserved
              </p>
              {/* Chuangle Technology Invix */}
            </div>
            {/* <div className='flex'>
            <h1 className='h2  bg-gradient-to-br from-primary to-primary-900 bg-clip-text text-transparent'>
              InSpect 2.0
            </h1>

          </div> */}
          </div>
        </div>
        {/* <div className='h-full w-full bg-gray-900'></div>
        <div className='absolute inset-0 h-full w-full bg-red-300'>
          <div className='mx-auto max-w-5xl py-32 sm:py-48 lg:py-56'>
            <div className='text-center'>
              <h1 className='h2 sm:display-sm lg:display-lg bg-gradient-to-br from-primary-400 to-primary-800 bg-clip-text text-transparent'>
                InSpect
              </h1>
              <p className='h2 bg-gradient-to-br from-gray-800 to-primary-800 bg-clip-text text-transparent'>
                2.0
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div className="relative row-span-5 row-start-1 flex h-full w-full overflow-hidden rounded-b-lg bg-white lg:col-span-1 lg:row-span-1 lg:rounded-b-none">
        <div className="absolute right-4 top-4 md:right-8 md:top-8">
          <div className="relative flex items-center gap-x-1">
            {/* {renderRedirectAuthLink()} */}
            {/* <LanguageSwitcher /> */}
          </div>
        </div>
        <div className="absolute top-2 flex h-14 w-full items-center justify-end px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            {/* <p className='text-sm font-medium'>
              {t('paragraphs.alreadyHaveAnAccount')}
            </p>
            <Button
              onClick={() => push('/register')}
              variant='outline'
              className={cn('py-2.5')}
            >
              {t('buttons.createAnAccount')}
            </Button> */}
            {/* <LanguageSwitcher /> */}
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}

{
  /* <>
<Seo title={`${t('app.name')} ${t('app.description')}`} />
<div className='isolate'>
  <div className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-10rem]'>
    <svg
      className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
      viewBox='0 0 1155 678'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
        fillOpacity='.3'
        d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
      />
      <defs>
        <linearGradient
          id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
          x1='1155.49'
          x2='-78.208'
          y1='.177'
          y2='474.645'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#769ef7' />
          <stop offset='1' stopColor='#487df4' />
        </linearGradient>
      </defs>
    </svg>
  </div>

  <main>
    <div className='relative px-6 lg:px-8'>
      <div className='mx-auto max-w-5xl py-32 sm:py-48 lg:py-56'>
        <div className='text-center'>
          <h1 className='h2 sm:display-sm lg:display-lg bg-gradient-to-br from-primary-400 to-primary-800 bg-clip-text text-transparent'>
            {t('app.name')}
          </h1>
          <p className='h2 bg-gradient-to-br from-gray-800 to-primary-800 bg-clip-text text-transparent'>
            v{t('app.description')}
          </p>

          {/* <div className='mt-3 flex justify-center gap-3'>
            <IconLink
              href={pathname}
              locale={locale === 'en' ? 'zh' : 'en'}
              variant='outline'
              size='lg'
            >
              {locale}
            </IconLink>
          </div> */
}
