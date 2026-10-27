import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <Link to="/" className="text-green-800">← Home</Link>
      <h1 className="mt-8 text-4xl font-bold">Our Services</h1>
      <p className="mt-4 leading-8 text-gray-600">
        Digital survey, map preparation, deed and Mouza map
        retrieval, pantograph, demarcation, overlap, record
        organization, and record verification.
      </p>
    </main>
  )
}