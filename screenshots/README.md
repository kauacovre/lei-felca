# Como Adicionar as Prints de Cada Tutorial

Todos os 5 tutoriais do site já contam com espaços reservados para receber os seus prints em cada etapa. Para adicioná-las:

### 1. Estrutura Recomendada de Pastas
Salve suas capturas em subpastas organizadas dentro de `public/screenshots/`:
- **Windows**: `public/screenshots/windows/passo-1.png` a `passo-6.png`
- **Roblox**: `public/screenshots/roblox/passo-1.png` a `passo-6.png`
- **YouTube**: `public/screenshots/youtube/passo-1.png` a `passo-6.png`
- **Android**: `public/screenshots/android/passo-1.png` a `passo-6.png`
- **iOS**: `public/screenshots/ios/passo-1.png` a `passo-6.png`

### 2. Ativação no Código
Abra o arquivo [src/data/tutorials.js](file:///c:/git/lei-felca/src/data/tutorials.js) e insira o caminho da imagem no campo `url` do passo correspondente:
```javascript
screenshots: [
  {
    url: "/screenshots/windows/passo-1.png",
    caption: "Página inicial do Microsoft Family Safety com a conta de responsável conectada."
  }
]
```

### 3. Exibição Automática
- Enquanto o campo `url` estiver vazio (`""`), a plataforma exibirá o **cartão reservado para print** com bordas pontilhadas, ícone de câmera e orientações.
- Ao preencher o caminho, o sistema exibirá a captura com alta definição, legenda e suporte a **zoom em tela cheia (lightbox)** ao clicar!
