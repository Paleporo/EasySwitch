# EasySwitch Prototype — Implementation Guide

## 🎯 Goal

Build a working prototype of EasySwitch, an AI-assisted API mapping tool.

The prototype must demonstrate this core capability:

> Given two different API schemas representing the same business concept (Event), automatically suggest a mapping, allow user review, and generate a transformed payload.

This is NOT a production system.  
This is a **focused, demo-ready vertical slice**.

---

## 🧠 Core Concept

EasySwitch is not just ETL.

It is a **Data Translation Layer**:
- Understand entities (Event)
- Map schemas semantically
- Transform payloads automatically
- Persist mapping for reuse

---

## ⚙️ Tech Stack

- Frontend: Angular
- Backend: Spring Boot
- Storage: simple (in-memory or lightweight DB)
- No authentication
- Local-first execution

---

## 📁 Repository Structure


/frontend
/backend
/docs
/samples
---

## 🧩 Functional Scope (STRICT)

We only support:

- ONE entity: `Event`
- TWO systems: source and destination
- STATIC schema files (no real APIs)

We DO NOT support:
- OAuth
- live API calls
- multi-tenant
- scheduling
- sync engines

---

## 🧱 Core Features

### 1. Schema Import

Input:
- simplified OpenAPI or JSON schema files

Output:
- normalized internal representation

---

### 2. Entity Detection

Detect:
- Event entity from both schemas

---

### 3. Field Mapping Suggestion

For each field:
- source field
- destination field
- confidence score
- rationale
- transformation needed (yes/no/unknown)

Use:
- name similarity
- type compatibility
- simple heuristics

NO external AI in first version

---

### 4. Mapping Review

User can:
- accept mapping
- change destination field
- mark as ignored

---

### 5. Transformation Engine

Support:

- date format conversion
- enum mapping
- field rename
- flatten / nesting

---

### 6. Preview Execution

Input:
- source payload

Output:
- transformed destination payload

---

### 7. Mapping Persistence

- save approved mapping as JSON
- reload mapping

---

## 📊 Sample Data Requirements

In `/samples`:

### Schemas
- source-event-api.json
- destination-event-api.json

### Payloads
- source-event-payloads.json
- destination-event-payloads.json

Constraints:
- different naming conventions
- different date formats
- at least one nested structure difference
- enum mismatch

---

## 🧠 Domain Model (Conceptual)

- ApiSchema
- EntityDefinition
- FieldDefinition
- MappingProject
- FieldMapping
- TransformationRule
- PreviewResult

Keep minimal but clean.

---

## 🔄 Backend Flow

1. Load schemas
2. Normalize structure
3. Detect Event entity
4. Generate mapping suggestions
5. Save mapping
6. Apply transformation
7. Return preview

---

## 🌐 API Design Principles

- REST simple and explicit
- No over-abstraction
- Use DTOs clearly
- Make endpoints demo-friendly

---

## 🖥️ Frontend UX (Wizard)

Steps:

1. Home
2. Load schemas
3. Show detected Event
4. Show suggested mappings
5. Edit/approve mappings
6. Preview result

---

## 🎨 UI Guidelines

- Clean, minimal
- Table-based mapping UI
- Confidence indicators
- Inline edit
- No heavy design systems

---

## 🧪 Testing

Backend:
- unit tests for parsing
- unit tests for matching
- unit tests for transformations

Frontend:
- minimal critical tests

---

## 📚 Documentation

Must maintain:

- docs/architecture.md
- docs/domain-model.md
- docs/api-flow.md
- docs/sample-scenarios.md
- docs/known-limitations.md

---

## ⚠️ Constraints

- DO NOT overengineer
- DO NOT introduce microservices
- DO NOT add unnecessary abstractions
- KEEP code readable
- OPTIMIZE for demo clarity, not completeness

---

## ✅ Acceptance Criteria (FINAL)

The prototype is successful if:

- I can load two schema files
- The system detects the Event entity
- The system suggests field mappings
- I can edit and approve mappings
- I can preview a transformed payload
- The result is coherent and explainable

---

## 🚀 Implementation Strategy

Work in vertical slices:

1. Project bootstrap
2. Sample data
3. Schema import
4. Matching engine
5. Transformation engine
6. Backend flow
7. Frontend wizard
8. Integration
9. Demo polish

---

## 🧠 Engineering Rules

- prefer simple solutions
- explicit naming > clever abstractions
- code must be understandable by a human reviewer
- avoid premature generalization
- always update docs when behavior changes

---

## 🔍 Before Each Change

- inspect current codebase
- understand existing structure
- avoid breaking existing features

---

## 🧾 After Each Change

- summarize changes
- list modified files
- explain tradeoffs
- ensure project still runs

---

## 🧨 Known Non-Goals

This prototype does NOT:

- solve full data migration
- integrate real SaaS APIs
- guarantee perfect mapping
- include AI-based semantic reasoning (yet)

---

## 🔮 Future Extensions (DO NOT IMPLEMENT NOW)

- AI-based mapping (LLM)
- multi-entity support
- real API connectors
- scheduling & sync
- MCP-based orchestration

---

## 🧪 Demo Scenario

The demo must show:

1. Two different Event APIs
2. Automatic mapping suggestion
3. Manual correction
4. Transformation preview
5. Clear value: reduced effort vs manual mapping

---

## 🧠 Mental Model

Think of EasySwitch as:

> "Google Translate for APIs"

But:
- entity-aware
- structured
- explainable

---

## 🧩 Final Note

This prototype must be:
- small
- clear
- credible

NOT:
- complex
- generic
- overbuilt
