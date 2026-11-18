const menuMobileBtn = document.getElementById("menuMobileBtn");
const menu = document.getElementById("menu");

if (menuMobileBtn && menu) {
  menuMobileBtn.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    menuMobileBtn.textContent = menu.classList.contains("ativo") ? "×" : "☰";
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("ativo");
      menuMobileBtn.textContent = "☰";
    });
  });
}

/* CONTADORES */
const contadores = document.querySelectorAll(".contador");

function formatarNumero(valor) {
  return valor.toLocaleString("pt-BR");
}

function animarContador(contador) {
  if (contador.dataset.animado === "true") return;

  contador.dataset.animado = "true";

  const valorFinal = Number(contador.dataset.valor);
  const prefixo = contador.dataset.prefixo || "";
  const sufixo = contador.dataset.sufixo || "";
  const duracao = 1800;
  const inicio = performance.now();

  function atualizar(tempoAtual) {
    const progresso = Math.min((tempoAtual - inicio) / duracao, 1);
    const easing = 1 - Math.pow(1 - progresso, 4);
    const valorAtual = Math.floor(easing * valorFinal);

    const numeroFormatado = contador.dataset.formato === "ano"
  ? valorAtual
  : formatarNumero(valorAtual);

contador.textContent = `${prefixo}${numeroFormatado}${sufixo}`;

    if (progresso < 1) {
      requestAnimationFrame(atualizar);
    } else {
      const finalFormatado = contador.dataset.formato === "ano"
  ? valorFinal
  : formatarNumero(valorFinal);

contador.textContent = `${prefixo}${finalFormatado}${sufixo}`;
    }
  }

  requestAnimationFrame(atualizar);
}

const historiaSection = document.querySelector(".qv-historia");

if (historiaSection) {
  const historiaObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        historiaSection.classList.add("ativo");
        historiaObserver.unobserve(historiaSection);
      });
    },
    {
      threshold: 0.25
    }
  );

  historiaObserver.observe(historiaSection);
}

/* ANIMAÇÕES AO ROLAR */
const elementosAnimados = [
  ".section-header",
  ".section-title-logo",
  ".section-title-claro",
  ".sobre-texto",
  ".estatistica-card",
  ".numero-item",
  ".novo-servico-card",
  ".compromisso-card",
  ".compliance-texto",
  ".compliance-box",
  ".certificacoes-texto",
  ".certificacoes-selo",
  ".tecnologia-card",
  ".rodape-info",
  ".rodape-mapa-area",
  ".qs-card",
  ".qs-imagens img",
  ".timeline .item",
  ".diferencial-texto",
  ".diferencial-img",
  ".tech-texto",
  ".tech-img",
  ".hero-tecnologia-box",
  ".tecnologia-intro-box",
  ".tec-texto",
  ".tec-midia",
  ".tec-destaques-box",
  ".produtos-topo",
  ".produtos-box",
  ".clientes-hero-texto",
  ".clientes-hero-midia",
  ".clientes-bloco",
  ".clientes-hero-novo",
  ".clientes-confianca-texto",
  ".cliente-valor-card",
  ".depoimento-card",
  ".clientes-logos-grade img",
  ".clientes-numeros-grid article"
];

document.querySelectorAll(elementosAnimados.join(",")).forEach((elemento, index) => {
  elemento.classList.add("reveal");

  if (index % 3 === 0) elemento.classList.add("reveal-left");
  if (index % 3 === 1) elemento.classList.add("reveal-right");
  if (index % 3 === 2) elemento.classList.add("reveal-scale");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("ativo");

      if (entry.target.classList.contains("contador")) {
        animarContador(entry.target);
      }

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -60px 0px"
  }
);

document.querySelectorAll(".reveal, .contador").forEach((elemento) => {
  observer.observe(elemento);
});

/* PROJETOS */
const dadosServicos = {
  edificacoes: {
    titulo: "Edificações",
    icone: "assets/img/Icones_Edificacoes.png",
    descricao:
      "Desenvolvemos projetos arquitetônicos e executivos que unem funcionalidade, estética e eficiência, com foco em qualidade técnica e sustentabilidade.",
    projetos: [
      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/img_qcb/img01.png",
        nome: "Quartel Corpo de Bombeiros",
        local: "Mariana – MG",
        cliente: "Prefeitura Municipal de Mariana",
        area: "1.122,23 m²",
        descricao:
          "Projeto de construção do Quartel do Corpo de Bombeiros Militar de Mariana destinado às atividades de prevenção e combate a incêndios, buscas, salvamentos, atendimento pré-hospitalar e perícias técnicas.",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_qcb/img01.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_qcb/img02.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_qcb/img03.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_qcb/img04.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_qcb/img05.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_qcb/img06.png"
        ]
      },
      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/img_eef/img01.jpg",
        nome: "Escola Enéas Ferreira",
        local: "Fundão – ES",
        cliente: "Prefeitura Municipal de Fundão",
        area: "2.419,38 m²",
        descricao:
          "Implantação de uma nova unidade escolar com salas de aula, auditório, biblioteca, sala de artes, informática e ambientes pedagógicos.",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_eef/img01.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_eef/img02.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_eef/img03.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_eef/img04.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_eef/img05.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_eef/img06.jpg"
        ]
      },
      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/CASA DE CULTURA PARELHAS/img (1).png",
        nome: "Casa de Cultura Parelhas",
        local: "Parelhas – RN",
        cliente: "Secretaria de Estado da Infraestrutura do Rio Grande do Norte",
        area: "344,89 m²",
        descricao:
          "O projeto executivo de restauro da Casa de Cultura Popular Palácio Florêncio Luciano, popularmente conhecida como Casa de Cultura Popular Parelhas, contempla a restauração dos elementos construtivos e ornamentais, a requalificação dos ambientes internos e a adequação das instalações, com soluções de acessibilidade, segurança e conforto, visando garantir condições de visitação a todos os públicos e fortalecer a valorização da memória e da identidade cultural local.",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/CASA DE CULTURA PARELHAS/img (1).png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/CASA DE CULTURA PARELHAS/img (2).png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/CASA DE CULTURA PARELHAS/img (3).png"
        ]
      },
      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/img_ubs/img01.jpg",
        nome: "UBS Tipo I",
        local: "Araújos – MG",
        cliente: "Prefeitura Municipal de Araújos",
        area: "402,29 m²",
        descricao:
          "Projeto arquitetônico de Unidade Básica de Saúde Tipo I desenvolvido conforme normas do Ministério da Saúde e nromas técinas. ",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_ubs/img01.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_ubs/img02.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_ubs/img03.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_ubs/img04.jpg"
        ]
      },
      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/img_rdu/img01.jpg",
        nome: "Reforma de UPA",
        local: "Belo Horizonte – MG",
        cliente: "SUDECAP – Prefeitura de Belo Horizonte",
        area: "526,83 m²",
        descricao:
          "Projeto de ampliação, melhoria e reforma da Unidade de Pronto Atendimento localizada em Venda nova. ",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_rdu/img01.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_rdu/img02.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_rdu/img03.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_rdu/img04.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_rdu/img05.jpg"
        ]
      },
      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/img_empfa/img01.jpg",
        nome: "Escola Municipal Profª Francina",
        local: "Passos – MG",
        cliente: "Prefeitura Municipal de Passos",
        area: "2.639,28 m²",
        descricao:
          "Restauração e adequações de acessibilidade em importante complexo educacional histórico da cidade, visando manter seu valor histórico mas de maneira acessível. ",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_empfa/img01.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_empfa/img02.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_empfa/img03.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_empfa/img04.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_empfa/img05.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_empfa/img06.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_empfa/img07.jpg"
        ]
      },
      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/img_cdc/img01.png",
        nome: "Centro de Convenções",
        local: "Governador Valadares – MG",
        cliente: "Prefeitura Municipal de Governador Valadares",
        area: "3.181,00 m²",
        descricao:
          "Reforma da Companhia Açucareira do Rio Doce para implantação de centro de convenções.",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cdc/img01.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cdc/img02.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cdc/img03.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cdc/img04.png"
        ]
      },
      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/img_hagv/img01.png",
        nome: "Aeroporto Coronel Altino Machado",
        local: "Governador Valadares – MG",
        cliente: "Prefeitura Municipal de Governador Valadares",
        area: "5.769,14 m²",
        descricao:
          "Projeto de reforma e ampliação do aeroporto com novo terminal e infraestrutura operacional visando a melhoria do terminal passageiro. ",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_hagv/img01.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_hagv/img02.png"
        ]
      },
      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/img_gap/img01.jpg",
        nome: "Gabinete para Administração Pública",
        local: "Itabirito – MG",
        cliente: "Prefeitura Municipal de Itabirito",
        area: "1.052,10 m²",
        descricao:
          "Construção de um novo Centro Administrativo Municipal, composto por gabinete, salas de planejamento estratégico e espaços de apoio institucional, promovendo maior integração entre os órgãos públicos.",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_gap/img01.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_gap/img02.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_gap/img03.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_gap/img04.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_gap/img05.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_gap/img06.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_gap/img07.jpg"
        ]
      },

      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/img_cl/img01.png",
        nome: "Casa Lar",
        local: "Ponte Nova – MG",
        cliente: "Prefeitura Municipal de Ponte Nova",
        area: "336,00 m²",
        descricao:
          "Projeto de ponto de acolhimento institucional para crianças e adolescentes em situação de vulnerabilidade.",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cl/img01.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cl/img02.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cl/img03.png"
        ]
      },

      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/img_mbsbr/mercado_barra_são_francisco (1).jpg",
        nome: "Mercado Municipal",
        local: "Barra de São Francisco – ES",
        cliente: "Governo do Estado do Espírito Santo",
        area: "2.010,79 m²",
        descricao:
          "Reforma e modernização do Mercado Municipal, com preservação de seus elementos históricos e valorização do patrimônio cultural local",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_mbsbr/mercado_barra_são_francisco (1).jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_mbsbr/mercado_barra_são_francisco (2).jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_mbsbr/mercado_barra_são_francisco (3).jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_mbsbr/mercado_barra_são_francisco (4).jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_mbsbr/mercado_barra_são_francisco (5).jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_mbsbr/mercado_barra_são_francisco (6).jpg"
        ]
      },
      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/img_ecc/img01.png",
        nome: "Escola Estadual Clara Camarão",
        local: "Natal – RN",
        cliente: "Secretaria de Estado da Educação",
        area: "2.662,87 m²",
        descricao:
          "Construção de uma nova unidade escolar composta por quatro blocos funcionais e infraestrutura completa, proporcionando um ambiente adequado para o desenvolvimento das atividades educacionais.",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_ecc/img01.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_ecc/img02.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_ecc/img03.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_ecc/img04.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_ecc/img05.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_ecc/img06.png"
        ]
      },
      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/img_evm/img01.png",
        nome: "Escola Municipal Elvira Meale Lesqueves",
        local: "Itapemirim – ES",
        cliente: "Prefeitura Municipal de Itapemirim",
        area: "6.485,77 m²",
        descricao:
          "Reforma, ampliação e requalificação da unidade escolar, com adequação dos espaços físicos para atender às necessidades da comunidade educacional",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_evm/img01.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_evm/img02.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_evm/img03.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_evm/img04.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_evm/img05.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_evm/img06.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_evm/img07.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_evm/img08.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_evm/img09.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_evm/img10.png"
        ]
      },
      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/img_cbf/img01.jpg",
        nome: "Casarão Barra Feliz",
        local: "Santa Bárbara – MG",
        cliente: "Prefeitura Municipal de Santa Bárbara",
        area: "677,69 m²",
        descricao:
          "Projeto de restauro do Casarão Barra Feliz visando a preservação histórica da edificação e sua transformação no Museu do Ouro.",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cbf/img01.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cbf/img02.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cbf/img03.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cbf/img04.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cbf/img05.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cbf/img06.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cbf/img07.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cbf/img08.jpg",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cbf/img09.jpg",
        ]
      },
      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/img_cds/img01.png",
        nome: "Centro de Diálise",
        local: "Viana – ES",
        cliente: "Prefeitura Municipal de Viana",
        area: "5.616,04 m²",
        descricao:
          "Desenvolvimento do projeto arquitetônico de um Centro Regional de Diálise, estruturado para abrigar 192 estações de tratamento e atender à demanda regional por serviços especializados.",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cds/img01.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cds/img02.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cds/img03.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cds/img04.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cds/img05.png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/img_cds/img06.png"
        ]
      },

            {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/CENTRO DIA DO IDOSO/img (3).jpg",
        nome: "Centro dia do idoso",
        local: "Santa Teresa – ES",
        cliente: "Prefeitura Municipal de Santa Teresa",
        area: "627,13 m²",
        descricao:
        "O Projeto Arquitetônico do Centro Dia do Idoso estabelece a concepção e implantação de um novo complexo de convivência, estrategicamente planejado para acolher os idosos do município durante o período diurno. A proposta tem como objetivo oferecer uma infraestrutura adequada, segura e humanizada, contribuindo para a qualidade de vida dos idosos e para o apoio às suas famílias. O equipamento contempla ambientes destinados ao descanso, convivência, alimentação e cuidados com a saúde, promovendo bem-estar, integração social e assistência qualificada.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/edificacoes/CENTRO DIA DO IDOSO/img (1).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CENTRO DIA DO IDOSO/img (2).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CENTRO DIA DO IDOSO/img (3).jpg"
        ]
      },

      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/CRECHE FNDE TIPO I/img (2).jpg",
        nome: "Creche tipo I",
        local: "-",
        cliente: "Central das Creches do Brasil",
        area: "1.324,27 m²",
        descricao:
        "O Projeto Arquitetônico Padrão Creche Pré-Escola Tipo 1, integrante do Programa Proinfância por meio do Plano de Ações Articuladas — PAR, é destinado ao atendimento de crianças de 0 a 5 anos e 11 meses. A unidade possui capacidade para até 376 crianças em dois turnos, ou 188 crianças em período integral, considerando parâmetros pedagógicos, conforto ambiental e organização espacial, a fim de assegurar um ambiente adequado, saudável e seguro para o desenvolvimento infantil.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/edificacoes/CRECHE FNDE TIPO I/img (1).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CRECHE FNDE TIPO I/img (2).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CRECHE FNDE TIPO I/img (3).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CRECHE FNDE TIPO I/img (4).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CRECHE FNDE TIPO I/img (5).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CRECHE FNDE TIPO I/img (6).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CRECHE FNDE TIPO I/img (7).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CRECHE FNDE TIPO I/img (8).jpg"
        ]
      },

     {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/CRECHE FNDE TIPO II/img (1).jpg",
        nome: "Creche tipo II",
        local: "-",
        cliente: "Central das Creches do Brasil",
        area: "958,80 m²",
        descricao:
        "O Projeto Arquitetônico Padrão Creche Pré-Escola Tipo 2, desenvolvido para integrar o Programa Proinfância por meio do Plano de Ações Articuladas — PAR, destina-se ao atendimento de crianças na faixa etária de 0 a 5 anos e 11 meses. A unidade de educação infantil possui capacidade para atender até 188 crianças em dois turnos, matutino e vespertino, ou 94 crianças em período integral. O projeto considera parâmetros pedagógicos, condições de conforto ambiental e critérios de organização espacial, visando garantir um ambiente adequado, saudável e seguro para o desenvolvimento infantil.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/edificacoes/CRECHE FNDE TIPO II/img (1).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CRECHE FNDE TIPO II/img (2).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CRECHE FNDE TIPO II/img (3).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CRECHE FNDE TIPO II/img (4).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CRECHE FNDE TIPO II/img (5).jpg"
        ]
      },

      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/ESCOLA VILA FERNANDES/img (4).jpg",
        nome: "Escola Vila Fernandes",
        local: "Boa Esperança – ES",
        cliente: "Prefeitura Municipal de Boa Esperança",
        area: "3.025,90 m²",
        descricao:
        "O Projeto Arquitetônico da Escola Vila Fernandes teve como premissa a concepção de uma edificação em alvenaria estrutural, associada à otimização do uso de materiais e à racionalização do sistema construtivo. A proposta contempla a implantação de três edificações térreas, organizadas em bloco pedagógico, auditório e quadra poliesportiva. O bloco pedagógico é setorizado em áreas de ensino, administração e serviços, garantindo melhor organização funcional, eficiência dos fluxos e adequação às demandas da unidade escolar.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESCOLA VILA FERNANDES/img (1).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESCOLA VILA FERNANDES/img (2).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESCOLA VILA FERNANDES/img (3).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESCOLA VILA FERNANDES/img (4).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESCOLA VILA FERNANDES/img (5).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESCOLA VILA FERNANDES/img (6).jpg"
        ]
      },

      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/ESTACAO HONORIO BICALHO/img (2).jpg",
        nome: "Estação Honorio Bicalho",
        local: "Nova Lima – MG",
        cliente: "Prefeitura Municipal de Nova Lima",
        area: "2.539,53 m²",
        descricao:
        "O Projeto Arquitetônico da Estação Honório Bicalho prevê a construção de um Centro de Referência e Atendimento ao Turista (CRAT) e uma edificação de administração da Regional Nordeste de Nova Lima. A construção busca referenciar a memória da antiga estação de Honório Bicalho, e trazer uma releitura da arquitetura original, conciliando com materiais da atualidade para a criação de uma estação moderna, funcional, com novos espaços públicos para a população e, sobretudo, e preservando a identidade histórica.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESTACAO HONORIO BICALHO/img (1).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESTACAO HONORIO BICALHO/img (2).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESTACAO HONORIO BICALHO/img (3).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESTACAO HONORIO BICALHO/img (4).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESTACAO HONORIO BICALHO/img (5).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESTACAO HONORIO BICALHO/img (6).jpg"
        ]
      },

      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/MERCADO MUNICIPAL DE CONSOLACAO/img (1).jpg",
        nome: "Mercado Municipal de Consolação",
        local: "Consolação – MG",
        cliente: "Prefeitura Municipal de Consolação",
        area: "808,82 m²",
        descricao:
        "O Projeto Arquitetônico do Mercado Municipal de Consolação propõe a criação de um espaço voltado à comercialização de hortaliças, frutas, produtos regionais e lanches, por meio da implantação de quiosques organizados. O programa também contempla área de informação turística e espaço de convivência para apoio aos romeiros de Aparecida do Norte, fortalecendo o caráter público, turístico e comercial do equipamento.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/edificacoes/MERCADO MUNICIPAL DE CONSOLACAO/img (1).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/MERCADO MUNICIPAL DE CONSOLACAO/img (2).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/MERCADO MUNICIPAL DE CONSOLACAO/img (3).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/MERCADO MUNICIPAL DE CONSOLACAO/img (4).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/MERCADO MUNICIPAL DE CONSOLACAO/img (5).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/MERCADO MUNICIPAL DE CONSOLACAO/img (6).jpg"
        ]
      },

     {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (3).jpg",
        nome: "Parque de Exposições de João Monlevade",
        local: "João Monlevade – MG",
        cliente: "Prefeitura Municipal de João Monlevade",
        area: "81.119,10 m²",
        descricao:
        "O Projeto Arquitetônico do Parque de Exposições de João Monlevade propõe a criação de um equipamento público multifuncional, voltado à realização de eventos culturais, festas municipais, cavalgadas e atividades de lazer. A proposta contempla área de exposição com arena e arquibancada, infraestrutura de apoio para artistas, setor destinado ao manejo de animais, espaços de convivência e alimentação com food trucks, além de um parque urbano com anfiteatro, playground e áreas de permanência, ampliando as possibilidades de uso público e integração comunitária.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (1).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (2).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (3).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (4).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (5).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (6).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (4).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (5).jpg",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (6).jpg"
        ]
      },

      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/CANIL MUNICIPAL DE ANCHIETA/img (1).png",
        nome: "Canil Municipal de Anchieta",
        local: "Anchieta – ES",
        cliente: "Prefeitura Municipal de Anchieta",
        area: "Área: 887,95 m²",
        descricao:
        "Projeto de reforma e ampliação do Canil Municipal de Anchieta, contemplando clínica veterinária, centro cirúrgico, baias para cães e gatos, áreas de lazer e espaços de apoio à adoção responsável.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/edificacoes/CANIL MUNICIPAL DE ANCHIETA/img (1).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CANIL MUNICIPAL DE ANCHIETA/img (2).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CANIL MUNICIPAL DE ANCHIETA/img (3).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CANIL MUNICIPAL DE ANCHIETA/img (4).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CANIL MUNICIPAL DE ANCHIETA/img (5).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/CANIL MUNICIPAL DE ANCHIETA/img (6).png"
        ]
     },

     {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/ESCOLA ANEDINA BRETAS CORREA/img (1).png",
        nome: "Escola Municipal Anedina Bretas Correa",
        local: "Mantenópolis – ES",
        cliente: "Cliente: Prefeitura Municipal de Mantenópolis",
        area: "Área: 1.054,28 m²",
        descricao:
        "Projeto de reconstrução da Escola Municipal Anedina Bretas Correa, promovendo ambientes de aprendizagem, convivência e desenvolvimento infantil por meio de soluções arquitetônicas acolhedoras e lúdicas.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESCOLA ANEDINA BRETAS CORREA/img (1).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESCOLA ANEDINA BRETAS CORREA/img (2).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESCOLA ANEDINA BRETAS CORREA/img (3).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESCOLA ANEDINA BRETAS CORREA/img (4).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESCOLA ANEDINA BRETAS CORREA/img (5).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/ESCOLA ANEDINA BRETAS CORREA/img (6).png"
        ]
     },

     {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (1).png",
        nome: "Parque de Exposições de João Monlevade",
        local: "João Monlevade – MG",
        cliente: "Prefeitura Municipal de João Monlevade",
        area: "81.119,10 m²",
        descricao:
        "O Projeto Arquitetônico do Parque de Exposições de João Monlevade propõe a criação de um equipamento público multifuncional, voltado à realização de eventos culturais, festas municipais, cavalgadas e atividades de lazer. A proposta contempla área de exposição com arena e arquibancada, infraestrutura de apoio para artistas, setor destinado ao manejo de animais, espaços de convivência e alimentação com food trucks, além de um parque urbano com anfiteatro, playground e áreas de permanência, ampliando as possibilidades de uso público e integração comunitária.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (1).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (2).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (3).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (4).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (5).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (6).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (7).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (8).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE DE EXPOSIÇÕES DE JOÃO MONLEVADE/img (9).png"
        ]
     },
      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/CASA DE CULTURA DE GUARAPARI/img (5).png",
        nome: "Casa de Cultura de Guarapari",
        local: "Guarapari – ES",
        cliente: "Prefeitura Municipal de Guarapari",
        area: "472,56m²",
        descricao:
          "O projeto de restauro da Casa de Cultura de Guarapari propõe a recuperação, valorização e requalificação do imóvel, reconhecido por sua relevância na preservação e promoção do patrimônio histórico, artístico e cultural local. A intervenção busca conciliar a conservação das características arquitetônicas e dos valores culturais do edifício com a melhoria das condições de acessibilidade e oferta de novos ambientes de convivência e integração da comunidade.",
        imagens: [
          "assets/img/servicos/elaboracao-projetos/edificacoes/CASA DE CULTURA DE GUARAPARI/img (1).png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/CASA DE CULTURA DE GUARAPARI/img (2).png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/CASA DE CULTURA DE GUARAPARI/img (3).png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/CASA DE CULTURA DE GUARAPARI/img (4).png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/CASA DE CULTURA DE GUARAPARI/img (5).png",
          "assets/img/servicos/elaboracao-projetos/edificacoes/CASA DE CULTURA DE GUARAPARI/img (6).png"
        ]
      },
     {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/QUADRA NOVA SUÍÇA/img (1).png",
        nome: "Quadra Nova Suíça",
        local: "Cidade: Nova Lima – MG",
        cliente: "Prefeitura Municipal de Nova Lima",
        area: "1.113,84 m²",
        descricao:
        "O Projeto Arquitetônico da Quadra Nova Suíça contempla a implantação de uma quadra poliesportiva coberta, concebida a partir das condicionantes topográficas do terreno. A solução adotada organiza a edificação de forma escalonada, com o pavimento térreo destinado ao estacionamento, playground, área de convivência e lanchonete, enquanto o pavimento superior abriga a quadra, os vestiários e a arquibancada. Como elemento de destaque, a cobertura curva contribui para a integração da edificação com o entorno, conferindo maior qualidade arquitetônica ao conjunto e tornando o espaço mais atrativo e acolhedor aos usuários.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/edificacoes/QUADRA NOVA SUÍÇA/img (1).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/QUADRA NOVA SUÍÇA/img (2).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/QUADRA NOVA SUÍÇA/img (3).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/QUADRA NOVA SUÍÇA/img (4).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/QUADRA NOVA SUÍÇA/img (5).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/QUADRA NOVA SUÍÇA/img (6).png"
        ]
     },

     {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/SECRETÁRIA DE OBRAS DE NOVA LIMA/img (1).png",
        nome: "Secretaria de Obras de Nova Lima",
        local: "Nova Lima – MG",
        cliente: "Prefeitura Municipal de Nova Lima",
        area: "4.069,29 m²",
        descricao:
        "O Projeto Arquitetônico da Secretaria de Obras da Prefeitura de Nova Lima contempla a reforma e ampliação da edificação existente, propondo a reestruturação dos setores administrativos e das áreas de oficinas. A intervenção tem como objetivo qualificar os ambientes de trabalho, otimizar os fluxos operacionais e adequar a infraestrutura às demandas funcionais da Secretaria.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/edificacoes/SECRETÁRIA DE OBRAS DE NOVA LIMA/img (1).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/SECRETÁRIA DE OBRAS DE NOVA LIMA/img (2).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/SECRETÁRIA DE OBRAS DE NOVA LIMA/img (3).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/SECRETÁRIA DE OBRAS DE NOVA LIMA/img (4).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/SECRETÁRIA DE OBRAS DE NOVA LIMA/img (5).png",
        ]
     }


    ]
  },

