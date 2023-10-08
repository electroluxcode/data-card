
import {getJuejinInfo } from "../model/Juejin.js";
import {renderJuejinCard} from '../view/Juejin.js';
import {cacheTime, cache} from '../common/cache.js';
/**
 * @des 中间处理层 | 解析用户数据
 */
export = async (req, res) => {
  const { id, theme, lang, raw } = req.query;
  let key = 'j' + id;
  let data // = cache.get(key);
  if (!data) {
    // 用来获取数据
    data = await getJuejinInfo(id);
    cache.set(key, data);
  }
  
  data.theme = theme;
  if (raw) {
    return res.json(data);
  }
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
  return res.send(renderJuejinCard(data, lang));
};
