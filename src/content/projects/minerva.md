---
title: "Minerva"
order: 4
category: "Computer Vision · Multi-task Learning"
status: "In Development"
summary: "A modular Computer Vision backend for multi-attribute clothing classification."
problem: "Clothing understanding requires several related attributes to be predicted consistently from the same visual representation."
approach: "A shared ResNet-50 backbone feeds multiple task-specific prediction heads through a modular backend architecture."
contribution: "Designing the backend boundaries, shared feature extractor and extensible multi-head inference structure."
evidenceUrl: "https://github.com/itsPinguiz/Minerva"
evidenceLabel: "Follow development"
role: "Backend architecture and multi-head model design"
team: "Independent engineering project"
period: "Jan 2026 — Present"
researchQuestion: "How can one shared visual representation support several clothing attributes while keeping training and inference components modular?"
metrics:
  - value: "1"
    label: "Shared backbone"
    note: "Pretrained ResNet-50"
  - value: "3"
    label: "Current heads"
    note: "Category, color and season"
  - value: "0"
    label: "Published results"
    note: "Withheld until stable"
links:
  - label: "Follow development"
    url: "https://github.com/itsPinguiz/Minerva"
technologies: ["Python", "PyTorch", "ResNet-50", "Computer Vision"]
visual: "minerva"
featured: false
---

## 01 — Engineering objective

Clothing understanding requires several related predictions from the same image. Minerva is a modular backend for learning those attributes from one shared representation instead of maintaining a separate vision model for every task.

The current model predicts category, color and season. The boundaries are designed so additional heads can be introduced without rewriting the feature extractor or inference contract.

## 02 — Current architecture

An ImageNet-pretrained ResNet-50 processes a <span class="math">224 × 224</span> image and returns a shared feature vector. Three independent linear heads currently map that representation to <span class="math">15</span> category classes, <span class="math">10</span> color classes and <span class="math">4</span> season classes.

The forward pass returns a named dictionary of logits. This keeps downstream consumers independent of head order and makes the interface easier to extend.

## 03 — My contribution

I designed the backend boundaries, implemented the shared PyTorch backbone and multi-head classifier, and centralized data, model and training parameters in configuration. The project environment is structured for reproducible training and inference rather than notebook-only experimentation.

## 04 — Development status

The architecture is implemented, but the dataset, evaluation protocol and stable checkpoints are still being developed. For that reason, Minerva does not publish accuracy figures or claim model quality yet.

The next credible milestone is an evaluation that reports per-head metrics, class imbalance behavior and failure cases on a frozen test split.

## 05 — Takeaway

Minerva is presented as engineering in progress. The case study documents what exists today, the decisions behind it and the evidence required before results are promoted.
