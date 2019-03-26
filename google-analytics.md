# Google Analytics

Google Analytics code with anonymized IP:

```
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-xxxxxxxx-xx"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-xxxxxxxx-xx', { 'anonymize_ip': true }); 
</script>
```

---

[Peter R. Stuhlmann Webentwicklung](https://peter-stuhlmann-webentwicklung.de)