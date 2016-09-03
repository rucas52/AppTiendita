angular.module('app.controllers', ['app.services', 'ngCordova'])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('inicioCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

  
.controller('productosCtrl', ['$scope', '$stateParams', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
	function ($scope, $stateParams, productService) {
        // Listar los productos
        productService.item_list.query(function(data){
            $scope.list = data;
            console.log($scope.list);
    });         

}])


.controller('detalleDeProductoCtrl', ['$scope', '$stateParams', '$cordovaDialogs', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams, $cordovaDialogs, productService) {
     console.log($stateParams.id);

      $scope.data_product = {};

      productService.item_detail.get({id: $stateParams.id}, function(_data){
        console.log(_data);
        
        $scope.name = _data.name;
        $scope.type = _data.type;
        $scope.quantity = _data.quantity;
        $scope.price = _data.price;
        $scope.id = _data.id;
        
        $scope.data_product = _data;
        localStorage.setItem('product_' + _data.id, JSON.stringify(_data));
      });



  $scope.deleteProduct = function(){
        //console.log($scope.id);
        //console.log('Entró a delete');

        productService.item_delete.delete({id: $scope.id}, function(data){
          $scope.data = data;
          $scope.id = data.id;
          localStorage.setItem('delete' + data.id, JSON.stringify(data));
          console.log($scope.data);
          console.log(typeof data.$status);

          if(data.$status === 204)
          {
               $cordovaDialogs.alert('Eliminó el producto correctamente', 'Resultado operación', 'Aceptar')
                  .then(function() {
                    // callback success
                  });
          }
    }); 
    }

}])


.controller('ediciNDeProductoCtrl', ['$scope', '$stateParams', '$cordovaDialogs', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
   function ($scope, $stateParams, $cordovaDialogs, productService) {
     console.log($stateParams.id);

      $scope.data_product = {};

      productService.item_detail.get({id: $stateParams.id}, function(_data){
        console.log(_data);
        
        $scope.name = _data.name;
        $scope.type = _data.type;
        $scope.quantity = _data.quantity;
        $scope.price = _data.price;
        $scope.id = _data.id;
        
        $scope.data_product = _data;
        localStorage.setItem('product_' + _data.id, JSON.stringify(_data));

    });  

    // Actualizar producto
    $scope.productUpdate = function(name, type, quantity, price){
        var dataToEdit = {
          "name": name,
          "type": type,
          "quantity": quantity,
          "price": price          
        };


        productService.item_update.update({id: $scope.id}, dataToEdit, function(_data){
           $scope.data = _data;
           $scope.id = _data.id;
           localStorage.setItem('update' + _data.id, JSON.stringify(_data));
           console.log($scope._data);
           console.log(typeof _data.$status);   

           if(_data.$status === 204)
           {
               $cordovaDialogs.alert('Se actualizó correctamente el producto', 'Resultado operación', 'Aceptar')
                  .then(function() {
                    // callback success
                  });
           }

          });           
    }


}])


.controller('deleteProduct1', ['$scope', '$stateParams', 'productService', '$cordovaDialogs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams, productService, $cordovaDialogs) {
           
 
}])
   

.controller('cloudCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('perfilCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('actualizaTusDatosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('registrarseCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cambiarContraseACtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
  
.controller('crearProductoCtrl', ['$scope', '$stateParams', 'productService', '$cordovaDialogs',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams, productService, $cordovaDialogs) {

    $scope.productCreate = function(product){
        console.log('Hola mundo');

        var dataToCreate = {
          "name": product.name,
          "type": product.type,
          "quantity": product.quantity,
          "price": product.price          
        };



        productService.item_create.save(dataToCreate, function(data){
        $scope.data = data;  
        console.log($scope.data);

        if(data.$status === 201)
        {
            $cordovaDialogs.alert('Se creó correctamente el producto', 'Resultado operación', 'Aceptar')
                  .then(function() {
                    // callback success
            });
        }
           

    });
    }

}])