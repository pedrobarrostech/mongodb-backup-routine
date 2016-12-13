# mongodb-backup-routine

## Set Up cron to Run the Script Nightly

Now that we have our backup script ready to roll, we just need to get it running nightly to perform the backups. This is easily done by using cron to run the script.

On your server, simply open the crontab like this:

sudo crontab -e

In that file, underneath all the comments at the top, enter the following line:

45 1 * * * node index.js

In cron, each line represents a registered entry. The format of each entry tells Cron how to act, and features 5 different fields for specifying the day and time to run the command. These fields go in this order: minute, hour, day of month, month, day of week. An asterisk means it’ll run on every division of the interval (so, if you put an asterisk in the second field, it’ll run every hour).

So, in our entry above we’re telling cron to run our script (the path you see in the entry), at 1:45am every night. Easy! Just save your crontab and exit, and you’ll be off to the races.
