import React from 'react';
import Modal from 'react-modal';
import Routes from './routes';

import './global.css';

Modal.defaultStyles.overlay.backgroundColor = '#3339';
Modal.defaultStyles.content.backgroundColor = 'transparent';
Modal.defaultStyles.content.top = '50%';
Modal.defaultStyles.content.left = '50%';
Modal.defaultStyles.content.right = 'auto';
Modal.defaultStyles.content.bottom = 'auto';
Modal.defaultStyles.content.width = '530px';
Modal.defaultStyles.content.padding = '15px';
Modal.defaultStyles.content.border = 'none';
Modal.defaultStyles.content.overlay = 'hidden';
Modal.defaultStyles.content.marginRight = '-50%';
Modal.defaultStyles.content.transform = 'translate(-50%, -50%)';
Modal.defaultStyles.content.opacity = 1;
Modal.defaultStyles.content.animationName = 'fadeInOpacity';
Modal.defaultStyles.content.animationIterationCount = 1;
Modal.defaultStyles.content.animationTimingFunction = 'ease-in';
Modal.defaultStyles.content.animationDuration = '500ms';

function App() {
  return <Routes />;
}

export default App;
