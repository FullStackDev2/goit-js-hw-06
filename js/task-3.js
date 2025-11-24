class StringBuilder {
  #value;

  constructor(newFile) {
    this.#value = newFile;
  }

  getValue() {
    return this.#value;
  }

  padStart(deger) {
    this.#value = `${deger}${this.#value}`;
  }

  padEnd(deger) {
    this.#value += deger;
  }

  padBoth(deger) {
    this.padStart(deger);
    this.padEnd(deger);
  }
}




const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="