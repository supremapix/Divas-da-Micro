
import { Service, FAQItem, LocationData } from './types';

export const COLORS = {
  primary: '#D4567D',
  secondary: '#C5A059',
  black: '#111827',
  white: '#FFFFFF',
  muted: '#F9FAFB',
  fb: '#1877f2'
};

export const CONTACT_INFO = {
  address: "Av. Sete de Setembro, 4995 - Batel, Curitiba/PR, 80250-205",
  whatsapp: "5541997879392",
  whatsappDisplay: "(41) 99787-9392",
  email: "sac@divasespacodabeleza.com.br",
  hours: "Segunda a Sexta, 10h às 20h",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Sete+de+Setembro,+4995+-+Batel,+Curitiba/PR",
  serviceRadius: "45km"
};

export const getWhatsAppLink = (origin: string) => {
  // Use the exact message requested by the user
  const message = encodeURIComponent(`Olá! Estava olhando seu site (${origin}) e gostaria de agendar um`);
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
};

export const SERVICES: Service[] = [
  {
    id: 'sobrancelhas',
    title: 'Harmonização de Sobrancelhas',
    description: 'Recuperação de design e cor para sobrancelhas antigas.',
    details: 'Especialistas em reverter pigmentos cinzas ou vermelhos. Procedimento indolor com anestésico premium para um olhar rejuvenescido e natural.',
    icon: 'Sparkles',
    image: '/imagem-do-whatsapp-de-2024-10-20-s-14.36.33-1118b7c8-416x891.jpg'
  },
  {
    id: 'olhos',
    title: 'Correção de Olhos',
    description: 'Ajuste de delineados que perderam a definição.',
    details: 'Técnica indolor exclusiva para peles maduras. Conforto total com anestésicos manipulados premium para corrigir traços expandidos.',
    icon: 'Eye',
    image: '/correo-de-micropigmentao-de-sobrancelhas-em-curitiba-5-360x771.jpg'
  },
  {
    id: 'labios',
    title: 'Correção Labial',
    description: 'Revitalização de cor e contorno para lábios desbotados.',
    details: 'Neutralização de tons e volume visual. 100% indolor com protocolos especiais Divas para lábios mais vivos e definidos.',
    icon: 'Heart',
    image: '/cuidados-ps-micropigmentao-de-labios-labial-curitiba-240x242.png'
  }
];

export const GOOGLE_REVIEWS = [
  { id: 1, name: "Maria do Carmo", text: "Minha sobrancelha estava horrível, escura e torta. A Divas da Micro transformou meu rosto. O atendimento em casa é um luxo!", stars: 5, date: "há 2 meses" },
  { id: 2, name: "Helena Souza", text: "Pensei que não tinha mais jeito para o meu delineado. Ficou maravilhoso e não senti absolutamente nada. O anestésico é mágico.", stars: 5, date: "há 3 meses" },
  { id: 3, name: "Vera Lúcia", text: "Meus lábios voltaram a ter vida. Recomendo para todas as mulheres que querem se sentir bonitas novamente.", stars: 5, date: "há 1 semana" },
  { id: 4, name: "Sra. Elizabeth", text: "Excelente profissional. Me explicou tudo com muita paciência. Recomendo para todas as minhas amigas.", stars: 5, date: "há 4 meses" },
  { id: 5, name: "Carmen Lúcia", text: "Estava com medo de fazer por causa da idade, mas o anestésico funciona mesmo. Ficou muito natural!", stars: 5, date: "há 2 semanas" },
  { id: 6, name: "Dona Maria Helena", text: "O atendimento em casa foi maravilhoso. Minha sobrancelha estava cinza e agora está perfeita!", stars: 5, date: "há 1 mês" }
];

export const FAQS: FAQItem[] = [
  {
    question: "O procedimento de correção dói?",
    answer: "Não! Utilizamos anestésicos tópicos manipulados de alta potência, desenvolvidos especificamente para o conforto das nossas Divas. A maioria das nossas clientes relata que o procedimento é extremamente relaxante e praticamente indolor."
  },
  {
    question: "Como funciona o atendimento em casa?",
    answer: "Levamos toda a estrutura de um estúdio profissional até a sua residência. Utilizamos materiais 100% descartáveis e seguimos rigorosos protocolos de higiene e biossegurança para garantir sua total segurança e conforto."
  },
  {
    question: "Quanto tempo dura uma sessão de correção?",
    answer: "Uma sessão dura em média de 2 a 3 horas. Esse tempo é necessário para avaliarmos cuidadosamente o pigmento antigo, neutralizarmos as cores indesejadas e redesenharmos o novo formato com precisão."
  },
  {
    question: "Qualquer micropigmentação antiga pode ser corrigida?",
    answer: "A maioria dos casos tem solução! Seja uma sobrancelha que ficou cinza, azulada ou avermelhada, ou um design que não agrada mais. Realizamos uma avaliação gratuita para determinar a melhor técnica de correção para o seu caso específico."
  }
];

