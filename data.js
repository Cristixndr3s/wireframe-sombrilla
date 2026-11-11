/*
  Árbol de navegación de la marca sombrilla, versión aprobada (noviembre 2026).
  Base: menú RappiPay 2025 + complementos del documento de especificaciones.
  - nueva: true  = URL propuesta, no existe hoy.
  - nuevo: true  = producto o página que no existe hoy en ningún sitio.
  - rc: true     = viene de rappicard.co.
  - ref: '/ruta/' = el ítem reutiliza una página que ya existe en otra parte del árbol.
  - {{variable}} = dato administrable del CMS (Punto 4.7): nunca se escribe a mano.
*/
const ENTIDAD = {
  cf: 'RappiPay Compañía de Financiamiento S.A.',
  dav: 'Banco Davivienda S.A.',
  seg: 'H. RappiPay S.A.S. con SBS Seguros',
  tbd: 'Entidad por confirmar'
};

const CTA = {
  cuenta: 'Abrir RappiCuenta',
  card: 'Pedir RappiCard',
  empresa: 'Registrar empresa',
  tbd: 'CTA por definir'
};

const TREE = [
  // ---------------------------------------------------------------- 1. PARA TI
  {
    path: '/', title: 'Para ti', type: 'home', cta: CTA.cuenta,
    prop: 'Tu plata se mueve a la velocidad de Rappi',
    desc: 'Cuenta, tarjeta, préstamos y seguros 100% digitales, que se resuelven en minutos desde la app y te devuelven valor dentro de Rappi.',
    children: [
      {
        path: '/rappicuenta/', title: 'RappiCuenta', type: 'product', entidad: 'cf', cta: CTA.cuenta,
        kicker: 'Cuenta de ahorros y depósito de bajo monto',
        prop: 'Tu plata rinde y se mueve al instante',
        desc: 'Guarda y organiza tu plata en una cuenta pensada para tu día a día, sin cuota de manejo.',
        proofs: ['{{cuota_manejo}} cuota de manejo', '{{tasa_bolsillos}} E.A. en Bolsillos', 'Hasta {{tasa_bovedas_max}} E.A.* en Bóvedas'],
        children: [
          { path: '/rappicuenta/cuenta-de-ahorros/', title: 'Cuenta de ahorros', type: 'feature', prop: 'Tipos de cuenta y cómo abrir la tuya' },
          { path: '/rappicuenta/bolsillos/', nueva: true, title: 'Bolsillos', type: 'feature', prop: 'Separa tu plata por metas y que rinda cada día' },
          { path: '/rappicuenta/bovedas/', title: 'Bóvedas', type: 'feature', prop: 'Deja tu plata quieta y gana más por el plazo que elijas' },
          { path: '/rappicuenta/alta-rentabilidad-cuentas/', title: 'Rentabilidad', type: 'feature', prop: 'Cuánto rinde tu plata en cada opción' },
          { path: '/rappicuenta/ahorro-automatico/', nueva: true, title: 'Ahorro automático', type: 'feature', prop: 'Ahorra sin pensarlo, con reglas que tú defines' },
          { path: '/alianzas/', title: 'Beneficios y alianzas', type: 'feature', prop: 'Descuentos con marcas aliadas pagando con RappiCuenta' },
          { path: '/rappicuenta/blog/', nueva: true, title: 'Todo sobre RappiCuenta', type: 'category', prop: 'Guías, primeros pasos y novedades de tu cuenta' }
        ]
      },
      {
        path: '/tarjetas/', nueva: true, title: 'Tarjetas de crédito', type: 'need',
        prop: 'La tarjeta que va contigo, tengas historial o no',
        desc: 'El crédito como herramienta para pagar, comprar y organizar tus gastos, no como una obligación.',
        children: [
          {
            path: '/rappicard/', rc: true, title: 'RappiCard', type: 'product', entidad: 'dav', cta: CTA.card,
            kicker: 'Tarjeta de crédito',
            prop: 'La tarjeta que te devuelve en cada compra',
            desc: 'Pide tu RappiCard desde la app, úsala dentro y fuera de Rappi y recibe cashback en cada compra.',
            proofs: ['Hasta {{cashback_rappi}} cashback* en Rappi', 'Hasta {{cashback_fuera}} cashback* fuera de Rappi', '{{cuota_manejo_card}} cuota de manejo'],
            children: [
              { path: '/rappicard/compartida/', nuevo: true, title: 'RappiCard Compartida', type: 'feature', prop: 'Comparte tu cupo con quien quieras' },
              { path: '/rappicard/meses-sin-intereses/', rc: true, title: 'Meses sin intereses', type: 'feature', prop: 'Difiere tus compras sin pagar intereses' },
              { path: '/rappicard/simulador/', rc: true, title: 'Simulador', type: 'feature', prop: 'Calcula tus cuotas antes de comprar' },
              { path: '/rappicard/apple-pay/', rc: true, title: 'Apple Pay', type: 'feature', prop: 'Paga con tu celular de forma segura' },
              { path: '/rappicard/beneficios/', rc: true, title: 'Beneficios RappiCard', type: 'feature', prop: 'Aliados y Viajes RappiCard' },
              { path: '/rappicard/blog/', nueva: true, rc: true, title: 'Todo sobre RappiCard', type: 'category', prop: 'Ciclo de facturación, guías y novedades' }
            ]
          },
          {
            path: '/rappicard/garantizada/', nuevo: true, title: 'RappiCard Garantizada', type: 'product', entidad: 'tbd', cta: CTA.card,
            kicker: 'Tarjeta de crédito con depósito en garantía',
            prop: 'Construye tu historial y gradúate a RappiCard',
            desc: 'Tu cupo es igual a tu depósito. Paga a tiempo, cumple tus misiones y pasa a la RappiCard clásica.',
            proofs: ['Depósito desde {{garantizada_min}} hasta {{garantizada_max}}', 'Tu depósito rinde {{tasa_garantia}} E.A.', 'Graduación en {{graduacion_meses}} meses']
          }
        ]
      },
      {
        path: '/rappiprestamo/', title: 'RappiPréstamo', type: 'product', entidad: 'cf', cta: CTA.tbd,
        kicker: 'Crédito de libre inversión',
        prop: 'Plata para lo que quieras, en minutos',
        desc: 'Entiende cuándo un préstamo es una buena opción, revisa los requisitos y simúlalo antes de decidir.',
        proofs: ['De {{plazo_min}} a {{plazo_max}} meses', 'Sin papeleo ni codeudores', 'Desembolso en minutos'],
        children: [
          { path: '/rappiprestamo/libre-inversion/', nueva: true, title: 'Crédito de libre inversión', type: 'feature', prop: 'Para viajes, tecnología o lo que necesites' },
          { path: '/rappiprestamo/requisitos/', nueva: true, title: 'Requisitos', type: 'feature', prop: 'Qué necesitas para pedirlo' },
          { path: '/rappiprestamo/vtu/', title: '¿Qué es el VTU?', type: 'feature', prop: 'El Valor Total Unificado: todos los costos en una sola cifra' },
          { path: '/rappiprestamo/simulador/', nueva: true, title: 'Simula tu préstamo', type: 'feature', prop: 'Calcula tu cuota y tu VTU antes de pedirlo' },
          { path: '/rappiprestamo/blog/', nueva: true, title: 'Todo sobre RappiPréstamo', type: 'category', prop: 'Guías y novedades de tu préstamo' }
        ]
      },
      {
        path: '/rappiseguros/', nuevo: true, title: 'RappiSeguros', type: 'product', entidad: 'seg', cta: CTA.tbd,
        kicker: 'Seguros',
        prop: 'Protección para el día a día, en pocos pasos',
        desc: 'Contrata desde la app, gestiona todo en línea y recibe Créditos de Rappi por mantener tu seguro.',
        proofs: ['Contratación desde la app', 'Gestión y soporte 24/7', 'Créditos de Rappi por permanencia'],
        children: [
          { path: '/rappiseguros/tarjeta-protegida-plus/', nuevo: true, title: 'Tarjeta Protegida Plus', type: 'feature', prop: 'Protege tus tarjetas contra fraude y uso indebido' },
          { path: '/rappiseguros/desempleo/', nuevo: true, title: 'Seguro por Desempleo', type: 'feature', prop: 'Respaldo si pierdes tu ingreso, seas empleado o independiente' },
          { path: '/rappiseguros/vida/', nuevo: true, title: 'Seguro de Vida', type: 'feature', prop: 'Protección para ti y los tuyos' },
          { path: '/rappiseguros/blog/', nuevo: true, title: 'Todo sobre RappiSeguros', type: 'category', prop: 'Guías y novedades de tus seguros' }
        ]
      },
      {
        path: '/maneja-tu-dinero/', nueva: true, title: 'Maneja tu dinero', type: 'need',
        prop: 'Todo lo que puedes hacer con tu plata, en un solo lugar',
        desc: 'Recargar, pagar, transferir y retirar. No es un producto: son las acciones de todos los días con tu RappiCuenta.',
        children: [
          { path: '/rappicuenta/recargar-cuenta/', title: 'Recargar tu cuenta', type: 'feature', prop: 'Pon plata en tu cuenta como prefieras', parentProduct: '/rappicuenta/' },
          { path: '/rappicuenta/enviar-dinero/', title: 'Enviar dinero', type: 'feature', prop: 'Envía plata a cualquier cuenta en segundos', parentProduct: '/rappicuenta/' },
          { path: '/rappicuenta/bre-b/', title: 'Bre-B', type: 'feature', prop: 'Tu dinero se mueve al instante con tu llave', parentProduct: '/rappicuenta/' },
          { path: '/rappicuenta/pagos-qr/', title: 'Pagos con QR', type: 'feature', prop: 'Paga en comercios escaneando un código', parentProduct: '/rappicuenta/' },
          { path: '/rappicuenta/compras-pse/', title: 'Compra con PSE', type: 'feature', prop: 'Paga tus compras en línea desde tu cuenta', parentProduct: '/rappicuenta/' },
          { path: '/rappicuenta/retira-efectivo/', title: 'Retira en cajeros', type: 'feature', prop: 'Saca efectivo cuando lo necesites', parentProduct: '/rappicuenta/' },
          { path: '/rappicuenta/consignaciones-efectivo/', title: 'Consignaciones en efectivo', type: 'feature', prop: 'Consigna efectivo en puntos aliados', parentProduct: '/rappicuenta/' },
          { path: '/demarcacion-4x1000/', title: 'Demarcación 4x1000', type: 'feature', prop: 'Marca tu cuenta exenta del 4x1000', parentProduct: '/rappicuenta/' }
        ]
      },
      {
        path: '/ayuda/', nueva: true, title: 'Ayuda y seguridad', type: 'need',
        prop: 'Protección y soporte cuando más lo necesitas',
        desc: 'Bloquea tu tarjeta, resuelve problemas y conoce cómo cuidamos tu dinero y tu información.',
        children: [
          { path: '/perdida-o-robo/', title: 'Pérdida o robo', type: 'service', prop: 'Bloquea tu tarjeta en un paso', selector: ['RappiCard', 'Tarjeta de RappiCuenta', 'Empresas'] },
          { path: '/centro-de-ayuda/', title: 'Centro de ayuda', type: 'service', prop: 'Respuestas a las preguntas más frecuentes', selector: ['RappiCuenta', 'RappiCard', 'RappiPréstamo', 'RappiSeguros'] },
          { path: '/canales-de-contacto/', title: 'Canales de contacto', type: 'service', prop: 'Habla con nosotros por el canal que prefieras', selector: ['RappiCuenta', 'RappiCard', 'RappiPréstamo', 'RappiSeguros'] },
          { path: '/personal-banker/', nueva: true, rc: true, title: 'Contactar a mi Personal Banker', type: 'page', prop: 'Tu asesor personal, cuando lo necesites' },
          { path: '/seguridad/', nueva: true, title: 'Seguridad de tu dinero', type: 'page', prop: 'Cómo cuidamos tu plata y tu información' },
          { path: '/seguridad/tips/', nueva: true, title: 'Tips de seguridad', type: 'page', prop: 'Fraude, contraseñas, retiros y canales seguros' },
          { path: '/tasas-y-tarifas/', title: 'Tasas y tarifas', type: 'service', prop: 'Las tasas vigentes de cada producto', selector: ['RappiCuenta', 'RappiCard', 'RappiPréstamo', 'Empresas'] },
          { path: '/pqrs/', title: 'Soporte y PQRs', type: 'service', prop: 'Peticiones, quejas, reclamos y sugerencias', selector: ['RappiPay CF', 'Banco Davivienda', 'RappiSeguros'] }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------- 2. PARA TU NEGOCIO
  {
    path: '/negocio/', nueva: true, title: 'Para tu negocio', type: 'audience', cta: CTA.cuenta,
    prop: 'Separa y organiza las finanzas de tu negocio',
    desc: 'Para personas naturales con negocio, vendas o no a través de Rappi.',
    children: [
      {
        path: '/negocio/cuenta/', nueva: true, title: 'Cuenta para tu negocio', type: 'need',
        prop: 'Una cuenta para ordenar las finanzas de tu negocio',
        desc: 'Cómo funciona la cuenta para negocios pequeños y emprendimientos: beneficios, requisitos y uso.',
        children: [
          {
            path: '/negocio/cuenta-de-ahorros/', nueva: true, title: 'Cuenta de ahorros para negocios', type: 'product', entidad: 'cf', cta: CTA.tbd,
            kicker: 'Cuenta de ahorros para personas con negocio',
            prop: 'Separa la plata de tu negocio de la tuya',
            desc: 'Recibe, paga y ahorra lo de tu negocio en una cuenta aparte, desde la app.',
            proofs: ['{{beneficio_negocio_1}}', '{{beneficio_negocio_2}}', '{{beneficio_negocio_3}}']
          },
          { path: '/negocio/beneficios/', nueva: true, title: 'Beneficios de la cuenta', type: 'page', prop: 'Lo que ganas con una cuenta para tu negocio' },
          { path: '/negocio/rappiprestamo/', nueva: true, title: 'RappiPréstamo para tu negocio', type: 'page', prop: 'Usa tu crédito de libre inversión para crecer', entidad: 'cf' }
        ]
      },
      {
        path: '/negocio/aliados/', nueva: true, title: 'Aliados Rappi', type: 'need',
        prop: 'Beneficios exclusivos para negocios que venden en Rappi',
        desc: 'Productos financieros diseñados para aliados, como RappiPréstamo Aliados.',
        children: [
          { path: '/negocio/aliados/que-es/', nueva: true, title: '¿Qué es ser aliado Rappi?', type: 'page', prop: 'Cómo funciona y qué ganas' },
          { path: '/negocio/aliados/beneficios/', nueva: true, title: 'Beneficios para aliados', type: 'page', prop: 'Lo que tienes por vender en Rappi' },
          {
            path: '/negocio/rappiprestamo-aliados/', nueva: true, title: 'RappiPréstamo Aliados', type: 'product', entidad: 'cf', cta: CTA.tbd,
            kicker: 'Crédito de libre inversión para comercios',
            prop: 'Capital para crecer tu negocio en Rappi',
            desc: 'Te evaluamos con tus ventas en Rappi y el dinero llega en minutos a tu cuenta.',
            proofs: ['Desde {{aliados_min}} hasta {{aliados_max}}', 'Hasta {{aliados_plazo}} meses', 'Evaluación con tus ventas en Rappi']
          },
          { path: '/negocio/aliados/condiciones/', nueva: true, title: 'Condiciones', type: 'page', prop: 'Términos del programa de aliados', entidad: 'cf' }
        ]
      },
      {
        path: '/negocio/ayuda/', nueva: true, title: 'Ayuda y seguridad', type: 'need',
        prop: 'Soporte para tu negocio',
        desc: 'Reporta una tarjeta, resuelve dudas o contáctanos.',
        children: [ { ref: '/perdida-o-robo/' }, { ref: '/centro-de-ayuda/' }, { ref: '/canales-de-contacto/' }, { ref: '/pqrs/' } ]
      }
    ]
  },

  // ---------------------------------------------------------------- 3. PARA TU EMPRESA
  {
    path: '/empresas/', title: 'Para tu empresa', type: 'audience', cta: CTA.empresa,
    prop: 'Control financiero para tu empresa',
    desc: 'Para empresas constituidas: pagos, nómina y transferencias de forma estructurada y segura.',
    children: [
      {
        path: '/empresas/cuenta/', nueva: true, title: 'Cuenta para empresas', type: 'need',
        prop: 'La cuenta empresarial y su apertura',
        desc: 'La cuenta para personas jurídicas, cómo abrirla y las funcionalidades para gestionar tu empresa.',
        children: [
          {
            path: '/empresas/rappicuenta-empresas/', nueva: true, title: 'RappiCuenta Empresas', type: 'product', entidad: 'cf', cta: CTA.empresa,
            kicker: 'Cuenta empresarial',
            prop: 'Paga, cobra y controla tu empresa desde una cuenta',
            desc: 'Nómina, pagos a proveedores y cobros con link, con usuarios y permisos para tu equipo.',
            proofs: ['Pago de nómina y pagos múltiples', 'Link de cobro', 'Usuarios, permisos y control dual'],
            children: [
              { path: '/empresas/beneficios/', nueva: true, title: 'Beneficios de la cuenta', type: 'feature', prop: 'Lo que tu empresa gana con la cuenta' },
              { path: '/empresas/requisitos/', nueva: true, title: 'Requisitos', type: 'feature', prop: 'Documentos para abrir la cuenta' },
              { path: '/empresas/apertura-rappicuenta-empresa/', title: 'Proceso de apertura', type: 'feature', prop: 'Paso a paso para abrir tu cuenta' },
              { path: '/empresas/bovedas/', title: 'Bóvedas Empresas', type: 'feature', prop: 'Haz rendir la plata de tu empresa' }
            ]
          }
        ]
      },
      {
        path: '/empresas/maneja/', nueva: true, title: 'Maneja tu empresa', type: 'need',
        prop: 'Las herramientas para el día a día de tu empresa',
        desc: 'Paga, transfiere y administra el dinero de la empresa desde RappiCuenta Empresas.',
        children: [
          { path: '/empresas/pago-individual/', title: 'Pagos individuales', type: 'feature', prop: 'Paga a un proveedor en segundos', parentProduct: '/empresas/rappicuenta-empresas/' },
          { path: '/empresas/pago-multiple/', title: 'Pagos múltiples', type: 'feature', prop: 'Paga a muchos destinatarios a la vez', parentProduct: '/empresas/rappicuenta-empresas/' },
          { path: '/empresas/pago-nomina/', title: 'Pago de nómina', type: 'feature', prop: 'Paga a todo tu equipo en un solo paso', parentProduct: '/empresas/rappicuenta-empresas/' },
          { path: '/empresas/link-de-cobro/', title: 'Link de cobro', type: 'feature', prop: 'Cobra con un link que compartes por chat', parentProduct: '/empresas/rappicuenta-empresas/' },
          { path: '/empresas/usuarios-y-permisos/', title: 'Usuarios y permisos', type: 'feature', prop: 'Da acceso a tu equipo con roles', parentProduct: '/empresas/rappicuenta-empresas/' },
          { path: '/empresas/control-dual/', title: 'Control dual', type: 'feature', prop: 'Una persona prepara, otra aprueba', parentProduct: '/empresas/rappicuenta-empresas/' }
        ]
      },
      {
        path: '/empresas/ayuda/', nueva: true, title: 'Ayuda y seguridad', type: 'need',
        prop: 'Soporte para tu empresa',
        desc: 'Reporta una tarjeta, consulta el estado del servicio o contáctanos.',
        children: [
          { path: '/empresas/perdida-o-robo/', title: 'Pérdida o robo Empresas', type: 'service', prop: 'Bloquea la tarjeta de tu empresa', selector: ['RappiCuenta Empresas'] },
          { path: '/empresas/manual-life-hacker/', nueva: true, title: 'Manual Life-Hacker Empresas', type: 'page', prop: 'Guía para sacarle provecho a tu cuenta' },
          { ref: '/pqrs/' },
          { path: '/empresas/estado-del-servicio/', nuevo: true, title: 'Estado del servicio', type: 'page', prop: 'Incidentes y comunicaciones para empresas' }
        ]
      }
    ]
  },

  // ---------------------------------------------------------------- 4. TU MEJOR DECISIÓN
  {
    path: '/blog/', title: 'Tu mejor decisión', type: 'audience', cta: CTA.cuenta,
    prop: 'Entiende tu dinero antes de decidir',
    desc: 'Guías y contenidos claros sobre dinero, crédito y finanzas, sin venderte un producto.',
    children: [
      { path: '/blog/educacion-financiera/', title: 'Educación financiera', type: 'category', prop: 'Presupuesto, ahorro, historial crediticio, 4x1000 y renta', rule: 'Contenido educativo: sin productos ni enlaces a productos (Punto 3.5)' },
      { path: '/guia-financiera/', title: 'Tu guía financiera', type: 'category', prop: 'Paso a paso para tus decisiones de dinero', rule: 'Contenido educativo: sin productos ni enlaces a productos (Punto 3.5)' },
      { path: '/manual-life-hacker/', nueva: true, title: 'Manual Life-Hacker Personas', type: 'page', prop: 'Trucos para manejar mejor tu plata' }
    ]
  },

  // ---------------------------------------------------------------- SOMOS RAPPIPAY (barra superior y footer)
  {
    path: '/acerca-de-rappipay/', title: 'Somos RappiPay', type: 'audience', nav: false, cta: CTA.cuenta,
    prop: 'Quiénes somos y cómo respondemos',
    desc: 'Información institucional, financiera y regulatoria de RappiPay.',
    children: [
      { path: '/estados-financieros/', title: 'Estados financieros', type: 'page', prop: 'Información financiera publicada' },
      { path: '/codigo-de-etica/', nueva: true, title: 'Código de ética', type: 'page', prop: 'Nuestros principios de conducta' },
      { path: '/notificaciones-judiciales/', nueva: true, title: 'Notificaciones judiciales', type: 'page', prop: 'Canal oficial para notificaciones' },
      { path: '/defensoria/', nueva: true, title: 'Defensoría del consumidor financiero', type: 'service', prop: 'El defensor de cada entidad', selector: ['RappiPay CF', 'Banco Davivienda'] }
    ]
  }
];

// Footer agrupado por entidad (Punto 3.10). Los enlaces sin ruta propia apuntan a la página más cercana.
const FOOTER = [
  { title: 'Somos RappiPay', links: [['Acerca de RappiPay', '/acerca-de-rappipay/'], ['Estados financieros', '/estados-financieros/'], ['Código de ética', '/codigo-de-etica/'], ['Notificaciones judiciales', '/notificaciones-judiciales/']] },
  { title: 'RappiPay CF', links: [['Reglamento cuenta de ahorros'], ['Reglamento depósito de bajo monto'], ['Tasas y tarifas', '/tasas-y-tarifas/'], ['Política de tratamiento de datos'], ['Manuales, políticas y aviso de privacidad'], ['Términos y condiciones'], ['Defensoría', '/defensoria/']] },
  { title: 'Banco Davivienda · RappiCard', links: [['Contratos RappiCard'], ['Pagaré RappiCard'], ['Documentos'], ['Tasas y tarifas', '/tasas-y-tarifas/'], ['Condiciones de uso'], ['Términos y condiciones'], ['T&C de EMILIA'], ['Defensoría', '/defensoria/']] },
  { title: 'RappiSeguros', links: [['Condiciones de las pólizas (por definir con Legal)']] }
];
