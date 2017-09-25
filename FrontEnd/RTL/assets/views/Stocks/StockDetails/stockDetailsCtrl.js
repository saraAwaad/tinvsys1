app.controller('stockDetailsCtrl',
    function($scope) {
        $scope.onPageload = function() {

            var table = $('#sample_3').DataTable();
            //$scope.Employees = {};
            table.destroy();
            $scope.stockDetails = [
                {
                    "id": "0#",
                    "stockID": "0كود المخزن",
                    "item": "0قيد",
                    "qty": "0الكمية",
                    "itemStatus": "0حالة القيد",
                    "unitBuyPrice": "0 سعر شراء الوحدة",
                    "unitSellPrice": "0سعر بيع الوحدة",
                    "totalBuyPrice": "0اجمالي سعر الشراء",
                    "totalSellPrice": "0 اجمالي سعر البيع",
                    "notes": "0 ملاحظات"
                },
                {
                    "id": "1#",
                    "stockID": "1كود المخزن",
                    "item": "1قيد",
                    "qty": "1الكمية",
                    "itemStatus": "1حالة القيد",
                    "unitBuyPrice": "1 سعر شراء الوحدة",
                    "unitSellPrice": "1سعر بيع الوحدة",
                    "totalBuyPrice": "1اجمالي سعر الشراء",
                    "totalSellPrice": "1 اجمالي سعر البيع",
                    "notes": "1 ملاحظات"
                },
                {
                    "id": "2#",
                    "stockID": "2كود المخزن",
                    "item": "2قيد",
                    "qty": "2الكمية",
                    "itemStatus": "2حالة القيد",
                    "unitBuyPrice": "2 سعر شراء الوحدة",
                    "unitSellPrice": "2سعر بيع الوحدة",
                    "totalBuyPrice": "2اجمالي سعر الشراء",
                    "totalSellPrice": "2 اجمالي سعر البيع",
                    "notes": "2 ملاحظات"
                },
                {
                    "id": "3#",
                    "stockID": "3كود المخزن",
                    "item": "3قيد",
                    "qty": "3الكمية",
                    "itemStatus": "3حالة القيد",
                    "unitBuyPrice": "3 سعر شراء الوحدة",
                    "unitSellPrice": "3سعر بيع الوحدة",
                    "totalBuyPrice": "3اجمالي سعر الشراء",
                    "totalSellPrice": "3 اجمالي سعر البيع",
                    "notes": "3 ملاحظات"
                },
                {
                    "id": "4#",
                    "stockID": "4كود المخزن",
                    "item": "4قيد",
                    "qty": "4الكمية",
                    "itemStatus": "4حالة القيد",
                    "unitBuyPrice": "4 سعر شراء الوحدة",
                    "unitSellPrice": "4سعر بيع الوحدة",
                    "totalBuyPrice": "4اجمالي سعر الشراء",
                    "totalSellPrice": "4 اجمالي سعر البيع",
                    "notes": "4 ملاحظات"
                }
            ];

            //$scope.reportData = $filter('orderBy')($scope.reportData, '-id');
            setTimeout(
                function() {
                    if ($scope.stockDetails == undefined || $scope.stockDetails.length <= 0)
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
