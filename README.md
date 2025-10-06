# 🚗 108CarCustoms

Website oficial da **108CarCustoms**, uma empresa especializada em **personalização automóvel premium**, com serviços de **iluminação LED, áudio personalizado, integração CarPlay/Android Auto, importação e manutenção automóvel**.

Desenvolvido em **React + TailwindCSS**, com animações suaves e estrutura otimizada para performance.

---

## 🔧 Tecnologias Utilizadas

- **React** (Vite ou CRA, conforme setup)
- **React Router DOM** — navegação SPA
- **Tailwind CSS** — estilização rápida e responsiva
- **Lucide React** — ícones SVG otimizados
- **Framer Motion / AnimateOnScroll** — animações de entrada suaves
- **Componentização reutilizável** com `ServiceCard`, `CallToAction`, etc.

---

## ⚡ Funcionalidades

- **Hero Section** — imagem de fundo fullscreen com call-to-action.
- **Sobre Nós** — apresentação da empresa e diferenciais.
- **Serviços** — cards animados com ícones e imagens dinâmicas.
- **Chamada para Ação (CTA)** — incentiva o contacto e orçamentos.
- **Design Responsivo** — adaptável a mobile, tablet e desktop.

---

## 🚀 Como Correr Localmente

### 1️⃣ Clona o repositório

```bash
git clone https://github.com/Goncalves1307/108CarCustom.git
cd 108customs
```

2️⃣ Instala as dependências
```bash
npm install
```

3️⃣ Inicia o servidor de desenvolvimento
```bash
npm run dev
```
Depois abre o browser em http://localhost:5173 (ou porta definida).

⸻

🧩 Personalização

Podes editar os serviços diretamente no array services dentro de
src/pages/HomePage.tsx:

const services = [
  {
    id: "interior",
    title: "Iluminação Personalizada",
    description: "Transforma o teu veículo...",
    icon: <Lightbulb size={24} />,
    imageUrl: "/108Customs/gti.jpg",
  },
  ...
];

Imagens ficam em /public/108Customs/.

⸻

📸 Preview

![Screenshot do site](./public/108CarCustoms.png)


⸻

📄 Licença

Não é permitida a cópia, redistribuição ou uso comercial sem autorização.
