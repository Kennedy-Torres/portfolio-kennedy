# Portfólio Web - Kennedy Torres

Este é o repositório do meu portfólio pessoal, desenvolvido para demonstrar meus projetos práticos, arquiteturas construídas e domínio de boas práticas de engenharia de software.

## 🚀 Tecnologias Utilizadas

* **Frontend:** React + TypeScript
* **Build Tool:** Vite
* **Estilização:** Tailwind CSS (v4)
* **Hospedagem:** GitHub Pages (via GitHub Actions)

## 📁 Estrutura de Pastas

A arquitetura do projeto foi planejada para isolar as responsabilidades visuais, lógicas e os dados estáticos:

```text
src/
├── assets/             # Imagens, logotipos e mídias visuais
├── components/         # Componentes menores e reutilizáveis (botões, cards, etc.)
├── data/               # Arquivos de dados estáticos (JSON para os projetos)
├── sections/           # Grandes blocos de conteúdo da página (Hero, Projetos, Contato)
├── App.tsx             # Componente principal que orquestra as seções
├── main.tsx            # Ponto de entrada do React
└── index.css           # CSS global com a injeção do Tailwind CSS
```

## ⚙️ Preparação do Ambiente (Setup Inicial)

Para clonar e rodar este projeto localmente, siga os passos abaixo:

### 1. Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### 2. Instalação
Clone o repositório e instale as dependências:

```bash
# Clone o repositório
git clone [https://github.com/SEU-USUARIO/portfolio-kennedy.git](https://github.com/SEU-USUARIO/portfolio-kennedy.git)

# Entre na pasta do projeto
cd portfolio-kennedy

# Instale as dependências
npm install
```

### 3. Executando o Servidor de Desenvolvimento
Para iniciar a aplicação localmente:

```bash
npm run dev

O servidor iniciará, geralmente no endereço http://localhost:5173/