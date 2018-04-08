angular.module('qls-admin')
    .controller('eventsController', ['$scope', '$http', 'gsmartTables', function ($scope, $http, gsmartTables) {
        var dataUrl = "../data/events.json";
        var postTo = "./endpoints/write-data.php";
        var events = this;
        $http.get(dataUrl).then(function (res) {
            $scope.events = res;
        }).catch(function (err) {
            console.log(err);
        });
        $scope.addRow = function (i) {
            $scope.events = gsmartTables.add($scope.events, i);
            events.postData();
        };
        $scope.removeRow = function (e, i) {
            var newData = gsmartTables.remove(e, $scope.events, i);
            $scope.events = newData.data;
            if (newData.isDeleted) {
                events.postData();
            }
        };
        $scope.editRow = function (e) {
            gsmartTables.edit(e);
        }
        $scope.saveRowText = function (e, i) {
            var newData = gsmartTables.save(e, i);
            $scope.events[newData.index].training = newData.text[0];
            $scope.events[newData.index].date = newData.text[1];
            $scope.events[newData.index].location = newData.text[2];
            $scope.events[newData.index].link = newData.link[0];
            events.postData();
        }
        this.postData = function () {
            var finalData = {
                url: '../' + dataUrl,
                data: $scope.events
            }
            $http.post(postTo, finalData);
        }
    }])
    .controller('onlineEventsController', ['$scope', '$http', 'gsmartTables', function ($scope, $http, gsmartTables) {
        var dataUrl = "../data/online_events.json";
        var postTo = "./endpoints/write-data.php";
        var onlineEvents = this;
        $http.get(dataUrl).then(function (res) {
            $scope.onlineEvents = res;
        }).catch(function (err) {
            console.log(err);
        });
        $scope.addRow = function (i) {
            $scope.onlineEvents = gsmartTables.add($scope.onlineEvents, i);
            onlineEvents.postData();
        };
        $scope.removeRow = function (e, i) {
            var newData = gsmartTables.remove(e, $scope.onlineEvents, i);
            $scope.onlineEvents = newData.data;
            if (newData.isDeleted) {
                onlineEvents.postData();
            }
        };
        $scope.editRow = function (e) {
            gsmartTables.edit(e);
        }
        $scope.saveRowText = function (e, i) {
            var newData = gsmartTables.save(e, i);
            $scope.onlineEvents[newData.index].training = newData.text[0];
            $scope.onlineEvents[newData.index].date = newData.text[1];
            $scope.onlineEvents[newData.index].location = newData.text[2];
            $scope.onlineEvents[newData.index].link = newData.link[0];
            onlineEvents.postData();
        }
        this.postData = function () {
            var finalData = {
                url: '../' + dataUrl,
                data: $scope.onlineEvents
            }
            $http.post(postTo, finalData);
        }
    }]);