angular.module('app.services', ['ngResource', 'ionic'])

.service('productService', ['$resource', function($resource){  
	this.item_list = $resource('http://138.68.0.83:7070/api/v1/product/list');			// get
 	this.item_detail = $resource('http://138.68.0.83:7070/api/v1/product/detail/:id'); 	// get product/update/:id

  
  this.item_create = $resource('http://138.68.0.83:7070/api/v1/product/create',
    {
      create: {
        method: 'POST',
        interceptor: {
            response: function(response) {
                var result = response.resource;
                result.$status = response.status;
                return result;
            }
        }
      }
    });




	this.item_update = $resource('http://138.68.0.83:7070/api/v1/product/update/:id', {id: '@id'},
    {
      update: {
        method: 'PUT',
        interceptor: { 
          response: function(response) {
            var result = response.resource;
            result.$status = response.status;
            return result;
          }
        }
      }      
    });

    this.item_delete = $resource('http://138.68.0.83:7070/api/v1/product/delete/:id', {id: '@id'},
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