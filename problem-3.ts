function reverseFunc<T>(...items:T[]): T[] {

  
    return items.reverse();
  }
  
  const items = ["allen", "benny", "cane"];
  const result = reverseFunc(...items);
  
  console.log(result);