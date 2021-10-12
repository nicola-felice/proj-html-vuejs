import Vue from 'vue'
import App from './App.vue'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faSearch, faDownload, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faUser, faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faInstagram, faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faChevronDown, faUser, faSearch, faLinkedin, 
  faInstagram, faFacebookSquare, faTwitter, faDownload, 
  faLongArrowAltRight, faFileAlt );
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
