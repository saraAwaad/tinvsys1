app.controller('suppliersCtrl', function ($scope) {
    $scope.onPageload = function () {

        var table = $('#sample_3').DataTable();
        //$scope.Employees = {};
        table.destroy();
        $scope.suppliers = [{ "id": "0#", "supplierName": "0اسم المورد", "contactName": "0اسم جهة الاتصال", "contacTitle": "0صفة جهة الاتصال", "address": "0العنوان", "city": "0المدينة", "country": "0البلد", "postalCode": "0الرمز البريدي", "phoneNumber": "0رقم الهاتف", "faxNumber": "0رقم الفاكس", "notes": "0ملاحظات" }, { "id": "1#", "supplierName": "1اسم المورد", "contactName": "1اسم جهة الاتصال", "contacTitle": "1صفة جهة الاتصال", "address": "1العنوان", "city": "1المدينة", "country": "1البلد", "postalCode": "1الرمز البريدي", "phoneNumber": "1رقم الهاتف", "faxNumber": "1رقم الفاكس", "notes": "1ملاحظات" }, { "id": "2#", "supplierName": "2اسم المورد", "contactName": "2اسم جهة الاتصال", "contacTitle": "2صفة جهة الاتصال", "address": "2العنوان", "city": "2المدينة", "country": "2البلد", "postalCode": "2الرمز البريدي", "phoneNumber": "2رقم الهاتف", "faxNumber": "2رقم الفاكس", "notes": "2ملاحظات" }, { "id": "3#", "supplierName": "3اسم المورد", "contactName": "3اسم جهة الاتصال", "contacTitle": "3صفة جهة الاتصال", "address": "3العنوان", "city": "3المدينة", "country": "3البلد", "postalCode": "3الرمز البريدي", "phoneNumber": "3رقم الهاتف", "faxNumber": "3رقم الفاكس", "notes": "3ملاحظات" }, { "id": "4#", "supplierName": "4اسم المورد", "contactName": "4اسم جهة الاتصال", "contacTitle": "4صفة جهة الاتصال", "address": "4العنوان", "city": "4المدينة", "country": "4البلد", "postalCode": "4الرمز البريدي", "phoneNumber": "4رقم الهاتف", "faxNumber": "4رقم الفاكس", "notes": "4ملاحظات" }];

        //$scope.reportData = $filter('orderBy')($scope.reportData, '-id');
        setTimeout(
            function () {
                if ($scope.suppliers == undefined || $scope.suppliers.length <= 0)
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
