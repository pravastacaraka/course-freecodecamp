function rot13(str) {
  // return str.replace(/[a-z]/gi, (c) => {
  //   console.log(c);
  //   console.log(c <= "Z" ? 90 : 122);
  //   let code = c.charCodeAt(0) + 13;
  //   // if ((c <= "Z" ? 90 : 122) >= (c = code)) {
  //   //   console.log(c);
  //   //   return String.fromCharCode(c);
  //   // } else {
  //   //   console.log(c - 26);
  //   //   return String.fromCharCode(c - 26);
  //   // }
  //   return String.fromCharCode(
  //     c <= "Z" ? 90 : 122 >= (c = c.charCodeAt(0) + 13) ? c : c - 26
  //   );
  // });
  return str.replace(/[a-z]/gi, (c) => {
    let start = c <= "Z" ? 65 : 97;
    console.log(start);
    console.log(c.charCodeAt(0));
    console.log(start + ((c.charCodeAt(0) - start + 13) % 26));
    return String.fromCharCode(start + ((c.charCodeAt(0) - start + 13) % 26));
  });
}

console.log(rot13("hello"));
