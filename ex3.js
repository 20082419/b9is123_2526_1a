let listArray = [];

const eulerlist = () => {
    let a = parseInt(document.getElementById("a1").value);
    let b = parseInt(document.getElementById("b1").value);
    let l = document.getElementById("l").value;

    for (let i = 0; i < l.length; i++) {
        listArray.push(parseInt(l[i]));
    }

    let sum = 0;

    for (let i = 0; i <= listArray.length - 1; i++) {
        if (listArray[i] % a === 0 || listArray[i] % b === 0) {
            sum += listArray[i];
        }
    }

    return alert(sum);
};

// let euler2Lists = () => {
//     a = [2, 3]; //can un-hardcode
//     l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
//     //call listEuler2 and alert.
// };

// let euler2Lists1 = () => {
//     a = [2, 3, 5]; //can un-hardcode
//     l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
//     //call listEuler3 and alert.
// };

// let euler2Lists = () => {
//   a = [2, 3]; //can un-hardcode
//   l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
//   //call listEuler2 and alert.
// };

// let euler2Lists1 = () => {
//   a = [2, 3, 5]; //can un-hardcode
//   l = [1, 2, 3, 4, 5, 6, 7, 9, 10, 10, 10];
//   //call listEuler3 and alert.
// };

const euler2Lists = () => {
  let aList = document.getElementById("aList").value;
  let mList = document.getElementById("mList").value;

  for (let i = 0; i < aList.length; i++) {
    parseInt(aList[i]);
    console.log(aList[i]);
  }
};