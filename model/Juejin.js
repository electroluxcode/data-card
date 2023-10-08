"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJuejinInfo = void 0;
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const axiosConfig = require('../common/utils').mobileConfig;
async function getJuejinInfo(id) {
    // 定义基本数据
    let result = {
        // 名字
        user_name: 'username',
        // 掘力值(yes)
        power: 0,
        // 文章数(yes)
        post_article_count: 0,
        // 总浏览量(yes)
        got_view_count: 0,
        // 点赞(yes)
        got_digg_count: 0,
        // 发布沸点
        post_shortmsg_count: 1
    };
    try {
        // 两种数据 获取示例
        /**
         * @des 第一种:api示例
         */
        let res = await axios.get(`https://api.juejin.cn/user_api/v1/user/get?user_id=${id}`);
        result = Object.assign({}, result, res.data.data);
        // 方便调试
        fs.writeFile('./api_juejin.json', JSON.stringify(result), err => {
            if (err) {
                console.error(err);
            }
        });
    }
    catch (e) {
        console.error(e);
    }
    return result;
}
exports.getJuejinInfo = getJuejinInfo;
/**
 *  headers: {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Mobile Safari/537.36',
      'Cookie': `SESSDATA=0751d3bc%2C1711241145%2Cca651%2A91CjD4S5dUJcWGwqc1SyPmSaePdrza1ThTvfTgm6NN113j5t44afDd-tZRiFLtVJgYifwSVnhhZDEzNWZFS2FhbHdTTmY0LVcwdWhaUURYQkliOWcyUWdKTEd6VHVjQVZCd1pXUHJPMmdXTDF1RDlPTHV5U3pxNHhTOFY4ZmQwUG9uZmVvd3FVYnFBIIEC`
    }
 */
