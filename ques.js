module.exports = function(vertexs,edges) {
    return toposort(vertexs, edges)
  }
  
  module.exports.array = toposort
  
  class Graph {
      constructor() {
          this.adjacencyList = {};
      }
      addVertex(vertex) {
          if (!this.adjacencyList[vertex]) {
              this.adjacencyList[vertex] = [];
          }
      }
      addEdge(v1, v2) {
          this.adjacencyList[v1].push(v2);
      }
  }
  
  function dfsTopSortHelper(graph,v, n, visited, topNums) {
      visited[v] = true;
      const neighbors = graph.adjacencyList[v];
      for (const neighbor of neighbors) {
          if (!visited[neighbor]) {
              n = dfsTopSortHelper(graph,neighbor, n, visited, topNums);
          }
      }
      topNums[v] = n;
      return n - 1;
  }
  function dfsTopSort(graph) {
      const vertices = Object.keys(graph.adjacencyList);
      const visited = {};
      const topNums = {};
      let n = vertices.length - 1;
      for (const v of vertices) {
          if (!visited[v]) {
              n = dfsTopSortHelper(graph,v, n, visited, topNums)
          }
      }
      return topNums;
  }
  function toposort(vertexs,edges) {
      const g = new Graph();
      vertexs.forEach((v) => g.addVertex(v));
      edges.forEach(v => {
      g.addEdge(v.split("=>")[0].trim(), v.split("=>")[1].trim());
      })
      if(isCyclic(g)){
          return "Error - this is a cyclic dependency";
      }
      return Object.keys(dfsTopSort(g));
  }
  
  function isCyclic(graph)
  {
      // Mark all the vertices as not visited and
          // not part of recursion stack
          let length = Object.keys(graph.adjacencyList).length
          let visited = {};
          let recStack = {};
          for(let i=0;i<length;i++)
          {
              visited[Object.keys(graph.adjacencyList)[i]]=false;
              recStack[Object.keys(graph.adjacencyList)[i]]=false;
          }
           
            
          // Call the recursive helper function to
          // detect cycle in different DFS trees
          for (let i = 0; i < length; i++)
              if (isCyclicUtil(graph,Object.keys(graph.adjacencyList)[i], visited, recStack))
                  return true;
    
          return false;
  }
  function isCyclicUtil(graph,i,visited,recStack)
  {
      // Mark the current node as visited and
          // part of recursion stack
          if (recStack[i])
              return true;
    
          if (visited[i])
              return false;
                
          visited[i] = true;
    
          recStack[i] = true;
       let children =0;
      if(i)
          children = graph.adjacencyList[i];
          
            
          for (let c=0;c< children.length;c++)
              if (isCyclicUtil(graph,children[c], visited, recStack))
                  return true;
                    
          recStack[i] = false;
    
          return false;
  }