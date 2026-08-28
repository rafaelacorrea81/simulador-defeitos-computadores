/* Base de casos do Simulador de Defeitos — compartilhada entre
   index.html (aluno) e professor.html (professor).
   Para adicionar ou editar um caso, siga a mesma estrutura de campos. */
window.CASES = [
  {
    codigo: "HW-PWR",
    nivel: "basico",
    nivelLabel: "Básico",
    categoria: "Hardware — Alimentação",
    sintoma: "O computador não liga; nem o LED da fonte acende.",
    conceito: "Antes de suspeitar de peças internas, todo diagnóstico começa pela alimentação elétrica — é a base de tudo o que vem depois.",
    dicas: [
      "Existe alguma luz, som de cooler ou sinal de vida na máquina?",
      "O problema está na tomada, no cabo, ou dentro do gabinete?",
      "Qual é a peça mais simples e barata de testar primeiro?"
    ],
    pista: "Cabo de força frouxo ou fonte na posição errada da chave 110/220V.",
    resolucao: "Verificar tomada, cabo de força, posição da chave de voltagem e fusível interno da fonte.",
    porque: "A fonte de alimentação (PSU) converte corrente alternada em contínua para os componentes. Sem alimentação estável, nenhum outro componente sequer tenta inicializar — por isso é sempre o primeiro ponto a investigar, nunca o último.",
    armadilha: "Pular direto para 'a placa-mãe queimou' sem antes eliminar as causas mais simples é um erro comum entre técnicos iniciantes. A regra profissional é sempre testar do mais simples para o mais complexo."
  },
  {
    codigo: "HW-VID",
    nivel: "basico",
    nivelLabel: "Básico",
    categoria: "Hardware — Vídeo",
    sintoma: "O computador liga, mas não dá vídeo — e não emite nenhum bipe.",
    conceito: "A ausência de bipe é uma pista tão importante quanto a presença dele: indica que o POST (Power-On Self-Test) da BIOS pode não estar detectando um problema crítico, o que direciona a busca para a conexão física de vídeo.",
    dicas: [
      "O monitor está ligado e no canal de entrada correto?",
      "A placa de vídeo é dedicada (offboard) ou integrada (onboard)?",
      "O cabo de vídeo foi testado em outro equipamento?"
    ],
    pista: "Placa de vídeo mal encaixada no slot PCIe, ou cabo de vídeo (HDMI/VGA) solto.",
    resolucao: "Reencaixar a placa de vídeo, testar outro cabo e outro monitor para isolar a causa.",
    porque: "Contato elétrico imperfeito no slot PCIe interrompe a comunicação entre GPU e placa-mãe, mesmo que a placa pareça fisicamente no lugar. Isolar variáveis (cabo, monitor, slot) é o método científico aplicado à manutenção.",
    armadilha: "Esquecer de checar se o monitor está conectado à saída de vídeo correta é um erro comum entre técnicos iniciantes — em placas com GPU dedicada, a saída onboard geralmente fica desativada."
  },
  {
    codigo: "HW-MEM",
    nivel: "basico",
    nivelLabel: "Básico",
    categoria: "Hardware — Memória",
    sintoma: "O computador liga e emite vários bipes seguidos, sem imagem no monitor.",
    conceito: "Os bipes da BIOS formam um código de diagnóstico (beep code). Aprender a interpretá-los é uma habilidade tão essencial quanto ler uma mensagem de erro na tela.",
    dicas: [
      "Quantos bipes ocorreram, e em qual padrão (curtos, longos)?",
      "O fabricante da BIOS (AMI, Award, Phoenix) usa códigos diferentes?",
      "Há mais de um pente de memória instalado?"
    ],
    pista: "Código de bipe da BIOS indicando falha nos módulos de memória RAM.",
    resolucao: "Reencaixar os pentes de memória e testá-los um de cada vez para isolar o módulo com defeito.",
    porque: "A RAM é verificada logo no início do POST porque o sistema precisa dela para carregar qualquer coisa, inclusive o próprio vídeo. Se a memória falha, a BIOS nem consegue inicializar a placa de vídeo para mostrar o erro na tela — por isso ela 'avisa' por som.",
    armadilha: "Trocar todos os pentes de memória de uma vez, sem testar individualmente, é um erro comum entre técnicos iniciantes — isso impede identificar qual módulo específico está com defeito e pode mascarar problemas de slot."
  },
  {
    codigo: "HW-THERM",
    nivel: "intermediario",
    nivelLabel: "Intermediário",
    categoria: "Hardware — Refrigeração",
    sintoma: "O computador liga, dá vídeo normalmente, mas trava sempre após alguns minutos de uso.",
    conceito: "Este caso ensina a diferença entre defeito permanente e defeito por condição — um sintoma que só aparece sob certas circunstâncias (aqui, o acúmulo de calor).",
    dicas: [
      "O travamento acontece em qualquer uso, ou só em tarefas pesadas (jogos, renderização)?",
      "Existe algum barulho anormal vindo dos coolers?",
      "Quanto tempo, em média, até o travamento ocorrer?"
    ],
    pista: "Superaquecimento — cooler travado, poeira acumulada ou pasta térmica ressecada.",
    resolucao: "Verificar temperatura em tempo real (BIOS ou software de monitoramento), limpar coolers e trocar a pasta térmica.",
    porque: "O processador tem um limite térmico de segurança (thermal throttling / shutdown). Quando ultrapassado, o sistema trava ou desliga para se proteger de danos físicos — é uma falha de proteção, não um defeito do próprio processador.",
    armadilha: "Associar travamento a 'problema de software' antes de checar a temperatura é um erro comum entre técnicos iniciantes diante desse sintoma."
  },
  {
    codigo: "HW-MOBO",
    nivel: "intermediario",
    nivelLabel: "Intermediário",
    categoria: "Hardware — Placa-mãe",
    sintoma: "A data e a hora do sistema sempre voltam ao padrão quando o computador é desligado.",
    conceito: "Introduz o conceito de CMOS: uma pequena memória volátil na placa-mãe que guarda as configurações da BIOS e depende de uma bateria própria para não se apagar.",
    dicas: [
      "Há quanto tempo o computador está em uso (a bateria tem vida útil)?",
      "Outras configurações da BIOS também estão sendo perdidas?",
      "Que tipo de bateria alimenta essa memória?"
    ],
    pista: "Bateria da BIOS (CMOS) descarregada.",
    resolucao: "Substituir a bateria CR2032 na placa-mãe.",
    porque: "Diferente da RAM principal, o CMOS precisa manter dados mesmo com o computador desligado da tomada. Isso só é possível com uma bateria dedicada; quando ela descarrega, as configurações voltam ao padrão de fábrica a cada desligamento.",
    armadilha: "Confundir esse sintoma com 'vírus' ou 'problema do Windows' é um erro comum entre técnicos iniciantes — sintomas que se repetem a cada desligamento apontam para hardware, não software."
  },
  {
    codigo: "HW-STORAGE",
    nivel: "intermediario",
    nivelLabel: "Intermediário",
    categoria: "Hardware — Armazenamento",
    sintoma: "O HD faz um barulho de clique repetitivo e o Windows não inicializa.",
    conceito: "Ensina a priorizar a integridade dos dados do usuário antes mesmo de resolver o defeito técnico — uma postura profissional essencial em manutenção.",
    dicas: [
      "O barulho é constante ou intermitente?",
      "Existe algum backup recente dos dados do cliente?",
      "O defeito é mecânico (HD) ou pode ser um SSD com outro tipo de falha?"
    ],
    pista: "Falha mecânica no disco rígido (cabeça de leitura ou motor).",
    resolucao: "Rodar diagnóstico S.M.A.R.T., orientar backup imediato dos dados e substituir o disco.",
    porque: "O 'click of death' é causado pela cabeça de leitura tentando repetidamente se recalibrar e falhando — geralmente um sinal de falha mecânica irreversível. Continuar usando o disco nesse estado aumenta o risco de perda total dos dados.",
    armadilha: "Tentar 'forçar' o HD a funcionar ligando e desligando repetidamente é um erro comum entre técnicos iniciantes e pode agravar o dano físico. O primeiro passo profissional é sempre proteger os dados, não consertar a peça."
  },
  {
    codigo: "HW-INTERMIT",
    nivel: "intermediario",
    nivelLabel: "Intermediário",
    categoria: "Hardware — Diagnóstico intermitente",
    sintoma: "O computador liga apenas às vezes, de forma aleatória, sem padrão aparente.",
    conceito: "Este é o tipo de defeito mais desafiador para técnicos iniciantes: falhas intermitentes exigem método, paciência e registro sistemático de tentativas — não apenas sorte.",
    dicas: [
      "O problema tem relação com temperatura, posição do gabinete ou tempo de uso?",
      "Já foi feito algum teste de troca de componente isolado?",
      "É possível reproduzir o defeito de forma controlada?"
    ],
    pista: "Mau contato em módulo de memória, cabo SATA ou defeito intermitente na fonte.",
    resolucao: "Aplicar o método de eliminação: testar e trocar um componente de cada vez até isolar a causa.",
    porque: "Falhas intermitentes geralmente vêm de conexões físicas imperfeitas (oxidação, folga) ou componentes que falham sob condições específicas de temperatura/tensão. Sem um método estruturado de eliminação, o técnico corre o risco de 'consertar por acidente' sem entender a causa real.",
    armadilha: "Trocar várias peças ao mesmo tempo pode até resolver o problema, mas é um erro comum entre técnicos iniciantes — a causa real não é identificada, e o defeito pode voltar. A regra é sempre isolar uma variável de cada vez."
  },
  {
    codigo: "NET-L1L3",
    nivel: "avancado",
    nivelLabel: "Avançado",
    categoria: "Rede — Camada física e lógica",
    sintoma: "O computador liga normalmente, mas não reconhece a rede cabeada.",
    conceito: "Primeiro contato com troubleshooting em camadas (modelo OSI/TCP-IP simplificado): separar o problema em físico (cabo, conector), driver (software do dispositivo) e configuração (rede).",
    dicas: [
      "Existe luz de link piscando na placa de rede e na porta do switch?",
      "O problema é só nesse computador, ou afeta outros na mesma sala?",
      "O Gerenciador de Dispositivos mostra algum erro na placa de rede?"
    ],
    pista: "Pode ser driver da placa de rede desatualizado/corrompido, cabo de rede rompido ou porta do switch desativada.",
    resolucao: "Testar o cabo em outra porta, verificar o driver da placa de rede e checar o status da porta no switch.",
    porque: "Conectividade de rede depende de múltiplas camadas funcionando em conjunto: sinal elétrico no cabo (física), reconhecimento do dispositivo pelo sistema operacional (driver) e configuração lógica (IP, DHCP). Um erro em qualquer camada produz o mesmo sintoma visível — por isso é preciso isolar camada por camada.",
    armadilha: "Reinstalar o sistema operacional inteiro para 'resolver' um cabo de rede rompido é um erro comum entre técnicos iniciantes — a camada física deve ser sempre a primeira a ser descartada, por ser a mais rápida de checar."
  },
  {
    codigo: "NET-CMP",
    nivel: "avancado",
    nivelLabel: "Avançado",
    categoria: "Rede — Diagnóstico comparativo",
    sintoma: "A internet está lenta apenas em um computador da sala; os demais estão normais.",
    conceito: "Introduz o raciocínio comparativo: quando um sintoma afeta apenas um ponto entre vários equivalentes, a causa tende a estar localizada nesse ponto específico, não na infraestrutura compartilhada.",
    dicas: [
      "Os outros computadores compartilham o mesmo switch/roteador?",
      "O ipconfig mostra um IP duplicado ou fora da faixa esperada?",
      "Um teste de ping para o roteador mostra perda de pacotes?"
    ],
    pista: "Cabo Cat5/Cat6 danificado, placa de rede com defeito ou conflito/duplicação de endereço IP.",
    resolucao: "Testar troubleshooting em camadas: verificar o cabo (físico), depois o driver e a configuração de IP (lógico) com ipconfig e ping.",
    porque: "Se o problema fosse do provedor de internet ou do roteador, afetaria todos os computadores igualmente. Um sintoma isolado em uma única máquina aponta para algo específico daquele ponto: o cabo, a placa ou a configuração de rede dela.",
    armadilha: "Culpar 'a internet' sem antes comparar com outras máquinas da mesma rede é um erro comum entre técnicos iniciantes. Pergunte sempre: 'isso afeta só esta máquina ou todas?' antes de investigar mais fundo."
  },
  {
    codigo: "HW-FW",
    nivel: "avancado",
    nivelLabel: "Avançado",
    categoria: "Hardware — Firmware crítico",
    sintoma: "Após uma atualização de BIOS, o computador parou de dar boot.",
    conceito: "Trata de um cenário de risco elevado: falhas durante atualização de firmware podem deixar o equipamento 'brickado' (inutilizável), por isso exige procedimentos de recuperação específicos do fabricante.",
    dicas: [
      "A placa-mãe possui algum recurso de recuperação de BIOS (dual BIOS, jumper CLR_CMOS)?",
      "O manual do fabricante indica um procedimento de recovery via pendrive?",
      "Esse tipo de falha pode ser prevenido? Como?"
    ],
    pista: "BIOS corrompida durante o processo de atualização.",
    resolucao: "Seguir o procedimento de recuperação da placa-mãe (jumper de recovery ou boot via pendrive com o arquivo da BIOS), se suportado pelo fabricante.",
    porque: "A BIOS/UEFI é o firmware que inicializa todo o hardware antes mesmo do sistema operacional carregar. Uma atualização interrompida (queda de energia, arquivo corrompido) pode deixar esse firmware incompleto, impedindo qualquer boot — por isso fabricantes oferecem mecanismos de recuperação de emergência.",
    armadilha: "Tentar atualizar a BIOS novamente sem seguir o procedimento correto de recovery do fabricante é um erro comum entre técnicos iniciantes e pode agravar o problema. Sempre consulte o manual da placa-mãe antes de agir em casos de firmware."
  },
  {
    codigo: "HW-SHORT",
    nivel: "intermediario",
    nivelLabel: "Intermediário",
    categoria: "Hardware — Curto-circuito",
    sintoma: "O computador desliga sozinho assim que qualquer botão do gabinete (liga, reset) é pressionado, mesmo sem estar aquecendo.",
    conceito: "Nem todo desligamento repentino é elétrico externo — pode ser um curto interno entre a placa-mãe e o gabinete metálico, causado por um ponto de contato que não deveria existir.",
    dicas: [
      "O desligamento acontece só ao apertar botões, ou também em uso normal?",
      "Todos os parafusos de fixação da placa-mãe estão sobre os standoffs corretos?",
      "Há algum parafuso solto dentro do gabinete que possa estar encostando na placa?"
    ],
    pista: "Standoff (espaçador) mal posicionado ou parafuso solto encostando na parte de trás da placa-mãe, causando curto-circuito.",
    resolucao: "Remover a placa-mãe, conferir se todos os standoffs correspondem exatamente aos furos de fixação, e verificar se não há parafusos soltos dentro do gabinete.",
    porque: "A parte de trás da placa-mãe tem trilhas de cobre expostas. Se ela encostar diretamente no gabinete metálico (sem o standoff isolando), qualquer botão do painel frontal pode gerar um curto que força o desligamento como proteção.",
    armadilha: "Trocar a fonte ou a placa-mãe inteira sem antes verificar a montagem física é um erro comum entre técnicos iniciantes — o defeito pode estar simplesmente na instalação, não na peça."
  },
  {
    codigo: "HW-PSU2",
    nivel: "avancado",
    nivelLabel: "Avançado",
    categoria: "Hardware — Fonte sob carga",
    sintoma: "O computador desliga sozinho apenas durante tarefas pesadas, como jogos ou renderização de vídeo, mas funciona normalmente em tarefas leves.",
    conceito: "Alguns defeitos só aparecem sob carga elétrica alta — testar em repouso não é suficiente para diagnosticar esse tipo de problema.",
    dicas: [
      "O desligamento tem relação com algum componente específico (GPU, CPU) sendo mais exigido?",
      "A fonte tem potência (wattage) suficiente para os componentes instalados?",
      "É possível medir as voltagens da fonte enquanto o sistema está sob carga?"
    ],
    pista: "Fonte de alimentação subdimensionada para a configuração, ou com capacitores desgastados que não sustentam picos de consumo.",
    resolucao: "Calcular o consumo real da configuração, medir as voltagens sob carga (multímetro ou software de monitoramento) e substituir a fonte por uma com potência e qualidade adequadas.",
    porque: "Sob carga pesada, componentes como a GPU exigem picos momentâneos de corrente muito maiores que em repouso. Uma fonte no limite ou com capacitores degradados não consegue manter a voltagem estável nesses picos, e o sistema desliga por proteção.",
    armadilha: "Diagnosticar apenas com o computador em repouso é um erro comum entre técnicos iniciantes — o defeito só se manifesta sob estresse real do sistema, então o teste precisa reproduzir essa condição."
  },
  {
    codigo: "HW-PERIPH",
    nivel: "basico",
    nivelLabel: "Básico",
    categoria: "Hardware — Periféricos",
    sintoma: "Algumas teclas do teclado não respondem, e outras digitam caracteres repetidos sozinhas.",
    conceito: "Periféricos são frequentemente esquecidos no diagnóstico porque o foco natural vai para dentro do gabinete — mas o defeito pode estar totalmente fora dele.",
    dicas: [
      "O problema acontece em outro computador com o mesmo teclado?",
      "Existe sujeira, líquido derramado ou poeira visível entre as teclas?",
      "O teclado é o mesmo desde a instalação, ou foi trocado recentemente?"
    ],
    pista: "Membrana do teclado suja ou desgastada, ou driver do teclado desatualizado.",
    resolucao: "Testar o teclado em outro computador para isolar a causa; se o defeito persistir, limpar ou substituir o teclado; se não persistir, reinstalar o driver.",
    porque: "Um teclado é, na prática, uma grade de contatos que fecha um circuito a cada tecla pressionada. Sujeira ou desgaste nesses contatos pode fazer com que um circuito não feche (tecla não responde) ou feche continuamente (tecla repete sozinha).",
    armadilha: "Tentar resolver reinstalando o sistema operacional inteiro é um erro comum entre técnicos iniciantes, quando o teste mais rápido — trocar o teclado por outro — já isola a causa em segundos."
  },
  {
    codigo: "HW-AUDIO",
    nivel: "basico",
    nivelLabel: "Básico",
    categoria: "Hardware — Áudio",
    sintoma: "O computador liga e funciona normalmente, mas não emite nenhum som, nem nos alto-falantes nem no fone de ouvido.",
    conceito: "Assim como no caso de vídeo, o técnico precisa separar 'o hardware não funciona' de 'o hardware não está sendo usado' — e a segunda causa é bem mais comum.",
    dicas: [
      "O ícone de volume do Windows mostra algum aviso ou dispositivo mudo?",
      "Qual dispositivo de saída de áudio está selecionado nas configurações de som?",
      "O problema acontece em outro programa, ou só em um específico?"
    ],
    pista: "Dispositivo de saída de áudio errado selecionado no sistema, ou driver de áudio desinstalado/desatualizado.",
    resolucao: "Verificar o dispositivo de reprodução padrão nas configurações de som do sistema, e reinstalar/atualizar o driver de áudio se necessário.",
    porque: "O sistema operacional pode enviar o som para um dispositivo diferente do esperado (por exemplo, um monitor HDMI sem caixas de som), fazendo parecer que o áudio 'não funciona' quando na verdade está sendo direcionado para o lugar errado.",
    armadilha: "Abrir o gabinete à procura de um defeito físico antes de checar as configurações de software é um erro comum entre técnicos iniciantes neste tipo de sintoma."
  },
  {
    codigo: "SW-BOOT",
    nivel: "intermediario",
    nivelLabel: "Intermediário",
    categoria: "Software — Inicialização",
    sintoma: "O Windows fica reiniciando sozinho em loop, sempre travando no mesmo ponto pouco depois da logo de inicialização.",
    conceito: "Um boot loop indica que algo essencial ao carregamento do sistema está corrompido ou incompatível — o Modo de Segurança existe justamente para diagnosticar esse tipo de cenário.",
    dicas: [
      "O problema começou depois de alguma atualização, instalação ou queda de energia?",
      "É possível entrar no Modo de Segurança do Windows?",
      "Existe algum ponto de restauração do sistema disponível?"
    ],
    pista: "Atualização do sistema corrompida ou driver incompatível causando falha crítica (tela azul) repetida durante a inicialização.",
    resolucao: "Iniciar em Modo de Segurança, desinstalar a atualização ou driver recente, e usar um ponto de restauração do sistema se disponível.",
    porque: "Durante o boot, o Windows carrega drivers e serviços essenciais em uma ordem específica. Se um deles está corrompido ou incompatível, o sistema trava e reinicia automaticamente como proteção — repetindo o ciclo até que a causa seja removida.",
    armadilha: "Formatar o computador direto diante desse sintoma é um erro comum entre técnicos iniciantes — na maioria dos casos, o Modo de Segurança resolve sem perda de dados do cliente."
  },
  {
    codigo: "SW-PERF",
    nivel: "intermediario",
    nivelLabel: "Intermediário",
    categoria: "Software — Desempenho",
    sintoma: "O computador demora vários minutos para abrir qualquer programa, mesmo sendo um modelo relativamente novo.",
    conceito: "Lentidão generalizada tem várias causas possíveis — o papel do técnico é descobrir qual recurso do sistema (disco, memória, processador) está sendo o gargalo.",
    dicas: [
      "O Gerenciador de Tarefas mostra algum processo consumindo os recursos continuamente?",
      "O computador usa HD mecânico ou SSD?",
      "Há pouco espaço livre em disco ou pouca memória RAM disponível?"
    ],
    pista: "HD mecânico saturado (fragmentação, pouco espaço livre) ou quantidade insuficiente de memória RAM para o uso atual.",
    resolucao: "Verificar o uso de disco e memória no Gerenciador de Tarefas; considerar migração para SSD e/ou upgrade de memória RAM conforme o gargalo identificado.",
    porque: "Um HD mecânico tem velocidade de leitura/gravação muito menor que um SSD, e se o computador precisa usar constantemente a memória virtual (swap) no disco por falta de RAM, cada operação fica extremamente lenta.",
    armadilha: "Assumir que 'o computador é velho, não tem solução' sem antes medir onde está o gargalo real é um erro comum entre técnicos iniciantes — muitas vezes um upgrade pontual resolve completamente o sintoma."
  },
  {
    codigo: "NET-WIFI",
    nivel: "basico",
    nivelLabel: "Básico",
    categoria: "Rede — Wi-Fi",
    sintoma: "O notebook não encontra nenhuma rede Wi-Fi disponível, mas a internet funciona normalmente por cabo.",
    conceito: "Assim como em outros casos de rede, é preciso isolar se o problema está no hardware do adaptador, em uma tecla de atalho do próprio notebook, ou no driver.",
    dicas: [
      "Existe uma tecla de função (Fn) ou interruptor físico que ativa/desativa o Wi-Fi nesse notebook?",
      "O adaptador de rede sem fio aparece no Gerenciador de Dispositivos?",
      "O modo avião está desativado?"
    ],
    pista: "Adaptador Wi-Fi desativado fisicamente (tecla de função) ou driver de rede sem fio desabilitado no Gerenciador de Dispositivos.",
    resolucao: "Verificar a tecla de atalho de Wi-Fi e o modo avião, e checar no Gerenciador de Dispositivos se o adaptador está habilitado e com driver instalado.",
    porque: "A maioria dos notebooks tem uma forma de desligar o rádio Wi-Fi via software ou hardware para economizar energia. Isso não é um defeito físico — é uma configuração que precisa ser identificada e revertida.",
    armadilha: "Reinstalar o driver de rede sem antes checar se o adaptador está simplesmente desativado é um erro comum entre técnicos iniciantes — um passo muito mais rápido de descartar."
  },
  {
    codigo: "NET-DHCP",
    nivel: "avancado",
    nivelLabel: "Avançado",
    categoria: "Rede — DHCP",
    sintoma: "Vários computadores do laboratório recebem o mesmo endereço IP e ficam com 'conflito de endereço IP' constantemente.",
    conceito: "Este caso exige entender o papel do servidor DHCP na rede — normalmente deve existir apenas um distribuindo endereços, para evitar duplicidade.",
    dicas: [
      "Existe mais de um roteador ou switch com DHCP habilitado na mesma rede?",
      "Os IPs duplicados aparecem em uma faixa específica de endereços?",
      "Algum equipamento novo foi conectado à rede recentemente?"
    ],
    pista: "Dois servidores DHCP ativos simultaneamente na mesma rede, distribuindo endereços IP conflitantes.",
    resolucao: "Identificar todos os equipamentos com DHCP habilitado na rede e desativar o serviço em todos, exceto no roteador/servidor principal.",
    porque: "O DHCP distribui endereços IP automaticamente para os dispositivos que entram na rede. Se dois serviços DHCP fazem isso ao mesmo tempo, sem coordenação entre eles, o mesmo endereço pode ser oferecido a mais de um dispositivo — gerando o conflito.",
    armadilha: "Resolver o conflito manualmente, computador por computador, sem investigar a causa raiz é um erro comum entre técnicos iniciantes — o problema volta a aparecer em outra máquina pouco depois."
  },
  {
    codigo: "NET-PRINT",
    nivel: "intermediario",
    nivelLabel: "Intermediário",
    categoria: "Rede — Impressão",
    sintoma: "A impressora de rede do laboratório aparece como 'offline' para todos os computadores ao mesmo tempo.",
    conceito: "Quando um mesmo sintoma afeta todos os pontos ao mesmo tempo (diferente do caso de rede lenta em só um computador), a causa tende a estar no recurso compartilhado, não nas máquinas individuais.",
    dicas: [
      "O IP configurado da impressora nos computadores é fixo ou dinâmico (DHCP)?",
      "A impressora está ligada e conectada normalmente à rede?",
      "O spooler de impressão está em execução no servidor de impressão, se houver um?"
    ],
    pista: "O endereço IP da impressora mudou (por estar em DHCP) e não foi atualizado na configuração dos computadores, ou o serviço de spooler travou.",
    resolucao: "Verificar o IP atual da impressora, ajustar para IP fixo (ou atualizar a configuração nos computadores) e reiniciar o serviço de spooler de impressão se necessário.",
    porque: "Impressoras de rede em laboratório costumam funcionar melhor com IP fixo justamente para evitar esse problema: se o endereço muda automaticamente via DHCP, todos os computadores que apontam para o IP antigo perdem a comunicação com o equipamento ao mesmo tempo.",
    armadilha: "Reiniciar cada computador individualmente, achando que o problema é local, é um erro comum entre técnicos iniciantes quando o sintoma afeta todas as máquinas ao mesmo tempo — nesse caso, o ponto comum (a impressora ou o servidor) é sempre o primeiro suspeito."
  },
  {
    codigo: "SEC-MALWARE",
    nivel: "avancado",
    nivelLabel: "Avançado",
    categoria: "Segurança — Malware",
    sintoma: "O computador está visivelmente mais lento que o normal, e o navegador abre páginas de propaganda sozinho, mesmo sem nenhuma aba aberta pelo usuário.",
    conceito: "Introduz o diagnóstico de segurança como parte da manutenção: nem todo sintoma de lentidão ou comportamento estranho é hardware ou configuração — pode ser software malicioso.",
    dicas: [
      "O navegador tem extensões instaladas que o usuário não reconhece?",
      "O Gerenciador de Tarefas mostra processos com nomes estranhos consumindo CPU ou rede continuamente?",
      "Algum programa foi instalado recentemente, especialmente de fontes não oficiais?"
    ],
    pista: "Adware ou malware instalado no sistema, muitas vezes através de uma extensão maliciosa no navegador.",
    resolucao: "Verificar e remover extensões suspeitas do navegador, rodar uma ferramenta antimalware completa, e revisar os programas instalados recentemente.",
    porque: "Adwares costumam se instalar disfarçados dentro de outros programas gratuitos ('bundling'), e uma vez ativos, geram receita para quem os distribui abrindo anúncios e consumindo recursos do sistema em segundo plano — daí a lentidão.",
    armadilha: "Assumir que basta reinstalar o navegador para resolver é um erro comum entre técnicos iniciantes — se o malware está instalado no sistema operacional (não só no navegador), ele volta a se instalar na extensão assim que o navegador é reaberto."
  }
];
