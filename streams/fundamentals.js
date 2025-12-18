import { Readable, Writable } from 'node:stream';

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;
    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));
        this.push(buf);
      }
    }, 1000);
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString() * 10));
    callback();
  }
}

new OneToHundredStream() // 1. Cria a instância da stream
  .pipe(new MultiplyByTenStream()); // 2. Está lendo e escrevendo alterações.

// 3. o pipe() é o intermediário
