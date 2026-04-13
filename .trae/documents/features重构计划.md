# 首页 Features Section 重构计划

## 目标
将首页 `src/sections/Features.tsx` 的 4 个 feature card 重构为突出以下四个核心特点：
1. **最强大的薪酬计算引擎** - 一键完成复杂薪酬计算
2. **薪酬和福利的保险集成** - 薪资与保险无缝对接
3. **强大的低代码平台** - 灵活配置，无需编码
4. **全部是 AI Native** - 从头构建的 AI 原生架构

## 实施步骤

### 1. 修改 Features Section 组件
**文件**: `app/src/sections/Features.tsx`

更新内容：
- 更新图标映射（使用 Calculator, Shield, Code, Brain）
- 更新 feature 列表为新的 4 个核心特点
- 保持现有的动画效果和布局

### 2. 更新国际化文本
**文件**:
- `app/src/i18n/locales/en.json` - 更新 `features.items` 部分
- `app/src/i18n/locales/zh.json` - 更新 `features.items` 部分

## 新的 Features 内容

### English (en.json)
```json
"salaryEngine": {
  "title": "Most Powerful Salary Engine",
  "description": "One-click complex salary calculations with multi-country support and built-in tax optimization."
},
"insuranceIntegration": {
  "title": "Benefits & Insurance Integration",
  "description": "Seamless integration with global insurance providers. Automatic deductions and contributions."
},
"lowCodePlatform": {
  "title": "Powerful Low-Code Platform",
  "description": "Build custom workflows and forms without code. Visual builder for any HR process."
},
"aiNative": {
  "title": "100% AI Native",
  "description": "Built from the ground up with AI. Predictive analytics and intelligent automation everywhere."
}
```

### 中文 (zh.json)
```json
"salaryEngine": {
  "title": "最强薪酬计算引擎",
  "description": "一键完成复杂薪资计算，支持多国薪资体系，内置税务优化。"
},
"insuranceIntegration": {
  "title": "薪酬福利保险集成",
  "description": "与全球保险供应商无缝集成，自动扣款和缴款。"
},
"lowCodePlatform": {
  "title": "强大低代码平台",
  "description": "无需代码即可构建自定义工作流和表单。任何HR流程都可视化构建。"
},
"aiNative": {
  "title": "全AI原生架构",
  "description": "从底层构建的AI架构，每个模块都有预测分析和智能自动化。"
}
```

## 修改文件清单
1. `app/src/sections/Features.tsx` - 更新图标和 feature keys
2. `app/src/i18n/locales/en.json` - 更新 features.items 内容
3. `app/src/i18n/locales/zh.json` - 更新 features.items 内容
