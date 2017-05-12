angular
  .module('booksApp')
  .controller('BooksController', BooksController);

function BooksController(BooksService) {
  const vm = this;

  vm.count = 0;
  vm.increaseCount = increaseCount;

  vm.books = [];

  BooksService.getBooks().then(books => {
    vm.books = books;
    console.log(books);
  });

  function increaseCount() {
    vm.count++;
    console.log(vm.count);
  }
}
