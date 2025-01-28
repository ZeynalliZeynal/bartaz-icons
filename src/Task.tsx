import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTask = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <g clipPath='url(#task_svg__a)'>
      <rect
        width={6.9}
        height={13.8}
        x={-0.3}
        y={11.937}
        fill='#175ABD'
        rx={1.2}
        transform='rotate(-45 -.3 11.937)'
      />
      <rect
        width={20.7}
        height={6.6}
        x={4.791}
        y={17.027}
        fill='#2993E9'
        rx={1.2}
        transform='rotate(-45 4.791 17.027)'
      />
    </g>
    <defs>
      <clipPath id='task_svg__a'>
        <rect width={24} height={24} fill='#fff' rx={7.2} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTask;
