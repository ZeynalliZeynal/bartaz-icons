import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSafeBox = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule='evenodd'
      d='M21.12 7.656v7.123c0 1.93-1.21 3.572-2.909 4.205a4 4 0 0 1-1.44.288c-.048.01-.096.01-.144.01H7.373c-.048 0-.087 0-.135-.01a4.2 4.2 0 0 1-1.44-.278 4.5 4.5 0 0 1-2.918-4.215V7.656a4.5 4.5 0 0 1 4.493-4.502h9.254a4.5 4.5 0 0 1 4.493 4.502'
      clipRule='evenodd'
      opacity={0.4}
    />
    <path
      fill='currentColor'
      fillRule='evenodd'
      d='M12.002 12.625c-.78 0-1.413-.633-1.413-1.41 0-.768.617-1.392 1.38-1.409.012 0 .02.006.031.006.012 0 .02-.006.032-.006.764.016 1.381.64 1.381 1.408 0 .778-.632 1.41-1.411 1.41m3.914-2.13h-1.167a2.85 2.85 0 0 0-2.029-2.03V7.299a.72.72 0 0 0-1.44 0v1.169a2.85 2.85 0 0 0-2.027 2.027H8.087a.72.72 0 0 0 0 1.44h1.166a2.85 2.85 0 0 0 2.027 2.027v1.17a.72.72 0 0 0 1.44 0v-1.17a2.85 2.85 0 0 0 2.03-2.027h1.166a.72.72 0 0 0 0-1.44M5.798 20.127a.719.719 0 1 0 1.44 0v-.854a4.2 4.2 0 0 1-1.44-.279zM16.771 19.273v.854a.719.719 0 1 0 1.44 0v-1.142a4 4 0 0 1-1.44.288'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgSafeBox;
