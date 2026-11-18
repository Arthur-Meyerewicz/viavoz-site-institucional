# VIAVOZ Projetos — Site Institucional

**Plataforma web institucional para apresentação de soluções de engenharia, projetos, tecnologias, clientes e canais de relacionamento da VIAVOZ Projetos.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![PHP](https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white)
![Responsive](https://img.shields.io/badge/Design-Responsivo-1F3F74)

## 1. Sobre o projeto

O projeto consiste no desenvolvimento do site institucional da **VIAVOZ Projetos**, empresa brasileira de engenharia consultiva fundada em 2003, especializada na elaboração de projetos, gerenciamento de obras e aplicação de tecnologias digitais à engenharia.

A plataforma apresenta a trajetória da empresa, suas áreas de atuação, seus diferenciais tecnológicos e seu portfólio de projetos de forma visual, dinâmica e acessível.

O desenvolvimento utiliza HTML5, CSS3, JavaScript e PHP, sem a necessidade de frameworks de aplicação.

## 2. Objetivos

- Fortalecer a presença digital e a identidade institucional da VIAVOZ.
- Apresentar serviços e soluções de engenharia.
- Disponibilizar um portfólio interativo de projetos.
- Demonstrar tecnologias e metodologias utilizadas pela empresa.
- Apresentar clientes, parceiros e áreas de atuação.
- Facilitar o contato com a organização.
- Disponibilizar um canal institucional de compliance.
- Oferecer navegação adaptada a computadores, tablets e smartphones.

## 3. Funcionalidades

### Página inicial

A página principal reúne as informações institucionais e os principais recursos do site:

- Banner de abertura com vídeo institucional.
- Apresentação da empresa e de sua experiência.
- Indicadores numéricos animados.
- Cards de serviços de engenharia.
- Acesso ao portfólio de projetos.
- Apresentação de missão, visão e valores.
- Conteúdo institucional sobre compliance.
- Formulários de comunicação.
- Rodapé com contatos, redes sociais e localização.

### Portfólio interativo de engenharia

O sistema permite consultar projetos organizados por categorias:

- Edificações.
- Infraestrutura.
- Saneamento.
- Urbanismo.
- Gerenciamento de obras.
- Regularização fundiária.
- Levantamentos técnicos.
- Orçamento e planejamento.

Os projetos podem apresentar informações como nome, localização, cliente, área, descrição e galeria de imagens.

O JavaScript controla a abertura dos modais, a navegação pelas galerias e a apresentação dinâmica dos dados cadastrados.

### Quem somos

Página dedicada à história e à identidade da empresa, incluindo:

- Trajetória institucional.
- Linha do tempo.
- Áreas de atuação.
- Metodologia BIM.
- Etapas do desenvolvimento de projetos.
- Mapa interativo do Brasil.
- Cultura organizacional e liderança.

### Nosso diferencial

Apresentação das tecnologias aplicadas à engenharia:

- Building Information Modeling (BIM).
- Aerolevantamento com drones.
- Aerofotogrametria.
- Escaneamento a laser e LiDAR.
- Georreferenciamento GNSS.
- Modelagem tridimensional.
- Nuvens de pontos.
- Modelos digitais de superfície.
- Ortofotos e curvas de nível.

A página também disponibiliza recursos de visualização ampliada de imagens técnicas.

### Clientes

Página dedicada à apresentação de clientes e parceiros, com galeria de logotipos e recurso para expandir a relação de organizações exibidas.

### Contato e compliance

O projeto utiliza formulários HTML integrados a um processador PHP.

O arquivo `contato.php` realiza:

- Recebimento de dados via POST.
- Tratamento e validação de campos.
- Validação de endereço de e-mail no formulário de contato.
- Preparação de mensagens em HTML.
- Encaminhamento para destinatários institucionais.
- Redirecionamento com indicação de sucesso ou erro.

O canal de compliance utiliza um fluxo específico de comunicação e um modelo de e-mail próprio.

**Observação:** o processamento de formulários depende de um servidor com PHP e serviço de envio de e-mails configurado. O código não implementa, por si só, uma plataforma completa de gestão de denúncias ou garantia de anonimato.

### Responsividade

O layout possui regras específicas para diferentes resoluções, incluindo:

- Computadores e notebooks.
- Tablets.
- Smartphones.
- Dispositivos com telas reduzidas.

A adaptação visual é implementada principalmente pelos arquivos `style.css` e `mobile.css`.

## 4. Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estrutura semântica das páginas |
| CSS3 | Estilização, animações e identidade visual |
| JavaScript | Interações, modais, galerias e animações |
| PHP | Processamento dos formulários e envio de e-mails |
| SVG | Elementos gráficos e mapa interativo |
| Google Fonts | Tipografia Montserrat |
| Font Awesome / Bootstrap Icons | Ícones utilizados em páginas específicas |
| Google Maps Embed | Exibição da localização institucional |

## 5. Estrutura do projeto

```text
viavoz-site-institucional/
│
├── assets/
│   ├── img/
│   ├── video/
│   └── logos/
│
├── index.html
├── quem-somos.html
├── tecnologias.html
├── clientes.html
│
├── style.css
├── mobile.css
├── script.js
├── contato.php
│
├── README.md
└── .gitignore
```

### Descrição dos arquivos

**index.html:** página inicial e principal ponto de entrada da aplicação.

**quem-somos.html:** informações institucionais, trajetória, metodologia e atuação da empresa.

**tecnologias.html:** apresentação de equipamentos, tecnologias e produtos técnicos.

**clientes.html:** página de clientes e parceiros institucionais.

**style.css:** estilos globais, componentes, cores, tipografia e animações.

**mobile.css:** regras de responsividade e adaptações para dispositivos móveis.

**script.js:** comportamentos interativos, animações, portfólio e manipulação do DOM.

**contato.php:** processamento dos formulários institucionais.

**assets/:** diretório de recursos visuais, incluindo imagens, vídeos, logotipos, ícones e fotografias de projetos.

## 6. Como executar localmente

### Requisitos

- Navegador moderno.
- Servidor HTTP local.
- PHP para testar o processamento dos formulários.

### Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/viavoz-site-institucional.git
cd viavoz-site-institucional
```

### Iniciar o servidor PHP

Com PHP instalado, execute:

```bash
php -S localhost:8000
```

Acesse:

```text
http://localhost:8000
```

O servidor integrado do PHP é adequado para desenvolvimento e testes locais, não para produção.

### Recursos de mídia

A pasta `assets` deve conter os arquivos originais referenciados pelo HTML, CSS e JavaScript. É necessário preservar os nomes, extensões e caminhos utilizados no código.

Sem esses recursos, partes do site poderão apresentar imagens ausentes ou vídeos indisponíveis.

## 7. Publicação

O frontend pode ser hospedado em um servidor web convencional.

Para utilizar todas as funcionalidades, o ambiente de produção deve oferecer:

- Hospedagem de arquivos HTML, CSS, JavaScript e mídia.
- Suporte a PHP.
- Serviço de e-mail configurado.
- Certificado HTTPS.
- Permissões adequadas de arquivos e diretórios.

**GitHub Pages:** permite publicar a parte estática do projeto, mas não executa PHP. Os formulários exigirão hospedagem compatível ou integração com outro backend.

## 8. Manutenção

Para adicionar ou atualizar projetos, consulte a estrutura de dados do portfólio no arquivo `script.js`.

Para modificar a identidade visual, utilize as variáveis e os estilos definidos em `style.css`.

Para ajustes de responsividade, consulte `mobile.css`.

Ao adicionar novas imagens ou vídeos, mantenha a organização da pasta `assets` e atualize as referências correspondentes.

## 9. Segurança e boas práticas

Antes da publicação em produção, recomenda-se:

- Validar e testar os formulários.
- Implementar proteção contra spam e abuso.
- Configurar o envio de e-mails com serviço apropriado.
- Verificar a política de privacidade e o tratamento de dados pessoais.
- Restringir o acesso a comunicações de compliance.
- Manter cópias de segurança.
- Verificar direitos de uso das imagens, vídeos, marcas e logotipos.
- Evitar publicar credenciais e informações confidenciais.

## 10. Evolução do projeto

Possíveis melhorias futuras:

- Painel administrativo para gerenciamento do portfólio.
- Integração com CMS.
- Otimização de imagens e vídeos.
- Aprimoramento de acessibilidade.
- Testes automatizados.
- Otimização de SEO e desempenho.
- Integração com serviço transacional de e-mails.
- Melhorias contínuas de segurança.

## 11. Direitos e propriedade intelectual

Projeto institucional desenvolvido para a VIAVOZ Projetos.

As marcas, logotipos, fotografias, vídeos e materiais institucionais devem ser utilizados conforme as autorizações de seus respectivos titulares.

A disponibilização do código em um repositório público não implica automaticamente concessão de licença de uso, reprodução ou distribuição dos materiais.

---

**VIAVOZ Projetos**

*Engenharia, tecnologia e compromisso com o desenvolvimento urbano.*