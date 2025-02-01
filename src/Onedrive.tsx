import * as React from 'react';
import type { SVGProps } from 'react';
const SvgOnedrive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <g clipPath='url(#onedrive_svg__a)' filter='url(#onedrive_svg__b)'>
      <path
        fill='#fff'
        d='M18.678 9.622A6.722 6.722 0 0 0 6.554 7.594a5.375 5.375 0 0 0 .07 10.749h11.76a4.364 4.364 0 0 0 .294-8.721'
        opacity={0.2}
        style={{
          mixBlendMode: 'multiply',
        }}
      />
      <path
        fill='#fff'
        d='M18.678 9.622A6.722 6.722 0 0 0 6.554 7.594a5.375 5.375 0 0 0 .07 10.749h11.76a4.364 4.364 0 0 0 .294-8.721'
        opacity={0.12}
        style={{
          mixBlendMode: 'multiply',
        }}
      />
      <path
        fill='#0364B8'
        d='m9.445 8.394 4.518 2.708 2.687-1.115a4.45 4.45 0 0 1 1.733-.358h.295A6.722 6.722 0 0 0 6.554 7.6h.07a5.37 5.37 0 0 1 2.821.793'
      />
      <path
        fill='#0F78D4'
        d='M9.445 8.395a5.37 5.37 0 0 0-2.806-.8h-.07a5.381 5.381 0 0 0-4.343 8.419l3.985-1.677 1.768-.744 3.936-1.655 2.062-.863z'
      />
      <path
        fill='#1490DF'
        d='M18.678 9.622h-.295a4.45 4.45 0 0 0-1.733.358l-2.687 1.122.779.463 2.554 1.53 1.115.701 3.817 2.28a4.37 4.37 0 0 0-3.55-6.426z'
      />
      <path
        fill='#28A8EA'
        d='m18.411 13.768-1.115-.701-2.554-1.53-.779-.463-2.062.863-3.936 1.656-1.768.744-3.985 1.676a5.37 5.37 0 0 0 4.413 2.301h11.758a4.36 4.36 0 0 0 3.845-2.294z'
      />
      <path
        fill='url(#onedrive_svg__c)'
        d='M18.678 9.622A6.722 6.722 0 0 0 6.554 7.594a5.375 5.375 0 0 0 .07 10.749h11.76a4.364 4.364 0 0 0 .294-8.721'
        opacity={0.5}
        style={{
          mixBlendMode: 'soft-light',
        }}
      />
    </g>
    <defs>
      <linearGradient
        id='onedrive_svg__c'
        x1={7.719}
        x2={15.058}
        y1={6.191}
        y2={18.911}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' stopOpacity={0.5} />
        <stop offset={1} stopOpacity={0.7} />
      </linearGradient>
      <clipPath id='onedrive_svg__a'>
        <rect width={24} height={24} fill='#fff' rx={7.2} />
      </clipPath>
      <filter
        id='onedrive_svg__b'
        width={24.391}
        height={16.579}
        x={-0.188}
        y={4.57}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={1.403} />
        <feGaussianBlur stdDeviation={0.702} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0' />
        <feBlend
          in2='BackgroundImageFix'
          result='effect1_dropShadow_2022_17680'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_2022_17680'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);
export default SvgOnedrive;
