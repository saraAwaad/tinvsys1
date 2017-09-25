app.controller('categoryCtrl', function ($scope) {
    $scope.onPageload = function () {

        var table = $('#sample_3').DataTable();
        //$scope.Employees = {};
        table.destroy();
        $scope.category = [{ "id": "0#", "categoryName": "0الاسم", "notes": "0ملاحظات" }, { "id": "1#", "categoryName": "1الاسم", "notes": "1ملاحظات" }, { "id": "2#", "categoryName": "2الاسم", "notes": "2ملاحظات" }, { "id": "3#", "categoryName": "3الاسم", "notes": "3ملاحظات" }, { "id": "4#", "categoryName": "4الاسم", "notes": "4ملاحظات" }];

        //$scope.reportData = $filter('orderBy')($scope.reportData, '-id');
        setTimeout(
            function () {
                if ($scope.category == undefined || $scope.category.length <= 0)
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
