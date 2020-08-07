var cron = require('node-cron')
var robot = require('robotjs')

cron.schedule('*/5 * * * * *', () => {
    robot.mouseClick()
});