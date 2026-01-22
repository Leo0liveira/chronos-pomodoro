# Chronos Pomodoro

Um aplicativo de timer Pomodoro moderno e personalizável, desenvolvido com React, TypeScript e Vite. Ajuda a gerenciar ciclos de foco e descanso para aumentar a produtividade, seguindo a técnica Pomodoro.

## 🚀 Funcionalidades

- **Timer Personalizável**: Configure tempos de foco, descanso curto e descanso longo.
- **Ciclos Visuais**: Visualize os ciclos concluídos com indicadores coloridos.
- **Histórico**: Acompanhe todas as tarefas realizadas, com status e datas.
- **Temas**: Suporte a temas claro e escuro.
- **Notificações**: Alertas sonoros ao final de cada ciclo.
- **Persistência**: Dados salvos no localStorage.
- **Responsivo**: Interface adaptável para diferentes dispositivos.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 19, TypeScript, Vite
- **Roteamento**: React Router
- **Estilização**: CSS Modules com variáveis CSS para temas
- **Ícones**: Lucide React
- **Notificações**: React Toastify
- **Datas**: date-fns
- **Workers**: Web Workers para o timer em background
- **Linting**: ESLint com regras para React e TypeScript
- **Formatação**: Prettier

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/chronos-pomodoro.git
   cd chronos-pomodoro
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra [http://localhost:5173](http://localhost:5173) no navegador.

## 🎯 Como Usar

1. **Página Inicial**: Inicie uma nova tarefa digitando o nome e clicando em "Iniciar".
2. **Configurações**: Personalize os tempos de foco e descanso em `/settings/`.
3. **Histórico**: Visualize tarefas passadas em `/history/`.
4. **Sobre**: Saiba mais sobre a técnica Pomodoro em `/about-pomodoro/`.
5. **Temas**: Alterne entre claro e escuro no menu.

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run lint`: Executa o linting do código.
- `npm run preview`: Visualiza a build de produção localmente.

## 📁 Estrutura do Projeto

```
src/
├── adapters/          # Adaptadores (ex: notificações)
├── assets/            # Recursos estáticos (áudios, imagens)
├── components/        # Componentes reutilizáveis
├── contexts/          # Contextos React (TaskContext)
├── models/            # Modelos de dados TypeScript
├── pages/             # Páginas da aplicação
├── routers/           # Configuração de rotas
├── styles/            # Estilos globais e temas
├── templates/         # Templates de layout
├── utils/             # Funções utilitárias
└── workers/           # Web Workers para timer
```

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Fork o projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com 💚 para produtividade máxima!