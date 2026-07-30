import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const site = {
  name: 'SJB C&C - Construction & Contracting',
  url: 'https://sjb-c-c.vercel.app',
  phone: '+919629528219',
  email: 'sjbconstructionandcontracts@gmail.com',
  logo: 'https://sjb-c-c.vercel.app/images/logo.png',
  addressVillupuram: {
    street: 'No. 24, Karumara Street, Sithathur, Kandachipuram Tk',
    city: 'Villupuram',
    state: 'Tamil Nadu',
    zip: '605602',
  },
  addressChennai: {
    street: 'No. 10, Kennedy Street, MG Nagar, Tharamani',
    city: 'Chennai',
    state: 'Tamil Nadu',
  },
  geoVillupuram: { lat: '11.9398', lng: '79.4938' },
  geoChennai: { lat: '12.9812', lng: '80.2171' },
  areaServed: ['Villupuram', 'Chennai', 'Tindivanam', 'Cuddalore', 'Pondicherry', 'Ulundurpet', 'Gingee', 'Vanur'],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SJB C&C - Construction & Contracting',
  image: site.logo,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  description: 'Tamil Nadu\'s trusted budget-friendly construction startup delivering residential, commercial, and renovation projects with quality, safety, and modern innovation.',
  foundingDate: '2026',
  founder: { '@type': 'Person', name: 'Balachandhiran' },
  address: [
    { '@type': 'PostalAddress', streetAddress: site.addressVillupuram.street, addressLocality: site.addressVillupuram.city, addressRegion: site.addressVillupuram.state, postalCode: site.addressVillupuram.zip, addressCountry: 'IN' },
    { '@type': 'PostalAddress', streetAddress: site.addressChennai.street, addressLocality: site.addressChennai.city, addressRegion: site.addressChennai.state, addressCountry: 'IN' },
  ],
  geo: [
    { '@type': 'GeoCoordinates', latitude: site.geoVillupuram.lat, longitude: site.geoVillupuram.lng, name: 'Villupuram Office' },
    { '@type': 'GeoCoordinates', latitude: site.geoChennai.lat, longitude: site.geoChennai.lng, name: 'Chennai Office' },
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '00:00', closes: '00:00', description: 'Emergency Only' },
  ],
  sameAs: [
    'https://www.instagram.com/sjbcc_tn32',
    'https://www.youtube.com/@SJBConstructionandcontracts',
    'https://wa.me/919629528219',
  ],
  areaServed: site.areaServed.map(c => ({ '@type': 'City', name: c })),
  priceRange: '₹₹',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What services does SJB C&C offer in Tamil Nadu?', acceptedAnswer: { '@type': 'Answer', text: 'SJB C&C offers residential construction, commercial construction, interior design, renovation, architecture & design, civil contracting, plumbing services, electrical works, painting services, exterior design, and full project management across Tamil Nadu.' } },
    { '@type': 'Question', name: 'Which cities in Tamil Nadu do you serve?', acceptedAnswer: { '@type': 'Answer', text: 'We serve Villupuram, Chennai, Tindivanam, Cuddalore, Pondicherry, Ulundurpet, Gingee, Vanur, and surrounding areas.' } },
    { '@type': 'Question', name: 'How long has SJB C&C been operating?', acceptedAnswer: { '@type': 'Answer', text: 'SJB C&C was founded in 2026 and has delivered 35+ projects across Tamil Nadu.' } },
    { '@type': 'Question', name: 'Do you handle DTCP and CMDA approvals?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we handle all regulatory approvals including DTCP, CMDA, and local municipal permissions for projects across Tamil Nadu.' } },
    { '@type': 'Question', name: 'What is the typical timeline for home construction?', acceptedAnswer: { '@type': 'Answer', text: 'A standard independent house takes 8-14 months depending on size and complexity. Commercial projects typically take 12-18 months.' } },
    { '@type': 'Question', name: 'Is SJB C&C a budget-friendly construction company?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, SJB C&C offers budget-friendly construction solutions across Tamil Nadu for residential and commercial projects. We provide transparent pricing, cost-effective designs, and value-engineered construction without compromising quality.' } },
  ],
}

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SJB C&C - Construction & Contracting',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    ratingCount: '35',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: { '@type': 'LocalBusiness', name: 'SJB C&C - Construction & Contracting' },
  areaServed: site.areaServed.map(c => ({ '@type': 'City', name: c })),
}

const pathLabels = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/projects': 'Projects',
  '/gallery': 'Gallery',
  '/testimonials': 'Testimonials',
  '/faq': 'FAQ',
  '/contact': 'Contact',
  '/careers': 'Careers',
  '/privacy': 'Privacy',
  '/terms': 'Terms',
  '/service-areas/villupuram': 'Villupuram',
  '/service-areas/chennai': 'Chennai',
}

function breadcrumbSchema(currentPath) {
  const parts = currentPath.split('/').filter(Boolean)
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }]
  let accumulated = ''
  parts.forEach((part, i) => {
    accumulated += '/' + part
    const label = pathLabels[accumulated] || part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ')
    items.push({ '@type': 'ListItem', position: i + 2, name: label, item: `${site.url}${accumulated}` })
  })
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items }
}

export default function SEO({ title, description, path, ogImage, ogType = 'website', noSchema }) {
  const location = useLocation()
  const url = `${site.url}${path || location.pathname}`
  const fullTitle = title ? `${title} | SJB C&C` : 'SJB C&C - Construction & Contracting | Villupuram, Tamil Nadu'
  const desc = description || 'Tamil Nadu\'s trusted budget-friendly construction startup delivering residential, commercial, and renovation projects with quality, safety, and modern innovation.'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {!noSchema && (
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      )}
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(path || location.pathname))}</script>
    </Helmet>
  )
}

export function FAQSchema() {
  return (
    <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
  )
}

export function ReviewSchema() {
  return (
    <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
  )
}

export function ServiceSchema({ serviceName, serviceDescription }) {
  const s = {
    ...serviceSchema,
    name: serviceName || 'Construction Services',
    description: serviceDescription || 'Professional construction services across Tamil Nadu.',
  }
  return <script type="application/ld+json">{JSON.stringify(s)}</script>
}
