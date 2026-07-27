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
technologies: ["Transformers", "LLMs", "QLoRA", "NLP", "Docker"]
visual: "clarity"
featured: true
---

CLARITY studies whether an answer is direct, ambiguous or evasive—not merely whether it is linguistically well formed.
