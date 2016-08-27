angular.module('app.services', ['ngResource'])

.service('productService', ['$resource', function($resource){
	this.item_list = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/list');			// get
 	this.item_detail = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/detail/:id'); 	// get
	this.item_create = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/create'); 							//	post

	this.item_update = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/update/:id', {id: '@id'},
    {
      update: {
        method: 'PUT'
      }
    });

    this.item_delete = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/delete/:id', {id: '@id'},
    {
      delete: {
        method: 'DELETE',
        interceptor: { 
        	response: function(response) {
        		var result = response.resource;
        		result.$status = response.status;
        		return result;
        	}
        }
      }
    });

}]);