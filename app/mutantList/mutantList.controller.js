(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

  function MutantListController() {
    var vm = this;

    vm.mutants = ['Wolverine', 'X23', 'dave'];
  }

})();
