import { useTranslate, useTranslateObj } from './hooks'
import { Link } from './Link'
import { Translation } from './Translation'
import { translate } from './translations'
import { useRouter } from './useRouter'

export {
    // custom Link component with language prefix
    Link,
    // get translations object for given locale
    translate,
    // component to get translation for given path with current locale
    Translation,
    // custom router with language prefix
    useRouter,
    // get translations object with current locale
    useTranslate,
    // get translation from given object with current locale
    useTranslateObj,
}
