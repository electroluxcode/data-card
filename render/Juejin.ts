import { render,  } from './common';
import { isEndsWithASCII, encodeHTML } from '../common/utils';

function renderJuejinCard(data, lang) {
  let {
    user_name,
    description, // 描述
    follower_count, // 关注者
    got_digg_count, // 获得点赞
    article_count, // 文章数
    got_view_count, // 文章被阅读
    theme,
  } = data;
  let lengthLimit = 14;
  // if (description.length > lengthLimit) {
  //   description = description.substr(0, lengthLimit);
  //   description += '...';
  // }
  description = encodeHTML(description);
  let items = [];
  switch (lang) {
    case 'zh-CN':
      if (isEndsWithASCII(user_name)) {
        user_name += ' ';
      }
      items = [
        {  title: `Electrolux的掘金数据`, text: 'title', type: "title", color: "blue", icon: "fire" },
        {  title: `创作文章`, text: '10', type: "textarea", color: "", icon: "home"},
        { translate_y: 25, title: `发布沸点`, text: '1', type: "textarea", color: "", icon: "follower"},
        { translate_y: 50, title: `收藏`, text: '9', type: "textarea", color: "", icon: "like"},
        { translate_y: 75, title: `文章被点赞量`, text: '99', type: "textarea", color: "", icon: "fire" },
        { translate_y: 100, title: `掘友分`, text: '6330.4', type: "textarea", color: "", icon: "fire" },
        
        {  text: 's', type: "shape", },
      ];
      break;
    default:
      items = [
        // constructItem(94, 44, `${user_name}&apos;s Juejin Stats`, 'title', 18),
        // constructItem(55, 84, `Followers`, 'label', 13.5),

      ];
      break;
  }
  // console.log("items",items)
  return render(items, theme);
}

export { renderJuejinCard };