infraestrutura: {
  titulo: "Infraestrutura",
  icone: "assets/img/Icones_Infraestrutura.png",
  descricao:
    "Soluções urbanas e viárias com planejamento, desempenho e visão integrada do território.",

  projetos: [
    {
      img: "assets/img/servicos/elaboracao-projetos/infraestrutura/TALUDE/TALUDE1.png",
      nome: "Estabilização de Taludes",
      local: "Nova Lima – MG",
      cliente: "Prefeitura Municipal de Nova Lima",
      area: "411,30 m",
      descricao:
        "Elaboração de projeto para estabilização de talude na Avenida do Contorno, contemplando soluções de engenharia como cortinas atirantadas, gabiões e solo grampeado, com foco na segurança viária e na preservação da infraestrutura urbana.",
      imagens: [
        "assets/img/servicos/elaboracao-projetos/infraestrutura/TALUDE/TALUDE1.png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/TALUDE/TALUDE2.png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/TALUDE/TALUDE3.png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/TALUDE/TALUDE4.png"
      ]
    },

    {
      img: "assets/img/servicos/elaboracao-projetos/infraestrutura/TRINCHEIRA VILA CASTELA/img01.png",
      nome: "Trincheira Vila Castela",
      local: "Nova Lima – MG",
      cliente: "Prefeitura Municipal de Nova Lima",
      area: "440,00 m²",
      descricao:
        "Desenvolvimento de projeto viário para a MG-30, incluindo obras de arte especiais, como trincheira e viaduto, visando otimizar a mobilidade, reduzir conflitos de tráfego e fortalecer a conectividade urbana.",
      imagens: [
        "assets/img/servicos/elaboracao-projetos/infraestrutura/TRINCHEIRA VILA CASTELA/img01.png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/TRINCHEIRA VILA CASTELA/img02.png"
      ]
    },

{
  img: "assets/img/servicos/elaboracao-projetos/infraestrutura/Acesso Cabanas/img01.png",
  nome: "Acesso Cabanas",
  local: "Mariana – MG",
  cliente: "Prefeitura Municipal de Mariana",
  area: "37.993,9 m²",
  descricao:
    "O projeto tem como objetivo melhorar a mobilidade e a integração entre a BR-356 e a área urbanizada do município de Mariana-MG, além de facilitar o acesso ao bairro Cabanas, proporcionando maior fluidez e segurança aos deslocamentos intramunicipais e intermunicipais.\n\nA solução proposta contempla intervenções de adequação geométrica, terraplenagem, pavimentação e implantação da sinalização viária, bem como a construção de duas obras de arte especiais do tipo viaduto e duas trincheiras, promovendo a segregação dos fluxos de tráfego e a eliminação de conflitos em nível.\n\nCom a implantação dessas melhorias, espera-se ampliar a capacidade operacional da via, reduzir os riscos de sinistros, aumentar a eficiência dos deslocamentos e oferecer melhores condições de acessibilidade e conectividade entre a rodovia e a malha urbana, contribuindo para o desenvolvimento da mobilidade e da segurança viária no município.",
  imagens: [
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Acesso Cabanas/img01.png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Acesso Cabanas/img02.png"
  ]
},

{
  img: "assets/img/servicos/elaboracao-projetos/infraestrutura/Balneário de Guriri/img01.png",
  nome: "Balneário de Guriri",
  local: "São Mateus – ES",
  cliente: "DER – ES",
  area: "215.303,85 m²",
  descricao:
    "O projeto das obras de macrodrenagem e pavimentação do Balneário de Guriri tem como objetivo eliminar os recorrentes alagamentos na região por meio da implantação de um sistema de drenagem de alta capacidade, promovendo o escoamento das águas pluviais e proporcionando melhorias na infraestrutura urbana, na mobilidade, na acessibilidade e na qualidade de vida da população.\n\nAs intervenções contemplam a implantação do sistema de macrodrenagem, composto por galerias celulares de concreto e uma estação de bombeamento responsável por conduzir as águas pluviais ao rio Mariricu. Complementarmente, o projeto prevê a implantação da microdrenagem, serviços de terraplenagem para conformação da plataforma e adequação das cotas das vias, adequações geométricas para melhoria das condições de circulação, execução de pavimentação em blocos intertravados de concreto sobre estrutura dimensionada para o tráfego previsto, implantação de meios-fios, calçadas com soluções de acessibilidade, além da sinalização horizontal e vertical, garantindo organização, orientação e segurança aos usuários da via.\n\nCom a execução dessas obras, espera-se eliminar a ocorrência de alagamentos na área atendida, restabelecer a funcionalidade do sistema viário, proporcionar maior durabilidade ao pavimento, melhorar as condições de circulação de veículos e pedestres e contribuir para o desenvolvimento urbano sustentável do Balneário de Guriri.",
  imagens: [
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Balneário de Guriri/img01.png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Balneário de Guriri/img02.png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Balneário de Guriri/img03.png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Balneário de Guriri/img04.png"
  ]
},

{
  img: "assets/img/servicos/elaboracao-projetos/infraestrutura/Jardim da Torre/img01.png",
  nome: "Via de Integração Metropolitana MG-030 / Jardim da Torre / Bellagio",
  local: "Nova Lima – MG",
  cliente: "Prefeitura Municipal de Nova Lima – MG",
  area: "81.877,14 m²",
  descricao:
    "O projeto da Via de Integração Metropolitana MG-030/Jardim da Torre/Bellagio tem como objetivo ampliar a conectividade entre a MG-030 e os empreendimentos e áreas urbanizadas adjacentes, promovendo maior integração viária e melhor distribuição dos fluxos de tráfego na região.\n\nAs intervenções propostas contemplam adequações geométricas, serviços de terraplenagem, pavimentação, drenagem e implantação da sinalização viária, visando proporcionar melhores condições de circulação para veículos e pedestres, além de otimizar os acessos existentes.\n\nCom a implantação dessas melhorias, espera-se aumentar a capacidade operacional do sistema viário, elevar os níveis de segurança dos usuários, reduzir conflitos nos pontos de acesso e contribuir para a mobilidade urbana e metropolitana, favorecendo a integração entre a rodovia, os empreendimentos lindeiros e a malha viária local.",
  imagens: [
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Jardim da Torre/img01.png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Jardim da Torre/img02.png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Jardim da Torre/img03.png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Jardim da Torre/img04.png"
  ]
},

{
  img: "assets/img/servicos/elaboracao-projetos/infraestrutura/Projeto Piloto BR-080/img01.png",
  nome: "Projeto Piloto BR-080",
  local: "Brasília – DF",
  cliente: "DNIT - Departamento Nacional de Infraestrutura de Transportes",
  area: "720.000 m²",
  descricao:
    "Acordo de Cooperação Técnica entre o Departamento Nacional de Infraestrutura de Transportes (DNIT) e VIAVOZ Projetos objetivou a contribuição para o desenvolvimento de diretrizes, processos, templates, materiais técnicos, modelo BIM de 24Km do Projeto Piloto BR-080 e aplicações práticas que apoiam a transformação digital dos projetos de infraestrutura, promovendo mais eficiência, padronização, rastreabilidade e qualidade na gestão da informação.\n\nAs áreas de conhecimento contemplaram soluções para projetos de infraestrutura rodoviária em BIM (Building Information Modeling), para Orçamento e Planejamento em BIM e para integração e trabalho colaborativo com tecnologia de Ambiente Comum de Dados (Common Data Environment – CDE). O objetivo dos produtos previstos no ACT foi a facilitação no desenvolvimento dos projetos básicos e executivos para a implantação, duplicação, restauração e melhoria de capacidade no âmbito da autarquia. Esses produtos visaram não apenas subsidiar a elaboração de anteprojetos que sirvam de base para as contratações, mas também apoiar a recepção e análise dos projetos contratados.\n\nAlém de promover uma melhoria direta na qualidade dos projetos, os entregáveis contribuíram para o avanço do conhecimento e da maturidade da autarquia por meio da utilização de produtos desenvolvidos em BIM. Esses recursos poderão ser apresentados em consultas, capacitações e outras ocasiões similares, estabelecendo um padrão de informações que atenda ao fluxo de trabalho e garanta a organização do projeto.",
  imagens: [
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Projeto Piloto BR-080/img01.png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Projeto Piloto BR-080/img02.png"
  ]
},

{
  img: "assets/img/servicos/elaboracao-projetos/infraestrutura/Ampliação do Presídio de Congonhas/img (2).png",
  nome: "Ampliação do Presídio de Congonhas",
  local: "Congonhas – MG",
  cliente: "Prefeitura Municipal de Congonhas",
  area: "9.927,26 m²",
  descricao:
    "O projeto de ampliação do Presídio de Congonhas, contempla a construção de duas novas edificações destinadas a aprimorar a infraestrutura de acesso e atendimento da unidade prisional, proporcionando melhores condições para a realização dos procedimentos de controle e segurança.\n\nDentre as soluções relacionadas à infraestrutura, foram desenvolvidos projetos de Terraplenagem para execução de platô na região do projeto de extensão da edificação, e de Sinalização para as vias do entorno, adequando o tráfego à área alterada, proporcionando melhorias na segurança e conforto aos ocupantes de veículos e pedestres.",
  imagens: [
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Ampliação do Presídio de Congonhas/img (1).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Ampliação do Presídio de Congonhas/img (2).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Ampliação do Presídio de Congonhas/img (3).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Ampliação do Presídio de Congonhas/img (4).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Ampliação do Presídio de Congonhas/img (5).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Ampliação do Presídio de Congonhas/img (6).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Ampliação do Presídio de Congonhas/img (7).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Ampliação do Presídio de Congonhas/img (8).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Ampliação do Presídio de Congonhas/img (9).png"
  ]
},

{
  img: "assets/img/servicos/elaboracao-projetos/infraestrutura/Lagoa de mae-ba/img (1).png",
  nome: "Estudo de Implantação de Área de Estacionamento da Lagoa de Mãe Bá",
  local: "Viana – ES",
  cliente: "Prefeitura Municipal de Anchieta",
  area: "2.029,64 m²",
  descricao:
    "O projeto de Estudo de Implantação de Área de Estacionamento da Lagoa de Mãe Bá, localizado no município de Anchieta/ES, tem como objetivo desenvolver uma solução de infraestrutura destinada ao ordenamento do estacionamento de veículos nas proximidades da praia, proporcionando maior segurança, organização e conforto aos usuários. O estudo está sendo elaborado em conjunto com o DER-ES, em conformidade com as diretrizes técnicas do órgão, buscando garantir uma implantação eficiente e compatível com as características da rodovia e da região.\n\nAs intervenções propostas contemplam o desenvolvimento de estudos para implantação de uma área de estacionamento destinada ao atendimento de visitantes, banhistas e usuários em trânsito pela região. O projeto compreende a definição da geometria do estacionamento, os estudos de terraplenagem, pavimentação, drenagem e sinalização horizontal e vertical, visando proporcionar uma infraestrutura segura, funcional e adequada às condições de operação, além de garantir o correto escoamento das águas pluviais e a durabilidade da estrutura projetada.\n\nCom a implantação das melhorias propostas, espera-se organizar o estacionamento de veículos, aumentar a capacidade de atendimento aos usuários, minimizar paradas irregulares às margens da rodovia, melhorar a segurança viária e proporcionar maior comodidade aos visitantes da Lagoa de Mãe Bá. A proposta busca contribuir para a valorização do potencial turístico da região, oferecendo uma infraestrutura planejada, segura e eficiente, promovendo melhores condições de mobilidade e de utilização do espaço público.",
  imagens: [
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Lagoa de mae-ba/img (1).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Lagoa de mae-ba/img (2).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Lagoa de mae-ba/img (3).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Lagoa de mae-ba/img (4).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Lagoa de mae-ba/img (5).png"
  ]
},



{
  img: "assets/img/servicos/elaboracao-projetos/infraestrutura/Farmácia de Minas - São Benedito/LOCALIZAÇÃO.png",
  nome: "Farmácia de Minas - São Benedito",
  local: "Santa Luzia – MG",
  cliente: "Prefeitura de Santa Luzia",
  area: "340,25 m²",
  descricao:
    "Projeto de terraplenagem desenvolvido no Autodesk Civil 3D para a implantação da unidade da Farmácia de Minas – São Benedito, contemplando a definição da área de implantação da edificação, acessos de veículos e pedestres, canteiros, estruturas de contenção e conformação de taludes. O desenvolvimento priorizou a precisão técnica, a otimização da movimentação de terra, a funcionalidade dos espaços e a compatibilização do projeto com as características do terreno, resultando em uma solução eficiente, segura e alinhada às diretrizes de requalificação urbana da área.\n\n",
  imagens: [
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Farmácia de Minas - São Benedito/LOCALIZAÇÃO.png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Farmácia de Minas - São Benedito/img (1).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Farmácia de Minas - São Benedito/img (2).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Farmácia de Minas - São Benedito/img (3).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Farmácia de Minas - São Benedito/img (4).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Farmácia de Minas - São Benedito/img (5).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Farmácia de Minas - São Benedito/img (6).png"
  ]
},

{
  img: "assets/img/servicos/elaboracao-projetos/infraestrutura/Jardim Guarapari/img (1).png",
  nome: "Jardim Guarapari",
  local: "Guarapari – ES",
  cliente: "Prefeitura Municipal de Guarapari",
  area: "13.254,700 m²",
  descricao:
    "A implantação do projeto tem como objetivo proporcionar condições adequadas e permanentes de acesso às residências, melhorar a mobilidade urbana e garantir uma ligação mais segura e eficiente entre o bairro e a rodovia existente. As intervenções previstas contribuirão para a regularização do greide das vias, correção de desníveis, melhoria das condições de drenagem superficial e implantação de uma estrutura de pavimento compatível com as características do terreno e com o tráfego estimado.\n\nDessa forma, o projeto apresenta relevante interesse público e social, uma vez que promoverá a melhoria da infraestrutura urbana, a integração do bairro à malha viária municipal e à rodovia, a redução dos custos de manutenção das vias e dos veículos, bem como a valorização dos imóveis, reestabelecimento do sistema viário local com sinalização horizontal e vertical, proporcionando maior qualidade de vida à população.",
  imagens: [
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Jardim Guarapari/img (1).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Jardim Guarapari/img (2).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Jardim Guarapari/img (3).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Jardim Guarapari/img (4).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Jardim Guarapari/img (5).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Jardim Guarapari/img (6).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Jardim Guarapari/img (7).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Jardim Guarapari/img (8).png",
    "assets/img/servicos/elaboracao-projetos/infraestrutura/Jardim Guarapari/img (9).png"
  ]
},

      {
        img: "assets/img/servicos/elaboracao-projetos/infraestrutura/Loteamento Morro do Pilar/img (4).png",
        nome: "Loteamento Morro do Pilar",
        local: "Morro do Pilar – MG",
        cliente: "Prefeitura do Morro do Pilar",
        area: "",
        descricao:
        "O projeto do loteamento tem como objetivo viabilizar a implantação de lotes destinados à construção de unidades habitacionais no âmbito do programa Minha Casa, Minha Vida, contribuindo para a ampliação da oferta de moradias dignas e promovendo melhores condições de vida para a população do município.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Loteamento Morro do Pilar/img (1).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Loteamento Morro do Pilar/img (2).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Loteamento Morro do Pilar/img (3).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Loteamento Morro do Pilar/img (4).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Loteamento Morro do Pilar/img (5).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Loteamento Morro do Pilar/img (6).png"
        ]
      },

      {
        img: "assets/img/servicos/elaboracao-projetos/infraestrutura/Pavimentação Bairro Pequeri/img (1).png",
        nome: "Pavimentação do Bairro Pequeri",
        local: "Congonhas – MG",
        cliente: "Prefeitura Municipal de Congonhas",
        area: "23.733,97 m²",
        descricao:
        "O projeto de Pavimentação do Bairro Pequeri, localizado no município de Congonhas/MG, tem como objetivo promover a melhoria da infraestrutura viária de uma via rural, proporcionando melhores condições de trafegabilidade, segurança e conforto aos usuários. O desenvolvimento do projeto foi realizado em conformidade com as recomendações e diretrizes técnicas do DER-MG, buscando garantir uma solução eficiente, durável e compatível com as características da região.\n\nAs intervenções propostas contemplam a adequação geométrica da via, serviços de terraplenagem, implantação da estrutura de pavimentação, sistema de drenagem superficial e profunda, além da implantação da sinalização viária horizontal e vertical. O conjunto dessas soluções visa proporcionar maior estabilidade da plataforma, melhor escoamento das águas pluviais, aumento da segurança operacional e redução dos custos de manutenção da via ao longo de sua vida útil.\n\nCom a implantação das melhorias previstas, espera-se elevar o nível de serviço da via, proporcionando maior acessibilidade às propriedades rurais e comunidades locais, favorecendo o transporte de pessoas e mercadorias, reduzindo os impactos causados pelas condições climáticas e contribuindo para o desenvolvimento econômico e social da região, por meio da modernização da infraestrutura viária municipal.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Pavimentação Bairro Pequeri/img (1).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Pavimentação Bairro Pequeri/img (2).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Pavimentação Bairro Pequeri/img (3).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Pavimentação Bairro Pequeri/img (4).png"
        ]
      },

      {
        img: "assets/img/servicos/elaboracao-projetos/infraestrutura/Pelotão corpo de bombeiros/img (1).png",
        nome: "Pelotão do Corpo de Bombeiros Militar",
        local: "Mariana – MG",
        cliente: "Prefeitura Municipal de Mariana",
        area: "1.971,88 m²",
        descricao:
        "Elaboração do projeto de terraplenagem para a implantação do Pelotão do Corpo de Bombeiros Militar no município de Mariana – MG.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Pelotão corpo de bombeiros/img (1).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Pelotão corpo de bombeiros/img (2).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Pelotão corpo de bombeiros/img (3).png"
        ]
      },

      {
        img: "assets/img/servicos/elaboracao-projetos/infraestrutura/Ponte fazenda caixa d'água/img (2).png",
        nome: "Ponte Fazenda Caixa D'Água",
        local: "Mimoso do Sul – ES",
        cliente: "Prefeitura Municipal de Mimoso do Sul",
        area: "",
        descricao:
        "O projeto da ponte teve como objetivo facilitar o trafego de pessoas e veículos nas comunidades ao redor.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Ponte fazenda caixa d'água/img (1).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Ponte fazenda caixa d'água/img (2).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Ponte fazenda caixa d'água/img (3).png"
        ]
      },

      {
        img: "assets/img/servicos/elaboracao-projetos/infraestrutura/Praca da Biquinha/img (1).png",
        nome: "Praça da Biquinha",
        local: "Viana – ES",
        cliente: "Prefeitura Municipal de Viana",
        area: "2.749,57 m²",
        descricao:
        "Os Projetos de  geometria, terraplenagem e pavimentação desenvolvidos no Autodesk Civil 3D para a implantação da Praça da Biquinha, contemplando a criação de áreas de convivência, estacionamento e espaço destinado a restaurante. A modelagem foi elaborada a partir do terreno natural, utilizando as ferramentas Feature Lines e Corridor para definir a geometria do projeto, conformação da superfície, acessos e adequação à topografia existente. O desenvolvimento priorizou a precisão técnica, a funcionalidade dos espaços e a compatibilização do projeto com as condições do terreno, proporcionando uma solução eficiente para a requalificação urbana da área.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Praca da Biquinha/img (1).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Praca da Biquinha/img (2).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Praca da Biquinha/img (3).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Praca da Biquinha/img (4).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Praca da Biquinha/img (5).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Praca da Biquinha/img (6).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Praca da Biquinha/img (7).png",
        "assets/img/servicos/elaboracao-projetos/infraestrutura/Praca da Biquinha/img (8).png",
        ]
      }

  ]
},

  saneamento: {
  titulo: "Saneamento",
  icone: "assets/img/Icones_Saneamento.png",
  descricao:
    "Planejamento e desenvolvimento de sistemas com segurança operacional e conformidade normativa.",

  projetos: [

    {
      img: "assets/img/servicos/elaboracao-projetos/saneamento/img_eta/img01.png",
      nome: "Estação de Tratamento de Água (ETA)",
      local: "Itabirito – MG",
      cliente: "SAAE Itabirito",
      dadoTecnico: "Vazão: 100 L/s",
      descricao:
        "Projeto de ampliação do sistema de abastecimento de água de Itabirito, abrangendo as etapas de captação, pré-tratamento, Estação de Tratamento de Água (ETA), Unidade de Tratamento de Resíduos (UTR), Estação Elevatória de Água Tratada (EEAT), reservatórios e adutoras.",
      imagens: [
        "assets/img/servicos/elaboracao-projetos/saneamento/img_eta/img01.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_eta/img02.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_eta/img03.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_eta/img04.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_eta/img05.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_eta/img06.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_eta/img07.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_eta/img08.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_eta/img09.png"
      ]
    },

    {
      img: "assets/img/servicos/elaboracao-projetos/saneamento/img_ete/img01.png",
      nome: "Estação de Tratamento de Esgotos (ETE)",
      local: "Mariana – MG",
      cliente: "SAAE Mariana",
      dadoTecnico: "Qmáx 245,49 L/s",
      descricao:
        "Projeto de sistema completo de tratamento de esgoto, abrangendo todas as etapas do tratamento, do nível preliminar ao terciário, incluindo reatores UASB, filtros biológicos, estações elevatórias e desinfecção por radiação ultravioleta (UV).",
      imagens: [
        "assets/img/servicos/elaboracao-projetos/saneamento/img_ete/img01.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_ete/img02.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_ete/img03.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_ete/img04.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_ete/img05.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_ete/img06.png"
      ]
    },

    {
      img: "assets/img/servicos/elaboracao-projetos/saneamento/img_cjg/img03.png",
      nome: "Canal Jabaraí",
      local: "Guarapari – ES",
      cliente: "Prefeitura Municipal de Guarapari",
      dadoTecnico: "Q Canal: 42,79m³/s; – Q EBAP: 10m³/s",
      descricao:
        "Projeto de canalização e drenagem urbana, contemplando a implantação de Estação de Bombeamento de Águas Pluviais (EBAP), comportas automatizadas, motobombas e parque linear integrado, com foco na mitigação de alagamentos e na qualificação do espaço urbano.",
      imagens: [
        "assets/img/servicos/elaboracao-projetos/saneamento/img_cjg/img01.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_cjg/img02.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_cjg/img03.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_cjg/img04.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_cjg/img05.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_cjg/img06.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_cjg/img07.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_cjg/img08.png"
      ]
    },

    {
      img: "assets/img/servicos/elaboracao-projetos/saneamento/img_pcg/img07.png",
      nome: "Portal Clube",
      local: "Guarapari – ES",
      cliente: "Prefeitura Municipal de Guarapari",
      dadoTecnico: "Vazão: 36,55 m³/s",
      descricao:
        "Projeto de drenagem urbana e canalização pluvial, associado à implantação de parque linear com áreas de convivência, lazer e acessibilidade, visando melhorar a infraestrutura urbana e a qualidade de vida da população.",
      imagens: [
        "assets/img/servicos/elaboracao-projetos/saneamento/img_pcg/img01.jpg",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_pcg/img02.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_pcg/img03.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_pcg/img04.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_pcg/img05.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_pcg/img06.png",
        "assets/img/servicos/elaboracao-projetos/saneamento/img_pcg/img07.png"
      ]
    },

{
  img: "assets/img/servicos/elaboracao-projetos/saneamento/01-SES CARRAPATOS (ESGOTO)/01.jpg",
  nome: "SES Carrapatos",
  local: "Nova Lima – MG",
  cliente: "Prefeitura Municipal de Nova Lima",
  dadoTecnico: "46 L/s",
  descricao: "O projeto executivo elaborado para a Prefeitura de Nova Lima/MG, visa implantar e complementar o Sistema de Esgotamento Sanitário da Sub Bacia Rego dos Carrapatos através do modelo separador absoluto, eliminando o lançamento de efluentes brutos nos cursos d'água locais para beneficiar uma população projetada de 15.890 habitantes até o ano de 2039. A infraestrutura abrange uma área de 335,67 ha dividida em 14 sub-bacias, prevendo a execução de 16.464 metros de redes coletoras de PVC e a manutenção de interceptores estratégicos. Para otimizar o transporte do esgoto sem a necessidade de desapropriações, o sistema substituiu o modelo tradicional de elevatórias por cinco estações elevatórias tipo booster em vias públicas e duas elevatórias finais em linha, responsáveis por bombear as vazões de projeto (que atingirão uma vazão máxima final de 46,00 l/s) até o tratamento preliminar da ETE Carrapatos.",
  imagens: [
    "assets/img/servicos/elaboracao-projetos/saneamento/01-SES CARRAPATOS (ESGOTO)/01.jpg",
    "assets/img/servicos/elaboracao-projetos/saneamento/01-SES CARRAPATOS (ESGOTO)/02.jpg",
    "assets/img/servicos/elaboracao-projetos/saneamento/01-SES CARRAPATOS (ESGOTO)/02-1.png",
    "assets/img/servicos/elaboracao-projetos/saneamento/01-SES CARRAPATOS (ESGOTO)/03.jpg"
  ]
},

{
  img: "assets/img/servicos/elaboracao-projetos/saneamento/02-PASSOS (ETA)/01.png",
  nome: "ETA Antônio Passos",
  local: "Passos – MG",
  cliente: "SAAE Passos",
  dadoTecnico: "400 L/s",
  descricao: "O Projeto Executivo de Ampliação e Melhorias na ETA Antônio Porto, em Passos/MG, prevê o aumento da capacidade de vazão máxima de 240 l/s para 400 l/s para garantir o suprimento contínuo de água nos próximos 20 anos, mantendo a estação em funcionamento durante as obras. As intervenções incluem a otimização de estruturas existentes de concreto armado através do alteamento de bordas na calha Parshall e nos floculadores hidráulicos, além da conversão dos decantadores convencionais para o modelo de alta taxa com módulos tubulares e da modernização dos filtros com blocos em PEAD. Adicionalmente, será implantada uma Unidade de Tratamento de Resíduos (UTR) equipada com raspadores mecanizados de lodo, tanques de equalização e adensamento, elevatórias e um sistema de desidratação mecânica por centrífuga, o que viabilizará o descarte adequado da torta de lodo seca e a recirculação de até 10% da água de lavagem dos filtros diretamente no início do processo de tratamento.",
  imagens: [
    "assets/img/servicos/elaboracao-projetos/saneamento/02-PASSOS (ETA)/01.png",
    "assets/img/servicos/elaboracao-projetos/saneamento/02-PASSOS (ETA)/02.jpg",
    "assets/img/servicos/elaboracao-projetos/saneamento/02-PASSOS (ETA)/03.jpg",
    "assets/img/servicos/elaboracao-projetos/saneamento/02-PASSOS (ETA)/04.jpg",
    "assets/img/servicos/elaboracao-projetos/saneamento/02-PASSOS (ETA)/05.jpg",
    "assets/img/servicos/elaboracao-projetos/saneamento/02-PASSOS (ETA)/06.jpg"
  ]
},

{
  img: "assets/img/servicos/elaboracao-projetos/saneamento/03-PASSOS (CAPTAÇÃO E ADUÇÃO)/01.jpg",
  nome: "SAA Passos",
  local: "Passos – MG",
  cliente: "SAAE Passos",
  dadoTecnico: "200 L/s",
  descricao: "O projeto consiste na ampliação do sistema de captação e adução de água bruta do Rio Grande para o município de Passos/MG, visando suprir a redução de vazão enfrentada pelo manancial Ribeirão Bocaina em períodos de estiagem e garantir o abastecimento futuro das ETAs Antônio Porto (ETA 01) e Otaliro da Silveira (ETA 02), com vazões ampliadas para 400 l/s e 240 l/s, respectivamente. A infraestrutura projetada para aduzir uma vazão de 200 l/s é composta por uma captação flutuante (EAB1A) dotada de duas moto-balsas de 100 cv, com capacidade total de 720 m³/h, interligada por uma adutora de ferro fundido DN 450, com 728 m de extensão, à elevatória principal (EEAB3), equipada com três conjuntos moto-bombas de 400 cv em regime 2+1. A partir dessa estação, a água é recalcada por uma adutora DN 450 com 6.536 m até um tanque de transição localizado junto à ETA 02, seguindo por gravidade através de uma adutora DN 450 de 3.720 m até uma estação elevatória do tipo Booster, equipada com três bombas de 150 cv, que finaliza o percurso conduzindo o fluxo por um trecho adutor DN 450 com extensão de 1.844 m.",
  imagens: [
    "assets/img/servicos/elaboracao-projetos/saneamento/03-PASSOS (CAPTAÇÃO E ADUÇÃO)/00.png",
    "assets/img/servicos/elaboracao-projetos/saneamento/03-PASSOS (CAPTAÇÃO E ADUÇÃO)/01.jpg",
    "assets/img/servicos/elaboracao-projetos/saneamento/03-PASSOS (CAPTAÇÃO E ADUÇÃO)/02.jpg",
    "assets/img/servicos/elaboracao-projetos/saneamento/03-PASSOS (CAPTAÇÃO E ADUÇÃO)/03.png",
    "assets/img/servicos/elaboracao-projetos/saneamento/03-PASSOS (CAPTAÇÃO E ADUÇÃO)/04.png"
  ]
},

{
  img: "assets/img/servicos/elaboracao-projetos/saneamento/04-MARILÂNDIA (ETA)/image (5).png",
  nome: "ETA Marilândia",
  local: "Marilândia – ES",
  cliente: "SAAE Marilândia",
  dadoTecnico: "30 L/s",
  descricao: "O projeto consiste na reforma e ampliação do Sistema de Abastecimento de Água de Marilândia, no Espírito Santo, com o objetivo de aumentar a capacidade máxima de tratamento de 20 L/s para 30 L/s. Visando o aproveitamento máximo e a otimização das estruturas convencionais já existentes, o empreendimento prevê a implantação de novos módulos e unidades operacionais, destacando-se uma nova Estação de Tratamento de Água pré-moldada com vazão nominal de 10 L/s, uma Calha Parshall de 9 com caixa divisora de vazão, uma Estação Elevatória de Água Tratada (EEAT), um novo reservatório apoiado com capacidade de 500 m³, além de uma sala elétrica, uma casa de analisadores e uma Unidade de Tratamento de Resíduos (UTR).",
  imagens: [
    "assets/img/servicos/elaboracao-projetos/saneamento/04-MARILÂNDIA (ETA)/image (5).png",
    "assets/img/servicos/elaboracao-projetos/saneamento/04-MARILÂNDIA (ETA)/image (6).png",
    "assets/img/servicos/elaboracao-projetos/saneamento/04-MARILÂNDIA (ETA)/image (7).png",
    "assets/img/servicos/elaboracao-projetos/saneamento/04-MARILÂNDIA (ETA)/image (8).png",
    "assets/img/servicos/elaboracao-projetos/saneamento/04-MARILÂNDIA (ETA)/image (9).png",
    "assets/img/servicos/elaboracao-projetos/saneamento/04-MARILÂNDIA (ETA)/image (10).png"
  ]
}

  ],

  subcategorias: [
    {
      titulo: "Drenagem",
      projetos: [
        {
          img: "assets/img/servicos/elaboracao-projetos/saneamento/VERTEDOR RIO MUQUI DO SUL/img (3).png",
          nome: "Canal Extravasor do Rio Muqui do Sul",
          local: "Mimoso do Sul – ES",
          cliente: "Prefeitura Municipal de Mimoso do Sul",
          dadoTecnico: "Comprimento: 270,0m",
          descricao:
            "O projeto contempla a implantação de um canal extravasor no Rio Muqui do Sul, no município de Mimoso do Sul/ES, com o objetivo de ampliar a capacidade de escoamento no trecho de intervenção e contribuir para a redução dos impactos provocados pelas enchentes na região.\n\nForam desenvolvidos estudos hidrológicos da bacia hidrográfica, além de modelagens hidrodinâmicas dos cenários anterior e posterior à intervenção, permitindo avaliar o comportamento do rio e a eficiência da solução proposta durante eventos de cheia.\n\nO canal possui 270 metros de extensão e foi projetado com seção trapezoidal, base inferior de 15 metros, largura superior de 30 metros e altura de 3 metros. O escopo também incluiu os projetos de terraplenagem e contenção necessários à implantação da estrutura.",
          imagens: [
            "assets/img/servicos/elaboracao-projetos/saneamento/VERTEDOR RIO MUQUI DO SUL/RAS Mapper 2026-07-17 15-44-26.mp4",
            "assets/img/servicos/elaboracao-projetos/saneamento/VERTEDOR RIO MUQUI DO SUL/img (1).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/VERTEDOR RIO MUQUI DO SUL/img (2).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/VERTEDOR RIO MUQUI DO SUL/img (3).png"
          ]
        },

        {
          img: "assets/img/servicos/elaboracao-projetos/saneamento/Portal Clube - GuarapariES/img (1).png",
          nome: "Drenagem Portal Clube",
          local: "Guarapari – ES",
          cliente: "Prefeitura Municipal de Guarapari",
          dadoTecnico: "Extensão: 3,57 Km",
          descricao:
            "O presente projeto de drenagem pluvial foi elaborado em conformidade com as normas técnicas vigentes, visando à adequação e modernização do sistema de drenagem do bairro, em função da implantação das obras de infraestrutura urbana. O projeto contempla o dimensionamento das estruturas necessárias para garantir o adequado manejo e escoamento das águas pluviais, proporcionando maior eficiência ao sistema e contribuindo para a segurança e funcionalidade da infraestrutura local.",
          imagens: [
            "assets/img/servicos/elaboracao-projetos/saneamento/Portal Clube - GuarapariES/img (1).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Portal Clube - GuarapariES/img (2).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Portal Clube - GuarapariES/img (3).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Portal Clube - GuarapariES/img (4).png"
          ]
        },

        {
          img: "assets/img/servicos/elaboracao-projetos/saneamento/GURIRI/img (1).png",
          nome: "Sistema de Macrodrenagem do Balneário de Guriri",
          local: "São Mateus – ES",
          cliente: "DER-ES",
          dadoTecnico: "9392,8 metros de galerias de concreto e 150.652,30 m2 de pavimentação e calçadas.",
          descricao:
            "O projeto contempla a implantação de um amplo sistema de macrodrenagem no Balneário de Guriri, composto por mais de 9 quilômetros de galerias celulares interligadas a uma Estação de Bombeamento de Águas Pluviais – EBAP.\n\nA solução foi desenvolvida para proporcionar uma destinação adequada às águas pluviais do distrito, que sofre frequentemente com alagamentos em razão da ausência de talvegues naturais para escoamento e da baixa capacidade de infiltração do solo.\n\nAlém das galerias pluviais e da estação de bombeamento, o projeto incluiu a reurbanização de todo o trecho afetado pelas intervenções, abrangendo os projetos geométrico, de terraplenagem, pavimentação, sinalização e urbanização.",
          imagens: [
            "assets/img/servicos/elaboracao-projetos/saneamento/GURIRI/img (1).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/GURIRI/img (2).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/GURIRI/img (3).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/GURIRI/img (4).png"
          ]
        },

        {
          img: "assets/img/servicos/elaboracao-projetos/saneamento/CANAL DA LINHA FÉRREA-VIANA/img (1).png",
          nome: "Canal da Linha Férrea",
          local: "Viana – ES",
          cliente: "Prefeitura Municipal de Viana",
          dadoTecnico: "4,2 Km",
          descricao:
            "O projeto do Canal da Linha Férrea, em Viana/ES, foi desenvolvido para captar e conduzir as águas pluviais provenientes do Bairro Universal, contribuindo para a redução dos alagamentos nas áreas urbanas do município.\n\nA intervenção contempla mais de 4 quilômetros de canalização, incluindo a conformação de taludes em córregos naturais, implantação de tunnel liner, galerias celulares e impermeabilização de trechos de canais existentes.\n\nA solução integra o Plano de Macrodrenagem de Viana, estruturado para ampliar a capacidade de escoamento e minimizar os impactos das enchentes. Além das obras de drenagem, foram elaborados os projetos de terraplenagem e urbanização do entorno.",
          imagens: [
            "assets/img/servicos/elaboracao-projetos/saneamento/CANAL DA LINHA FÉRREA-VIANA/img (1).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/CANAL DA LINHA FÉRREA-VIANA/img (2).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/CANAL DA LINHA FÉRREA-VIANA/img (3).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/CANAL DA LINHA FÉRREA-VIANA/img (4).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/CANAL DA LINHA FÉRREA-VIANA/img (5).png"
          ]
        },

        {
          img: "assets/img/servicos/elaboracao-projetos/saneamento/Bairro Santa Vitoria - CongonhasMG/img (1).png",
          nome: "Bairro Santa Vitória",
          local: "Congonhas – MG",
          cliente: "Prefeitura Municipal de Congonhas",
          dadoTecnico: "7,86 Km",
          descricao:
            "O presente projeto de drenagem pluvial foi elaborado em conformidade com as normas técnicas vigentes, com o objetivo de garantir o adequado manejo e escoamento das águas pluviais na área de implantação do loteamento. Considerando a execução da infraestrutura urbana do empreendimento, o projeto foi desenvolvido de forma integrada às demais disciplinas de engenharia, assegurando a compatibilização das soluções adotadas e o atendimento aos requisitos técnicos e operacionais necessários ao seu correto funcionamento.",
          imagens: [
            "assets/img/servicos/elaboracao-projetos/saneamento/Bairro Santa Vitoria - CongonhasMG/img (1).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Bairro Santa Vitoria - CongonhasMG/img (2).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Bairro Santa Vitoria - CongonhasMG/img (3).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Bairro Santa Vitoria - CongonhasMG/img (4).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Bairro Santa Vitoria - CongonhasMG/img (5).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Bairro Santa Vitoria - CongonhasMG/img (6).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Bairro Santa Vitoria - CongonhasMG/img (7).png"
          ]
        },

        {
          img: "assets/img/servicos/elaboracao-projetos/saneamento/Bairro Jardim Profeta - CongonhasMG/img (1).png",
          nome: "Bairro Jardim Profeta",
          local: "Congonhas – MG",
          cliente: "Prefeitura Municipal de Congonhas",
          dadoTecnico: "7,02 Km",
          descricao:
            "O presente projeto de drenagem pluvial foi desenvolvido em conformidade com as normas técnicas vigentes, com a finalidade de promover a adequação do sistema de drenagem da área de intervenção. Para isso, foi prevista a reestruturação da rede de drenagem existente, bem como o dimensionamento de novas soluções, visando garantir o adequado manejo e escoamento das águas pluviais, atendendo às necessidades do bairro e aos requisitos técnicos e operacionais aplicáveis.",
          imagens: [
            "assets/img/servicos/elaboracao-projetos/saneamento/Bairro Jardim Profeta - CongonhasMG/img (1).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Bairro Jardim Profeta - CongonhasMG/img (2).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Bairro Jardim Profeta - CongonhasMG/img (3).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Bairro Jardim Profeta - CongonhasMG/img (4).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Bairro Jardim Profeta - CongonhasMG/img (5).png"
          ]
        },

        {
          img: "assets/img/servicos/elaboracao-projetos/saneamento/AREINHAS/img (1).png",
          nome: "Bairro Jardim Profeta",
          local: "Congonhas – MG",
          cliente: "Prefeitura Municipal de Congonhas",
          dadoTecnico: "7,02 Km",
          descricao:
            "O presente projeto de drenagem pluvial foi desenvolvido em conformidade com as normas técnicas vigentes, com a finalidade de promover a adequação do sistema de drenagem da área de intervenção. Para isso, foi prevista a reestruturação da rede de drenagem existente, bem como o dimensionamento de novas soluções, visando garantir o adequado manejo e escoamento das águas pluviais, atendendo às necessidades do bairro e aos requisitos técnicos e operacionais aplicáveis.",
          imagens: [
            "assets/img/servicos/elaboracao-projetos/saneamento/AREINHAS/img (1).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/AREINHAS/img (2).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/AREINHAS/img (3).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/AREINHAS/img (4).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/AREINHAS/img (5).png"
          ]
        },

        {
          img: "assets/img/servicos/elaboracao-projetos/saneamento/Adalberto Simão Nader - GuarapariES/img (1).png",
          nome: "Adalberto Simão Nader",
          local: "Guarapari – ES",
          cliente: "Prefeitura Municipal de Guarapari",
          dadoTecnico: "3,18 Km",
          descricao:
            "O presente projeto contempla, de forma geral, as principais estruturas que compõem o sistema de drenagem pluvial, com destaque para as galerias e os poços de ataque, elementos essenciais para a implantação e operação da rede. Essas estruturas foram previstas em conformidade com as normas técnicas aplicáveis, contribuindo para a execução das obras e para o adequado funcionamento do sistema de drenagem, de modo a assegurar a condução eficiente das águas pluviais e a integração com a infraestrutura urbana.",
          imagens: [
            "assets/img/servicos/elaboracao-projetos/saneamento/Adalberto Simão Nader - GuarapariES/img (1).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Adalberto Simão Nader - GuarapariES/img (2).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Adalberto Simão Nader - GuarapariES/img (3).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Adalberto Simão Nader - GuarapariES/img (4).png",
            "assets/img/servicos/elaboracao-projetos/saneamento/Adalberto Simão Nader - GuarapariES/img (5).png"
          ]
        }
      ]
    }
  ]
},

  urbanismo: {
  titulo: "Urbanismo",
  icone: "assets/img/Icones_Urbanismo.png",
  descricao:
    "Intervenções urbanas com foco em mobilidade, paisagismo, acessibilidade e sustentabilidade.",

  projetos: [

    {
      img: "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/img (1).png",
      nome: "Píer de Meaípe",
      local: "Meaípe – ES",
      cliente: "Prefeitura Municipal de Meaípe",
      area: "3.639,407 m²",
      descricao:
        "Projeto urbano do píer de Meaípe, concebido para conectar a orla ao enroncamento e atracadouro, integrando mobilidade, contemplação e áreas de permanência em um novo espaço público à beira-mar.",
      imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/VIDEO APRESENTAÇÃO_ PÍER MEAÍPE.mp4",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/img (1).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/img (2).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/img (3).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/img (4).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/img (5).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/img (6).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/img (7).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/img (8).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/img (9).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/img (10).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/img (11).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/img (12).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/img (13).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PÍER DE MEAÍPE/img (14).png"
      ]
    },

    {
      img: "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE FUNDÃO/img11.jpg",
      nome: "Parque da Cidade de Fundão",
      local: "Fundão – ES",
      cliente: "Prefeitura Municipal de Fundão",
      area: "19.598,12 m²",
      descricao:
        "Projeto de parque urbano multifuncional, contemplando galpão para eventos, praça da ciência, ciclovia, pista de caminhada, infraestrutura sustentável e áreas destinadas à convivência e ao lazer da população.",
      imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE FUNDÃO/img01.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE FUNDÃO/img02.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE FUNDÃO/img03.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE FUNDÃO/img04.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE FUNDÃO/img05.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE FUNDÃO/img06.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE FUNDÃO/img07.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE FUNDÃO/img08.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE FUNDÃO/img09.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE FUNDÃO/img10.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE FUNDÃO/img11.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE FUNDÃO/img12.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE FUNDÃO/img13.jpg"
      ]
    },

    {
      img: "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA PRAIA GRANDE/img02.jpg",
      nome: "Orla de Praia Grande",
      local: "Fundão – ES",
      cliente: "DER – ES",
      area: "154.644,09 m²",
      descricao:
        "Projeto urbanístico de requalificação da orla, contemplando ações de recuperação ambiental, implantação de ciclovia, mobiliário urbano e infraestrutura turística sustentável, com foco na valorização do espaço público.",
      imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA PRAIA GRANDE/img01.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA PRAIA GRANDE/img02.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA PRAIA GRANDE/img03.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA PRAIA GRANDE/img04.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA PRAIA GRANDE/img05.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA PRAIA GRANDE/img06.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA PRAIA GRANDE/img07.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA PRAIA GRANDE/img08.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA PRAIA GRANDE/img09.jpg"
      ]
    },

      {
        img: "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE LINEAR ITAOCA/img (3).png",
        nome: "Parque Linear de Itapemirim",
        local: "Itapemirim – ES ",
        cliente: "Prefeitura Municipal de Itapemirim ",
        area: "2.640,95 m²",
        descricao:
        "Projeto de parque linear voltado ao lazer, esporte e convivência, combinando infraestrutura esportiva, paisagismo e iluminação para valorizar a paisagem natural e fortalecer o uso do espaço público em Itapemirim.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE LINEAR ITAOCA/img (1).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE LINEAR ITAOCA/img (2).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE LINEAR ITAOCA/img (3).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE LINEAR ITAOCA/img (4).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE LINEAR ITAOCA/img (5).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE LINEAR ITAOCA/img (6).png",       
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE LINEAR ITAOCA/img (7).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE LINEAR ITAOCA/img (8).png",
        "assets/img/servicos/elaboracao-projetos/edificacoes/PARQUE LINEAR ITAOCA/img (9).png"
        ]
      },

    {
      img: "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA BARBOSA/img01.jpg",
      nome: "Praça Prefeito Antônio Carlos Barbosa",
      local: "São Pedro da União – MG",
      cliente: "Prefeitura Municipal de São Pedro da União",
      area: "5.369,32 m²",
      descricao:
        "Projeto de revitalização integral da praça, contemplando novo paisagismo, sistema de iluminação em LED, mobiliário urbano moderno e adequações de acessibilidade.",
      imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA BARBOSA/img01.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA BARBOSA/img02.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA BARBOSA/img03.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA BARBOSA/img04.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA BARBOSA/img05.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA BARBOSA/img06.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA BARBOSA/img07.jpg"
      ]
    },

    {
      img: "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA NOROESTE/img07.jpg",
      nome: "Orla Noroeste",
      local: "Vitória – ES",
      cliente: "Contractor",
      area: "43.485,03 m²",
      descricao:
        "Projeto de requalificação urbana contemplando guarderia, áreas de permanência, arquibancadas, decks, estacionamento, campo society e equipamentos de lazer, com foco na valorização e dinamização do espaço público.",
      imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA NOROESTE/img01.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA NOROESTE/img02.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA NOROESTE/img03.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA NOROESTE/img04.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA NOROESTE/img05.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA NOROESTE/img06.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA NOROESTE/img07.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA NOROESTE/img08.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA NOROESTE/img09.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA NOROESTE/img10.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA NOROESTE/img11.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA NOROESTE/img12.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA NOROESTE/img13.jpg"
      ]
    },

    {
      img: "assets/img/servicos/elaboracao-projetos/urbanismo/TELEFERICO DA PEDRA DO CRUZEIRO/img01.png",
      nome: "Teleférico do Cruzeiro de Alto Liberdade",
      local: "Marilândia – ES",
      cliente: "Prefeitura Municipal de Marilândia",
      area: "909,715 m²",
      descricao:
        "O projeto arquitetônico do Teleférico, localizado na comunidade de Alto Liberdade, em Marilândia/ES, se refere a implantação de uma nova infraestrutura turística em um local de grande relevância histórica, cultural e religiosa para o município. Reconhecida como o ponto inicial da colonização de Marilândia, a Pedra do Cruzeiro constitui um dos principais patrimônios turísticos e símbolos da identidade local. Com o objetivo de ampliar o acesso, valorizar o patrimônio existente e impulsionar o turismo, o projeto conta com um teleférico moderno, que facilita o deslocamento dos visitantes até o topo da Pedra do Cruzeiro.\n\nAlém do sistema de transporte por cabos, o empreendimento contempla a implantação de toda a infraestrutura de apoio ao visitante, composta por estação inferior, estação superior, áreas de recepção, espaços de convivência, circulação acessível, paisagismo, estacionamentos e equipamentos de apoio, proporcionando uma experiência turística completa, segura e integrada ao ambiente natural da Pedra do Cruzeiro.\n\nA proposta democratiza o acesso ao local, tornando-o mais inclusivo e atrativo para todos, independentemente da idade ou mobilidade. A concepção arquitetônica incorporou referências do estilo italiano, presente na caracterização histórica e cultural da região, o que promove integração estética com o entorno e reforça a identidade visual do conjunto. Como parte da experiência do visitante, o projeto possui um restaurante de estilo italiano, localizado no nível do hall de acesso da base do teleférico.",

      imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/TELEFERICO DA PEDRA DO CRUZEIRO/img01.png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/TELEFERICO DA PEDRA DO CRUZEIRO/img02.png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/TELEFERICO DA PEDRA DO CRUZEIRO/img03.png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/TELEFERICO DA PEDRA DO CRUZEIRO/img04.png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/TELEFERICO DA PEDRA DO CRUZEIRO/img05.png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/TELEFERICO DA PEDRA DO CRUZEIRO/img06.png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/TELEFERICO DA PEDRA DO CRUZEIRO/img07.png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/TELEFERICO DA PEDRA DO CRUZEIRO/img08.png"
      ]
    },

    {
      img: "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE PORTAL CLUBE/img (10).png",
      nome: "Parque Portal Clube",
      local: "Guarapari – ES",
      cliente: "Prefeitura Municipal de Guarapari",
      area: "3.913,39 m²",
      descricao:
        "O projeto urbanístico do Parque Portal Clube foi concebido com o objetivo de promover a requalificação do espaço público, proporcionando mais qualidade de vida à população por meio da implantação de áreas destinadas ao esporte, ao lazer e à convivência comunitária.\n\nA proposta contempla a implantação de uma quadra poliesportiva, Academia da Cidade, playground infantil e áreas de estar e convivência, distribuídas de forma a atender diferentes faixas etárias e estimular a integração social. Além de qualificar o espaço urbano, o Parque Portal Clube consolida-se como um importante equipamento público de uso coletivo incentivando hábitos saudáveis e fortalecendo o sentimento de pertencimento e apropriação do espaço público pela população.",

      imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE PORTAL CLUBE/img (1).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE PORTAL CLUBE/img (2).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE PORTAL CLUBE/img (3).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE PORTAL CLUBE/img (4).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE PORTAL CLUBE/img (5).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE PORTAL CLUBE/img (6).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE PORTAL CLUBE/img (7).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE PORTAL CLUBE/img (8).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE PORTAL CLUBE/img (9).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE PORTAL CLUBE/img (10).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE PORTAL CLUBE/img (11).png"
      ]
    },

    {
      img: "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA DA ESTAÇÃO/img (2).png",
      nome: "Praça da Estação",
      local: "Mimoso do Sul – ES",
      cliente: "Prefeitura Municipal de Mimoso do Sul",
      area: "9.743,20 m²",
      descricao:
        "O projeto urbanístico do Parque Portal Clube foi concebido com o objetivo de promover a requalificação do espaço público, proporcionando mais qualidade de vida à população por meio da implantação de áreas destinadas ao esporte, ao lazer e à convivência comunitária.\n\nA proposta contempla a implantação de uma quadra poliesportiva, Academia da Cidade, playground infantil e áreas de estar e convivência, distribuídas de forma a atender diferentes faixas etárias e estimular a integração social. Além de qualificar o espaço urbano, o Parque Portal Clube consolida-se como um importante equipamento público de uso coletivo incentivando hábitos saudáveis e fortalecendo o sentimento de pertencimento e apropriação do espaço público pela população.",

      imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA DA ESTAÇÃO/img (1).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA DA ESTAÇÃO/img (2).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA DA ESTAÇÃO/img (3).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA DA ESTAÇÃO/img (4).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA DA ESTAÇÃO/img (5).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA DA ESTAÇÃO/img (6).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA DA ESTAÇÃO/img (7).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA DA ESTAÇÃO/img (8).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA DA ESTAÇÃO/img (9).png"
      ]
    },

    {
      img: "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA JOSÉ COIMBRA DE RESENDE/img (9).png",
      nome: "Praça José Coimbra de Resende",
      local: "Mimoso do Sul – ES",
      cliente: "Prefeitura Municipal de Mimoso do Sul",
      area: "11.050,013 m²",
      descricao:
        "O projeto teve como objetivo a reconstrução da Praça José Coimbra de Resende restaurando sua função como espaço público de lazer, convivência e integração social. A proposta contempla a implantação de playground infantil, quadra poliesportiva, guarita policial, áreas cívicas integradas por um projeto paisagístico que valoriza o ambiente e proporciona maior conforto aos usuários. As intervenções foram concebidas para oferecer um espaço seguro, funcional e acessível, garantindo condições adequadas de uso por toda a população e promovendo a requalificação urbana da área.",

      imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA JOSÉ COIMBRA DE RESENDE/img (1).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA JOSÉ COIMBRA DE RESENDE/img (2).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA JOSÉ COIMBRA DE RESENDE/img (3).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA JOSÉ COIMBRA DE RESENDE/img (4).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA JOSÉ COIMBRA DE RESENDE/img (5).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA JOSÉ COIMBRA DE RESENDE/img (6).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA JOSÉ COIMBRA DE RESENDE/img (7).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA JOSÉ COIMBRA DE RESENDE/img (8).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA JOSÉ COIMBRA DE RESENDE/img (9).png"
      ]
    },

    {
      img: "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA LAGO JESUS CRISTO/img (2).png",
      nome: "Praça Lagoa Jesus Cristo",
      local: "Barra de São Francisco – ES",
      cliente: "Prefeitura Municipal de Barra de São Francisco",
      area: "26.026,57 m²",
      descricao:
        "A Construção da Praça Lago Jesus Cristo propõe a implantação de um novo espaço público de lazer, convivência e contemplação. O programa contempla playground, academia da cidade, quadra poliesportiva, quadra de areia, pista de skate, ciclovia além de áreas cívicas e jardins.",

      imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA LAGO JESUS CRISTO/img (1).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA LAGO JESUS CRISTO/img (2).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA LAGO JESUS CRISTO/img (3).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA LAGO JESUS CRISTO/img (4).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA LAGO JESUS CRISTO/img (5).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA LAGO JESUS CRISTO/img (6).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA LAGO JESUS CRISTO/img (7).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA LAGO JESUS CRISTO/img (8).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA LAGO JESUS CRISTO/img (9).png"
      ]
    },

    {
      img: "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA MARIA REGINA DELATORRE LEITE/img (8).png",
      nome: "Praça Maria Regina Delatorre Leite",
      local: "Guarapari – ES",
      cliente: "Prefeitura Municipal de Guarapari",
      area: "1.413,20 m²",
      descricao:
        "O projeto urbanístico da Praça Maria Regina Delatorre Leite tem como objetivo promover a revitalização e a requalificação do espaço público, proporcionando um ambiente mais seguro, acessível e atrativo para a população. A proposta foi desenvolvida em conformidade com os princípios de acessibilidade, conforto e valorização da paisagem urbana, buscando ampliar as possibilidades de uso e permanência no local.",

      imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA MARIA REGINA DELATORRE LEITE/img (1).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA MARIA REGINA DELATORRE LEITE/img (2).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA MARIA REGINA DELATORRE LEITE/img (3).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA MARIA REGINA DELATORRE LEITE/img (4).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA MARIA REGINA DELATORRE LEITE/img (5).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA MARIA REGINA DELATORRE LEITE/img (6).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA MARIA REGINA DELATORRE LEITE/img (7).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA MARIA REGINA DELATORRE LEITE/img (8).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA MARIA REGINA DELATORRE LEITE/img (9).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA MARIA REGINA DELATORRE LEITE/img (10).png"
      ]
    },

    {
      img: "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE LINEAR ITAOCA/img (4).png",
      nome: "Parque Linear de Itaoca",
      local: "Itapemirim – ES",
      cliente: "Prefeitura Municipal de Itapemirim",
      area: "2.640,95 m²",
      descricao:
        "Projeto de parque linear voltado ao lazer, esporte e convivência, combinando infraestrutura esportiva, paisagismo e iluminação para valorizar a paisagem natural e fortalecer o uso do espaço público em Itapemirim.",

      imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE LINEAR ITAOCA/img (1).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE LINEAR ITAOCA/img (2).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE LINEAR ITAOCA/img (3).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE LINEAR ITAOCA/img (4).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE LINEAR ITAOCA/img (5).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE LINEAR ITAOCA/img (6).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE LINEAR ITAOCA/img (7).png",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PARQUE LINEAR ITAOCA/img (8).png"
      ]
    },

      {
        img: "assets/img/servicos/elaboracao-projetos/urbanismo/img_stb/ORLA DE SETIBA_1 - Photo.jpg",
        nome: "Orla de Setiba",
        local: "Guarapari – ES",
        cliente: "Prefeitura Municipal de Guarapari",
        area: "",
        descricao:
        "Projeto de requalificação da Orla de Setiba, contemplando infraestrutura urbana, paisagismo, acessibilidade, áreas de convivência e valorização do espaço público.",
        imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/img_stb/ORLA DE SETIBA_1 - Photo.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/img_stb/ORLA DE SETIBA_7 - Foto.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/img_stb/ORLA DE SETIBA_21 - Foto.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/img_stb/ORLA DE SETIBA_25 - Foto.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/img_stb/ORLA DE SETIBA_27 - Foto.jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/img_stb/ORLA DE SETIBA_30 - Foto.jpg"
        ]
      },

        {
      img: "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA CAMBURI/img (2).jpg",
      nome: "Orla Camburi",
      local: "Vitória – ES",
      cliente: "Contractor",
      area: "32.000,00 m²",
      descricao:
        "O projeto de reurbanização da 1ª etapa do Canal de Camburi visa requalificar os espaços públicos presentes na área de intervenção, bem como, contribuir para o estreitamento da relação homem/água, juntamente com a execução de decks, arquibancada e áreas para convivência ao longo do Canal Santa Maria. O projeto ainda prevê a implantação de edificações comerciais, mobiliário urbano, pergolados e uma passarela para travessia de ciclistas e pedestres, interligando os dois lados do Canal.",
      imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA CAMBURI/img (1).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA CAMBURI/img (2).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA CAMBURI/img (3).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA CAMBURI/img (4).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA CAMBURI/img (5).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA CAMBURI/img (6).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/ORLA CAMBURI/img (7).jpg"
      ]
    },

    {
      img: "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA VILA DA SERRA/img (1).jpg",
      nome: "Praça Vila da Serra",
      local: "Nova Lima – MG",
      cliente: "Prefeitura Municipal de Nova Lima",
      area: "4.413,91 m²",
      descricao:
        "O Projeto Urbano da Praça Vila da Serra propõe a implantação de um novo espaço público de lazer, convivência e contemplação em um vazio urbano estratégico, responsável por conectar duas ruas situadas em cotas distintas. A intervenção integra o Circuito das Águas e fortalece a conexão entre os espaços urbanos e a paisagem natural. A proposta busca valorizar a harmonia entre natureza e cidade, oferecendo infraestrutura diversificada para diferentes faixas etárias e usos. O programa contempla playground, pista de skate, container de apoio para hidratação e lanches, academia de crossfit, mirante com espelho d’água, além de áreas de permanência, convívio e descanso.",
      imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA VILA DA SERRA/img (1).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA VILA DA SERRA/img (2).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA VILA DA SERRA/img (3).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA VILA DA SERRA/img (4).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA VILA DA SERRA/img (5).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/PRAÇA VILA DA SERRA/img (6).jpg"
      ]
    },

        {
      img: "assets/img/servicos/elaboracao-projetos/urbanismo/RUAS 07 DE SETEMBRO, GAMA ROSA E ENTORNO/img (4).jpg",
      nome: "Ruas 07 de setembro, Gama rosa e entorno",
      local: "Vitória – ES",
      cliente: "Consórcio Monjardim Exata Vitória",
      area: "17.588,73 m²",
      descricao:
        "O Projeto Urbanístico prevê a revitalização e requalificação das ruas Sete de Setembro, Gama Rosa e entorno, com o objetivo de valorizar e potencializar a área histórica do Centro de Vitória, considerando seu patrimônio histórico, cultural e paisagístico. A proposta contempla a reforma da Praça Ubaldo Ramalhete Maia, com inserção de novo mobiliário urbano, playground e academia da cidade; a requalificação do piso da Rua Sete de Setembro, com implantação de mobiliário urbano e jardineiras; além de intervenções na sinalização viária, incluindo a implantação de faixas elevadas e a criação de áreas destinadas a estacionamento.",
      imagens: [
        "assets/img/servicos/elaboracao-projetos/urbanismo/RUAS 07 DE SETEMBRO, GAMA ROSA E ENTORNO/img (1).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/RUAS 07 DE SETEMBRO, GAMA ROSA E ENTORNO/img (2).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/RUAS 07 DE SETEMBRO, GAMA ROSA E ENTORNO/img (3).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/RUAS 07 DE SETEMBRO, GAMA ROSA E ENTORNO/img (4).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/RUAS 07 DE SETEMBRO, GAMA ROSA E ENTORNO/img (5).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/RUAS 07 DE SETEMBRO, GAMA ROSA E ENTORNO/img (6).jpg",
        "assets/img/servicos/elaboracao-projetos/urbanismo/RUAS 07 DE SETEMBRO, GAMA ROSA E ENTORNO/img (7).jpg"
      ]
    }
  ]
},

  regularizacao: {
  titulo: "Regularização Fundiária",
  icone: "assets/img/Icones_Mobilizacoes.png",
  descricao:
    "Soluções para regularização fundiária, gestão territorial e desenvolvimento urbano sustentável.",

  projetos: [
    {
      img: "assets/img/servicos/reurb/REURB AREINHA/img (1).png",
      nome: "REURB – Areinha",
      local: "Viana – ES",
      cliente: "Prefeitura Municipal de Viana",
      area: "417.683,90m²",
      descricao:
        "Projeto de Regularização Fundiária no Núcleo Urbano Areinha, com um total de 750 unidades.",
      imagens: [
        "assets/img/servicos/reurb/REURB AREINHA/img (1).png",
        "assets/img/servicos/reurb/REURB AREINHA/img (2).png",
        "assets/img/servicos/reurb/REURB AREINHA/img (3).png"
      ]
    },

    {
      img: "assets/img/servicos/reurb/REURB ARMBH/img (1).png",
      nome: "REURB – Industrial Americano e Abobreira",
      local: "Santa Luzia e Taquaraçu de Minas",
      cliente: "Agência de Desenvolvimento da Região Metropolitana de Belo Horizonte",
      area: "-",
      descricao:
        "Projeto de Regularização Fundiária nos Núcleos Urbanos: Industrial Americano, em Santa Luzia e Abobreira em Taquaraçu de Minas, com um total de 500 unidades.",
      imagens: [
        "assets/img/servicos/reurb/REURB ARMBH/img (1).png",
        "assets/img/servicos/reurb/REURB ARMBH/img (2).png",
        "assets/img/servicos/reurb/REURB ARMBH/img (3).png",
        "assets/img/servicos/reurb/REURB ARMBH/img (4).png"
      ]
    },

    {
      img: "assets/img/servicos/reurb/REURB GOVERNADOR LINDENBERG/img (1).png",
      nome: "REURB – Governador Lindenberg",
      local: "Governador Lindenberg",
      cliente: "Prefeitura Municipal de Governador Lindenberg",
      area: "-",
      descricao:
        "Projeto de Regularização Fundiária em 6 Núcleos Urbanos (Boa Vista, Morada do Sol, Sabino Galter, São Francisco, Sol Poente e Vista Linda), com um total de 440 unidades.",
      imagens: [
        "assets/img/servicos/reurb/REURB GOVERNADOR LINDENBERG/img (1).png",
        "assets/img/servicos/reurb/REURB GOVERNADOR LINDENBERG/img (2).png",
        "assets/img/servicos/reurb/REURB GOVERNADOR LINDENBERG/img (3).png",
        "assets/img/servicos/reurb/REURB GOVERNADOR LINDENBERG/img (4).png"
      ]
    },

    {
      img: "assets/img/servicos/reurb/REURB ITABIRA/img (1).png",
      nome: "REURB – Itabira",
      local: "Itabira – MG",
      cliente: "Prefeitura Municipal de Itabira",
      area: "-",
      descricao:
        "Projeto de Regularização Fundiária em 10 Núcleos Urbanos (Cohapi, Pedreira, Pedreira 7, Pedreira 8), com um total de XX unidades.",
      imagens: [
        "assets/img/servicos/reurb/REURB ITABIRA/img (1).png",
        "assets/img/servicos/reurb/REURB ITABIRA/img (2).png"
      ]
    },

    {
      img: "assets/img/servicos/reurb/REURB NOVA LIMA/img (1).png",
      nome: "REURB – Nova Lima",
      local: "Nova Lima – MG",
      cliente: "Prefeitura Municipal de Nova Lima",
      area: "49.935,27 m²",
      descricao:
        "Projeto de Regularização Fundiária no Núcleo Urbano Vila Nova Betânia, com um total de 58 unidades.",
      imagens: [
        "assets/img/servicos/reurb/REURB NOVA LIMA/img (1).png"
      ]
    },

    {
      img: "assets/img/servicos/reurb/REURB SANTA LUZIA/img (1).png",
      nome: "REURB – Santa Luzia",
      local: "Santa Luzia – MG",
      cliente: "Prefeitura Municipal de Santa Luzia",
      area: "-",
      descricao:
        "Projeto de Regularização Fundiária em 5 Núcleos Urbanos (Casa Branca, Conquistinha, Ocupação Vitória, Vila dos Dragões e Vila Ferraz), com um total de 619 unidades.",
      imagens: [
        "assets/img/servicos/reurb/REURB SANTA LUZIA/img (1).png",
        "assets/img/servicos/reurb/REURB SANTA LUZIA/img (2).png",
        "assets/img/servicos/reurb/REURB SANTA LUZIA/img (3).png",
        "assets/img/servicos/reurb/REURB SANTA LUZIA/img (4).png",
        "assets/img/servicos/reurb/REURB SANTA LUZIA/img (5).png",
        "assets/img/servicos/reurb/REURB SANTA LUZIA/img (6).png",
        "assets/img/servicos/reurb/REURB SANTA LUZIA/img (7).png",
        "assets/img/servicos/reurb/REURB SANTA LUZIA/img (8).png",
        "assets/img/servicos/reurb/REURB SANTA LUZIA/img (9).png"
      ]
    }
  ],

subcategorias: [
  {
    titulo: "Licenciamento Ambiental",
    projetos: [
{
  img: "assets/img/servicos/meio-ambiente/TUNNEL LINER/img (1).png",
  nome: "Tunnel Liner",
  local: "Viana – ES",
  cliente: "Prefeitura Municipal de Viana",
  dadoTecnico: "Ano: 2024",

  contexto:
    "Integrante do conjunto de intervenções estruturais voltadas à melhoria da drenagem urbana do Município de Viana, o projeto do Tunnel Liner foi concebido para ampliar a capacidade de escoamento das águas pluviais e contribuir para a redução dos impactos causados por alagamentos em áreas urbanizadas. A solução proposta busca aumentar a eficiência do sistema de drenagem, promovendo maior segurança para a população e maior resiliência da infraestrutura urbana frente a eventos de chuvas intensas.",

  metodologia:
    "Para subsidiar o processo de licenciamento ambiental do empreendimento, foram elaborados o Relatório de Controle Ambiental e o Plano de Controle Ambiental — RCA/PCA, além do Plano de Gerenciamento de Resíduos da Construção Civil — PGRCC. Os estudos contemplaram a caracterização ambiental da área de influência, a avaliação dos impactos associados à implantação das obras, a definição de medidas de controle ambiental e o estabelecimento de diretrizes para o manejo, transporte e destinação ambientalmente adequada dos resíduos gerados durante a execução do projeto.",

  resultados:
    "As análises realizadas permitiram estabelecer diretrizes para a gestão dos impactos ambientais e para o gerenciamento adequado dos resíduos da construção civil, assegurando o atendimento aos requisitos legais aplicáveis ao empreendimento. Os produtos elaborados forneceram suporte técnico ao processo de licenciamento ambiental, contribuindo para a implantação segura de uma obra estratégica para a melhoria da drenagem urbana e para a redução dos riscos de alagamentos no município.",

  status: "Concluído.",

  imagens: [
    "assets/img/servicos/meio-ambiente/TUNNEL LINER/img (1).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/RIOS ARIBIRI MARINHO E CANAL DIAGONAL/img (1).png",
  nome: "Impermeabilização dos Rios Aribiri, Marinho e Canal Diagonal",
  local: "Vila Velha e Cariacica – ES",
  cliente: "",
  dadoTecnico: "Ano: 2025",

  contexto:
    "Empreendimento estratégico de macrodrenagem urbana voltado à mitigação de alagamentos e inundações recorrentes nos municípios de Vila Velha e Cariacica. O projeto contemplou a impermeabilização de rios e canais, a implantação de estruturas de drenagem e a urbanização de áreas adjacentes, promovendo maior segurança hídrica, mobilidade urbana e qualidade de vida para a população.",

  metodologia:
    "A VIAVOZ, por meio de equipe multidisciplinar, desenvolveu os estudos ambientais necessários ao licenciamento do empreendimento. Os estudos incluíram o Relatório de Controle Ambiental — RCA, o Plano de Controle Ambiental — PCA, o Projeto de Recuperação de Áreas Degradadas — PRAD e o Projeto de Trabalho Técnico Socioambiental — PTTS. Os trabalhos envolveram diagnósticos ambientais dos meios físico, biótico e socioeconômico, levantamentos de campo, avaliação de impactos ambientais, definição de medidas mitigadoras e elaboração de programas voltados à recuperação ambiental e ao relacionamento com as comunidades diretamente beneficiadas.",

  resultados:
    "Os estudos forneceram suporte técnico ao processo de licenciamento ambiental do empreendimento, identificando riscos, restrições e medidas necessárias para a gestão dos impactos ambientais e sociais associados à intervenção. As recomendações elaboradas contribuíram para o atendimento aos requisitos legais, a prevenção de passivos ambientais, o fortalecimento do relacionamento com as comunidades envolvidas e a ampliação da segurança técnica e socioambiental do projeto.",

  status: "Concluído.",

  imagens: [
    "assets/img/servicos/meio-ambiente/RIOS ARIBIRI MARINHO E CANAL DIAGONAL/img (1).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/CANAL JABARAI/img (1).png",
  nome: "Canal Jabaraí, EBAP e Parque Linear",
  local: "Guarapari – ES",
  cliente: "Prefeitura Municipal de Guarapari",
  dadoTecnico: "Ano: 2025 | Canal: aproximadamente 1,2 km",

  contexto:
    "O projeto do Canal Jabaraí, no Município de Guarapari, integra soluções de macrodrenagem e requalificação urbana destinadas a aumentar a resiliência da cidade frente aos eventos de inundação. O empreendimento contempla a impermeabilização de aproximadamente 1,2 km do canal, a implantação de uma Estação de Bombeamento de Águas Pluviais — EBAP, comportas de controle e um parque linear com ciclovia e áreas de lazer, promovendo maior segurança hidráulica e requalificação urbana para os bairros Jardim Santa Rosa, Jabaraí e Perocão.",

  metodologia:
    "A VIAVOZ conduziu os estudos necessários ao licenciamento ambiental do empreendimento, abrangendo a elaboração do Relatório Técnico Ambiental Prévio — RETAP, do Plano de Controle Ambiental — PCA, do PCA de Terraplenagem e do Plano de Gerenciamento de Resíduos da Construção Civil — PGRCC. O trabalho reuniu levantamentos de campo, diagnóstico dos meios físico, biótico e socioeconômico, avaliação dos impactos e definição de medidas de controle e programas ambientais adequados às diferentes etapas do projeto.",

  resultados:
    "Os estudos estruturaram as diretrizes ambientais para a implantação do empreendimento e forneceram suporte técnico ao licenciamento e ao planejamento das obras, contribuindo para o atendimento às exigências legais e para a redução dos riscos ambientais e sociais associados à intervenção.",

  status: "Concluído.",

  imagens: [
    "assets/img/servicos/meio-ambiente/CANAL JABARAI/img (1).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/DIQUE VILA NOVA/img (1).png",
  nome: "Alteamento do Dique do Bairro Vila Nova",
  local: "Itapemirim – ES",
  cliente: "Prefeitura Municipal de Itapemirim",
  dadoTecnico: "Ano: 2025",

  contexto:
    "Inserido em uma região historicamente suscetível a eventos de inundação, o projeto do Dique Vila Nova foi concebido para ampliar a proteção das áreas urbanizadas adjacentes ao Canal Muqui do Norte, contribuindo para a redução dos riscos associados às cheias e para o aumento da segurança da população local. A intervenção integra ações estruturais de drenagem e controle hidráulico voltadas à melhoria da resiliência urbana e à mitigação dos impactos causados por eventos hidrológicos extremos.",

  metodologia:
    "Para subsidiar o processo de licenciamento ambiental do empreendimento, foram elaborados o Plano de Controle Ambiental — PCA, o Plano de Gerenciamento de Resíduos Sólidos — PGRS e o Plano de Atendimento a Emergências Ambientais — PAE. Os estudos contemplaram a caracterização ambiental da área de influência, a avaliação dos impactos associados às obras, a definição de medidas de controle e monitoramento ambiental e o estabelecimento de procedimentos para gerenciamento de resíduos e resposta a situações emergenciais durante a implantação do empreendimento.",

  resultados:
    "As análises desenvolvidas permitiram estabelecer diretrizes para a gestão dos impactos ambientais decorrentes das obras, fortalecer os mecanismos de prevenção e resposta a emergências ambientais e garantir a adequada gestão dos resíduos gerados durante a implantação. Os estudos forneceram suporte técnico ao processo de licenciamento ambiental, contribuindo para a execução segura de uma intervenção estratégica para o controle de cheias e para a proteção da população local.",

  status: "Concluído.",

  imagens: [
    "assets/img/servicos/meio-ambiente/DIQUE VILA NOVA/img (1).png",
    "assets/img/servicos/meio-ambiente/DIQUE VILA NOVA/img (2).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/DESASSOREAMENTO RIO PRETO/img (1).png",
  nome: "Desassoreamento do Rio Preto",
  local: "Dores do Rio Preto – ES",
  cliente: "Prefeitura Municipal de Dores do Rio Preto",
  dadoTecnico: "Ano: 2025",

  contexto:
    "O projeto de desassoreamento do Rio Preto foi concebido para restaurar a capacidade hidráulica do principal curso d’água que atravessa o Município de Dores do Rio Preto, buscando minimizar os problemas associados ao acúmulo de sedimentos na calha do rio e reduzir os riscos de alagamentos, erosão das margens e prejuízos à infraestrutura urbana.",

  metodologia:
    "A avaliação do empreendimento foi realizada por meio da elaboração de Estudo Ambiental, contemplando o diagnóstico dos meios físico, biótico e socioeconômico, a caracterização das condições atuais do Rio Preto e a identificação dos potenciais impactos associados às atividades de desassoreamento. Os trabalhos envolveram levantamentos de dados ambientais, análises territoriais e definição de medidas voltadas à mitigação e ao controle dos impactos decorrentes da intervenção.",

  resultados:
    "O estudo forneceu subsídios técnicos ao processo de licenciamento ambiental do empreendimento, identificando condicionantes, restrições e medidas necessárias à execução segura das intervenções propostas.",

  status: "Concluído.",

  imagens: [
    "assets/img/servicos/meio-ambiente/DESASSOREAMENTO RIO PRETO/img (1).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/RESERVATORIO CANAA/img (1).png",
  nome: "Reservatório de Amortecimento de Cheias Bairro Canaã",
  local: "Viana – ES",
  cliente: "Prefeitura Municipal de Viana",
  dadoTecnico: "Ano: 2026",

  contexto:
    "Desenvolvido para mitigar os recorrentes problemas de alagamentos e inundações no Município de Viana, o Reservatório de Amortecimento de Cheias Bairro Canaã constitui uma importante obra de drenagem urbana voltada ao controle das vazões pluviais e à redução dos riscos hidrológicos na região. O empreendimento integra as ações de adaptação e resiliência urbana do município, contribuindo para a proteção da população, da infraestrutura urbana e da bacia hidrográfica do Córrego da Ribeira.",

  metodologia:
    "Os estudos foram desenvolvidos com base em levantamentos de campo, caracterização dos meios físico, biótico e socioeconômico, delimitação das áreas de influência e avaliação dos impactos ambientais associados à implantação e operação do empreendimento. A atuação contemplou a elaboração do Estudo Ambiental e do Plano de Gerenciamento de Resíduos da Construção Civil — PGRCC, incluindo a proposição de medidas de controle ambiental e diretrizes para a adequada gestão dos resíduos gerados durante as obras.",

  resultados:
    "As análises realizadas subsidiaram o processo de licenciamento ambiental do empreendimento, fornecendo diretrizes para a gestão dos impactos ambientais e para o gerenciamento adequado dos resíduos da construção civil. Os estudos contribuíram para a viabilização ambiental de uma obra estratégica para o controle de cheias, fortalecendo a segurança da população e a capacidade de resposta da infraestrutura urbana frente a eventos hidrológicos extremos.",

  status: "Concluído.",

  imagens: [
    "assets/img/servicos/meio-ambiente/RESERVATORIO CANAA/img (1).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/MACRODRENAGEM GURIRI/img (1).png",
  nome: "Macrodrenagem e Pavimentação do Balneário de Guriri",
  local: "São Mateus – ES",
  cliente: "DER-ES",
  dadoTecnico: "Ano: 2026",

  contexto:
    "O projeto de Macrodrenagem e Pavimentação do Balneário de Guriri contempla a implantação de um sistema integrado de drenagem urbana associado à requalificação da infraestrutura viária. O empreendimento foi desenvolvido para solucionar os recorrentes problemas de alagamentos e inundações no Município de São Mateus, promovendo o adequado escoamento das águas pluviais e melhorando as condições de mobilidade, acessibilidade e segurança da população. A intervenção também contribui para a valorização de uma das principais áreas turísticas do município.",

  metodologia:
    "A avaliação ambiental do empreendimento foi desenvolvida por meio da elaboração de Estudo Ambiental Simplificado — EAS, Plano de Gerenciamento de Resíduos Sólidos — PGRS, Projeto de Recuperação de Áreas Degradadas — PRAD, Inventário de Fauna e Flora e consulta ao Instituto do Patrimônio Histórico e Artístico Nacional — IPHAN. Os estudos contemplaram levantamentos de campo, caracterização dos meios físico, biótico e socioeconômico, identificação de impactos ambientais, avaliação da vegetação e da fauna local, definição de medidas de controle ambiental e proposição de ações para recuperação das áreas afetadas pelas obras.",

  resultados:
    "O conjunto de estudos permitiu identificar as condicionantes ambientais, patrimoniais e ecológicas associadas ao empreendimento, fornecendo subsídios técnicos ao processo de licenciamento ambiental e à definição das medidas de mitigação e compensação dos impactos previstos. As análises contribuíram para compatibilizar as obras de macrodrenagem e pavimentação com a preservação dos recursos naturais e do patrimônio cultural, fortalecendo a segurança ambiental do projeto.",

  status: "Concluído.",

  imagens: [
    "assets/img/servicos/meio-ambiente/MACRODRENAGEM GURIRI/img (1).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/PARQUE LINHA FERREA/img (1).png",
  nome: "Parque da Linha Férrea e Avenida Parque",
  local: "Belo Horizonte e Nova Lima – MG",
  cliente: "",
  dadoTecnico: "Ano: 2024–2025",

  contexto:
    "Os projetos do Parque da Linha Férrea e da Avenida Parque constituem uma iniciativa estratégica para a requalificação da área correspondente à antiga linha férrea do Ramal Ferroviário de Águas Claras, localizada entre os municípios de Nova Lima e Belo Horizonte. A proposta combina preservação ambiental, valorização do patrimônio histórico e soluções de mobilidade urbana, promovendo a recuperação de áreas ambientalmente sensíveis e a criação de novos espaços de lazer, convivência e circulação para a população.",

  metodologia:
    "A VIAVOZ, por meio de equipe multidisciplinar, desenvolveu os estudos ambientais necessários à aprovação do projeto junto a instituições públicas, órgãos de controle e ao processo de licenciamento ambiental. Os trabalhos envolveram a elaboração do Estudo de Viabilidade Ambiental — EVA, Relatório de Controle Ambiental — RCA, Plano de Controle Ambiental — PCA, Projeto de Recuperação de Áreas Degradadas — PRAD, Projeto de Intervenção Ambiental — PIA, Projeto de Recuperação de Nascentes e Inventário Florestal. A atuação incluiu ainda a participação em consultas públicas para apresentação e discussão do projeto junto à sociedade.",

  resultados:
    "Os estudos ambientais subsidiaram a aprovação do projeto junto aos órgãos competentes, contribuindo para que fosse oficializada a cessão da área pertencente ao Governo Federal. As análises e recomendações técnicas forneceram segurança ao processo decisório, viabilizando o avanço de uma iniciativa estratégica para a mobilidade urbana e a recuperação ambiental da região.",

  status: "Concluído.",

  imagens: [
    "assets/img/servicos/meio-ambiente/PARQUE LINHA FERREA/img (1).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/JARDIM DA TORRE/img (1).png",
  nome: "Via de Integração Jardim da Torre à MG-030",
  local: "Nova Lima – MG",
  cliente: "Prefeitura Municipal de Nova Lima",
  dadoTecnico: "Ano: 2023",

  contexto:
    "A Via de Integração Jardim da Torre à MG-030 foi concebida para ampliar a conectividade viária do Município de Nova Lima, promovendo a ligação entre bairros urbanos e a rodovia MG-030. O empreendimento contempla a implantação de um novo trecho viário e a requalificação de vias existentes, contribuindo para a melhoria da mobilidade urbana, da segurança viária e da fluidez do tráfego na região.",

  metodologia:
    "A VIAVOZ, por meio de equipe multidisciplinar, elaborou os estudos ambientais necessários ao processo de licenciamento ambiental do empreendimento, incluindo o Relatório de Controle Ambiental — RCA, o Plano de Controle Ambiental — PCA, o Projeto de Intervenção Ambiental — PIA e estudos de critérios locacionais. Os trabalhos contemplaram levantamentos de campo, diagnósticos ambientais, avaliação de impactos, caracterização das áreas de intervenção e definição de medidas de controle e mitigação ambiental.",

  resultados:
    "O conjunto de estudos forneceu suporte técnico ao enquadramento ambiental do empreendimento e à definição da modalidade de licenciamento aplicável, considerando as características ambientais e os critérios locacionais incidentes sobre a área. As análises permitiram identificar restrições ambientais, orientar a gestão dos impactos previstos e conferir maior segurança ao processo de implantação da nova infraestrutura viária.",

  status: "Concluído.",

  imagens: [
    "assets/img/servicos/meio-ambiente/JARDIM DA TORRE/img (1).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/COPASA/img (1).png",
  nome: "Regularização Ambiental de Empreendimentos da COPASA",
  local: "Diversos municípios – MG",
  cliente: "Companhia de Saneamento de Minas Gerais — COPASA",
  dadoTecnico: "Ano: Diversos",

  contexto:
    "Com o objetivo de promover a regularização ambiental de empreendimentos de saneamento em diferentes municípios mineiros, a Companhia de Saneamento de Minas Gerais — COPASA contratou estudos técnicos voltados à avaliação da viabilidade ambiental e ao atendimento dos requisitos legais aplicáveis às suas estruturas operacionais. As atividades contemplaram unidades vinculadas aos sistemas de abastecimento de água e esgotamento sanitário, contribuindo para a manutenção e a ampliação dos serviços essenciais prestados à população.",

  metodologia:
    "A atuação envolveu a elaboração de estudos de critérios locacionais para Unidades de Tratamento de Resíduos — UTR de Estações de Tratamento de Água — ETA e para Estações de Tratamento de Esgoto — ETE, além da realização de Avaliações Preliminares de Impactos Ambientais. Os trabalhos foram desenvolvidos a partir de análises ambientais, levantamentos territoriais, avaliação de restrições locacionais e identificação de potenciais impactos associados à implantação e operação das estruturas de saneamento.",

  resultados:
    "Os estudos forneceram subsídios técnicos aos processos de regularização e licenciamento ambiental dos empreendimentos, permitindo a identificação de restrições ambientais, o enquadramento das intervenções frente à legislação vigente e a definição de diretrizes para a gestão dos impactos ambientais.",

  status: "Concluído.",

  imagens: [
    "assets/img/servicos/meio-ambiente/COPASA/img (1).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/SES ITAIPAVA/img (1).png",
  nome: "Sistema de Esgotamento Sanitário de Itaipava",
  local: "Itapemirim – ES",
  cliente: "Prefeitura Municipal de Itapemirim",
  dadoTecnico: "Ano: 2025",

  contexto:
    "Diante da necessidade de ampliar a cobertura dos serviços de esgotamento sanitário no Distrito de Itaipava, no Município de Itapemirim, foram elaborados projetos destinados a possibilitar o aproveitamento, a operação e a ampliação do sistema existente.",

  metodologia:
    "Para subsidiar o processo de licenciamento ambiental do empreendimento, foram elaborados o Plano de Controle Ambiental — PCA e o Plano de Gerenciamento de Resíduos da Construção Civil — PGRCC. Os estudos contemplaram a caracterização ambiental da área de influência, a avaliação dos impactos associados às obras de implantação e ampliação do sistema, a definição de medidas de controle ambiental e o estabelecimento de diretrizes para o gerenciamento adequado dos resíduos gerados durante as intervenções.",

  resultados:
    "Os estudos estabeleceram diretrizes para a gestão dos impactos ambientais e para o gerenciamento adequado dos resíduos da construção civil, fornecendo suporte técnico ao processo de licenciamento ambiental do empreendimento. As medidas propostas contribuíram para a viabilização ambiental das obras de ampliação do sistema, fortalecendo as condições necessárias à universalização dos serviços de saneamento e à melhoria da qualidade ambiental e da saúde pública no município.",

  status: "Concluído.",

  imagens: [
    "assets/img/servicos/meio-ambiente/SES ITAIPAVA/img (1).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/PGRCC UPA VENDA NOVA/img (1).png",
  nome: "PGRCC da UPA Venda Nova",
  local: "Belo Horizonte – MG",
  cliente: "Prefeitura de Belo Horizonte",
  dadoTecnico: "Ano: 2023",

  contexto:
    "Com o objetivo de ampliar a capacidade de atendimento e aprimorar a infraestrutura de saúde pública da região Norte de Belo Horizonte, foi desenvolvido o projeto de reforma e ampliação da Unidade de Pronto Atendimento — UPA Venda Nova.",

  metodologia:
    "Para subsidiar a implantação das obras, foi elaborado o Plano de Gerenciamento de Resíduos da Construção Civil — PGRCC, contemplando a caracterização dos resíduos gerados e a definição de procedimentos para segregação, acondicionamento, transporte e destinação final ambientalmente adequada dos materiais provenientes das atividades de reforma e ampliação.",

  resultados:
    "O PGRCC estabeleceu diretrizes para o gerenciamento adequado dos resíduos gerados durante as obras, promovendo a redução dos impactos ambientais associados à construção civil e o atendimento às exigências legais aplicáveis. As medidas propostas contribuíram para a execução ambientalmente responsável da intervenção, fornecendo suporte técnico à ampliação de um equipamento público estratégico para a saúde da população de Belo Horizonte.",

  status: "Em andamento.",

  imagens: [
    "assets/img/servicos/meio-ambiente/PGRCC UPA VENDA NOVA/img (1).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/PGRCC UPA ITAPEMIRIM/img (1).png",
  nome: "PGRCC da UPA de Itapemirim",
  local: "Itapemirim – ES",
  cliente: "Prefeitura Municipal de Itapemirim",
  dadoTecnico: "Ano: 2026",

  contexto:
    "A implantação da Unidade de Pronto Atendimento — UPA de Itapemirim foi concebida para fortalecer a rede municipal de saúde, ampliando a capacidade de atendimento de urgência e emergência e proporcionando maior acesso da população aos serviços públicos de saúde.",

  metodologia:
    "Para subsidiar a implantação do empreendimento, foi elaborado o Plano de Gerenciamento de Resíduos da Construção Civil — PGRCC, contemplando a caracterização dos resíduos gerados durante as obras e a definição de procedimentos para segregação, acondicionamento, transporte e destinação ambientalmente adequada dos materiais. O estudo foi desenvolvido em conformidade com a legislação ambiental vigente e com as boas práticas de gestão de resíduos da construção civil.",

  resultados:
    "O PGRCC estabeleceu diretrizes para o gerenciamento adequado dos resíduos gerados durante a implantação da unidade, contribuindo para a prevenção de impactos ambientais e para o atendimento às exigências legais aplicáveis. As medidas propostas forneceram suporte técnico à execução ambientalmente responsável das obras e à implantação de um equipamento público essencial para a ampliação dos serviços de saúde ofertados à população.",

  status: "Concluído.",

  imagens: [
    "assets/img/servicos/meio-ambiente/PGRCC UPA ITAPEMIRIM/img (1).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/ORLA PRAIA DA GAMBOA/img (1).png",
  nome: "Urbanização da Orla da Praia da Gamboa",
  local: "Itapemirim – ES",
  cliente: "Prefeitura Municipal de Itapemirim",
  dadoTecnico: "Ano: 2026",

  contexto:
    "O Projeto de Urbanização da Orla da Praia da Gamboa foi desenvolvido com o objetivo de promover a requalificação urbanística e paisagística da faixa costeira, por meio da implantação de infraestrutura de lazer, acessibilidade e uso público.",

  metodologia:
    "Para subsidiar o processo de licenciamento ambiental do empreendimento, foi elaborado o Plano de Controle Ambiental — PCA, contemplando a caracterização ambiental da área de influência, a avaliação dos impactos associados à implantação das obras e a definição de medidas de controle, mitigação e monitoramento ambiental. O estudo considerou as particularidades do ambiente costeiro e as intervenções previstas para a requalificação da orla.",

  resultados:
    "O PCA estabeleceu diretrizes para a gestão dos impactos ambientais decorrentes das obras, contribuindo para a compatibilização entre o uso público da orla e a preservação dos recursos naturais locais. As medidas propostas forneceram suporte técnico ao processo de licenciamento ambiental, promovendo maior segurança para a implantação do empreendimento e reforçando seu compromisso com a sustentabilidade, a valorização da paisagem costeira e a melhoria da infraestrutura urbana do município.",

  status: "Concluído.",

  imagens: [
    "assets/img/servicos/meio-ambiente/ORLA PRAIA DA GAMBOA/img (1).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/TELEFERICO ALTO LIBERDADE/img (1).png",
  nome: "Teleférico Cruzeiro de Alto Liberdade",
  local: "Marilândia – ES",
  cliente: "Prefeitura Municipal de Marilândia",
  dadoTecnico: "Ano: 2026",

  contexto:
    "Localizado na Pedra do Cruzeiro, na comunidade de Alto Liberdade, a aproximadamente nove quilômetros da sede municipal e em cota altimétrica aproximada de 760 metros acima do nível do mar, o Cruzeiro de Alto Liberdade constitui um dos principais marcos históricos, culturais e religiosos do Município de Marilândia. Com o objetivo de fortalecer o potencial turístico da região, valorizar o patrimônio local e impulsionar o desenvolvimento econômico, foi concebido o Projeto do Teleférico do Cruzeiro de Alto Liberdade, contemplando um sistema de transporte turístico por teleférico e infraestrutura de apoio aos visitantes.",

  metodologia:
    "Os estudos foram desenvolvidos para avaliar a viabilidade técnica, econômica, ambiental e social do empreendimento, subsidiando a tomada de decisão sobre sua implantação. A atuação contemplou a elaboração dos projetos conceituais, avaliação preliminar da viabilidade econômica, Estudo de Viabilidade Ambiental, Plano de Controle Ambiental — PCA, pesquisa de percepção e aceitação da população local e realização de consultas junto a órgãos ambientais e instituições de controle.",

  resultados:
    "Os estudos forneceram subsídios técnicos para a avaliação da viabilidade do empreendimento, identificando oportunidades, condicionantes e potenciais impactos associados à implantação do teleférico. As análises permitiram avaliar a aceitação social da proposta, orientar o planejamento ambiental do projeto e estimar seus potenciais benefícios para o turismo, a geração de renda e a valorização do patrimônio cultural e religioso do município.",

  status: "Em andamento.",

  imagens: [
    "assets/img/servicos/meio-ambiente/TELEFERICO ALTO LIBERDADE/img (1).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/ESTUDO AMBIENTAL REURB/img (1).png",
  nome: "Estudo Técnico Ambiental para REURB-S",
  local: "Diversos municípios",
  cliente: "Administrações públicas municipais",
  dadoTecnico: "Ano: Diversos",

  contexto:
    "A Regularização Fundiária Urbana — REURB constitui um importante instrumento de promoção da cidadania, inclusão social e ordenamento territorial, permitindo a integração de núcleos urbanos informais ao planejamento municipal. Nesse contexto, foram desenvolvidos estudos técnicos ambientais para subsidiar processos de regularização fundiária em diferentes municípios, com o objetivo de compatibilizar a permanência das ocupações consolidadas com a proteção ambiental e o cumprimento da legislação vigente.",

  metodologia:
    "Os trabalhos envolveram levantamentos de campo, mobilização social, análises cartográficas, diagnóstico ambiental das áreas ocupadas, caracterização do uso e ocupação do solo, identificação de Áreas de Preservação Permanente — APP, mapeamento de restrições ambientais e avaliação das condições de consolidação urbana. Também foram realizadas audiências públicas, oficinas participativas e ações de educação ambiental para apresentar o processo de regularização, esclarecer dúvidas, promover a participação social e incorporar as contribuições das comunidades beneficiadas.",

  resultados:
    "Os estudos permitiram identificar condicionantes ambientais, áreas de risco, restrições legais e oportunidades de adequação ambiental, fornecendo suporte técnico aos processos de regularização fundiária. As audiências públicas, oficinas e ações de educação ambiental ampliaram a participação das comunidades, favoreceram a compreensão das etapas da REURB e contribuíram para o levantamento de demandas locais, o fortalecimento do diálogo social e a construção de soluções compatíveis com a realidade dos núcleos regularizados.",

  status: "Em andamento.",

  imagens: [
    "assets/img/servicos/meio-ambiente/ESTUDO AMBIENTAL REURB/img (1).png"
  ]
},

{
  img: "assets/img/servicos/meio-ambiente/50 SISTEMAS DE ABASTECIMENTO/img (1).png",
  nome: "Implantação de 50 Sistemas Integrados de Abastecimento de Água",
  local: "Norte e Nordeste de Minas Gerais",
  cliente: "Instituto de Desenvolvimento do Norte e Nordeste de Minas Gerais — IDENE",
  dadoTecnico: "Ano: 2020–2021 | 50 sistemas",

  contexto:
    "O projeto integrou o programa do Governo de Minas Gerais, executado por meio do Instituto de Desenvolvimento do Norte e Nordeste de Minas Gerais — IDENE, destinado à implantação de 50 Sistemas Integrados de Abastecimento de Água — SIAA em comunidades rurais com escassez hídrica e elevada vulnerabilidade social. A iniciativa buscou ampliar o acesso à água potável durante a pandemia da COVID-19, fortalecendo a segurança hídrica e as condições de saúde pública das populações beneficiadas.",

  metodologia:
    "Os trabalhos envolveram levantamentos de campo, investigações hidrogeológicas, perfuração e instalação de poços tubulares profundos, execução de testes de bombeamento, análises da qualidade da água e implantação dos Sistemas Integrados de Abastecimento de Água. As intervenções contemplaram conjuntos motobomba, reservatórios, adutoras, redes de distribuição, sistemas de tratamento e desinfecção, ligações domiciliares e demais estruturas necessárias ao funcionamento dos sistemas. No componente social, foram realizadas mobilização comunitária, reuniões com lideranças locais, cadastro das famílias beneficiadas, apoio à organização comunitária, capacitação dos responsáveis pela operação e ações de educação ambiental e sanitária.",

  resultados:
    "As ações de mobilização social, capacitação e educação ambiental e sanitária contribuíram para a implantação e operação dos 50 Sistemas Integrados de Abastecimento de Água, fortalecendo a gestão comunitária e a conservação das estruturas implantadas. Como resultado, o projeto ampliou a segurança hídrica, promoveu melhorias nas condições sanitárias e favoreceu a sustentabilidade operacional dos sistemas de abastecimento nas comunidades beneficiadas.",

  status: "Concluído.",

  imagens: [
    "assets/img/servicos/meio-ambiente/50 SISTEMAS DE ABASTECIMENTO/img (1).png"
  ]
}
    ]
  }
]

},

gerenciamento: {
  titulo: "Gerenciamento",
  icone: "assets/img/Icones_Gerenciamento.png",
  descricao:
    "Acompanhamento técnico, fiscalização e controle em todas as etapas dos empreendimentos.",

  projetos: [

            {
      img: "assets/img/servicos/gerenciamento/conteçao mg30 nova lima/img (4).jpeg",
      nome: "Conteção da MG-30",
      local: "Nova Lima – MG",
      cliente: "Prefeitura Municipal de Nova Lima",
      dadoTecnico: "",
      descricao:
        "Serviços de gerenciamento, acompanhamento técnico e fiscalização de obra, com controle de execução, registros de campo e apoio à gestão do empreendimento.",
      imagens: [
        "assets/img/servicos/gerenciamento/conteçao mg30 nova lima/img (1).jpeg",
        "assets/img/servicos/gerenciamento/conteçao mg30 nova lima/img (2).jpeg",
        "assets/img/servicos/gerenciamento/conteçao mg30 nova lima/img (3).jpeg",
        "assets/img/servicos/gerenciamento/conteçao mg30 nova lima/img (4).jpeg",
        "assets/img/servicos/gerenciamento/conteçao mg30 nova lima/img (5).jpeg",
        "assets/img/servicos/gerenciamento/conteçao mg30 nova lima/img (6).jpeg",
        "assets/img/servicos/gerenciamento/conteçao mg30 nova lima/img (7).jpeg"
      ]
    },

    {
      img: "assets/img/servicos/gerenciamento/01- E.M. QUINTAS DOS INCONFIDENTES/img (12).png",
      nome: "E.M. Quintas dos Inconfidentes",
      local: "Itabirito – MG",
      cliente: "Prefeitura Municipal de Itabirito",
      dadoTecnico: "",
      descricao:
        "Serviços de gerenciamento, acompanhamento técnico e fiscalização de obra, com controle de execução, registros de campo e apoio à gestão do empreendimento.",
      imagens: [
        "assets/img/servicos/gerenciamento/01- E.M. QUINTAS DOS INCONFIDENTES/img (1).png",
        "assets/img/servicos/gerenciamento/01- E.M. QUINTAS DOS INCONFIDENTES/img (2).png",
        "assets/img/servicos/gerenciamento/01- E.M. QUINTAS DOS INCONFIDENTES/img (3).png",
        "assets/img/servicos/gerenciamento/01- E.M. QUINTAS DOS INCONFIDENTES/img (4).png",
        "assets/img/servicos/gerenciamento/01- E.M. QUINTAS DOS INCONFIDENTES/img (5).png",
        "assets/img/servicos/gerenciamento/01- E.M. QUINTAS DOS INCONFIDENTES/img (6).png",
        "assets/img/servicos/gerenciamento/01- E.M. QUINTAS DOS INCONFIDENTES/img (7).png",
        "assets/img/servicos/gerenciamento/01- E.M. QUINTAS DOS INCONFIDENTES/img (8).png",
        "assets/img/servicos/gerenciamento/01- E.M. QUINTAS DOS INCONFIDENTES/img (9).png",
        "assets/img/servicos/gerenciamento/01- E.M. QUINTAS DOS INCONFIDENTES/img (10).png",
        "assets/img/servicos/gerenciamento/01- E.M. QUINTAS DOS INCONFIDENTES/img (11).png",
        "assets/img/servicos/gerenciamento/01- E.M. QUINTAS DOS INCONFIDENTES/img (12).png",
        "assets/img/servicos/gerenciamento/01- E.M. QUINTAS DOS INCONFIDENTES/img (13).png"
      ]
    },

    {
      img: "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (2).png",
      nome: "Creche do Munu",
      local: "Itabirito – MG",
      cliente: "Prefeitura Municipal de Itabirito",
      dadoTecnico: "",
      descricao:
        "Acompanhamento técnico e fiscalização da execução da obra, com controle de serviços, verificação de etapas construtivas e registro fotográfico do avanço físico.",
      imagens: [
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (1).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (2).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (3).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (4).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (5).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (6).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (7).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (8).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (9).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (10).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (11).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (12).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (13).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (14).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (15).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (16).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (17).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (18).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (19).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (20).png",
        "assets/img/servicos/gerenciamento/02- CRECHE DO MUNU/img (21).png"
      ]
    },

    {
      img: "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (7).jpg",
      nome: "Fiscalização da Sede do SAAE",
      local: "Passos – MG",
      cliente: "Prefeitura Municipal de Passos",
      dadoTecnico: "",
      descricao:
        "Gerenciamento e fiscalização de serviços de reforma e adequação, contemplando acompanhamento de campo, controle técnico e verificação das soluções executadas.",
      imagens: [
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (1).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (2).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (3).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (4).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (5).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (6).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (7).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (8).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (9).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (10).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (11).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (12).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (13).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (14).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (15).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (16).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (17).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (18).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (19).jpg",
        "assets/img/servicos/gerenciamento/Fiscalização da Sede do SAAE/img (20).jpg"
      ]
    },

    {
      img: "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (1).png",
      nome: "Avenida Farid Rahme",
      local: "Itabirito – MG",
      cliente: "Prefeitura Municipal de Itabirito",
      dadoTecnico: "",
      descricao:
        "Acompanhamento técnico de obra de infraestrutura urbana, com fiscalização dos serviços executados, controle de campo e apoio à gestão do empreendimento.",
      imagens: [
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (1).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (2).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (3).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (4).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (5).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (6).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (7).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (8).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (9).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (10).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (11).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (12).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (13).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (14).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (15).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (16).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (17).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (18).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (19).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (20).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (21).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (22).png",
        "assets/img/servicos/gerenciamento/04- AVENIDA FARID RAHME/img (23).png"
      ]
    },

    {
      img: "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (2).png",
      nome: "Praça da Estação",
      local: "Itabirito – MG",
      cliente: "Prefeitura Municipal de Itabirito",
      dadoTecnico: "",
      descricao:
        "Gerenciamento e acompanhamento de intervenções em espaço público, com controle técnico da execução, registros de campo e fiscalização dos serviços.",
      imagens: [
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (1).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (2).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (3).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (4).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (5).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (6).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (7).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (8).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (9).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (10).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (11).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (12).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (13).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (14).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (15).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (16).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (17).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (18).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (19).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (20).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (21).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (22).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (23).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (24).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (25).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (26).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (27).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (28).png",
        "assets/img/servicos/gerenciamento/05- PRAÇA DA ESTAÇÃO/img (29).png"
      ]
    },
     
    {
      img: "assets/img/servicos/gerenciamento/Abastecimento de água residencial arvoredo nova Lima/img (4).jpeg",
      nome: "Abastecimento de água residencial arvoredo",
      local: "Nova Lima – MG",
      cliente: "Prefeitura Municipal de Nova Lima",
      dadoTecnico: "",
      descricao:
        "Serviços de gerenciamento, acompanhamento técnico e fiscalização de obra, com controle de execução, registros de campo e apoio à gestão do empreendimento.",
      imagens: [
        "assets/img/servicos/gerenciamento/Abastecimento de água residencial arvoredo nova Lima/img (1).jpeg",
        "assets/img/servicos/gerenciamento/Abastecimento de água residencial arvoredo nova Lima/img (2).jpeg",
        "assets/img/servicos/gerenciamento/Abastecimento de água residencial arvoredo nova Lima/img (3).jpeg",
        "assets/img/servicos/gerenciamento/Abastecimento de água residencial arvoredo nova Lima/img (4).jpeg"
      ]
    },

    {
      img: "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (2).jpeg",
      nome: "Contenção da voçoroca bairro alvorada",
      local: "Nova Lima – MG",
      cliente: "Prefeitura Municipal de Nova Lima",
      dadoTecnico: "",
      descricao:
        "Serviços de gerenciamento, acompanhamento técnico e fiscalização de obra, com controle de execução, registros de campo e apoio à gestão do empreendimento.",
      imagens: [
        "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (1).jpeg",
        "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (2).jpeg",
        "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (3).jpeg",
        "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (4).jpeg",
        "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (5).jpeg",
        "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (6).jpeg",
        "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (7).jpeg",
        "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (8).jpeg",
        "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (9).jpeg",
        "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (10).jpeg",
        "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (11).jpeg",
        "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (12).jpeg",
        "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (13).jpeg",
        "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (14).jpeg",
        "assets/img/servicos/gerenciamento/contenção da voçoroca do bairro alvorada em nova Lima/img (15).jpeg"
      ]
    }
  ]
},

levantamentos: {
  titulo: "Levantamentos",
  icone: "assets/img/Icones_Levantamento.png",
  descricao:
    "Topografia, escaneamento, aerolevantamento e geoinformação com tecnologia de ponta.",
  projetos: []
},

orcamento: {
  titulo: "Orçamento",
  icone: "assets/img/Icones_Treinamentos.png",
  descricao:
    "Elaboração de orçamentos, planejamento de custos, quantitativos e integração com processos BIM para maior precisão e controle dos empreendimentos.",

  projetos: []
}

};

/* POPUP E MODAL DE PROJETOS */
const servicosPopup = document.getElementById("servicosPopup");
const popupTitulo = document.getElementById("popupTitulo");
const popupDescricao = document.getElementById("popupDescricao");
const popupProjetos = document.getElementById("popupProjetos");
const popupLinkTodos = document.getElementById("popupLinkTodos");
const popupIconeImg = document.getElementById("popupIconeImg");

const projetoModal = document.getElementById("projetoModal");
const fecharProjetoModal = document.getElementById("fecharProjetoModal");
const fecharProjetoModalBtn = document.getElementById("fecharProjetoModalBtn");
const projetoModalImagem = document.getElementById("projetoModalImagem");
const projetoModalTitulo = document.getElementById("projetoModalTitulo");
const projetoModalLocal = document.getElementById("projetoModalLocal");
const projetoModalCliente = document.getElementById("projetoModalCliente");
const projetoModalArea = document.getElementById("projetoModalArea");
const projetoModalDescricao = document.getElementById("projetoModalDescricao");
const projetoModalDots = document.getElementById("projetoModalDots");
const projetoModalPrev = document.querySelector(".projeto-modal .projeto-prev");
const projetoModalNext = document.querySelector(".projeto-modal .projeto-next");
const projetoModalVideo = document.getElementById("projetoModalVideo");

let projetosPopupAtuais = [];
let projetoModalAtual = null;
let projetoImagemAtual = 0;

function criarCardProjeto(projeto) {
  const card = document.createElement("article");
  card.className = "popup-projeto-card";

  const imagem = document.createElement("img");
  imagem.src = projeto.img;
  imagem.alt = projeto.nome || "Projeto";
  imagem.loading = "lazy";
  imagem.decoding = "async";

  const conteudo = document.createElement("div");

  const titulo = document.createElement("strong");
  titulo.textContent = projeto.nome || "";

  const local = document.createElement("span");
  local.textContent = projeto.local || "";

  conteudo.append(titulo, local);
  card.append(imagem, conteudo);

  card.addEventListener("click", () => {
    abrirProjetoModal(projeto);
  });

  return card;
}

function renderizarProjetosPopup(
  lista,
  limite = 4,
  subcategorias = [],
  mostrarTodos = false
) {
  if (!popupProjetos) return;

  const projetosPrincipais = Array.isArray(lista)
    ? lista
    : [];

  const categoriasSecundarias = Array.isArray(subcategorias)
    ? subcategorias
    : [];

  const fragmento = document.createDocumentFragment();

  const semProjetos =
  projetosPrincipais.length === 0 &&
  categoriasSecundarias.length === 0;

if (semProjetos) {
  const titulo = document.createElement("div");
  titulo.className = "popup-em-breve";
  titulo.textContent = "EM BREVE";

  popupProjetos.replaceChildren(titulo);

  if (popupLinkTodos) {
    popupLinkTodos.style.display = "none";
  }

  return;
}

  /*
  |--------------------------------------------------------------------------
  | Projetos relacionados
  |--------------------------------------------------------------------------
  */

  const principaisVisiveis = mostrarTodos
    ? projetosPrincipais
    : projetosPrincipais.slice(0, limite);

  principaisVisiveis.forEach((projeto) => {
    fragmento.appendChild(
      criarCardProjeto(projeto)
    );
  });

  /*
  |--------------------------------------------------------------------------
  | Subcategorias
  |--------------------------------------------------------------------------
  */

  categoriasSecundarias.forEach((subcategoria) => {
    const projetosSubcategoria =
      Array.isArray(subcategoria.projetos)
        ? subcategoria.projetos
        : [];

    if (!projetosSubcategoria.length) return;

    const titulo = document.createElement("h4");
    titulo.className = "popup-subcategoria-titulo";
    titulo.textContent = subcategoria.titulo || "";

    const grade = document.createElement("div");
    grade.className = "popup-subcategoria-grid";

    const projetosVisiveis = mostrarTodos
      ? projetosSubcategoria
      : projetosSubcategoria.slice(0, limite);

    const fragmentoSubcategoria =
      document.createDocumentFragment();

    projetosVisiveis.forEach((projeto) => {
      fragmentoSubcategoria.appendChild(
        criarCardProjeto(projeto)
      );
    });

    grade.appendChild(fragmentoSubcategoria);

    fragmento.appendChild(titulo);
    fragmento.appendChild(grade);
  });

  /*
  |--------------------------------------------------------------------------
  | Atualização única do conteúdo
  |--------------------------------------------------------------------------
  */

  popupProjetos.replaceChildren(fragmento);

  /*
  |--------------------------------------------------------------------------
  | Verificação de projetos ocultos
  |--------------------------------------------------------------------------
  */

  const principaisPossuemOcultos =
    projetosPrincipais.length > limite;

  const subcategoriasPossuemOcultos =
    categoriasSecundarias.some((subcategoria) => {
      const projetos = Array.isArray(subcategoria.projetos)
        ? subcategoria.projetos
        : [];

      return projetos.length > limite;
    });

  /*
  |--------------------------------------------------------------------------
  | Botão "Ver todos os projetos"
  |--------------------------------------------------------------------------
  */

  if (popupLinkTodos) {
    const existemProjetosOcultos =
      principaisPossuemOcultos ||
      subcategoriasPossuemOcultos;

    popupLinkTodos.style.display =
      !mostrarTodos && existemProjetosOcultos
        ? "flex"
        : "none";
  }
}

function abrirProjetoModal(projeto) {
  if (!projetoModal) return;

  projetoModalAtual = projeto;
  projetoImagemAtual = 0;

  projetoModalTitulo.textContent = projeto.nome || "";
  projetoModalLocal.textContent = projeto.local || "";
  projetoModalCliente.textContent = projeto.cliente ? `Cliente: ${projeto.cliente}` : "";
  if (projeto.dadoTecnico) {
  projetoModalArea.textContent = projeto.dadoTecnico;
} else if (projeto.area) {
  projetoModalArea.textContent = `Área: ${projeto.area}`;
} else {
  projetoModalArea.textContent = "";
}
const secoesProjeto = [
  {
    titulo: "Contexto",
    texto: projeto.contexto
  },
  {
    titulo: "Metodologia",
    texto: projeto.metodologia
  },
  {
    titulo: "Resultados",
    texto: projeto.resultados
  },
  {
    titulo: "Status",
    texto: projeto.status
  }
];

const possuiSecoes = secoesProjeto.some(secao => secao.texto);

if (possuiSecoes) {
  projetoModalDescricao.innerHTML = secoesProjeto
    .filter(secao => secao.texto)
    .map(secao => `
      <section class="projeto-modal-secao">
        <h4>${secao.titulo}</h4>
        <p>${secao.texto}</p>
      </section>
    `)
    .join("");
} else {
  projetoModalDescricao.innerHTML = (projeto.descricao || "")
    .split("\n\n")
    .filter(Boolean)
    .map(paragrafo => `<p>${paragrafo}</p>`)
    .join("");
}

  atualizarProjetoModalImagem();

  projetoModal.classList.add("ativo");
  projetoModal.setAttribute("aria-hidden", "false");
}

function atualizarProjetoModalImagem() {

    const arquivos = projetoModalAtual.imagens || [];

    if (!arquivos.length) return;

    const arquivo = arquivos[projetoImagemAtual];

    const ehVideo = arquivo.toLowerCase().endsWith(".mp4");

    if (ehVideo) {

        projetoModalImagem.style.display = "none";

        projetoModalVideo.style.display = "block";

        projetoModalVideo.src = arquivo;

        projetoModalVideo.load();

        return;
    }

    projetoModalVideo.pause();
    projetoModalVideo.style.display = "none";

    projetoModalImagem.style.display = "block";

    const novaImagem = new Image();

    novaImagem.src = arquivo;

    novaImagem.onload = () => {

        projetoModalImagem.src = arquivo;

        projetoModalImagem.alt = projetoModalAtual.nome || "";

    };

}

function fecharProjetoModalFunc() {
  if (!projetoModal) return;

  projetoModal.classList.remove("ativo");
  projetoModal.setAttribute("aria-hidden", "true");

  if (projetoModalVideo) {
    projetoModalVideo.pause();
    projetoModalVideo.currentTime = 0;
    projetoModalVideo.style.display = "none";
  }

  projetoModalImagem.style.display = "block";

  projetoModalAtual = null;
  projetoImagemAtual = 0;
}

let categoriaAtualPopup = "";

document.querySelectorAll(".abrir-projetos").forEach((botao) => {
  botao.addEventListener("click", () => {
    const categoria = botao.dataset.categoria;
    const dados = dadosServicos[categoria];

    if (!dados || !servicosPopup) return;

    categoriaAtualPopup = categoria;

    popupTitulo.textContent = dados.titulo;
    popupDescricao.textContent = dados.descricao;

    if (popupIconeImg) {
      popupIconeImg.src = dados.icone;
      popupIconeImg.alt = dados.titulo;
    }

    projetosPopupAtuais = dados.projetos || [];

    renderizarProjetosPopup(
      projetosPopupAtuais,
      4,
      dados.subcategorias || [],
      false
    );

    servicosPopup.classList.add("ativo");
    document.body.style.overflow = "hidden";
  });
});

if (popupLinkTodos) {
  popupLinkTodos.addEventListener("click", () => {
    const dados = dadosServicos[categoriaAtualPopup];

    if (!dados) return;

    renderizarProjetosPopup(
      projetosPopupAtuais,
      4,
      dados.subcategorias || [],
      true
    );
  });
}

if (projetoModalPrev) {
  projetoModalPrev.addEventListener("click", () => {
    projetoImagemAtual--;
    atualizarProjetoModalImagem();
  });
}

if (projetoModalNext) {
  projetoModalNext.addEventListener("click", () => {
    projetoImagemAtual++;
    atualizarProjetoModalImagem();
  });
}

if (fecharProjetoModal) {
  fecharProjetoModal.addEventListener("click", fecharProjetoModalFunc);
}

if (fecharProjetoModalBtn) {
  fecharProjetoModalBtn.addEventListener("click", fecharProjetoModalFunc);
}

const fecharServicosPopup = document.getElementById("fecharServicosPopup");
const fecharServicosPopupBtn = document.getElementById("fecharServicosPopupBtn");

function fecharServicosPopupFunc() {
  if (!servicosPopup) return;

  servicosPopup.classList.remove("ativo");
  document.body.style.overflow = "";
}

if (fecharServicosPopup) {
  fecharServicosPopup.addEventListener("click", fecharServicosPopupFunc);
}

if (fecharServicosPopupBtn) {
  fecharServicosPopupBtn.addEventListener("click", fecharServicosPopupFunc);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (projetoModal?.classList.contains("ativo")) {
      fecharProjetoModalFunc();
    }

    if (servicosPopup?.classList.contains("ativo")) {
      fecharServicosPopupFunc();
    }
  }

  if (event.key === "ArrowRight" && projetoModal?.classList.contains("ativo")) {
    projetoImagemAtual++;
    atualizarProjetoModalImagem();
  }

  if (event.key === "ArrowLeft" && projetoModal?.classList.contains("ativo")) {
    projetoImagemAtual--;
    atualizarProjetoModalImagem();
  }
});

/* DEPOIMENTOS */
const depoimentosCarousel = document.querySelector(".depoimentos-carousel");

if (depoimentosCarousel) {
  const slides = [...depoimentosCarousel.querySelectorAll(".depoimentos-slide")];
  const dotsContainer = depoimentosCarousel.querySelector(".depoimentos-dots");
  const tempo = Number(depoimentosCarousel.dataset.tempo) || 5000;

  let slideAtual = 0;
  let intervalo;

  function criarDots() {
    if (!dotsContainer) return;

    dotsContainer.innerHTML = "";

    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";

      if (index === 0) dot.classList.add("ativo");

      dot.addEventListener("click", () => {
        mostrarSlide(index);
        reiniciarAutoPlay();
      });

      dotsContainer.appendChild(dot);
    });
  }

  function mostrarSlide(index) {
    if (!slides.length || !dotsContainer) return;

    slides[slideAtual].classList.remove("ativo");
    dotsContainer.children[slideAtual].classList.remove("ativo");

    slideAtual = index;

    slides[slideAtual].classList.add("ativo");
    dotsContainer.children[slideAtual].classList.add("ativo");
  }

  function proximoSlide() {
    const proximo = (slideAtual + 1) % slides.length;
    mostrarSlide(proximo);
  }

  function iniciarAutoPlay() {
    if (slides.length > 1) {
      intervalo = setInterval(proximoSlide, tempo);
    }
  }

  function reiniciarAutoPlay() {
    clearInterval(intervalo);
    iniciarAutoPlay();
  }

  criarDots();
  iniciarAutoPlay();
}

/* CLIENTES */
const abrirClientesModal = document.getElementById("abrirClientesModal");
const clientesModal = document.getElementById("clientesModal");
const clientesModalFechar = document.getElementById("clientesModalFechar");
const fecharClientesModal = document.getElementById("fecharClientesModal");

function abrirModalClientes() {
  if (!clientesModal) return;

  clientesModal.classList.add("ativo");
  clientesModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function fecharModalClientesFunc() {
  if (!clientesModal) return;

  clientesModal.classList.remove("ativo");
  clientesModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (abrirClientesModal) {
  abrirClientesModal.addEventListener("click", abrirModalClientes);
}

if (clientesModalFechar) {
  clientesModalFechar.addEventListener("click", fecharModalClientesFunc);
}

if (fecharClientesModal) {
  fecharClientesModal.addEventListener("click", fecharModalClientesFunc);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && clientesModal?.classList.contains("ativo")) {
    fecharModalClientesFunc();
  }
});

const toggleClientesBtn = document.getElementById("toggleClientesBtn");

if (toggleClientesBtn) {
  const clientesExtras = document.querySelectorAll(".cliente-extra");
  let clientesExpandido = false;

  toggleClientesBtn.addEventListener("click", () => {
    clientesExpandido = !clientesExpandido;

    clientesExtras.forEach((cliente) => {
      cliente.classList.toggle("ativo", clientesExpandido);
    });

    toggleClientesBtn.textContent = clientesExpandido
      ? "VER MENOS CLIENTES"
      : "VER MAIS CLIENTES";
  });
}

/* CLIENTES INDEX */
const clientesIndex = [
  { nome: "COLÉGIO MILITAR JF", img: "assets/img/clientes/COLÉGIO MILITAR JF.png" },
  { nome: "DER-MG", img: "assets/img/clientes/DER-MG.png" },
  { nome: "CONGONHAS", img: "assets/img/clientes/CONGONHAS.png" },
  { nome: "CONTAGEM", img: "assets/img/clientes/CONTAGEM.png" },
  { nome: "COPASA", img: "assets/img/clientes/COPASA.png" },
  { nome: "DER-ES", img: "assets/img/clientes/DER-ES.png" },
  { nome: "DNIT", img: "assets/img/clientes/DNIT.png" },
  { nome: "CISPAR", img: "assets/img/clientes/CISPAR.png" },
  { nome: "AMOG", img: "assets/img/clientes/AMOG.png" },
  { nome: "ANCHIETA", img: "assets/img/clientes/ANCHIETA.png" }
];

const clientesLogosIndex = document.getElementById("clientesLogosIndex");
const clientesCarrosselIndex = document.querySelector(".clientes-carrossel-index");

if (clientesLogosIndex && clientesCarrosselIndex) {
  let inicioClientes = 0;
  const quantidadePorVez = 6;
  const tempoClientes = Number(clientesCarrosselIndex.dataset.tempo) || 4500;

  function renderClientesIndex() {
    clientesLogosIndex.innerHTML = "";

    for (let i = 0; i < quantidadePorVez; i++) {
      const index = (inicioClientes + i) % clientesIndex.length;
      const cliente = clientesIndex[index];

      const item = document.createElement("div");
      item.className = "cliente-index-item";

      item.innerHTML = `
        <img src="${cliente.img}" alt="${cliente.nome}">
        <span>${cliente.nome}</span>
      `;

      clientesLogosIndex.appendChild(item);
    }
  }

  function trocarClientesSuave() {
    clientesLogosIndex.classList.add("saindo");

    setTimeout(() => {
      inicioClientes = (inicioClientes + quantidadePorVez) % clientesIndex.length;

      clientesLogosIndex.classList.remove("saindo");
      clientesLogosIndex.classList.add("entrando");

      renderClientesIndex();

      requestAnimationFrame(() => {
        clientesLogosIndex.classList.remove("entrando");
      });
    }, 450);
  }

  renderClientesIndex();
  setInterval(trocarClientesSuave, tempoClientes);
}

/* LIGHTBOX TECNOLOGIAS */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxFechar = document.querySelector(".lightbox-fechar");
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");

const imagensProdutos = document.querySelectorAll(".produto-img");

let imagemAtual = 0;

function abrirLightbox(index) {
  imagemAtual = index;

  lightboxImg.src = imagensProdutos[imagemAtual].src;
  lightbox.classList.add("ativo");

  document.body.style.overflow = "hidden";
}

function fecharLightbox() {
  lightbox.classList.remove("ativo");
  document.body.style.overflow = "";
}

function imagemAnterior() {
  imagemAtual--;

  if (imagemAtual < 0) {
    imagemAtual = imagensProdutos.length - 1;
  }

  lightboxImg.src = imagensProdutos[imagemAtual].src;
}

function proximaImagem() {
  imagemAtual++;

  if (imagemAtual >= imagensProdutos.length) {
    imagemAtual = 0;
  }

  lightboxImg.src = imagensProdutos[imagemAtual].src;
}

imagensProdutos.forEach((img, index) => {
  img.style.cursor = "zoom-in";

  img.addEventListener("click", () => {
    abrirLightbox(index);
  });
});

if (lightboxFechar) {
  lightboxFechar.addEventListener("click", fecharLightbox);
}

if (lightboxPrev) {
  lightboxPrev.addEventListener("click", imagemAnterior);
}

if (lightboxNext) {
  lightboxNext.addEventListener("click", proximaImagem);
}

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      fecharLightbox();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (!lightbox || !lightbox.classList.contains("ativo")) return;

  if (e.key === "Escape") fecharLightbox();
  if (e.key === "ArrowLeft") imagemAnterior();
  if (e.key === "ArrowRight") proximaImagem();
});

const dadosProjetos = {
  BA: 4,
  ES: 252,
  MG: 1372,
  RN: 9,
  RO: 1,
  DF: 1,
  RJ: 1,
  RS: 1,
  SC: 1
};

const nomesEstados = {
  AC: "Acre", AL: "Alagoas", AP: "Amapá", AM: "Amazonas", BA: "Bahia",
  CE: "Ceará", DF: "Distrito Federal", ES: "Espírito Santo", GO: "Goiás",
  MA: "Maranhão", MT: "Mato Grosso", MS: "Mato Grosso do Sul",
  MG: "Minas Gerais", PA: "Pará", PB: "Paraíba", PR: "Paraná",
  PE: "Pernambuco", PI: "Piauí", RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte", RS: "Rio Grande do Sul",
  RO: "Rondônia", RR: "Roraima", SC: "Santa Catarina",
  SP: "São Paulo", SE: "Sergipe", TO: "Tocantins"
};

const svgMapa = document.getElementById("mapaBrasil");
const estadoNome = document.getElementById("estadoNome");
const estadoProjetos = document.getElementById("estadoProjetos");
const tooltipMapa = document.getElementById("mapaTooltip");

function getUf(feature) {
  return (
    feature.properties.sigla ||
    feature.properties.uf ||
    feature.properties.UF ||
    feature.properties.id ||
    feature.properties.name ||
    ""
  ).toString().toUpperCase();
}

function getCoords(geometry) {
  const coords = [];

  function extract(arr) {
    if (typeof arr[0] === "number") {
      coords.push(arr);
    } else {
      arr.forEach(extract);
    }
  }

  extract(geometry.coordinates);
  return coords;
}

function criarProjetor(features, width, height) {
  const todos = features.flatMap(f => getCoords(f.geometry));

  const minLon = Math.min(...todos.map(c => c[0]));
  const maxLon = Math.max(...todos.map(c => c[0]));
  const minLat = Math.min(...todos.map(c => c[1]));
  const maxLat = Math.max(...todos.map(c => c[1]));

  const padding = 35;
  const scaleX = (width - padding * 2) / (maxLon - minLon);
  const scaleY = (height - padding * 2) / (maxLat - minLat);
  const scale = Math.min(scaleX, scaleY);

  const mapWidth = (maxLon - minLon) * scale;
  const mapHeight = (maxLat - minLat) * scale;

  const offsetX = (width - mapWidth) / 2;
  const offsetY = (height - mapHeight) / 2;

  return ([lon, lat]) => {
    const x = offsetX + (lon - minLon) * scale;
    const y = offsetY + (maxLat - lat) * scale;
    return [x, y];
  };
}

function pathFromGeometry(geometry, project) {
  function polygonToPath(polygon) {
    return polygon.map(ring => {
      return ring.map((coord, index) => {
        const [x, y] = project(coord);
        return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
      }).join(" ") + " Z";
    }).join(" ");
  }

  if (geometry.type === "Polygon") {
    return polygonToPath(geometry.coordinates);
  }

  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates.map(polygonToPath).join(" ");
  }

  return "";
}

function nivelEstado(uf) {
  const valor = dadosProjetos[uf] || 0;

  if (valor >= 700) return "nivel-3";
  if (valor >= 200) return "nivel-2";
  if (valor > 0) return "nivel-1";

  return "";
}

function centroFeature(feature, project) {
  const coords = getCoords(feature.geometry);
  const pontos = coords.map(project);

  const x = pontos.reduce((s, p) => s + p[0], 0) / pontos.length;
  const y = pontos.reduce((s, p) => s + p[1], 0) / pontos.length;

  return [x, y];
}

fetch("assets/geo/brazil-states.geojson")
  .then(response => response.json())
  .then(geojson => {
    const width = 900;
    const height = 900;
    const features = geojson.features;
    const project = criarProjetor(features, width, height);

    features.forEach(feature => {
      const uf = getUf(feature);
      const projetos = dadosProjetos[uf] || 0;

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", pathFromGeometry(feature.geometry, project));
      path.classList.add("estado");

      if (projetos > 0) {
        path.classList.add("com-dados", nivelEstado(uf));
      }

      path.dataset.uf = uf;
      path.dataset.projetos = projetos;

      path.addEventListener("mouseenter", e => {
        document.querySelectorAll(".estado").forEach(el => el.classList.remove("ativo"));
        path.classList.add("ativo");

        estadoNome.textContent = nomesEstados[uf] || uf;
        estadoProjetos.textContent = `Total de projetos: ${projetos}`;

        tooltipMapa.innerHTML = `${nomesEstados[uf] || uf}<br>${projetos} projetos`;
        tooltipMapa.style.display = "block";
      });

      path.addEventListener("mousemove", e => {
        const box = document.querySelector(".mapa-svg-area").getBoundingClientRect();
        tooltipMapa.style.left = `${e.clientX - box.left + 14}px`;
        tooltipMapa.style.top = `${e.clientY - box.top + 14}px`;
      });

      path.addEventListener("mouseleave", () => {
  path.classList.remove("ativo");
  tooltipMapa.style.display = "none";
});

      path.addEventListener("click", () => {
        estadoNome.textContent = nomesEstados[uf] || uf;
        estadoProjetos.textContent = `Total de projetos: ${projetos}`;
      });

      svgMapa.appendChild(path);

      if (projetos > 0) {
        const [xBase, yBase] = centroFeature(feature, project);

let x = xBase;
let y = yBase;

switch (uf) {
  case "ES":
    x += 10;   // esquerda
    y += 8;    // baixo
    break;

  case "RJ":
    x += 19;   // esquerda
    y += 1;    // baixo
    break;
}

const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        label.setAttribute("x", x);
        label.setAttribute("y", y);
        label.setAttribute("class", "mapa-label");
        label.textContent = uf;

        svgMapa.appendChild(label);
      }
    });
  });

  /* CANAL DE COMUNICAÇÕES / COMPLIANCE */

const btnComplianceCanal = document.getElementById("btnComplianceCanal");
const contatoSection = document.getElementById("contato");

const contatoTag = document.getElementById("contatoTag");
const tituloContato = document.getElementById("tituloContato");
const textoContato = document.getElementById("textoContato");
const avisoCompliance = document.getElementById("avisoCompliance");

const tipoFormulario = document.getElementById("tipoFormulario");

const campoNome = document.getElementById("campoNome");
const campoEmail = document.getElementById("campoEmail");
const campoEmpresa = document.getElementById("campoEmpresa");
const campoTelefone = document.getElementById("campoTelefone");
const campoAssunto = document.getElementById("campoAssunto");
const campoMensagem = document.getElementById("campoMensagem");

const btnEnviarContato = document.getElementById("btnEnviarContato");

function ativarModoCompliance() {
  if (!contatoSection || !tipoFormulario) return;

  tipoFormulario.value = "compliance";

  contatoSection.classList.add("modo-compliance");

  if (contatoTag) {
    contatoTag.textContent = "COMPLIANCE";
  }

  if (tituloContato) {
    tituloContato.textContent = "Enviar comunicação anônima";
  }

  if (textoContato) {
    textoContato.textContent =
      "Utilize este canal para enviar relatos, denúncias ou comunicações relacionadas à ética, integridade, conduta e ao Programa de Compliance da VIAVOZ.";
  }

  if (avisoCompliance) {
    avisoCompliance.hidden = false;
  }

  if (campoNome) {
    campoNome.placeholder = "Nome (opcional)";
    campoNome.required = false;
  }

  if (campoEmail) {
    campoEmail.placeholder = "E-mail (opcional)";
    campoEmail.required = false;
  }

  if (campoEmpresa) {
    campoEmpresa.placeholder = "Empresa ou vínculo (opcional)";
    campoEmpresa.required = false;
  }

  if (campoTelefone) {
    campoTelefone.placeholder = "Telefone (opcional)";
    campoTelefone.required = false;
  }

  if (campoAssunto) {
    campoAssunto.placeholder = "Assunto da comunicação";
    campoAssunto.required = true;
  }

  if (campoMensagem) {
    campoMensagem.placeholder =
      "Descreva os fatos com o máximo de detalhes possível.";
    campoMensagem.required = true;
  }

  if (btnEnviarContato) {
    btnEnviarContato.textContent = "Enviar comunicação anônima →";
  }

  contatoSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  window.setTimeout(() => {
    campoAssunto?.focus({
      preventScroll: true
    });
  }, 700);
}

function voltarModoContato() {

    tipoFormulario.value = "contato";

    contatoSection.classList.remove("modo-compliance");

    contatoTag.textContent = "CONTATO";

    tituloContato.textContent = "Fale com a VIAVOZ";

    textoContato.textContent =
        "Entre em contato para solicitar propostas, tirar dúvidas ou conhecer melhor nossas soluções em engenharia, tecnologia e gestão técnica.";

    avisoCompliance.hidden = true;

    campoNome.placeholder = "Nome";
    campoNome.required = true;

    campoEmail.placeholder = "E-mail";
    campoEmail.required = true;

    campoEmpresa.placeholder = "Empresa (opcional)";

    campoTelefone.placeholder = "Telefone";
    campoTelefone.required = true;

    campoAssunto.placeholder = "Assunto";
    campoAssunto.required = true;

    campoMensagem.placeholder = "Mensagem";

    btnEnviarContato.textContent = "Enviar mensagem →";
}

const parametrosUrl = new URLSearchParams(window.location.search);
const formularioSolicitado = parametrosUrl.get("form");

if (formularioSolicitado === "compliance") {
  ativarModoCompliance();
}

const voltarContato = document.getElementById("voltarContato");

if (voltarContato) {
    voltarContato.addEventListener("click", voltarModoContato);
}

if (btnComplianceCanal) {
  btnComplianceCanal.addEventListener("click", (event) => {
    event.preventDefault();
    ativarModoCompliance();
  });
}

const menuCompliance = document.getElementById("menuCompliance");

if (menuCompliance) {
  menuCompliance.addEventListener("click", (event) => {
    event.preventDefault();

    // Ativa o formulário de Compliance
    ativarModoCompliance();

    // Garante que a página vá para a seção de contato
    contatoSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // Fecha o menu mobile
    if (menu) {
      menu.classList.remove("ativo");
    }

    if (menuMobileBtn) {
      menuMobileBtn.textContent = "☰";
    }
  });
}

const menuContato = document.getElementById("menuContato");

if (menuContato) {
  menuContato.addEventListener("click", (event) => {
    event.preventDefault();

    voltarModoContato();

    contatoSection?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    if (menu) {
      menu.classList.remove("ativo");
    }

    if (menuMobileBtn) {
      menuMobileBtn.textContent = "☰";
    }
  });
}

/* =========================================================
   POPUP DE RETORNO DO FORMULÁRIO
========================================================= */

const popupRetorno = document.getElementById("popupRetorno");
const popupRetornoTitulo = document.getElementById("popupRetornoTitulo");
const popupRetornoTexto = document.getElementById("popupRetornoTexto");
const popupRetornoIcone = document.getElementById("popupRetornoIcone");
const popupRetornoFechar = document.getElementById("popupRetornoFechar");

function fecharPopupRetorno() {
  if (!popupRetorno) return;

  popupRetorno.classList.remove("ativo");
  document.body.style.overflow = "";

  history.replaceState(
    {},
    document.title,
    window.location.pathname + "#contato"
  );
}

if (
  popupRetorno &&
  popupRetornoTitulo &&
  popupRetornoTexto &&
  popupRetornoIcone &&
  popupRetornoFechar
) {
  const paramsRetorno = new URLSearchParams(window.location.search);

  const envioRetorno = paramsRetorno.get("envio");
  const tipoRetorno = paramsRetorno.get("tipo");

  if (envioRetorno === "sucesso") {
    popupRetorno.classList.add("ativo");
    document.body.style.overflow = "hidden";

    popupRetornoIcone.textContent = "✓";
    popupRetornoIcone.className =
      "popup-retorno-icone popup-sucesso";

    if (tipoRetorno === "compliance") {
      popupRetornoTitulo.textContent =
        "Comunicação recebida";

      popupRetornoTexto.textContent =
        "Sua comunicação foi recebida pelo Canal de Compliance da VIAVOZ e será tratada de forma confidencial.";
    } else {
      popupRetornoTitulo.textContent =
        "Mensagem enviada!";

      popupRetornoTexto.textContent =
        "Recebemos sua mensagem com sucesso. Nossa equipe retornará o contato o mais breve possível.";
    }
  }

  if (
    envioRetorno === "erro" ||
    envioRetorno === "email-invalido"
  ) {
    popupRetorno.classList.add("ativo");
    document.body.style.overflow = "hidden";

    popupRetornoIcone.textContent = "!";
    popupRetornoIcone.className =
      "popup-retorno-icone popup-erro";

    popupRetornoTitulo.textContent =
      "Não foi possível enviar.";

    popupRetornoTexto.textContent =
      envioRetorno === "email-invalido"
        ? "O endereço de e-mail informado é inválido."
        : "Ocorreu um problema durante o envio. Tente novamente em alguns instantes.";
  }

  popupRetornoFechar.addEventListener(
    "click",
    fecharPopupRetorno
  );

  popupRetorno.addEventListener("click", (event) => {
    if (event.target === popupRetorno) {
      fecharPopupRetorno();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      popupRetorno.classList.contains("ativo")
    ) {
      fecharPopupRetorno();
    }
  });
}

/* =========================================================
   BLOQUEIO DE ZOOM NO MOBILE
========================================================= */

document.addEventListener(
  "gesturestart",
  function (event) {
    event.preventDefault();
  },
  { passive: false }
);

document.addEventListener(
  "gesturechange",
  function (event) {
    event.preventDefault();
  },
  { passive: false }
);

document.addEventListener(
  "gestureend",
  function (event) {
    event.preventDefault();
  },
  { passive: false }
);

let ultimoToque = 0;

document.addEventListener(
  "touchend",
  function (event) {
    const agora = Date.now();

    if (agora - ultimoToque <= 300) {
      event.preventDefault();
    }

    ultimoToque = agora;
  },
  { passive: false }
);