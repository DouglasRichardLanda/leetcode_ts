


export default function issue_1 (arg1: number[], arg2: number) {
  for(let i = 0; i <= arg1.length - 2; i++) {
    for (let j = 1; j <= arg1.length - 1; j++) {
      if (i == j) continue
      if (arg1[i] + arg1[j] === arg2) {
        console.log(i, j)
        // return [i, j]
      }
    }
  }
}