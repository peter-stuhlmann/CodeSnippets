# Blocking the right click

**Block the right click.**

```
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('img').addEventListener('contextmenu', function (e) {
    e.preventDefault();
  }, false);
});
```
---

[Peter R. Stuhlmann Webentwicklung](https://peter-stuhlmann-webentwicklung.de)