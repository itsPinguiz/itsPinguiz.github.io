---
title: "CLARITY"
order: 2
category: "NLP · Political Discourse"
status: "Complete"
summary: "Detection and classification of evasive political answers across transformer encoders, prompted LLMs and QLoRA fine-tuning."
problem: "Political answers can appear relevant while avoiding the question; the goal was to classify clarity beyond surface-level fluency."
approach: "Evaluated transformer encoders, prompted large language models and parameter-efficient QLoRA fine-tuning on the QEvasion task."
contribution: "Co-developed the experimental pipeline, model comparisons and reproducible project environment for the SemEval-style challenge."
result: "0.608 Macro-F1 on the best mapped-clarity configuration."
resultLabel: "Best mapped clarity"
evidenceUrl: "https://github.com/itsPinguiz/CLARITY"
evidenceLabel: "Explore the repository"
role: "Experimental pipeline, model comparison and reproducibility"
team: "Five-person NLP research team"
period: "Dec 2025 — Present"
researchQuestion: "Does fine-grained supervision about how a political answer is evasive improve the coarser prediction of whether the answer is clear?"
metrics:
  - value: "0.608"
    label: "Macro-F1"
    note: "Best mapped clarity"
  - value: "0.721"
    label: "Accuracy"
    note: "Fine-tuned mapped clarity"
  - value: "308"
    label: "Test pairs"
    note: "Shared held-out evaluation"
links:
  - label: "Source code"
    url: "https://github.com/itsPinguiz/CLARITY"
  - label: "Read the report"
    url: "https://github.com/itsPinguiz/CLARITY/blob/main/report/paper__LLM_project_2026__CLARITY.pdf"
  - label: "SemEval task"
    url: "https://konstantinosftw.github.io/CLARITY-SemEval-2026/"
gallery:
  - src: "/projects/clarity/prompt-progression.png"
    alt: "Comparison of zero-shot and chain-of-thought prompting strategies across clarity, evasion and mapped clarity tasks"
    caption: "Prompt ablation across direct clarity, nine-class evasion and deterministic evasion-to-clarity mapping."
    width: 2985
    height: 740
  - src: "/projects/clarity/few-shot-progression.png"
    alt: "Macro-F1 comparison across one-shot, three-shot, nine-shot, dynamic and tone-aware prompting"
    caption: "Static Nine-Shot prompting produced the strongest mapped-clarity Macro-F1; retrieval by topic did not reliably retrieve matching rhetorical strategies."
    width: 984
    height: 490
  - src: "/projects/clarity/qlora-confusion-matrix.png"
    alt: "Confusion matrix for the fine-tuned direct clarity classifier"
    caption: "The direct-clarity confusion matrix makes the remaining class imbalance and error structure visible."
    width: 1980
    height: 1499
technologies: ["Transformers", "LLMs", "QLoRA", "NLP", "Docker"]
visual: "clarity"
featured: true
---

## 01 — Research question

Political answers can sound fluent and relevant while still avoiding the question. CLARITY studies whether an answer is a clear reply, an ambivalent reply or a clear non-reply—and whether first identifying the underlying evasion strategy improves that prediction.

The project uses question-answer pairs from QEvasion and evaluates every model family on the same held-out test set with Macro-F1 as the primary metric.

## 02 — Three connected tasks

The experiment separates the problem into three settings:

- **Direct clarity:** classify the answer into three clarity classes.
- **Direct evasion:** identify one of nine fine-grained rhetorical strategies.
- **Mapped clarity:** predict the evasion strategy first, then deterministically map it to a clarity class.

This design tests whether a finer intermediate representation helps or simply introduces another place for errors to propagate.

## 03 — Model tracks

The encoder track compares BERT-family models, with recorded report comparisons centered on DistilBERT and RoBERTa. It also evaluates imbalance-aware resampling, tone features and several loss functions.

The prompted track uses Llama 3.1 8B Instruct with Zero-Shot, Chain-of-Thought, taxonomy tables, RAG, rhetorical tone and Few-Shot variants. Dynamic example retrieval uses sentence embeddings and FAISS.

The fine-tuning track adapts Llama 3.2 3B Instruct with 4-bit QLoRA and DoRA. Separate adapters address direct clarity and fine-grained evasion, followed by the same deterministic mapping.

## 04 — My contribution

I co-developed the experimental pipeline and model comparisons, helped analyze the QEvasion task, and contributed to the reproducible environment used to run and record the experiments. Outputs are committed as machine-readable metrics, predictions and confusion matrices rather than only summarized in the paper.

## 05 — Results

The strongest prompted configuration was static Nine-Shot evasion classification followed by clarity mapping, reaching <span class="math">0.608</span> Macro-F1. The fine-tuned mapped model reached the highest accuracy at <span class="math">0.721</span>, while the RoBERTa baseline remained the strongest direct-clarity system by Macro-F1 at <span class="math">0.558</span>.

Fine-grained supervision was therefore useful, but not universally so. Encoder errors in the nine-class task could propagate through the mapping, and semantically similar retrieved examples did not necessarily share the same rhetorical strategy.

## 06 — Takeaway

CLARITY’s main lesson is methodological: task decomposition can expose useful structure, but intermediate labels must earn their complexity through evaluation. The best result came from reasoning over the evasion taxonomy, while the error analysis shows exactly where that benefit stops.
