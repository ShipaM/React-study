import "@testing-library/jest-dom";
import "regenerator-runtime/runtime";

import { TextDecoder, TextEncoder } from "util";

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder, writable: true },
  TextEncoder: { value: TextEncoder, writable: true },
});
