const mParser = require('./lib/lifx-lan-parser');

const command = process.argv[2];
const arg1 = process.argv.length >= 4 && process.argv[3] || undefined;
const arg2 = process.argv.length >= 5 && process.argv[4] || undefined;
const arg3 = process.argv.length >= 6 && process.argv[5] || undefined;

switch (command) {
    case 'parse':

        for (let i = 3; i < process.argv.length; i++) {
            let buf = Buffer.from(process.argv[i], 'hex');
            const response = mParser.parse(buf);
            console.log(response);
        }

        break;
}