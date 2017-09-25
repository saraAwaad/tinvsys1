app.controller('lkupFinYearCtrl', function ($scope) {
    $scope.onPageload = function () {

        var table = $('#sample_3').DataTable();
        //$scope.Employees = {};
        table.destroy();
        $scope.lkupFinYear = [{ "id": "0#", "name": "0الاسم", "start": "0 البداية", "end": "0 النهاية", "status": "0 الحالة" }, { "id": "1#", "name": "1الاسم", "start": "1 البداية", "end": "1 النهاية", "status": "1 الحالة" }, { "id": "2#", "name": "2الاسم", "start": "2 البداية", "end": "2 النهاية", "status": "2 الحالة" }, { "id": "3#", "name": "3الاسم", "start": "3 البداية", "end": "3 النهاية", "status": "3 الحالة" }, { "id": "4#", "name": "4الاسم", "start": "4 البداية", "end": "4 النهاية", "status": "4 الحالة" }];

        //$scope.reportData = $filter('orderBy')($scope.reportData, '-id');
        setTimeout(
            function () {
                if ($scope.lkupFinYear == undefined || $scope.lkupFinYear.length <= 0)
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
