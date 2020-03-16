// 公式运算

/*
* 电话号码组合
* 输入数字，用对应的字母，进行排列组合运算
* 例：[a,b,c],[d,e,f] => ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
* */
function permutation_combination(str) {
  // 数字映射字符串
  let arr = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let str_arr = str.split('');
  let code = [];
  str_arr.map(item => {
    if (arr[item]) {
      code.push(arr[item]);
    }
  });
  // code: ['abc', 'def']
  // 数据组合
  function arr_limit(code) {
    let limit_data = [];
    // 数据组合插入
    for (let item_1 of code[0].split('')) {
      for (let item_2 of code[1].split('')) {
        limit_data.push(`${item_1}${item_2}`);
      }
    }
    code.splice(0, 2, limit_data);
    if (code.length > 1) {
      arr_limit(code)
    } else {
      return limit_data;
    }
  }
  return arr_limit(code);
}

/*
* 求公约数
* */
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    gcd(b, a % b);
  }
}

// 归类运算

// 筛选运算

// 二进制运算

module.exports = {
  permutation_combination: permutation_combination,
  gcd: gcd,
}
