
function min(a, b) {
    if (a < b) {
        return a;
    } else if (a > b) {
        return b;
    }
}

function isEven(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    if (n > 0) {
        return isEven(n - 2);
    } else {
        return isEven(n + 2);
  }
}

function countBs(string) {
    var bigB = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "B") {
            bigB += 1;
        }
    }
    return bigB;
}

function countChar(string, char) {
    var charNum = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === char) {
            charNum += 1;
        }
    }
    return charNum;
}
