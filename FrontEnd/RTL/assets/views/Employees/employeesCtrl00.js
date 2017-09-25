app.controller('employeesCtrl', function ($scope, ngTableParams) {
    $scope.onPageload = function () {

        $scope.users = [{ "id": "0#", "employeeName": "0اسم الموظف", "employeeTitle": "0 اللقب", "workPhone": "0 هاتف العمل", "email": "0 البريد الالكتروني", "notes": "0 ملاحظات" }, { "id": "1#", "employeeName": "1اسم الموظف", "employeeTitle": "1 اللقب", "workPhone": "1 هاتف العمل", "email": "1 البريد الالكتروني", "notes": "1 ملاحظات" }, { "id": "2#", "employeeName": "2اسم الموظف", "employeeTitle": "2 اللقب", "workPhone": "2 هاتف العمل", "email": "2 البريد الالكتروني", "notes": "2 ملاحظات" }, { "id": "3#", "employeeName": "3اسم الموظف", "employeeTitle": "3 اللقب", "workPhone": "3 هاتف العمل", "email": "3 البريد الالكتروني", "notes": "3 ملاحظات" }, { "id": "4#", "employeeName": "4اسم الموظف", "employeeTitle": "4 اللقب", "workPhone": "4 هاتف العمل", "email": "4 البريد الالكتروني", "notes": "4 ملاحظات" }];


        $scope.tableParams = new ngTableParams({
            page: 1, // show first page
            count: 5, // count per page
            sorting: {
                name: 'asc' // initial sorting
            }, // count per page
            filter: {
                name: '' // initial filter
            }
        }, {
                total: data.length, // length of data
                getData: function ($defer, params) {
                    // use build-in angular filter
                    var orderedData = params.filter() ? $filter('filter')(data, params.filter()) : data;

                    orderedData = params.sorting() ? $filter('orderBy')(orderedData, params.orderBy()) : orderedData;
                    $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
                    params.total(orderedData.length);

                    // set total for recalc pagination
                    $defer.resolve($scope.users);
                }
            });


    }
});
