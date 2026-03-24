---
title: Jest-expect.extend
---

# expect.extend(matchers)

## 一、简介

 自定义匹配器，自定义匹配规则。可将自定义匹配器扩展到jest中使用。

```typescript
// 自定义一个匹配数字范围的匹配器'toBeWithinRange'
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

test('numeric ranges', () => {
  expect(100).toBeWithinRange(90, 110);
  expect(101).not.toBeWithinRange(0, 100);
  expect({apples: 6, bananas: 3}).toEqual({
    apples: expect.toBeWithinRange(1, 10),
    bananas: expect.not.toBeWithinRange(11, 20),
  });
});

```

## 二、typescript类型提示

当你使用'@types/jest'时。可以通过如下方法，在当前测试模块中声明新的toBeWithinRange匹配器

```typescript
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeWithinRange(a: number, b: number): R
    }
    interface Expect {
      toBeWithinRange(a: number, b: number): void
    }
    interface InverseAsymmetricMatchers {
      toBeWithinRange(a: number, b: number): void
    }
  }
}
```

## 三、异步处理

你也可以通过expect.extend扩展一个异步匹配器

```typescript
expect.extend({
  async toBeDivisibleByExternalValue(received) {
    const externalValue = await getExternalValueFromRemoteSource();
    const pass = received % externalValue == 0;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be divisible by ${externalValue}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be divisible by ${externalValue}`,
        pass: false,
      };
    }
  },
});

test('is divisible by external value', async () => {
  await expect(100).toBeDivisibleByExternalValue();
  await expect(101).not.toBeDivisibleByExternalValue();
});
```

## 四、自定义匹配器的api

```typescript
/* 
 自定义匹配器返回的应是一个对象或一个promise。对象有两个参数。
 pass是个布尔类型，指是否通过请求
 message是个无参数的函数，返回未通过测试的提示信息。
 当pass为false时，expect(x).yourmatcher()失败时，消息应该返回错误消息。
 当pass为true时，消息应该返回expect(x).not.yourmatcher()失败时的错误消息。
*/
expect.extend({
  yourMatcher(x, y, z) {
    return {
      pass: true,
      message: () => '',
    };
  },
});
```

## 五、自定义匹配器里可获取到的一些参数

### 1、this.isNot

返回一个布尔值。用于判断当前测试，是否使用了.not修饰符

### 2、this.promise

返回一个字符串

> ‘resoves’---提示你，测试使用了.resoves修饰符
>
> ‘rejects’---提示你，测试使用了.rejects修饰符
>
> ‘' '’ ---提示你，测试未使用promise

### 3、this.equals(a, b)

返回一个布尔值。这是一个深度相等函数，如果两个对象具有相同的值(递归地)，则返回true

### 4、this.expand

返回一个布尔值。让你知道这个匹配器被一个扩展选项调用了。

当使用——expand标志调用Jest时，expand可以用来确定Jest是否期望显示完整的差异和错误

### 5、this.utils

这是一个工具集，主要由[jest-macther-utils](https://github.com/facebook/jest/tree/master/packages/jest-matcher-utils)导出

其中常用的为：matcherHint，printExpected、printReceived。它们可以很好的格式化数据

```typescript
const {diff} = require('jest-diff');
expect.extend({
  toBe(received, expected) {
    const options = {
      comment: 'Object.is equality',
      isNot: this.isNot,
      promise: this.promise,
    };

    const pass = Object.is(received, expected);

    const message = pass
      ? () =>
          this.utils.matcherHint('toBe', undefined, undefined, options) +
          '\n\n' +
          `Expected: not ${this.utils.printExpected(expected)}\n` +
          `Received: ${this.utils.printReceived(received)}`
      : () => {
          const diffString = diff(expected, received, {
            expand: this.expand,
          });
          return (
            this.utils.matcherHint('toBe', undefined, undefined, options) +
            '\n\n' +
            (diffString && diffString.includes('- Expect')
              ? `Difference:\n\n${diffString}`
              : `Expected: ${this.utils.printExpected(expected)}\n` +
                `Received: ${this.utils.printReceived(received)}`)
          );
        };

    return {actual: received, message, pass};
  },
});


