"use strict";
const Juejin_js_1 = require("../model/Juejin.js");
const Juejin_js_2 = require("../view/Juejin.js");
const cache_js_1 = require("../common/cache.js");
module.exports = async (req, res) => {
    const { id, theme, lang, raw } = req.query;
    let key = 'j' + id;
    let data; // = cache.get(key);
    if (!data) {
        // 用来获取数据
        data = await (0, Juejin_js_1.getJuejinInfo)(id);
        cache_js_1.cache.set(key, data);
    }
    data.theme = theme;
    if (raw) {
        return res.json(data);
    }
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', `public, max-age=${cache_js_1.cacheTime}`);
    return res.send((0, Juejin_js_2.renderJuejinCard)(data, lang));
};
