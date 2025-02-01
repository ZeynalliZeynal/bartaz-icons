import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='#1DE9B6'
      d='M1.8 11.735C1.8 7.753 5.144 1.8 12.007 1.8c6.854 0 10.193 5.06 10.193 8.622 0 2.858-2.259 4.963-5.096 4.963-2.165 0-3.447-.718-3.447-1.29 0-.37.895-.937.895-2.031 0-1.309-1.013-2.62-2.573-2.62-1.496 0-2.537 1.245-2.537 2.501 0 3.036 2.872 5.939 7.105 5.939 2.53 0 3.447-.933 3.776-.933.1 0 .33.041.33.308 0 .255-2.798 4.94-8.64 4.94-5.81 0-10.213-4.577-10.213-10.464'
    />
    <path
      fill='url(#edge_svg__a)'
      d='M1.8 11.735c0-3.982 3.884-6.14 6.492-6.14 6.854 0 8.812 1.266 8.812 4.827 0 2.858-2.552 2.736-2.552 1.643 0-1.309-1.013-2.62-2.573-2.62-1.496 0-2.537 1.245-2.537 2.501 0 3.036 2.872 5.939 7.105 5.939 2.53 0 3.447-.933 3.776-.933.1 0 .33.041.33.308 0 .255-2.798 4.94-8.64 4.94C6.203 22.2 1.8 17.622 1.8 11.735'
    />
    <path
      fill='url(#edge_svg__b)'
      d='M9.442 11.946c0-1.172.906-2.333 2.242-2.484-2.093.178-4.487 2.231-4.487 6.034 0 4.06 3.5 6.867 7.11 6.44 4.277-.983 6.346-4.457 6.346-4.676 0-.266-.23-.307-.33-.307-.328 0-1.247.932-3.776.932-4.233 0-7.105-2.903-7.105-5.939'
    />
    <path
      fill='url(#edge_svg__c)'
      d='M1.8 11.735C1.8 7.753 5.144 1.8 12.007 1.8 18.861 1.8 22.2 6.86 22.2 10.42c0 2.859-2.259 4.964-5.096 4.964-2.165 0-3.447-.718-3.447-1.29 0-.37.895-.937.895-2.031 0-1.309-1.059-5.446-6.44-5.446-1.497 0-5.671.662-6.312 5.117'
    />
    <defs>
      <radialGradient
        id='edge_svg__a'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='matrix(10.8875 0 0 12.0666 8.937 16.514)'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.652} stopColor='#0083DE' />
        <stop offset={0.822} stopColor='#006AAC' />
        <stop offset={0.944} stopColor='#005A8C' />
      </radialGradient>
      <radialGradient
        id='edge_svg__b'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='matrix(8.40378 0 0 8.4273 14.082 14.708)'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.69} stopColor='#05509B' />
        <stop offset={0.717} stopColor='#054E98' />
        <stop offset={1} stopColor='#033E78' />
      </radialGradient>
      <radialGradient
        id='edge_svg__c'
        cx={0}
        cy={0}
        r={1}
        gradientTransform='matrix(-31.3813 0 0 -47.3356 24.06 7.949)'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#5EEB69' />
        <stop offset={0.214} stopColor='#4BC958' />
        <stop offset={0.225} stopColor='#4AC862' />
        <stop offset={0.272} stopColor='#47C68B' />
        <stop offset={0.323} stopColor='#44C4AE' />
        <stop offset={0.376} stopColor='#41C2CB' />
        <stop offset={0.433} stopColor='#3FC1E1' />
        <stop offset={0.495} stopColor='#3EC0F1' />
        <stop offset={0.565} stopColor='#3DBFFA' />
        <stop offset={0.664} stopColor='#3DBFFD' />
      </radialGradient>
    </defs>
  </svg>
);
export default SvgEdge;
