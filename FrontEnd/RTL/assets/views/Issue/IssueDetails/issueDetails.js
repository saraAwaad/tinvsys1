app.controller('issueDetailsCtrl', function ($scope) {
    $scope.onPageload = function () {

        var table = $('#sample_3').DataTable();
        //$scope.Employees = {};
        table.destroy();
        $scope.issueDetails = [{ "id": "0#", "issueID": "0كود الصرف", "item": "0القيد", "requestedQTY": "0الكمية المطلوبة", "approvedQTY": "0الكمية المعتمدة", "issedQTY": "0الكمية المصروفة", "itemsStatus": "0حالة القيد", "itemUOI": "0UOI القيد", "unityPrice": "0سعر الوحدة", "totalPrice": "0اجمالي السعر", "notes": "0ملاحظات" }, { "id": "1#", "issueID": "1كود الصرف", "item": "1القيد", "requestedQTY": "1الكمية المطلوبة", "approvedQTY": "1الكمية المعتمدة", "issedQTY": "1الكمية المصروفة", "itemsStatus": "1حالة القيد", "itemUOI": "1UOI القيد", "unityPrice": "1سعر الوحدة", "totalPrice": "1اجمالي السعر", "notes": "1ملاحظات" }, { "id": "2#", "issueID": "2كود الصرف", "item": "2القيد", "requestedQTY": "2الكمية المطلوبة", "approvedQTY": "2الكمية المعتمدة", "issedQTY": "2الكمية المصروفة", "itemsStatus": "2حالة القيد", "itemUOI": "2UOI القيد", "unityPrice": "2سعر الوحدة", "totalPrice": "2اجمالي السعر", "notes": "2ملاحظات" }, { "id": "3#", "issueID": "3كود الصرف", "item": "3القيد", "requestedQTY": "3الكمية المطلوبة", "approvedQTY": "3الكمية المعتمدة", "issedQTY": "3الكمية المصروفة", "itemsStatus": "3حالة القيد", "itemUOI": "3UOI القيد", "unityPrice": "3سعر الوحدة", "totalPrice": "3اجمالي السعر", "notes": "3ملاحظات" }, { "id": "4#", "issueID": "4كود الصرف", "item": "4القيد", "requestedQTY": "4الكمية المطلوبة", "approvedQTY": "4الكمية المعتمدة", "issedQTY": "4الكمية المصروفة", "itemsStatus": "4حالة القيد", "itemUOI": "4UOI القيد", "unityPrice": "4سعر الوحدة", "totalPrice": "4اجمالي السعر", "notes": "4ملاحظات" }];

        //$scope.reportData = $filter('orderBy')($scope.reportData, '-id');
        setTimeout(
            function () {
                if ($scope.issueDetails == undefined || $scope.issueDetails.length <= 0)
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
