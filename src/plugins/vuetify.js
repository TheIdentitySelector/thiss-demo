import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#0D2E41',
                secondary: '#00798A',
                anchor: '#00798A',
                accent: '#F2E4DF',
                error: '#ff6464',
                info: '#F8AF2C',
                grey: '#363636',
                background: '#314f56'
            },
        },
    },
    icons: {
        iconfont: 'mdiSvg',
    },
});
