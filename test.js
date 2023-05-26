console.log("test");
var str = String.fromCharCode.apply(null, new Uint8Array(34));
//{message: 'page', page: Uint8Array(35)}
console.log(str);
var uint8array = new TextEncoder().encode(new Uint8Array(34));
var string = new TextDecoder().decode(uint8array);
console.log(string);
