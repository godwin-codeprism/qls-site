var usersTemplate = require('../views/users.html'),
    homeTemplate = require('../views/home.html'),
    aboutTemplate = require('../views/about.html'),
    upcoming_eventsTemplate = require('../views/upcoming_events.html'),
    serviesTemplate = require('../views/services.html'),
    contactTemplate = require('../views/contact.html'),
    termsTemplate = require('../views/terms.html'),
    accreditationsTemplate = require('../views/accreditations.html');
angular.module("qls", ["ngSanitize", "ui.router", "ngScrollbars"])
    .config(["$stateProvider", "$urlRouterProvider", "ScrollBarsProvider", function (e, t, n) {
        t.otherwise("/home"), e.state("app", {
            url: "/",
            template: "<ui-view></ui-view>",
            controller: "appController"
        }).state("app.users", {
            url: "",
            template: usersTemplate,
            controller: "homeController"
        }).state("app.users.home", {
            url: "home",
            template: homeTemplate,
            controller: "homeController"
        }).state("app.users.about", {
            url: "about",
            template: aboutTemplate
        }).state("app.users.upcoming_events", {
            url: "upcoming_events",
            template: upcoming_eventsTemplate,
            controller: "homeController"
        }).state("app.users.services", {
            url: "services",
            template: serviesTemplate
        }).state("app.users.contact", {
            url: "contact",
            template: contactTemplate,
            controller: "homeController"
        }).state("app.users.itil_foundation", {
            url: "itil_foundation",
            templateUrl: "views/classroom_courses/itil_foundation.html"
        }).state("app.users.itil_intermediate", {
            url: "itil_intermediate",
            templateUrl: "views/classroom_courses/intermediate.component.html"
        }).state("app.users.service_strategy", {
            url: "service_strategy",
            templateUrl: "views/classroom_courses/service_strategy.component.html"
        }).state("app.users.service_design", {
            url: "service_design",
            templateUrl: "views/classroom_courses/service_design.component.html"
        }).state("app.users.service_transition", {
            url: "service_transition",
            templateUrl: "views/classroom_courses/service_transition.component.html"
        }).state("app.users.service_operation", {
            url: "service_operation",
            templateUrl: "views/classroom_courses/service_operation.component.html"
        }).state("app.users.continual_service", {
            url: "continual_service",
            templateUrl: "views/classroom_courses/continual_service.component.html"
        }).state("app.users.soa", {
            url: "soa",
            templateUrl: "views/classroom_courses/soa.component.html"
        }).state("app.users.ppo", {
            url: "ppo",
            templateUrl: "views/classroom_courses/ppo.component.html"
        }).state("app.users.rcv", {
            url: "rcv",
            templateUrl: "views/classroom_courses/rcv.component.html"
        }).state("app.users.osa", {
            url: "osa",
            templateUrl: "views/classroom_courses/osa.component.html"
        }).state("app.users.malc", {
            url: "malc",
            templateUrl: "views/classroom_courses/malc.component.html"
        }).state("app.users.capm", {
            url: "capm",
            templateUrl: "views/classroom_courses/capm.component.html"
        }).state("app.users.pmp", {
            url: "pmp",
            templateUrl: "views/classroom_courses/pmp.component.html"
        }).state("app.users.acp", {
            url: "acp",
            templateUrl: "views/classroom_courses/acp.component.html"
        }).state("app.users.prince2foundation", {
            url: "prince2foundation",
            templateUrl: "views/classroom_courses/p2f.component.html"
        }).state("app.users.prince2practitioner", {
            url: "prince2practitioner",
            templateUrl: "views/classroom_courses/p2p.component.html"
        }).state("app.users.prince2agile", {
            url: "prince2agile",
            templateUrl: "views/classroom_courses/p2a.component.html"
        }).state("app.users.scrum", {
            url: "scrum",
            templateUrl: "views/classroom_courses/scrum.component.html"
        }).state("app.users.msp", {
            url: "msp",
            templateUrl: "views/classroom_courses/msp.component.html"
        }).state("app.users.green_belt", {
            url: "green_belt",
            templateUrl: "views/classroom_courses/green_belt.component.html"
        }).state("app.users.black_belt", {
            url: "black_belt",
            templateUrl: "views/classroom_courses/black_belt.component.html"
        }).state("app.users.cobit", {
            url: "cobit",
            templateUrl: "views/classroom_courses/cobit.component.html"
        }).state("app.users.togaf", {
            url: "togaf",
            templateUrl: "views/classroom_courses/togaf.component.html"
        }).state("app.users.terms", {
            url: "terms",
            template: termsTemplate
        }).state("app.users.accreditations", {
            url: "accreditations",
            template: accreditationsTemplate
        }), 
        n.defaults = {
            scrollButtons: {
                scrollAmount: "auto",
                enable: !0
            },
            scrollInertia: 400,
            axis: "y",
            theme: "dark-thin",
            autoHideScrollbar: !1
        }
    }]).run(["$rootScope", "$state", "$location", "$window", function (e, t, n, r) {
        e.$watch(function () {
            return n.path()
        }, function (e) {
            r.scrollTo(0, 0)
        })
    }])