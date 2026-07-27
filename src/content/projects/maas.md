---
title: "MAAS — Road Scenes"
shortTitle: "MAAS"
order: 1
category: "Computer Vision · Anomaly Segmentation"
status: "Research"
summary: "A reproducible evaluation and analysis workspace for semantic-segmentation anomaly detection in road scenes."
problem: "Autonomous systems need to identify unfamiliar road objects while preserving reliable in-distribution segmentation."
approach: "Compared ERFNet and EoMT across common OOD benchmarks, calibration sweeps, boundary errors, object scale, depth bands, semantic confusions, resolution trade-offs and attention."
contribution: "Built the config-driven evaluation pipeline, fine-grained analysis tooling and an EoMT fine-tuning workflow with COCO outlier cutout augmentation."
result: "A traceable benchmark with reusable evaluation wrappers, OOD metrics, calibration studies and generated analysis reports."
resultLabel: "Research output"
evidenceUrl: "https://github.com/itsPinguiz/MAAS-Road-Scenes"
evidenceLabel: "Explore the repository"
role: "Evaluation pipeline, diagnostic analysis and fine-tuning workflow"
team: "University research project"
period: "Dec 2025 — Present"
researchQuestion: "Where do pixel-based CNNs and mask-based Vision Transformers fail when unfamiliar objects appear in road scenes—and can those failures guide a targeted adaptation strategy?"
metrics:
  - value: "+4.05"
    label: "Mean AuPRC"
    note: "MaxLogit after fine-tuning"
  - value: "−11.08"
    label: "Mean FPR95"
    note: "MaxLogit after fine-tuning"
  - value: "5"
    label: "OOD benchmarks"
    note: "Evaluated with shared tooling"
links:
  - label: "Source code"
    url: "https://github.com/itsPinguiz/MAAS-Road-Scenes"
  - label: "Read the report"
    url: "https://github.com/itsPinguiz/MAAS-Road-Scenes/blob/main/doc/paper/main.pdf"
gallery:
  - src: "/projects/maas/depth-blindness.png"
    alt: "Heatmap of EoMT AuPRC across vertical depth bands on Road Anomaly 21"
    caption: "Depth-band analysis exposes vertical blindness: anomaly detection collapses for distant objects."
    width: 1329
    height: 726
  - src: "/projects/maas/scale-gap.png"
    alt: "Bar chart of EoMT anomaly detection performance grouped by object size"
    caption: "Scale analysis shows the EoMT gap on small objects, where patch tokenization can suppress fine detail."
    width: 1776
    height: 876
  - src: "/projects/maas/finetuning-tradeoff.png"
    alt: "Comparison of original and fine-tuned EoMT mean AuPRC and FPR95"
    caption: "Cut-and-paste outlier exposure improves MaxLogit and RbA aggregate performance, with a measurable in-distribution trade-off."
    width: 1957
    height: 736
technologies: ["Python", "PyTorch", "EoMT", "ERFNet", "Cityscapes"]
visual: "maas"
featured: true
---

## 01 — Research question

Autonomous-driving perception operates in an open world, while semantic-segmentation models are trained on a closed label set. MAAS asks a more actionable question than “which model has the best aggregate score?”: **where, at what scale and under which scene conditions does anomaly detection fail?**

The study contrasts ERFNet, a pixel-level CNN, with EoMT, a mask-based Vision Transformer using a DINOv2 backbone. Both are evaluated on road-scene anomalies without requiring a dedicated unknown class at initial training time.

## 02 — Experimental system

I helped build a config-driven evaluation workspace around five road-anomaly benchmarks: SMIYC Road Anomaly 21, SMIYC Road Obstacle 21, Fishyscapes Lost & Found, Fishyscapes Static and Road Anomaly. The same wrappers compute AuPRC, FPR95 and in-distribution mIoU for multiple post-hoc scores.

The evaluated scoring functions include Maximum Softmax Probability, MaxLogit, Maximum Entropy, Temperature Scaling and the mask-specific Rejected-by-All score. This common interface made the model comparison traceable instead of relying on disconnected notebooks.

## 03 — Diagnostic analysis

Global metrics hid three recurring failure modes:

- **Boundary uncertainty:** errors rise sharply near semantic contours and thin structures.
- **Vertical blindness:** both architectures become unreliable on anomalies in distant depth bands.
- **Taxonomic absorption:** unfamiliar pixels are assigned to familiar classes such as road, vegetation, car or train.

The architectures also fail differently by scale. ERFNet becomes overconfident on very large anomalies when local context disappears; EoMT misses small debris that is diluted by coarse patch tokenization. This distinction became the basis for the adaptation strategy.

## 04 — Targeted adaptation

The EoMT workflow pastes selected COCO object cutouts into Cityscapes images and treats the pasted pixels as outliers. A bimodal scale prior emphasizes small road obstacles, while perspective-aware resizing and road-biased placement make the synthetic samples more plausible.

During fine-tuning, the DINOv2 encoder stays frozen. The remaining segmentation components are optimized with ordinary semantic cross-entropy on valid Cityscapes pixels plus entropy and logit-norm regularization on pasted anomalies.

## 05 — Results and limitations

With MaxLogit, fine-tuning improved mean AuPRC from <span class="math">61.43</span> to <span class="math">65.48</span> and reduced mean FPR95 from <span class="math">21.38</span> to <span class="math">10.30</span>. The cost was a reduction in semantic-segmentation mIoU from <span class="math">60.27</span> to <span class="math">58.22</span>.

The gain was not uniform. Small-object detection improved strongly on RoadObstacle21 and boundary false positives decreased on Fishyscapes Static, while RoadAnomaly21 boundary behavior regressed. The result is therefore a diagnosed trade-off—not a claim that one augmentation solves open-world perception.

## 06 — Takeaway

MAAS demonstrates why benchmark averages are only the beginning of an evaluation. Breaking errors down by boundary, depth, scale, semantic confusion and attention produces evidence that can guide the next model intervention.
