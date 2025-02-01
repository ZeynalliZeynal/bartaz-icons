import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCloseRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <g fill='currentColor' opacity={0.4}>
      <path d='m13.414 12 5.293-5.293a.999.999 0 1 0-1.414-1.414L12 10.586zM10.586 12l-5.293 5.293a.999.999 0 1 0 1.414 1.414L12 13.414z' />
    </g>
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M18.707 17.293 13.414 12 12 10.586 6.707 5.293a.999.999 0 1 0-1.414 1.414L10.586 12 12 13.414l5.293 5.293a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgCloseRemove;