// 会输出类似下面的内容
expect(received).toBe(expected)
   Expected value to be (using Object.is):
      "banana"
   Received:
      "apple"
```



## 六、自定义快照匹配

要在您的自定义匹配器中使用快照测试，您可以导入jest-snapshot并在您的匹配器中使用它。

下面是一个快照匹配器，它对字符串进行修剪，以存储给定的长度。toMatchTrimmedSnapshot (length)

```typescript
const {toMatchSnapshot} = require('jest-snapshot');

expect.extend({
  toMatchTrimmedSnapshot(received, length) {
    return toMatchSnapshot.call(
      this,
      received.substring(0, length),
      'toMatchTrimmedSnapshot',
    );
  },
});

it('stores only 10 characters', () => {
  expect('extra long string oh my gerd').toMatchTrimmedSnapshot(10);
});

// 存储快照如下所示:
exports[`stores only 10 characters: toMatchTrimmedSnapshot 1`] = `"extra long"`;
```

也可以为内联快照创建定制匹配器，快照将被正确地添加到定制匹配器中。

然而，当第一个参数是属性匹配器时，内联快照总是试图附加到第一个参数或第二个参数，因此不可能在自定义匹配器中接受自定义参数。

```typescript
const {toMatchInlineSnapshot} = require('jest-snapshot');

expect.extend({
  toMatchTrimmedInlineSnapshot(received, ...rest) {
    return toMatchInlineSnapshot.call(this, received.substring(0, 10), ...rest);
  },
});

it('stores only 10 characters', () => {
  expect('extra long string oh my gerd').toMatchTrimmedInlineSnapshot();
  /*
  快照将以内联方式添加，如
  expect('extra long string oh my gerd').toMatchTrimmedInlineSnapshot(
    `"extra long"`
  );
  */
});
```

如果你的自定义内联快照匹配器是异步的，即使用async-await，你可能会遇到像“多个内联快照的同一个调用不支持”这样的错误。

Jest需要额外的上下文信息来查找使用自定义内联快照匹配器来正确更新快照的位置。

```typescript
const {toMatchInlineSnapshot} = require('jest-snapshot');

expect.extend({
  async toMatchObservationInlineSnapshot(fn, ...rest) {
    // The error (and its stacktrace) must be created before any `await`
    this.error = new Error();

    // The implementation of `observe` doesn't matter.
    // It only matters that the custom snapshot matcher is async.
    const observation = await observe(async () => {
      await fn();
    });

    return toMatchInlineSnapshot.call(this, recording, ...rest);
  },
});

it('observes something', async () => {
  await expect(async () => {
    return 'async action';
  }).toMatchTrimmedInlineSnapshot();
  /*
  The snapshot will be added inline like
  await expect(async () => {
    return 'async action';
  }).toMatchTrimmedInlineSnapshot(`"async action"`);
  */
});
```

通常，jest试图匹配测试中预期的每个快照。

有时，如果先前的快照失败，继续测试可能没有意义。

例如，当您在各种转换之后对状态机做快照时，您可以在一个转换产生错误的状态时中止测试。

在这种情况下，可以实现在第一次不匹配时抛出的自定义快照匹配器，而不是收集每次不匹配。

```typescript
const {toMatchInlineSnapshot} = require('jest-snapshot');

expect.extend({
  toMatchStateInlineSnapshot(...args) {
    this.dontThrow = () => {};

    return toMatchInlineSnapshot.call(this, ...args);
  },
});

let state = 'initial';

function transition() {
  // Typo in the implementation should cause the test to fail
  if (state === 'INITIAL') {
    state = 'pending';
  } else if (state === 'pending') {
    state = 'done';
  }
}

it('transitions as expected', () => {
  expect(state).toMatchStateInlineSnapshot(`"initial"`);

  transition();
  // Already produces a mismatch. No point in continuing the test.
  expect(state).toMatchStateInlineSnapshot(`"loading"`);

  transition();
  expect(state).toMatchStateInlineSnapshot(`"done"`);
});
```

