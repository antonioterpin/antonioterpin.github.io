export type Theme = "active-fluid-control" | "ai-for-science" | "optimization-control";

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  honors?: string[];
  status?: "preprint" | "conference" | "journal";
  theme: Theme;
  arxiv?: string;
  pdf?: string;
  website?: string;
  websiteLabel?: string;
  code?: string[];
  video?: string;
  cover?: string;
  featured?: boolean;
  teaser?: string;
}

export const publications: Publication[] = [
  {
    id: "skill-acquisition",
    title:
      "Sparks of human-like skills acquisition in modern artificial intelligence",
    authors: ["<b>A. Terpin</b>", "R. D'Andrea"],
    year: 2025,
    venue: "Preprint",
    status: "preprint",
    theme: "active-fluid-control",
    arxiv: "https://arxiv.org/abs/2512.08463",
    pdf: "https://arxiv.org/pdf/2512.08463",
    website: "https://activefluidcontrol.com/research#skill-acquisition",
    featured: true,
    teaser:
      "Many high-performance human activities are executed with little or no external feedback: think of a figure skater landing a triple jump, a pitcher throwing a curveball for a strike, or a barista pouring latte art. To study the process of skill acquisition under fully controlled conditions, we bypass human subjects. Instead, we directly interface a generalist reinforcement learning agent with a spinning cylinder in a tabletop circulating water channel to maximize or minimize drag. This setup has several desirable properties. First, it is a physical system, with the rich interactions and complex dynamics that only the physical world has: the flow is highly chaotic and extremely difficult, if not impossible, to model or simulate accurately. Second, the objective — drag minimization or maximization — is easy to state and can be captured directly in the reward, yet good strategies are not obvious beforehand. Third, decades-old experimental studies provide recipes for simple, high-performance open-loop policies. Finally, the setup is inexpensive and far easier to reproduce than human studies. In our experiments we find that high-dimensional flow feedback lets the agent discover high-performance drag-control strategies with only minutes of real-world interaction. When we later replay the same action sequences without any feedback, we obtain almost identical performance. This shows that feedback, and in particular flow feedback, is not needed to execute the learned policy. Surprisingly, without flow feedback during training the agent fails to discover any well-performing policy in drag maximization, but still succeeds in drag minimization, albeit more slowly and less reliably. Our studies show that learning a high-performance skill can require richer information than executing it, and learning conditions can be kind or wicked depending solely on the goal, not on dynamics or policy complexity.",
  },
  {
    id: "piv-admm",
    title: "Particle Image Velocimetry refinement via consensus ADMM",
    authors: ["A. Bonomi", "F. Banelli", "<b>A. Terpin</b>"],
    year: 2025,
    venue: "Preprint",
    status: "preprint",
    theme: "active-fluid-control",
    arxiv: "https://arxiv.org/abs/2512.11695",
    pdf: "https://arxiv.org/pdf/2512.11695",
    website: "https://activefluidcontrol.com/research#piv-admm",
    code: ["https://github.com/antonioterpin/flowgym"],
    teaser:
      "Particle Image Velocimetry (PIV) is an imaging technique in experimental fluid dynamics that quantifies flow fields around bluff bodies by analyzing the displacement of neutrally buoyant tracer particles immersed in the fluid. Traditional PIV approaches typically depend on tuning parameters specific to the imaging setup, making the performance sensitive to variations in illumination, flow conditions, and seeding density. On the other hand, even state-of-the-art machine learning methods for flow quantification are fragile outside their training set. In our experiments, we observed that flow quantification would improve if different tunings (or algorithms) were applied to different regions of the same image pair. In this work, we parallelize the instantaneous flow quantification with multiple algorithms and adopt a consensus framework based on the alternating direction method of multipliers, seamlessly incorporating priors such as smoothness and incompressibility. We perform several numerical experiments to demonstrate the benefits of this approach. For instance, we achieve a decrease in end-point-error of up to 20% of a dense-inverse-search estimator at an inference rate of 60 Hz, and we show how this performance boost can be increased further with outlier rejection. Our method is implemented in JAX, effectively exploiting hardware acceleration, and integrated in Flow Gym, enabling (i) reproducible comparisons with the state-of-the-art, (ii) testing different base algorithms, (iii) straightforward deployment for active fluid control applications.",
  },
  {
    id: "flow-gym",
    title:
      "Flow Gym: a framework for the development, benchmarking, training, and deployment of flow-field quantification methods",
    authors: [
      "F. Banelli",
      "<b>A. Terpin</b>",
      "A. Bonomi",
      "R. D'Andrea",
    ],
    year: 2026,
    venue: "SoftwareX 2026",
    status: "journal",
    theme: "active-fluid-control",
    doi: "https://doi.org/10.1016/j.softx.2026.102641",
    arxiv: "https://arxiv.org/abs/2512.20642",
    website: "https://activefluidcontrol.com/research#flow-gym",
    code: ["https://github.com/antonioterpin/flowgym"],
    teaser:
      "Particle image velocimetry (PIV) and related optical-flow methods are widely used to quantify fluid motion, but their development and evaluation are often hindered by fragmented software, inconsistent interfaces, and limited reproducibility. To address these challenges, we present Flow Gym, a framework for developing, benchmarking, training, and deploying flow-field quantification methods, with a primary focus on PIV. Its core contribution is a standardized interface that allows classical and learning-based algorithms to be integrated, compared, and deployed within a common pipeline. The framework includes JAX implementations and wrappers for existing methods, modular pre-processing and post-processing components, and utilities for training and benchmarking. By leveraging JAX, Flow Gym supports hardware-accelerated execution while remaining interoperable with external implementations from libraries such as OpenCV and PyTorch. It can operate on both synthetic and experimental data and supports the same workflow for offline benchmarking and real-time deployment. Flow Gym is designed to improve reproducibility, reduce barriers to method development, and facilitate the translation of flow-field quantification algorithms from research to experimental settings.",
  },
  {
    id: "synthpix",
    title: "SynthPix: a lightspeed PIV image generator",
    authors: [
      "<b>A. Terpin</b>",
      "A. Bonomi",
      "F. Banelli",
      "R. D'Andrea",
    ],
    year: 2026,
    venue: "SoftwareX 2026",
    status: "journal",
    theme: "active-fluid-control",
    doi: "https://doi.org/10.1016/j.softx.2026.102642",
    arxiv: "https://arxiv.org/abs/2512.09664",
    website: "https://activefluidcontrol.com/research#synthpix",
    code: ["https://github.com/antonioterpin/synthpix"],
    teaser:
      "We describe SynthPix, a synthetic image generator for Particle Image Velocimetry (PIV) with a focus on performance and parallelism on accelerators, implemented in JAX. SynthPix produces PIV image pairs from prescribed flow fields while exposing a configuration interface aligned with common PIV imaging and acquisition parameters (e.g., seeding density, particle image size, illumination nonuniformity, noise, blur, and timing). In contrast to offline dataset generation workflows, SynthPix is built to stream images on-the-fly directly into learning and benchmarking pipelines, enabling data-hungry methods and closed-loop procedures — such as adaptive sampling and acquisition/parameter co-design — without prohibitive storage and input–output costs. We demonstrate that SynthPix is compatible with a broad range of application scenarios, including controlled laboratory experiments and riverine image velocimetry, and supports rapid sweeps over nuisance factors for systematic robustness evaluation. SynthPix is a tool that supports the flow quantification community and in this paper we describe the main ideas behind the software package.",
  },
  {
    id: "energy-matching",
    title:
      "Energy Matching: Unifying Flow Matching and Energy-Based Models for Generative Modeling",
    authors: [
      "M. Balcerak",
      "T. Amiranashvili",
      "<b>A. Terpin</b>",
      "S. Shit",
      "S. Kaltenbach",
      "P. Koumoutsakos",
      "B. Menze",
    ],
    year: 2025,
    venue: "NeurIPS 2025",
    status: "conference",
    theme: "ai-for-science",
    arxiv: "https://arxiv.org/abs/2504.10612",
    code: ["https://github.com/m1balcerak/EnergyMatching"],
    teaser:
      "Current state-of-the-art generative models map noise to data distributions by matching flows or scores. A key limitation of these models is their inability to readily integrate available partial observations and additional priors. In contrast, energy-based models (EBMs) address this by incorporating corresponding scalar energy terms. Here, we propose Energy Matching, a framework that endows flow-based approaches with the flexibility of EBMs. Far from the data manifold, samples move from noise to data along irrotational, optimal transport paths. As they approach the data manifold, an entropic energy term guides the system into a Boltzmann equilibrium distribution, explicitly capturing the underlying likelihood structure of the data. We parameterize these dynamics with a single time-independent scalar field, which serves as both a powerful generator and a flexible prior for effective regularization of inverse problems. The present method substantially outperforms existing EBMs on CIFAR-10 and ImageNet generation in terms of fidelity, while retaining simulation-free training of transport-based approaches away from the data manifold. Furthermore, we leverage the flexibility of the method to introduce an interaction energy that supports the exploration of diverse modes, which we demonstrate in a controlled protein generation setting. This approach learns a scalar potential energy, without time conditioning, auxiliary generators, or additional networks, marking a significant departure from recent EBM methods. We believe this simplified yet rigorous formulation significantly advances EBMs capabilities and paves the way for their wider adoption in generative modeling in diverse domains.",
  },
  {
    id: "gradient-flow-sdes",
    title: "Gradient-flow SDEs have unique transient population dynamics",
    authors: [
      "V. Guan",
      "J. Janssen",
      "N. Lanzetti",
      "<b>A. Terpin</b>",
      "G. Schiebinger",
      "E. Robeva",
    ],
    year: 2026,
    venue: "AISTATS 2026",
    status: "conference",
    theme: "ai-for-science",
    arxiv: "https://arxiv.org/abs/2505.21770",
    teaser:
      "Identifying the drift and diffusion of an SDE from its population dynamics is a notoriously challenging task. Researchers in machine learning and single-cell biology have only been able to prove a partial identifiability result: for potential-driven SDEs, the gradient-flow drift can be identified from temporal marginals if the Brownian diffusivity is already known. Existing methods therefore assume that the diffusivity is known a priori, despite it being unknown in practice. We dispel the need for this assumption by providing a complete characterization of identifiability: the gradient-flow drift and Brownian diffusivity are jointly identifiable from temporal marginals if and only if the process is observed outside of equilibrium. Given this fundamental result, we propose nn-APPEX, the first Schrödinger Bridge-based inference method that can simultaneously learn the drift and diffusion of a gradient-flow SDE solely from observed marginals. Extensive experiments show that nn-APPEX's ability to adjust its diffusion estimate enables accurate inference, while previous Schrödinger Bridge methods obtain biased drift estimates due to their assumed, and likely incorrect, diffusion.",
  },
  {
    id: "jkonet-star",
    title: "Learning diffusion at lightspeed",
    authors: [
      "<b>A. Terpin</b>",
      "N. Lanzetti",
      "M. Gadea",
      "F. Dörfler",
    ],
    year: 2024,
    venue: "NeurIPS 2024",
    honors: ["Oral", "Top 0.39%"],
    status: "conference",
    theme: "ai-for-science",
    arxiv: "https://arxiv.org/abs/2406.12616",
    website: "https://jkonet-star.readthedocs.io/en/latest/",
    websiteLabel: "Docs",
    code: ["https://github.com/antonioterpin/jkonet-star"],
    featured: true,
    teaser:
      "Diffusion regulates numerous natural processes and the dynamics of many successful generative models. Existing models to learn the diffusion terms from observational data rely on complex bilevel optimization problems and model only the drift of the system. We propose a new simple model, JKOnet*, which bypasses the complexity of existing architectures while presenting significantly enhanced representational capabilities: JKOnet* recovers the potential, interaction, and internal energy components of the underlying diffusion process. JKOnet* minimizes a simple quadratic loss and outperforms other baselines in terms of sample efficiency, computational complexity, and accuracy. Additionally, JKOnet* provides a closed-form optimal solution for linearly parametrized functionals, and, when applied to predict the evolution of cellular processes from real-world data, it achieves state-of-the-art accuracy at a fraction of the computational cost of all existing methods. Our methodology is based on the interpretation of diffusion processes as energy-minimizing trajectories in the probability space via the so-called JKO scheme, which we study via its first-order optimality conditions.",
  },
  {
    id: "pinet",
    title:
      "Pinet: Optimizing hard-constrained neural networks with orthogonal projection layers",
    authors: [
      "P. Grontas*",
      "<b>A. Terpin</b>*",
      "E.C. Balta",
      "R. D'Andrea",
      "J. Lygeros",
    ],
    year: 2026,
    venue: "ICLR 2026",
    status: "conference",
    theme: "optimization-control",
    arxiv: "https://arxiv.org/abs/2508.10480",
    code: ["https://github.com/antonioterpin/pinet"],
    featured: true,
    teaser:
      "We introduce an output layer for neural networks that ensures satisfaction of convex constraints. Our approach, Πnet, leverages operator splitting for rapid and reliable projections in the forward pass, and the implicit function theorem for backpropagation. We deploy Πnet as a feasible-by-design optimization proxy for parametric constrained optimization problems and obtain modest-accuracy solutions faster than traditional solvers when solving a single problem, and significantly faster for a batch of problems. We surpass state-of-the-art learning approaches by orders of magnitude in terms of training time, solution quality, and robustness to hyperparameter tuning, while maintaining similar inference times. Finally, we tackle multi-vehicle motion planning with non-convex trajectory preferences and provide Πnet as a GPU-ready package implemented in JAX.",
    honors: ["Oral", "Top 1%"],
  },
  {
    id: "dr-lqg",
    title: "Optimality of Linear Policies for DR-LQG",
    authors: ["N. Lanzetti*", "<b>A. Terpin</b>*", "F. Dörfler"],
    year: 2024,
    venue: "Preprint",
    status: "preprint",
    theme: "optimization-control",
    arxiv: "https://arxiv.org/abs/2410.22826",
    teaser:
      "We prove that output-feedback linear policies remain optimal for solving the Linear Quadratic Gaussian regulation problem in the face of worst-case process and measurement noise distributions when these are independent, stationary, and known to be within a radius (in the Wasserstein sense) to some reference zero-mean Gaussian noise distributions. Additionally, we establish the existence of a Nash equilibrium of the zero-sum game between a control engineer, who minimizes control cost, and a fictitious adversary, who chooses the noise distributions that maximize this cost. For general (possibly non-Gaussian) reference noise distributions, we establish a quasi closed-form solution for the worst-case distributions against linear policies. Our work provides a less conservative alternative compared to recent work in distributionally robust control.",
  },
  {
    id: "variational-analysis-wasserstein",
    title: "Variational Analysis in the Wasserstein Space",
    authors: ["L. Nicolas*", "<b>A. Terpin</b>*", "F. Dörfler"],
    year: 2024,
    venue: "Preprint",
    status: "preprint",
    theme: "optimization-control",
    arxiv: "https://arxiv.org/abs/2406.10676",
    website: "/projects/variational-analysis-wasserstein/",
    featured: true,
    teaser:
      "We study optimization problems whereby the optimization variable is a probability measure. Since the probability space is not a vector space, many classical and powerful methods for optimization (e.g., gradients) are of little help. Thus, one typically resorts to the abstract machinery of infinite-dimensional analysis or other ad-hoc methodologies, not tailored to the probability space, which however involve projections or rely on convexity-type assumptions. We believe instead that these problems call for a comprehensive methodological framework for calculus in probability spaces. In this work, we combine ideas from optimal transport, variational analysis, and Wasserstein gradient flows to equip the Wasserstein space (i.e., the space of probability measures endowed with the Wasserstein distance) with a variational structure, both by combining and extending existing results and introducing novel tools. Our theoretical analysis culminates in very general necessary optimality conditions for optimality. Notably, our conditions (i) resemble the rationales of Euclidean spaces, such as the Karush–Kuhn–Tucker and Lagrange conditions, (ii) are intuitive, informative, and easy to study, and (iii) yield closed-form solutions or can be used to design computationally attractive algorithms. We believe this framework lays the foundation for new algorithmic and theoretical advancements in the study of optimization problems in probability spaces, which we exemplify with numerous case studies and applications to machine learning, drug discovery, and distributionally robust optimization.",
  },
  {
    id: "dp-probability-spaces",
    title: "Dynamic Programming in Probability Spaces via Optimal Transport",
    authors: ["<b>A. Terpin</b>*", "N. Lanzetti*", "F. Dörfler"],
    year: 2023,
    venue: "SIAM SICON 2023",
    honors: ["Most read"],
    status: "journal",
    theme: "optimization-control",
    pdf: "https://arxiv.org/pdf/2302.13550.pdf",
    arxiv: "https://arxiv.org/abs/2302.13550",
    video: "https://youtu.be/FXvsDCt4pjQ",
    featured: true,
    teaser:
      "We study discrete-time finite-horizon optimal control problems in probability spaces, whereby the state of the system is a probability measure. We show that, in many instances, the solution of dynamic programming in probability spaces results from two ingredients: (i) the solution of dynamic programming in the \"ground space\" (i.e., the space on which the probability measures live) and (ii) the solution of an optimal transport problem. From a multi-agent control perspective, a separation principle holds: the \"low-level control of the agents of the fleet\" (how does one reach the destination?) and \"fleet-level control\" (who goes where?) are decoupled.",
  },
  {
    id: "ot-trpo",
    title: "Trust Region Policy Optimization with Optimal Transport",
    authors: [
      "<b>A. Terpin</b>*",
      "N. Lanzetti*",
      "B. Yardim",
      "F. Dörfler",
      "G. Ramponi",
    ],
    year: 2022,
    venue: "NeurIPS 2022",
    status: "conference",
    theme: "optimization-control",
    arxiv: "https://arxiv.org/abs/2210.11137",
    code: ["https://gitlab.ethz.ch/lnicolas/ot-trpo"],
    video:
      "http://people.ee.ethz.ch/~lnicolas/files/conferences/NeurIPS2022/lightboard.mp4",
    teaser:
      "Policy Optimization (PO) algorithms have been proven particularly suited to handle the high-dimensionality of real-world continuous control tasks. In this context, Trust Region Policy Optimization methods represent a popular approach to stabilize the policy updates. These usually rely on the Kullback–Leibler (KL) divergence to limit the change in the policy. The Wasserstein distance represents a natural alternative, in place of the KL divergence, to define trust regions or to regularize the objective function. However, state-of-the-art works either resort to its approximations or do not provide an algorithm for continuous state-action spaces, reducing the applicability of the method. In this paper, we explore optimal transport discrepancies (which include the Wasserstein distance) to define trust regions, and we propose a novel algorithm — Optimal Transport Trust Region Policy Optimization (OT-TRPO) — for continuous state-action spaces. We circumvent the infinite-dimensional optimization problem for PO by providing a one-dimensional dual reformulation for which strong duality holds. We then analytically derive the optimal policy update given the solution of the dual problem. This way, we bypass the computation of optimal transport costs and of optimal transport maps, which we implicitly characterize by solving the dual formulation. Finally, we provide an experimental evaluation of our approach across various control tasks. Our results show that optimal transport discrepancies can offer an advantage over state-of-the-art approaches.",
  },
  {
    id: "feedback-optimization-swarm",
    title: "Distributed Feedback Optimisation for Robotic Coordination",
    authors: [
      "<b>A. Terpin</b>",
      "S. Fricker",
      "M. Perez",
      "M. Hudoba de Badyn",
      "F. Dörfler",
    ],
    year: 2022,
    venue: "ACC 2022",
    status: "conference",
    theme: "optimization-control",
    pdf: "https://arxiv.org/pdf/2109.14486",
    arxiv: "https://arxiv.org/abs/2109.14486",
    code: ["https://github.com/antonioterpin/feedback-optimization-swarm-robotics"],
    teaser:
      "Feedback optimisation is an emerging technique aiming at steering a system to an optimal steady state for a given objective function. We show that it is possible to employ this control strategy in a distributed manner. Moreover, we prove asymptotic convergence to the set of optimal configurations. To this scope, we show that exponential stability is needed only for the portion of the state that affects the objective function. This is showcased by driving a swarm of agents towards a target location while maintaining a target formation. Finally, we provide a sufficient condition on the topological structure of the specified formation to guarantee convergence of the swarm in formation around the target location.",
  },
];

export const themes: Record<Theme, { label: string; blurb: string }> = {
  "active-fluid-control": {
    label: "Active fluid control",
    blurb:
      "Learning to control real fluid flows from physical experiments. The Active Fluid Control project at ETH Zürich — hardware, software, and methods on activefluidcontrol.com.",
  },
  "ai-for-science": {
    label: "AI for science",
    blurb:
      "Learning population dynamics, generative models grounded in physics, and using ML to probe scientific questions.",
  },
  "optimization-control": {
    label: "Optimization, learning, and control",
    blurb:
      "Optimization in probability spaces, optimal transport, distributionally robust control, hard-constrained learning.",
  },
};
