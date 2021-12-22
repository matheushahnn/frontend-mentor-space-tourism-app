import Link from 'next/link'

export default function MenuItem({
  route = '',
  description = 'Home',
  active = false,
  number = '00',
}) {
  return (
    <li>
      <Link href={`/${route}`}>
        <a
          className={`font-barlow uppercase text-base text-white tracking-widest relative
          after:content-[''] after:absolute after:h-1 after:w-full after:left-0 after:top-[60px] 
        lg:space-x-2 cursor-pointer hover:after:bg-white hover:after:opacity-50 after:transition-opacity after:duration-500
        ${
          active
            ? 'after:bg-white after:opacity-100 hover:after:opacity-100'
            : 'after:opacity-0'
        }`}
        >
          <span className="hidden font-bold lg:inline">{number}</span>
          <span>{description}</span>
        </a>
      </Link>
    </li>
  )
}
