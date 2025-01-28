import * as React from 'react';
import type { SVGProps } from 'react';
const SvgChatBubble = (props: SVGProps<SVGSVGElement>) => (
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
      d='M18.296 4.114c-2.063-1.626-4.75-2.314-7.5-2.064-4.625.5-8.313 3.877-8.75 8.193-.5 4.753 3.125 8.505 8.937 9.13v1.564c0 .313.188.625.5.875.188.125.438.188.688.188.125 0 .187 0 .312-.062 4.938-1.251 9.813-5.441 9.5-10.882-.125-2.69-1.5-5.254-3.687-6.942m-6.188 10.069H8.733a.83.83 0 0 1-.812-.813c0-.438.375-.813.812-.813h3.375c.438 0 .813.375.813.813-.063.437-.375.813-.813.813m3.125-4.003h-6.5a.83.83 0 0 1-.812-.813c0-.438.375-.75.812-.75h6.5c.438 0 .813.375.813.75a.83.83 0 0 1-.813.813'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgChatBubble;
