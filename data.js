/*
  Árbol de navegación de la marca sombrilla (Documento de especificaciones, Puntos 1 a 3).
  - El menú organiza (audiencia > necesidad > producto); la URL identifica (Punto 2.2).
  - nueva: true = URL propuesta en este wireframe, no definida todavía en el documento.
  - Los valores entre {{ }} son datos administrables del CMS (Punto 4.7): nunca se escriben a mano.
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
  {
    path: '/', title: 'Para ti', type: 'home', cta: CTA.cuenta,
    prop: 'Tu plata se mueve a la velocidad de Rappi',
    desc: 'Cuenta, tarjeta, préstamos y seguros 100% digitales, que se resuelven en minutos desde la app y te devuelven valor dentro de Rappi.',
    children: [
      {
        path: '/ahorra/', nueva: true, title: 'Ahorra y mueve tu plata', type: 'need',
        prop: 'Tu plata rinde y se mueve al instante',
        desc: 'Ahorra en Bolsillos y Bóvedas, paga con QR o PSE y envía plata sin costo desde tu RappiCuenta.',
        children: [
          {
            path: '/rappicuenta/', title: 'RappiCuenta', type: 'product', entidad: 'cf', cta: CTA.cuenta,
            kicker: 'Cuenta de ahorros y depósito de bajo monto',
            prop: 'Tu plata rinde y se mueve al instante',
            desc: 'Abre tu cuenta desde la app, separa tu plata en Bolsillos y hazla crecer en Bóvedas.',
            proofs: ['{{cuota_manejo}} cuota de manejo', '{{tasa_bolsillos}} E.A. en Bolsillos', 'Hasta {{tasa_bovedas_max}} E.A.* en Bóvedas'],
            children: [
              { path: '/rappicuenta/bolsillos/', nueva: true, title: 'Bolsillos', type: 'feature', prop: 'Separa tu plata por metas y que rinda cada día' },
              { path: '/rappicuenta/bovedas/', title: 'Bóvedas', type: 'feature', prop: 'Deja tu plata quieta y gana más por el plazo que elijas' },
              { path: '/rappicuenta/bre-b/', title: 'Bre-B', type: 'feature', prop: 'Tu dinero se mueve al instante con tu llave' },
              { path: '/rappicuenta/enviar-dinero/', title: 'Enviar dinero', type: 'feature', prop: 'Envía plata a cualquier cuenta en segundos' },
              { path: '/rappicuenta/pagos-qr/', title: 'Pagos con QR', type: 'feature', prop: 'Paga en comercios escaneando un código' },
              { path: '/rappicuenta/compras-pse/', title: 'Compra en PSE', type: 'feature', prop: 'Paga tus compras en línea desde tu cuenta' },
              { path: '/rappicuenta/recargar-cuenta/', title: 'Recargar cuenta', type: 'feature', prop: 'Pon plata en tu cuenta como prefieras' },
              { path: '/rappicuenta/retira-efectivo/', title: 'Retiro en cajeros', type: 'feature', prop: 'Saca efectivo cuando lo necesites' },
              { path: '/rappicuenta/consignaciones-efectivo/', title: 'Consignaciones', type: 'feature', prop: 'Consigna efectivo en puntos aliados' }
            ]
          }
        ]
      },
      {
        path: '/tarjetas/', nueva: true, title: 'Busca tu tarjeta', type: 'need',
        prop: 'La tarjeta que va contigo, tengas historial o no',
        desc: 'Elige la RappiCard que te sirve hoy: la clásica con cashback o la Garantizada para empezar tu historial.',
        children: [
          {
            path: '/rappicard/', title: 'RappiCard', type: 'product', entidad: 'dav', cta: CTA.card,
            kicker: 'Tarjeta de crédito',
            prop: 'La tarjeta que te devuelve en cada compra',
            desc: 'Pide tu RappiCard desde la app, úsala dentro y fuera de Rappi y recibe cashback en cada compra.',
            proofs: ['Hasta {{cashback_rappi}} cashback* en Rappi', 'Hasta {{cashback_fuera}} cashback* fuera de Rappi', '{{cuota_manejo_card}} cuota de manejo'],
            children: [
              { path: '/rappicard/compartida/', title: 'RappiCard Compartida', type: 'feature', prop: 'Comparte tu cupo con quien quieras' },
              { path: '/rappicard/meses-sin-intereses/', title: 'Meses sin intereses', type: 'feature', prop: 'Difiere tus compras sin pagar intereses' },
              { path: '/rappicard/simulador/', title: 'Simulador', type: 'feature', prop: 'Calcula tus cuotas antes de comprar' }
            ]
          },
          {
            path: '/rappicard/garantizada/', title: 'RappiCard Garantizada', type: 'product', entidad: 'tbd', cta: CTA.card,
            kicker: 'Tarjeta de crédito con depósito en garantía',
            prop: 'Construye tu historial y gradúate a RappiCard',
            desc: 'Tu cupo es igual a tu depósito. Paga a tiempo, cumple tus misiones y pasa a la RappiCard clásica.',
            proofs: ['Depósito desde {{garantizada_min}} hasta {{garantizada_max}}', 'Tu depósito rinde {{tasa_garantia}} E.A.', 'Graduación en {{graduacion_meses}} meses']
          }
        ]
      },
      {
        path: '/prestamos/', nueva: true, title: 'Pide un préstamo', type: 'need',
        prop: 'Plata para lo que quieras, en minutos',
        desc: 'Un crédito de libre inversión 100% digital, sin papeleo ni codeudores, que llega a tu cuenta en minutos.',
        children: [
          {
            path: '/rappiprestamo/', title: 'RappiPréstamo', type: 'product', entidad: 'cf', cta: CTA.tbd,
            kicker: 'Crédito de libre inversión',
            prop: 'Plata para lo que quieras, en minutos',
            desc: 'Pídelo desde la app y recíbelo en tu RappiCuenta o en cualquier cuenta registrada.',
            proofs: ['De {{plazo_min}} a {{plazo_max}} meses', 'Sin papeleo ni codeudores', 'Desembolso en minutos']
          }
        ]
      },
      {
        path: '/seguros/', nueva: true, title: 'Protégete', type: 'need',
        prop: 'Protección para el día a día, en pocos pasos',
        desc: 'Seguros pensados para los riesgos de todos los días, que contratas y gestionas desde la app.',
        children: [
          {
            path: '/rappiseguros/', title: 'RappiSeguros', type: 'product', entidad: 'seg', cta: CTA.tbd,
            kicker: 'Seguros',
            prop: 'Protección para el día a día, en pocos pasos',
            desc: 'Contrata desde la app, gestiona todo en línea y recibe Créditos de Rappi por mantener tu seguro.',
            proofs: ['Contratación desde la app', 'Gestión y soporte 24/7', 'Créditos de Rappi por permanencia'],
            children: [
              { path: '/rappiseguros/tarjeta-protegida-plus/', nueva: true, title: 'Tarjeta Protegida Plus', type: 'feature', prop: 'Protege tus tarjetas contra fraude y uso indebido' },
              { path: '/rappiseguros/desempleo/', nueva: true, title: 'Seguro por Desempleo', type: 'feature', prop: 'Respaldo si pierdes tu ingreso, seas empleado o independiente' },
              { path: '/rappiseguros/vida/', nueva: true, title: 'Seguro de Vida', type: 'feature', prop: 'Protección para ti y los tuyos' }
            ]
          }
        ]
      },
      {
        path: '/beneficios/', nueva: true, title: 'Gana beneficios', type: 'need',
        prop: 'Cada producto te devuelve valor en Rappi',
        desc: 'Cashback, alianzas y viajes con beneficios para quienes usan los productos RappiPay.',
        children: [
          { path: '/alianzas/', title: 'Alianzas', type: 'page', prop: 'Descuentos con marcas aliadas' },
          { path: '/rappicard/viajes/', nueva: true, title: 'Viajes RappiCard', type: 'feature', prop: 'Vuelos y hoteles con beneficios', entidad: 'dav' },
          { path: '/cashback/', nueva: true, title: 'Cashback', type: 'page', prop: 'Cómo ganas cashback con cada producto' }
        ]
      },
      {
        path: '/ayuda/', nueva: true, title: 'Obtén ayuda', type: 'need',
        prop: 'Resuelve lo que necesites, rápido',
        desc: 'Reporta una tarjeta, consulta tasas o contáctanos. Cada página separa la información por entidad.',
        children: [
          { path: '/perdida-o-robo/', title: 'Pérdida o robo', type: 'service', prop: 'Bloquea tu tarjeta en un paso', selector: ['RappiCard', 'Tarjeta de RappiCuenta', 'Empresas'] },
          { path: '/canales-de-contacto/', title: 'Canales de contacto', type: 'service', prop: 'Habla con nosotros por el canal que prefieras', selector: ['RappiCuenta', 'RappiCard', 'RappiPréstamo', 'RappiSeguros'] },
          { path: '/centro-de-ayuda/', title: 'Centro de ayuda', type: 'service', prop: 'Respuestas a las preguntas más frecuentes', selector: ['RappiCuenta', 'RappiCard', 'RappiPréstamo', 'RappiSeguros'] },
          { path: '/tasas-y-tarifas/', title: 'Tasas y tarifas', type: 'service', prop: 'Las tasas vigentes de cada producto', selector: ['RappiCuenta', 'RappiCard', 'RappiPréstamo', 'Empresas'] },
          { path: '/pqrs/', title: 'PQRS', type: 'service', prop: 'Peticiones, quejas, reclamos y sugerencias', selector: ['RappiPay CF', 'Banco Davivienda', 'RappiSeguros'] }
        ]
      }
    ]
  },
  {
    path: '/empresas/', title: 'Para tu negocio', type: 'audience', cta: CTA.empresa,
    prop: 'Tu negocio, más fácil de manejar',
    desc: 'Paga, cobra, administra y financia tu negocio desde una sola cuenta.',
    children: [
      {
        path: '/empresas/abre-tu-cuenta/', nueva: true, title: 'Abre tu cuenta', type: 'need',
        prop: 'Una cuenta pensada para tu negocio',
        desc: 'Abre tu cuenta empresarial en línea y haz crecer tu plata en Bóvedas Empresas.',
        children: [
          {
            path: '/empresas/rappicuenta-empresas/', nueva: true, title: 'RappiCuenta Empresas', type: 'product', entidad: 'cf', cta: CTA.empresa,
            kicker: 'Cuenta de ahorros para negocios',
            prop: 'Paga, cobra y controla tu negocio desde una cuenta',
            desc: 'Nómina, pagos a proveedores y cobros con link, con usuarios y permisos para tu equipo.',
            proofs: ['Pago de nómina y pagos múltiples', 'Link de cobro', 'Usuarios, permisos y control dual'],
            children: [
              { path: '/empresas/bovedas/', title: 'Bóvedas Empresas', type: 'feature', prop: 'Haz rendir la plata de tu negocio' }
            ]
          }
        ]
      },
      {
        path: '/empresas/paga-y-cobra/', nueva: true, title: 'Paga y cobra', type: 'need',
        prop: 'Paga y cobra sin salir de tu cuenta',
        desc: 'Pagos individuales y masivos, nómina y cobros con link desde RappiCuenta Empresas.',
        children: [
          { path: '/empresas/pago-individual/', title: 'Pago individual', type: 'feature', prop: 'Paga a un proveedor en segundos', parentProduct: '/empresas/rappicuenta-empresas/' },
          { path: '/empresas/pago-nomina/', title: 'Pago de nómina', type: 'feature', prop: 'Paga a todo tu equipo en un solo paso', parentProduct: '/empresas/rappicuenta-empresas/' },
          { path: '/empresas/pago-multiple/', title: 'Pago múltiple', type: 'feature', prop: 'Paga a muchos destinatarios a la vez', parentProduct: '/empresas/rappicuenta-empresas/' },
          { path: '/empresas/link-de-cobro/', title: 'Link de cobro', type: 'feature', prop: 'Cobra con un link que compartes por chat', parentProduct: '/empresas/rappicuenta-empresas/' }
        ]
      },
      {
        path: '/empresas/administra/', nueva: true, title: 'Administra tu cuenta', type: 'need',
        prop: 'Tu equipo, con los permisos justos',
        desc: 'Define quién hace qué en la cuenta de tu negocio y aprueba las operaciones importantes.',
        children: [
          { path: '/empresas/usuarios-y-permisos/', title: 'Usuarios y permisos', type: 'feature', prop: 'Da acceso a tu equipo con roles', parentProduct: '/empresas/rappicuenta-empresas/' },
          { path: '/empresas/control-dual/', title: 'Control dual', type: 'feature', prop: 'Una persona prepara, otra aprueba', parentProduct: '/empresas/rappicuenta-empresas/' }
        ]
      },
      {
        path: '/empresas/financia/', nueva: true, title: 'Financia tu negocio', type: 'need',
        prop: 'Capital para crecer tu negocio en Rappi',
        desc: 'Crédito de capital de trabajo para comercios que venden en Rappi, evaluado con tus ventas.',
        children: [
          {
            path: '/empresas/rappiprestamo-aliados/', title: 'RappiPréstamo Aliados', type: 'product', entidad: 'cf', cta: CTA.tbd,
            kicker: 'Crédito de libre inversión para comercios',
            prop: 'Capital para crecer tu negocio en Rappi',
            desc: 'Te evaluamos con tus ventas en Rappi y el dinero llega en minutos a tu cuenta.',
            proofs: ['Desde {{aliados_min}} hasta {{aliados_max}}', 'Hasta {{aliados_plazo}} meses', 'Evaluación con tus ventas en Rappi']
          }
        ]
      },
      {
        path: '/empresas/ayuda/', nueva: true, title: 'Obtén ayuda', type: 'need',
        prop: 'Soporte para tu negocio',
        desc: 'Reporta una tarjeta, aprende a abrir tu cuenta o contáctanos.',
        children: [
          { path: '/empresas/perdida-o-robo/', title: 'Pérdida o robo Empresas', type: 'service', prop: 'Bloquea la tarjeta de tu negocio', selector: ['RappiCuenta Empresas'] },
          { path: '/empresas/apertura-rappicuenta-empresa/', title: 'Guía de apertura', type: 'page', prop: 'Paso a paso para abrir tu cuenta' },
          { path: '/empresas/canales-de-contacto/', nueva: true, title: 'Canales de contacto', type: 'service', prop: 'Habla con nosotros', selector: ['RappiCuenta Empresas', 'RappiPréstamo Aliados'] }
        ]
      }
    ]
  },
  {
    path: '/blog/', title: 'Aprende', type: 'audience', cta: CTA.cuenta,
    prop: 'Aprende a manejar mejor tu plata',
    desc: 'Educación financiera para todos y guías para sacarle provecho a cada producto.',
    children: [
      {
        path: '/blog/educacion-financiera/', title: 'Educación financiera', type: 'category',
        prop: 'Finanzas personales, sin letra pequeña',
        desc: 'Presupuesto, ahorro, impuestos e historial crediticio. Contenido educativo: no habla de productos.',
        rule: 'Línea educativa: sin productos ni enlaces a productos (Punto 3.5)'
      },
      {
        path: '/blog/productos/', nueva: true, title: 'Conoce nuestros productos', type: 'need',
        prop: 'Guías para sacarle provecho a cada producto',
        desc: 'Usos, novedades y paso a paso de cada producto, separados por producto y entidad.',
        children: [
          { path: '/blog/rappicuenta/', title: 'Posts de RappiCuenta', type: 'category', prop: 'Guías y novedades de RappiCuenta', entidad: 'cf' },
          { path: '/blog/rappicard/', title: 'Posts de RappiCard', type: 'category', prop: 'Guías y novedades de RappiCard', entidad: 'dav' },
          { path: '/blog/rappiprestamo/', title: 'Posts de RappiPréstamo', type: 'category', prop: 'Guías y novedades de RappiPréstamo', entidad: 'cf' },
          { path: '/blog/rappiseguros/', title: 'Posts de RappiSeguros', type: 'category', prop: 'Guías y novedades de RappiSeguros', entidad: 'seg' },
          { path: '/blog/empresas/', title: 'Posts de Empresas', type: 'category', prop: 'Guías para negocios', entidad: 'cf' }
        ]
      }
    ]
  },
  {
    path: '/acerca-de-rappipay/', title: 'Nosotros', type: 'audience', cta: CTA.cuenta,
    prop: 'Quiénes somos y cómo respondemos',
    desc: 'Información institucional, financiera y regulatoria de RappiPay.',
    children: [
      { path: '/estados-financieros/', title: 'Estados financieros', type: 'page', prop: 'Información financiera publicada' },
      { path: '/codigo-de-etica/', nueva: true, title: 'Código de ética', type: 'page', prop: 'Nuestros principios de conducta' },
      { path: '/notificaciones-judiciales/', nueva: true, title: 'Notificaciones judiciales', type: 'page', prop: 'Canal oficial para notificaciones' }
    ]
  }
];
