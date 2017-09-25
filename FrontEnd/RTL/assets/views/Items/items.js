app.controller('itemsCtrl', function ($scope) {
    $scope.onPageload = function () {

        var table = $('#sample_3').DataTable();
        //$scope.Employees = {};
        table.destroy();
        $scope.items = [{ "id": "0#", "itemCode": "0كود القيد", "itemCategory": "0تصنيف القيد", "itemUOI": "0UOI القيد", "itemVendor": "0تاجر القيد", "itemDescription": "0توصيف القيد" }, { "id": "1#", "itemCode": "1كود القيد", "itemCategory": "1تصنيف القيد", "itemUOI": "1UOI القيد", "itemVendor": "1تاجر القيد", "itemDescription": "1توصيف القيد" }, { "id": "2#", "itemCode": "2كود القيد", "itemCategory": "2تصنيف القيد", "itemUOI": "2UOI القيد", "itemVendor": "2تاجر القيد", "itemDescription": "2توصيف القيد" }, { "id": "3#", "itemCode": "3كود القيد", "itemCategory": "3تصنيف القيد", "itemUOI": "3UOI القيد", "itemVendor": "3تاجر القيد", "itemDescription": "3توصيف القيد" }, { "id": "4#", "itemCode": "4كود القيد", "itemCategory": "4تصنيف القيد", "itemUOI": "4UOI القيد", "itemVendor": "4تاجر القيد", "itemDescription": "4توصيف القيد" }];

        //$scope.reportData = $filter('orderBy')($scope.reportData, '-id');
        setTimeout(
            function () {
                if ($scope.items == undefined || $scope.items.length <= 0)
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
