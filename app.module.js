angular
  .module('booksApp', ['ui.router'])
  .config(config)
  .component('bookList', {
    templateUrl: 'bookList.html',
    controller: 'BooksController'
  });


function config($stateProvider, $urlRouterProvider) {
  console.log('Hello from angular!');

  $stateProvider
    .state({
      name: 'home',
      url: '/',
      template: `<a type="button" class="btn btn-default" href="#!/books">
          Go to Books
      </a>`
    })
    .state({
      name: 'books',
      url: '/books',
      component: 'bookList'
    });

  $urlRouterProvider.otherwise('/');
}
