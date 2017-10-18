angular.module('qls')
    .controller('homeController', ['$scope', '$http', function ($scope, $http) {
        $http.get('data/events.json' + '?id=' + new Date().getTime()).success(function (res) {
            $scope.events = res;
            $scope.events.forEach(function (obj, inx) {
                var tr = obj.training.toLowerCase();
                if (tr.indexOf("itil") > -1 && tr.indexOf("foundation") > -1) {
                    $scope.events[inx]["slider"] = "slider_itil_foundation";
                } else if (tr.indexOf("itil") > -1 && tr.indexOf("intermediate") > -1) {
                    $scope.events[inx]["slider"] = "slider_itil_intermediate";
                } else if (tr.indexOf("itil") > -1 && tr.indexOf("expert") > -1) {
                    $scope.events[inx]["slider"] = "slider_itil_expert";
                }else if (tr.indexOf("itil") > -1 && tr.indexOf("service") > -1) {
                    $scope.events[inx]["slider"] = "slider_itil_service";
                } else if (tr.toUpperCase().indexOf("PMP") > -1) {
                    $scope.events[inx]["slider"] = "slider_pmp";
                } else if (tr.toUpperCase().indexOf("PMI") > -1) {
                    $scope.events[inx]["slider"] = "slider_pmi";
                } else if (tr.indexOf("prince2") > -1) {
                    $scope.events[inx]["slider"] = "slider_prince2f_p";
                } else if (tr.indexOf("scrum") > -1) {
                    $scope.events[inx]["slider"] = "slider_scrum";
                } else if (tr.indexOf("green") > -1 && tr.indexOf("belt") > -1) {
                    $scope.events[inx]["slider"] = "slider_green_belt";
                } else if (tr.indexOf("black") > -1 && tr.indexOf("belt") > -1) {
                    $scope.events[inx]["slider"] = "slider_black_belt";
                } else if (tr.indexOf("cobit") > -1) {
                    $scope.events[inx]["slider"] = "slider_cobit";
                } else if (tr.indexOf("safe") > -1) {
                    $scope.events[inx]["slider"] = "slider_safe";
                } else if (tr.indexOf("devops") > -1) {
                    $scope.events[inx]["slider"] = "slider_devops";
                } else {
                    $scope.events[inx]["slider"] = "slider_" + inx;
                }
            })
        }).error(function () {
            console.log('Failed to load events.json');
        });
        $http.get('data/online_events.json' + '?id=' + new Date().getTime()).success(function (res) {
            $scope.onlineEvents = res;
        }).error(function () {
            console.log('Failed to load online_events.json' + '?id=' + new Date().getTime());
        });
        $http.get('data/courses.json' + '?id=' + new Date().getTime()).success(function (res) {
            $scope.courses = res;
        }).error(function () {
            console.log('Failed to load courses.json');
        });
        $http.get('data/testimonials/testimonials.json' + '?id=' + new Date().getTime()).success(function (res) {
            $scope.testimonials = res;
        }).error(function () {
            console.log('Failed to load courses.json');
        });
        $http.get('data/clients/clients.json' + '?id=' + new Date().getTime())
            .success(function (res) {
                $scope.clients = res;
            })
            .error(function () {
                console.log('Failed to load clients.json');
            });
        $scope.coursesList = [
            "Select a course",
            "ITIL Foundation",
            "ITIL Service Strategy",
            "ITIL Service Design",
            "ITIL Service Transition",
            "ITIL Service Operation",
            "ITIL Continual Service Improvement",
            "ITIL Service, Offering and Agreement (SOA)",
            "ITIL Planning, Protection and Optimization (PPO)",
            "ITIL Release, Control and Validation (RCV)",
            "ITIL Operational, Support and Analysis (OSA)",
            "ITIL®  Managing Across The Lifecycle",
            "SIAM Foundation",
            "CAPM",
            "PMP",
            "ACP",
            "Prince2 Foundation",
            "Prince2 Practitioner",
            "Prince2 Agile",
            "Scrum Master",
            "Managing Successful Programs",
            "SAFe 4.5 (SAFe Agilist)",
            "DevOps Master",
            "Six Sigma Green Belt",
            "Six Sigma Black Belt",
            "COBIT 5 Foundation",
            "TOGAF 9.1 Level  1 & Level 2"
        ]
        $scope.siteContact = {
            fullname: '',
            email: '',
            courseInterested: '',
            message: ''
        }
        $scope.siteContactSubmit = "Submit";
        $scope.contactSubmit = function () {
            $http.post('endpoints/send-mail.php', $scope.siteContact).success(function (res) {
                if (res == 'ok') {
                    $scope.siteContactSubmit = 'Message sent sucessfully';
                }
            }).error(function (err) {
                console.error(err)
            })
        }
    }]);