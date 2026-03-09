---
title: Building a Cross-Platform Map-Based Delivery Planning System
summary: A system used by office staff, clients, and field operators to coordinate seasonal delivery of equipment using shared geospatial data.
company: Monster Property Services
date: 2022
tech: [PHP, MySQL, Angular, Android]
---

> **Impact**
>
> • Coordinated delivery planning between office staff, customers, and field operators  
> • Reduced ambiguity in equipment placement using map-based instructions  
> • Improved visibility into delivery completion  

---

## Context

At the start of each winter season, equipment such as salt bins must be delivered to client locations.

Deliveries require precise placement instructions to ensure the equipment is accessible and does not interfere with operations on the property.

---

## Problem

Previously, delivery placement instructions were communicated informally between office staff and field operators.

This created several issues:

- placement instructions were unclear
- customers could not confirm intended placement
- operators lacked a visual reference
- delivery outcomes were difficult to track

---

## Constraints

The system needed to support three different users:

- office staff planning deliveries
- customers reviewing delivery placement
- field operators completing deliveries

It also needed to function across both web interfaces and an Android mobile application.

---

## Solution

I designed a cross-platform delivery planning system centered around map-based placement of equipment.

Office staff could place delivery markers directly on a site map representing the intended bin location.

These coordinates were stored with the delivery order and shared across all systems.

---

## System Architecture
```
Office Planning Tool
↓
Backend API
↓
Client Portal Android Delivery App

```


All interfaces interacted with a shared backend API and common data model.

---

## Delivery Workflow

```
Office places bin markers on map
↓
Client reviews placement in portal
↓
Client may adjust or add notes
↓
Operator views placement in mobile app
↓
Operator marks delivery complete

```

---

## Mobile Field Execution

Operators used an Android application to:

- view planned bin locations
- confirm successful delivery
- record delivery issues or notes

This allowed field execution to stay synchronized with planning data.

---

## Impact

The system created a shared understanding of delivery instructions across all stakeholders.

Benefits included:

- clearer placement instructions for operators
- improved customer communication
- consistent delivery tracking

---

## Lessons Learned

- map-based planning tools reduce ambiguity in field operations
- cross-platform systems benefit from a shared data model
- allowing customers to confirm delivery plans improves operational efficiency