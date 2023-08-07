# @ungap/new

This is a resolution to this [TC39 proposal](https://es.discourse.group/t/function-prototype-new/1772):

  * if they implement the proposal, this is exactly it
  * if they won't implement the proposal, this is not causing any present/past/future conflict or issue with already working code in the wild (i.e. static `new` classes methods won't be affected and `new` object fields won't be affected neither)

## Use Case

Specially in these days where many foreign programming languages are landing in the Web landscape via WASM, it is crucial to provide an easy way to disambiguate users intents when it comes to `new Class(...args)`, a syntax that *might not be available* in foreign programming languages.

This extremely tiny and TC39 suggested polyfill allows code interpreted in these programming language to use `Class.new(...args)` instead, avoiding the need to workaround or patch their parser and/or implement on their own a solution for this very common problem.

## Usage

```js
// these all work as expected in any client/server project
import '@ungap/new';
require('@ungap/new');
importScripts('https://unpkg.com/@ungap/new');

Date.new(0) instanceof Date; // true
// same as new Date(0)
```

Happy WASM <-> JS coding 🥳
