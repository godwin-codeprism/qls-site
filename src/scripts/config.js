var usersTemplate = require('../views/users.html'),
    homeTemplate = require('../views/home.html'),
    aboutTemplate = require('../views/about.html'),
    upcoming_eventsTemplate = require('../views/upcoming_events.html'),
    serviesTemplate = require('../views/services.html'),
    contactTemplate = require('../views/contact.html'),
    termsTemplate = require('../views/terms.html'),
    accreditationsTemplate = require('../views/accreditations.html');
angular.module("qls", ["ngSanitize", "ui.router", "ngScrollbars", "ngMeta"])
    .config(["$stateProvider", "$urlRouterProvider", "ScrollBarsProvider", "ngMetaProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, ScrollBarsProvider, ngMetaProvider, $locationProvider) {
        $stateProvider.decorator('data', ngMetaProvider.mergeNestedStateData);
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/"),
            $stateProvider.state("app", {
                url: "",
                template: usersTemplate,
                controller: "appController",
            }).state("app.home", {
                url: "/",
                template: homeTemplate,
                controller: "homeController",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMetaProvider.useTitleSuffix(true);
                        ngMeta.setTitle('QuickLearn Systems', ' | Itil course hyderabad | best IT courses in hyderabad | itil training');
                        ngMeta.setTag('description', 'Quick learn sys provides best ITIL course training in hyderabad. We offer several modules in ITIL at effective cost. Your one stop solution for all IT related courses quicklearnsys.com');
                        ngMeta.setTag('keywords', 'itil course hyderabad, best it courses in hyderabad,  itil training, pmp courses Hyderabad, itil training Hyderabad');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.about", {
                url: "/itil-certification-hyderabad",
                template: aboutTemplate,
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('itil cetification hyderabad | prince2 clases hyderabad | pmp certification');
                        ngMeta.setTag('description', 'Looking for ITIL certification hyderabad look no further quicklearnsys.com offers best training for ITIL certification in the twin cities. Consult quicklearnsys for more information.');
                        ngMeta.setTag('keywords', 'itil cetification hyderabad, prince2 clases hyderabad, pmp certification hyderabad, best pmp training institutes hyderabad, best prince 2 training hyderabad');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.upcoming_events", {
                url: "/upcoming_events",
                template: upcoming_eventsTemplate,
                controller: "homeController"
            }).state("app.services", {
                url: "/services",
                template: serviesTemplate,
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('lean six sigma green belt | lean six sigma black belt | six sigma yellow belt');

                        ngMeta.setTag('description', 'Lean six sigma green belt certification with quicklearnsys.com at just 11,999 rs only. Get six sigma certified today with best in class learning infrastructure training institute.');
                        
                        ngMeta.setTag('keywords', 'lean six sigma green belt, lean six sigma black belt, six sigma yellow belt');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.contact", {
                url: "/contact",
                template: contactTemplate,
                controller: "homeController",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('itil institutes in Hyderabad | quick learn sys | quick learn systems Hyderabad-quicklearnsys.com');

                        ngMeta.setTag('description', 'One stop solution for all ITIL certifications. Get certified from one of the best ITIL institutes in Hyderabad. World class learning infrastructure at affordable prices.');
                        
                        ngMeta.setTag('keywords', 'itil institutes in hyderabad, quick learn sys, quick learn systems hyderabad, contact quicklearn sys hyderabad, quicklearn systems hyderabad, quicklearnsys.com');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.itil_foundation", {
                url: "/itil-foundation",
                templateUrl: "views/classroom_courses/itil_foundation.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('ITIL foundation course in hyderabad from quicklearnsys.com');
                        ngMeta.setTag('description', 'Quicklearnsys offers ITIl foundation course in hyderabad. Apart from ITIL courses we also offer several other career development courses for the IT professionals.');
                        ngMeta.setTag('keywords', 'itil foundation, ITIL foundation course hyderabad, itil foundation exam, itil foundation training, itil foundation cost');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.itil_intermediate", {
                url: "/itil-intermediate",
                templateUrl: "views/classroom_courses/intermediate.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('ITIL Intermediaate training in hyderabad class room trainings – quicklearnsys.com');

                        ngMeta.setTag('description', 'Quicklearnsys.com offers best ITIL Intermediate level training in hyderabad. Learn from the experienced lecturers in the proven methodology for sure success.');
                        
                        ngMeta.setTag('keywords', 'itil foundation, ITIL foundation course hyderabad, itil foundation exam, itil foundation training, itil foundation cost');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.service_strategy", {
                url: "/itil-service-strategy",
                templateUrl: "views/classroom_courses/service_strategy.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('ITIL service strategy course training in hyderabad by experts from quicklearnsys.com');

                        ngMeta.setTag('description', 'Learn ITIL service strategy from the best in industry trainers. 100% Pass Assurance or we pay your exam fees.');
                        
                        ngMeta.setTag('keywords', 'itil service strategy, itil life cycle, itil strategy course, itil training hyderabad, itil service strategy hyderabad');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.service_design", {
                url: "/itil-design-hyderabad",
                templateUrl: "views/classroom_courses/service_design.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('ITIL design Hyderabad | ITIL design fees | ITIL Service Design quicklearnsys.com');

                        ngMeta.setTag('description', 'Learn ITIL service design in Hyderabad. Best cost per price. Get trained by the experts in industry. We offer 100% pass assurance in the exams.');
                        
                        ngMeta.setTag('keywords', 'itil design hyderabad, itil design fees, ITIL Service Design, itil service design course hyderabad');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.service_transition", {
                url: "/itil-service-transition",
                templateUrl: "views/classroom_courses/service_transition.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('ITIL Service Transition | itil service transition training |  itil service hyderabad');

                        ngMeta.setTag('description', 'Best ITIL service transition institutes in Hyderabad. Try quicklearnsys.com for the cost effective yet reliable ITIL service transition coaching in the twin cities Hyderabad and Secunderabad.');
                        
                        ngMeta.setTag('keywords', 'ITIL Service Transition, service transition itil, itil service hyderabad, itil service transition training');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.service_operation", {
                url: "/itil-service-operation",
                templateUrl: "views/classroom_courses/service_operation.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('ITIL Service Operation | itil service operation Hyderabad | itil life cycle hyderabad');

                        ngMeta.setTag('description', 'ITIL service operation in Hyderabad. We offer quality training with best Infrastructure. ITIL foundation course starting at 13,999 Rs only.');
                        
                        ngMeta.setTag('keywords', 'ITIL Service Operation, itil service operation hyderabad, itil life cycle hyderabad, itil service operation process, itil service operation training');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.continual_service", {
                url: "/itil-continual-service",
                templateUrl: "views/classroom_courses/continual_service.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('ITIL Continual Service Improvement |  itil continual service Hyderabad');

                        ngMeta.setTag('description', 'itil continual service improvement training in Hyderabad. We are the one stop solution for the ITIL certification in Hyderabad.');
                        
                        ngMeta.setTag('keywords', 'ITIL Continual Service Improvement, continual service itil, itil continual service hyderabad, itil continual service improvement training');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.soa", {
                url: "/itil-soa-hyderabad",
                templateUrl: "views/classroom_courses/soa.component.html"
                ,
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('itil soa Hyderabad | itil soa | itil soa certification quicklearnsys.com ');

                        ngMeta.setTag('description', 'ITIL service offerings training in Hyderabad from quicklearnsys.com. 100% pass assurance well qualified lectures. Feasible learning modules.');
                        
                        ngMeta.setTag('keywords', 'itil soa hyderabad, itil soa, itil soa certification, itil soa course fees');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.ppo", {
                url: "/itil-ppo",
                templateUrl: "views/classroom_courses/ppo.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('ITIL PPO - ITIL planning protection and optimization in hyderabad');

                        ngMeta.setTag('description', 'ITIL PPO training in Hyderabad. Learn from highly qualified and experience lecturers. We assure 100% pass accuracy.');
                        
                        ngMeta.setTag('keywords', 'itil ppo, itil planning, itil planning hyderabad, itil ppo course fees');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.rcv", {
                url: "/itil-rcv",
                templateUrl: "views/classroom_courses/rcv.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('ITIl release control and validation courses in Hyderabad quicklearnsys.com');

                        ngMeta.setTag('description', 'ITIL release control and validation course in hyderabad. High Experienced and real time trainers. 100% Pass Assurance or we pay your exam fees. ');
                        
                        ngMeta.setTag('keywords', 'itil rcv, ITIL Release, itil Control and Validation, itil rcv hyderabad, itil change management');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.osa", {
                url: "/itil-osa",
                templateUrl: "views/classroom_courses/osa.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('ITIL operational support and analysis training in Hyderabad-quicklearnsys.com');

                        ngMeta.setTag('description', 'ITIL operational support and analysis training in Hyderabad. We give 100% pass assurance and Quality Training Delivery with best Infrastructure.');
                        
                        ngMeta.setTag('keywords', 'itil osa hyderabad, itil Operational Support and Analysis, itil osa, itil intermediate osa');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.malc", {
                url: "/itil-malc",
                templateUrl: "views/classroom_courses/malc.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('ITIL managing across the lifecycle courses in Hyderabad-quicklearnsys.com');

                        ngMeta.setTag('description', 'ITIL certification courses in Hyderabad. Best price per quality assured. Highly professional and qualified real time trainers. 100 % pass assurance.');
                        
                        ngMeta.setTag('keywords', 'itil malc, ITIL Managing across the Lifecycle, itil management hyderabad, itil malc hyderabad, itil managing across the lifecycle training');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.capm", {
                url: "/capm-course",
                templateUrl: "views/classroom_courses/capm.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('Capm course in Hyderabad  |  pmp capm  |  project management basics');

                        ngMeta.setTag('description', 'Capm course in Hyderabad. Learn capm course and pass the exam. Highly qualified lecturers 100% pass assurance. Quality training delivered with best infrastructure.');
                        
                        ngMeta.setTag('keywords', 'capm course, pmp capm, capm hyderabad, project management basics, capm certification');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.pmp", {
                url: "/pmp-course-hyderabad",
                templateUrl: "views/classroom_courses/pmp.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('Quick learn sys offers best pmp course Hyderabad |  pmp certification');

                        ngMeta.setTag('description', 'Master PMP certification courses at affordable prices starting at just 8999 Rs only. We offer best PMP certification in Hyderabad. Try quicklearnsys.com for PMP certifications.');
                        
                        ngMeta.setTag('keywords', 'pmp course hyderabad, pmp certification hyderabad,  pmp training, pmp training hyderabad, pmp jobs');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.acp", {
                url: "/agile-certified-practitioner",
                templateUrl: "views/classroom_courses/acp.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('Agile certified practitioner courses in Hyderabad quicklearnsys.com');

                        ngMeta.setTag('description', 'Agile certified practitioner courses in Hyderabad. Quick learn sys offers best agile certified course in Hyderabad, we also offer pmi acp, pmi agile certifications.');
                        
                        ngMeta.setTag('keywords', 'agile certified practitioner, pmi acp hyderabad, project management institute courses, pmi agile certification, pmi acp course');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.prince2foundation", {
                url: "/prince2-hyderabad",
                templateUrl: "views/classroom_courses/p2f.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('prince2 foundation Hyderabad | prince2 foundation | prince2 foundation training');

                        ngMeta.setTag('description', 'Prince2 foundation course in Hyderabad at best price 31,999 Rs only. Try quicklearnsys.com for quality learning experience. 100% exam pass assurance. ');
                        
                        ngMeta.setTag('keywords', 'prince2 foundation hyderabad, prince2 foundation, prince2 foundation training, project management prince2, prince2 practitioner exam, prince2 foundation and practitioner course');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.prince2practitioner", {
                url: "/prince2agile-hyderabad",
                templateUrl: "views/classroom_courses/p2p.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('Quick learn sys offers Prince2 course Hyderabad at best price-quicklearnsys.com');

                        ngMeta.setTag('description', 'Get certified in prince2 course Hyderabad at 31,999 Rs only. Best price per cost, high experienced and real time trainers available. We offer all modules of prince2practitioner courses.');
                        
                        ngMeta.setTag('keywords', 'prince2practitioner, prince practitioner prince, prince2 practitioner hyderabad, prince2practitioner training, prince2 certification cost');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.prince2agile", {
                url: "/prince2-foundation- hyderabad",
                templateUrl: "views/classroom_courses/p2a.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('Learn prince2 agile in Hyderabad | prince2 agile course Hyderabad | quicklearnsys.com');

                        ngMeta.setTag('description', 'Prince2 agile course in Hyderabad from basics to the expert level. We team prince2 agile course in Hyderabad with best in class infrastructure and highly qualified and real time tutors.');
                        
                        ngMeta.setTag('keywords', 'prince2agile, prince agile prince, prince2 agile course hyderabad, prince2agile training');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.scrum", {
                url: "/scrum-master",
                templateUrl: "views/classroom_courses/scrum.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('scrum master | professional scrum master | scrum and agile | psm certification');

                        ngMeta.setTag('description', 'Get scrum master certification in Hyderabad with quicklearnsys.com. we offer quality training with best Infrastructure. We offer professional scrum master and psm certifications.');
                        
                        ngMeta.setTag('keywords', 'scrum master, professional scrum master, scrum and agile, agile scrum master, psm certification');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.msp", {
                url: "/managing-sucessful-programmes-hyderabad",
                templateUrl: "views/classroom_courses/msp.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('managing successful programmes Hyderabad | Managing Successful Programmes | msp Hyderabad');

                        ngMeta.setTag('description', 'Learn Managing successful programmes Hyderabad course with quicklearnsys.com and master the art of benefits management risk and issue management with best in class training infrastructure.');
                        
                        ngMeta.setTag('keywords', 'managing successful programmes hyderabad, Managing Successful Programmes, msp hyderabad, managing successful programmes training, project management best practices');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.green_belt", {
                url: "/six-sigma-green-belt-hyderabad",
                templateUrl: "views/classroom_courses/green_belt.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('Learn six sigma green belt Hyderabad best cost per quality with quicklearnsys.com');

                        ngMeta.setTag('description', 'Six sigma certification courses in Hyderabad. Lean six sigma green belt course starting at just Rs 11999/-. Best price per quality training and 100% pass assurance.');
                        
                        ngMeta.setTag('keywords', 'six sigma green belt hyderabad,  lean six sigma green belt hyderabad six sigma hyderabad, lean six sigma certification, lean 6 sigma hydearbad');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.black_belt", {
                url: "/six-sigma-black-belt-hyderabad",
                templateUrl: "views/classroom_courses/black_belt.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('Six sigma black belt training in Hyderabad  | six sigma black belt hyderabad quicklearnsys.com');

                        ngMeta.setTag('description', 'Lean six sigma courses in Hyderabad. One stop solution for all six sigma courses we offer lean six sigma courses at affordable prices.');
                        
                        ngMeta.setTag('keywords', 'six sigma black belt hyderabad, lean six sigma black belt hyderabad, lean black belt, lean six sigma training, six sigma black belt training hyderabad');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.cobit", {
                url: "/cobit-5",
                templateUrl: "views/classroom_courses/cobit.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('Learn cobit 5 course in Hyderabad | it governance framework | cobit 5 certification');

                        ngMeta.setTag('description', 'Learn cobit 5 and it framework with quicklearnsys.com. Enroll for COBIT5 Certification Training in Hyderabad.  Best learning infrastructure and well trained tutors at best price per value.');
                        
                        ngMeta.setTag('keywords', 'cobit 5, cobit 5 framework, cobit, it governance framework, cobit 5 certification');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.togaf", {
                url: "/togaf-9.1",
                templateUrl: "views/classroom_courses/togaf.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('togaf 9.1 | togaf tutorials | togaf certification Hyderabad | togaf tutorials');

                        ngMeta.setTag('description', 'Learn togaf 9.1 in Hyderabad with quicklearnsys.com. Enroll today for the certification. Well experienced and real time tutors and best learning infrastructure.');
                        
                        ngMeta.setTag('keywords', 'togaf 9.1, togaf tutorials, togaf certification hyderabad, togaf tutorials, togaf 9.1 framework');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.safe", {
                url: "/safe-agile",
                templateUrl: "views/classroom_courses/safe.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('safe agile | safe agile Hyderabad | safe agile framework | agile scrum methodology');

                        ngMeta.setTag('description', 'Safe agile course in Hyderabad by quicklearnsys.com. we offer safe agile certification at best price in Hyderabad. 100% pass assurance. High experienced and real time tutors.');
                        
                        ngMeta.setTag('keywords', 'safe agile, safe agile hyderabad, safe agile framework, agile scrum methodology');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.dev_ops", {
                url: "/devops-master",
                templateUrl: "views/classroom_courses/dev_ops.component.html",
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('Devops master training in Hyderabad | dev ops tools | dev ops training-quicklearnsys.com');

                        ngMeta.setTag('description', 'Learn devops master course in Hyderabad. Get certified with devops master certification at affordable price 19,990 Rs only. Become a certified devops master with quicklearnsys.com');
                        
                        ngMeta.setTag('keywords', 'devops master, dev ops tools, dev ops training, master devops hyderabad, dev ops master training');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            })
            .state("app.terms", {
                url: "/terms",
                template: termsTemplate,
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('best devops training in Hyderabad |  togaf certification |  dev ops |  itil training');

                        ngMeta.setTag('description', 'Learn devops in Hyderabad Ameerpet. Low price and 100% exams pass assurance. Best infrastructure. Real time tutors and practical learning.');
                        
                        ngMeta.setTag('keywords', 'best devops training in hyderabad, togaf certification, dev ops, itil training, itil modules');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }).state("app.accreditations", {
                url: "/IT-certifications-hyderabad",
                template: accreditationsTemplate,
                resolve: {
                    data: (['ngMeta'], function (ngMeta) {
                        ngMeta.setTitle('IT certifications Hyderabad | itil Hyderabad | itil certification Hyderabad | prince2 certification');

                        ngMeta.setTag('description', 'Get certified today !! One stop solution for your all IT certifications in hyderabad. ITIL certifications, PMP and DEVops certifications at the best price per value in Hyderabad.');
                        
                        ngMeta.setTag('keywords', 'IT certifications hyderabad, itil hyderabad, itil certification hyderabad, prince2 certification, project management institute certification, pmi certification hyderabad');
                    })
                },
                meta: {
                    disableUpdate: true
                }
            }),
            ScrollBarsProvider.defaults = {
                scrollButtons: {
                    scrollAmount: "auto",
                    enable: !0
                },
                scrollInertia: 400,
                axis: "y",
                theme: "dark-thin",
                autoHideScrollbar: !1
            }
    }]).run(["$rootScope", "$state", "$location", "$window", "ngMeta", function ($rootScope, t, n, r, ngMeta) {
        ngMeta.init();
        $rootScope.$watch(function () {
            return n.path()
        }, function (e) {
            r.scrollTo(0, 0)
        })
    }])