let express = require('express');// 引入express文件
let router = express.Router();// 创建router实例
// let Mock = require('mockjs');// 引入mockjs模块创建假数据

router.all('/lottery.do', function(req, res) {
    let data ={
        data: {
            dayLotteryTimesLimit: 10,
            description: "抽奖活动",
            endDate: 1518848777000,
            id: 5,
            name: "3月抽奖",
            prizeList: [
              {id: 4, lotteryId: 5, type: 4, name: "50元红包", value: 200},
              {id: 5, lotteryId: 5, type: 3, name: "爱奇艺会员1个月", value: 500},
              {id: 6, lotteryId: 5, type: 3, name: "夏凉坐垫", value: 10},
              {id: 8, lotteryId: 5, type: 1, name: "幸福西饼代金券", value: 200},
              {id: 0, name: "谢谢参与"},
              {id: 9, lotteryId: 5, type: 3, name: "美的遥控落地扇", value: 100}
            ],
            startDate: 1492241168000
        },
        errorCode: 0,
        msg: ""
    }
    res.json(data);
});

module.exports = router;