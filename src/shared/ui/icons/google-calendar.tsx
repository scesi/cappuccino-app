import { SVGProps } from 'react'

interface SVGComponentProps extends SVGProps<SVGSVGElement> {}

export const CalendarIcon = (props: SVGComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M2.25 4.5V15a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V4.5a1.5 1.5 0 0 0-1.5-1.5h-1.5V1.5h-1.5V3h-4.5V1.5h-1.5V3h-1.5a1.5 1.5 0 0 0-1.5 1.5Zm12 10.5H3.75V6h10.5v9Z"
    />
    <path
      fill="#000"
      d="M12.106 9.883H8.984v1.295h1.797c-.168.822-.868 1.294-1.797 1.294a1.976 1.976 0 0 1-1.98-1.98 1.976 1.976 0 0 1 1.98-1.98c.472 0 .898.168 1.233.443l.975-.975a3.335 3.335 0 0 0-2.208-.837 3.34 3.34 0 0 0-3.35 3.35 3.34 3.34 0 0 0 3.35 3.35c1.675 0 3.198-1.218 3.198-3.35 0-.198-.03-.412-.076-.61Z"
    />
  </svg>
)
