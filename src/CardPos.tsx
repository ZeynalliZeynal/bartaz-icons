import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCardPos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      d='M21.25 22H2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18.5c.41 0 .75.34.75.75s-.34.75-.75.75'
    />
    <path
      fill='currentColor'
      d='m20.59 13.7-7.23 7.23a3.62 3.62 0 0 1-5.12.01l-4.61-4.61L15.99 3.97l4.61 4.61a3.62 3.62 0 0 1-.01 5.12'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      d='M15.99 3.97 3.62 16.33l-.91-.91a3.62 3.62 0 0 1 .01-5.12l7.23-7.23a3.62 3.62 0 0 1 5.12-.01zM12.89 17.6l-1.35 1.35c-.28.28-.73.28-1.01 0a.71.71 0 0 1 0-1.01l1.35-1.35c.28-.28.73-.28 1.01 0s.28.73 0 1.01M17.27 13.22l-2.69 2.69c-.28.28-.73.28-1.01 0a.71.71 0 0 1 0-1.01l2.69-2.69c.28-.28.73-.28 1.01 0 .27.28.27.73 0 1.01'
    />
  </svg>
);
export default SvgCardPos;
