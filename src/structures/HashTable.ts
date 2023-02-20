export class HashTable {
  private readonly dataMap: Array<[string, number][]>;

  constructor(readonly size: number) {
    this.dataMap = new Array(size);
  }

  private hash = (key: string): number => {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }

    return hash;
  };

  public set = (key: string, value: number): HashTable => {
    const index = this.hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    this.dataMap[index].push([key, value]);

    return this;
  };

  public get = (key: string): number | undefined => {
    const index = this.hash(key);

    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }

    return;
  };

  public print = (): void => {
    console.log(JSON.stringify(this.dataMap, null, 2));
  };
}
