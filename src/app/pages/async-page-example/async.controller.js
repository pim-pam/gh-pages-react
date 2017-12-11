'use strict';

function asyncController($log) {
  'ngInject';

  $log.debug('Hello from Lazy Loaded controller!');

}

export default asyncController;
