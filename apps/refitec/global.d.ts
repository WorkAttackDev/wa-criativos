// Use type safe message keys with `next-intl`
type Messages = typeof import("./src/dictionaries/pt.json");
declare interface IntlMessages extends Messages {}
