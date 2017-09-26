'use strict';
/** 
  * controller for Validation Form example
*/
app.controller('examinationComitteeCtrl_insert', ["$scope", "$state", "$timeout", "SweetAlert", function ($scope, $state, $timeout, SweetAlert) {

    $scope.master = $scope.myModel;
    $scope.form = {

        submit: function (form) {
            var firstError = null;
            if (form.$invalid) {

                var field = null, firstError = null;
                for (field in form) {
                    if (field[0] != '$') {
                        if (firstError === null && !form[field].$valid) {
                            firstError = form[field].$name;
                        }

                        if (form[field].$pristine) {
                            form[field].$dirty = true;
                        }
                    }
                }

                angular.element('.ng-invalid[name=' + firstError + ']').focus();
                SweetAlert.swal("لم يتم الحفظ بنجاح بسبب وجود أخطاء في الادخال", "البيانات الخاطئة محددة باللون الاحمر", "error");
                return;

            } else {
                SweetAlert.swal("تم بنجاح!", "تم حفظ طلب الشراء بنجاح!", "success");
                //your code for submit
            }

        },
        reset: function (form) {

            $scope.myModel = angular.copy($scope.master);
            form.$setPristine(true);

        }
    };

}]);
