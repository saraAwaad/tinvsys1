'use strict';
/**
 * controllers for ng-table
 * Simple table with sorting and filtering on AngularJS
 */
var data1 = [{
    Quote_ID: "10",
    Quote_Date: '324234234',
    Quote_supplier: 'sdfsdfsd',
    Contract_period: '12 months',
    Supply_Duration: '1 month',
    Tax_File_No: '623727',
    Tax_Card_No:'787488',
    Notes: 'text'
},
{
    Quote_ID: "12",
    Quote_Date: '324234234',
    Quote_supplier: 'sdfsdfsd',
    Contract_period: '12 months',
    Supply_Duration: '1 month',
    Tax_File_No: '623727',
    Tax_Card_No: '787488',
    Notes: 'hi'
}
];

app.controller('QuoteCtrl', ["$scope", "$filter", "ngTableParams", "$timeout", "SweetAlert", function ($scope, $filter, ngTableParams, $timeout, SweetAlert) {

    $scope.header = [
        { title: "رقم العرض", name: "Quote_ID" },
        { title: "التاريخ ", name: "Quote_Date" },
        { title: "المورد", name: "Quote_supplier" },
        { title: " مدة الارتباط", name: "Contract_period" },
        { title: "مدة التوريد", name: "Supply_Duration" },
        { title: "رقم الملف الضريبى", name: "Tax_File_No" },
        { title: "رقم البطاقة الضريبية", name: "Tax_Card_No" },
        { title: "ملاحظات", name: "Notes" }
    ];
    $scope.tableParams = new ngTableParams({
        page: 1, // show first page
        count: 5, // count per page
        sorting: {
            Quote_ID: 'asc' // initial sorting
        }, // count per page
        filter: {
            Quote_ID: '' // initial filter
        }
    }, {
            total: data1.length,
            getData: function ($defer, params) {
                // use build-in angular filter
                var orderedData = params.filter() ? $filter('filter')(data1, params.filter()) : data1;

                orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                $scope.quotes = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                params.total(orderedData.length);

                // set total for recalc pagination
                $defer.resolve($scope.quotes);
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
