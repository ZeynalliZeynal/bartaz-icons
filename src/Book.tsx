import * as React from 'react';
import type { SVGProps } from 'react';
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
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
      d='M12 5.3v16.03c-.17 0-.35-.03-.49-.11l-.04-.02c-1.92-1.05-5.27-2.15-7.44-2.44l-.29-.04C2.78 18.6 2 17.7 2 16.74V4.66c0-1.19.97-2.09 2.16-1.99 2.1.17 5.28 1.23 7.06 2.34l.25.15c.15.09.34.14.53.14'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      d='M22 4.67v12.07c0 .96-.78 1.86-1.74 1.98l-.33.04c-2.18.29-5.54 1.4-7.46 2.46-.13.08-.29.11-.47.11V5.3c.19 0 .38-.05.53-.14l.17-.11c1.78-1.12 4.97-2.19 7.07-2.37h.06c1.19-.1 2.17.79 2.17 1.99M7.75 9.24H5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25c.41 0 .75.34.75.75s-.34.75-.75.75M8.5 12.24h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75'
    />
  </svg>
);
export default SvgBook;
