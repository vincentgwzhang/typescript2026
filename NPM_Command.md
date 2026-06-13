* npm outdated

```ts
npm outdated
```

* 保守：只升到 semver 允许的范围
```ts
npm update
npm install   # 确保 lock 一致
```

* Upgrade
```ts
# 只改 package.json 里的版本号, 不装包、不改 node_modules、不改 package-lock.json
Run npx npm-check-updates -u to upgrade package.json

# 按新的 package.json 下载依赖，更新 node_modules 和 package-lock.json
npm install
```