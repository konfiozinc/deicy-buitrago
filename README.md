# Deicy Yolima Buitrago Arismendy — Tarjeta Digital

Tarjeta digital profesional de **Deicy Buitrago**, Administradora de Propiedad
Horizontal. Centraliza canales de atención, servicios/trámites, horarios, portal
de autogestión **Aplicamos**, emergencias (portería 24/7) y galería de avisos.

- **WhatsApp / celular:** +57 305 485 5538
- **Línea fija:** 604 444 5636
- **WhatsApp línea amiga (escombros):** +57 304 403 7188
- **Portal Aplicamos:** https://portal.aplicamos.co/login

## 🧱 Estructura

```
Deicy Buitrago/
├── index.html                 ← tarjeta (HTML + CSS + JS inline)
├── manifest.json              ← PWA
├── service-worker.js          ← caché offline
├── data/
│   ├── configuracion.json     ← datos de identidad, contacto, horario, portal
│   └── servicios.json         ← 8 servicios/trámites
├── assets/
│   ├── logo/                  ← logo-deicy.png, icon-192/512, original jpeg
│   └── galeria/aviso-01..12   ← 12 avisos informativos (pendientes de mapeo)
├── index.backup.html          ← respaldo del index anterior
└── _backup/                   ← styles.css y scripts.js anteriores
```

## 🖼️ Galería de avisos — mapeo completado ✅

`aviso-01.png` era el logo (se movió a `assets/logo/logo-institucional.png`).
La galería muestra los 11 avisos restantes:

| Archivo | Título | Texto explicativo |
|---|---|---|
| aviso-02.png | Recordatorio de fechas de pago | Ciclos de pago y documentos requeridos |
| aviso-03.png | Normas de remodelación | Reglas y permisos para obras en el apartamento |
| aviso-04.png | Residuos especiales | Cómo desechar colchones, muebles, madera, icopor y escombros |
| aviso-05.png | Canales de atención | WhatsApp, llamadas, correo y autogestión en línea |
| aviso-06.png | Solicitud de documentos | Paz y salvo, certificados, facturas y cobros (3 días hábiles) |
| aviso-07.png | Trasteos y mudanzas | Requisitos, depósito 10 SMDLV y horarios autorizados |
| aviso-08.png | Reserva salón social | Cómo reservar el salón social por el portal Aplicamos |
| aviso-09.png | Tutorial Aplicamos | Guía paso a paso para ingresar al portal |
| aviso-10.png | Vista previa de servicios | Captura del menú con dos servicios |
| aviso-11.png | Lista de servicios | Captura completa de los servicios de la app |
| aviso-12.png | Banner motivacional | “La vida es como un espejo” · foto de Deicy |

## 🎨 Marca

- Azul marino `#1A2B5C` · Morado `#6B4E9E` · Dorado `#C9A84C` · Fondo `#FAFBFF`.
- Tipografías: Playfair Display (títulos) + Inter (cuerpo).

## 🚀 Publicar

Sube **todo** el contenido a la raíz del repositorio y activa GitHub Pages
(`main` / root). La PWA requiere HTTPS.
