function countStars(stars) {
  const result = {
    '*****': 0,
    '****': 0,
    '***': 0,
    '**': 0,
    '*': 0,
  }

  for (const starsArray of stars) {
    let starCount = 0;
    for (const star of starsArray) {
      if (star === '*') {
        starCount++;
      }
    }
    if (starCount === 5) {
      result["*****"]++;
    }
    if (starCount === 4) {
      result["****"]++;
    }
    if (starCount === 3) {
      result["***"]++;
    }
    if (starCount === 2) {
      result["**"]++;
    }
    if (starCount === 1) {
      result["*"]++;
    }
  }

  return result;
}

// Instructor Version
// function sumColumn(arr) {
// 	// Tulis kode disini
// 	let result = [];
// 	for (let i = 0; i < arr.length; i++) {
// 	    for (let j = 0; j < arr[i].length; j++) {
// 	        if (result[j] !== undefined) {
// 	            result[j] += arr[i][j];
// 	        } else {
// 	            result[j] = arr[i][j];
// 	        }
// 	    }
// 	}
// 	return result;
// }

console.log(
  countStars([
    ['*', '*', '*', ' ', ' '],
    ['*', '*', '*', '*', ' '],
    ['*', '*', '*', ' ', ' '],
    ['*', '*', '*', '*', '*'],
    ['*', '*', ' ', ' ', ' '],
    ['*', '*', '*', ' ', ' '],
    ['*', '*', '*', '*', ' '],
    ['*', '*', ' ', ' ', ' '],
    ['*', '*', '*', ' ', ' '],
    ['*', '*', ' ', ' ', ' '],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', ' ']
  ])
);

/*
{
  '*****': 2,
  '****': 3,
  '***': 4,
  '**': 3,
  '*': 0,
}
*/