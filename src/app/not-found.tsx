import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <div className="mx-auto max-w-xl px-6">
        <h1 className="font-serif text-5xl text-neutral-dark mb-4">404</h1>
        <p className="text-neutral-mid text-lg mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-dark transition-colors"
        >
          Go Home
        </Link>
      </div>
    </section>
  )
}
