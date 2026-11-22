# EMPINA BR

Jogo 3D de grau (wheelie), corte (stoppie) e manobras de moto, com modo online gratuito.
Feito em Three.js + Vite, empacotado para Android com Capacitor.

## Motos
Grátis desde o início: **CB 300F Twister 2026, Pop 110i 2027, R15 ABS, PCX 160 2025, Scooter Elétrica E-Volt S**.
Para comprar com dinheiro do jogo: CG 160 Titan, CG 160 Fan, Biz 125, NXR 160 Bros, NMax 160, Fazer FZ25, Lander 250, XRE 300 Sahara, MT-03.
Cada moto tem pintura, rodas, capacete e jaqueta personalizáveis e 3 upgrades (motor, relação, freios).

## Controles
| Celular | PC | Ação |
|---|---|---|
| Slider ACEL. (direita) | W / ↑ | Acelerador (quanto mais alto, mais acelera) |
| EMBR. (segura e solta) | Espaço | Embreagem: segura acelerando e solta pra dar o tranco e levantar |
| ▲ / ▼ | E / Q | Marchas (câmbio manual; dá pra pôr automático nas Configurações) |
| FREIO | S / ↓ | Freio traseiro: baixa a frente no grau |
| FREIO DIANT. | F | Freio dianteiro: corte (stoppie) com transferência de peso; dose a pressão |
| SEM MÃO / SUPERMAN / SURF | 1 / 2 / 3 | Manobras (aparecem só empinando ou no ar) |
| Pad DIREÇÃO | A / D | Direção (ou inclinar o celular) |
| 📻 | M | Rádio: Baile Funk → Pagodão Baiano → desligada |
| 🎥 / ↺ / ❚❚ | C / R / Esc | Câmera / voltar pra pista / pausa |

**Física real:** motor com curva de torque, 4 a 6 marchas e embreagem com volante (tranco). O ponto de equilíbrio é real: puxando demais, a rabeta raspa no asfalto soltando faísca (RASPÃO) e, se insistir, a moto vira pra trás. Scooter não tem embreagem: segura o freio, acelera e solta. Na elétrica, BOOST.
No ar: acelerar gira pra trás (mortal), frear gira pra frente.

## Rádio
As músicas de Funk e Pagodão são **geradas por síntese em tempo real** (sem samples nem músicas de terceiros), então são 100% livres.

## Desempenho
Detecta a GPU (Mali, Adreno, Intel, NVIDIA etc.), escolhe o preset e ajusta a resolução sozinho para manter 60 fps.

## Online
Menu → ONLINE. "Sala pública" junta todo mundo que entrar; "Criar sala privada" gera um código para passar aos amigos.
Usa o servidor público gratuito do PeerJS só para apresentar os jogadores; o jogo em si vai direto entre os aparelhos (WebRTC).

## Desenvolvimento
```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # gera dist/
npx cap sync android # copia dist/ para o projeto Android
cd android && ./gradlew assembleRelease   # APK em android/app/build/outputs/apk/release/
```
Requer JDK 21 e Android SDK 35 (`android/local.properties` aponta o SDK).
