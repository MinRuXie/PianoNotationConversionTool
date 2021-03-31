import en from './lang-en.js';
import tc from './lang-tc.js';

const messages = {
    en: en,
    tc: tc
}

export const i18n = new VueI18n({
    locale: 'tc',
    messages: messages
});

let app = new Vue({
    el: "#app",
    i18n: i18n,
    methods: {
        switchLanguage: function () {
            let lang = this.$i18n.locale;
            if ( lang == 'tc' ) {
                this.$i18n.locale = 'en';
            } else {
                this.$i18n.locale = 'tc';
            }
        }
    }
});