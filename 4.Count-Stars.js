// function countStars(stars) {
//   const result = {
//     '*****': 0,
//     '****': 0,
//     '***': 0,
//     '**': 0,
//     '*': 0,
//   }

//   for (const starsArray of stars) {
//     let starCount = 0;
//     for (const star of starsArray) {
//       if (star === '*') {
//         starCount++;
//       }
//     }
//     if (starCount === 5) {
//       result["*****"]++;
//     }
//     if (starCount === 4) {
//       result["****"]++;
//     }
//     if (starCount === 3) {
//       result["***"]++;
//     }
//     if (starCount === 2) {
//       result["**"]++;
//     }
//     if (starCount === 1) {
//       result["*"]++;
//     }
//   }

//   return result;
// }

function countStars(arr) {
	// Tulis kode disini
	let result = {
	    '*****': 0,
	    '****': 0,
	    '***': 0,
	    '**': 0,
	    '*': 0
	};
	for (let i = 0; i < arr.length; i++) {
	    let totalStars = '';
	    for (let j = 0; j < arr[i].length; j++) {
	        if (arr[i][j] === '*') {
	            totalStars += '*';
	        }
	    }
	    result[totalStars]++;
	}
	return result;
}

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