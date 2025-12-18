import { Readable } from 'node:stream';

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

// --- A PARTE QUE FALTA ---
new OneToHundredStream() // 1. Cria a instância da stream
  .pipe(process.stdout); // 2. Redireciona os dados para o Terminal (stdout)
