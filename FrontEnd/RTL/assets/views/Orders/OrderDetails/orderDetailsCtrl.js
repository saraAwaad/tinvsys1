app.controller('orderDetailsCtrl', function ($scope) {
    $scope.onPageload = function () {

        var table = $('#sample_3').DataTable();
        //$scope.Employees = {};
        table.destroy();
        $scope.orderDetails = [{ "id": "0#", "orderID": "0كود الطلب", "item": "0القيد", "quantity": "0الكمية", "unitPrice": "0سعر الوحدة", "totalPrice": "0اجمالي السعر", "notes": "0ملاحظات" }, { "id": "1#", "orderID": "1كود الطلب", "item": "1القيد", "quantity": "1الكمية", "unitPrice": "1سعر الوحدة", "totalPrice": "1اجمالي السعر", "notes": "1ملاحظات" }, { "id": "2#", "orderID": "2كود الطلب", "item": "2القيد", "quantity": "2الكمية", "unitPrice": "2سعر الوحدة", "totalPrice": "2اجمالي السعر", "notes": "2ملاحظات" }, { "id": "3#", "orderID": "3كود الطلب", "item": "3القيد", "quantity": "3الكمية", "unitPrice": "3سعر الوحدة", "totalPrice": "3اجمالي السعر", "notes": "3ملاحظات" }, { "id": "4#", "orderID": "4كود الطلب", "item": "4القيد", "quantity": "4الكمية", "unitPrice": "4سعر الوحدة", "totalPrice": "4اجمالي السعر", "notes": "4ملاحظات" }];

        //$scope.reportData = $filter('orderBy')($scope.reportData, '-id');
        setTimeout(
            function () {
                if ($scope.orderDetails == undefined || $scope.orderDetails.length <= 0)
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
