function appControllerFun ($rootScope, $scope,$http) {
  $rootScope.enquiryState = false;
  $rootScope.mobileMenuState = false;
  $scope.contactSubmitted = false;
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
    "SAFe 4.6 (SAFe Agilist)",
    "DevOps Master",
    "Six Sigma Green Belt",
    "Six Sigma Black Belt",
    "COBIT 5 Foundation",
    "TOGAF 9.1 Level  1 & Level 2"
  ];
  $scope.siteContact = {
    fullname: "",
    email: "",
    mobile: "",
    courseInterested: "",
    message: ""
  };
  $scope.siteContactSubmit = "Submit";
  $scope.contactSubmit = function() {
    $scope.contactSubmitted = true;
    $scope.siteContactSubmit = "Sending...";
    if (
      $scope.siteContact.fullname != "" &&
      $scope.siteContact.email != "" &&
      $scope.siteContact.message != "" &&
      $scope.siteContact.mobile != ""
    ) {
      $http
        .post("/endpoints/send-mail.php", $scope.siteContact)
        .then(function(res) {
          if (res.data == "ok") {
            $scope.siteContactSubmit = "Message sent sucessfully";
            $scope.contactSubmitted = false;
          }
        })
        .catch(function(err) {
          console.error(err);
          $scope.siteContactSubmit = "Submit";
          $scope.contactSubmitted = false;
          alert(
            "Something went wrong! Please refresh the page and try again."
          );
        });
    } else {
      $scope.siteContactSubmit = "Submit";
      $scope.contactSubmitted = false;
      alert("Please fill all the required fields before you submit.");
    }
  };

  $scope.enquiryToggle = function() {
    $rootScope.enquiryState = $rootScope.enquiryState ? false : true;
  };

  $scope.mobileMenuToggle = function() {
    if ($rootScope.mobileMenuState) {
      $rootScope.mobileMenuState = false;
    } else {
      $rootScope.mobileMenuState = true;
    }
  };
}
angular.module("qls").controller("appController", appControllerFun);
appControllerFun.$inject = ["$rootScope","$scope","$http"];
