---
title: Jest-常用匹配器
sidebar: auto
date: 2021-06-30
categories:
  - 前端
tags:
  - Jest
---

## 一、基础匹配器

### .toBe(value)

匹配数字，字符等完全相等，不能匹配对象。

```typescript
const can = {
  name: 'pamplemousse',
  ounces: 12,
};

describe('the can', () => {
  test('has 12 ounces', () => {
    expect(can.ounces).toBe(12);
  });

  test('has a sophisticated name', () => {
    expect(can.name).toBe('pamplemousse');
  });
});
```

### .toEqual(value)

匹配两者内容相等，对象

```typescript
const can1 = {
  flavor: 'grapefruit',
  ounces: 12,
};
const can2 = {
  flavor: 'grapefruit',
  ounces: 12,
};

describe('the La Croix cans on my desk', () => {
  test('have all the same properties', () => {
    expect(can1).toEqual(can2);
  });
  test('are not the exact same can', () => {
    expect(can1).not.toBe(can2);
  });
});
```

### .toStrictEqual(value)

匹配对象拥有相同的类型和结构

```typescript
class LaCroix {
  constructor(flavor) {
    this.flavor = flavor;
  }
}

describe('the La Croix cans on my desk', () => {
  test('are not semantically the same', () => {
    expect(new LaCroix('lemon')).toEqual({flavor: 'lemon'});
    expect(new LaCroix('lemon')).not.toStrictEqual({flavor: 'lemon'});
  });
});
```

### .toContain(item)

匹配数组或字符串里是否包含某个具体项

```typescript
test('the flavor list contains lime', () => {
  expect(getAllFlavors()).toContain('lime');
});
```

### .toContainEqual(item)

匹配数组或对象里，是否包含某个对象

```typescript
describe('my beverage', () => {
  test('is delicious and not sour', () => {
    const myBeverage = {delicious: true, sour: false};
    expect(myBeverages()).toContainEqual(myBeverage);
  });
});
```





## 二、特殊值匹配器

### .toBeNull()

匹配是否为Null

```typescript
function bloop() {
  return null;
}

test('bloop returns null', () => {
  expect(bloop()).toBeNull();
});

// 等价于 .toBe(null)
// 但.toBeNull的报错提示更友好，推荐使用
```

### .toBeUndefined()

匹配是否为 未定义，undefined，或一个函数是否返回undefined

```typescript
test('the best drink for octopus flavor is undefined', () => {
  expect(bestDrinkForFlavor('octopus')).toBeUndefined();
});
```

### .toBeDefined()

匹配对象是否定义了

```typescript
test('there is a new flavor idea', () => {
  expect(fetchNewFlavorIdea()).toBeDefined();
});
```

### .toBeNaN()

匹配是否为NaN

```typescript
test('passes when value is NaN', () => {
  expect(NaN).toBeNaN();
  expect(1).not.toBeNaN();
});
```

### .toBeTruthy()

匹配是否为真

```typescript
drinkSomeLaCroix();
if (thirstInfo()) {
  drinkMoreLaCroix();
}
test('drinking La Croix leads to having thirst info', () => {
  drinkSomeLaCroix();
  expect(thirstInfo()).toBeTruthy();
});
```

### .toBeFalsy()

匹配是否为假

```typescript
drinkSomeLaCroix();
if (!getErrors()) {
  drinkMoreLaCroix();
}
test('drinking La Croix does not lead to errors', () => {
  drinkSomeLaCroix();
  expect(getErrors()).toBeFalsy();
});

// 在javascript中有这六种假值  ‘false’、‘0’、‘''’、‘null’,‘undefined’、‘NaN’
// 其他值都为真
```

### .not

用于其他匹配器之前，表示相反

```typescript
test('the best flavor is not coconut', () => {
  expect(bestLaCroixFlavor()).not.toBe('coconut');
  expect().toBeTurthy
	expect().not.toBeFalsy() 
});
```

## 三、数字匹配器

### .toBeGreaterThan(number | bigint)

匹配是否大于某个数

```typescript
test('ounces per can is more than 10', () => {
  expect(ouncesPerCan()).toBeGreaterThan(10);
});
```

### .toBeGreaterThanOrEqual(number | bigint)

匹配是否大于等于某个数

```typescript
test('ounces per can is at least 12', () => {
  expect(ouncesPerCan()).toBeGreaterThanOrEqual(12);
});
```

### .toBeLessThan()

匹配是否小于某个数

```typescript
test('ounces per can is less than 20', () => {
  expect(ouncesPerCan()).toBeLessThan(20);
});
```

### .toBeLessThanOrEqual()

匹配是否小于等于某个数

```typescript
test('ounces per can is at most 12', () => {
  expect(ouncesPerCan()).toBeLessThanOrEqual(12);
});
```

### .toBeCloseTo(number, numDigits?)

匹配浮点数是否靠近指定值

