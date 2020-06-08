console.time("execution time")
// start
const blacklist = require("../src/blacklist")
const bl = new blacklist()
const result = bl.check_blacklist("lkxjdkiui", 902953)
console.log(result)
// end
console.timeEnd("execution time")