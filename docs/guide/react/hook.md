# Hooks的理解？解决了什么问题？

Hooks让我们的函数组件拥有了类组件的特性，例如组件内的状态、生命周期

- 难以重用和共享组件中的与状态相关的逻辑
- 逻辑复杂的组件难以开发与维护，当我们的组件需要处理多个互不相关的 local state 时，每个生命周期函数中可能会包含着各种互不相关的逻辑在里面
- 类组件中的this增加学习成本，类组件在基于现有工具的优化上存在些许问题
- 由于业务变动，函数组件不得不改为类组件等等

## 常用的Hooks

- useState：用于在函数组件中声明和使用状态。
- useEffect：用于在函数组件中执行副作用操作，例如：数据获取、订阅、事件监听等。
- useContext：用于在函数组件中使用上下文对象。
- useReducer：类似于 Redux 的 reducer，用于在函数组件中管理组件本地状态。
- useCallback：用于在函数组件中缓存回调函数。
- useMemo：用于在函数组件中缓存计算结果。
- useRef：用于在函数组件中创建可变的引用。通常用于获取子组件或者 DOM 节点的引用。
- useImperativeHandle：用于在函数组件中自定义暴露给父组件的实例值。
- useLayoutEffect：类似于 useEffect，但是会在所有的 DOM 变更之后同步调用 effect。
- useDebugValue：用于在开发者工具中显示自定义 Hook 的标签。

### useState

```jsx
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

react函数组件中使用useState改变值后立刻获取最新值，我们可以使用useEffect来监听值的变化，或者

```
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => {
      console.log(prevCount); // 这里打印的 prevCount 是旧的值
      const newCount = prevCount + 1;
      console.log(newCount); // 这里打印的 newCount 是新的值
      return newCount;
    });
  };

  return (
    <button onClick={handleClick}>
      Click me: {count}
    </button>
  );
}

export default MyComponent;
```

### useEffect

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // 类似于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```