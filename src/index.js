import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter}  from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'

import App from './App';

import {
  faSearch,
  faSignInAlt,
  faRunning,
  faEnvelope,
  faCopyright,
  faBars,
  faThumbsDown,
  faThumbsUp,
  faFilm,
  faUserLock,
  faFolderOpen,
  faEdit,
  faTrash,
  faArrowRight,
  faBookOpen,
  faComment,
  faGift,
  faGlobeAmericas,
  faListOl,
  faListUl,
  faPenAlt,
  faQuoteLeft,
  faHamburger,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faSearch,
  faSignInAlt,
  faRunning,
  faEnvelope,
  faCopyright,
  faBars,
  faHamburger,
  faThumbsDown,
  faThumbsUp,
  faFilm,
  faUserLock,
  faGift, // logo
  faListUl, // style: listicle
  faListOl, // style: howto
  faGlobeAmericas, // style: news
  faPenAlt, // style: interview
  faBookOpen, // style: story
  faComment,
  faQuoteLeft,
  faArrowRight,
  faFolderOpen,
  faEdit,
  faTrash
)

ReactDOM.render(
<BrowserRouter>
  <App/>
</BrowserRouter>,document.getElementById('root'));




