function appControllerFun($rootScope, $scope, $http) {
  $rootScope.enquiryState = false;
  $rootScope.mobileMenuState = false;
  $scope.contactSubmitted = false;
  $scope.coursesList = [
    "Select a course",
    // "ITIL 4 Foundation Training & Certification",
    // "ITIL V3 Foundation Training & Certification",
    // "ITIL Intermediate Service Operation Training & Certification",
    // "ITIL Intermediate Service Transition Training & Certification",
    // "ITIL Intermediate Service Strategy Training & Certification",
    // "ITIL Intermediate Service Design Training & Certification",
    // "ITIL Intermediate Continuous Service Improvement",
    // "ITIL Intermediate OSA Training & Certification",
    // "ITIL Intermediate RCV Training & Certification",
    // "ITIL Intermediate PPO Training & Certification",
    // "ITIL Intermediate SOA Training & Certification",
    // "ITIL MALC/Expert Training & Certification",
    "SIAM Foundation Training & Certification",
    "SIAM Professional Training & Certification",
    "CAPM Certification Training",
    "PMP Certification Training",
    "ACP Certification Training",
    // "Prince2 Foundation Certification Training",
    // "Prince2 Practitioner Certification Training",
    // "Prince2 Agile Practitioner Certification Training",
    // "MSP Certification Training",
    "PSM Certification Training ",
    "SAFe Agile 4.6 Certification Training",
    "SAFe POPM 4.6 Certification Training",
    "DevOps Foundation Certification Training",
    "DevOps Master Certification Training",
    "Lean Six Sigma Green Belt Training & Certification",
    "Lean Six Sigma Black Belt Training & Certification",
    "Cobit Foundation Training & Certification ",
    "TOGAF Training & Certification"

  ];
  $scope.siteContact = {
    fullname: "",
    email: "",
    mobile: "",
    courseInterested: "",
    message: ""
  };
  $scope.siteContactSubmit = "Submit";
  $scope.contactSubmit = function () {
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
        .then(function (res) {
          if (res.data == "ok") {
            $scope.siteContactSubmit = "Message sent sucessfully";
            $scope.contactSubmitted = false;
          }
        })
        .catch(function (err) {
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

  $scope.enquiryToggle = function () {
    $rootScope.enquiryState = $rootScope.enquiryState ? false : true;
  };

  $scope.mobileMenuToggle = function () {
    if ($rootScope.mobileMenuState) {
      $rootScope.mobileMenuState = false;
    } else {
      $rootScope.mobileMenuState = true;
    }
  };
}
angular.module("qls").controller("appController", appControllerFun);
appControllerFun.$inject = ["$rootScope", "$scope", "$http"];