```typescript
// 测试浮点数，错误示例。使用.toBe没法正确匹配。
test('adding works sanely with decimals', () => {
  // 在javascript里  0.1 + 0.2 实际等于‘0.30000000000000004’这是二进制计数导致的误差。
  expect(0.2 + 0.1).toBe(0.3); // Fails!
});

// 正确示例
test('adding works sanely with decimals', () => {
  // 精确到小数点后五位
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
});

```





## 四、异步匹配器

### .resolves

用于promise承诺成功后，获取返回的数据

```typescript
test('resolves to lemon', () => {
  // make sure to add a return statement
  return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
});


// 支持async与await
test('resolves to lemon', async () => {
  await expect(Promise.resolve('lemon')).resolves.toBe('lemon');
  await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus');
});
```

### .rejects

用于promise承诺失败后，获取异常情况

```typescript
test('rejects to octopus', () => {
  // make sure to add a return statement
  return expect(Promise.reject(new Error('octopus'))).rejects.toThrow(
    'octopus',
  );
});

// 支持async与await
test('rejects to octopus', async () => {
  await expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus');
});
```



## 五、函数匹配器

### .toHaveBeenCalled()

匹配某个函数是否被调用

```typescript
function drinkAll(callback, flavour) {
  if (flavour !== 'octopus') {
    callback(flavour);
  }
}

describe('drinkAll', () => {
  test('drinks something lemon-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'lemon');
    expect(drink).toHaveBeenCalled();
  });

  test('does not drink something octopus-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'octopus');
    expect(drink).not.toHaveBeenCalled();
  });
});
```

### .toHaveBeenCalledTimes(number)

匹配函数被调用的准确次数

```typescript
test('drinkEach drinks each drink', () => {
  const drink = jest.fn();
  drinkEach(drink, ['lemon', 'octopus']);
  expect(drink).toHaveBeenCalledTimes(2);
});
```

### .toHaveBeenCalledWith(arg1, arg2, ...)

匹配函数调用的具体参数

```typescript
test('registration applies correctly to orange La Croix', () => {
  const beverage = new LaCroix('orange');
  register(beverage);
  const f = jest.fn();
  applyToAll(f);
  expect(f).toHaveBeenCalledWith(beverage);
});
```

### .toHaveBeenLastCalledWith(arg1, arg2, ...)

匹配调用函数的最后一个参数

```typescript
test('applying to all flavors does mango last', () => {
  const drink = jest.fn();
  applyToAllFlavors(drink);
  expect(drink).toHaveBeenLastCalledWith('mango');
});
```

### .toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)

匹配某个函数，第几次调用时，是否为指定的某个参数

```typescript
test('drinkEach drinks each drink', () => {
  const drink = jest.fn();
  drinkEach(drink, ['lemon', 'octopus']);
  expect(drink).toHaveBeenNthCalledWith(1, 'lemon');
  expect(drink).toHaveBeenNthCalledWith(2, 'octopus');
});
```

### .toHaveReturned()

匹配某个函数是否成功返回

```typescript
test('drinks returns', () => {
  const drink = jest.fn(() => true);
  drink();
  expect(drink).toHaveReturned();
});
```

### .toHaveReturnedTimes(number)

匹配某个函数成功返回的次数

```typescript
test('drink returns twice', () => {
  const drink = jest.fn(() => true);
  drink();
  drink();
  expect(drink).toHaveReturnedTimes(2);
});
```

### .toHaveReturnedWith(value)

匹配某个函数是否返回了指定的值

```typescript
test('drink returns La Croix', () => {
  const beverage = {name: 'La Croix'};
  const drink = jest.fn(beverage => beverage.name);
  drink(beverage);
  expect(drink).toHaveReturnedWith('La Croix');
});
```

### .toHaveLastReturnedWith(value)

匹配某个函数，最后一次执行返回的值，是否为指定的值

```typescript
test('drink returns La Croix (Orange) last', () => {
  const beverage1 = {name: 'La Croix (Lemon)'};
  const beverage2 = {name: 'La Croix (Orange)'};
  const drink = jest.fn(beverage => beverage.name);
  drink(beverage1);
  drink(beverage2);
  expect(drink).toHaveLastReturnedWith('La Croix (Orange)');
});
```

### .toHaveNthReturnedWith(nthCall, value)

匹配某函数，指定次数返回的值，是否为指定的值

```typescript
test('drink returns expected nth calls', () => {
  const beverage1 = {name: 'La Croix (Lemon)'};
  const beverage2 = {name: 'La Croix (Orange)'};
  const drink = jest.fn(beverage => beverage.name);
  drink(beverage1);
  drink(beverage2);
  expect(drink).toHaveNthReturnedWith(1, 'La Croix (Lemon)');
  expect(drink).toHaveNthReturnedWith(2, 'La Croix (Orange)');
});
```

## 六、对象匹配器

### .toHaveLength(number)

匹配某个对象是否有length属性，具体为几。可用于检查数组和字符串大小

```typescript
expect([1, 2, 3]).toHaveLength(3);
expect('abc').toHaveLength(3);
expect('').not.toHaveLength(5);
```

### .toHaveProperty(keyPath, value?)

匹配某个对象里是否含有某个字段属性，值是否正确。可通过数组，字符串路径的方式，查看深层数据

