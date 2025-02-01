import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNotes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <g filter='url(#notes_svg__a)'>
      <path
        fill='#fff'
        d='M20.394 3.348H7.398a.804.804 0 0 0-.804.804v15.702c0 .444.36.804.804.804h12.996c.444 0 .804-.36.804-.804V4.152a.804.804 0 0 0-.804-.804'
        opacity={0.2}
        style={{
          mixBlendMode: 'multiply',
        }}
      />
      <path
        fill='#fff'
        d='M20.394 3.348H7.398a.804.804 0 0 0-.804.804v15.702c0 .444.36.804.804.804h12.996c.444 0 .804-.36.804-.804V4.152a.804.804 0 0 0-.804-.804'
        opacity={0.12}
        style={{
          mixBlendMode: 'multiply',
        }}
      />
      <path
        fill='#CA64EA'
        d='M20.022 20.651h-12.6a.804.804 0 0 1-.822-.81V4.157a.804.804 0 0 1 .81-.81H20.4a.804.804 0 0 1 .81.81v15.324a1.2 1.2 0 0 1-1.188 1.17'
      />
      <path fill='#AE4BD5' d='M21.192 7.674h-4.326V12h4.326z' />
      <path fill='#9332BF' d='M21.192 11.999h-4.326v4.326h4.326z' />
      <path
        fill='#7719AA'
        d='M16.866 16.325h4.326v3.516a.81.81 0 0 1-.792.81h-3.534z'
      />
    </g>
    <path
      fill='#fff'
      d='M11.19 7.135H3.072a.81.81 0 0 0-.81.81v8.118c0 .447.363.81.81.81h8.118a.81.81 0 0 0 .81-.81V7.945a.81.81 0 0 0-.81-.81'
      opacity={0.48}
      style={{
        mixBlendMode: 'multiply',
      }}
    />
    <path
      fill='#fff'
      d='M11.19 7.135H3.072a.81.81 0 0 0-.81.81v8.118c0 .447.363.81.81.81h8.118a.81.81 0 0 0 .81-.81V7.945a.81.81 0 0 0-.81-.81'
      opacity={0.24}
      style={{
        mixBlendMode: 'multiply',
      }}
    />
    <g filter='url(#notes_svg__b)'>
      <path
        fill='#7719AA'
        d='M11.19 7.135H3.072a.81.81 0 0 0-.81.81v8.118c0 .447.363.81.81.81h8.118a.81.81 0 0 0 .81-.81V7.945a.81.81 0 0 0-.81-.81'
      />
      <path
        fill='url(#notes_svg__c)'
        d='M11.19 7.135H3.072a.81.81 0 0 0-.81.81v8.118c0 .447.363.81.81.81h8.118a.81.81 0 0 0 .81-.81V7.945a.81.81 0 0 0-.81-.81'
        opacity={0.5}
        style={{
          mixBlendMode: 'soft-light',
        }}
      />
      <path
        fill='#fff'
        d='M4.932 9.367H6.03l2.16 3.492q.152.242.222.384a5 5 0 0 1-.036-.72V9.367h.942v5.268H8.304l-2.244-3.6a4 4 0 0 1-.198-.372q.035.392.03.786v3.174h-.96z'
      />
    </g>
    <defs>
      <filter
        id='notes_svg__a'
        width={17.016}
        height={19.71}
        x={5.394}
        y={3.347}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={1.2} />
        <feGaussianBlur stdDeviation={0.6} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0' />
        <feBlend
          in2='BackgroundImageFix'
          result='effect1_dropShadow_2022_17657'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_2022_17657'
          result='shape'
        />
      </filter>
      <filter
        id='notes_svg__b'
        width={12.138}
        height={12.138}
        x={2.262}
        y={7.135}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dx={1.2} dy={1.2} />
        <feGaussianBlur stdDeviation={0.6} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0' />
        <feBlend
          in2='BackgroundImageFix'
          result='effect1_dropShadow_2022_17657'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_2022_17657'
          result='shape'
        />
      </filter>
      <linearGradient
        id='notes_svg__c'
        x1={3.954}
        x2={10.308}
        y1={6.499}
        y2={17.503}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' stopOpacity={0.5} />
        <stop offset={1} stopOpacity={0.7} />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgNotes;
