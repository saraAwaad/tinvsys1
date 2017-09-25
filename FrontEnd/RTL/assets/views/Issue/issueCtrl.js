app.controller('issueCtrl', function ($scope) {
    $scope.onPageload = function () {

        var table = $('#sample_3').DataTable();
        //$scope.Employees = {};
        table.destroy();
        $scope.issue = [{ "id": "0#", "issueDate": "0التاريخ", "reqEmployee": "0الموظف", "issueType": "0النوع", "fromStock": "0المخزن", "notes": "0ملاحظات" }, { "id": "1#", "issueDate": "1التاريخ", "reqEmployee": "1الموظف", "issueType": "1النوع", "fromStock": "1المخزن", "notes": "1ملاحظات" }, { "id": "2#", "issueDate": "2التاريخ", "reqEmployee": "2الموظف", "issueType": "2النوع", "fromStock": "2المخزن", "notes": "2ملاحظات" }, { "id": "3#", "issueDate": "3التاريخ", "reqEmployee": "3الموظف", "issueType": "3النوع", "fromStock": "3المخزن", "notes": "3ملاحظات" }, { "id": "4#", "issueDate": "4التاريخ", "reqEmployee": "4الموظف", "issueType": "4النوع", "fromStock": "4المخزن", "notes": "4ملاحظات" }];

        //$scope.reportData = $filter('orderBy')($scope.reportData, '-id');
        setTimeout(
            function () {
                if ($scope.issue == undefined || $scope.issue.length <= 0)
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
