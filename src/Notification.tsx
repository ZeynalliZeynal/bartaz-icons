import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M11.996 2.514c-4.434 0-6.361 4.015-6.361 6.67 0 1.983.288 1.4-.81 3.82-1.341 3.448 4.05 4.857 7.17 4.857s8.512-1.41 7.172-4.858c-1.098-2.42-.81-1.836-.81-3.82 0-2.654-1.928-6.67-6.361-6.67'
      clipRule='evenodd'
    />
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M14.306 20.512c-1.295 1.445-3.314 1.463-4.62 0'
    />
  </svg>
);
export default SvgNotification;
