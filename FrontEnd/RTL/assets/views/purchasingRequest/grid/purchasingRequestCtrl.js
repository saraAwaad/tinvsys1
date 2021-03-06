﻿'use strict';
/**
 * controllers for ng-table
 * Simple table with sorting and filtering on AngularJS
 */
var dataRequest = [{
    Purchase_Request_ID: "10",
    Purchase_Request_Date: '324234234',
    Original_Request_Date: 'sdfsdfsd',
    Purchase_Requester: 'sdasdsadas',
    Notes: 'text'
},
{
    Purchase_Request_ID: "12",
    Purchase_Request_Date: '324234234',
    Original_Request_Date: 'sdfsdfsd',
    Purchase_Requester: 'sdasdsadas',
    Notes: 'ali'
}
];

app.controller('purchasingRequestCtrl', ["$scope", "$filter", "ngTableParams", "$timeout", "SweetAlert", function ($scope, $filter, ngTableParams, $timeout, SweetAlert) {

    $scope.header = [
        { title: "كودالطلب", name: "Purchase_Request_ID" },
        { title: "تاريخ انشاء الطلب", name: "Purchase_Request_Date" },
        { title: "تاريخ التقدم للطلب", name: "Original_Request_Date" },
        { title: "مقدم من", name: "Purchase_Requester" },
        { title: "ملاحظات", name: "Notes" }
    ];
    $scope.tableParams = new ngTableParams({
        page: 1, // show first page
        count: 5, // count per page
        sorting: {
            Purchase_Request_ID: 'asc' // initial sorting
        }, // count per page
        filter: {
            Purchase_Request_ID: '' // initial filter
        }
    }, {
            total: dataRequest.length,
            getData: function ($defer, params) {
                // use build-in angular filter
                var orderedData = params.filter() ? $filter('filter')(dataRequest, params.filter()) : dataRequest;

                orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                $scope.purchaseRequests = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                params.total(orderedData.length);

                // set total for recalc pagination
                $defer.resolve($scope.purchaseRequests);
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
        alert(id);
    }


    $scope.archieveRow = function (id) {

    }

}]);
