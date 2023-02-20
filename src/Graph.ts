export class Graph {
  private readonly adjacencyList: { [key: string]: Set<string> };

  constructor() {
    this.adjacencyList = {};
  }

  public addVertex = (vertex: string): boolean => {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
      return true;
    }

    return false;
  };

  public removeVertex = (vertex: string): boolean => {
    if (this.adjacencyList[vertex]) {
      for (const temp of Object.keys(this.adjacencyList)) {
        this.removeEdge(vertex, temp);
      }

      delete this.adjacencyList[vertex];

      return true;
    }

    return false;
  };

  public addEdge = (vertex1: string, vertex2: string): boolean => {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].add(vertex2);
      this.adjacencyList[vertex2].add(vertex1);
      return true;
    }

    return false;
  };

  public removeEdge = (vertex1: string, vertex2: string): boolean => {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].delete(vertex2);
      this.adjacencyList[vertex2].delete(vertex1);
      return true;
    }

    return false;
  };

  public print = (): void => {
    const data: { [key: string]: string[] } = {};

    for (const vertex of Object.keys(this.adjacencyList)) {
      if (this.adjacencyList[vertex]) {
        data[vertex] = [...this.adjacencyList[vertex]];
      }
    }

    console.log(JSON.stringify(data, null, 2));
  };
}
