class Ip_res{
    constructor(){
        this.ipBase = new Set();
    }

    checkIp(ip) {
        if (this.ipBase.has(ip)){
            return false;
        }

        this.ipBase.add(ip)
            return true;
        
    }
}

module.exports = {
    Ip_res
}