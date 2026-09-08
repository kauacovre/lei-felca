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
          "No seu computador ou celular, abra o navegador e acesse family.microsoft.com. Entre com a sua conta Microsoft de responsável (Organizador da família). Caso ainda não possua um grupo familiar ativo, clique em 'Criar um grupo de família'.",
        screenshots: [
          {
            url: "",
            caption: "Página inicial do Microsoft Family Safety com a conta de responsável conectada.",
            placeholderTitle: "Print 1: Portal Microsoft Family Safety",
            placeholderHint: "Captura da página inicial em family.microsoft.com com a conta de organizador logada."
          }
        ]
      },
      {
        title: "Adicione um novo membro e selecione 'Membro'",
        description:
          "No painel do seu grupo familiar, clique no botão 'Adicionar um membro da família' (+). É fundamental selecionar a opção 'Membro' (destinada a crianças e menores de idade). Nunca selecione 'Organizador' para a conta da criança, pois organizadores têm permissão para desativar regras e limites.",
        screenshots: [
          {
            url: "",
            caption: "Seleção da opção 'Membro' (perfil para menores de idade).",
            placeholderTitle: "Print 2: Seleção de Perfil (Membro vs Organizador)",
            placeholderHint: "Captura da tela de seleção com a opção 'Membro' marcada para a conta da criança."
          }
        ]
      },
      {
        title: "Insira o e-mail da criança e envie o convite",
        description:
          "Digite o endereço de e-mail da conta Microsoft da criança (ou crie um novo e-mail gratuito caso ela ainda não possua) e clique em 'Enviar convite'. A Microsoft enviará uma notificação segura para o e-mail cadastrado.",
        screenshots: [
          {
            url: "",
            caption: "Envio do convite de participação para o e-mail da criança.",
            placeholderTitle: "Print 3: Inserção do e-mail e envio do convite",
            placeholderHint: "Captura do formulário com o e-mail da criança preenchido e botão de envio."
          }
        ]
      },
      {
        title: "Aceite o convite e autorize o consentimento parental",
        description:
          "Abra a mensagem recebida no e-mail da criança (ou na seção 'Membro pendente' > 'Aceitar agora') e clique em aceitar. A tela solicitará a autorização dos pais: selecione 'Meus pais podem entrar agora' (destacado no vídeo aos 0:56). O responsável deve entrar com sua senha na mesma janela para assinar digitalmente o consentimento legal e liberar os controles parentais.",
        screenshots: [
          {
            url: "",
            caption: "Etapa de consentimento parental: confirmação com 'Meus pais podem entrar agora'.",
            placeholderTitle: "Print 4: Consentimento parental ('Meus pais podem entrar agora')",
            placeholderHint: "Captura da confirmação aos 56s do vídeo: autorização parental para vincular o menor."
          }
        ]
      },
      {
        title: "Vincule a conta de Usuário Padrão no Windows",
        description:
          "No computador utilizado pela criança, abra 'Configurações' (Win + I) > 'Contas' > 'Família e outros usuários'. Certifique-se de que a criança faça login com a conta de membro recém-aprovada e garanta que o tipo de conta seja 'Usuário padrão' (e nunca 'Administrador'), evitando que ela desinstale os filtros ou altere restrições.",
        screenshots: [
          {
            url: "",
            caption: "Configuração da conta do menor como 'Usuário padrão' no Windows.",
            placeholderTitle: "Print 5: Conta adicionada no Windows como Usuário Padrão",
            placeholderHint: "Captura da tela de Configurações do Windows > Contas > Família e outros usuários."
          }
        ]
      },
      {
        title: "Configure tempo de tela, filtros web e relatórios",
        description:
          "No painel do Family Safety, abra o perfil da criança: ative os 'Relatórios de atividades' para acompanhar o uso semanal, defina os limites de 'Tempo de tela' (com horários separados para dias de aula e fins de semana), ative 'Filtros de conteúdo' para bloquear páginas inadequadas e ativar SafeSearch no Microsoft Edge, e bloqueie jogos impróprios para a idade.",
        screenshots: [
          {
            url: "",
            caption: "Painel de controle com Tempo de tela, Filtros web e Relatórios ativos.",
            placeholderTitle: "Print 6: Painel de Atividades, Limites e Filtros de Conteúdo",
            placeholderHint: "Captura do painel de controle da Microsoft com as regras de tempo e filtros ativados."
          }
        ]
      }
    ],
    tips: [
      "A conta da criança no Windows deve ser sempre do tipo 'Usuário padrão' para evitar a desinstalação de controles ou instalação de apps não autorizados.",
      "O filtro de conteúdo web e bloqueio de sites inadequados funciona de forma integrada e segura no navegador Microsoft Edge.",
      "Converse com seu filho sobre os limites acordados e acompanhe o relatório semanal de atividades enviado por e-mail."
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
    title: "YouTube: configure o Modo Restrito e o YouTube Kids",
    estimatedTime: "4 minutos",
    summary:
      "Aprenda a ativar o Modo Restrito no YouTube e configure o YouTube Kids com faixas etárias, bloqueio de pesquisa e limites de tempo.",
    sourceUrl: "https://support.google.com/youtube/answer/174084",
    video: {
      url: "https://www.youtube.com/watch?v=KpF0S4Wglyc",
      youtubeId: "KpF0S4Wglyc",
      title: "Como colocar controle dos pais no Youtube (GUIA COMPLETO)",
      channel: "Como Fazer Isso",
      duration: "Guia Completo",
      recommendedStartTime: 0,
      recommendedStartTimeLabel: "Início do Tutorial",
      keyMoments: [
        { time: 0, timeFormatted: "0:00", label: "Apresentação: Modo Restrito vs YouTube Kids" },
        { time: 30, timeFormatted: "0:30", label: "Ativando o Modo Restrito no app do YouTube" },
        { time: 70, timeFormatted: "1:10", label: "Instalação e configuração inicial do YouTube Kids" },
        { time: 110, timeFormatted: "1:50", label: "Seleção da faixa etária e maturidade de conteúdo" },
        { time: 150, timeFormatted: "2:30", label: "Desativação da pesquisa aberta e canais aprovados" },
        { time: 195, timeFormatted: "3:15", label: "Programação de timer e desligamento de autoplay" }
      ]
    },
    steps: [
      {
        title: "Ative o Modo Restrito no aplicativo do YouTube",
        description:
          "No aplicativo oficial do YouTube (no celular ou tablet do menor), toque no ícone de perfil no canto inferior direito, selecione a engrenagem de 'Configurações' no canto superior, entre em 'Geral' e ative a chave 'Modo Restrito' para ocultar vídeos com classificação adulta.",
        screenshots: [
          {
            url: "",
            caption: "Ativação do Modo Restrito em Configurações > Geral.",
            placeholderTitle: "Print 1: Chave do Modo Restrito no YouTube",
            placeholderHint: "Captura do menu Configurações > Geral com o Modo Restrito ligado."
          }
        ]
      },
      {
        title: "Instale o YouTube Kids para crianças menores",
        description:
          "Para crianças menores de 13 anos, instale o aplicativo oficial YouTube Kids pela Google Play Store ou App Store. O app oferece uma biblioteca totalmente separada e curada, longe dos riscos da plataforma aberta.",
        screenshots: [
          {
            url: "",
            caption: "Tela de instalação e boas-vindas do YouTube Kids.",
            placeholderTitle: "Print 2: Instalação do app YouTube Kids",
            placeholderHint: "Captura da página de download ou tela de início do YouTube Kids."
          }
        ]
      },
      {
        title: "Faça login com a conta do responsável",
        description:
          "Abra o YouTube Kids, selecione 'Sou pai/mãe', confirme seu ano de nascimento e faça login com sua conta Google de responsável para vincular os perfis e assumir a gestão.",
        screenshots: [
          {
            url: "",
            caption: "Identificação dos responsáveis e login Google.",
            placeholderTitle: "Print 3: Autenticação do Responsável",
            placeholderHint: "Captura da tela 'Sou pai/mãe' e autenticação da conta dos pais."
          }
        ]
      },
      {
        title: "Escolha a faixa etária adequada da criança",
        description:
          "Selecione o nível de conteúdo adequado: 'Pré-escolares' (até 4 anos), 'Crianças menores' (5 a 8 anos) ou 'Crianças maiores' (9 a 12 anos). Isso filtra instantaneamente as animações, músicas e canais adequados à maturidade do seu filho.",
        screenshots: [
          {
            url: "",
            caption: "Seleção do nível de conteúdo por faixa etária.",
            placeholderTitle: "Print 4: Nível de Conteúdo por Idade",
            placeholderHint: "Captura da seleção de faixa etária no YouTube Kids."
          }
        ]
      },
      {
        title: "Desative a pesquisa livre ou aprove apenas canais selecionados",
        description:
          "Nas configurações do perfil infantil no YouTube Kids, desative a 'Pesquisa'. Com a busca desligada, a criança só poderá assistir a vídeos de canais verificados e aprovados pela equipe do YouTube ou manualmente por você.",
        screenshots: [
          {
            url: "",
            caption: "Chave de busca/pesquisa desligada nas opções dos pais.",
            placeholderTitle: "Print 5: Desativação da Pesquisa Livre",
            placeholderHint: "Captura das configurações de perfil com a barra de busca desabilitada."
          }
        ]
      },
      {
        title: "Defina o timer de uso e desative o Autoplay",
        description:
          "No menu dos pais (ícone de cadeado), use a ferramenta 'Timer' para determinar quantos minutos a criança pode assistir antes do bloqueio da tela, e desligue o autoplay para evitar que vídeos fiquem rodando continuamente.",
        screenshots: [
          {
            url: "",
            caption: "Programação do timer de bloqueio e desativação do autoplay.",
            placeholderTitle: "Print 6: Timer de Tempo de Tela e Autoplay",
            placeholderHint: "Captura do temporizador de bloqueio do YouTube Kids em contagem regressiva."
          }
        ]
      }
    ],
    tips: [
      "O Modo Restrito precisa ser ativado em cada navegador e aparelho diferente que a criança utilize.",
      "No YouTube Kids, desativar a busca é a maneira mais segura de evitar recomendações inesperadas do algoritmo.",
      "Converse com seus filhos sobre os vídeos que eles mais gostam e assistam juntos sempre que possível."
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
