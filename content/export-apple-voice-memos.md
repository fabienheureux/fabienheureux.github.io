+++
title = "Exporter tous vos enregistrements du Dictaphone Apple en une seule fois"
date = 2025-12-11
description = "Le Dictaphone d'Apple n'a pas de bouton \"tout exporter\". Voici une ligne de commande pour tout sauvegarder."
[taxonomies]
tags=["til", "macos", "code"]
+++


## Configuration initiale

Accordez l'accès au Dictaphone à votre application Terminal :

1. Ouvrez **Réglages Système** → **Confidentialité et sécurité** → **Accès complet au disque**
2. Cliquez sur le bouton **+**
3. Ajoutez votre application Terminal (Terminal.app, iTerm.app, etc.)
4. **Redémarrez votre terminal** complètement

Vous n'avez à le faire qu'une seule fois.

## Exporter vos enregistrements

**⚠️ Note de sécurité :** Exécuter des scripts directement depuis Internet sans les avoir examinés est risqué. Consultez toujours [le script](https://gist.github.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402) avant de l'exécuter, ou téléchargez-le localement d'abord.

**Commande rapide** (crée un dossier `AllVoiceMemos` dans votre répertoire courant) :

```bash
curl -s https://gist.githubusercontent.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402/raw | bash
```

**Exporter vers un dossier spécifique :**

```bash
curl -s https://gist.githubusercontent.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402/raw | bash -s ~/Desktop/MesMemos
```

**Note :** Si votre chemin contient des espaces, mettez-le entre guillemets :
```bash
curl -s https://gist.githubusercontent.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402/raw | bash -s "/chemin/avec espaces/MesMemos"
```

**Préfixer avec la date d'enregistrement** (crée des noms comme `2024-12-11 Notes de réunion.m4a`) :

```bash
curl -s https://gist.githubusercontent.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402/raw | bash -s -- --prepend-date
```

Ou avec un dossier personnalisé :

```bash
curl -s https://gist.githubusercontent.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402/raw | bash -s -- --prepend-date ~/Desktop/MesMemos
```

**Ce que fait le script :**
- Lit votre base de données Dictaphone
- Copie tous les fichiers `.m4a` avec leurs noms d'origine
- Préserve les dates d'enregistrement

[Voir le script →](https://gist.github.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402)

## Sauvegardes automatiques quotidiennes

Vous voulez sauvegarder vos enregistrements automatiquement chaque jour ? Configurez une tâche cron :

```bash
# Téléchargez le script
curl -o ~/export_voice_memos.sh https://gist.githubusercontent.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402/raw
chmod +x ~/export_voice_memos.sh

# Éditez votre crontab
crontab -e
```

Puis ajoutez cette ligne pour l'exécuter quotidiennement à 2h du matin :

```
0 2 * * * ~/export_voice_memos.sh ~/Documents/SauvegardeMemos
```

Ou avec les préfixes de date :

```
0 2 * * * ~/export_voice_memos.sh --prepend-date ~/Documents/SauvegardeMemos
```

C'est tout !

---

**Gist:** [export_voice_memos.sh](https://gist.github.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402)

**Référence :** [Discussion originale sur la communauté Apple](https://discussions.apple.com/thread/253230259)
