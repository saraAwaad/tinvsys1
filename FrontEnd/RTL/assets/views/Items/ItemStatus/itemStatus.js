app.controller('lkupItemStatusCtrl', function ($scope) {
    $scope.onPageload = function () {

        var table = $('#sample_3').DataTable();
        //$scope.Employees = {};
        table.destroy();
        $scope.lkupItemStatus = [{ "id": "0#", "itemStatusName": "0اسم الحالة", "notes": "0ملاحظات" }, { "id": "1#", "itemStatusName": "1اسم الحالة", "notes": "1ملاحظات" }, { "id": "2#", "itemStatusName": "2اسم الحالة", "notes": "2ملاحظات" }, { "id": "3#", "itemStatusName": "3اسم الحالة", "notes": "3ملاحظات" }, { "id": "4#", "itemStatusName": "4اسم الحالة", "notes": "4ملاحظات" }];

        //$scope.reportData = $filter('orderBy')($scope.reportData, '-id');
        setTimeout(
            function () {
                if ($scope.lkupItemStatus == undefined || $scope.lkupItemStatus.length <= 0)
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
