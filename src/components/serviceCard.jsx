
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
}) {
  return (
    <article className="group rounded-2xl border border-gray-200
      bg-white p-7 transition-all duration-300
      hover:-translate-y-1 hover:border-green-800/30
      hover:shadow-xl">

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-400">
          {number}
        </span>

        <div className="rounded-xl bg-[#E9EFE8] p-3
          text-[#174B37] transition-colors
          group-hover:bg-[#174B37] group-hover:text-white">

          {Icon && <Icon size={25} />}
        </div>
      </div>

      <h3 className="mt-8 text-xl font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-3 min-h-14 text-sm leading-7 text-gray-600">
        {description}
      </p>

      <Link
        to="/contact"
        className="mt-6 inline-flex items-center gap-2
          font-semibold text-[#174B37]"
      >
        Enquire about this service

        <ArrowUpRight
          size={18}
          className="transition-transform group-hover:translate-x-1
            group-hover:-translate-y-1"
        />
      </Link>

    </article>
  )
}
