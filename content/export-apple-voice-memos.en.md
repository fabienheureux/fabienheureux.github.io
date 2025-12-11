+++
title = "Export All Your Apple Voice Memos at Once"
date = 2024-12-11
description = "Apple Voice Memos doesn't have an \"export all\" button. Here's a one-liner to back them all up."
[taxonomies]
tags=["til", "macos", "code"]
+++


## First Time Setup

Grant your Terminal app access to Voice Memos:

1. Open **System Settings** → **Privacy & Security** → **Full Disk Access**
2. Click the **+** button
3. Add your Terminal app (Terminal.app, iTerm.app, etc.)
4. **Restart your terminal** completely

You only need to do this once.

## Export Your Memos

**⚠️ Security Note:** Running scripts directly from the internet without reviewing them first is risky. Always [review the script](https://gist.github.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402) before running it, or download it locally first.

**Quick command** (creates an `AllVoiceMemos` folder in your current directory):

```bash
curl -s https://gist.githubusercontent.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402/raw | bash
```

**Export to a specific folder:**

```bash
curl -s https://gist.githubusercontent.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402/raw | bash -s ~/Desktop/MyMemos
```

**Note:** If your path has spaces, wrap it in quotes:
```bash
curl -s https://gist.githubusercontent.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402/raw | bash -s "/path/with spaces/MyMemos"
```

**Prepend recording date** to filenames (creates names like `2024-12-11 Meeting Notes.m4a`):

```bash
curl -s https://gist.githubusercontent.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402/raw | bash -s -- --prepend-date
```

Or with a custom folder:

```bash
curl -s https://gist.githubusercontent.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402/raw | bash -s -- --prepend-date ~/Desktop/MyMemos
```

**What the script does:**
- Reads your Voice Memos database
- Copies all `.m4a` files with their proper names
- Preserves the original recording dates

[See the script →](https://gist.github.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402)

## Automatic Daily Backups

Want to back up your memos automatically every day? Set up a cron job:

```bash
# Download the script
curl -o ~/export_voice_memos.sh https://gist.githubusercontent.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402/raw
chmod +x ~/export_voice_memos.sh

# Edit your crontab
crontab -e
```

Then add this line to run it daily at 2 AM:

```
0 2 * * * ~/export_voice_memos.sh ~/Documents/VoiceMemosBackup
```

Or with date prefixes:

```
0 2 * * * ~/export_voice_memos.sh --prepend-date ~/Documents/VoiceMemosBackup
```

That's it!

---

**Gist:** [export_voice_memos.sh](https://gist.github.com/fabienheureux/94e0599fe675b9b2414391e5bd00b402)

**Related:** [Original Apple Community discussion](https://discussions.apple.com/thread/253230259)
