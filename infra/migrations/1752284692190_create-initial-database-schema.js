/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  pgm.createTable("usuario", {
    id: {
      type: "serial",
      primaryKey: true,
      notNull: true,
    },
    nome: {
      type: "varchar(100)",
      notNull: true,
    },
    email: {
      type: "varchar(254)",
      notNull: true,
    },
    senha: {
      type: "varchar(100)",
    },
  });

  pgm.createTable("curso", {
    id: {
      type: "serial",
      primaryKey: true,
      notNull: true,
    },
    nome: {
      type: "varchar(50)",
      notNull: true,
    },
    descricao: {
      type: "varchar(500)",
      notNull: true,
    },
  });

  pgm.createTable("aula", {
    id: {
      type: "serial",
      primaryKey: true,
      notNull: true,
    },
    curso_id: {
      type: "int",
      notNull: true,
      references: "curso",
      onDelete: "CASCADE",
    },
    titulo: {
      type: "varchar(50)",
      notNull: true,
    },
    video_url: {
      type: "varchar(200)",
      notNull: true,
    },
    texto_explicativo: {
      type: "varchar(1000)",
      notNull: true,
    },
  });

  pgm.createTable("ideia", {
    id: {
      type: "serial",
      primaryKey: true,
      notNull: true,
    },
    titulo: {
      type: "varchar(50)",
      notNull: true,
    },
    conteudo: {
      type: "varchar(500)",
      notNull: true,
    },
  });

  pgm.sql(`
    INSERT INTO
      usuario (nome, email, senha)
    VALUES
      ('João da Silva', 'joao.silva@email.com', 'joao.silva'),
      ('Maria de Souza', 'maria.souza@email.com', 'maria.souza')
  ;`);

  pgm.sql(`
    INSERT INTO 
      curso (nome, descricao) 
    VALUES
      ('Impressora 3D', 'Curso completo sobre o funcionamento, montagem e calibração de impressoras 3D, explorando suas aplicações práticas.\n\nEste curso aborda desde os princípios básicos da fabricação aditiva até dicas avançadas para otimizar suas impressões e resolver problemas comuns.\n\nPerfeito para quem deseja dominar essa tecnologia e criar objetos incríveis.'),
      
      ('Impressora a Laser', 'Aprenda os princípios e a operação de impressoras a laser, desde o corte e gravação até projetos avançados.\n\nExplore as configurações de potência, velocidade e materiais compatíveis para criar peças de alta precisão e design.\n\nIdeal para designers, artesãos e makers que buscam precisão e versatilidade em seus projetos.'),
      
      ('Arduino', 'Introdução ao Arduino, programação básica, eletrônica e desenvolvimento de projetos interativos.\n\nConstrua circuitos, programe microcontroladores e crie protótipos para automação, robótica e Internet das Coisas.\n\nUm guia prático para iniciantes no universo da eletrônica e programação embarcada.')
  ;`);

  pgm.sql(`
    INSERT INTO 
      aula (curso_id, titulo, video_url, texto_explicativo) 
    VALUES
      (1, 'Introdução à Impressão 3D', 'https://www.youtube.com/embed/u9Do9XbtgH4?si=PFADmCt0Hw1HFNA2', 'Este módulo aborda os fundamentos da impressão 3D, explicando o que é, como funciona e suas principais tecnologias.\nEntenda os diferentes tipos de impressoras e suas aplicações no mercado atual. Uma visão geral para iniciantes.\n\nDescubra as vantagens e desvantagens de cada tecnologia, como FDM, SLA e SLS. Compreenda o fluxo de trabalho básico, desde a modelagem até a peça final.\n\nPrepare-se para mergulhar no mundo da fabricação aditiva e suas infinitas possibilidades. Este é o ponto de partida para sua jornada na impressão 3D.'),
      
      (1, 'Modelagem para Impressão 3D', 'https://www.youtube.com/embed/u9Do9XbtgH4?si=PFADmCt0Hw1HFNA2', 'Aprenda a criar modelos 3D otimizados para impressão, utilizando softwares como Tinkercad e Fusion 360. Entenda conceitos de geometria e design paramétrico.\n\nExplore as melhores práticas para garantir que seus modelos sejam imprimíveis. Foco em detalhes, suportes e preenchimento.\n\nDesenvolva suas habilidades de design e transforme suas ideias em objetos tridimensionais. A modelagem é a base para qualquer projeto de impressão 3D.'),
      
      (1, 'Fatiamento e Configurações', 'https://www.youtube.com/embed/u9Do9XbtgH4?si=PFADmCt0Hw1HFNA2', 'Este módulo cobre o processo de fatiamento (slicing) com softwares como Cura ou PrusaSlicer. Configure parâmetros essenciais para uma impressão de qualidade.\n\nEntenda a importância da temperatura, velocidade, retração e altura de camada. Otimize as configurações para diferentes materiais e complexidades de modelo.\n\nDomine o fatiamento para obter os melhores resultados em suas impressões. Uma boa configuração faz toda a diferença no acabamento da peça.'),
      
      (1, 'Tipos de Filamentos e Aplicações', 'https://www.youtube.com/embed/u9Do9XbtgH4?si=PFADmCt0Hw1HFNA2', 'Explore os diversos tipos de filamentos disponíveis para impressão 3D, como PLA, ABS, PETG e TPU. Conheça suas propriedades e melhores usos.\n\nAprenda a escolher o material certo para cada projeto, considerando resistência, flexibilidade e acabamento. Dicas de armazenamento e manuseio.\n\nAmplie suas opções de criação ao dominar os diferentes materiais. Cada filamento oferece características únicas para suas peças.'),

      (1, 'Manutenção e Solução de Problemas', 'https://www.youtube.com/embed/u9Do9XbtgH4?si=PFADmCt0Hw1HFNA2', 'Entenda a manutenção preventiva da impressora 3D para garantir sua longevidade e bom funcionamento. Dicas de limpeza e calibração regular.\n\nAprenda a identificar e solucionar problemas comuns como entupimentos, falhas de adesão e camadas irregulares. Diagnóstico rápido para impressões bem-sucedidas.\n\nMantenha sua impressora em perfeito estado e minimize interrupções. A manutenção é chave para a produtividade e qualidade constante.'),

      (2, 'Fundamentos da Impressora a Laser', 'https://www.youtube.com/embed/u9Do9XbtgH4?si=PFADmCt0Hw1HFNA2', 'Descubra como as impressoras a laser funcionam, desde o feixe laser até o processo de corte e gravação. Entenda os componentes principais e sua função.\n\nAprenda sobre os diferentes tipos de lasers (CO2, Fibra) e suas aplicações em materiais. Segurança e precauções essenciais.\n\nEste módulo é a base para operar sua impressora a laser com confiança. Compreenda a tecnologia por trás do corte de precisão.'),

      (2, 'Preparação de Materiais e Foco', 'https://www.youtube.com/embed/u9Do9XbtgH4?si=PFADmCt0Hw1HFNA2', 'Explore os materiais compatíveis com impressoras a laser, como madeira, acrílico, couro e papel. Dicas para preparar a superfície de trabalho.\n\nAprenda a ajustar o foco do laser para obter cortes limpos e gravações nítidas. A altura correta é crucial para a qualidade do trabalho.\n\nDomine a preparação para maximizar a eficiência e a segurança. A escolha e o preparo do material são fundamentais para o sucesso do projeto.'),

      (2, 'Software de Controle e Parâmetros', 'https://www.youtube.com/embed/u9Do9XbtgH4?si=PFADmCt0Hw1HFNA2', 'Familiarize-se com os softwares de controle de impressora a laser, como LightBurn ou RDWorks. Configure os parâmetros de corte e gravação.\n\nEntenda a relação entre potência, velocidade e número de passadas para cada material. Otimize as configurações para diferentes efeitos.\n\nControle total sobre sua impressora para resultados precisos. A calibração dos parâmetros é essencial para a qualidade final.'),

      (2, 'Projetos de Corte e Gravação', 'https://www.youtube.com/embed/u9Do9XbtgH4?si=PFADmCt0Hw1HFNA2', 'Desenvolva projetos práticos de corte e gravação a laser, desde peças simples até montagens complexas. Explore técnicas de encaixe e marcação.\n\nAprenda a criar designs vetoriais e rasterizados para diferentes aplicações. Dicas para otimizar o tempo de trabalho e o uso do material.\n\nTransforme suas ideias em realidade com a precisão do laser. A criatividade é o limite para os projetos que você pode desenvolver.'),

      (2, 'Segurança e Manutenção da Máquina', 'https://www.youtube.com/embed/u9Do9XbtgH4?si=PFADmCt0Hw1HFNA2', 'Conheça as normas de segurança para operar impressoras a laser, incluindo o uso de EPIs e ventilação adequada. Prevenção de acidentes.\n\nAprenda a realizar a manutenção preventiva da sua máquina, como limpeza de lentes e espelhos. Garanta a longevidade e o desempenho do equipamento.\n\nOperação segura e eficiente para um ambiente de trabalho produtivo. A manutenção regular é vital para a precisão e durabilidade da impressora.'),

      (3, 'Primeiros Passos com Arduino', 'https://www.youtube.com/embed/u9Do9XbtgH4?si=PFADmCt0Hw1HFNA2', 'Introdução ao ambiente de desenvolvimento Arduino IDE e à placa Arduino. Aprenda a instalar drivers e configurar sua primeira placa.\n\nEntenda a estrutura básica de um programa Arduino (sketch) e como fazer o upload para a placa. O famoso "Hello World" da eletrônica.\n\nComece sua jornada no mundo da prototipagem eletrônica de forma simples e direta. Este é o ponto de partida para qualquer projeto com Arduino.'),

      (3, 'Entradas e Saídas Digitais', 'https://www.youtube.com/embed/u9Do9XbtgH4?si=PFADmCt0Hw1HFNA2', 'Aprenda a controlar componentes digitais como LEDs e botões. Entenda os conceitos de HIGH/LOW e INPUT/OUTPUT.\n\nDesenvolva circuitos básicos para acender LEDs e ler o estado de botões. Pratique a escrita de código para interagir com o mundo físico.\n\nDomine o controle digital para criar projetos interativos. A base para a maioria dos projetos com Arduino começa aqui.'),

      (3, 'Entradas e Saídas Analógicas', 'https://www.youtube.com/embed/u9Do9XbtgH4?si=PFADmCt0Hw1HFNA2', 'Explore o uso de entradas analógicas para ler sensores como potenciômetros e sensores de luz. Entenda a conversão analógico-digital.\n\nAprenda a controlar saídas analógicas (PWM) para variar a intensidade de LEDs ou a velocidade de motores. Crie efeitos de iluminação e controle de velocidade.\n\nAmplie suas possibilidades de interação com o ambiente. O controle analógico permite projetos mais sofisticados e responsivos.'),

      (3, 'Sensores e Atuadores Essenciais', 'https://www.youtube.com/embed/u9Do9XbtgH4?si=PFADmCt0Hw1HFNA2', 'Conheça uma variedade de sensores (temperatura, distância, umidade) e atuadores (servos, motores de passo) comuns no Arduino. Integração e uso.\n\nAprenda a conectar e programar esses componentes para coletar dados do ambiente e realizar ações. Exemplos práticos de aplicação.\n\nConstrua projetos mais complexos e inteligentes. A combinação de sensores e atuadores é o coração da automação e robótica.'),

      (3, 'Comunicação Serial e Projeto Final', 'https://www.youtube.com/embed/u9Do9XbtgH4?si=PFADmCt0Hw1HFNA2', 'Entenda a comunicação serial entre o Arduino e o computador, útil para depuração e interação. Envio e recebimento de dados.\n\nDesenvolva um projeto final integrando os conhecimentos adquiridos, como um sistema de monitoramento ou um pequeno robô. Desafie-se a criar algo completo.\n\nConsolide seu aprendizado com um projeto prático. A comunicação serial é uma ferramenta poderosa para depurar e expandir seus projetos.')
  ;`);

  pgm.sql(`
    INSERT INTO 
      ideia (titulo, conteudo) 
    VALUES
      ('Luminária de Garrafa PET', 'Crie uma luminária decorativa usando uma garrafa PET reciclada e LEDs. \n\nPassos:\n1. Lave e corte a garrafa PET.\n2. Faça furos para os LEDs.\n3. Insira os LEDs e conecte a uma fonte.\n4. Decore a garrafa.'),
      ('Mini Robô Desenhista', 'Construa um robô que se move e desenha automaticamente. \n\nPassos:\n1. Monte a base com motor e rodas.\n2. Fixe um caneta na estrutura.\n3. Programe os movimentos com Arduino.\n4. Deixe o robô criar desenhos.'),
      ('Alarme de Porta Simples', 'Desenvolva um alarme para porta usando um sensor magnético e um buzzer. \n\nPassos:\n1. Conecte o sensor e o buzzer ao Arduino.\n2. Fixe o sensor na porta e batente.\n3. Programe o Arduino para soar o alarme quando a porta abrir.\n4. Teste a funcionalidade.'),
      ('Carregador Solar para Celular', 'Monte um carregador portátil para celular usando um painel solar e um regulador de voltagem. \n\nPassos:\n1. Conecte o painel solar ao regulador.\n2. Conecte o regulador a uma porta USB.\n3. Encapse o circuito.\n4. Use a luz solar para carregar seu dispositivo.'),
      ('Horta Inteligente com Sensor de Umidade', 'Crie um sistema que avisa quando a planta precisa de água usando um sensor de umidade. \n\nPassos:\n1. Insira o sensor de umidade no solo.\n2. Conecte o sensor a um LED ou buzzer via Arduino.\n3. Programe para o LED acender quando o solo estiver seco.\n4. Observe e regue suas plantas no tempo certo.')
  ;`);
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {};
