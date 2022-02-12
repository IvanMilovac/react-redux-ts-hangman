export function findUnique(str: string) {
  let arrayOfLetters = str?.split("");

  let setUnique = new Set(arrayOfLetters);

  str = [...Array.from(setUnique)].join("");

  return str.replace(/[^a-z]/gi, "");
}

export function checkEquality(str1: string, str2: string) {
  if (str2.length === 0) return false;
  let str1Array = findUnique(str1).split("");
  let str2Array = findUnique(str2).split("");
  if (str1Array?.length !== str2Array?.length) return false;
  for (let i = 0; i < str1Array.length; i++) {
    if (str2Array.indexOf(str1Array[i]) >= 0) {
      str2Array.splice(str2Array.indexOf(str1Array[i]), 1);
    }
  }
  return !str2Array?.length;
}

export function msToMS(duration: number) {
  var seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60);

  let min = minutes < 10 ? "0" + minutes : minutes;
  let sec = seconds < 10 ? "0" + seconds : seconds;

  return min + ":" + sec;
}


export function randomStringGenerator(length: number){
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomStr = "";

    for (let i = 0; i < length; i++) {
      const randomNum = Math.floor(Math.random() * characters.length);
      randomStr += characters[randomNum];
    }

    console.log(randomStr);
}