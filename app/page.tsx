import Map from '@/components/Map'

export default function Home() {
  return (
    <main>
      <div className="p-8 pb-4">
        <h1 className="text-3xl font-bold">HopTrotter</h1>
        <p className="text-gray-500 mt-2">Your trail to the perfect pint</p>
      </div>
      <Map />
    </main>
  )
}