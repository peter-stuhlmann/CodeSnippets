# Youtube-dl

**Youtube-dl installieren**  
```$ sudo apt-get install youtube-dl```

**Youtube-Video herunterladen:**  
```$ youtube-dl <Video-URL>```

**Mehrere Videos downloaden**  
_Alle Links in eine txt-Datei speichern (je Zeile ein Videolink)_  
```youtube-dl -c --title --batch-file='<Pfad zur txt-Datei>.txt```

**Audio-Spur eines Videos oder einer Playlist herunterladen**  
```$ youtube-dl --extract-audio --audio-format mp3 -o "%(title)s.%(ext)s" <Video-URL>```