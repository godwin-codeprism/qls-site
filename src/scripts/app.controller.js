angular.module('qls')
    .controller('appController', ['$rootScope', '$scope', 'ngMeta', '$http', function ($rootScope, $scope, ngMeta, $http) {
        $rootScope.enquiryState = false;
        $rootScope.mobileMenuState = false;
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
            mobile: '',
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

        $scope.enquiryToggle = function () {
            $rootScope.enquiryState = $rootScope.enquiryState ? false : true;
        }

        $scope.mobileMenuToggle = function(){
            if($rootScope.mobileMenuState){
                $rootScope.mobileMenuState = false;
            }else{
                $rootScope.mobileMenuState = true;
            }
        }
    }])