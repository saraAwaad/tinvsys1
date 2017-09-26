'use strict';
/**
 * controllers for ng-table
 * Simple table with sorting and filtering on AngularJS
 */
var data = [{
        Order_ID: "10",
        Order_Date: '324234234',
        Supplier: 'sdfsdfsd',
        Supplier_Address: 'jfkjfk',
        Order_Period: '1 month',
        Payment_Type: '623727',
        Receipt_Type:'787488',
        Notes: 'text'
    },
    {
        Order_ID: "12",
        Order_Date: '32224234',
        Supplier: 'sdfsdfsd',
        Supplier_Address: 'jfkjfk',
        Order_Period: '1 month',
        Payment_Type: '623727',
        Receipt_Type: '787488',
        Notes: 'kkk'
    }
];

app.controller('orderCtrl', ["$scope", "$filter", "ngTableParams", "$timeout", "SweetAlert", function ($scope, $filter, ngTableParams, $timeout, SweetAlert) {

    $scope.header = [
        { title: "رقم امر التوريد", name: "Order_ID" },
        { title: "التاريخ ", name: "Order_Date" },
        { title: "المورد", name: "Supplier" },
        { title: " العنوان", name: "Supplier_Address" },
        { title: "مدة التوريد", name: "Order_Period" },
        { title: "الدفع", name: "Payment_Type" },
        { title: "الاستلام", name: "Receipt_Type" },
        { title: "ملاحظات", name: "Notes" }
    ];
    $scope.tableParams = new ngTableParams({
        page: 1, // show first page
        count: 5, // count per page
        sorting: {
            Order_ID: 'asc' // initial sorting
        }, // count per page
        filter: {
            Order_ID: '' // initial filter
        }
    }, {
            total: data.length,
            getData: function ($defer, params) {
                // use build-in angular filter
                var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;

                orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                $scope.orders = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                params.total(orderedData.length);

                // set total for recalc pagination
                $defer.resolve($scope.orders);
            }
        });

    $scope.deleteRow = function (id) {
        SweetAlert.swal({
            "title": "هل انت متأكد أنك تريد حذف البيانات؟",
            'text': "لن تتمكن من استرجاع هذه البيانات لاحقا",
            'type': "warning",

            'showCancelButton': true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "موافق",
            cancelButtonText: "الغاء",
            closeOnConfirm: false,
            closeOnCancel: false
        }
            , function (isConfirm) {
                if (isConfirm) {
                    deleteFromDB(id);
                    SweetAlert.swal({
                        title: "تمت العملية بنجاح",
                        text: "لقد تم حذف البيانات بنجاح",
                        type: "success",
                        confirmButtonColor: "#007AFF"
                    });
                } else {
                    SweetAlert.swal({
                        title: "تم الغاء العملية ",
                        text: "لم يتم حذف البيانات ",
                        type: "error",
                        confirmButtonColor: "#007AFF"
                    });
                }
            }
        );
    }

    var deleteFromDB = function (id) {
      //  alert(id);
    }


    $scope.archieveRow = function (id) {

    }

}]);
