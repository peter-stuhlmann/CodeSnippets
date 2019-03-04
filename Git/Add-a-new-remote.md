# Add a new remote

Make sure that you are in the repository containing the content you want to push into a new repository.

**(1) Remote add**
```
$ git remote add <NewRemoteName> <NewRemoteUrl>
```

**(2) Fetch**
```
$ git fetch <NewRemoteName>
```

**(3) Push**
```
$ git push <NewRemoteName> master --force
```

**Attention!** ```--force``` completely deletes the history of the destination repository if there is any. Only the history of the new remote remains.

---

[&copy; Peter R. Stuhlmann Webentwicklung](https://peter-stuhlmann-webentwicklung.de)