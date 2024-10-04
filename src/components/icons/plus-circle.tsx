import { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

export const PlusCircle = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path fill="#000" d="M9.75 5.25h-1.5v3h-3v1.5h3v3h1.5v-3h3v-1.5h-3v-3Z" />
    <path
      fill="#000"
      d="M9 1.5C4.864 1.5 1.5 4.864 1.5 9s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5S13.136 1.5 9 1.5ZM9 15c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6Z"
    />
  </svg>
)
