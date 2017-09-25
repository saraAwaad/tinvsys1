app.controller('lkupUOICtrl', function ($scope) {
    $scope.onPageload = function () {

        var table = $('#sample_3').DataTable();
        //$scope.Employees = {};
        table.destroy();
        $scope.lkupUOI = [{ "id": "0#", "nameAr": "0الاسم العربي", "nameEn": "0الاسم الانجليزي" }, { "id": "1#", "nameAr": "1الاسم العربي", "nameEn": "1الاسم الانجليزي" }, { "id": "2#", "nameAr": "2الاسم العربي", "nameEn": "2الاسم الانجليزي" }, { "id": "3#", "nameAr": "3الاسم العربي", "nameEn": "3الاسم الانجليزي" }, { "id": "4#", "nameAr": "4الاسم العربي", "nameEn": "4الاسم الانجليزي" }];

        //$scope.reportData = $filter('orderBy')($scope.reportData, '-id');
        setTimeout(
            function () {
                if ($scope.lkupUOI == undefined || $scope.lkupUOI.length <= 0)
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
