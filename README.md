# VaultedEscrow 
> Autonomous Milestone Infrastructure: We use multi-layered AI auditing and decentralized escrows to ensure payments only trigger when the work is proven.

## Table Of Contents 

1. [What is VaultedEscrow](#1-what-is-VaultedEscrow)
2. [The Core Problem](#2-the-core-problem)
3. [Platform Architecture](#3-platform-architecture)
4. [The Agent Pipeline](#4-the-agent-pipeline)
5. [Architecture](#5-Architecture)
5. [Scoring Formula by Ai](#6-Scoring-Formula)

## 1. What is VaultedEscrow

VaultedEscrow replaces interpersonal trust with algorithmic certainty. By combining secure escrow with AI-driven quality gates, we automate the entire freelance lifecycle—ensuring freelancers get paid instantly for good work and employers only pay for results that meet the mark.

---

## 2. The Core Problem

Freelance disputes originate from three structural failures:

| Failure | Traditional Platform | TrustVault |
|---|---|---|
| Vague acceptance criteria | Negotiated post-hoc | Resolved at contract creation by Planner Agent |
| Subjective quality judgment | Human arbitrator | AI evaluation over structured + visual evidence |
| Payment leverage imbalance | Manual escrow release | Automated release on verified, traced completion |

The Planner Agent eliminates ambiguity before work begins. The QA Agent eliminates subjectivity during evaluation. The Payment Agent eliminates leverage during settlement.

---
## 3. Platform Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                         TRUSTVAULT PLATFORM                          │
│                                                                      │
│  ┌───────────────┐   ┌─────────────────────┐   ┌─────────────────┐  │
│  │  PLANNER      │   │   QA AGENT          │   │  PAYMENT        │  │
│  │  AGENT        │──▶│   (Agent 2)         │──▶│  DECISION       │  │
│  │  (Agent 1)    │   │   Tiers 1 / 2 / 3   │   │  AGENT          │  │
│  └───────────────┘   └─────────────────────┘   └─────────────────┘  │
│         │                      │                        │            │
│         ▼                      ▼                        ▼            │
│  Milestone contract       QA Report JSON          Escrow action      │
│  (structured JSON)        (scored, traced)        (release / hold)   │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │               REPUTATION / FIDELITY AGENT                    │    │
│  │          Freelancer credibility scoring over time            │    │
│  └──────────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────────┘
```

All agents share a common Ollama-backed LLM layer and communicate exclusively via Pydantic-validated JSON. No agent passes raw files or unstructured prose between each other.

---
## 4. The Agent Pipeline

### Agent 1 — Planner Agent

Converts a vague project description into a structured, contract-ready milestone plan through a clarification dialogue. The agent gathers five required fields before generating any output.

**Required fields:**

| Field | Description |
|---|---|
| `project_scope` | What is being built, core features |
| `budget` | Total contract value or rough range |
| `timeline` | Total duration or target deadline |
| `tech_stack` | Languages, frameworks, platforms |
| `existing_assets` | Designs, APIs, codebases already in place |

**LangGraph workflow:**

```
[clarification_node]
        ↓
[completeness_check] ── incomplete ──▶ back to clarification
        ↓ complete
[planning_node]
        ↓
[validation_node] ── invalid ──▶ back to planning with error prompt
        ↓ valid
[END → milestone JSON]
```

**Output:**
```json
{
  "project_summary": "string",
  "milestones": [
    {
      "id": 1,
      "objective": "string",
      "description": "string",
      "deliverables": ["string"],
      "acceptance_criteria": ["string"],
      "estimated_days": 10,
      "amount_percentage": 25
    }
  ]
}
```

`amount_percentage` values must sum to exactly 100, enforced at schema level via Pydantic `model_validator`.

---
### Agent 3 — Payment Decision Agent

The role of this agent is simple: Verify and Release. It monitors the AI QA report for a "Passed" status and immediately triggers the smart contract to move funds from escrow to the developer's wallet.

| Score | Status | Action |
|---|---|---|
|Milestone Reached | `All criteria confirmed` | Release 100% of milestone payment |
| In Progress | `Criteria pending` | Funds Held in secure vault |
| Dispute Flag | `Manual intervention required` |Freeze Escrow for arbitration|


Thresholds are configurable per contract. A $500 logo and a $50,000 software system warrant different tolerance for partial completion.

---
### Architecture

```
Freelancer submission (local folder)
          ↓
    [Intake node]
          ↓
    [Routing node] ── MIME + magic byte detection
          ↓
          ↓ 
          ↓      
        Code
        agent
          ↓
          ↓ 
          ↓  
  [Aggregation node]
          ↓
  [Scoring node] ── DPS × CCS formula
          ↓
  confidence ≥ 0.70? 
          ↓ Yes
  [Report node] ── QAReport JSON
          ↓
  [Payment decision interface]
```
---
## 6 Scoring Formula

```
DPS = delivered_items / required_deliverables
CCS = weighted mean of met criteria (domain-relevant only)

final_score = DPS × CCS × 100
```
