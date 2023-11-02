# 发红包算法

所有 amount 必须分完, 每一个红包中至少有 0.01,希望每一个红包分到金额的概率相等

```js
/**
 * 发红包算法：所有 amount 必须分完, 每一个红包中至少有 0.01,希望每一个红包分到金额的概率相等
 * @param amount 红包总金额，单位：元
 * @param count 红包个数
 * @returns
 */
function distributeRedPackets(amount, count) {
    const result = [];
    let remainingAmount = amount * 100;
    let remainingCount = count;

    if (remainingAmount / count < 1) {
        console.error('单个红包金额不能小于0.01元');
        return;
    }

    for (let i = 0; i < count - 1; i++) {

        /*
            乘以2是为了确保每个红包的金额不会超过剩余金额的一半，
            从而保证每个红包都有足够的金额，同时也避免了出现某个红包金额过大的情况。
            如果乘以3或4，那么会导致某些红包金额过大，而其他红包金额过小的情况。
        */
        const maxAmount = Math.floor(remainingAmount / remainingCount * 2); // 最大红包金额
        const packetAmount = getRandomAmount(1, maxAmount);

        result.push(packetAmount);

        // 更新剩余金额和剩余红包数量
        remainingAmount -= packetAmount;
        remainingCount--;
    }

    result.push(remainingAmount);

    adjustRedPacketAmounts(result);

    return result.map(amount => amount / 100);
}

/**
* 获取指定范围内的随机整数
* @param {*} min
* @param {*} max
* @returns
*/
function getRandomAmount(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 调整红包金额
 * @param {*} amounts
 */
function adjustRedPacketAmounts(amounts) {
    const totalAmount = amounts.reduce((sum, amount) => sum + amount, 0);
    const adjustmentFactor = 1 / totalAmount; // 计算调整因子

    amounts.forEach((amount, index) => {
        const adjustedAmount = Math.floor(amount * adjustmentFactor); // 根据调整因子计算每个红包的调整后金额
        amounts[index] = adjustedAmount < 1 ? 1 : adjustedAmount; // 如果调整后的金额小于最小金额，则将其设置为最小金额
    });

    const remainingAmount = totalAmount - amounts.reduce((sum, amount) => sum + amount, 0); // 计算剩余的金额

    // 将剩余的金额随机分配到红包中
    for (let i = 0; i < remainingAmount; i++) {
        const index = getRandomAmount(0, amounts.length - 1);
        amounts[index]++;
    }
}

console.log(distributeRedPackets(0.1, 10));
console.log(distributeRedPackets(1, 10));
console.log(distributeRedPackets(0.09, 10));
```