const axios = require('axios');
const cheerio = require('cheerio');
const axiosConfig = require('../common/utils').mobileConfig;

async function getJuejinInfo(id) {
  let result = {
    user_name: 'username',
    // 掘力值
    power: 0,
    // 关注人数
    follower_count:0,
    // 总浏览量
    got_view_count:0,
    // 总点赞量
    got_digg_count:0,
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
    // console.log("提供了api接口:",result)

    /**
     * @des 第二种:解析html数据示例
     */
    // let test =  await axios.get(
    //   `https://juejin.cn/user/${id}`, {
    //     "Header": {
    //     }
    //   }
    // )
    // let $ = cheerio.load(test.data);
    
    // $('.username .user-name').each((i, e) => {
    //   result.name = $(e).text();
    // });
    // console.log("result.name",result)
    
   
  } catch (e) {
    console.error(e);
  }
  return result;
}

export {
  getJuejinInfo
};



/**
 *  headers: {
      'User-Agent': 'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Mobile Safari/537.36',
      'Cookie': `SESSDATA=0751d3bc%2C1711241145%2Cca651%2A91CjD4S5dUJcWGwqc1SyPmSaePdrza1ThTvfTgm6NN113j5t44afDd-tZRiFLtVJgYifwSVnhhZDEzNWZFS2FhbHdTTmY0LVcwdWhaUURYQkliOWcyUWdKTEd6VHVjQVZCd1pXUHJPMmdXTDF1RDlPTHV5U3pxNHhTOFY4ZmQwUG9uZmVvd3FVYnFBIIEC`
    }
 */
