export class ListCounter <T, K extends keyof T> {
  private readonly list: T[];
  private listIsObject: boolean;

  constructor(list: T[]) {
    this.list = list;
    this.listIsObject = Object.prototype.toString.call(this.list[0]) === "[object Object]";
  }

  sort(by: K | null = null): T[] { 
    if(this.listIsObject) {
      return this.list.sort((prev, next) => this.comparator(prev, next, by));
    } else {
      return this.list.sort();
    }
  }

  aggregate(by: K | null = null): {[key: string]: number} {
    const aggregates = {} as {[key: string]: number};
    if(this.listIsObject) {
      if(by === null) throw new Error("by option isn't assigned");
      this.list.forEach(object => {
        const key = String(object[by]);
        aggregates[key] = (aggregates[key] || 0) + 1;
      });
    } else {
      this.list.forEach(primitive => {
        const key = String(primitive);
        aggregates[key] = (aggregates[key] || 0) + 1;
      })
    }
    return aggregates;
  }

  comparator(prev: T, next: T, by: K | null) {
    if(by === null) return 0;
    else if(prev[by] < next[by]) return -1;
    else if(prev[by] > next[by]) return 1;
    return 0;
  }
} 