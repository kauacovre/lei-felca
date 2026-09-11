export const tutorials = [
  {
    slug: "windows-family-safety",
    shortTitle: "Windows",
    platform: "Windows",
    title: "Windows: configure a conta da família e proteja seus filhos",
    estimatedTime: "5 minutos",
    summary:
      "Use o Microsoft Family Safety para vincular a conta da criança, aplicar consentimento parental, combinar horários de tela e filtrar conteúdos no computador.",
    sourceUrl: "https://support.microsoft.com/pt-br/account-billing/adicionar-pessoas-ao-seu-grupo-de-fam%C3%ADlia-12417a80-0a75-b442-9993-9c8a9ed4e007",
    video: {
      url: "https://www.youtube.com/watch?v=2wMp4QX4zuI&t=56s",
      youtubeId: "2wMp4QX4zuI",
      title: "Como adicionar uma conta da Família da Microsoft no Windows 10 | Microsoft",
      channel: "Microsoft Suporte Oficial",
      duration: "1:25",
      recommendedStartTime: 56,
      recommendedStartTimeLabel: "0:56 (Consentimento Parental)",
      keyMoments: [
        { time: 22, timeFormatted: "0:22", label: "Selecionar 'Membro' (criança) ou 'Organizador' (adulto)" },
        { time: 26, timeFormatted: "0:26", label: "Envio de convite por e-mail/SMS" },
        { time: 56, timeFormatted: "0:56", label: "Consentimento parental obrigatório ('Meus pais podem entrar agora')" },
        { time: 70, timeFormatted: "1:10", label: "Gerenciar Relatório de Atividades, Tempo de Tela e Filtros" }
      ]
    },
    steps: [
      {
        title: "Acesse o portal Microsoft Family Safety",
        description:
          "No navegador do computador ou celular, acesse family.microsoft.com (ou account.microsoft.com/family/home). Conecte-se com a sua conta Microsoft de responsável (Organizador da família) para visualizar o painel inicial 'Sua família'.",
        screenshots: [
          {
            url: "/screenshots/windows/passo-1.jpeg",
            caption: "Painel inicial 'Sua família' no portal Microsoft Family Safety com a conta do responsável conectada.",
            placeholderTitle: "Print 1: Portal Microsoft Family Safety",
            placeholderHint: "Captura da página inicial em family.microsoft.com com a conta de organizador logada."
          }
        ]
      },
      {
        title: "Clique em 'Adicionar um membro da família'",
        description:
          "No painel inicial 'Sua família', localize o card com o ícone '+' identificado como 'Adicionar um membro da família' e clique nele para iniciar o processo de vinculação da conta do menor.",
        screenshots: [
          {
            url: "/screenshots/windows/passo-2.jpeg",
            caption: "Destaque para o card 'Adicionar um membro da família' no painel principal.",
            placeholderTitle: "Print 2: Adicionar um membro da família",
            placeholderHint: "Captura destacando o botão 'Adicionar um membro da família'."
          }
        ]
      },
      {
        title: "Insira o e-mail utilizado pelo menor para enviar o convite",
        description:
          "Na janela pop-up 'Convite por email', digite no campo 'Adicionar ID do email' o endereço de e-mail da conta Microsoft utilizado pela criança ou adolescente. Em seguida, clique no botão 'Enviar' para encaminhar o convite.",
        screenshots: [
          {
            url: "/screenshots/windows/passo-3.jpeg",
            caption: "Janela de convite por e-mail com indicação do campo para digitar o e-mail do menor.",
            placeholderTitle: "Print 3: Inserção do e-mail do menor",
            placeholderHint: "Captura do formulário com o e-mail do menor preenchido e botão de envio."
          }
        ]
      },
      {
        title: "Aceite o convite e mantenha o compartilhamento de atividade ativo",
        description:
          "Após o convite ser aceito na conta do menor de idade, faça login com a conta dele no portal. Em 'Configurações de privacidade', certifique-se de que a opção 'Compartilhar minha atividade' esteja ativada ('Sim'). Esta opção deve permanecer sempre ativada na conta do menor para que o responsável consiga acompanhar o tempo de tela e as atividades online.",
        screenshots: [
          {
            url: "/screenshots/windows/passo-4.jpeg",
            caption: "Configurações de privacidade na conta do menor: a opção 'Compartilhar minha atividade' deve permanecer ativada.",
            placeholderTitle: "Print 4: Compartilhar minha atividade ativado",
            placeholderHint: "Captura mostrando a opção 'Compartilhar minha atividade' ativada no perfil do menor."
          }
        ]
      },
      {
        title: "Garanta que a conta conste como 'Usuário padrão' no Windows",
        description:
          "No computador utilizado pelo menor, abra 'Configurações' (Win + I) > 'Contas'. Verifique o tipo de perfil atribuído: na conta do menor de idade, em vez de 'Administrador', deve constar 'Usuário padrão'. Isso impede que o menor altere configurações do sistema, instale programas sem autorização ou desative os controles parentais.",
        screenshots: [
          {
            url: "/screenshots/windows/passo-5.jpeg",
            caption: "Configurações de Contas do Windows: na conta do menor deve constar 'Usuário padrão' em vez de 'Administrador'.",
            placeholderTitle: "Print 5: Conta como Usuário Padrão",
            placeholderHint: "Captura das configurações do Windows com a conta definida como Usuário Padrão."
          }
        ]
      },
      {
        title: "Ative os Relatórios de Atividades e Limites de Tempo de Tela",
        description:
          "No painel do Family Safety, acesse o perfil do filho na seção Windows e ative o 'Relatório de atividades'. Ao manter essa opção ativa, você poderá limitar os horários em que o Windows será utilizado, estabelecer limites diários de tempo de tela e impedir o acesso a aplicativos e jogos indesejados.",
        screenshots: [
          {
            url: "/screenshots/windows/passo-6.jpeg",
            caption: "Ativação do 'Relatório de atividades' para limitar horários de uso do Windows e bloquear aplicativos indesejados.",
            placeholderTitle: "Print 6: Relatório de atividades e limites",
            placeholderHint: "Captura das configurações do Windows no Family Safety com o relatório ativado."
          }
        ]
      }
    ],
    tips: [
      "A conta da criança no Windows deve ser sempre do tipo 'Usuário padrão' para evitar a desinstalação de controles ou instalação de apps não autorizados.",
      "Mantenha a opção 'Compartilhar minha atividade' ativada na conta do menor para que as regras de tempo de tela e bloqueios funcionem corretamente.",
      "No painel do Family Safety, você pode definir horários separados para dias de aula e fins de semana, garantindo equilíbrio na rotina dos seus filhos."
    ]
  },
  {
    slug: "roblox-controles",
    shortTitle: "Roblox",
    platform: "Roblox",
    title: "Roblox: limite conversa e compras",
    estimatedTime: "5 minutos",
    summary:
      "Ligue sua conta de responsável, configure o PIN de 4 dígitos, restrinja bate-papo de voz e texto, e bloqueie compras de Robux sem autorização.",
    sourceUrl: "https://about.roblox.com/parental-controls",
    video: {
      url: "https://www.youtube.com/watch?v=xmtHrndEeGU",
      youtubeId: "xmtHrndEeGU",
      title: "Como Configurar Controle de Pais no Roblox | Cintia Costa",
      channel: "Cintia Costa",
      duration: "Passo a Passo Prático",
      recommendedStartTime: 0,
      recommendedStartTimeLabel: "Início do Tutorial",
      keyMoments: [
        { time: 0, timeFormatted: "0:00", label: "Abertura e importância do controle parental no Roblox" },
        { time: 30, timeFormatted: "0:30", label: "Acessar Configurações e Controles dos Responsáveis" },
        { time: 60, timeFormatted: "1:00", label: "Definir PIN de segurança dos pais (4 dígitos)" },
        { time: 90, timeFormatted: "1:30", label: "Ativar Restrições de Conta e curadoria de conteúdo" },
        { time: 135, timeFormatted: "2:15", label: "Restringir chat de texto, voz e privacidade de amizades" },
        { time: 180, timeFormatted: "3:00", label: "Bloqueio de gastos e compras com dinheiro real" }
      ]
    },
    steps: [
      {
        title: "Acesse as Configurações do Roblox",
        description:
          "Na conta do Roblox da criança (pelo computador ou celular), clique no ícone da engrenagem no canto superior direito (ou no ícone de três pontinhos 'Mais' no aplicativo móvel) e selecione 'Configurações'.",
        screenshots: [
          {
            url: "",
            caption: "Menu de Configurações no Roblox através da engrenagem ou ícone de Mais.",
            placeholderTitle: "Print 1: Menu de Configurações do Roblox",
            placeholderHint: "Captura da tela inicial do Roblox destacando a engrenagem e a opção 'Configurações'."
          }
        ]
      },
      {
        title: "Abra 'Controles dos Responsáveis' e vincule o e-mail",
        description:
          "Dentro de Configurações, clique em 'Controles dos Responsáveis' (Parental Controls). Insira o e-mail de um dos pais ou responsável e confirme o e-mail de verificação para habilitar a gestão parental.",
        screenshots: [
          {
            url: "",
            caption: "Aba de Controles dos Responsáveis e vínculo de e-mail parental.",
            placeholderTitle: "Print 2: Aba Controles dos Responsáveis e E-mail",
            placeholderHint: "Captura da seção 'Controles dos Responsáveis' com o campo de e-mail do adulto."
          }
        ]
      },
      {
        title: "Crie o PIN de segurança dos responsáveis (4 dígitos)",
        description:
          "Ative a opção 'PIN dos Responsáveis' e cadastre um código numérico de 4 dígitos. Esse PIN é obrigatório para modificar qualquer restrição e impede que a criança desative os filtros por conta própria. Nunca compartilhe esse PIN com a criança.",
        screenshots: [
          {
            url: "",
            caption: "Cadastro do PIN de segurança parental de 4 dígitos.",
            placeholderTitle: "Print 3: Definição do PIN Parental de 4 Dígitos",
            placeholderHint: "Captura da janela de cadastro e ativação do PIN de segurança de 4 dígitos."
          }
        ]
      },
      {
        title: "Ative as 'Restrições de Conta' para conteúdo seguro",
        description:
          "Ative a chave 'Restrições de Conta' (Account Restrictions). Essa função bloqueia automaticamente experiências inadequadas para menores e desativa o recebimento de mensagens diretas de estranhos, mantendo a navegação em uma lista curada pela própria plataforma.",
        screenshots: [
          {
            url: "",
            caption: "Ativação da chave de Restrições de Conta no Roblox.",
            placeholderTitle: "Print 4: Chave de Restrições de Conta Ativada",
            placeholderHint: "Captura da chave 'Restrições de Conta' ativada no painel de controle."
          }
        ]
      },
      {
        title: "Restrinja o Chat de Texto, Voz e Mensagens de Estranhos",
        description:
          "Acesse a aba 'Privacidade' nas Configurações. Na seção 'Configurações de Contato e Comunicação', defina 'Quem pode conversar comigo no chat' para 'Apenas Amigos' ou 'Ninguém'. Caso o bate-papo por voz esteja ativado, desligue-o para evitar contato com pessoas mal-intencionadas.",
        screenshots: [
          {
            url: "",
            caption: "Ajustes de privacidade: chat de texto e voz restritos a Amigos ou Ninguém.",
            placeholderTitle: "Print 5: Restrições de Privacidade, Chat e Voz",
            placeholderHint: "Captura da tela de Privacidade com opções de comunicação definidas como 'Apenas Amigos' ou 'Ninguém'."
          }
        ]
      },
      {
        title: "Bloqueie gastos com Robux e defina limite financeiro",
        description:
          "Em 'Controles dos Responsáveis' > 'Restrições de Gastos Mensais', defina o limite de compras como R$ 0,00 ou exija notificação/aprovação imediata de compras por e-mail, garantindo que compras com dinheiro real não sejam feitas sem o seu consentimento prévio.",
        screenshots: [
          {
            url: "",
            caption: "Limite de gastos mensais configurado para R$ 0,00 e notificações de compra ativadas.",
            placeholderTitle: "Print 6: Bloqueio de Gastos e Limite Financeiro",
            placeholderHint: "Captura do painel de limites de gastos mensais e notificações de compras de Robux."
          }
        ]
      }
    ],
    tips: [
      "Nunca compartilhe o PIN de 4 dígitos com a criança e evite sequências óbvias.",
      "Revise periodicamente a lista de amigos e remova contatos desconhecidos.",
      "Explique com calma que Robux custam dinheiro real e que promessas de 'moedas grátis' na internet são golpes perigosos."
    ]
  },
  {
    slug: "youtube-restrito",
    shortTitle: "YouTube",
    platform: "YouTube",
    title: "YouTube: como ativar o Modo Restrito e proteger a navegação",
    estimatedTime: "2 minutos",
    summary:
      "Aprenda o passo a passo direto para ativar o Modo Restrito no YouTube, ocultando vídeos com classificação adulta e garantindo uma navegação mais segura no computador.",
    sourceUrl: "https://support.google.com/youtube/answer/174084",
    video: {
      url: "https://www.youtube.com/watch?v=KpF0S4Wglyc",
      youtubeId: "KpF0S4Wglyc",
      title: "Como colocar controle dos pais no Youtube (GUIA COMPLETO)",
      channel: "Como Fazer Isso",
      duration: "Guia Completo",
      recommendedStartTime: 30,
      recommendedStartTimeLabel: "0:30 (Ativação do Modo Restrito)",
      keyMoments: [
        { time: 0, timeFormatted: "0:00", label: "Apresentação: Modo Restrito vs YouTube Kids" },
        { time: 30, timeFormatted: "0:30", label: "Ativando o Modo Restrito no YouTube" },
        { time: 70, timeFormatted: "1:10", label: "Configuração do YouTube Kids para menores" },
        { time: 150, timeFormatted: "2:30", label: "Filtros de conteúdo e segurança" }
      ]
    },
    steps: [
      {
        title: "Clique no ícone de perfil no canto superior direito",
        description:
          "Acesse o site do YouTube (youtube.com) no navegador do computador. No canto superior direito da tela inicial, clique na foto ou avatar da sua conta Google (destacado na imagem com a indicação 1).",
        screenshots: [
          {
            url: "/screenshots/youtube/passo-1.png",
            caption: "Passo 1: Clique na foto de perfil no canto superior direito da página do YouTube.",
            placeholderTitle: "Print 1: Ícone de perfil no YouTube",
            placeholderHint: "Captura da tela inicial do YouTube com destaque no ícone do perfil."
          }
        ]
      },
      {
        title: "Localize e clique na opção 'Modo restrito: desativado'",
        description:
          "No menu suspenso que se abre ao clicar no perfil, role para baixo até encontrar a opção 'Modo restrito: desativado' (destacada na imagem com a indicação 2). Clique sobre ela para abrir o submenu de configuração.",
        screenshots: [
          {
            url: "/screenshots/youtube/passo-2.png",
            caption: "Passo 2: Seleção da opção 'Modo restrito: desativado' no menu da conta.",
            placeholderTitle: "Print 2: Opção Modo Restrito no menu",
            placeholderHint: "Captura do menu suspenso destacando a opção Modo Restrito."
          }
        ]
      },
      {
        title: "Ative a chave 'ATIVE O MODO RESTRITO'",
        description:
          "Na janela do Modo Restrito, leia as orientações e clique na chave seletora ao lado de 'ATIVE O MODO RESTRITO' (destacada na imagem com a indicação 3) para ligá-la. Esse filtro ajuda a ocultar vídeos com potencial conteúdo adulto ou impróprio para menores neste navegador.",
        screenshots: [
          {
            url: "/screenshots/youtube/passo-3.png",
            caption: "Passo 3: Ativação da chave do Modo Restrito para filtrar vídeos inadequados.",
            placeholderTitle: "Print 3: Ativação do Modo Restrito",
            placeholderHint: "Captura do painel com a chave 'ATIVE O MODO RESTRITO' ativada."
          }
        ]
      }
    ],
    tips: [
      "O Modo Restrito funciona por navegador: certifique-se de repetir esse procedimento em todos os navegadores utilizados pela criança no computador (Google Chrome, Microsoft Edge, Firefox, etc.).",
      "Para evitar que a criança desative o Modo Restrito, você pode bloquear o Modo Restrito no navegador usando sua conta Google ou vincular a conta do menor ao Google Family Link.",
      "Para crianças menores de 13 anos, considere utilizar o YouTube Kids (youtubekids.com), que oferece um ambiente fechado com conteúdos previamente selecionados para a infância."
    ]
  },
  {
    slug: "android-family-link",
    shortTitle: "Android",
    platform: "Android",
    title: "Android: organize e proteja o celular com o Google Family Link",
    estimatedTime: "5 minutos",
    summary:
      "Controle o tempo de uso, aprove ou bloqueie downloads da Google Play Store, monitore a localização em tempo real e filtre sites adultos com o Family Link.",
    sourceUrl: "https://support.google.com/families/answer/7101025",
    video: {
      url: "https://www.youtube.com/watch?v=gRxnqOVsqfo",
      youtubeId: "gRxnqOVsqfo",
      title: "Como controlar o celular do seu filho com o Google Family Link | #DicaDeFanáticos",
      channel: "Admirável Mundo Incrível",
      duration: "Tutorial Prático",
      recommendedStartTime: 0,
      recommendedStartTimeLabel: "Início do Tutorial",
      keyMoments: [
        { time: 0, timeFormatted: "0:00", label: "Introdução ao Google Family Link e requisitos" },
        { time: 45, timeFormatted: "0:45", label: "Instalação do app no celular dos pais e da criança" },
        { time: 95, timeFormatted: "1:35", label: "Vinculação de contas e emparelhamento dos aparelhos" },
        { time: 150, timeFormatted: "2:30", label: "Configuração de limites diários e horário de dormir" },
        { time: 210, timeFormatted: "3:30", label: "Aprovação de downloads e compras na Google Play Store" },
        { time: 270, timeFormatted: "4:30", label: "Filtros de navegação no Chrome e localização em tempo real" }
      ]
    },
    steps: [
      {
        title: "Instale o Family Link no celular dos pais e abra o assistente",
        description:
          "No seu celular (responsável), baixe o aplicativo Google Family Link pela Play Store ou App Store. Abra o aplicativo e faça login com sua conta Google de responsável.",
        screenshots: [
          {
            url: "",
            caption: "App Family Link instalado no aparelho do responsável.",
            placeholderTitle: "Print 1: Aplicativo Family Link dos Pais",
            placeholderHint: "Captura da tela inicial do Family Link na conta do adulto."
          }
        ]
      },
      {
        title: "Vincule a conta Google da criança ao grupo familiar",
        description:
          "No aplicativo dos pais, clique em adicionar membro e escolha a conta Google do menor (ou crie um e-mail infantil supervisionado caso ele ainda não tenha).",
        screenshots: [
          {
            url: "",
            caption: "Seleção ou criação da conta Google da criança.",
            placeholderTitle: "Print 2: Vinculação da Conta Infantil",
            placeholderHint: "Captura da tela de vinculação de e-mail da criança no Family Link."
          }
        ]
      },
      {
        title: "Conecte o smartphone Android da criança",
        description:
          "No celular da criança, abra 'Configurações' > 'Google' > 'Controles dos responsáveis' (ou 'Bem-estar digital e controle parental'). Toque em 'Criança ou adolescente' e siga o assistente digitando o código de segurança gerado no aparelho dos pais.",
        screenshots: [
          {
            url: "",
            caption: "Configurações do Android da criança autorizando a supervisão parental.",
            placeholderTitle: "Print 3: Emparelhamento no Celular da Criança",
            placeholderHint: "Captura das configurações do Android na tela de inserção do código dos pais."
          }
        ]
      },
      {
        title: "Programe o Limite Diário de Tela e Horário de Dormir",
        description:
          "No app dos pais, abra 'Tempo de tela' e defina o limite diário de utilização (ex: 2 horas) e o 'Horário de dormir' (bloqueio noturno programado), podendo estipular regras diferentes para dias de semana e fins de semana.",
        screenshots: [
          {
            url: "",
            caption: "Programação de limite diário de uso e bloqueio noturno.",
            placeholderTitle: "Print 4: Limites de Tempo e Horário de Dormir",
            placeholderHint: "Captura do gráfico de tempo e horários de descanso no painel do Family Link."
          }
        ]
      },
      {
        title: "Exija aprovação para downloads e compras na Play Store",
        description:
          "Em 'Controles' > 'Google Play', selecione 'Exigir aprovação para: Todo o conteúdo'. Dessa forma, a criança não conseguirá baixar nenhum jogo novo sem que você aprove diretamente no seu celular.",
        screenshots: [
          {
            url: "",
            caption: "Opção de aprovação parental ativada para downloads na Play Store.",
            placeholderTitle: "Print 5: Aprovação de Apps e Compras na Play Store",
            placeholderHint: "Captura da regra de aprovação obrigatória de compras e downloads."
          }
        ]
      },
      {
        title: "Ative filtros de pesquisa SafeSearch e localização",
        description:
          "Em 'Filtros no Google Chrome', marque 'Tentar bloquear sites explícitos' e ative o SafeSearch na Busca. Além disso, habilite a 'Localização' para visualizar onde o smartphone do seu filho está em tempo real.",
        screenshots: [
          {
            url: "",
            caption: "Filtros web no Chrome e mapa de localização do dispositivo.",
            placeholderTitle: "Print 6: Filtros Web e Localização em Tempo Real",
            placeholderHint: "Captura da tela de segurança web e mapa de localização ativa no Family Link."
          }
        ]
      }
    ],
    tips: [
      "Se o menor tentar desativar o Family Link pelo aparelho dele, o telefone será travado imediatamente por 24 horas e você receberá um alerta.",
      "Separe horários flexíveis no fim de semana para que o uso da tecnologia seja um momento de lazer saudável.",
      "Mantenha o sistema Android da criança sempre com as atualizações de segurança em dia."
    ]
  },
  {
    slug: "ios-tempo-de-uso",
    shortTitle: "iOS",
    platform: "iOS",
    title: "iPhone e iPad: organize o Tempo de Uso e proteja os dados do seu filho",
    estimatedTime: "5 minutos",
    summary:
      "Use o Tempo de Uso e Compartilhamento Familiar da Apple para bloquear compras na App Store, restringir sites adultos e definir horários de repouso com código de segurança.",
    sourceUrl: "https://support.apple.com/pt-br/108806",
    video: {
      url: "https://www.youtube.com/watch?v=VYSKWp1iCrY",
      youtubeId: "VYSKWp1iCrY",
      title: "Controle Parental Apple: Como proteger os dados do seu filho no iPhone e iPad",
      channel: "Sejunta Tecnologia",
      duration: "Tutorial Completo Apple",
      recommendedStartTime: 0,
      recommendedStartTimeLabel: "Início do Tutorial",
      keyMoments: [
        { time: 0, timeFormatted: "0:00", label: "Apresentação do controle parental no ecossistema Apple" },
        { time: 40, timeFormatted: "0:40", label: "Criando a conta da criança no Compartilhamento Familiar" },
        { time: 90, timeFormatted: "1:30", label: "Acessando o Tempo de Uso e criando o código PIN dos pais" },
        { time: 150, timeFormatted: "2:30", label: "Configurando o Repouso (bloqueio noturno sem telas)" },
        { time: 210, timeFormatted: "3:30", label: "Definindo limites diários para Apps, Jogos e Redes Sociais" },
        { time: 270, timeFormatted: "4:30", label: "Restrições de Conteúdo, compras no app e privacidade Safari" }
      ]
    },
    steps: [
      {
        title: "Configure o Compartilhamento Familiar nos Ajustes",
        description:
          "No iPhone ou iPad do responsável, abra 'Ajustes', toque no seu nome (ID Apple) no topo e selecione 'Compartilhamento Familiar'. Toque em 'Adicionar Membro' e selecione 'Criar Conta de Criança' para gerar uma conta Apple supervisionada.",
        screenshots: [
          {
            url: "",
            caption: "Menu Compartilhamento Familiar com opção de criar conta de criança.",
            placeholderTitle: "Print 1: Compartilhamento Familiar da Apple",
            placeholderHint: "Captura da tela de Compartilhamento Familiar no ID Apple dos pais."
          }
        ]
      },
      {
        title: "Acesse o 'Tempo de Uso' e selecione a conta da criança",
        description:
          "Ainda nos Ajustes do seu iPhone, vá em 'Tempo de Uso' e, na seção 'Família', toque no nome da criança para gerenciar remotamente todas as permissões do aparelho dela.",
        screenshots: [
          {
            url: "",
            caption: "Seção Família dentro do menu Tempo de Uso.",
            placeholderTitle: "Print 2: Perfil da Criança no Tempo de Uso",
            placeholderHint: "Captura da tela de Tempo de Uso exibindo o nome do menor gerenciado."
          }
        ]
      },
      {
        title: "Crie o código PIN exclusivo do Tempo de Uso (4 dígitos)",
        description:
          "Toque em 'Bloquear Ajustes do Tempo de Uso' e cadastre um código numérico de 4 dígitos diferente da senha de desbloqueio da tela do aparelho, garantindo que apenas os adultos possam alterar as regras.",
        screenshots: [
          {
            url: "",
            caption: "Cadastro do código de segurança de 4 dígitos do Tempo de Uso.",
            placeholderTitle: "Print 3: Definição do Código PIN dos Responsáveis",
            placeholderHint: "Captura da tela de criação do código de 4 dígitos do Tempo de Uso."
          }
        ]
      },
      {
        title: "Programe o Repouso noturno (Downtime)",
        description:
          "Toque em 'Repouso' e ative a chave 'Agendado'. Defina o horário de início e fim (ex: das 21h30 às 07h00). Durante esse período, o iPhone bloqueia automaticamente todos os aplicativos de distração, mantendo apenas chamadas telefônicas e contatos de emergência liberados.",
        screenshots: [
          {
            url: "",
            caption: "Programação de horário de Repouso noturno nos Ajustes.",
            placeholderTitle: "Print 4: Agendamento do Período de Repouso",
            placeholderHint: "Captura do horário de Repouso agendado no iOS."
          }
        ]
      },
      {
        title: "Estabeleça Limites de Apps para Jogos e Redes Sociais",
        description:
          "Toque em 'Limites de Apps' > 'Adicionar Limite'. Selecione as categorias que deseja controlar (como 'Jogos' ou 'Redes Sociais') e determine a quantidade máxima de horas e minutos de tela diários autorizados.",
        screenshots: [
          {
            url: "",
            caption: "Adição de limite diário para categorias de aplicativos.",
            placeholderTitle: "Print 5: Limites de Apps por Categoria",
            placeholderHint: "Captura da seleção de categorias e horas máximas permitidas no iOS."
          }
        ]
      },
      {
        title: "Ative Restrições de Conteúdo, Compras e Privacidade",
        description:
          "Em 'Conteúdo e Privacidade', ative a chave principal. Em 'Compras no iTunes e App Store', defina 'Não Permitir' para Compras dentro de apps e ative o 'Pedir para Comprar'. Em 'Conteúdo da Web', escolha 'Limitar Sites Adultos' para blindar o Safari contra páginas inadequadas.",
        screenshots: [
          {
            url: "",
            caption: "Bloqueio de compras e restrição de sites adultos no Safari.",
            placeholderTitle: "Print 6: Restrições de Conteúdo, Compras e Safari",
            placeholderHint: "Captura do menu Conteúdo e Privacidade com compras no app e sites adultos desativados."
          }
        ]
      }
    ],
    tips: [
      "Nunca utilize datas de aniversário familiares ou o mesmo código de desbloqueio da tela no código do Tempo de Uso.",
      "Deixe os contatos dos pais e serviços de emergência sempre na lista de 'Sempre Permitidos' para ligações urgentes.",
      "Com o 'Pedir para Comprar' ativo, qualquer download pago ou gratuito na App Store enviará uma notificação imediata para aprovação no celular dos pais."
    ]
  }
];
