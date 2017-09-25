app.controller('stockTypesCtrl', function ($scope) {
    $scope.onPageload = function () {

        var table = $('#sample_3').DataTable();
        //$scope.Employees = {};
        table.destroy();
        $scope.stockTypes = [
            {
                "id": "34",
                "name": "نوع 1",
                "notes": "ملاحظات 1"
            },
            {
                "id": "36",
                "name": "نوع 2",
                "notes": "ملاحظات 2"
            },
            {
                "id": "8",
                "name": "نوع 3",
                "notes": "ملاحظات 3"
            },
            {
                "id": "14",
                "name": "نوع 4",
                "notes": "ملاحظات 4"
            }
        ];

        //$scope.reportData = $filter('orderBy')($scope.reportData, '-id');
        setTimeout(
            function() {
                if ($scope.stockTypes == undefined || $scope.stockTypes.length <= 0)
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