export const CURITIBA_NEIGHBORHOODS = [
  "Abranches", "Água Verde", "Ahú", "Alto Boqueirão", "Alto da Glória", "Alto da Rua XV", "Atuba", "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho", "Boa Vista", "Bom Retiro", "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", "Campo Comprido", "Campo de Santana", "Capão da Imbuia", "Capão Raso", "Cascatinha", "Caximba", "Centro", "Centro Cívico", "Cristo Rei", "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", "Hugo Lange", "Jardim Botânico", "Jardim das Américas", "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", "Mossunguê", "Novo Mundo", "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Riviera", "Santa Cândida", "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco", "São João", "São Lourenço", "São Miguel", "Seminário", "Sítio Cercado", "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", "Vila Izabel", "Vista Alegre", "Xaxim", "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Tanguá", "Vila Zumbi", "Vila Tecnológica", "Vila Verde", "Vila São José", "Vila Santa Helena", "Vila Industrial", "Vila Conquista", "Vila União", "Vila Nova Esperança", "Vila Osternack", "Vila Nova", "Vila São Domingos", "Vila Audi União", "Vila Becker", "Vila Copel", "Vila Eletrosul", "Vila Trabalhador", "Vila São João", "Vila Araucária", "Vila Concórdia", "Vila Oficinas", "Vila Fanny", "Vila Pantanal"
];

export const RMC_CITIES = [
  "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", "Bocaiúva do Sul", "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", "Campo Magro", "Cerro Azul", "Colombo", "Contenda", "Doutor Ulysses", "Fazenda Rio Grande", "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", "Quatro Barras", "Quitandinha", "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná"
];

export const ALL_LOCATIONS: LocationData[] = [
  ...CURITIBA_NEIGHBORHOODS.map(name => ({ slug: name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-'), name, isCity: false })),
  ...RMC_CITIES.map(name => ({ slug: name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-'), name, isCity: true }))
];

export const PROCEDURES_TIPS = [
  "Hidratação intensa 3 dias antes do procedimento labial.",
  "Evite exposição solar direta por 15 dias após a correção.",
  "Não remova as crostas que se formam durante a cicatrização.",
  "Utilize apenas a pomada recomendada por sua especialista.",
  "Evite banhos de mar ou piscina nos primeiros 10 dias.",
  "Mantenha a área higienizada com sabonete neutro.",
  "Beba bastante água para manter a pele hidratada.",
  "Evite alimentos gordurosos na primeira semana de cicatrização.",
  "Não use maquiagem sobre a área pigmentada até a cicatrização completa.",
  "Proteja suas sobrancelhas com protetor solar após os 30 dias.",
  "O retoque é essencial para garantir a durabilidade da cor.",
  "A cor clareia até 40% após a primeira semana.",
  "Neutralização de tons cinzas exige paciência e técnica.",
  "O design é aprovado por você antes de iniciar a pigmentação.",
  "Pele madura exige agulhas de calibre específico.",
  "O anestésico premium garante que você não sinta desconforto.",
  "A técnica russa proporciona fios extremamente finos e naturais.",
  "Correção de designs antigos pode exigir mais de uma sessão.",
  "Sempre informe sobre o uso de medicamentos contínuos.",
  "A cicatrização completa leva cerca de 28 a 30 dias.",
  "Evite atividades físicas intensas nas primeiras 48 horas.",
  "Lave as mãos antes de tocar na área em cicatrização.",
  "A assepsia é o primeiro passo para um resultado seguro.",
  "A escolha do pigmento ideal depende do seu fototipo.",
  "Lábios pigmentados devolvem a aparência de jovialidade.",
  "Delineado de olhos realça o olhar sem parecer artificial.",
  "A Divas da Micro foca em beleza natural, não em exageros.",
  "Atendimento domiciliar reduz o estresse do pós-procedimento.",
  "Nossa biossegurança segue padrões hospitalares rigorosos.",
  "O uso de EPIs é obrigatório durante todo o atendimento.",
  "Ferramentas de precisão alemã para resultados superiores.",
  "Correção de sobrancelhas avermelhadas com pigmentos frios.",
  "O arco do cupido pode ser levemente realçado na correção labial.",
  "Delineados azuis antigos podem ser neutralizados com tons quentes.",
  "A pele 60+ hat um tempo de renovação celular diferenciado.",
  "O cuidado com a pressão da mão evita traumas na pele fina.",
  "Sobrancelhas benfeitas funcionam como um 'lifting' no olhar.",
  "Olhos expressivos sem a necessidade de maquiagem diária.",
  "Lábios saudáveis e com cor natural todos os dias.",
  "A consulta inicial é fundamental para alinhar expectativas.",
  "Cada pele reage de forma única ao pigmento.",
  "O suporte pós-procedimento da Divas é vitalício.",
  "Agende seu retoque com antecedência de 30 a 45 dias.",
  "O uso de ácidos deve ser suspenso 15 dias antes.",
  "Procedimentos em diabéticos exigem autorização médica.",
  "Hipertensos controlados podem realizar o procedimento com segurança.",
  "A correção traz harmonia onde havia assimetria.",
  "Pigmentos de alta carga pigmentária para melhor fixação.",
  "A técnica de Shadow é ideal para cobrir falhas severas.",
  "O efeito degradê nas sobrancelhas evita o aspecto 'carimbado'.",
  "Nossa missão é devolver sua autoconfiança no espelho.",
  "Beleza não tem idade, mas exige técnica especializada.",
  "Atendemos toda a região metropolitana com agendamento prévio.",
  "O anestésico manipulado é o segredo do nosso conforto.",
  "Divas da Micro: Arte e Ciência em micropigmentação."
];
