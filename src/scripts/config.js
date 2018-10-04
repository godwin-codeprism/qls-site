var usersTemplate = require('../views/users.html'),
    homeTemplate = require('../views/home.html'),
    aboutTemplate = require('../views/about.html'),
    upcoming_eventsTemplate = require('../views/upcoming_events.html'),
    serviesTemplate = require('../views/services.html'),
    contactTemplate = require('../views/contact.html'),
    termsTemplate = require('../views/terms.html'),
    accreditationsTemplate = require('../views/accreditations.html'),
    privacyTemplate = require('../views/privacy_policy.html');
function runFun ($transitions, $rootScope, $location, $window, ngMeta) {
    ngMeta.init();
    $transitions.onBefore({}, function (trans) {
        $rootScope.mobileMenuState = false;
        if (trans.$to().name != 'app') {
            $rootScope.enquiryState = true;
        } else {
            $rootScope.enquiryState = false;
        }
    })
    $rootScope.$watch(function () {
        return $location.path();ˀ
    }, function (e) {
        $window.scrollTo(0, 0)
    })
}
function configFun ($stateProvider, $urlRouterProvider, ngMetaProvider, $locationProvider) {
    $stateProvider.decorator('data', ngMetaProvider.mergeNestedStateData);
    $locationProvider.hashPrefix("");
    $locationProvider.html5Mode(true);
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
                    ngMeta.setTitle('QuickLearn Systems', ' ITIL Certification Training in Hyderabad | SAFe Agile | PMP | Prince2 | Six Sigma - QuickLearn Systems');
                    ngMeta.setTag('description', 'QuickLearn Systems provides ITIL Certification Training in Hyderabad & Bangalore with pass guarantee. We at QuickLearn Systems offer ITIL, PMP, ACP, Prince2, CSM, SAFe Agile, DevOps Master, SIAM, Cobit & Six Sigma Certifications with pass Assurance');
                    ngMeta.setTag('keywords', 'ITIL Certification Training in Hyderabad, ITIL Foundation Training in Hyderabad, ITIL Training in Bangalore, ITIL Certification training in Bangalore, Prince2 Foundation certification in Hyderabad, Prince2 Practitioner training in Hyderabad, Professional Scrum Master Certification in Hyderabad, CSM Training in Hyderabad, CSM Training in Bangalore, SAFe Agile Certification in Hyderabad, SAFe Agile training in Hyderabad, SAFe Agile Training in Bangalore, DevOps Master training and certification in Hyderabad, SIAM Certification training in Hyderabad,  ITIL Training, PMP Citification Training in Hyderabad, ITIL training Hyderabad, Six Sigma Green belt training Hyderabad, Six Sigma training in Hyderabad');
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
                    ngMeta.setTag('description', 'Looking for ITIL certification hyderabad look no further quicklearnsys.com offers best training for ITIL certification in the twin cities. ');
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
                    ngMeta.setTitle('itil institutes in Hyderabad | QuickLearn sys | QuickLearn systems Hyderabad-quicklearnsys.com');
                    ngMeta.setTag('description', 'One stop solution for all ITIL certifications. Get certified from one of the best ITIL institutes in Hyderabad. World class learning infrastructure at affordable prices.');
                    ngMeta.setTag('keywords', 'itil institutes in hyderabad, QuickLearn sys, QuickLearn systems hyderabad, contact quicklearn sys hyderabad, quicklearn systems hyderabad, quicklearnsys.com');
                })
            },
            meta: {
                disableUpdate: true
            }
        }).state("app.itil_foundation", {
            url: "/itilfoundation",
            templateUrl: "views/classroom_courses/itil_foundation.html",
            resolve: {
                data: (['ngMeta'], function (ngMeta) {
                    ngMeta.setTitle('ITIL Foundation Certification|Training|Course|Cost in Hyderabad');
                    ngMeta.setTag('description', 'We are best institute in Ameerpet Hyderabad offering ITIL Courses|Training. The ITIL foundation certification course fees are affordable by all.');
                    ngMeta.setTag('keywords', 'ITIL Certification Course in hyderabad, ITIL  Foundation Certification Fees,    ITIL Foundation Certification in Hyderabad, itil certification cost, itil foundation course, itil foundation exam cost, itil foundation training, itil foundation exam fee, itil certification online, itil foundation certification cost, itil training in hyderabad, what is itil certification, itil certification cost in india');
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
            templateUrl: "views/classroom_courses/soa.component.html",
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
                    ngMeta.setTitle('PMP Certification Training in Hyderabad | QuickLearn Systems offers best Project Management Program in Hyderabad');
                    ngMeta.setTag('description', 'PMP certification Training courses at affordable prices with 99% Success rate.  We are one of the best PMP training institutes in Hyderabad through highly experienced trainer, 35 PDU Certificate, 1 Year E-Learning access, Mock Exams and Question bank');
                    ngMeta.setTag('keywords', 'PMP certification in Hyderabad, PMP course in Hyderabad, PMP certification Hyderabad, best PMP training institute in Hyderabad, PMP certification Hyderabad pass guaranteed, PMP certification Hyderabad Gachibowli, PMP training in Hyderabad Madhapur, PMP training, PMP training Hyderabad, PMI PMP Certification in Hyderabad Madhapur, PMP Training in Gachibowli, PMP training institute in Kukatpally');
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
                    ngMeta.setTag('description', 'Agile certified practitioner courses in Hyderabad. QuickLearn sys offers best agile certified course in Hyderabad, we also offer pmi acp, pmi agile certifications.');
                    ngMeta.setTag('keywords', 'agile certified practitioner, pmi acp hyderabad, project management institute courses, pmi agile certification, pmi acp course');
                })
            },
            meta: {
                disableUpdate: true
            }
        }).state("app.prince2foundation", {
            url: "/prince2certificationhyderabad",
            templateUrl: "views/classroom_courses/p2f.component.html",
            resolve: {
                data: (['ngMeta'], function (ngMeta) {
                    ngMeta.setTitle('Prince2 Certification Classes | Training Institute | Hyderabad');
                    ngMeta.setTag('description', 'QuickLearn Systems is the best Prince2 training institutes in Ameerpet Hyderabad. We conduct many courses including Prince2 certification training.');
                    ngMeta.setTag('keywords', 'Prince2 Training Institutes In Hyderabad, Prince2 Certification Training in hyderabad, Prince2 Training Instutes, prince2 foundation & practitioner training, prince2 foundation online, prince2 certification cost in hyderabad, prince2 certification training institute in hyderabad');
                })
            },
            meta: {
                disableUpdate: true
            }
        }).state("app.prince2practitioner", {
            url: "/prince2agiletraininghyderabad",
            templateUrl: "views/classroom_courses/p2p.component.html",
            resolve: {
                data: (['ngMeta'], function (ngMeta) {
                    ngMeta.setTitle('Prince2 Agile certification | Practitioner | Online Training classes');
                    ngMeta.setTag('description', 'QuickLearn Systems Hyderabad conducts Prince2 Agile online training classes. Get trained in Prince2 Agile Practitioner qualification and Certification.');
                    ngMeta.setTag('keywords', 'Prince2 Agile Practitioner,Prince2 Agile Certification, prince2 practitioner hyderabad, Prince2 Online Training, Prince2 Online Classes');
                })
            },
            meta: {
                disableUpdate: true
            }
        }).state("app.prince2agile", {
            url: "/prince2agilepractitioner",
            templateUrl: "views/classroom_courses/p2a.component.html",
            resolve: {
                data: (['ngMeta'], function (ngMeta) {
                    ngMeta.setTitle('Prince2 Foundation Training | Certification with Pass Guarantee');
                    ngMeta.setTag('description', 'Are you searching Hydearabad for Prince2 certification with a pass guarantee ?. QuickLearn Systems is the best place for Prince2 foundation certification.');
                    ngMeta.setTag('keywords', 'Prince2 Certification With Pass Guarantee, Prince2 Foundation Certification');
                })
            },
            meta: {
                disableUpdate: true
            }
        }).state("app.scrum", {
            url: "/psmcertification",
            templateUrl: "views/classroom_courses/scrum.component.html",
            resolve: {
                data: (['ngMeta'], function (ngMeta) {
                    ngMeta.setTitle('PSM | Certification Training | Pass Guarantee | Hyderabad');
                    ngMeta.setTag('description', 'QuickLearn Systems supports you for PSM training and certification in Hyderabad. You can get your PSM certification with pass guarantee and at a lowest Fee');
                    ngMeta.setTag('keywords', 'PSM Training in Hyderabad, PSM Certification, PSM Certification, PSM Certification with pass guarantee');
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
                    ngMeta.setTitle('Lean Six Sigma Green Belt Certification in Hyderabad |Six Sigma Green belt training in Hyderabad best in quality at low cost QuickLearn Systems');
                    ngMeta.setTag('description', 'Lean Six Sigma Green Belt Certification Training in Hyderabad with 100% Pass Guarantee. We at QuickLearn Systems offer ITIL, PMP, ACP, Prince2, CSM, SAFe Agile, DevOps Master, SIAM, Cobit & Six Sigma Certifications with pass Assurance');
                    ngMeta.setTag('keywords', 'lean six sigma green belt certification in Hyderabad , six sigma green belt certification cost, six sigma green belt certification in Hyderabad, six sigma training in Hyderabad, six sigma green belt certification in Gachibowli, six sigma green belt certification cost in Hyderabad, six sigma green belt certification in Madhapur, six sigma green belt certification in training, six sigma green belt Kondapur, six sigma green belt certification online free, six sigma Hyderabad, lean six sigma certification, lean 6 sigma Hyderabad, Six sigma certification');
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
            url: "/safeagiletraining",
            templateUrl: "views/classroom_courses/safe.component.html",
            resolve: {
                data: (['ngMeta'], function (ngMeta) {
                    ngMeta.setTitle('Safe Alige Institutes|Training|Course|Certification in hyderabad');
                    ngMeta.setTag('description', 'QuickLearn Systems is the best Safe Agile institute in Hyderabad. The certification training course conducted is the best in class. The fees are affordable.');
                    ngMeta.setTag('keywords', 'Safe Agile Institutes in Hyderabad, Safe Agile Course, Safe Agile Training in Hyderabad, Safe Agile Training and Certification in Hyderabad, Safe Agile Certification Training Hyderabad, Safe Agile Certification Course In Hyderabad ');
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
                    ngMeta.setTitle('DevOps Master Certification training in Hyderabad | DevOps Master Certification |DevOps Master – QuickLearn Systems');
                    ngMeta.setTag('description', 'DevOps Master Certification training in Hyderabad at offer price with pass guarantee. Get 10% off on early bird registration, we offer ITIL, PMP, ACP, Prince2, CSM, SAFe Agile, DevOps Master, SIAM, Cobit & Six Sigma Certifications with pass Assurance');
                    ngMeta.setTag('keywords', 'DevOps Master training and certification in Hyderabad, DevOps master certification price in Hyderabad, Exin DevOps master certification cost in Gachibowli, DevOps Master certification value, DevOps master training in Gachibowli, Best DevOps trainer in Hyderabad, DevOps master training in Madhapur, DevOps master training in Kondapur, DevOps master, DevOps tools, DevOps training, DevOps Course in Hyderabad,DevOps training in Gachibowli, DevOps training in Kukatpally, DevOps training in Madhapur');
                })
            },
            meta: {
                disableUpdate: true
            }
        }).state("app.doi", {
            url: "/devops-foundation",
            templateUrl: "views/classroom_courses/doi.component.html",
            resolve: {
                data: (['ngMeta'], function (ngMeta) {
                    ngMeta.setTitle('DevOps Foundation Certification training in Hyderabad | DevOps Foundation Certification |DevOps Foundation – QuickLearn Systems');
                    ngMeta.setTag('description', 'DevOps Foundation Certification training in Hyderabad at offer price with pass guarantee. Get 10% off on early bird registration, we offer ITIL, PMP, ACP, Prince2, CSM, SAFe Agile, DevOps Foundation, SIAM, Cobit & Six Sigma Certifications with pass Assurance');
                    ngMeta.setTag('keywords', 'DevOps Foundation training and certification in Hyderabad, DevOps Foundation certification price in Hyderabad, Exin DevOps Foundation certification cost in Gachibowli, DevOps Foundation certification value, DevOps Foundation training in Gachibowli, Best DevOps trainer in Hyderabad, DevOps Foundation training in Madhapur, DevOps Foundation training in Kondapur, DevOps Foundation, DevOps tools, DevOps training, DevOps Course in Hyderabad,DevOps training in Gachibowli, DevOps training in Kukatpally, DevOps training in Madhapur');
                })
            },
            meta: {
                disableUpdate: true
            }
        })
        .state("app.siam", {
            url: "/service-integration-and-management",
            templateUrl: "views/classroom_courses/siam.component.html",
            resolve: {
                data: (['ngMeta'], function (ngMeta) {
                    ngMeta.setTitle('SIAM Foundation Training and Certification in Hyderabad - QuickLearn systems');
                    ngMeta.setTag('description', 'As SIAM becomes ever more embedded as an industry discipline, businesses increasingly need their IT staff to possess more and deeper practical understanding and competence about SIAM organized by QuickLearn Systems.');
                    ngMeta.setTag('keywords', 'siam training in Hyderabad, siam certification centre in hyderabad , siam exam, exin siam foundation in hyderabad, siam foundation in hyderabad, siam training in gachibowli, siam certification in gachibowli, siam exam in gachibowli');
                })
            },
            meta: {
                disableUpdate: true
            }
        })
        .state("app.cspo", {
            url: "/certified-scrum-product-owner",
            templateUrl: "views/classroom_courses/cspo.component.html",
            resolve: {
                data: (['ngMeta'], function (ngMeta) {
                    ngMeta.setTitle('Certified Scrum Product Owner CSPO Training Hyderabad | CSPO Certification Course in Hyderabad');
                    ngMeta.setTag('description', 'Enrol for Certified Scrum Product Owner (CSPO) Certification Training in Hyderabad Attend Certified Scrum Product Owner (CSPO) Training and Certification workshop organized by QuickLearn systems.');
                    ngMeta.setTag('keywords', 'cspo certification Hyderabad, Certified Scrum Product Owner (CSPO) Training in Hyderabad, cspo certification, product owner training in Hyderabad, scrum product owner certification in gachibowli, scrum product owner training in  gachibowli, cspo training in gachibowli');
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
        }).state("app.privacy", {
            url: "/privacy-policy",
            template: privacyTemplate,
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
        });
    $urlRouterProvider.otherwise("/");
};
angular.module("qls", ["ngSanitize", "ui.router", "ngMeta", "ngAnimate"]).config(configFun).run(runFun);
configFun.$inject = ["$stateProvider", "$urlRouterProvider", "ngMetaProvider", "$locationProvider"];
runFun.$inject = ["$transitions", "$rootScope", "$location", "$window", "ngMeta"];