# 前言

Framework7 的 Router 用 react-router 取代。 Framework7 只做介面的部分，也就是只取其 CSS 跟 JS 的部分，只是想要模仿手機介面，但主體架構還是 React ，之後想辦法讓電腦版的程式也能重複利用這些 React 元件。

# 程式架構

請參考：

- [https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [https://github.com/reactjs/redux/tree/master/examples/real-world](https://github.com/reactjs/redux/tree/master/examples/real-world)

## User Authentication and Authorization

### Authentication

這部分用 react-router 的 onEnter 來做。

### Authorization

> 每一個有限制角色的 Route 也都要在 onEnter 的地方，事先擋掉「完全」不能使用的角色？
>
> Ans: 這部分可以，但是考慮到現在好像沒有這樣的需求，而且實作起來又有點太細了，所以先暫時不實作。

使用者角色區別的部分，因為會影響到頁面吐元件的邏輯，比方說管理員跟一般專案成員看到的頁面不一樣，所以直接在 React 元件裡面做判斷。

以一張標單來說，每個角色都可以看到標單的內容，但只有部分角色可以新增、刪除。這樣的狀況下，會有一個 Container 元件來拉出標單資料，然後判斷角色是否需要那些新增或刪除的按鈕，最後吐出一個 Component 元件，該 Component 元件會接到來自 Container 元件的 `props` 來判斷是否吐出新增、刪除按鈕，又因為新增、刪除的這類按鈕，牽涉到與後端溝通，所以新增、刪除歸類在 Container 元件。

### 在 Redux Store 中的資料結構

```json
{
  // ... 一些其它資料結構

  // Authentication, Authorization 相關資料結構
  authToken: '',
  currentUserId: '',

  users: {
    '1': {
      id: '1',
      username: 'blabla',
      roleId: '1'
    }
  },

  roles: {
    '1': {
      id: '1',
      roleName: 'admin',
      permissionIds: ['1', '2']
    }
  },

  permissions: {
    '1': {
      id: '1',
      permissionName: 'create_project'
    },
    '2': {
      id: '2',
      permissionName: 'add_project_member'
    }
  }
}
```

# 安裝說明

待續...

# 第三方套件說明

## Webpack

前端必備打包工具

## Babel

用了使用 ES6 ， BJ4 。

## react-redux

不想解釋

## react-router

再叫我解釋我要殺人了

## react-router-redux

這個套件主要是要將 react-router 的資訊，同步存到 Redux 。

## redux-thunk

可以處理好不同 Action 之間的衝突問題。
