// ============================================================
// import models
const { validate } = require('uuid');
const { getSchedule, stringToArray } = require('cron-converter');
// ============================================================
// import controllers
const factoryControllers = require('../factoryControllers');

// ============================================================
// import models
const pillRemainderModel = require('../../models/PillReminder/pillRemainderModel');
const schedulterModel = require('../../models/shared/schedulersModel');
const memberModel = require('../../models/shared/membersModel');
const userModel = require('../../models/shared/userModel');

// ============================================================
// import utilities
const catchAsync = require('../../util/catchAsync');
const encryptID = require('../../util/uuid');
const AppError = require('../../util/AppError');
const sendEmail = require('../../util/sendMail');

const runPillReminder = catchAsync(async (remind, reminderId, unic) => {
    try {
        let memberdata = [];
        if (!remind.member) {
            memberdata = memberModel.findOne({
                hiwmID: remind.memberEID,
                userId: remind.userId
            });
        }
        const checkedDta = await Promise.all([
            memberdata,
            userModel.findOne({
                phone: remind.intimationPerson.personPhone
            })
        ]);
        if (!remind.member) {
            remind.member = checkedDta[0];
        }

        const arr = stringToArray(
            remind.time.split(' ').splice(1, remind.time.length).join(' ')
        );

        // Get the iterator, initialised to now
        const schedule = new Date(getSchedule(arr).next().toISO())
            .toLocaleString()
            .split(', ')[1];

        // const obj = {
        //     name: 'Pill Reminder',
        //     type: 'Remind Pills',
        //     status: true,
        //     properties: remind,
        //     hiwasomID: await encryptID(process.env.PILL_REMINDER_SECRET),
        //     uniqueId: unic,
        //     reminderId: reminderId,
        //     createdAt: Date.now()
        // };
        const reminder = await pillRemainderModel.findOneAndUpdate(
            {
                hiwprmEID: reminderId,
                userId: remind.userId
            },
            {
                reminderDetails: { status: 'waiting', time: schedule }
            },
            {
                runValidators: true
            }
        );
        if (!reminder) {
            return new AppError('Reminder not found.', 400);
        }
        await Promise.all([
            sendEmail({
                email: remind.userEmail,
                subject: 'Pill Reminder Neutral',
                message: `Your registerd persons's pill taking time. This will be one time reminder.`
            }),
            sendEmail({
                email: 'muthazhagan187@gmail.com',
                subject: 'Pill Reminder Patient',
                message: `Your pill take time is closen.Please take the pill.here is the Details, \n
            name  : ${remind.medicineName}
            image : ${remind.pillImage}
            Number of pills : ${remind.noofPills}
            Befor food / After Food : ${remind.foodType} Food
            .`
            }),
            sendEmail({
                email: remind.userEmail,
                subject: 'Pill Reminder intimation person',
                message: `Your father pill taking time is about to come. so please make remind him.`
            })
        ]);

        return true;
    } catch (err) {
        console.log(err);
    }
});

module.exports = { runPillReminder };
