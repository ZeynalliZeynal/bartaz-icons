import * as React from 'react';
import type { SVGProps } from 'react';
const SvgExchange = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='#292D32'
      d='M22 9v6c0 3.5-2 5-5 5H9.74c.17-.47.26-.97.26-1.5a4.495 4.495 0 0 0-8-2.82V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5'
      opacity={0.4}
    />
    <path
      fill='#292D32'
      d='M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M18.5 14.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75M5.5 14c-1.41 0-2.68.66-3.5 1.68-.63.77-1 1.75-1 2.82A4.5 4.5 0 0 0 5.5 23c1.96 0 3.63-1.25 4.24-3 .17-.47.26-.97.26-1.5A4.5 4.5 0 0 0 5.5 14m2.66 6.46c-.03.06-.07.13-.12.18l-.81.8c-.1.11-.24.16-.38.16-.15 0-.29-.05-.39-.16a.53.53 0 0 1-.09-.64H4.11c-.72 0-1.31-.59-1.31-1.32v-.11c0-.31.25-.55.55-.55s.55.24.55.55v.11c0 .12.09.22.21.22h2.26a.55.55 0 0 1 .09-.65.55.55 0 0 1 .77 0l.81.81q.075.075.12.18c.05.13.05.28 0 .42m.04-2.83c0 .31-.25.55-.55.55s-.55-.24-.55-.55v-.11c0-.12-.09-.22-.21-.22H4.63a.547.547 0 0 1-.48.81c-.14 0-.28-.06-.38-.16l-.81-.81a.6.6 0 0 1-.12-.18.6.6 0 0 1 0-.42c.03-.06.07-.13.12-.18l.81-.8c.21-.22.56-.22.77 0 .18.17.2.44.09.64h2.26c.72 0 1.31.59 1.31 1.32z'
    />
  </svg>
);
export default SvgExchange;
