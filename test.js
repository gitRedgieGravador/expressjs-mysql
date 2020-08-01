var AES = require("./middleware/encryption");
var kan = new AES()

var result = {
    error: false,
    message: "this is the message",
    data: {
        bar: [1, "baz"]
    }
};

var hw = kan.encrypt(result)
console.log(hw)
console.log(kan.decrypt(hw))

/*
var key = 'mymasterkey1234567890P@ssw0rd';

// Create an encryptor:
var encryptor = require('simple-encryptor')(key);

var obj = {
    foo: {
        bar: [1, "baz"]
    }
};
var objEnc = encryptor.encrypt(obj);
// Should print gibberish:
console.log('obj encrypted: %s', objEnc);
var objDec = encryptor.decrypt(objEnc);
// Should print: {"foo":{"bar":[1,"baz"]}}
console.log(objDec);
*/