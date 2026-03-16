---
title: Refactoring a Hardcoded Hiring Workflow into a Configurable Employee Onboarding System
summary: A configurable workflow system that allowed administrators to define employee roles and automatically assign training documents and notifications during the hiring process.
company: Monster Property Services
date: 2024
tech: [PHP, MySQL, Angular, Node.js]
---

> **Impact**
>
> • Reduced manual onboarding work for office staff  
> • Enabled administrators to configure hiring workflows without developer intervention  
> • Improved consistency in training and documentation delivery  

---

## Context

The company hires seasonal employees across multiple operational roles each year.  
Each role requires different training documents and onboarding steps before the employee can begin work.

Originally, onboarding logic was implemented directly in application code, which made the system difficult to maintain as the organization grew.

---

## Problem

The original system had several limitations:

- Employee roles were hardcoded in the application
- Training requirements were embedded in conditional logic
- Adding new roles required developer intervention
- Notifications and document delivery were inconsistent

Example of the original pattern:
```
if position == "Driver":
assignDocument("Driver Safety Guide")
```
This approach made the onboarding workflow fragile and difficult to scale.

---

## Constraints

The new system needed to support:

- dynamically created employee roles
- different onboarding requirements per role
- stage-based application workflows
- automated notifications to applicants

Additionally, the system had to integrate with the existing application infrastructure without disrupting ongoing hiring operations.

---

## Solution

I designed a configuration-driven onboarding workflow system that allowed administrators to define employee positions and attach training requirements directly within the application.

Each role could specify:

- required documents
- when those documents should be assigned
- when notifications should be sent

### Core workflow
```
Application Stage Change
↓
Evaluate Training Rules
↓
Assign Required Documents
↓
Send Notification to Applicant

```

---

## Domain Model

Key entities in the system included:

- Position
- Application
- ApplicationStage
- TrainingDocument
- StageRule
- Notification

This model allowed onboarding requirements to be expressed as configuration rather than application code.

---

## Migration Strategy

Rather than rewriting the onboarding system entirely, the new configuration-based workflow engine was introduced alongside the existing logic.

New positions were created using the new system while legacy roles continued using the original implementation until they could be migrated safely.

---

## Impact

The new system allowed administrators to manage onboarding workflows without developer involvement.

Benefits included:

- consistent training delivery
- easier creation of new employee roles
- reduced operational overhead
- improved onboarding transparency

---

## Lessons Learned

- configuration systems must be carefully validated
- workflow flexibility should be balanced with administrative simplicity
- incremental refactoring reduces operational risk in production systems
