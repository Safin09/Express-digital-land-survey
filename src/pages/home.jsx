import { Link } from 'react-router-dom'
import { ArrowRight, Map, FileCheck, Ruler } from 'lucide-react'
import Navbar from '../components/navbar'
import ServiceCard from '../components/serviceCard'
import { services } from '../data/services'


// const services = [
//   {
//     title: 'Digital Land Survey',
//     text: 'Field measurements and organized digital survey outputs.',
//     icon: Ruler,
//   },
//   {
//     title: 'Map Preparation',
//     text: 'Clear plot maps, layouts, and survey drawings.',
//     icon: Map,
//   },
//   {
//     title: 'Land Record Support',
//     text: 'Deed and Mouza map retrieval assistance and record checks.',
//     icon: FileCheck,
//   },
// ]

export default function Home() {
  return (
    <main className="bg-[#F7F8F4] text-[#18231E]">
      <section className="relative overflow-hidden bg-[#174B37]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        <div className="relative">
          {/* <Navbar /> */}

          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24
            md:grid-cols-2 md:items-center md:py-36">

            <div className="max-w-2xl text-white">
              <p className="mb-6 text-sm font-semibold uppercase
                tracking-[0.2em] text-lime-300">
                Digital Survey · Mapping · Land Records
              </p>

              <h1 className="text-5xl font-semibold leading-tight
                tracking-tight md:text-7xl">
                Know your land.
                <span className="block text-lime-300">
                  Map it with confidence.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                Modern land surveying, map preparation, demarcation,
                and land-record support for clearer property decisions.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full
                    bg-lime-300 px-6 py-4 font-semibold text-green-950"
                >
                  Request a Survey <ArrowRight size={18} />
                </Link>

                <Link
                  to="/services"
                  className="rounded-full border border-white/40
                    px-6 py-4 font-semibold text-white"
                >
                  Explore Services
                </Link>
              </div>

              <p className="mt-10 text-sm text-white/70">
                Led by Faysal Ahamed Shanto · Owner & Surveyor
              </p>
            </div>

            <div className="hidden md:block">
              <div className="rounded-3xl border border-white/20
                bg-white/10 p-4 shadow-2xl backdrop-blur-sm">
                <div className="rounded-2xl bg-[#F7F8F4] p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">
                      SURVEY OVERVIEW
                    </span>
                    <span className="text-xs text-green-800">
                      DIGITAL MAPPING
                    </span>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-xl">
                    <img
                      src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80"
                      alt="Aerial landscape illustrating land mapping"
                      className="h-64 w-full object-cover"
                    />
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white p-4">
                      <Map className="mb-2 text-green-800" />
                      <p className="font-semibold">Digital maps</p>
                      <p className="mt-1 text-sm text-gray-500">
                        Clear deliverables
                      </p>
                    </div>
                    <div className="rounded-xl bg-white p-4">
                      <FileCheck className="mb-2 text-green-800" />
                      <p className="font-semibold">Land records</p>
                      <p className="mt-1 text-sm text-gray-500">
                        Organized documents
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

     
<section className="mx-auto max-w-7xl px-6 py-24">

  <p className="text-sm font-semibold uppercase tracking-widest
    text-green-800">
    Our Services
  </p>

  <h2 className="mt-4 max-w-2xl text-4xl font-semibold
    tracking-tight md:text-5xl">
    From field measurements to organized records.
  </h2>

  <p className="mt-5 max-w-2xl leading-7 text-gray-600">
    Explore our land surveying, mapping, and record-support services
    tailored to your project requirements.
  </p>

  <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

    {services.map((service) => (
      <ServiceCard
        key={service.number}
        number={service.number}
        title={service.title}
        description={service.description}
        icon={service.icon}
      />
    ))}

  </div>

</section>


      <section className="bg-[#E9EFE8] px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col
          items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest
              text-green-800">
              Have a survey project?
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Let's discuss your land.
            </h2>
          </div>

          <Link
            to="/contact"
            className="rounded-full bg-[#174B37] px-6 py-4
              font-semibold text-white"
          >
            Contact Our Team <ArrowRight className="ml-2 inline" size={18} />
          </Link>
        </div>
      </section>

      <footer className="bg-[#122F24] px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col
          justify-between gap-3 text-sm md:flex-row">
          <p>Express Digital Land Survey</p>
          <p>Owner & Surveyor: Faysal Ahamed Shanto</p>
        </div>
      </footer>
    </main>
  )
}