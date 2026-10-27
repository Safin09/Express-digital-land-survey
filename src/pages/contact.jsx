import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link to="/" className="text-green-800">← Home</Link>
      <h1 className="mt-8 text-4xl font-bold">
        Request a Survey
      </h1>
      <p className="mt-4 text-gray-600">
        Contact us to discuss your land survey or mapping requirements.
      </p>
      <p className="mt-6">
        Phone, WhatsApp, business address, and enquiry form
        will be added here.
      </p>
    </main>
  )
}