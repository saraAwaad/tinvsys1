'use strict';
/**
 * controllers for ng-table
 * Simple table with sorting and filtering on AngularJS
 */
var dataexam = [{
    Examination_Comittee_ID: "10",
    examinationComittee_Day: '324234234',
    examinationComittee_Date: 'sdfsdfsd',
    examinationComittee_Code: '12 months',
    examinationComittee_Order: '1 month',
    Order_Date: '623727',
    Member_Name:'787488',
    Notes: 'text'
},
{
    Examination_Comittee_ID: "12",
    examinationComittee_Day: '324234234',
    examinationComittee_Date: 'sdfsdfsd',
    examinationComittee_Code: '12 months',
    examinationComittee_Order: '1 month',
    Order_Date: '623727',
    Member_Name: '787488',
    Notes: 'hi'
}
];

app.controller('examinationComitteeCtrl', ["$scope", "$filter", "ngTableParams", "$timeout", "SweetAlert", function ($scope, $filter, ngTableParams, $timeout, SweetAlert) {

    $scope.header = [
        { title: "رقم لجنة الفحص", name: "Examination_Comittee_ID" },
        { title: "اليوم", name: "examinationComittee_Day" },
        { title: "التاريخ ", name: "examinationComittee_Date" },
        { title: "كود  لجنة الفحص", name: "examinationComittee_Code" },
        { title: " أمر التوريد الصادر", name: "examinationComittee_Order" },
        { title: "تاريخ أمر التوريد", name: "Order_Date" },
        { title: "رًيس اللجنة", name: "Member_Name" },
        { title: "ملاحظات", name: "Notes" }
    ];
    $scope.tableParams = new ngTableParams({
        page: 1, // show first page
        count: 5, // count per page
        sorting: {
            Examination_Comittee_ID: 'asc' // initial sorting
        }, // count per page
        filter: {
            Examination_Comittee_ID: '' // initial filter
        }
    }, {
            total: dataexam.length,
            getData: function ($defer, params) {
                // use build-in angular filter
                var orderedData = params.filter() ? $filter('filter')(dataexam, params.filter()) : dataexam;

                orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                $scope.examcommitees = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                params.total(orderedData.length);

                // set total for recalc pagination
                $defer.resolve($scope.examcommitees);
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
