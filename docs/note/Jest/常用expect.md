---
title: 常用except
---

## expect(value)

期望值。通常value为需要匹配测试的内容

```typescript
test('the best flavor is grapefruit', () => {
  expect(bestLaCroixFlavor()).toBe('grapefruit');
});
```

## expect.anything()

匹配除null或undefined以外的任何值。

你可以在toEqual或tocalledwith内部使用它来代替文字值。例如，如果您想检查使用非空参数调用的模拟函数

```typescript
test('map calls its argument with a non-null argument', () => {
  const mock = jest.fn();
  [1].map(x => mock(x));
  expect(mock).toBeCalledWith(expect.anything());
});
```

## expect.any(constructor)

匹配使用给定构造函数创建的任何东西。你可以在toEqual或tocalledwith内部使用它来代替文字值。

例如，如果您想检查一个模拟函数是否被一个数字调用

```typescript
function randocall(fn) {
  return fn(Math.floor(Math.random() * 6 + 1));
}

test('randocall calls its callback with a number', () => {
  const mock = jest.fn();
  randocall(mock);
  expect(mock).toBeCalledWith(expect.any(Number));
});
```

## expect.arrayContaining(array)

匹配接收到的包含期望数组中所有元素的数组。也就是说，期望的数组是接收数组的子集。

因此，它匹配接收到的包含不在预期数组中的元素的数组。

```typescript
describe('arrayContaining', () => {
  const expected = ['Alice', 'Bob'];
  it('matches even if received contains additional elements', () => {
    expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
  });
});

describe('Beware of a misunderstanding! A sequence of dice rolls', () => {
  const expected = [1, 2, 3, 4, 5, 6];
  it('matches even with an unexpected number 7', () => {
    expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(
      expect.arrayContaining(expected),
    );
  });
  it('does not match without an expected number 2', () => {
    expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(
      expect.arrayContaining(expected),
    );
  });
});


// 相反的匹配器
describe('not.arrayContaining', () => {
  const expected = ['Samantha'];

  it('matches if the actual array does not contain the expected elements', () => {
    expect(['Alice', 'Bob', 'Eve']).toEqual(
      expect.not.arrayContaining(expected),
    );
  });
});
```

## expect.objectContaining(object)

匹配任何接收到的递归匹配预期属性的对象。

也就是说，期望的对象是接收对象的子集。

因此，它匹配接收到的包含属于预期对象的属性的对象。

```typescript
test('onPress gets called with the right thing', () => {
  const onPress = jest.fn();
  simulatePresses(onPress);
  expect(onPress).toBeCalledWith(
    expect.objectContaining({
      x: expect.any(Number),
      y: expect.any(Number),
    }),
  );
});


// 相反的匹配器
describe('not.objectContaining', () => {
  const expected = {foo: 'bar'};

  it('matches if the actual object does not contain expected key: value pairs', () => {
    expect({bar: 'baz'}).toEqual(expect.not.objectContaining(expected));
  });
});
```

## expect.stringContaining(string)

如果它是一个字符串，或者它是一个包含确切的期望字符串的字符串，则匹配接收的值。

```typescript

// 相反的匹配器
describe('not.stringContaining', () => {
  const expected = 'Hello world!';

  it('matches if the received value does not contain the expected substring', () => {
    expect('How are you?').toEqual(expect.not.stringContaining(expected));
  });
});
```

## expect.stringMatching(string | regexp)

如果它是字符串，或者它是一个匹配预期字符串或正则表达式的字符串，则匹配接收的值。

```typescript
describe('stringMatching in arrayContaining', () => {
  const expected = [
    expect.stringMatching(/^Alic/),
    expect.stringMatching(/^[BR]ob/),
  ];
  it('matches even if received contains additional elements', () => {
    expect(['Alicia', 'Roberto', 'Evelina']).toEqual(
      expect.arrayContaining(expected),
    );
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Roberto', 'Evelina']).not.toEqual(
      expect.arrayContaining(expected),
    );
  });
});

// 相反的匹配器
describe('not.stringMatching', () => {
  const expected = /Hello world!/;

  it('matches if the received value does not match the expected regex', () => {
    expect('How are you?').toEqual(expect.not.stringMatching(expected));
  });
});
```

## expect.assertions(number)

验证在测试期间调用了一定数量的断言。这在测试异步代码时非常有用，以确保回调中的断言确实被调用了

```typescript
test('doAsync calls both callbacks', () => {
  expect.assertions(2);
  function callback1(data) {
    expect(data).toBeTruthy();
  }
  function callback2(data) {
    expect(data).toBeTruthy();
  }

  doAsync(callback1, callback2);
});
```

## expect.hasAssertions()

验证在测试期间至少有一个断言被调用。这在测试异步代码时非常有用，以确保回调中的断言确实被调用了

例如，我们有几个函数都是关于状态的。prepareState调用一个带有状态对象的回调函数，validateState在该状态对象上运行，waitOnState返回一个承诺，等待所有prepareState回调完成。我们可以用

```typescript
test('prepareState prepares a valid state', () => {
  expect.hasAssertions();
  prepareState(state => {
    expect(validateState(state)).toBeTruthy();
  });
  return waitOnState();
});
```

## expect.addSnapshotSerializer(serializer)

您可以调用expect.addSnapshotSerializer添加一个模块来格式化特定于应用程序的数据结构。

对于单个测试文件，添加的模块在snapshotserializer配置的所有模块之前，而snapshotserializer配置在内置JavaScript类型和React元素的默认快照序列化之前。添加的最后一个模块是测试的第一个模块。

如果您在单个测试文件中添加快照序列化器，而不是将其添加到snapshotserializer配置中:您将使依赖关系显式而不是隐式。

您避免了可能导致从create-react-app弹出的配置限制。

```typescript
import serializer from 'my-serializer-module';
expect.addSnapshotSerializer(serializer);

// affects expect(value).toMatchSnapshot() assertions in the test file
```

