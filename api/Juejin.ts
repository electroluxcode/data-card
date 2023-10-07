const {getJuejinInfo} = require('../crawler/Juejin');
const {renderJuejinCard} = require('../render/Juejin');
const { cacheTime, cache } = require('../common/cache');

/**
 * @des 中间处理层 | 解析用户数据
 */
export = async (req, res) => {
  const { id, theme, lang, raw } = req.query;
  let key = 'j' + id;
  let data = cache.get(key);
  // if (!data) {
  //   // 用来获取数据
  //   data = await getJuejinInfo(id);
  //   cache.set(key, data);
  // }
  data = {
    user_name: 'username',
    // 掘力值
    power: 0,
    // 关注人数
    follower_count:0,
    // 总浏览量
    got_view_count:0,
    // 总点赞量
    got_digg_count:0,
    description:"简介"
  };
  data.theme = theme;
  if (raw) {
    return res.json(data);
  }
  // 遍历数据 | 标准化数字
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
  return res.send(renderJuejinCard(data, lang));
};
