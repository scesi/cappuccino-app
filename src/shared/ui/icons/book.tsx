import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export const Book = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2ZM4 19V5h7v14H4Zm9 0V5h7l.001 14H13Z"
    />
    <path fill="#000" d="M15 7h3v2h-3V7Zm0 4h3v2h-3v-2Z" />
  </svg>
)
