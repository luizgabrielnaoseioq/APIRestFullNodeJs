import { Readable, Writable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        const buf = Buffer.from(String(i));

        this.push(buf);
      }
    }, 1000);
  }
}

class MultiplyByTenStream extends Writable {
  index = i;

  _;
}

new OneToHundredStream().pipe(process.stdout);
