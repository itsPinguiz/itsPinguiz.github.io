---
title: "EQE"
order: 3
category: "Explainable AI · Evaluation"
status: "Research"
summary: "An experimental framework for measuring whether local explanations remain faithful under a human-readable feature budget."
problem: "Standard XAI metrics can reward a complete explanation without testing whether its fidelity survives when users can inspect only a few features."
approach: "Introduced Complexity-Calibrated Local Concordance (CCC) and benchmarked SHAP, LIME and MAPLE over K = 5–9 features, two datasets, two models and multiple seeds."
contribution: "Implemented the benchmark orchestration, normalized additive contributions across explainers, developed the CCC metric and produced comparative visual analysis."
result: "SHAP delivered the strongest compact faithfulness; top-K features usually retained more signal than random-K controls."
resultLabel: "Main finding"
evidenceUrl: "https://github.com/itsPinguiz/EQE"
evidenceLabel: "Explore the repository"
technologies: ["XAI", "SHAP", "LIME", "MAPLE", "XGBoost"]
visual: "eqe"
featured: true
---

EQE connects explanation quality to a practical cognitive constraint: how much fidelity remains when only a small feature set can be inspected?
