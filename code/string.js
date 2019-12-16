/*
* 反转string
* 例：hellow world => wolleh dlrow
* */
function reverse_string(v) {
  return v.split(' ').map(item => {
    return item.split('').reverse().join('');
  }).join(' ');
}
function reverse_string_2(v) {
  return v.match(/[\w]+/g).map(item => {
    return item.split('').reverse().join('');
  }).join(' ');
}

/*
* 连续的字符串
* 例：00110011 => ["0011", "01", "1100", "10", "0011", "01"]
* */
function consecutive_string(v) {
  let return_data = [];
  function get_string(v1) {
    let first_num = v1.match(/^(0+|1+)/)[0];
    let seconed_num = (first_num[0] ^ 1).toString().repeat(first_num.length);
    let reg = new RegExp(`^(${first_num}${seconed_num})`);
    if (reg.test(v1)) {
      return RegExp.$1;
    } else {
      return '';
    }
  }
  for (let i = 0; i < v.length - 1; i++) {
    let str = get_string(v.slice(i));
    if (str) {
      return_data.push(str);
    }
  }
  return return_data;
}

module.exports = {
  reverse_string: reverse_string,
  reverse_string_2: reverse_string_2,
  consecutive_string: consecutive_string,
}
