// Fonte unica dos tutoriais: adicione uma nova plataforma aqui e a rota aparece automaticamente.
export const tutorials = [
  {
    slug: "windows-family-safety",
    shortTitle: "Windows",
    platform: "Windows",
    title: "Windows: configurar Microsoft Family Safety",
    estimatedTime: "4 minutos",
    summary:
      "Crie limites de tempo, bloqueie conteudos inadequados e acompanhe o uso do computador da crianca.",
    sourceUrl: "https://support.microsoft.com/en-us/family-safety/set-screen-time-limits-across-devices",
    steps: [
      {
        title: "Acesse a area da familia",
        description:
          "Entre em family.microsoft.com com sua conta Microsoft de responsavel. Confirme se voce aparece como organizador da familia."
      },
      {
        title: "Adicione a conta da crianca",
        description:
          "Inclua o e-mail Microsoft da crianca ou crie uma conta infantil. No computador Windows, a crianca deve entrar com essa conta."
      },
      {
        title: "Defina o tempo de tela",
        description:
          "Abra o perfil da crianca, escolha Windows e ative os limites. Comece com uma janela clara, como 1 hora por dia apos a escola."
      },
      {
        title: "Filtre sites e pesquisas",
        description:
          "Em Filtros de conteudo, ative o bloqueio de sites inadequados. Esse filtro funciona melhor quando a crianca usa o Microsoft Edge."
      },
      {
        title: "Limite apps e jogos",
        description:
          "Em Apps e jogos, escolha os aplicativos que mais tomam tempo e defina limites separados para jogos, videos e navegador."
      }
    ],
    tips: [
      "A conta da crianca nao deve ser administradora do Windows.",
      "Converse antes de bloquear: explique que o limite protege sono, estudo e convivencia.",
      "Revise o relatorio de atividade uma vez por semana, nao apenas quando houver problema."
    ]
  },
  {
    slug: "roblox-controles",
    shortTitle: "Roblox",
    platform: "Roblox",
    title: "Roblox: restringir chat, conteudo e transacoes",
    estimatedTime: "5 minutos",
    summary:
      "Vincule sua conta de responsavel, reduza conversas com desconhecidos e coloque limite para gastos.",
    sourceUrl: "https://about.roblox.com/parental-controls",
    steps: [
      {
        title: "Abra os controles parentais",
        description:
          "Na conta da crianca, entre em Configuracoes e depois em Controles parentais."
      },
      {
        title: "Vincule seu e-mail",
        description:
          "Clique em Adicionar responsavel, informe seu e-mail e siga a mensagem recebida para criar ou vincular sua conta."
      },
      {
        title: "Confirme sua identidade, se solicitado",
        description:
          "O Roblox pode pedir verificacao de identidade para liberar todos os controles de responsavel."
      },
      {
        title: "Ajuste chat e conexoes",
        description:
          "Em Comunicacao, deixe chat, party chat e voz em Ninguem ou apenas amigos confiaveis, conforme a idade e maturidade da crianca."
      },
      {
        title: "Controle gastos e experiencias",
        description:
          "Defina limite mensal de gastos, ative notificacoes de compra e escolha a classificacao de conteudo adequada."
      }
    ],
    tips: [
      "Nao compartilhe a senha do responsavel com a crianca.",
      "Confira a lista de amigos e remova perfis desconhecidos ou insistentes.",
      "Explique que compras com Robux sao dinheiro real e precisam de combinados claros."
    ]
  },
  {
    slug: "youtube-restrito",
    shortTitle: "YouTube",
    platform: "YouTube",
    title: "YouTube: ativar Modo Restrito e tempo de tela",
    estimatedTime: "4 minutos",
    summary:
      "Reduza videos possivelmente adultos e use controles de tempo no YouTube Kids, Family Link ou no proprio aparelho.",
    sourceUrl: "https://support.google.com/youtube/answer/174084",
    steps: [
      {
        title: "Entre no perfil correto",
        description:
          "Abra o YouTube com a conta que a crianca usa. Se for menor, prefira uma conta supervisionada ou o app YouTube Kids."
      },
      {
        title: "Ative o Modo Restrito",
        description:
          "Toque na foto do perfil, abra Configuracoes e procure Modo Restrito. No computador, a opcao aparece no menu da foto do perfil."
      },
      {
        title: "Configure supervisao pelo Family Link",
        description:
          "No app Family Link, selecione a crianca, abra Controles, YouTube e ajuste o nivel de conteudo permitido."
      },
      {
        title: "Coloque limite de tempo",
        description:
          "No YouTube Kids, use Configuracoes e Definir timer. No Android ou iOS, limite o app YouTube pelos controles do sistema."
      },
      {
        title: "Desative estimulos desnecessarios",
        description:
          "Desligue autoplay quando possivel e reduza notificacoes para evitar sequencias longas de videos sem pausa."
      }
    ],
    tips: [
      "Modo Restrito ajuda, mas nao substitui uma conta supervisionada para criancas.",
      "Ative o controle em cada navegador ou dispositivo usado pela familia.",
      "Assista alguns videos junto com a crianca para entender o que o algoritmo esta recomendando."
    ]
  },
  {
    slug: "android-family-link",
    shortTitle: "Android",
    platform: "Android",
    title: "Android: configurar Google Family Link",
    estimatedTime: "5 minutos",
    summary:
      "Use o Family Link para limitar tempo, bloquear apps, aprovar downloads e acompanhar o uso do celular Android.",
    sourceUrl: "https://support.google.com/families/answer/7101025",
    steps: [
      {
        title: "Instale o Family Link",
        description:
          "No seu celular, instale o app Google Family Link e entre com sua conta Google de responsavel."
      },
      {
        title: "Selecione ou crie a conta da crianca",
        description:
          "Escolha a conta Google infantil. Se a crianca ainda nao tiver uma, siga o fluxo do app para criar."
      },
      {
        title: "Vincule o aparelho da crianca",
        description:
          "No Android da crianca, abra Configuracoes, Google e Controles parentais. Siga as instrucoes na tela."
      },
      {
        title: "Defina rotina de uso",
        description:
          "Em Tempo de tela, configure limite diario, horario de dormir e, se fizer sentido, horario de estudo."
      },
      {
        title: "Controle apps e compras",
        description:
          "Em Limites de apps e Google Play, bloqueie aplicativos sensiveis, aprove downloads e restrinja conteudo por idade."
      }
    ],
    tips: [
      "Use limites diferentes para dias de aula e fim de semana.",
      "Bloqueie apps de conversa que a familia ainda nao acompanha.",
      "Mantenha o sistema Android atualizado para receber correcoes de seguranca."
    ]
  },
  {
    slug: "ios-tempo-de-uso",
    shortTitle: "iOS",
    platform: "iOS",
    title: "iOS: configurar Tempo de Uso e Controles da Familia",
    estimatedTime: "5 minutos",
    summary:
      "No iPhone ou iPad, limite apps, compras, comunicacao e conteudo inadequado com o Tempo de Uso.",
    sourceUrl: "https://support.apple.com/en-us/108806",
    steps: [
      {
        title: "Abra Tempo de Uso",
        description:
          "No iPhone do responsavel, abra Ajustes e Tempo de Uso. Em Familia, toque no nome da crianca."
      },
      {
        title: "Ative atividade de apps e sites",
        description:
          "Siga as instrucoes para ativar o relatorio de uso. Isso mostra quais apps e sites mais tomam tempo."
      },
      {
        title: "Crie um codigo de Tempo de Uso",
        description:
          "Use um codigo diferente da senha do aparelho. Ele impede que a crianca altere os limites sem permissao."
      },
      {
        title: "Configure pausas e limites",
        description:
          "Em Repouso, defina horarios sem uso. Em Limites de Apps, escolha categorias como jogos, redes sociais e videos."
      },
      {
        title: "Ative restricoes de conteudo e compras",
        description:
          "Em Conteudo e Privacidade, bloqueie conteudo adulto, compras sem permissao e mudancas em ajustes sensiveis."
      }
    ],
    tips: [
      "Nao use datas de aniversario ou numeros obvios no codigo de Tempo de Uso.",
      "Deixe Telefone e contatos de emergencia sempre permitidos.",
      "Revise os pedidos de mais tempo com calma e explique cada decisao."
    ]
  }
];
