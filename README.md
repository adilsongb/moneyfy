# Moneyfy

Bem-vindo ao **Moneyfy**! Este é um aplicativo mobile desenvolvido com **Expo** e **React Native**, focado em gerenciamento financeiro. O projeto utiliza o **Expo Router** para navegação baseada em arquivos.

## 🚀 Tecnologias

-   [React Native](https://reactnative.dev/)
-   [Expo](https://expo.dev/)
-   [Expo Router](https://docs.expo.dev/router/introduction/)
-   [TypeScript](https://www.typescriptlang.org/)

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

-   [Node.js](https://nodejs.org/) (recomendado versão LTS)
-   [Yarn](https://yarnpkg.com/) ou npm
-   [Git](https://git-scm.com/)

Recomendado para builds na nuvem:
-   [EAS CLI](https://github.com/expo/eas-cli): `npm install -g eas-cli`

## 📦 Instalação

1.  Clone o repositório:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd moneyfy
    ```

2.  Instale as dependências:
    ```bash
    yarn install
    # ou
    npm install
    ```

## 🏃‍♂️ Rodando Localmente (Desenvolvimento)

Para iniciar o servidor de desenvolvimento:

```bash
yarn start
# ou
npx expo start
```

Dica: Você pode limpar o cache se tiver problemas: `npx expo start -c`.

### Opções de Execução:
-   **Expo Go**: Escaneie o QR Code exibido no terminal com o app Expo Go (Android/iOS).
-   **Emulador Android**: Pressione `a` no terminal (requer Android Studio configurado).
-   **Simulador iOS**: Pressione `i` no terminal (requer Xcode/macOS).
-   **Web**: Pressione `w` no terminal.

## 🏗️ Build e Deploy com EAS

Este projeto está configurado para usar o **EAS Build** (`eas.json`).

### 1. Build de Desenvolvimento (Development Build)
Ideal para testar bibliotecas nativas que não são suportadas no Expo Go padrão.

```bash
eas build --profile development --platform android
# ou
eas build --profile development --platform ios
```
Após o build, instale o APK/App no seu dispositivo ou emulador. Aponte o servidor de desenvolvimento (`yarn start`) para este build customizado.

### 2. Build de Preview (Internal Distribution)
Para compartilhar com testadores internos sem publicar na loja.

```bash
eas build --profile preview --platform android
# ou
eas build --profile preview --platform ios
```

### 3. Build de Produção (Loja)
Para gerar os binários finais (.aab para Play Store, .ipa para App Store).

```bash
eas build --profile production --platform android
# ou
eas build --profile production --platform ios
```

---

## 📂 Estrutura de Pastas

-   **app/**: Contém as rotas e telas da aplicação (File-based routing).
-   **assets/**: Imagens, fontes e outros arquivos estáticos.
-   **components/**: Componentes reutilizáveis da UI.
-   **constants/**: Constantes globais (cores, configurações).
-   **utils/**: Funções utilitárias.
