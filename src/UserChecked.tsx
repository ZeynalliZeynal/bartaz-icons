import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M17.3 13.217a.96.96 0 0 1-.68-.282l-1.403-1.407a.96.96 0 1 1 1.36-1.355l.723.726 2.217-2.214a.96.96 0 0 1 1.357 1.358l-2.896 2.894a.96.96 0 0 1-.679.28M8.985 12.496a4.544 4.544 0 0 0 4.541-4.536c0-2.501-2.037-4.536-4.54-4.536A4.544 4.544 0 0 0 4.444 7.96c0 2.5 2.037 4.536 4.54 4.536'
      clipRule='evenodd'
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M8.985 14.396c-2.923 0-6.81.32-6.81 3.08 0 3.1 5.125 3.1 6.81 3.1 2.923 0 6.811-.32 6.811-3.08 0-3.1-5.126-3.1-6.81-3.1'
      clipRule='evenodd'
      opacity={0.4}
    />
  </svg>
);
export default SvgUserChecked;
