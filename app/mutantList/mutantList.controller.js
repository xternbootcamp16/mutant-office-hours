(function() {
  'use strict';

  angular
    .module('mutantApp.mutantList')
    .controller('MutantListController', MutantListController);

  function MutantListController() {
    var vm = this;

    vm.addMutant = addMutant;
    vm.newMutant = new Mutant();
    vm.mutants = ['Wolverine', 'X23', 'dave'];

    function Mutant() {
      this.name = '';
      this.phone = '';
      this.topic = '';
      this.notified = false;
      this.complete = false;
    }

    function addMutant() {
      vm.mutants.push('professor x')
    }
  }

})();
