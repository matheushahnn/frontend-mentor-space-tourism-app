export default function Title({ number = 1, title = '' }) {
  return (
    <div className="mt-9 flex justify-center sm:justify-start sm:pl-6 lg:pl-0">
      <span className="opacity-25 font-bold font-barlow text-white text-lg lg:text-3xl">
        {number}
      </span>
      <h1 className="ml-4 font-barlow text-white uppercase text-lg tracking-widest sm:text-xl lg:text-3xl">
        {title}
      </h1>
    </div>
  )
}
