# 🧠 Niva Routine Templates

Ein Open-Source-Repository für strukturierte Routinen, die mit Niva verwendet werden können.

## 💡 Idee
Dieses Projekt ermöglicht die Erstellung, Pflege und gemeinsame Weiterentwicklung von Routinen für Alltag, Selbstfürsorge und Strukturaufbau. Die Routinen sind im JSON-Format beschrieben und können einfach erweitert, angepasst und geteilt werden.

## 📐 Format
Alle Routinen folgen dem Schema [`routine-schema.json`](./routine-schema.json) und bestehen aus:

- einer optionalen **Setup-Phase** (zur Parametrierung)
- einer oder mehreren **Phasen** mit Bedingungen
- **Steps** pro Phase (z. B. Aufgaben, Reflexionen, Nachrichten)
- optionalen **Triggern** (z. B. Belohnung, Folgeaufgabe)

## 📦 Beispiel
Siehe [`examples/morning-planning-routine.json`](./examples/morning-planning-routine.json) für eine vollständige Beispielroutine mit:
- Meditation
- Tagesplanung
- Aufgabenfreischaltung (z. B. Frühstück vorbereiten)

## 🛠 Mitmachen
- Neue Routinen kannst du einfach per Pull Request beitragen.
- Achte darauf, das Schema einzuhalten (siehe [JSON Schema](./routine-schema.json))

## 📝 Lizenz
- Inhalte (Routinen): **CC BY-SA 4.0**
- Code, Tools, Schema: **MIT License**

## 🌍 Ziel
Ein wachsendes, gemeinschaftliches Routinen-Ökosystem, das Menschen hilft, ihr Leben achtsam und strukturiert zu gestalten – neurodiversitätssensibel, offen und menschlich.
