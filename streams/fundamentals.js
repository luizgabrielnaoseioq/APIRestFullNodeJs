import { Readable } from "node:stream";
class OneToHundredStream extends Readable {
  index = 1;

  _read() {}
}
