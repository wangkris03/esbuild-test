# esbuild-test

这是一个使用 npm 发包, ts 工程, 编译使用 esbuild，测试使用 jest

## 主要功能根据 nanoid 包生产长度为 10 的随机字符串

## test

### test code

如下例子：

```ts
import { genId, getFetch } from "../lib/index";

test("genId", () => {
  expect(genId().length).toBe(10);
});
```
