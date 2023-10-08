"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderJuejinCard = void 0;
const render_js_1 = require("../common/render.js");
const juejin_js_1 = require("../locale/juejin.js");
const utils_js_1 = require("../common/utils.js");
function renderJuejinCard(data, lang) {
    console.log("data:", data);
    // description = encodeHTML(description); post_shortmsg_count
    let items = [];
    if ((0, utils_js_1.isEndsWithASCII)(data.user_name)) {
        data.user_name += ' ';
    }
    let Locale = (0, juejin_js_1.LocaleJuejin)(lang);
    items = [
        { title: `Electrolux ${Locale.MainTitle}`, type: "title", color: "blue", icon: "fire" },
        { title: Locale?.articles, text: data.post_article_count, type: "textarea", color: "", icon: "home" },
        { translate_y: 25, title: Locale.story, text: data.post_shortmsg_count, type: "textarea", color: "", icon: "follower" },
        { translate_y: 50, title: Locale?.views, text: data.got_view_count, type: "textarea", color: "", icon: "like" },
        { translate_y: 75, title: Locale?.likes, text: data.got_digg_count, type: "textarea", color: "", icon: "fire" },
        { translate_y: 100, title: Locale?.score, text: data.power, type: "textarea", color: "", icon: "fire" },
        { text: 's', type: "shape", },
    ];
    return (0, render_js_1.RenderCard)(items, data.theme);
}
exports.renderJuejinCard = renderJuejinCard;
