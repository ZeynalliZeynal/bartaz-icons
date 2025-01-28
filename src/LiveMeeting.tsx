import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLiveMeeting = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='#fff'
      d='M8.153 17.419a1.027 1.027 0 0 0-.507 1.912l3.62 2.053a1.98 1.98 0 0 0 1.524.179l5.448-1.553a1.95 1.95 0 0 0 1.412-1.87v-.721z'
      opacity={0.2}
      style={{
        mixBlendMode: 'multiply',
      }}
    />
    <path
      fill='#fff'
      d='M8.153 17.419a1.027 1.027 0 0 0-.507 1.912l3.62 2.053a1.98 1.98 0 0 0 1.524.179l5.448-1.553a1.95 1.95 0 0 0 1.412-1.87v-.721z'
      opacity={0.12}
      style={{
        mixBlendMode: 'multiply',
      }}
    />
    <g filter='url(#live_meeting_svg__a)'>
      <path
        fill='url(#live_meeting_svg__b)'
        d='m12.768 2.437 1.463 3.347V17.42l-1.44 4.143 5.447-1.552a1.95 1.95 0 0 0 1.412-1.871V5.861a1.95 1.95 0 0 0-1.415-1.874z'
      />
    </g>
    <path
      fill='url(#live_meeting_svg__c)'
      d='m5.86 17.295 1.595-.861a1.39 1.39 0 0 0 .72-1.22V8.95a1.39 1.39 0 0 1 .915-1.307l5.141-1.858V4.373a2.014 2.014 0 0 0-3.015-1.747L5.332 5.982a1.94 1.94 0 0 0-.982 1.69v8.72a1.024 1.024 0 0 0 1.51.903'
    />
    <path
      fill='url(#live_meeting_svg__d)'
      d='M14.231 17.419H8.153a1.027 1.027 0 0 0-.507 1.912l3.62 2.053a1.98 1.98 0 0 0 1.524.179 1.98 1.98 0 0 0 1.441-1.913z'
    />
    <path
      fill='url(#live_meeting_svg__e)'
      d='m5.86 17.295 1.595-.861a1.39 1.39 0 0 0 .72-1.22V8.95a1.39 1.39 0 0 1 .915-1.307l5.141-1.858V4.373a2.014 2.014 0 0 0-3.015-1.747L5.332 5.982a1.94 1.94 0 0 0-.982 1.69v8.72a1.024 1.024 0 0 0 1.51.903'
    />
    <path
      fill='url(#live_meeting_svg__f)'
      d='M14.231 17.419H8.153a1.027 1.027 0 0 0-.507 1.912l3.62 2.053a1.98 1.98 0 0 0 1.524.179 1.98 1.98 0 0 0 1.441-1.913z'
    />
    <defs>
      <linearGradient
        id='live_meeting_svg__b'
        x1={16.207}
        x2={16.207}
        y1={1.347}
        y2={20.224}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFB900' />
        <stop offset={0.17} stopColor='#EF8400' />
        <stop offset={0.31} stopColor='#E25C01' />
        <stop offset={0.43} stopColor='#DB4401' />
        <stop offset={0.5} stopColor='#D83B01' />
      </linearGradient>
      <linearGradient
        id='live_meeting_svg__c'
        x1={12.803}
        x2={2.807}
        y1={2.014}
        y2={16.287}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#800600' />
        <stop offset={0.6} stopColor='#C72127' />
        <stop offset={0.73} stopColor='#C13959' />
        <stop offset={0.85} stopColor='#BC4B81' />
        <stop offset={0.94} stopColor='#B95799' />
        <stop offset={1} stopColor='#B85BA2' />
      </linearGradient>
      <linearGradient
        id='live_meeting_svg__d'
        x1={7.697}
        x2={20.746}
        y1={19.532}
        y2={19.532}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F32B44' />
        <stop offset={0.6} stopColor='#A4070A' />
      </linearGradient>
      <linearGradient
        id='live_meeting_svg__e'
        x1={13.007}
        x2={10.891}
        y1={1.724}
        y2={4.745}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopOpacity={0.4} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='live_meeting_svg__f'
        x1={16.564}
        x2={10.722}
        y1={19.826}
        y2={19.316}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopOpacity={0.4} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <filter
        id='live_meeting_svg__a'
        width={9.282}
        height={21.525}
        x={11.568}
        y={2.437}
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
          result='effect1_dropShadow_2022_17645'
        />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_2022_17645'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);
export default SvgLiveMeeting;
