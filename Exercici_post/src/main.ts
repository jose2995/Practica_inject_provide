
import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faFaceFrown } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { faFaceAngry } from '@fortawesome/free-solid-svg-icons'
import { faFaceSurprise } from '@fortawesome/free-solid-svg-icons'
import { faFaceSadCry } from '@fortawesome/free-solid-svg-icons'

library.add(faFaceSmile,faFaceFrown,faFaceAngry,faFaceSurprise,faFaceSadCry)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
