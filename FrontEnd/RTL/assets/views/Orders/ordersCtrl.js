app.controller('orderCtrl', function ($scope) {
    $scope.onPageload = function () {

        var table = $('#sample_3').DataTable();
        //$scope.Employees = {};
        table.destroy();
        $scope.order = [{ "id": "0#", "orderDate": "0تاريخ الطلب", "supplier": "0المورد", "paymentType": "0طريقة الدفع", "orderPeriod": "0مدة الطلب", "receiptType": "0 receipt type", "notes": "0ملاحظات" }, { "id": "1#", "orderDate": "1تاريخ الطلب", "supplier": "1المورد", "paymentType": "1طريقة الدفع", "orderPeriod": "1مدة الطلب", "receiptType": "1 receipt type", "notes": "1ملاحظات" }, { "id": "2#", "orderDate": "2تاريخ الطلب", "supplier": "2المورد", "paymentType": "2طريقة الدفع", "orderPeriod": "2مدة الطلب", "receiptType": "2 receipt type", "notes": "2ملاحظات" }, { "id": "3#", "orderDate": "3تاريخ الطلب", "supplier": "3المورد", "paymentType": "3طريقة الدفع", "orderPeriod": "3مدة الطلب", "receiptType": "3 receipt type", "notes": "3ملاحظات" }, { "id": "4#", "orderDate": "4تاريخ الطلب", "supplier": "4المورد", "paymentType": "4طريقة الدفع", "orderPeriod": "4مدة الطلب", "receiptType": "4 receipt type", "notes": "4ملاحظات" }];

        //$scope.reportData = $filter('orderBy')($scope.reportData, '-id');
        setTimeout(
            function () {
                if ($scope.order == undefined || $scope.order.length <= 0)
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
