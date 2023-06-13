function repeatString(a: string, b: number = 3): void{
  let i: number = 1;
  while(i <= b){
    console.log(a);
    i++;
  }
}

repeatString("hello", 3)


