require('shelljs/global');

var DATABASE_NAME = 'mean-universal';
var BKP_DIR = 'db_backups';
var DIR = new Date().toISOString().replace(/T/, '-').replace(':', '-').replace(/\..+/, '').replace(':', '-');
var DEST = BKP_DIR + '/' + DIR;

mkdir(BKP_DIR);

exec('mongodump --db ' + DATABASE_NAME + ' -o ' + DEST + '| gzip > '+ DEST +'.gz');