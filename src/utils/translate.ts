import { dictionary, type Locale } from "@/lib/dictionary";
import { get } from "lodash";

export const translate = ({ val, lang }: { val: string; lang: Locale }) => {
    const section = get(dictionary, [lang, val], {});
    const t = (key: string) => get(section, key, "");
    return t;
}