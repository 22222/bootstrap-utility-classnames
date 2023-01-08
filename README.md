Generates [Bootstrap](https://getbootstrap.com/) utility and helper class names.

The main purpose of this library is to provide a strongly typed way of generating the Bootstrap utility classes. So this is probably not a very useful library unless you're using TypeScript, or maybe if you're using an editor that supports TypeScript definitions for autocomplete.

# Installation

```shell
npm install bootstrap-utility-classnames
```

Or download the [latest release](https://github.com/22222/bootstrap-utility-classnames/releases/latest).

Or copy and paste whatever subset of the code you want into your own project. This project is available under [The Unlicense](UNLICENSE) (or alternatively the more common [MIT](LICENSE) if the unlicense doesn't work for you). So you don't necessarily need to provide attribution or do anything special to copy this code.

# Getting Started

```typescript
import { utilityClassNames } from "bootstrap-utility-classnames";

const classNames = utilityClassNames({ text: "primary", textDecoration: "line-through", bg: "light", m: 3, p: 3 });
console.log(classNames); // ["text-primary", "text-decoration-line-through", "bg-light", "m-3", "p-3"]
```

Generally this library uses the first part of the Bootstrap utility class as the property name, and the rest as a value. If you could have more than one value for a property (like with the "text" property), then you can use an object with more specific values:

```typescript
import { utilityClassNames } from "bootstrap-utility-classnames";

const classNames = utilityClassNames({ text: { color: "primary", alignment: "start", wrap: true } });
console.log(classNames); // ["text-primary", "text-start", "text-wrap"]
```
