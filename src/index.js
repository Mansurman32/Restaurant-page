import _ from 'lodash';
function component() {
    const element = document.getElementById('content');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'Test'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());