//  解决单层ts显示不全
export type ShowMe<T> = {
    [K in keyof T]: T[K];
} & {};