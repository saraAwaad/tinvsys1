app.controller('paymentTypesCtrl',
    function($scope) {
        $scope.onPageload = function() {

            var table = $('#sample_3').DataTable();
            //$scope.Employees = {};
            table.destroy();
            $scope.paymentTypes = [
                { "id": "0#", "paymentTypeName": "0الاسم", "notes": "0ملاحظات" },
                { "id": "1#", "paymentTypeName": "1الاسم", "notes": "1ملاحظات" },
                { "id": "2#", "paymentTypeName": "2الاسم", "notes": "2ملاحظات" },
                { "id": "3#", "paymentTypeName": "3الاسم", "notes": "3ملاحظات" },
                { "id": "4#", "paymentTypeName": "4الاسم", "notes": "4ملاحظات" }
            ];

            //$scope.reportData = $filter('orderBy')($scope.reportData, '-id');
            setTimeout(
                function() {
                    if ($scope.paymentTypes == undefined || $scope.paymentTypes.length <= 0)
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
