# 💳 NextBank

Projeto de um banco digital desenvolvido com **Next.js v12** e **Material UI v5**.

---

## 🚀 Tecnologias Utilizadas

- [Next.js v12](https://nextjs.org/)
- [React v17](https://reactjs.org/)
- [Material UI v5](https://mui.com/)
- [Node.js](https://nodejs.org/)
- API pública `jsonplaceholder.typicode.com` para simulação de posts

---

## 🔧 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nextbank.git
   cd nextbank

---

## 📄 Páginas

- `/` → Página inicial com seções institucionais e destaques
- `/blogs` → Lista de posts vindos da API externa
- `/blogs/[slug]` → Página de post individual dinâmica

---

## 🧠 Observações
- A configuração de desenvolvimento foi otimizada para **ambientes Windows**, evitando erros como `EMFILE`.
- Compatível com **React 17 + MUI 5**, sem necessidade do `jsx-runtime` (exclusivo do React 18).

## 📁 Estrutura de Diretórios

```plaintext
nextbank/
├── components/          # Componentes reutilizáveis
│   ├── AboutUs.js       # Seção sobre o NextBank
│   ├── CardSection.js   # Seção de cartões
│   ├── Footer.js        # Rodapé
│   ├── Header.js        # Cabeçalho e menu
│   └── Hero.js          # Seção de destaque
│
├── pages/               # Páginas principais
│   ├── index.js         # Página inicial
│   ├── blogs/           # Página de blog
│   │   └── [slug].js    # Página dinâmica de post
│
├── public/              # Imagens e arquivos públicos
│
├── styles/              # Estilos globais
│   └── globals.css      # Estilo global
│
├── utils/               # Funções utilitárias
│   └── menuLinks.js     # Links de navegação
│   └── formatSlug.js    # Formatação de URLs


