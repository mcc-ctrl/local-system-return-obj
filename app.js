const os = require('os');

const local_system = {
    'Operating System': os.type(),
    'Network Interfaces': os.networkInterfaces(),
    'Last Reboot': os.uptime()

};


console.log(local_system);