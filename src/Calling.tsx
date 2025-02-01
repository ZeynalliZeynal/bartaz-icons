import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCalling = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <g fill='currentColor' opacity={0.4}>
      <path d='M14.418 5.49a.854.854 0 0 0-1.004.68.86.86 0 0 0 .678 1.01 3.46 3.46 0 0 1 2.743 2.75.86.86 0 0 0 1.006.681.865.865 0 0 0 .677-1.01 5.17 5.17 0 0 0-4.1-4.111' />
      <path d='M14.356 2.008a.82.82 0 0 0-.625.176.85.85 0 0 0-.323.584.86.86 0 0 0 .757.95 6.91 6.91 0 0 1 6.126 6.139.857.857 0 1 0 1.704-.192c-.454-4.058-3.594-7.206-7.639-7.657' />
    </g>
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M11.032 12.972c3.989 3.988 4.894-.625 7.434 1.913 2.448 2.448 3.856 2.938.753 6.04-.388.312-2.857 4.07-11.534-4.605C-.993 7.644 2.762 5.172 3.074 4.784c3.11-3.11 3.592-1.695 6.04.753 2.54 2.54-2.071 3.447 1.918 7.435'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCalling;
