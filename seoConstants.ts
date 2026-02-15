export const SEO_CONFIG = {
  SITE_NAME: 'Divas da Micro',
  SITE_URL: 'https://www.divasespacodabeleza.com.br',
  COMPANY_NAME: 'Divas da Micro',
  DESCRIPTION: 'Especialistas em correção de micropigmentação em Curitiba. Atendimento domiciliar até 45km. Sobrancelhas, olhos e lábios - 100% indolor com anestésico premium.',
  KEYWORDS: 'micropigmentação, correção micropigmentação, sobrancelhas, delineado, lábios, Curitiba, atendimento domiciliar',

  BUSINESS: {
    name: 'Divas da Micro',
    type: 'LocalBusiness',
    image: 'https://www.divasespacodabeleza.com.br/hero.png',
    description: 'Especialistas em correção de micropigmentação antiga. Atendimento exclusivo e humanizado no conforto do seu lar.',
    address: {
      streetAddress: 'Av. Sete de Setembro, 4995',
      addressLocality: 'Batel',
      addressRegion: 'PR',
      postalCode: '80250-205',
      addressCountry: 'BR',
      city: 'Curitiba'
    },
    coordinates: {
      latitude: -25.4468,
      longitude: -49.2845
    },
    telephone: '+5541997879392',
    email: 'sac@divasespacodabeleza.com.br',
    hoursOfOperation: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '20:00'
      }
    ],
    serviceRadius: 45,
    serviceRadiusUnit: 'km',
    sameAs: [
      'https://www.instagram.com/divasespacodabeleza',
      'https://www.facebook.com/divasespacodabeleza'
    ]
  },

  PAGES: {
    home: {
      title: 'Correção de Micropigmentação em Curitiba | Divas da Micro',
      description: 'Especialistas em reverter micropigmentação antiga com resultados naturais. Atendimento domiciliar até 45km. 100% indolor com anestésico premium.',
      keywords: 'micropigmentação Curitiba, correção sobrancelhas, atendimento domiciliar, mulheres 60+, procedimento indolor'
    },
    services: {
      title: 'Serviços de Correção | Divas da Micro - Especialistas',
      description: 'Harmonização de sobrancelhas, correção de olhos e lábios. Técnicas russas avançadas para peles maduras. Atendimento até 45km de Curitiba.',
      keywords: 'serviços micropigmentação, harmonização sobrancelhas, correção olhos, lábios, técnica russa, pele madura'
    },
    correction: {
      title: 'Especialista em Correção de Micropigmentação | Divas da Micro',
      description: 'Mestre em neutralização de cores cinzas, azuis e vermelhas. Recupere a beleza natural de suas sobrancelhas. Avaliação de foto grátis até 45km.',
      keywords: 'correção micropigmentação, neutralização cores, sobrancelhas cinza, sobrancelhas azul, Curitiba'
    },
    care: {
      title: 'Cuidados Pós-Procedimento | Guia Completo | Divas da Micro',
      description: 'Tudo que você precisa saber para garantir um resultado impecável e duradouro após o procedimento de micropigmentação.',
      keywords: 'cuidados pós-procedimento, cicatrização, dicas especialista, micropigmentação cuidados'
    },
    contact: {
      title: 'Agende Sua Avaliação Gratuita | Divas da Micro',
      description: 'Marque sua avaliação gratuita de micropigmentação. Atendimento domiciliar em Curitiba e região até 45km. Segunda a sexta, 10h às 20h.',
      keywords: 'agendar, avaliação gratuita, contato, whatsapp, Curitiba, domiciliar'
    }
  },

  SERVICES: [
    {
      name: 'Harmonização de Sobrancelhas',
      description: 'Recuperação de design e cor para sobrancelhas antigas com especialização em reverter pigmentos cinzas ou vermelhos.',
      keywords: 'sobrancelhas, harmonização, design, color correction, correção',
      slug: 'sobrancelhas'
    },
    {
      name: 'Correção de Olhos',
      description: 'Ajuste de delineados que perderam a definição com técnica exclusiva para peles maduras e olhar rejuvenescido.',
      keywords: 'delineado, olhos, eyeliner, correção, definição',
      slug: 'olhos'
    },
    {
      name: 'Correção Labial',
      description: 'Revitalização de cor e contorno para lábios desbotados com neutralização de tons e volume visual saudável.',
      keywords: 'lábios, contorno labial, color correction, revitalização, volume',
      slug: 'labios'
    }
  ],

  GEO: {
    placename: 'Curitiba, PR, Brazil',
    latitude: -25.4468,
    longitude: -49.2845,
    radius: 45
  }
};

export function generateServiceAreaSchema(centerLat: number, centerLng: number, radiusKm: number = 45) {
  return {
    '@type': 'GeoShape',
    'box': generateBoundingBox(centerLat, centerLng, radiusKm)
  };
}

