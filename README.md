# 🎀 Hello Kitty - Plataforma P5.js

Um frontend interativo sobre **Hello Kitty** criado com **p5.js**, apresentando informações detalhadas sobre a personagem mais adorável do mundo!

## 📋 Sobre o Projeto

Este projeto é uma plataforma educativa e interativa que apresenta informações sobre Hello Kitty de forma visual e divertida, utilizando a biblioteca p5.js para criar animações e gráficos.

### ✨ Características

- **Animações Interativas**: 3 tipos diferentes de animações
  - 🎀 Pose com laço (padrão)
  - 👋 Acenando para você
  - 💃 Dançando animadamente

- **Informações Completas**: Seção com dados sobre Hello Kitty
  - Nome completo
  - Data de criação
  - Designer e empresa
  - Características principais
  - Curiosidades interessantes

- **Design Responsivo**: Interface que se adapta a diferentes tamanhos de tela

- **Interatividade**: Acompanhe o cursor do mouse com a animação!

## 🚀 Como Usar

1. **Abra o arquivo HTML** em seu navegador:
   ```
   index.html
   ```

2. **Interaja com a animação**:
   - Mova o mouse sobre a área de desenho
   - Clique no botão "Mudar Animação" para ver diferentes poses

3. **Explore as informações**: Leia sobre Hello Kitty na barra lateral

## 📁 Estrutura do Projeto

```
kitty/
├── index.html      # Arquivo principal HTML
├── style.css       # Estilos e layout
├── sketch.js       # Animações com p5.js
└── README.md       # Este arquivo
```

## 🎨 Detalhes Técnicos

### Tecnologias Utilizadas
- **HTML5**: Estrutura da página
- **CSS3**: Estilo e responsividade
- **p5.js**: Biblioteca para gráficos e animações
- **JavaScript**: Lógica interativa

### Animações

#### 1. **Pose com Laço** (`bow`)
- Hello Kitty em sua pose clássica
- Laço vermelho flutuando levemente
- Expressão amigável

#### 2. **Acenando** (`waving`)
- Hello Kitty com um dos braços acenando
- Movimento suave e contínuo
- Pose interativa

#### 3. **Dançando** (`dancing`)
- Hello Kitty em movimento de dança
- Corpo oscilando
- Braços e pernas em movimento sincronizado

## 📚 Informações sobre Hello Kitty

### Dados Principais
- **Nome Completo**: Kitty White
- **Criação**: 1974
- **Designer**: Yuko Shimizu
- **Empresa**: Sanrio (Japão)
- **Localização**: Arredores de Londres, Inglaterra

### Características Únicas
- Apesar da aparência felina, é uma menina humana!
- Seu acessório característico é um laço vermelho
- Personalidade doce, amigável e positiva
- Uma das personagens mais famosas do mundo
- Ícone da cultura pop japonesa

## 🎮 Funcionalidades Interativas

### Movimento do Mouse
A animação segue seu cursor automaticamente, criando uma experiência imersiva!

### Botão de Animação
Clique no botão "🎬 Mudar Animação" para alternar entre os três tipos de animação disponíveis.

### Responsividade
O canvas se redimensiona automaticamente quando a janela do navegador é redimensionada.

## 🌐 Deployment

Para colocar este projeto online, você pode usar:

- **GitHub Pages**: Configure nas configurações do repositório
- **Vercel**: Deploy automático via GitHub
- **Netlify**: Conecte seu repositório
- **Servidor Apache/Nginx**: Hospede os arquivos estáticos

### Configurar GitHub Pages

1. Vá até as configurações do repositório
2. Navegue até "Pages"
3. Selecione a branch `main` como fonte
4. Salve e aguarde o deploy

Seu projeto estará disponível em: `https://clarasantanalima-blip.github.io/kitty/`

## 🔧 Customizações

Você pode personalizar o projeto modificando:

- **Cores**: Altere as variáveis CSS em `:root` em `style.css`
- **Tamanho da animação**: Modifique os valores de `circle()` e `rect()` em `sketch.js`
- **Velocidade das animações**: Ajuste o valor de incremento de `t` em `sketch.js`
- **Textos e informações**: Edite o conteúdo em `index.html`

## 📝 Exemplo de Customização

```javascript
// Em sketch.js, altere a velocidade da animação:
t += 0.02;  // Aumente ou diminua este valor
```

```css
/* Em style.css, altere as cores principais: */
--primary-color: #ff69b4;      /* Rosa Pink */
--accent-color: #ff1493;       /* Rosa escuro */
```

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tem ideias para melhorar o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ✅ Melhorias Futuras

- [ ] Adicionar mais animações e poses
- [ ] Sistema de temas (claro/escuro)
- [ ] Galeria de imagens de Hello Kitty
- [ ] Quiz interativo sobre a personagem
- [ ] Integração com API para mais informações
- [ ] Som e efeitos sonoros
- [ ] Versão em múltiplos idiomas

## 📄 Licença

© 1974-2026 **Sanrio Co., Ltd.**

Este projeto é um trabalho não oficial criado para fins educacionais. Hello Kitty e todos os relacionados são marcas registradas da Sanrio.

## 📞 Contato

Para dúvidas ou sugestões sobre este projeto:
- Abra uma issue no repositório
- Entre em contato com o criador

---

**Desenvolvido com ❤️ e p5.js**

🎀 Aproveite e divirta-se explorando Hello Kitty! 🎀
