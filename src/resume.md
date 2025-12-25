---
home: true
heroText: Haoyu Jia
tagline: <i>'The New World Opens Only to Fast Learners.'</i>
icon: fa-solid:user-tie
article: false
toc: true
---

# Resume

![Being with one of the robots for *RoboMaster Competition*, 2023 =227x238](/assets/images/resume/机器人合影.jpg)

## Research Topics

**LLM-driven Agentic Systems for Robots**

- Improving the task-solving capabilities of LLM-powered agents for robotic systems, with a focus on systematic methods
  for enhancing reasoning reliability and long-term memory.
- Investigating system architectures and design paradigms that leverage LLMs not only to automate predefined tasks, but
  also to adapt to unforeseen tasks and operate under uncertainties.

**Software Engineering for LLM-driven Robot Systems**

- Exploring designing principles and frameworks for LLM-driven systems, with a focus on efficient and robust
  integration, and other software engineering topics including extensibility and observability.

**Keywords:** LLM Agent; Software Engineering; Robot;

## Education

| Period    | University                                 | Degree                    | Major                | Remarks                                                                                                                                                                                                                                  |
|:----------|:-------------------------------------------|:--------------------------|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2019~2023 | China University of Petroleum (East China) | Bachelor's Degree         | Data Science         | <ul> <li>Average grade: 87.67/100.</li> <li>Received the *Outstanding Graduation Thesis Award*.</li> </ul>                                                                                                                               |
| 2024~2026 | The University of Tokyo                    | Master's Degree Candidate | Creative Informatics | <ul> <li>Average grade: 3.7/4.0.</li> <li>Advised by Prof. [Kei Okada](http://www.jsk.t.u-tokyo.ac.jp/~k-okada/index.html) in [JSK Robotics Laboratory](http://www.jsk.t.u-tokyo.ac.jp/), working on LLM-driven robot agents.</li> </ul> |

## Selected Publications

