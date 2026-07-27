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
role: "Metric design, benchmark orchestration and comparative analysis"
team: "Three-person XAI research team"
period: "2026"
researchQuestion: "How much fidelity does a local explanation retain when a person can inspect only a small number of its most important features?"
metrics:
  - value: "K = 5–9"
    label: "Feature budget"
    note: "Compact explanations"
  - value: "2 × 2 × 3"
    label: "Study design"
    note: "Datasets × models × explainers"
  - value: "3"
    label: "Random seeds"
    note: "42, 123 and 2026"
links:
  - label: "Source code"
    url: "https://github.com/itsPinguiz/EQE"
  - label: "Read the report"
    url: "https://github.com/itsPinguiz/EQE/blob/main/docs/report.pdf"
  - label: "View the presentation"
    url: "https://github.com/itsPinguiz/EQE/blob/main/docs/presentation.pdf"
gallery:
  - src: "/projects/eqe/ccc-by-k.png"
    alt: "Line chart comparing CCC mean squared error by feature budget across explainers, models and datasets"
    caption: "CCC traces how faithfully each explainer reconstructs the model as the human-readable feature budget increases."
    width: 2451
    height: 1510
  - src: "/projects/eqe/top-k-vs-random.png"
    alt: "Bar chart comparing top-ranked features with random feature selection at K equals 9"
    caption: "Top-ranked features reduce reconstruction error relative to random controls, confirming that the ranking contains useful signal."
    width: 2180
    height: 884
  - src: "/projects/eqe/explainer-ranking.png"
    alt: "Ranking of SHAP, MAPLE and LIME by mean CCC error"
    caption: "SHAP provides the strongest compact faithfulness across the evaluated settings, followed by MAPLE and LIME."
    width: 2180
    height: 884
technologies: ["XAI", "SHAP", "LIME", "MAPLE", "XGBoost"]
visual: "eqe"
featured: true
---

## 01 — Research question

Local explainers can produce a complete list of feature contributions, but people rarely inspect every feature. EQE asks whether an explanation still reconstructs the black-box prediction when only its top <span class="math">K</span> contributions remain.

The project turns a cognitive constraint into an evaluation protocol: compact explanations should preserve model behavior better than arbitrary feature subsets.

## 02 — CCC metric

Complexity-Calibrated Local Concordance measures the mean squared error between the black-box probability <span class="math">f(x)</span> and an additive reconstruction <span class="math">g<sub>K</sub>(x)</span> built from only the top <span class="math">K</span> explanation contributions:

<div class="math-display">CCC<sub>K</sub> = E[(f(x) − g<sub>K</sub>(x))²]</div>

Lower values indicate that the compact explanation remains faithful. Evaluating a range from <span class="math">K = 5</span> to <span class="math">K = 9</span> makes the fidelity-versus-complexity trade-off explicit instead of hiding it inside a full explanation.

## 03 — Benchmark design

The benchmark evaluates LIME, SHAP and MAPLE on the Adult and Breast Cancer datasets. Each explainer is paired with XGBoost and a neural network, then repeated across seeds <span class="math">42</span>, <span class="math">123</span> and <span class="math">2026</span>.

Alongside CCC, the pipeline records full-reconstruction error, sufficiency, comprehensiveness, normalized CCC and a random-<span class="math">K</span> control. The control is essential: it tests whether an explainer’s feature ranking adds value beyond selecting the same number of arbitrary features.

## 04 — My contribution

I implemented benchmark orchestration, normalized the different additive-contribution formats, developed the CCC evaluation path and produced the comparative visual analysis. The pipeline writes both machine-readable results and publication-ready figures for each run.

## 05 — Results

SHAP produced the strongest compact faithfulness across the evaluated settings. MAPLE was generally intermediate, while LIME was the least reliable—especially for the neural-network experiments.

At <span class="math">K = 9</span>, top-ranked SHAP features reduced reconstruction error relative to random selection by <span class="math">99.9%</span> on Adult and <span class="math">99.5%</span> on Breast Cancer in the aggregate comparison. The result validates the central premise: explanation ranking quality matters under a fixed attention budget.

## 06 — Limitations and takeaway

CCC evaluates local additive reconstruction, not every desirable property of an explanation. A low error does not by itself guarantee causal validity, stability or usefulness to a particular person.

Its value is narrower and practical: it makes compact faithfulness measurable, comparable and reproducible. EQE complements broader XAI metrics with the question users actually face—what survives when they can inspect only a few features?
