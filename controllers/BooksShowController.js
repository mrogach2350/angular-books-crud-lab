angular
  .module ('booksApp')
  .controller('BooksShowController', BooksShowController);

  BooksShowController.$inject = ['$http', '$routeParams', '$location'];

  function BooksShowController ($http, $routeParams, $location) {
    var vm = this;
    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
    }).then(function successCallback(response){
      vm.book = response.data;
    });

    vm.deleteBook = function (book) {
      $http({
        method: 'DELETE',
        url: 'https://super-crud.herokuapp.com/books/' + book
      }).then(function successCallback(response){
        $location.path('/');
      });
    }


  }
