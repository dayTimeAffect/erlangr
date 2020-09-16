# erlangr

## 引言
虽然`lodash`已经包含了日常业务开发的常用函数，并且十分完善，但是在日常开发中，由于`lodash`中函数太多，这反而导致了使用不变。于是便自己封装了这个函数库，只存放解决常见业务逻辑的函数，优化代码，部分函数参考`lodash`

## installation
```
yarn add erlangr --save
npm i erlangr --save
```
vue
```javascript
import er from 'erlangr'
Vue.prototype.er = er
```
