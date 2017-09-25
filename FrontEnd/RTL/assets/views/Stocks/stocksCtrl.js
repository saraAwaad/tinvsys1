




//$scope.delete = function (id) {
//    ModalService.showModal({
//        templateUrl: "views/delete.html",
//        controller: "DeleteController",
//        inputs: {
//            title: " حذف شركة ",
//            message: ' هل انت متأكد انك تريد حذف حساب هذه الشركة(' + $scope.Companies[id].companyName + ') و كل بياناتها نهائيا؟'
//        }
//    }).then(function (modal) {
//        modal.element.modal();
//        modal.close.then(function () {
//            var header = {};
//            header.sRowIDs = $scope.Companies[id]._rowID;
//            iNNODB.delete('schCompanies', null, header).then(function (r) {
//                iNNODB.select('schCompanies', null, {}).then(function (response) {
//                    $scope.Companies = response.data;
//                }, function (r) {
//                });
//            }, function (r) {
//            });
//        });
//    });
//}
//$scope.edit = function (idx) {
//    $scope.newCompany = $scope.Companies[idx]
//    var popUpTitle = $scope.newCompany.status == "1" ? "وقف تنشيط " : "تنشيط"

//    ModalService.showModal({
//        templateUrl: "views/GeneralPopUp.html",
//        controller: "GeneralController",
//        inputs: {
//            title: popUpTitle,
//            message: ' هل انت متأكد انك تريد ' + popUpTitle + ' حساب هذه الشركة(' + $scope.Companies[idx].companyName + ') و كل بياناتها نهائيا؟',
//            BtnName: "موافق"
//        }
//    }).then(function (modal) {
//        modal.element.modal();
//        modal.close.then(function () {
//            $scope.newCompany.status = $scope.newCompany.status == "1" ? "0" : "1";
//            var header = {};
//            header.sFilter = { "_rowID": $scope.newCompany._rowID };
//            var data = [];
//            data.push($scope.newCompany);
//            iNNODB.update('schCompanies', data, header).then(function (response) {
//                iNNODB.select('schCompanies', null, {}).then(function (response) {
//                    $scope.Companies = response.data;
//                }, function (r) {
//                });
//            }, function (r) {
//            });
//        });
//    });
//}



//$scope.Companies_Search = function () {
//    $scope.divSearch = "views/Companies/search.html";
//}
//$scope.Search_Cancle = function () {
//    $scope.divSearch = "";
//}

//$scope.CompanySearch = function () {
//    $scope.Companies = $scope.AllCompanies
//    var filter = {}
//    for (var key in $scope.Company) {
//        if ($scope.Company.hasOwnProperty(key)) {
//            if ($scope.Company[key] != null && $scope.Company[key] != undefined && $scope.Company[key] != "")
//                filter[key] = $scope.Company[key];
//        }
//    }
//    header = {};
//    header.sFilter = filter;
//    iNNODB.select('schCompanies', null, header).then(function (response) {
//        $scope.Companies = response.data;
//    }, function (r) {
//    });
//}




app.controller('stocksCtrl', function ($scope) {
    $scope.onPageload = function () {

        var table = $('#sample_3').DataTable();
        //$scope.Employees = {};
        table.destroy();
        $scope.stocksData = [
            {
                "id": "34",
                "stock_code": "12351",
                "stock_type": "النوع1",
                "stock_employee": "موظف1",
                "stock_description": "توصيف1"
            },
            {
                "id": "35",
                "stock_code": "1223411",
                "stock_type": "2النوع",
                "stock_employee": "موظف2",
                "stock_description": "توصيف2"
            },
            {
                "id": "36",
                "stock_code": "1234351",
                "stock_type": "النوع3",
                "stock_employee": "موظف3",
                "stock_description": "توصيف3"
            },
            {
                "id": "34",
                "stock_code": "12351",
                "stock_type": "4النوع",
                "stock_employee": "موظ41",
                "stock_description": "توصيف4"
            },
            {
                "id": "38",
                "stock_code": "3241",
                "stock_type": "5النوع",
                "stock_employee": "موظف5",
                "stock_description": "توصيف5"
            }
        ];

        //$scope.reportData = $filter('orderBy')($scope.reportData, '-id');
        setTimeout(
            function() {
                if ($scope.stocksData == undefined || $scope.stocksData.length <= 0)
                    $('#sample_3').DataTable({});
                else
                    $('#sample_3').DataTable({
                        retrieve: true,
                        paging: true,
                        dom: 'Bfrtip',
                        buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
                    });
            },
            100);

    }
});





    //$scope.name = 'World';

    //$scope.exportAction = function (option) {
    //    switch (option) {
    //        case 'pdf': $scope.$broadcast('export-pdf', {});
    //            break;
    //        case 'excel': $scope.$broadcast('export-excel', {});
    //            break;
    //        case 'doc': $scope.$broadcast('export-doc', {});
    //            break;
    //        case 'csv': $scope.$broadcast('export-csv', {});
    //            break;
    //        default: console.log('no event caught');
    //    }
    //}

    //$scope.reportData = [
    //    {
    //        "id": "34",
    //        "name": "كيلو جرام ",
    //        "desc": " هو عبار عن الف جرام",
    //    },
    //    {
    //        "id": "44",
    //        "name": " عدد",
    //        "desc": " ",
    //    },
    //    {
    //        "id": "55",
    //        "name": " الطن",
    //        "desc": "عبارة عن الف كيلو ",
    //    },
    //    {
    //        "id": "66",
    //        "name": " كرتونه",
    //        "desc": "بها عدد معين من العناصر ",
    //    }
    //];

//});