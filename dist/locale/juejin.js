"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocaleJuejin = void 0;
function LocaleJuejin(key) {
    /**
     * @common
     * @articles : 文章数量
     * @credits : 评论量
     * @followers : 粉丝数量
     * @likes : 获赞
     * @views : 阅读量/访问量
     * @description : 签名
     * @favorites : 收藏
     * @level : 等级
     * @score : 分数
     * @story : 动态
     * @MainTitle : 标题
     *
     * @juejin特有的
     * @news : 发布沸点
     * @score : 掘友分
     * @story : 发布沸点
     */
    let locale = {
        "zh-CN": {
            favorites: "收藏量",
            articles: "文章数量",
            followers: "粉丝数量",
            likes: "获赞",
            views: "阅读量",
            description: "签名",
            credits: "评论量",
            level: "等级",
            score: "掘友分",
            story: "发布沸点",
            MainTitle: "的掘金数据"
        },
        "default": {
            favorites: "favorites",
            articles: "articles",
            followers: "followers",
            likes: "likes",
            views: "views",
            description: "description",
            credits: "credits",
            level: "level",
            score: "score",
            story: "story",
            MainTitle: "&apos;s Juejin Cards"
        }
    };
    return locale[key] ?? locale["default"];
}
exports.LocaleJuejin = LocaleJuejin;