function generateBoundingBox(lat: number, lng: number, radiusKm: number) {
  const earthRadiusKm = 6371;
  const latOffset = (radiusKm / earthRadiusKm) * (180 / Math.PI);
  const lngOffset = (radiusKm / earthRadiusKm) * (180 / Math.PI) / Math.cos((lat * Math.PI) / 180);

  return {
    'northEast': {
      '@type': 'GeoCoordinates',
      'latitude': lat + latOffset,
      'longitude': lng + lngOffset
    },
    'southWest': {
      '@type': 'GeoCoordinates',
      'latitude': lat - latOffset,
      'longitude': lng - lngOffset
    }
  };
}

export function generateLocalBusinessSchema(locationName?: string) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': locationName ? `Divas da Micro - ${locationName}` : 'Divas da Micro',
    'image': SEO_CONFIG.BUSINESS.image,
    'description': SEO_CONFIG.BUSINESS.description,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': SEO_CONFIG.BUSINESS.address.streetAddress,
      'addressLocality': SEO_CONFIG.BUSINESS.address.addressLocality,
      'addressRegion': SEO_CONFIG.BUSINESS.address.addressRegion,
      'postalCode': SEO_CONFIG.BUSINESS.address.postalCode,
      'addressCountry': SEO_CONFIG.BUSINESS.address.addressCountry
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': SEO_CONFIG.BUSINESS.coordinates.latitude,
      'longitude': SEO_CONFIG.BUSINESS.coordinates.longitude
    },
    'telephone': SEO_CONFIG.BUSINESS.telephone,
    'email': SEO_CONFIG.BUSINESS.email,
    'openingHoursSpecification': SEO_CONFIG.BUSINESS.hoursOfOperation.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': hours.dayOfWeek,
      'opens': hours.opens,
      'closes': hours.closes
    })),
    'areaServed': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': SEO_CONFIG.BUSINESS.coordinates.latitude,
        'longitude': SEO_CONFIG.BUSINESS.coordinates.longitude
      },
      'geoRadius': `${SEO_CONFIG.BUSINESS.serviceRadius}km`
    },
    'priceRange': '$$',
    'url': SEO_CONFIG.SITE_URL
  };

  return schema;
}

export function generateBreadcrumbSchema(items: Array<{name: string; url: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': SEO_CONFIG.BUSINESS.name,
    'url': SEO_CONFIG.SITE_URL,
    'logo': SEO_CONFIG.BUSINESS.image,
    'description': SEO_CONFIG.BUSINESS.description,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': SEO_CONFIG.BUSINESS.address.streetAddress,
      'addressLocality': SEO_CONFIG.BUSINESS.address.addressLocality,
      'addressRegion': SEO_CONFIG.BUSINESS.address.addressRegion,
      'postalCode': SEO_CONFIG.BUSINESS.address.postalCode,
      'addressCountry': SEO_CONFIG.BUSINESS.address.addressCountry
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Customer Service',
      'telephone': SEO_CONFIG.BUSINESS.telephone,
      'email': SEO_CONFIG.BUSINESS.email,
      'areaServed': {
        '@type': 'GeoCircle',
        'geoMidpoint': {
          '@type': 'GeoCoordinates',
          'latitude': SEO_CONFIG.BUSINESS.coordinates.latitude,
          'longitude': SEO_CONFIG.BUSINESS.coordinates.longitude
        },
        'geoRadius': `${SEO_CONFIG.BUSINESS.serviceRadius}km`
      }
    },
    'sameAs': SEO_CONFIG.BUSINESS.sameAs
  };
}

export function generateServiceSchema(service: {name: string; description: string}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.name,
    'description': service.description,
    'provider': {
      '@type': 'LocalBusiness',
      'name': SEO_CONFIG.BUSINESS.name,
      'image': SEO_CONFIG.BUSINESS.image,
      'areaServed': {
        '@type': 'GeoCircle',
        'geoMidpoint': {
          '@type': 'GeoCoordinates',
          'latitude': SEO_CONFIG.BUSINESS.coordinates.latitude,
          'longitude': SEO_CONFIG.BUSINESS.coordinates.longitude
        },
        'geoRadius': `${SEO_CONFIG.BUSINESS.serviceRadius}km`
      }
    },
    'areaServed': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': SEO_CONFIG.BUSINESS.coordinates.latitude,
        'longitude': SEO_CONFIG.BUSINESS.coordinates.longitude
      },
      'geoRadius': `${SEO_CONFIG.BUSINESS.serviceRadius}km`
    },
    'priceRange': '$$'
  };
}

export function generateContactPointSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    'contactType': 'Customer Service',
    'telephone': SEO_CONFIG.BUSINESS.telephone,
    'email': SEO_CONFIG.BUSINESS.email,
    'availableLanguage': 'pt-BR',
    'hoursAvailable': 'Mon-Fri 10:00-20:00',
    'areaServed': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': SEO_CONFIG.BUSINESS.coordinates.latitude,
        'longitude': SEO_CONFIG.BUSINESS.coordinates.longitude
      },
      'geoRadius': `${SEO_CONFIG.BUSINESS.serviceRadius}km`
    }
  };
}
