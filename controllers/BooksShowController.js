angular
  .module ('booksApp')
  .controller('BooksShowController', BooksShowController);

  BooksShowController.$inject = ['$http', '$routeParams'];

  function BooksShowController ($http, $routeParams) {
    var vm = this;
    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
    }).then(function successCallback(response){
      console.log('found book ', response.data);
      vm.book = response.data;
    });

    vm.deleteBook = function (book) {
      $http({
        method: 'DELETE',
        url: 'https://super-crud.herokuapp.com/books/' + booksShowCtrl.book._id
      }).then(function successCallback(response){
        console.log(response);
      });
    }


  }
