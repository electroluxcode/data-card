const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const axiosConfig = require('../common/utils').mobileConfig;
import { ShowMe } from "../common/type"

// ts 不会做深层次计算 | 因此我们要浮动上去显示具体类型的时候可以这样 
// type xx & {}
type JueJinReceiveType =  {
  // [key : string ] : any;
  user_name: string,
  // 掘力值(yes)
  power: number,
  // 文章数(yes)
  post_article_count: number,
  // 总浏览量(yes)
  got_view_count: number,
  // 点赞(yes)
  got_digg_count: number,
  // 发布沸点
  post_shortmsg_count: number,
  // 默认添加theme
  theme?:any
} 



async function getJuejinInfo(id) {
  // 定义基本数据
  let result:JueJinReceiveType = {
    // 名字
    user_name: 'username',
    // 掘力值(yes)
    power: 0,
    // 文章数(yes)
    post_article_count:0,
    // 总浏览量(yes)
    got_view_count:0,
    // 点赞(yes)
    got_digg_count:0,
    // 发布沸点
    post_shortmsg_count:1
  };
  
  try {
    // 两种数据 获取示例
    /**
     * @des 第一种:api示例
     */
    let res = await axios.get(
      `https://api.juejin.cn/user_api/v1/user/get?user_id=${id}`
    )

    result = Object.assign({},result,res.data.data)

    // 方便调试
    fs.writeFile('./api_juejin.json', JSON.stringify(result), err => {
      if (err) {
        console.error(err);
      }
    });
   
  } catch (e) {
    console.error(e);
  }
  return result as JueJinReceiveType;
}
type JueJinReceiveTypeShow = ShowMe<JueJinReceiveType>
export {
  getJuejinInfo,
  JueJinReceiveTypeShow as JueJinReceiveType
};



/**
 *  headers: {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Mobile Safari/537.36',
      'Cookie': `SESSDATA=0751d3bc%2C1711241145%2Cca651%2A91CjD4S5dUJcWGwqc1SyPmSaePdrza1ThTvfTgm6NN113j5t44afDd-tZRiFLtVJgYifwSVnhhZDEzNWZFS2FhbHdTTmY0LVcwdWhaUURYQkliOWcyUWdKTEd6VHVjQVZCd1pXUHJPMmdXTDF1RDlPTHV5U3pxNHhTOFY4ZmQwUG9uZmVvd3FVYnFBIIEC`
    }
 */
