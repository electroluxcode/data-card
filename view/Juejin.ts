import { RenderCard  } from '../common/render.js';
import { LocaleJuejin,LocaleType  } from '../locale/juejin.js';
import { isEndsWithASCII, encodeHTML } from '../common/utils.js';
import {JueJinReceiveType} from "../model/Juejin.js"
function renderJuejinCard(data:JueJinReceiveType, lang:LocaleType) {
 
  console.log("data:",data)
  
  
  // description = encodeHTML(description); post_shortmsg_count
  let items = [];

  if (isEndsWithASCII(data.user_name)) {
    data.user_name += ' ';
  }
  let Locale = LocaleJuejin(lang)
  items = [
    {  title: `Electrolux ${Locale.MainTitle}`,  type: "title", color: "blue", icon: "fire" },
    {  title: Locale?.articles, text: data.post_article_count, type: "textarea", color: "", icon: "home"},
    { translate_y: 25, title: Locale.story, text: data.post_shortmsg_count, type: "textarea", color: "", icon: "follower"},
    { translate_y: 50, title: Locale?.views, text: data.got_view_count, type: "textarea", color: "", icon: "like"},
    { translate_y: 75, title: Locale?.likes, text: data.got_digg_count, type: "textarea", color: "", icon: "fire" },
    { translate_y: 100, title: Locale?.score, text: data.power, type: "textarea", color: "", icon: "fire" },
    {  text: 's', type: "shape", },
  ];
  return RenderCard(items, data.theme);
}

export { renderJuejinCard };
