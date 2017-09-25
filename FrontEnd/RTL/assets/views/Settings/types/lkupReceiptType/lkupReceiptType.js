app.controller('lkupReceiptTypeCtrl', function ($scope) {
    $scope.onPageload = function () {

        var table = $('#sample_3').DataTable();
        //$scope.Employees = {};
        table.destroy();
        $scope.lkupReceiptType = [{ "id": "0#", "receiptTypeName": "0الاسم", "notes": "0ملاحظات" }, { "id": "1#", "receiptTypeName": "1الاسم", "notes": "1ملاحظات" }, { "id": "2#", "receiptTypeName": "2الاسم", "notes": "2ملاحظات" }, { "id": "3#", "receiptTypeName": "3الاسم", "notes": "3ملاحظات" }, { "id": "4#", "receiptTypeName": "4الاسم", "notes": "4ملاحظات" }];

        //$scope.reportData = $filter('orderBy')($scope.reportData, '-id');
        setTimeout(
            function () {
                if ($scope.lkupReceiptType == undefined || $scope.lkupReceiptType.length <= 0)
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