```typescript
// 待测试样例数据
const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    area: 20,
    wallColor: 'white',
    'nice.oven': true,
  },
  'ceiling.height': 2,
};

test('this house has my desired features', () => {
  // 检查是否有‘bath’属性
  expect(houseForSale).toHaveProperty('bath');
  // 检查是否有‘bedrooms’属性，值是否为4
  expect(houseForSale).toHaveProperty('bedrooms', 4);
  // 检查是否没有‘pool’属性
  expect(houseForSale).not.toHaveProperty('pool');

  // 使用点表示法的深度引用---用点描述路径
  // 检查‘kitchen.area’路径属性是否存在，值是否为20
  expect(houseForSale).toHaveProperty('kitchen.area', 20);
  expect(houseForSale).toHaveProperty('kitchen.amenities', [
    'oven',
    'stove',
    'washer',
  ]);
  expect(houseForSale).not.toHaveProperty('kitchen.open');

  // 使用包含keyPath的数组进行深度引用--用数组描述路径
  // 检查‘kitchen.area’路径的属性是否存在，值是否为20
  expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);
  expect(houseForSale).toHaveProperty(
    ['kitchen', 'amenities'],
    ['oven', 'stove', 'washer'],
  );
  expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
  expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);
  expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);

  // 引用键本身带有点的键
  expect(houseForSale).toHaveProperty(['ceiling.height'], 'tall');
});
```

### .toBeInstanceOf(Class)

匹配一个对象是否是一个类的实例

```typescript
class A {}
expect(new A()).toBeInstanceOf(A);
expect(() => {}).toBeInstanceOf(Function);
expect(new A()).toBeInstanceOf(Function); // throws
```

### .toMatch(regexp | string)

检查字符串是否与正则表达式相匹配

```typescript
describe('an essay on the best flavor', () => {
  test('mentions grapefruit', () => {
    expect(essayOnTheBestFlavor()).toMatch(/grapefruit/);
    expect(essayOnTheBestFlavor()).toMatch(new RegExp('grapefruit'));
  });
});

describe('grapefruits are healthy', () => {
  test('grapefruits are a fruit', () => {
    expect('grapefruits').toMatch('fruit');
  });
});
```

### .toMatchObject(object)

匹配一个对象，是否是某个对象的子集

```typescript
const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    area: 20,
    wallColor: 'white',
  },
};
const desiredHouse = {
  bath: true,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    wallColor: expect.stringMatching(/white|yellow/),
  },
};

test('the house has my desired features', () => {
  expect(houseForSale).toMatchObject(desiredHouse);
});



describe('toMatchObject applied to arrays', () => {
  test('the number of elements must match exactly', () => {
    expect([{foo: 'bar'}, {baz: 1}]).toMatchObject([{foo: 'bar'}, {baz: 1}]);
  });

  test('.toMatchObject is called for each elements, so extra object properties are okay', () => {
    expect([{foo: 'bar'}, {baz: 1, extra: 'quux'}]).toMatchObject([
      {foo: 'bar'},
      {baz: 1},
    ]);
  });
});
```

### .toMatchSnapshot(propertyMatchers?, hint?)

匹配快照与最新的一个值比较

### .toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)

匹配快照与最近的一个值比较

## 七、报错匹配器

### .toThrow(error?)

匹配是否有报错信息

```typescript
test('throws on octopus', () => {
  expect(() => {
    drinkFlavor('octopus');
  }).toThrow();
});
// 您必须将代码包装在函数中，否则将无法捕获错误，断言将失败。

function drinkFlavor(flavor) {
  if (flavor == 'octopus') {
    throw new DisgustingFlavorError('yuck, octopus flavor');
  }
  // Do some other stuff
}

test('throws on octopus', () => {
  function drinkOctopus() {
    drinkFlavor('octopus');
  }
  // Test that the error message says "yuck" somewhere: these are equivalent
  expect(drinkOctopus).toThrowError(/yuck/);
  expect(drinkOctopus).toThrowError('yuck');
  // Test the exact error message
  expect(drinkOctopus).toThrowError(/^yuck, octopus flavor$/);
  expect(drinkOctopus).toThrowError(new Error('yuck, octopus flavor'));
  // Test that we get a DisgustingFlavorError
  expect(drinkOctopus).toThrowError(DisgustingFlavorError);
});
```

### .toThrowErrorMatchingSnapshot(hint?)

测试匹配函数在调用时抛出匹配最近快照的错误

```typescript
function drinkFlavor(flavor) {
  if (flavor == 'octopus') {
    throw new DisgustingFlavorError('yuck, octopus flavor');
  }
  // Do some other stuff
}

test('throws on octopus', () => {
  function drinkOctopus() {
    drinkFlavor('octopus');
  }
  expect(drinkOctopus).toThrowErrorMatchingSnapshot();
});

exports[`drinking flavors throws on octopus 1`] = `"yuck, octopus flavor"`;
```

### .toThrowErrorMatchingInlineSnapsÏhot(inlineSnapshot)

测试函数在调用时抛出匹配最近快照的错误
