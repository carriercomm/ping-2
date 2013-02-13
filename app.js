
var Ping = require('./lib/ping'),
    pingServers,
    monitors = [];


pingServers = function (arr) {
    if (Array.isArray(arr) && arr.length > 0) {
        arr.forEach(function (url) {
            var monitor = new Ping ({
                website: url,
                timeout: 15
            });
            
            monitors.push(monitor);
        });
    }    
}

    
pingServers([
    'http://www.rflab.co.za',
    'http://www.bookmarkmanager.co.za',
    'http://crushit-compiler.herokuapp.com',
    'http://www.bookmarkmanager.co.za/qawe'
])
