# Projektbeschrieb
Es gibt eine "home", eine "Profile" und eine "Search" Seite. Profile und Home sind unfertig.

Profile zeigt den Namen des jeweiligen Interpreten an. Diesen erhält Sie als dynamischen Parameter aus der URL.


Die Suche im Header wird nur angezeigt, wenn man sich auf /search befindet. Die Ausführung von `SearchBandsEffect.js` wird künstlich verlangsamt, um den Spinner zu Zeigen.
Über `aria-live="polite"` werden Screenreader darüber in Kenntnis gesetzt, wenn sich der Inhalt ändert (z.B. wenn die Bands geladen sind).
In `SearchBands.js` auf Zeile 18 wird sichergestellt, dass alle Bands eine Biographie haben (verhindert Crash).

`SearchBandsEffect.js` basiert auf folgendem Tutorial: https://lukstei.com/2019-10-27-doing-asynchronous-calls-using-react-hooks/