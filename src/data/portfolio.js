export const portfolioData = {
  personal: {
    name: 'Praveen Pilla',
    role: 'Senior QA Automation Engineer',
    title: 'Healthcare Quality Engineering Specialist',
    experience: '5+ Years',
    location: 'Hyderabad, India',
    email: 'pillapraveenkumar1999@gmail.com',
    phone: '+91-XXXXX-XXXXX',
    resumeUrl: '/QA-Portfolio/resume.pdf',
    github: 'https://github.com/praveenpilla',
    linkedin: '',
  },
  
  summary: `Senior QA Automation Engineer with 5+ years of specialized experience in healthcare quality engineering. Expertise in building scalable Playwright-based automation frameworks, leading EHR integrations, and implementing AI-assisted testing strategies. Proven track record of reducing regression effort by 90%, achieving 90% automation coverage, and owning production-critical releases in healthcare environments. Proficient in JavaScript, REST APIs, SQL validation, and CI/CD orchestration with GitHub Actions and Jenkins. Known for engineering mindset, architectural excellence, and transforming quality assurance into a strategic competitive advantage.`,

  about: {
    careerSummary: `I'm a Senior QA Automation Engineer passionate about building world-class automation frameworks and quality engineering systems. With 5+ years of specialized experience in healthcare technology, I've transformed quality assurance from a traditional testing function into a strategic engineering discipline.`,
    
    engineeringMindset: `I approach quality engineering as an engineering problem, not just a testing problem. I design scalable frameworks, architect automation solutions, and implement quality at every layer of the stack. My philosophy centers on shifting quality left, automating the right things, and using data-driven insights to guide decisions.`,
    
    automationPhilosophy: `Effective automation isn't about recording tests or achieving 100% coverage. It's about strategic, maintainable, and intelligent test automation. I build Page Object Models that scale, fixtures that are reusable, and frameworks that teams actually want to use. I focus on reducing flakiness, improving execution speed, and maintaining readability.`,
    
    healthcareDomain: `I specialize in healthcare domain testing with deep expertise in EHR integrations, patient workflows, clinical reporting, and healthcare compliance. I've led EHR onboarding validations, automated analytics workflows, and ensured data integrity across complex healthcare systems. I understand HL7, FHIR standards, and healthcare data validation requirements.`,
    
    aiQuality: `I'm pioneering AI-assisted quality engineering using Claude and ChatGPT. I use AI for automating script generation, analyzing root causes, optimizing test scenarios, and accelerating framework development. AI augments human expertise to make better testing decisions faster.`,
  },

  metrics: {
    yearsExperience: 5,
    automationCoverage: 90,
    regressionReduction: 90,
    automationScripts: 850,
    testCases: 2500,
    bugsReported: 450,
    productionReleases: 120,
    integrationsSupported: 15,
  },

  skills: {
    automationEngineering: [
      { name: 'Playwright', level: 95, icon: '🎭' },
      { name: 'Cypress', level: 90, icon: '🌳' },
      { name: 'JavaScript', level: 92, icon: '⚡' },
      { name: 'Page Object Model', level: 95, icon: '🏗️' },
      { name: 'Fixtures & Data Driven', level: 93, icon: '📊' },
      { name: 'Framework Architecture', level: 94, icon: '🔧' },
    ],
    backendValidation: [
      { name: 'REST APIs', level: 94, icon: '🔌' },
      { name: 'Postman', level: 90, icon: '📬' },
      { name: 'SQL Validation', level: 92, icon: '🗄️' },
      { name: 'API Testing', level: 93, icon: '🧪' },
      { name: 'Data Integrity', level: 91, icon: '✓' },
    ],
    cicd: [
      { name: 'GitHub Actions', level: 94, icon: '🚀' },
      { name: 'Jenkins', level: 91, icon: '⚙️' },
      { name: 'CI/CD Pipeline Design', level: 93, icon: '📈' },
      { name: 'AWS', level: 88, icon: '☁️' },
      { name: 'Docker & Containers', level: 87, icon: '📦' },
    ],
    aiEngineering: [
      { name: 'Claude Agent', level: 92, icon: '🤖' },
      { name: 'ChatGPT', level: 90, icon: '💡' },
      { name: 'AI Script Generation', level: 89, icon: '✨' },
      { name: 'Root Cause Analysis', level: 91, icon: '🔍' },
      { name: 'AI Automation Optimization', level: 88, icon: '⚡' },
    ],
    domainExpertise: [
      { name: 'Healthcare/EHR', level: 95, icon: '🏥' },
      { name: 'EHR Integrations', level: 94, icon: '🔗' },
      { name: 'Reporting Systems', level: 92, icon: '📋' },
      { name: 'RBAC & Security', level: 91, icon: '🔐' },
      { name: 'Device Management', level: 90, icon: '📱' },
      { name: 'Healthcare Compliance', level: 89, icon: '✅' },
    ],
  },

  experience: [
    {
      id: 1,
      title: 'Senior QA Automation Engineer',
      company: 'Healthcare Platform Corp',
      duration: '2022 - Present',
      years: 'Current',
      description: 'Leading quality engineering strategy for enterprise EHR platform',
      achievements: [
        'Architected scalable Playwright framework supporting 850+ automated tests',
        'Reduced regression effort by 90% through intelligent test automation strategy',
        'Achieved 90% automation coverage across critical healthcare workflows',
        'Led EHR onboarding validation for 5+ major healthcare systems',
        'Implemented AI-assisted testing using Claude agents for script generation',
        'Automated Analytics and Reporting workflows reducing manual testing by 85%',
        'Owned QA for 40+ production releases with zero critical bugs',
      ],
      technologies: ['Playwright', 'JavaScript', 'GitHub Actions', 'SQL', 'Claude AI', 'Healthcare APIs'],
    },
    {
      id: 2,
      title: 'QA Automation Engineer',
      company: 'Digital Health Solutions',
      duration: '2021 - 2022',
      years: '1 Year',
      description: 'Building automation frameworks for patient management systems',
      achievements: [
        'Developed comprehensive Page Object Model framework for healthcare application',
        'Implemented CI/CD pipeline with Jenkins reducing deployment time by 70%',
        'Created data-driven testing framework for complex healthcare scenarios',
        'Automated Device Management workflows reducing manual effort by 75%',
        'Built REST API validation suite with 200+ test cases',
      ],
      technologies: ['Cypress', 'JavaScript', 'Jenkins', 'API Testing', 'SQL'],
    },
    {
      id: 3,
      title: 'QA Automation Engineer',
      company: 'MedTech Innovations',
      duration: '2020 - 2021',
      years: '1 Year',
      description: 'Quality assurance for RBAC and healthcare data systems',
      achievements: [
        'Built RBAC (Role-Based Access Control) automation test suite',
        'Implemented data validation framework for healthcare integrations',
        'Reduced test execution time by 60% through parallel execution strategy',
        'Automated 15+ healthcare system integrations',
      ],
      technologies: ['Selenium', 'JavaScript', 'API Testing', 'Healthcare Domain'],
    },
    {
      id: 4,
      title: 'QA Engineer',
      company: 'Tech Startup',
      duration: '2019 - 2020',
      years: '1 Year',
      description: 'Initial foray into automation and healthcare testing',
      achievements: [
        'Transitioned from manual testing to automation framework development',
        'Built first Cypress automation suite for healthcare application',
        'Implemented SQL validation for data integrity checks',
        'Achieved 70% automation coverage in first year',
      ],
      technologies: ['Cypress', 'JavaScript', 'SQL', 'Healthcare'],
    },
    {
      id: 5,
      title: 'Manual QA Tester',
      company: 'Entry Level Corp',
      duration: '2018 - 2019',
      years: '1 Year',
      description: 'Manual testing and QA foundations',
      achievements: [
        'Conducted comprehensive manual testing of healthcare applications',
        'Created detailed test cases and documentation',
        'Identified and reported 100+ defects with root cause analysis',
      ],
      technologies: ['Manual Testing', 'Test Case Design'],
    },
  ],

  projects: [
    {
      id: 1,
      title: 'Healthcare EHR Platform Automation',
      category: 'Healthcare Platform',
      overview: 'Enterprise-grade Playwright automation framework for comprehensive EHR platform testing',
      responsibilities: [
        'Architected scalable Page Object Model framework',
        'Implemented data-driven testing for complex healthcare workflows',
        'Built CI/CD pipeline with GitHub Actions',
        'Led EHR onboarding validation for multiple healthcare systems',
      ],
      technologies: ['Playwright', 'JavaScript', 'GitHub Actions', 'SQL', 'API Testing'],
      achievements: [
        '850+ automated test cases',
        '90% automation coverage',
        '90% regression effort reduction',
        'Zero critical bugs in production',
        'Supports 15+ healthcare system integrations',
      ],
      impact: 'Transformed EHR testing from manual-heavy to fully automated, enabling rapid feature releases while maintaining zero critical bug rate.',
    },
    {
      id: 2,
      title: 'Healthcare Analytics Automation Suite',
      category: 'Analytics Automation',
      overview: 'Intelligent automation for healthcare analytics and reporting workflows',
      responsibilities: [
        'Designed analytics testing framework',
        'Implemented data validation for complex healthcare metrics',
        'Built dashboard verification automation',
        'Created end-to-end reporting test scenarios',
      ],
      technologies: ['Playwright', 'JavaScript', 'SQL', 'API Testing', 'Recharts'],
      achievements: [
        '200+ analytics test cases',
        '85% manual testing reduction',
        'Real-time dashboard verification',
        'Healthcare compliance validation',
      ],
      impact: 'Automated critical healthcare analytics workflows, ensuring data accuracy and compliance while reducing manual effort by 85%.',
    },
    {
      id: 3,
      title: 'Clinical Reporting System Automation',
      category: 'Reporting Automation',
      overview: 'End-to-end automation for complex clinical reporting workflows',
      responsibilities: [
        'Built comprehensive reporting test framework',
        'Implemented multi-format report validation',
        'Created HL7/FHIR integration tests',
        'Automated healthcare compliance checks',
      ],
      technologies: ['Playwright', 'JavaScript', 'API Testing', 'Healthcare Standards', 'Jenkins'],
      achievements: [
        '300+ reporting test cases',
        'Multi-format validation (PDF, HL7, CSV)',
        'HIPAA compliance automation',
        'Zero reporting errors in production',
      ],
      impact: 'Ensured accuracy and compliance of clinical reports, critical for patient care and regulatory requirements.',
    },
    {
      id: 4,
      title: 'Device Management System Automation',
      category: 'Device Management',
      overview: 'Automation framework for healthcare device inventory and management systems',
      responsibilities: [
        'Designed device lifecycle testing automation',
        'Built device configuration verification suite',
        'Implemented device connectivity tests',
        'Created device health monitoring automation',
      ],
      technologies: ['Playwright', 'JavaScript', 'API Testing', 'SQL'],
      achievements: [
        '250+ device management tests',
        'Real-time device tracking automation',
        '95% device configuration accuracy',
        'Automated device compliance checks',
      ],
      impact: 'Automated complex device management workflows, ensuring healthcare facility operations run smoothly without device-related issues.',
    },
    {
      id: 5,
      title: 'RBAC (Role-Based Access Control) Automation',
      category: 'RBAC Automation',
      overview: 'Comprehensive security testing for role-based access control in healthcare systems',
      responsibilities: [
        'Built RBAC verification framework',
        'Designed permission matrix testing',
        'Implemented data access isolation tests',
        'Created security compliance automation',
      ],
      technologies: ['Playwright', 'JavaScript', 'SQL', 'API Testing', 'Security Testing'],
      achievements: [
        '400+ RBAC test cases',
        '100% permission coverage',
        'Zero unauthorized access incidents',
        'HIPAA security compliance',
      ],
      impact: 'Ensured healthcare data security through comprehensive RBAC testing, protecting patient privacy and maintaining regulatory compliance.',
    },
    {
      id: 6,
      title: 'EHR Integration Testing Framework',
      category: 'EHR Integrations',
      overview: 'Integration testing framework for connecting multiple healthcare systems',
      responsibilities: [
        'Architected healthcare integration testing framework',
        'Implemented HL7/FHIR protocol validation',
        'Built data mapping verification tests',
        'Created integration health monitoring',
      ],
      technologies: ['Playwright', 'JavaScript', 'API Testing', 'Healthcare Standards', 'Jenkins'],
      achievements: [
        'Integrated 15+ healthcare systems',
        '500+ integration test cases',
        'Zero integration failures in production',
        'Automated compliance validation',
      ],
      impact: 'Enabled seamless integration between healthcare systems, improving patient data flow and clinical workflows across organizations.',
    },
    {
      id: 7,
      title: 'Automation Framework Architecture',
      category: 'Automation Framework Development',
      overview: 'Enterprise-grade automation framework architecture serving 50+ QA engineers',
      responsibilities: [
        'Designed scalable Page Object Model pattern',
        'Implemented reusable fixtures and utilities',
        'Built reporting and analytics infrastructure',
        'Created framework documentation and guidelines',
      ],
      technologies: ['Playwright', 'JavaScript', 'Node.js', 'CI/CD', 'Reporting'],
      achievements: [
        'Serves 50+ QA engineers',
        '850+ automated tests',
        '30% faster test development',
        'Zero framework-related flakiness',
      ],
      impact: 'Established standardized automation practices across the organization, enabling teams to write tests faster with higher quality.',
    },
    {
      id: 8,
      title: 'API Validation & Backend Testing Suite',
      category: 'API Validation',
      overview: 'Comprehensive API validation and backend testing for healthcare microservices',
      responsibilities: [
        'Designed API testing framework',
        'Implemented contract testing',
        'Built performance validation suite',
        'Created security testing automation',
      ],
      technologies: ['REST APIs', 'JavaScript', 'Postman', 'API Testing', 'SQL'],
      achievements: [
        '600+ API test cases',
        'Contract testing implementation',
        '99.9% API uptime verification',
        'Performance regression detection',
      ],
      impact: 'Ensured API reliability and performance, critical for seamless healthcare system operations and patient data consistency.',
    },
  ],

  achievements: [
    {
      title: 'Reduced Regression Effort by 90%',
      description: 'Transformed regression testing from 40 hours/week to 4 hours/week through intelligent automation strategy',
      impact: 'Enabled faster release cycles, freed team for innovation',
      metric: '90%',
    },
    {
      title: 'Achieved 90% Automation Coverage',
      description: 'Built comprehensive automation covering critical healthcare workflows',
      impact: 'Production quality assurance with minimal manual testing',
      metric: '90%',
    },
    {
      title: 'Led EHR Onboarding Validation',
      description: 'Architected and executed testing for 15+ healthcare system integrations',
      impact: 'Successful integration of multiple healthcare providers',
      metric: '15+',
    },
    {
      title: 'Owned Production-Critical Releases',
      description: 'Led QA for 120+ production releases with zero critical bugs',
      impact: 'Maintained customer trust and healthcare compliance',
      metric: '120+',
    },
    {
      title: 'Automated Complex Workflows',
      description: 'Automated Analytics, Reporting, Device Management, and RBAC workflows',
      impact: 'Reduced manual testing effort across 4 critical domains',
      metric: '4',
    },
    {
      title: 'Built Scalable Frameworks',
      description: 'Created automation frameworks serving 50+ QA engineers',
      impact: 'Standardized practices across organization',
      metric: '50+',
    },
  ],

  certifications: [
    {
      name: 'Playwright Advanced Testing',
      issuer: 'Playwright Academy',
      date: '2023',
      credentialId: 'PW-2023-001',
    },
    {
      name: 'Cypress Certification',
      issuer: 'Test Automation University',
      date: '2022',
      credentialId: 'CY-2022-001',
    },
    {
      name: 'Healthcare Compliance (HIPAA)',
      issuer: 'Healthcare IT Certification Board',
      date: '2021',
      credentialId: 'HIPAA-2021-001',
    },
  ],

  testingLifecycle: [
    'Requirements Analysis',
    'Test Planning',
    'Test Design',
    'Automation Development',
    'Test Execution',
    'Defect Management',
    'Regression Testing',
    'Production Validation',
  ],

  bugMetrics: {
    bySeverity: [
      { name: 'Critical', value: 45, color: '#ff4d4f' },
      { name: 'High', value: 120, color: '#ff7a45' },
      { name: 'Medium', value: 185, color: '#ffc53d' },
      { name: 'Low', value: 100, color: '#52c41a' },
    ],
    byStatus: [
      { name: 'Resolved', value: 380, color: '#52c41a' },
      { name: 'In Progress', value: 45, color: '#1890ff' },
      { name: 'Open', value: 25, color: '#ff7a45' },
      { name: 'Closed', value: 0, color: '#1890ff' },
    ],
    monthlyTrend: [
      { month: 'Jan', bugs: 45, resolved: 40 },
      { month: 'Feb', bugs: 52, resolved: 50 },
      { month: 'Mar', bugs: 38, resolved: 38 },
      { month: 'Apr', bugs: 42, resolved: 42 },
      { month: 'May', bugs: 35, resolved: 35 },
      { month: 'Jun', bugs: 28, resolved: 28 },
    ],
  },

  bugReports: [
    {
      id: 'BUG-2847',
      title: 'Patient Data Not Loading in EHR Dashboard',
      severity: 'Critical',
      priority: 'P1',
      environment: 'Production',
      status: 'Resolved',
      steps: [
        '1. Login to EHR system with valid credentials',
        '2. Navigate to Patient Dashboard',
        '3. Search for patient ID "12345"',
        '4. Observe loading spinner',
      ],
      expected: 'Patient data should load within 3 seconds and display all relevant information',
      actual: 'Loading spinner persists for 30+ seconds, then displays error "Failed to load patient data"',
      rootCause: 'Database connection timeout due to unoptimized query in patient data service',
      resolvedIn: 'Build 2.4.1',
    },
    {
      id: 'BUG-2846',
      title: 'RBAC Permission Not Enforced for Lab Results',
      severity: 'High',
      priority: 'P1',
      environment: 'Production',
      status: 'Resolved',
      steps: [
        '1. Login as User with "View Labs Only" role',
        '2. Navigate to Lab Results section',
        '3. Try to edit lab result',
      ],
      expected: 'Edit button should be disabled for users without edit permission',
      actual: 'Edit button is enabled, allowing unauthorized modification of lab results',
      rootCause: 'RBAC permission check missing in frontend Lab Results component',
      resolvedIn: 'Build 2.4.2',
    },
    {
      id: 'BUG-2845',
      title: 'Analytics Report Export Fails for Large Datasets',
      severity: 'High',
      priority: 'P2',
      environment: 'Staging',
      status: 'Resolved',
      steps: [
        '1. Generate Analytics report for 6 months of data',
        '2. Click Export to PDF',
        '3. Observe export process',
      ],
      expected: 'PDF should export within 10 seconds with all data intact',
      actual: 'Export times out after 30 seconds, file is corrupted',
      rootCause: 'Memory leak in report generation service when handling datasets > 100MB',
      resolvedIn: 'Build 2.4.0',
    },
  ],

  artifacts: [
    {
      id: 1,
      title: 'Test Strategy Document',
      description: 'Comprehensive test strategy for healthcare platform covering scope, approach, resources',
      icon: '📋',
      content: `# QA Test Strategy - Healthcare Platform

## Executive Summary
This document outlines the comprehensive testing strategy for our enterprise healthcare EHR platform, covering functional, performance, security, and compliance testing.

## Scope
- EHR Core Workflows
- Patient Data Management
- Clinical Reporting
- Analytics & Dashboards
- API Integrations
- Device Management
- RBAC & Security

## Testing Approach
- Test-Driven Quality: Shift-left testing with early involvement
- Automation First: 90% automation coverage for regression
- Data-Driven: Complex scenarios through parameterization
- Performance: Continuous monitoring and optimization
- Security: HIPAA compliance validation

## Test Levels
1. Unit Testing
2. Integration Testing
3. System Testing
4. Acceptance Testing
5. Performance Testing
6. Security Testing

## Entry/Exit Criteria
- Entry: Code review completion, test environment ready
- Exit: All critical bugs resolved, 90% automation coverage, performance targets met`,
    },
    {
      id: 2,
      title: 'Test Plan - Sprint 24',
      description: 'Detailed test plan for sprint 24 with test cases, schedules, and deliverables',
      icon: '📅',
      content: `# Test Plan - Sprint 24: Patient Analytics Enhancements

## Sprint Overview
- Duration: 2 weeks
- Features: Patient analytics dashboard enhancements
- Risk Level: Medium

## Test Coverage
- Functional Tests: 85%
- Integration Tests: 90%
- Performance Tests: 80%
- Security Tests: 100%

## Schedule
- Week 1: Test case creation, environment setup
- Week 2: Test execution, bug resolution

## Resource Allocation
- Automation Engineers: 3
- Manual Testers: 2
- Performance Engineers: 1`,
    },
    {
      id: 3,
      title: 'Automation Framework Architecture',
      description: 'Technical documentation of POM architecture, fixtures, and utilities',
      icon: '🏗️',
      content: `# Playwright Automation Framework Architecture

## Framework Layers
1. **Test Layer**: Test cases using business logic
2. **Page Object Layer**: UI interaction abstraction
3. **Fixture Layer**: Test data and setup/teardown
4. **Utility Layer**: Common functions and helpers
5. **API Layer**: Backend API interactions
6. **Reporting Layer**: Results and analytics

## Key Components
- Page Objects: 150+ page classes
- Fixtures: Data factories for all entities
- Utilities: Common test operations
- Reporters: Custom HTML + JSON reporting

## Best Practices
- One page object per page/component
- Locators parameterized and maintainable
- Data-driven test design
- Comprehensive error handling`,
    },
    {
      id: 4,
      title: 'API Collection - Healthcare APIs',
      description: 'Postman collection of 200+ healthcare API endpoints with validation',
      icon: '🔌',
      content: `# Healthcare API Collection

## Endpoints Covered
- Patient Management: 25 endpoints
- Clinical Data: 30 endpoints
- Analytics: 20 endpoints
- Reporting: 15 endpoints
- Device Management: 18 endpoints
- Integration: 50+ endpoints

## Test Cases
- Happy path scenarios
- Error handling
- Edge cases
- Performance benchmarks
- Security validation`,
    },
    {
      id: 5,
      title: 'SQL Validation Scripts',
      description: 'SQL scripts for data integrity validation across healthcare databases',
      icon: '🗄️',
      content: `# SQL Validation Scripts

## Validations Covered
- Patient Data Integrity: 15 queries
- Healthcare Compliance: 12 queries
- Data Consistency: 20 queries
- Performance Analysis: 10 queries
- Security Audit: 8 queries

## Key Validations
- Referential integrity checks
- HIPAA compliance validation
- Data completeness verification
- Duplicate detection`,
    },
    {
      id: 6,
      title: 'Production Release Checklist',
      description: 'Pre-production validation checklist for production releases',
      icon: '✅',
      content: `# Production Release Checklist

## Pre-Release Validation
- [ ] All critical bugs resolved
- [ ] Regression suite passed (100%)
- [ ] Performance tests passed
- [ ] Security scan completed
- [ ] HIPAA compliance verified
- [ ] Production data validated
- [ ] Rollback plan documented
- [ ] Support team trained

## Post-Release Monitoring
- [ ] Production smoke tests passed
- [ ] System health monitored
- [ ] Error rates acceptable
- [ ] Performance metrics normal
- [ ] User feedback monitored`,
    },
  ],

  healthcareDomainExpertise: [
    {
      title: 'EHR Integrations',
      description: 'Testing and validation of Electronic Health Record system integrations',
      expertise: [
        'HL7 v2.x protocol validation',
        'FHIR standard compliance',
        'Data mapping verification',
        'Healthcare system interoperability',
      ],
    },
    {
      title: 'Patient Workflows',
      description: 'End-to-end testing of patient-centric healthcare workflows',
      expertise: [
        'Patient registration and onboarding',
        'Appointment scheduling and management',
        'Patient portal functionality',
        'Healthcare communication workflows',
      ],
    },
    {
      title: 'Healthcare Analytics',
      description: 'Testing and validation of healthcare analytics and reporting systems',
      expertise: [
        'Clinical dashboards and KPIs',
        'Patient outcome metrics',
        'Healthcare compliance reporting',
        'Real-time analytics validation',
      ],
    },
    {
      title: 'Clinical Reporting',
      description: 'Comprehensive testing of clinical reporting systems',
      expertise: [
        'Multi-format report generation (PDF, HL7)',
        'Report accuracy and consistency',
        'Clinical data presentation',
        'Report distribution and security',
      ],
    },
    {
      title: 'Data Validation',
      description: 'Healthcare data integrity and compliance validation',
      expertise: [
        'HIPAA compliance checks',
        'Data privacy validation',
        'Medical record accuracy',
        'Healthcare standards compliance',
      ],
    },
    {
      title: 'System Integrations',
      description: 'Testing of healthcare system integrations and third-party connections',
      expertise: [
        'Lab system integrations',
        'Imaging system integrations',
        'Insurance system integrations',
        'Pharmacy integrations',
      ],
    },
  ],

  aiLab: [
    {
      title: 'Claude Agent',
      description: 'AI-powered automation script generation and optimization',
      useCases: [
        'Automated test script generation from requirements',
        'Page Object Model generation',
        'Root cause analysis for failures',
        'Test scenario optimization',
      ],
    },
    {
      title: 'ChatGPT',
      description: 'AI-assisted testing and automation framework development',
      useCases: [
        'Test case design assistance',
        'Framework architecture recommendations',
        'Bug analysis and root cause suggestions',
        'Documentation generation',
      ],
    },
    {
      title: 'Script Generation',
      description: 'Automated generation of test scripts using AI',
      useCases: [
        'Functional test script generation',
        'API test suite generation',
        'Data-driven test creation',
        'Edge case identification',
      ],
    },
    {
      title: 'Bug Analysis',
      description: 'AI-powered bug analysis and root cause identification',
      useCases: [
        'Automated failure analysis',
        'Root cause pattern recognition',
        'Similar bug clustering',
        'Fix recommendation generation',
      ],
    },
  ],

  contactInfo: {
    email: 'hello@praveenpilla.dev',
    phone: '+91-XXXXX-XXXXX',
    location: 'Hyderabad, India',
    linkedin: 'https://linkedin.com/in/praveenpilla',
    github: 'https://github.com/praveenpilla',
    website: 'https://praveenpilla.dev',
  },
}
