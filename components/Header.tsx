export default function Header() {
  return (
    <header className="bg-amber-800 text-white px-6 py-3 flex items-center justify-between gap-4">
      <span className="text-xl font-bold shrink-0">HopTrotter</span>
      <span className="text-sm text-amber-200 text-right hidden sm:block">
        Discover craft beer & natural wine near you
      </span>
    </header>
  )
}