| Title                                                                                                                                                                                      | Authors                                                                           | Status                                                                   | Contribution                                                                                                                                                         |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------|:-------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Mockingbird: How does LLM perform in general machine learning tasks? <VPIcon icon="cib:arxiv" size="1.75rem"/>](http://arxiv.org/abs/2508.04279)                                          | <u>Haoyu Jia</u>, Yoshiki Obinata, Kento Kawaharazuka, Kei Okada                  | Under Review                                                             | Lead Author; Designing and implementing the self-reflection framework to leverage the in-context learning ability of LLMs in conventional machine learning problems. |
| [Remote Life Support Robot Interface System for Global Task Planning and Local Action Expansion Using Foundation Models](https://ieeexplore.ieee.org/document/10769852)                    | Yoshiki Obinata, <u>Haoyu Jia</u>, Kento Kawaharazuka, Naoaki Kanazawa, Kei Okada | Accepted, *International Conference on Humanoid Robots (Humanoids 2024)* | Designing and implementing an AR interaction interface that enables users to issue commands by dragging and manipulating virtual objects.                            |
| [Dexterous grasp data augmentation based on grasp synthesis with fingertip workspace cloud and contact-aware sampling](https://www.tandfonline.com/doi/full/10.1080/01691864.2025.2524553) | Liqi Wu, <u>Haoyu Jia</u>, Kento Kawaharazuka, Hirokazu Ishida, Kei Okada         | Accepted, *Advanced Robotics*, 39(12), 730–747.                          | Developing a VR application that captures hand-tracking data and synthesizes real-time VR views from camera images for immersive robot teleoperation.                |

## Competitions

| Year |                                                   Name                                                   |        Award         | Role                                    |
|:----:|:--------------------------------------------------------------------------------------------------------:|:--------------------:|:----------------------------------------|
| 2021 | National College Robot Competition ([RoboMaster](https://www.robomaster.com/en-US/robo/rm?type=rm-info)) | National First Prize | Leader of Computer Vision Systems Group |

## Technical Skills

- **Languages**: C#, C++, Python, Java, SQL
- **Frameworks**:
  - 3D, VR, AR and MR: Unity, Unreal Engine
  - Desktop Apps: WPF, Qt, WinForms
  - Mobile Apps: Flutter, Android SDK
  - Web: ASP.NET, Blazor
  - Machine Learning: Keras, PyTorch, TensorFlow, Gymnasium
  - Robotics: ROS, ROS2, OpenCV, CUDA
  - Code Generation: Roslyn, Emit
  - Data Analysis: SciPy, Scikit-Learn, Pandas
- **Middlewares**: Redis, MongoDB, ActiveMQ

## Selected Projects

### Infrastructure for LLM Agents

These projects are developed for improving the integration of LLMs into software systems
(typically agentic systems for robots).
By providing APIs and mechanisms that are designed to suit the nature of LLMs,
these projects together serve for the goal of unleashing more potential of LLMs,
rather than simply using them to automate predefined tasks.

| Name                                                                                                                                                                                                                                      |   Status   | Description                                                                                                                                                                                                                                                                                                          |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <VPIcon icon="jam:github"/>[EmitToolbox](https://github.com/Pygmalions/EmitToolbox/tree/main/EmitToolbox): A dynamic IL (.NET bytecode) generation framework; it can be used to efficiently create program facades and adapters for LLMs. |  Released  | • This framework provides a high-level API to emit IL (.NET bytecode) instructions at run-time to augment the program. <br/> • Suitable to be used as compiler for custom domain-specific languages.                                                                                                                 |
| <VPIcon icon="jam:github"/>[SnapshotExpert](https://github.com/Pygmalions/SnapshotExpert/tree/main/SnapshotExpert): A semantic snapshot serialization framework; it enables LLMs to operate on program data.                              |  Released  | • This framework dynamically synthesizes serializers at runtime via an LLM‑augmented expert system. <br/> • Trait-based ruleset covers standard types; unresolved edge cases are adaptively completed by the LLM. <br/> • It uses <i>EmitToolbox</i> as its bytecode generation engine.                              |
| <VPIcon icon="jam:github"/>[InjectionExpert](https://github.com/Pygmalions/InjectionExpert/tree/main/InjectionExpert): A high-performance dependency injection framework; it helps LLMs create program objects.                           |  Released  | • This framework generate dependency injectors that can inject an object at a constant time cost. <br/> • Compared to official DI framework provided by Microsoft, it allows dynamically add and remove items in injection containers. <br/> • It uses <i>EmitToolbox</i> as its bytecode generation engine.         |
| <VPIcon icon="jam:github"/>[PromptCompose](https://github.com/Pygmalions/PromptCompose): A framework for composing primitive blocks to construct and analyze LLM contexts at the structure level.                                         |  Released  | • This framework provides primitive blocks for building LLM workflows. <br/> • In addition to basic blocks such as *Text* and *Image*, advanced blocks such as *Predicate* and *Selection* are also provided. <br/> • Inspired by *Flutter*, unchanged blocks are cached to reduce the inference time for workflows. |
| <VPIcon icon="jam:github"/>[MonkeyPlayground](https://github.com/Pygmalions/MonkeyPlayground): A real-time simulator for classic and variant monkey-banana problems for verifying and benchmarking LLM-powered agents.                    |  Released  | • Implemented with Unity, this simulator provides a visualized environment with physical simulation for monkey-banana problems.                                                                                                                                                                                      |
| <VPIcon icon="jam:github"/>[Robotless](https://github.com/Pygmalions/Robotless): A framework based on entity-component-intention model for robot software development; it is specially optimized for LLMs to control robots.              | Developing | • This framework provides domain-specific language to allows LLMs to specify 'intention' equations on controllable properties, and the solver generate action sequence to achieve the equations.                                                                                                                     |

### Ecosystem for Robot Systems

These projects are contributing to the software engineering efforts for robotic software development
by introducing higher-level abstractions, models and patterns,
rather than the de facto manner of simply wrapping the data communication protocols.

Some projects are also part of a broader effort to strengthen the C# ecosystem for robotic software development.
Currently, C# is mainly deployed in the industrial robotics industry,
mainly for commanding and monitoring embedded systems,
and these C# projects attempt to uplift it to a more comprehensive role to fully leverage the ecosystem of .NET.

| Name                                                                                                                                                |   Status   | Description                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:----------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <VPIcon icon="jam:github"/>[MyCobotSharp](https://github.com/Pygmalions/MyCobotSharp): an unofficial .NET SDK for MyCobot™ robot arms.              |  Released  | <ul> <li>Provides connectivity over both of TCP and serial port communication with MyCobot robot arms.</li> <li>This is part of the contribution to the robot software development ecosystem for C#.</li> </ul>                                                                                                                                                                                                                       |
| <VPIcon icon="jam:github"/>[SpotSharp](https://github.com/Pygmalions/SpotSharp): an unofficial .NET SDK for BosDyn Spot™ robots.                    |  Released  | <ul> <li>Provides a more semantic API based on the entity-component model over the gRPC stub clients.</li> </ul>                                                                                                                                                                                                                                                                                                                      |
| <VPIcon icon="jam:github"/>[PilotHelmet](https://github.com/OldVincent/PilotHelmet): a virtual-reality teleoperation client for Meta Quest™ 3.      |  Released  | <ul> <li>Built with Unity, this client synthesize real-time VR views from camera images and transmit hand tracking data to ROS topics.</li> </ul>                                                                                                                                                                                                                                                                                     |
| <VPIcon icon="jam:github"/>[NebulaFramework](https://github.com/Pygmalions/Nebula.Framework): A set of robot software development libraries for C#. | Deprecated | <ul> <li>This part of the attempt to increase the robot software development efficiency by introducing techniques in web development (e.g., auto dependency injection).</li> <li>**Received more than 11.9k downloads in total on NuGet.**</li> <li><VPIcon icon="devicon:nuget"/>[NuGet Package](https://www.nuget.org/profiles/VincentJia)</li> <li>Deprecated. Please use 'Robotless' instead.</li> </ul>                          |
| <VPIcon icon="jam:github"/>[GaiaFramework](https://github.com/GaiaCommittee): A distributed robot software development platform for C++.            | Deprecated | <ul> <li>This platform introduces the micro-service model and corresponding middlewares into the design of robot system architectures, and provides UI utilities for enhancing the system observability.</li> <li>It significantly boosted the development efficiency of one of our robotic system projects, cutting the schedule from three months down to one month.</li> <li>Deprecated. Please use 'Robotless' instead.</li></ul> |

### Miscellaneous Projects & Applications

| Year | Name                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:----:|:-----------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2025 | Thumbs!: a mobile application that can recommend users based on face identification results.   | • Frontend application is built with Flutter. <br/> • Backend is designed with microservice structure. <br/> • <VPIcon icon="jam:github"/>[Github Repository](https://github.com/UTokyo-PBL/pbl2024-2024-team11) <br/>                                                                                                                                                                                                                                                           |
| 2025 | BigBrother: an agent that has personalized behaviors based on who is currently speaking to it. | • Action module is implemented as an external action server; actions can be configured in MongoDB. <br/> • Users are identified by voice embeddings; users' personal information is injected into the context so that the agent 'know about' who it is talking to. <br/> • <VPIcon icon="jam:github"/>[Github Repository](https://github.com/OldVincent/BigBrother)                                                                                                              |
| 2024 | BigBrother-Mobile: a robot arm agent that follows users' voice commands.                       | • Implemented as an Android application; it controls MyCobot robot arm through MyCobotSharp. <br/> • Status and functions of robot arms is mapped to the LLM-driven agent. <br/> • <VPIcon icon="jam:github"/>[Github Repository](https://github.com/OldVincent/BigBrother-Mobile)                                                                                                                                                                                               |
| 2022 | ShadowCode: an Android application system for Covid-19 exposure alert.                         | • Use Bluetooth-BLE to scan and record exposure history. Data processing server is built on Microsoft Azure micro-service platform.<br/> • **Winner of the Outstanding Prize in 2022 Shandong Province College Software Development Competition.** <br/> • <VPIcon icon="jam:github"/>[Github Repository](https://github.com/OldVincent/Shadow-Code)<br/>                                                                                                                        |
| 2022 | Prism: a dynamic code weaving framework for C#.                                                | • This library provides a framework for run-time IL weaving, and implementation modules of AOP, Dependency Injection, RPC based on this framework.<br/> • **Received more than 13.2k downloads in total on NuGet.** <br/> • <VPIcon icon="jam:github"/>[Github Repository](https://github.com/Pygmalions/Prism )<br/> • <VPIcon icon="devicon:nuget"/>[NuGet Package](https://www.nuget.org/packages/Pygmalions.Prism.Framework/) <br/> • Deprecated. Use 'EmitToolbox' instead. |
| 2021 | Object detection system based on OpenCV.                                                       | • Contains an innovative CUDA filter to reduce the time consumption from 82ms to 4ms. <br/> • Based on *Gaia Framework*.<br/> • **Contributed to the 2021 RoboMaster National First Prize**. <br/> • <VPIcon icon="jam:github"/>[Github Repository](https://github.com/RoboPioneers/ProjectIcarus)                                                                                                                                                                               |
| 2021 | Object detection system for industrial robot arms.                                             | • Detection system for industrial arms to customized the pipeline operations with a visualized control panel.<br/> • <VPIcon icon="jam:github"/>[Github Repository](https://github.com/KVM-Explorer/PipelineDetector)                                                                                                                                                                                                                                                            |

*Ongoing projects will be appended to this list after several milestones.*

## Appendix

### Packages

<NugetStatistics author="VincentJia" />

*Your browser fetches these statistics in real-time from [NuGet.org](https://www.nuget.org/profiles/VincentJia).*
*Refresh the page to get the latest numbers.*

### Projects

*Rows with the '<ChevronRightCircleIcon/>' icon are expandable;*
*click the icon to view project details.*

<ProjectTable :projects="projects" profile="https://www.nuget.org/profiles/VincentJia" withYear />

<script setup lang="ts">
import ProjectTable from "@source/.vuepress/components/ProjectTable.vue";
import NugetStatistics from "@source/.vuepress/components/NugetStatistics.vue";
import {projects} from "@source/.vuepress/data/Projects.ts";
import {ChevronRightCircleIcon,} from 'tdesign-icons-vue-next';

</script>