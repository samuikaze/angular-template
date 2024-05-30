<!-- markdownlint-disable MD028 -->

# Angular Template

這是一個 Angular 13 + Bootstrap 5.2.1 的模板專案，用於快速起始新的專案用

> 如需使用不同版本的模板，請透過分支切換

> 請注意，13 版的容器化部署還未經過測試，此版本目前僅將先前建立的 Angular 13 模板合併過來

## 相關功能啟用說明

由於不是所有的功能都需要每次都啟用，因此部分功能是以註解的方式先行註解掉，有需要再打開註解進行注入與設定即可

### 麵包屑

如需啟用麵包屑相關功能，依據下列順序啟功此功能:

- 打開 `app.component.html` 並打開 `<app-navigator></app-navigator>` 的註解
- 於各 Components 的 ts 檔注入 `BreadcrumbService`，並新增以 `Breadcrumb` 為型別的 breadcrumb 屬性
- 於 `ngOnInit()` 進行 `BreadcrumbService` 中相關方法的呼叫

### 表單雙向綁定

如需表單雙向綁定相關功能，打開 `app.module.ts`，並打開 `FormsModule` 模組的注入後即可使用
