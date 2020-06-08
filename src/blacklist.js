const fs = require("fs");
class Blacklist{
    constructor() {
        this.initialize("../resource/blacklist.txt")
    }
    initialize(blacklist){
        this.listBlacklist = fs.readFileSync(blacklist, 'utf8').toString().split("\n")
    }
    check_blacklist(name, phone_number){
        if(this.listBlacklist.length>0)
            return this.listBlacklist.includes(name+" "+phone_number)
        return false
    }
}

module.exports = Blacklist;