import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export const Trash = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M3.75 15a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5V6h1.5V4.5h-3V3a1.5 1.5 0 0 0-1.5-1.5h-4.5A1.5 1.5 0 0 0 5.25 3v1.5h-3V6h1.5v9Zm3-12h4.5v1.5h-4.5V3ZM6 6h6.75v9h-7.5V6H6Z"
    />
    <path fill="#000" d="M6.75 7.5h1.5v6h-1.5v-6Zm3 0h1.5v6h-1.5v-6Z" />
  </svg>
)
