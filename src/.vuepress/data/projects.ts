import {ProjectData, ProjectStatus} from "../components/ProjectData.js";
import {h} from "vue";

export const projects: ProjectData[] = [
  {
    title: "EmitToolbox",
    year: 2024, // Guessing year based on context or status
    description:
      "A dynamic IL (.NET bytecode) generation framework; " +
      "it can be used to efficiently create program facades and adapters for LLMs.",
    repository: new URL("https://github.com/Pygmalions/EmitToolbox/tree/main/EmitToolbox"),
    package: "EmitToolbox",
    status: ProjectStatus.Released,
    remarks: [
      "This framework provides a high-level API to emit IL (.NET bytecode) instructions at run-time to augment the program.",
      "Suitable to be used as compiler for custom domain-specific languages."
    ],
    tags: ["C#", "LLM", "Infrastructure", "Runtime Code Generation"],
    details: undefined
  },
  {
    title: "SnapshotExpert",
    year: 2024,
    description: "A semantic snapshot serialization framework; it enables LLMs to operate on program data.",
    repository: new URL("https://github.com/Pygmalions/SnapshotExpert/tree/main/SnapshotExpert"),
    package: "SnapshotExpert",
    status: ProjectStatus.Developing,
    remarks: [
      "This framework dynamically synthesizes serializers at runtime via an LLM‑augmented expert system.",
      "Trait-based ruleset covers standard types; unresolved edge cases are adaptively completed by the LLM.",
      "It uses EmitToolbox as its bytecode generation engine."
    ],
    tags: ["C#", "Infrastructure", "LLM", "Robotics", "LLM × Robot"],
    details: undefined
  },
  {
    title: "InjectionExpert",
    year: 2024,
    description: "A high-performance dependency injection framework; it helps LLMs create program objects.",
    repository: new URL("https://github.com/Pygmalions/InjectionExpert/tree/main/InjectionExpert"),
    package: "InjectionExpert",
    status: ProjectStatus.Released,
    remarks: [
      "This framework generate dependency injectors that can inject an object at a constant time cost.",
      "Compared to official DI framework provided by Microsoft, it allows dynamically add and remove items in injection containers.",
      "It uses EmitToolbox as its bytecode generation engine."
    ],
    tags: ["C#", "Infrastructure", "LLM", "Robotics", "Runtime Code Generation"],
    details: undefined
  },
  {
    title: "PromptCompose",
    year: 2024,
    description: "A framework for composing primitive blocks to construct and analyze LLM contexts at the structure level.",
    repository: new URL("https://github.com/Pygmalions/PromptCompose"),
    package: "PromptCompose",
    status: ProjectStatus.Deprecated,
    remarks: [
      "This framework provides primitive blocks for building LLM workflows.",
      "In addition to basic blocks such as Text and Image, advanced blocks such as Predicate and Selection are also provided.",
      "Inspired by Flutter, unchanged blocks are cached to reduce the inference time for workflows."
    ],
    tags: ["C#", "Infrastructure", "LLM", "Framework"],
    details: undefined
  },
  {
    title: "MonkeyPlayground",
    year: 2024,
    description: "A real-time simulator for classic and variant monkey-banana problems for verifying and benchmarking LLM-powered agents.",
    repository: new URL("https://github.com/Pygmalions/MonkeyPlayground"),
    package: "MonkeyPlayground",
    status: ProjectStatus.Developing,
    remarks: [
      "Implemented with Unity, this simulator provides a visualized environment with physical simulation for monkey-banana problems."
    ],
    tags: ["C#", "Unity Engine", "Simulator", "LLM"],
    details: undefined
  },
  {
    title: "Robotless",
    year: 2024,
    description: "A framework based on entity-component-intention model for robot software development; it is specially optimized for LLMs to control robots.",
    repository: new URL("https://github.com/Pygmalions/Robotless"),
    package: "Robotless",
    status: ProjectStatus.Developing,
    remarks: [
      "This framework provides domain-specific language to allows LLMs to specify 'intention' equations on controllable properties, and the solver generate action sequence to achieve the equations."
    ],
    tags: ["C#", "Infrastructure", "Robotics", "Framework"],
    details: undefined
  },
  {
    title: "MyCobotSharp",
    year: 2023,
    description: "An unofficial .NET SDK for MyCobot™ robot arms.",
    repository: new URL("https://github.com/Pygmalions/MyCobotSharp"),
    package: "MyCobotSharp",
    status: ProjectStatus.Released,
    remarks: [
      "Provides connectivity over both of TCP and serial port communication with MyCobot robot arms.",
      "This is part of the contribution to the robot software development ecosystem for C#."
    ],
    tags: ["C#", "Infrastructure", "Robotics", "SDK"],
    details: undefined
  },
  {
    title: "SpotSharp",
    year: 2023,
    description: "An unofficial .NET SDK for BosDyn Spot™ robots.",
    repository: new URL("https://github.com/Pygmalions/SpotSharp"),
    package: "SpotSharp",
    status: ProjectStatus.Released,
    remarks: [
      "Provides a more semantic API based on the entity-component model over the gRPC stub clients."
    ],
    tags: ["C#", "Infrastructure", "Robotics", "SDK"],
    details: undefined
  },
  {
    title: "PilotHelmet",
    year: 2024,
    description: "A virtual-reality teleoperation client for Meta Quest™ 3.",
    repository: new URL("https://github.com/OldVincent/PilotHelmet"),
    package: undefined,
    status: ProjectStatus.Released,
    remarks: [
      "Built with Unity, this client synthesize real-time VR views from camera images and transmit hand tracking data to ROS topics."
    ],
    tags: ["C#", "Unity Engine", "Robotics", "VR", "ROS", "Teleoperation"],
    details: undefined
  },
  {
    title: "NebulaFramework",
    year: 2022,
    description: "A set of robot software development libraries for C#.",
    repository: new URL("https://github.com/Pygmalions/Nebula.Framework"),
    package: "NebulaFramework",
    status: ProjectStatus.Deprecated,
    remarks: [
      "This part of the attempt to increase the robot software development efficiency by introducing techniques in web development (e.g., auto dependency injection).",
      "Received more than 11.9k downloads in total on NuGet.",
      "Deprecated. Please use 'Robotless' instead."
    ],
    tags: ["C#", "Robotics", "Infrastructure", "Framework"],
    details: undefined
  },
  {
    title: "GaiaFramework",
    year: 2021,
    description: "A distributed robot software development platform for C++.",
    repository: new URL("https://github.com/GaiaCommittee"),
    package: undefined,
    status: ProjectStatus.Deprecated,
    remarks: [
      "This platform introduces the micro-service model and corresponding middlewares into the design of robot system architectures, and provides UI utilities for enhancing the system observability.",
      "It significantly boosted the development efficiency of one of our robotic system projects, cutting the schedule from three months down to one month.",
      "Deprecated. Please use 'Robotless' instead."
    ],
    tags: ["C++", "Robotics", "Infrastructure", "Framework"],
    details: undefined
  },
  {
    title: "Thumbs!",
    year: 2025,
    description: "A mobile application that can recommend users based on face identification results.",
    repository: new URL("https://github.com/UTokyo-PBL/pbl2024-2024-team11"),
    package: undefined,
    status: ProjectStatus.Released,
    remarks: [
      "Frontend application is built with Flutter.",
      "Backend is designed with microservice structure."
    ],
    tags: ["Flutter", "Android", "Application", "Mobile Application", "Computer Vision"],
    details: undefined
  },
  {
    title: "BigBrother",
    year: 2025,
    description: "An agent that has personalized behaviors based on who is currently speaking to it.",
    repository: new URL("https://github.com/OldVincent/BigBrother"),
    package: undefined,
    status: ProjectStatus.Released,
    remarks: [
      "Action module is implemented as an external action server; actions can be configured in MongoDB.",
      "Users are identified by voice embeddings; users' personal information is injected into the context so that the agent 'know about' who it is talking to."
    ],
    tags: ["C#", "Application", "LLM", "LLM × Robot"],
    details: undefined
  },
  {
    title: "BigBrother-Mobile",
    year: 2024,
    description: "A robot arm agent that follows users' voice commands.",
    repository: new URL("https://github.com/OldVincent/BigBrother-Mobile"),
    package: undefined,
    status: ProjectStatus.Released,
    remarks: [
      "Implemented as an Android application; it controls MyCobot robot arm through MyCobotSharp.",
      "Status and functions of robot arms is mapped to the LLM-driven agent."
    ],
    tags: ["Android", "Robotics", "LLM", "Application", "Mobile Application", "LLM × Robot"],
    details: undefined
  },
  {
    title: "ShadowCode",
    year: 2022,
    description: "An Android application system for Covid-19 exposure alert.",
    repository: new URL("https://github.com/OldVincent/Shadow-Code"),
    package: undefined,
    status: ProjectStatus.Released,
    remarks: [
      "Use Bluetooth-BLE to scan and record exposure history. Data processing server is built on Microsoft Azure micro-service platform.",
      "Winner of the Outstanding Prize in 2022 Shandong Province College Software Development Competition."
    ],
    tags: ["Android", "Application", "Mobile Application"],
    details: undefined
  },
  {
    title: "Prism",
    year: 2022,
    description: "A dynamic code weaving framework for C#.",
    repository: new URL("https://github.com/Pygmalions/Prism"),
    package: "Prism",
    status: ProjectStatus.Deprecated,
    remarks: [
      "This library provides a framework for run-time IL weaving, and implementation modules of AOP, Dependency Injection, RPC based on this framework.",
      "Received more than 13.2k downloads in total on NuGet.",
      "Deprecated. Use 'EmitToolbox' instead."
    ],
    tags: ["C#", "Infrastructure", "Dynamic Code Generation", "Framework"],
    details: undefined
  },
  {
    title: "ProjectIcarus",
    year: 2021,
    description: "Object detection system based on OpenCV.",
    repository: new URL("https://github.com/RoboPioneers/ProjectIcarus"),
    package: undefined,
    status: ProjectStatus.Deprecated,
    remarks: [
      "Contains an innovative CUDA filter to reduce the time consumption from 82ms to 4ms.",
      "Based on Gaia Framework.",
      "Contributed to the 2021 RoboMaster National First Prize."
    ],
    tags: ["C++", "Application", "Robotics", "Computer Vision"],
    details: undefined
  },
  {
    title: "PipelineDetector",
    year: 2021,
    description: "Object detection system for industrial robot arms.",
    repository: new URL("https://github.com/KVM-Explorer/PipelineDetector"),
    package: undefined,
    status: ProjectStatus.Deprecated,
    remarks: [
      "Detection system for industrial arms to customized the pipeline operations with a visualized control panel."
    ],
    tags: ["C#", "Application", "Robotics", "Computer Vision"],
    details: undefined
  }
]
