# tree节点状态

## 给定树状结构及被选中的叶子节点数组，计算出每一个节点的选中状态，status 定义为 0: 所有子节点均未被选中、1: 同时存在被选中的子节点和未被选中的子节点、2: 所有子节点均被选中

```js
const Status = {
    UNSELECTED: 0, // 未选中
    INDETERMINATE: 1, // 未完全选中
    SELECTED: 2 // 选中
}

const calculateNodeStatus = (node, selectedNodes) => {
    if (!node.children) {
      node.status = selectedNodes.includes(node.name) ? Status.SELECTED : Status.UNSELECTED; // 如果节点在选中节点列表中，则状态为2，否则为0
      return node.status;
    }

    let hasSelectedChild = false;
    let hasUnselectedChild = false;

    for (const child of node.children) {
      const childStatus = calculateNodeStatus(child, selectedNodes); // 递归计算子节点的状态
      if (childStatus === Status.SELECTED) {
        hasSelectedChild = true; // 子节点有被选中的情况
      } else if (childStatus === Status.UNSELECTED) {
        hasUnselectedChild = true; // 子节点有未被选中的情况
      } else if (childStatus === Status.INDETERMINATE) {
        hasSelectedChild = true; // 子节点有被选中的情况
        hasUnselectedChild = true; // 子节点有未被选中的情况
        break; // 子节点状态为1时，父节点状态直接设置为1，并结束循环
      }
    }

    if (hasSelectedChild && hasUnselectedChild) {
      node.status = Status.INDETERMINATE; // 同时存在被选中的子节点和未被选中的子节点，状态为1
    } else if (hasSelectedChild) {
      node.status = Status.SELECTED; // 所有子节点均被选中，状态为2
    } else {
      node.status = Status.UNSELECTED; // 所有子节点均未被选中，状态为0
    }

    return node.status;
  };

  // 更新树的状态
  const updateTreeStatus = (tree, selectedNodes) => {
    calculateNodeStatus(tree, selectedNodes); // 计算节点的状态

    if (tree.children) {
      tree.children.forEach(child => updateTreeStatus(child, selectedNodes)); // 递归更新子节点的状态
    }

    return tree;
  };

// 示例用法
const selectedNodes = ['1-1-1', '1-1-2', '1-2-1', '1-3-1-1', '1-3-1-2', '1-3-1-3', '1-3-1-4'];
const tree = {
    name: '1',
    status: 0,
    children: [
        {
            name: '1-1',
            status: 0,
            children: [
                {
                    name: '1-1-1',
                    status: 0
                },
                {
                    name: '1-1-2',
                    status: 0
                }
            ]
        },
        {
            name: '1-2',
            status: 0,
            children: [
                {
                    name: '1-2-1',
                    status: 0
                },
                {
                    name: '1-2-2',
                    status: 0
                },
                {
                    name: '1-2-3',
                    status: 0
                }
            ]
        },
        {
            name: '1-3',
            status: 0,
            children: [
                {
                    name: '1-3-1',
                    status: 0,
                    children: [{
                        name: '1-3-1-1',
                        status: 0
                    }, {
                        name: '1-3-1-2',
                        status: 0
                    }, {
                        name: '1-3-1-3',
                        status: 0
                    }, {
                        name: '1-3-1-4',
                        status: 0
                    },]
                },
                {
                    name: '1-3-2',
                    status: 0
                },
                {
                    name: '1-3-3',
                    status: 0
                }
            ]
        }
    ]
}
    ;

const updatedTree = updateTreeStatus(tree, selectedNodes);
console.log(JSON.stringify(updatedTree));
```