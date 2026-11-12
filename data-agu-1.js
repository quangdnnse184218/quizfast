window.AGU_PART1_DATA = [
  // ================= QUIZ 1: DESIGN PATTERNS & SOLID (30 QUESTIONS) =================
  {
    id: "AGU_Q1_1",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "In a typical C# Singleton implementation for a GameManager, which two elements are essential?",
    options: [
      "a. A private constructor and a static property/field that holds the single instance",
      "b. A public constructor and multiple static instances",
      "c. An abstract class with no constructor",
      "d. An interface with no implementation"
    ],
    correctIndex: 0,
    keyword_anchor: "Singleton = Private constructor + Static instance",
    highlight_words: ["Singleton", "private constructor", "static property/field"],
    explanation: "Singleton bắt buộc có constructor private (chặn new từ bên ngoài) và một biến/property static lưu giữ instance duy nhất."
  },
  {
    id: "AGU_Q1_2",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "Which pattern allows behavior to be added to an individual object dynamically, without affecting other objects of the same class?",
    options: [
      "a. Strategy",
      "b. Singleton",
      "c. Decorator",
      "d. Command"
    ],
    correctIndex: 2,
    keyword_anchor: "Add behavior dynamically to individual object = Decorator",
    highlight_words: ["added to an individual object dynamically", "without affecting other objects", "Decorator"],
    explanation: "Decorator bọc (wrap) một đối tượng cụ thể để gắn thêm hành vi lúc runtime mà không ảnh hưởng các đối tượng khác cùng class."
  },
  {
    id: "AGU_Q1_3",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "Which pattern provides an interface for creating objects without specifying their exact concrete class in the client code?",
    options: [
      "a. Observer",
      "b. Factory",
      "c. State",
      "d. Decorator"
    ],
    correctIndex: 1,
    keyword_anchor: "Create objects without specifying concrete class = Factory",
    highlight_words: ["creating objects", "without specifying their exact concrete class", "Factory"],
    explanation: "Factory Pattern ẩn logic khởi tạo và trả về đối tượng qua interface/base class mà client không cần biết class cụ thể."
  },
  {
    id: "AGU_Q1_4",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "A FlyingEnemy class inherits from Enemy and overrides Move() by throwing a NotImplementedException because flying enemies move differently. This design most likely violates which principle?",
    options: [
      "a. Open/Closed Principle (OCP)",
      "b. Single Responsibility Principle (SRP)",
      "c. Liskov Substitution Principle (LSP)",
      "d. Interface Segregation Principle (ISP)"
    ],
    correctIndex: 2,
    keyword_anchor: "LSP Violation = Throw NotImplementedException in subclass",
    highlight_words: ["inherits from", "NotImplementedException", "Liskov Substitution Principle"],
    explanation: "Class con ném NotImplementedException khiến nó không thể thay thế an toàn cho class cha Enemy, vi phạm Liskov Substitution Principle."
  },
  {
    id: "AGU_Q1_5",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "In Unity, a PlayerController class that handles movement, saves game data to a file, and renders the UI health bar is most likely violating which principle?",
    options: [
      "a. Single Responsibility Principle (SRP)",
      "b. Open/Closed Principle (OCP)",
      "c. Interface Segregation Principle (ISP)",
      "d. Liskov Substitution Principle (LSP)"
    ],
    correctIndex: 0,
    keyword_anchor: "1 class doing movement + save + UI = Violates SRP",
    highlight_words: ["handles movement, saves game data", "renders the UI", "Single Responsibility Principle"],
    explanation: "Một class ôm đồm quá nhiều nhiệm vụ khác nhau (di chuyển, lưu file, vẽ UI) vi phạm Single Responsibility Principle."
  },
  {
    id: "AGU_Q1_6",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "What is a key benefit of using a Factory pattern for spawning game objects?",
    options: [
      "a. It removes the need for any interfaces or base classes",
      "b. It automatically balances game difficulty",
      "c. It decouples the code that uses objects from the code that decides which concrete class to instantiate, making it easier to add new object types",
      "d. It guarantees only one enemy can exist at a time"
    ],
    correctIndex: 2,
    keyword_anchor: "Factory benefit = Decouples usage from concrete instantiation",
    highlight_words: ["Factory pattern", "decouples", "concrete class to instantiate"],
    explanation: "Factory tách biệt nơi sử dụng object khỏi nơi quyết định khởi tạo class cụ thể nào, giúp dễ mở rộng thêm loại mới."
  },
  {
    id: "AGU_Q1_7",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "The Liskov Substitution Principle states that",
    options: [
      "a. Objects of a subclass should be replaceable with objects of the base class without breaking the program",
      "b. Subclasses must always add new public methods",
      "c. A class should only implement one interface",
      "d. A base class should never be inherited from"
    ],
    correctIndex: 0,
    keyword_anchor: "LSP = Subclass replaceable for base class without breaking",
    highlight_words: ["Liskov Substitution Principle", "replaceable", "without breaking the program"],
    explanation: "LSP yêu cầu đối tượng của lớp con có thể thay thế hoàn toàn lớp cha mà chương trình vẫn chạy đúng."
  },
  {
    id: "AGU_Q1_8",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "A character controller with IdleState, RunningState, JumpingState, and AttackingState classes, where the active state object decides how the character responds to input, is mainly meant to solve which problem?",
    options: [
      "a. Ensuring only one character can exist in the scene",
      "b. Avoiding large, hard-to-maintain if-else or switch statements that check the current state everywhere in the code",
      "c. Allowing multiple algorithms to run at the same time",
      "d. Hiding the character's public methods from other classes"
    ],
    correctIndex: 1,
    keyword_anchor: "State Pattern solves = Huge if-else / switch state checks",
    highlight_words: ["IdleState, RunningState", "Avoiding large", "if-else or switch statements"],
    explanation: "State Pattern loại bỏ các khối if-else/switch khổng lồ kiểm tra trạng thái nhân vật rải rác khắp code."
  },
  {
    id: "AGU_Q1_9",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "What is a common way to apply the Dependency Inversion Principle in Unity code?",
    options: [
      "a. Storing all game data in static global variables",
      "b. Making every class inherit from MonoBehaviour",
      "c. Injecting a dependency (e.g. an interface reference) through the constructor, a property, or the Inspector instead of creating it directly inside the class",
      "d. Calling GameObject.Find() inside every class that needs a reference"
    ],
    correctIndex: 2,
    keyword_anchor: "DIP in Unity = Inject interface dependency (Constructor/Inspector)",
    highlight_words: ["Dependency Inversion Principle", "Injecting a dependency", "interface reference"],
    explanation: "Áp dụng DIP bằng cách tiêm (inject) interface qua constructor, property hoặc Inspector thay vì tự `new` trực tiếp bên trong class."
  },
  {
    id: "AGU_Q1_10",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "Which pattern defines a family of interchangeable algorithms and lets the algorithm vary independently from the client that uses it?",
    options: [
      "a. Decorator",
      "b. State",
      "c. Strategy",
      "d. Command"
    ],
    correctIndex: 2,
    keyword_anchor: "Interchangeable algorithms = Strategy",
    highlight_words: ["interchangeable algorithms", "vary independently", "Strategy"],
    explanation: "Strategy Pattern định nghĩa một họ các thuật toán có thể hoán đổi cho nhau độc lập với lớp sử dụng."
  },
  {
    id: "AGU_Q1_11",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "Which pattern allows an object to alter its behavior when its internal state changes, making it appear as if the object changed its class?",
    options: [
      "a. Strategy",
      "b. Observer",
      "c. Singleton",
      "d. State"
    ],
    correctIndex: 3,
    keyword_anchor: "Alter behavior when internal state changes = State",
    highlight_words: ["alter its behavior", "internal state changes", "State"],
    explanation: "State Pattern thay đổi hành vi của đối tượng khi trạng thái nội tại thay đổi, giống như nó đổi sang class khác."
  },
  {
    id: "AGU_Q1_12",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "A health bar UI that automatically updates whenever the player's health value changes, without the health bar polling the player every frame, is an example of which pattern?",
    options: [
      "a. Strategy",
      "b. State",
      "c. Observer",
      "d. Factory"
    ],
    correctIndex: 2,
    keyword_anchor: "Auto-update on value change (no polling) = Observer",
    highlight_words: ["automatically updates", "without", "polling", "Observer"],
    explanation: "UI tự động cập nhật khi nhận thông báo sự kiện thay vì kiểm tra mỗi frame chính là Observer Pattern."
  },
  {
    id: "AGU_Q1_13",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "Which technique is most commonly used in Unity/C# to satisfy the Open/Closed Principle?",
    options: [
      "a. Using interfaces or abstract base classes that new behavior can extend",
      "b. Copy-pasting a class and modifying the copy for each new feature",
      "c. Making all fields and methods public",
      "d. Hard-coding all enemy types in a single switch statement"
    ],
    correctIndex: 0,
    keyword_anchor: "Satisfy OCP = Interfaces / Abstract base classes for extension",
    highlight_words: ["Open/Closed Principle", "interfaces or abstract base classes", "extend"],
    explanation: "Dùng interface hoặc abstract class cho phép thêm hành vi mới bằng cách tạo class kế thừa mà không sửa code cũ (OCP)."
  },
  {
    id: "AGU_Q1_14",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "A WeaponSystem class depends on an IDamageSource interface instead of a specific Sword class, so any object implementing IDamageSource can be used. This is an example of",
    options: [
      "a. Single Responsibility Principle (SRP)",
      "b. Dependency Inversion Principle (DIP)",
      "c. Interface Segregation Principle (ISP)",
      "d. Liskov Substitution Principle (LSP)"
    ],
    correctIndex: 1,
    keyword_anchor: "Depend on IDamageSource interface instead of Sword = DIP",
    highlight_words: ["depends on an IDamageSource interface", "instead of a specific Sword", "Dependency Inversion Principle"],
    explanation: "Phụ thuộc vào abstraction (IDamageSource) thay vì lớp cụ thể (Sword) là ví dụ điển hình của Dependency Inversion Principle."
  },
  {
    id: "AGU_Q1_15",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "A game has an IEnemy interface, and each new enemy type is added by creating a new class that implements IEnemy, without touching existing enemy classes. This design follows which principle?",
    options: [
      "a. Dependency Inversion Principle (DIP)",
      "b. Open/Closed Principle (OCP)",
      "c. Single Responsibility Principle (SRP)",
      "d. Liskov Substitution Principle (LSP)"
    ],
    correctIndex: 1,
    keyword_anchor: "Add new enemy without touching existing code = OCP",
    highlight_words: ["new class", "without touching existing", "Open/Closed Principle"],
    explanation: "Mở rộng thêm loại quái mới mà không sửa code của các lớp hiện có là nguyên lý Open/Closed Principle."
  },
  {
    id: "AGU_Q1_16",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "An enemy AI that can switch between AggressiveMovement, DefensiveMovement, and PatrolMovement objects at runtime, all implementing the same IMovementBehaviour interface, is applying which pattern?",
    options: [
      "a. Observer",
      "b. Strategy",
      "c. Singleton",
      "d. Factory"
    ],
    correctIndex: 1,
    keyword_anchor: "Switch IMovementBehaviour at runtime = Strategy",
    highlight_words: ["switch between", "at runtime", "IMovementBehaviour", "Strategy"],
    explanation: "Chuyển đổi qua lại các hành vi di chuyển cùng interface lúc runtime là ứng dụng của Strategy Pattern."
  },
  {
    id: "AGU_Q1_17",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "The Dependency Inversion Principle states that high-level modules should not depend on low-level modules; instead,",
    options: [
      "a. Low-level modules should depend on high-level modules",
      "b. Both should depend on abstractions",
      "c. High-level modules should depend directly on low-level modules",
      "d. Neither module should depend on anything"
    ],
    correctIndex: 1,
    keyword_anchor: "DIP = Both high-level & low-level depend on abstractions",
    highlight_words: ["Dependency Inversion Principle", "Both should depend on abstractions"],
    explanation: "Cả module cấp cao và cấp thấp đều phải phụ thuộc vào abstraction (interface/abstract class)."
  },
  {
    id: "AGU_Q1_18",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "Which design pattern ensures that a class has only one instance and provides a global point of access to it?",
    options: [
      "a. Singleton",
      "b. Observer",
      "c. State",
      "d. Factory"
    ],
    correctIndex: 0,
    keyword_anchor: "Only one instance + Global access = Singleton",
    highlight_words: ["only one instance", "global point of access", "Singleton"],
    explanation: "Singleton đảm bảo chỉ có duy nhất 1 instance và cung cấp điểm truy cập toàn cục."
  },
  {
    id: "AGU_Q1_19",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "Implementing an undo/redo system for a level editor, or remapping player input keys without touching gameplay code, is a typical use case for which pattern?",
    options: [
      "a. Factory",
      "b. Command",
      "c. State",
      "d. Observer"
    ],
    correctIndex: 1,
    keyword_anchor: "Undo/redo + Input remapping = Command",
    highlight_words: ["undo/redo", "remapping player input", "Command"],
    explanation: "Command Pattern đóng gói thao tác thành object nên rất lý tưởng cho Undo/Redo và gán lại phím điều khiển."
  },
  {
    id: "AGU_Q1_20",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "Instead of one large ICharacter interface with Move(), Attack(), Fly(), and Swim(), splitting it into IMovable, IAttacker, IFlyable, and ISwimmable is an application of which principle?",
    options: [
      "a. Open/Closed Principle (OCP)",
      "b. Liskov Substitution Principle (LSP)",
      "c. Interface Segregation Principle (ISP)",
      "d. Dependency Inversion Principle (DIP)"
    ],
    correctIndex: 2,
    keyword_anchor: "Split fat interface into small interfaces = ISP",
    highlight_words: ["one large", "splitting it", "Interface Segregation Principle"],
    explanation: "Tách một interface lớn thành nhiều interface nhỏ chuyên biệt là nguyên lý Interface Segregation Principle."
  },
  {
    id: "AGU_Q1_21",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "Which pattern defines a one-to-many dependency so that when one object changes state, all its dependents are notified automatically?",
    options: [
      "a. Singleton",
      "b. Observer",
      "c. Command",
      "d. Decorator"
    ],
    correctIndex: 1,
    keyword_anchor: "One-to-many dependency + Auto notify = Observer",
    highlight_words: ["one-to-many dependency", "notified automatically", "Observer"],
    explanation: "Observer thiết lập quan hệ 1-nhiều để khi một đối tượng thay đổi, tất cả đối tượng đăng ký đều được thông báo tự động."
  },
  {
    id: "AGU_Q1_22",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "A method such as EnemyFactory.CreateEnemy(EnemyType type) that returns the correct enemy subclass based on the given type, so spawning code never creates a Goblin or an Orc directly, is an example of",
    options: [
      "a. Factory pattern",
      "b. Command pattern",
      "c. Singleton pattern",
      "d. Decorator pattern"
    ],
    correctIndex: 0,
    keyword_anchor: "CreateEnemy(type) returning subclass = Factory",
    highlight_words: ["CreateEnemy", "returns the correct enemy subclass", "Factory pattern"],
    explanation: "Hàm CreateEnemy nhận loại đầu vào và trả về subclass tương ứng mà nơi gọi không cần `new` trực tiếp là Factory Pattern."
  },
  {
    id: "AGU_Q1_23",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "What is the main benefit of following the Single Responsibility Principle in a game project?",
    options: [
      "a. It removes the need for interfaces entirely",
      "b. Classes automatically run faster at runtime",
      "c. It guarantees the game will have no bugs",
      "d. Classes become easier to maintain, test, and reuse because each one focuses on a single task"
    ],
    correctIndex: 3,
    keyword_anchor: "SRP benefit = Easier to maintain, test & reuse",
    highlight_words: ["Single Responsibility Principle", "easier to maintain, test, and reuse", "single task"],
    explanation: "Tuân thủ SRP giúp từng class tập trung một nhiệm vụ, dễ bảo trì, dễ viết unit test và tái sử dụng."
  },
  {
    id: "AGU_Q1_24",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "In Unity/C#, the Observer pattern is most commonly implemented using",
    options: [
      "a. A single monolithic class that handles all game logic",
      "b. C# events and delegates",
      "c. Deep inheritance chains",
      "d. Static global variables checked every frame in Update()"
    ],
    correctIndex: 1,
    keyword_anchor: "Observer in Unity/C# = C# events and delegates",
    highlight_words: ["Observer pattern", "C# events and delegates"],
    explanation: "Trong Unity/C#, Observer Pattern thường được triển khai bằng C# events, delegates (hoặc Action/UnityEvent)."
  },
  {
    id: "AGU_Q1_25",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "Which design pattern encapsulates a request or action as an object, making it easy to queue, log, or undo that action later?",
    options: [
      "a. Singleton",
      "b. Strategy",
      "c. Decorator",
      "d. Command"
    ],
    correctIndex: 3,
    keyword_anchor: "Encapsulate request as object (queue/log/undo) = Command",
    highlight_words: ["encapsulates a request", "queue, log, or undo", "Command"],
    explanation: "Command Pattern biến mỗi hành động/yêu cầu thành một object độc lập để dễ xếp hàng đợi, ghi log hoặc hoàn tác."
  },
  {
    id: "AGU_Q1_26",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "Which SOLID principle states that a class should have only one reason to change?",
    options: [
      "a. Liskov Substitution Principle (LSP)",
      "b. Dependency Inversion Principle (DIP)",
      "c. Single Responsibility Principle (SRP)",
      "d. Open/Closed Principle (OCP)"
    ],
    correctIndex: 2,
    keyword_anchor: "Only one reason to change = SRP",
    highlight_words: ["only one reason to change", "Single Responsibility Principle"],
    explanation: "Single Responsibility Principle phát biểu rằng một class chỉ nên có duy nhất một lý do để thay đổi."
  },
  {
    id: "AGU_Q1_27",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "A weapon system where a base Sword object can be wrapped with a FlamingDecorator or a PoisonDecorator to add extra effects at runtime, instead of creating a separate subclass for every combination, uses which pattern?",
    options: [
      "a. Observer",
      "b. State",
      "c. Factory",
      "d. Decorator"
    ],
    correctIndex: 3,
    keyword_anchor: "Wrap Sword with Flaming/Poison effects = Decorator",
    highlight_words: ["wrapped", "FlamingDecorator", "add extra effects at runtime", "Decorator"],
    explanation: "Bọc đối tượng gốc qua các lớp trang trí (Flaming, Poison) để cộng dồn hiệu ứng mà không bùng nổ số lượng subclass là Decorator."
  },
  {
    id: "AGU_Q1_28",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "The Open/Closed Principle states that software entities should be",
    options: [
      "a. Open for modification, but closed for extension",
      "b. Open for both extension and modification",
      "c. Closed for both extension and modification",
      "d. Open for extension, but closed for modification"
    ],
    correctIndex: 3,
    keyword_anchor: "OCP = Open for extension, Closed for modification",
    highlight_words: ["Open/Closed Principle", "Open for extension, but closed for modification"],
    explanation: "Nguyên lý Đóng/Mở: Mở cho việc mở rộng tính năng mới, nhưng đóng với việc sửa đổi code cũ đang ổn định."
  },
  {
    id: "AGU_Q1_29",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "Which of the following is a well-known drawback of overusing the Singleton pattern in a game project?",
    options: [
      "a. It automatically improves frame rate",
      "b. It forces the class to implement multiple interfaces",
      "c. It prevents the class from ever being instantiated",
      "d. It introduces global state that can make code harder to test and creates hidden dependencies between systems"
    ],
    correctIndex: 3,
    keyword_anchor: "Singleton drawback = Global state + Hard to test + Hidden dependencies",
    highlight_words: ["drawback of overusing the Singleton", "global state", "harder to test", "hidden dependencies"],
    explanation: "Lạm dụng Singleton tạo trạng thái toàn cục (global state), gây khó viết test và làm phát sinh các phụ thuộc ngầm."
  },
  {
    id: "AGU_Q1_30",
    subject: "FE AGU",
    module: "Quiz 1: Design Patterns & SOLID",
    question: "The Interface Segregation Principle suggests that",
    options: [
      "a. Interfaces should contain as many methods as possible for flexibility",
      "b. A class should never implement more than one interface",
      "c. Clients should not be forced to depend on methods they do not use",
      "d. Every class should implement every interface in the project"
    ],
    correctIndex: 2,
    keyword_anchor: "ISP = Clients not forced to depend on unused methods",
    highlight_words: ["Interface Segregation Principle", "not be forced to depend on methods they do not use"],
    explanation: "ISP khuyên không nên ép các class phải implement những phương thức trong interface mà chúng không hề sử dụng."
  },

  // ================= QUIZ 2: PERFORMANCE & PROFILING (30 QUESTIONS) =================
  {
    id: "AGU_Q2_1",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "What is the main purpose of profiling a game during development?",
    options: [
      "a. To generate new art assets for the game",
      "b. To compile the game for multiple platforms at once",
      "c. To measure performance metrics such as CPU, GPU, and memory usage in order to find real bottlenecks",
      "d. To automatically fix all bugs in the code"
    ],
    correctIndex: 2,
    keyword_anchor: "Profiling = Measure CPU/GPU/Memory to find real bottlenecks",
    highlight_words: ["main purpose of profiling", "measure performance metrics", "find real bottlenecks"],
    explanation: "Profiling dùng để đo lường hiệu năng thực tế (CPU, GPU, RAM) nhằm tìm chính xác điểm nghẽn cổ chai."
  },
  {
    id: "AGU_Q2_2",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "What is a \"memory snapshot\" in the context of the Memory Profiler?",
    options: [
      "a. A screenshot of the game's visuals",
      "b. A compressed version of a texture asset",
      "c. A captured record of all memory allocations and object references at one specific point in time, used for analysis",
      "d. A backup copy of the entire project"
    ],
    correctIndex: 2,
    keyword_anchor: "Memory snapshot = Record of allocations & references at 1 point in time",
    highlight_words: ["memory snapshot", "memory allocations and object references", "specific point in time"],
    explanation: "Memory snapshot là bản ghi chụp lại toàn bộ vùng nhớ đã cấp phát và tham chiếu object tại một thời điểm để phân tích."
  },
  {
    id: "AGU_Q2_3",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Comparing two memory snapshots taken at different points during gameplay is especially useful for detecting what?",
    options: [
      "a. Memory leaks - objects that should have been released but are still being retained",
      "b. Frame rate drops caused by rendering",
      "c. Missing texture references",
      "d. Compile errors in scripts"
    ],
    correctIndex: 0,
    keyword_anchor: "Compare 2 snapshots = Detect Memory Leaks",
    highlight_words: ["Comparing two memory snapshots", "Memory leaks", "still being retained"],
    explanation: "So sánh 2 snapshot ở hai thời điểm giúp phát hiện các object đáng lẽ phải được giải phóng nhưng vẫn bị giữ lại (memory leak)."
  },
  {
    id: "AGU_Q2_4",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "In Unity's memory model, what does the \"managed heap\" refer to?",
    options: [
      "a. The memory used to store compiled shader code only",
      "b. The memory reserved exclusively for texture assets",
      "c. The memory used only by the Unity Editor, never by builds",
      "d. The memory used to store C# objects managed by the .NET runtime and garbage collector"
    ],
    correctIndex: 3,
    keyword_anchor: "Managed Heap = C# objects managed by .NET & GC",
    highlight_words: ["managed heap", "C# objects", ".NET runtime and garbage collector"],
    explanation: "Managed Heap là vùng nhớ chứa các đối tượng C# được quản lý bởi .NET runtime và bộ thu gom rác (Garbage Collector)."
  },
  {
    id: "AGU_Q2_5",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "What does \"native memory\" typically refer to in a Unity project?",
    options: [
      "a. Memory allocated directly by the Unity engine for things like textures, meshes, and audio, which is not managed by the .NET garbage collector",
      "b. Memory used only for storing script source code",
      "c. Memory reserved for version control operations",
      "d. Memory that only exists while the Unity Editor is open"
    ],
    correctIndex: 0,
    keyword_anchor: "Native Memory = Engine assets (textures/meshes/audio), NOT managed by GC",
    highlight_words: ["native memory", "textures, meshes, and audio", "not managed by the .NET garbage collector"],
    explanation: "Native Memory là bộ nhớ do lõi C++ của Unity cấp phát cho tài nguyên (Texture, Mesh, Audio), không qua .NET GC."
  },
  {
    id: "AGU_Q2_6",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Which of the following is a common cause of unwanted garbage collection (GC) spikes in a Unity game?",
    options: [
      "a. Using a NetworkManager in a multiplayer scene",
      "b. Baking lightmaps before building the game",
      "c. Increasing the resolution of the Main Camera",
      "d. Frequent small memory allocations each frame, such as creating new objects, strings, or using LINQ inside Update()"
    ],
    correctIndex: 3,
    keyword_anchor: "GC spikes = Frequent small allocations (new/string/LINQ) in Update()",
    highlight_words: ["garbage collection (GC) spikes", "Frequent small memory allocations", "inside Update()"],
    explanation: "Tạo rác bộ nhớ liên tục mỗi frame (tạo object mới, nối chuỗi, dùng LINQ trong Update) sẽ kích hoạt GC gây giật khung hình."
  },
  {
    id: "AGU_Q2_7",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "What is Object Pooling, and why is it commonly used as a performance optimization technique?",
    options: [
      "a. Reusing a set of pre-instantiated objects (e.g. bullets or enemies) instead of repeatedly instantiating and destroying them, to reduce CPU overhead and garbage collection",
      "b. Storing all game objects inside a single parent GameObject for organization",
      "c. Automatically merging duplicate materials in a scene",
      "d. Compressing object meshes to reduce file size"
    ],
    correctIndex: 0,
    keyword_anchor: "Object Pooling = Reuse pre-instantiated objects -> Cut CPU & GC",
    highlight_words: ["Object Pooling", "Reusing a set of pre-instantiated objects", "reduce CPU overhead and garbage collection"],
    explanation: "Object Pooling tái sử dụng các object tạo sẵn (đạn, quái) thay vì Instantiate/Destroy liên tục, giảm tải CPU và GC."
  },
  {
    id: "AGU_Q2_8",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Why is calling GetComponent() repeatedly inside Update() considered a performance anti-pattern?",
    options: [
      "a. It performs a relatively expensive lookup every single frame, when the reference could instead be cached once",
      "b. GetComponent() only works correctly inside Start(), never inside Update()",
      "c. It permanently disables the component being retrieved",
      "d. It causes a compile-time error in Unity"
    ],
    correctIndex: 0,
    keyword_anchor: "GetComponent() in Update = Expensive lookup every frame (should cache)",
    highlight_words: ["GetComponent()", "inside Update()", "expensive lookup", "cached once"],
    explanation: "Gọi GetComponent() trong Update() tốn chi phí tìm kiếm mỗi frame, trong khi hoàn toàn có thể lưu cache 1 lần ở Awake/Start."
  },
  {
    id: "AGU_Q2_9",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "What is \"boxing\" in C#, and why can it hurt performance in hot code paths?",
    options: [
      "a. Wrapping a GameObject inside an empty parent object",
      "b. Converting a texture into a different compression format",
      "c. Packaging multiple scripts into a single compiled DLL",
      "d. Converting a value type (like an int or struct) into an object/reference type, which causes a heap allocation"
    ],
    correctIndex: 3,
    keyword_anchor: "Boxing = Value type -> Object/Reference type -> Heap allocation",
    highlight_words: ["boxing", "value type", "object/reference type", "heap allocation"],
    explanation: "Boxing ép kiểu dữ liệu giá trị (int, struct) sang kiểu tham chiếu (object), sinh ra cấp phát trên Heap và tạo rác cho GC."
  },
  {
    id: "AGU_Q2_10",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Why is using GameObject.Find() or FindObjectOfType() discouraged in performance-critical code that runs frequently?",
    options: [
      "a. They only work in the Unity Editor and never in a built game",
      "b. They automatically destroy the object they find",
      "c. These methods search through the scene hierarchy, which is relatively slow, especially if called every frame",
      "d. These methods do not exist in modern versions of Unity"
    ],
    correctIndex: 2,
    keyword_anchor: "Find() = Searches whole scene hierarchy (slow every frame)",
    highlight_words: ["GameObject.Find()", "search through the scene hierarchy", "relatively slow"],
    explanation: "Các hàm Find phải duyệt qua cây Hierarchy của scene nên rất chậm nếu gọi thường xuyên."
  },
  {
    id: "AGU_Q2_11",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Which technique helps reduce the number of draw calls needed to render many similar objects, improving rendering performance?",
    options: [
      "a. Batching (such as static batching, dynamic batching, or GPU instancing)",
      "b. Increasing the resolution of all textures",
      "c. Adding more Rigidbody components to each object",
      "d. Turning on Deep Profile mode"
    ],
    correctIndex: 0,
    keyword_anchor: "Reduce draw calls = Batching / GPU instancing",
    highlight_words: ["reduce the number of draw calls", "Batching", "GPU instancing"],
    explanation: "Batching và GPU Instancing gộp nhiều lệnh vẽ có cùng vật liệu/mesh lại, giúp giảm đáng kể số lượng Draw Calls."
  },
  {
    id: "AGU_Q2_12",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Which built-in Unity window shows real-time CPU, rendering, and memory usage over a sequence of frames?",
    options: [
      "a. The Animation window",
      "b. The Console window",
      "c. The Inspector window",
      "d. The Profiler window"
    ],
    correctIndex: 3,
    keyword_anchor: "Real-time CPU/Rendering/Memory over frames = Profiler window",
    highlight_words: ["real-time CPU, rendering, and memory usage", "Profiler window"],
    explanation: "Cửa sổ Profiler hiển thị biểu đồ chi tiết CPU, GPU, Rendering và Memory theo từng khung hình theo thời gian thực."
  },
  {
    id: "AGU_Q2_13",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "What is the main performance-related motivation behind Unity's Data-Oriented Technology Stack (DOTS/ECS) compared to traditional GameObject/MonoBehaviour code?",
    options: [
      "a. It automatically converts all 2D games into 3D games",
      "b. It removes the need for a Profiler window entirely",
      "c. It organizes data in memory in a more cache-friendly way and enables better use of multiple CPU cores, improving performance at scale",
      "d. It eliminates the need to ever profile the game"
    ],
    correctIndex: 2,
    keyword_anchor: "DOTS/ECS = Cache-friendly memory + Multi-core CPU",
    highlight_words: ["DOTS/ECS", "cache-friendly", "multiple CPU cores", "performance at scale"],
    explanation: "DOTS/ECS sắp xếp dữ liệu liền kề thân thiện với CPU cache và tận dụng đa nhân CPU để xử lý quy mô cực lớn."
  },
  {
    id: "AGU_Q2_14",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Which Profiler window module specifically breaks down how much frame time is spent on scripts, physics, and other CPU-side work?",
    options: [
      "a. The Global Illumination module",
      "b. The Physics 2D module only",
      "c. The CPU Usage module",
      "d. The Audio module"
    ],
    correctIndex: 2,
    keyword_anchor: "Scripts/Physics/CPU-side time = CPU Usage module",
    highlight_words: ["scripts, physics, and other CPU-side work", "CPU Usage module"],
    explanation: "Module CPU Usage trong Profiler bóc tách chi tiết thời gian CPU dành cho scripts, vật lý, rendering và GC."
  },
  {
    id: "AGU_Q2_15",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Which Profiler-related module or view focuses on rendering statistics such as batches, triangles, and SetPass calls?",
    options: [
      "a. The Audio module",
      "b. The Rendering module",
      "c. The UI module",
      "d. The Physics module"
    ],
    correctIndex: 1,
    keyword_anchor: "Batches, triangles, SetPass calls = Rendering module",
    highlight_words: ["batches, triangles, and SetPass calls", "Rendering module"],
    explanation: "Module Rendering hiển thị các thông số đồ họa như số lượng Batches, Triangles, Vertices và SetPass calls."
  },
  {
    id: "AGU_Q2_16",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Why might a developer use a Development Build with the Profiler connected while testing on an actual mobile device?",
    options: [
      "a. To measure real on-device performance, since editor performance can differ significantly from an actual build running on the target hardware",
      "b. Because mobile devices cannot run release builds",
      "c. Because Development Builds run faster than release builds",
      "d. Because the Profiler cannot connect to the Editor at all"
    ],
    correctIndex: 0,
    keyword_anchor: "Profile on target device = Editor timings differ from real hardware",
    highlight_words: ["Development Build", "actual mobile device", "real on-device performance"],
    explanation: "Hiệu năng trên Unity Editor có nhiều overhead khác hẳn máy thật, nên cần nối Profiler với bản Development Build trên thiết bị đích."
  },
  {
    id: "AGU_Q2_17",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "What is a reasonable general workflow order when optimizing game performance?",
    options: [
      "a. Only optimize graphics settings, since scripts never affect performance",
      "b. Rewrite all code from scratch before ever profiling",
      "c. Profile to find the actual bottleneck, optimize that specific area, then re-profile to confirm the improvement",
      "d. Skip profiling and optimize whichever code looks the longest"
    ],
    correctIndex: 2,
    keyword_anchor: "Workflow = Profile -> Optimize bottleneck -> Re-profile",
    highlight_words: ["workflow order", "Profile to find", "optimize that specific area", "re-profile"],
    explanation: "Quy trình tối ưu chuẩn: Đo đạc tìm đúng điểm nghẽn -> Tối ưu đúng chỗ đó -> Đo lại để xác nhận hiệu quả."
  },
  {
    id: "AGU_Q2_18",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Which of these is a valid way to reduce unnecessary per-frame allocations in a script's Update() method?",
    options: [
      "a. Increasing the target frame rate setting",
      "b. Reusing existing objects/arrays and caching references instead of creating new ones every frame",
      "c. Adding more Debug.Log() calls every frame",
      "d. Disabling the Profiler window"
    ],
    correctIndex: 1,
    keyword_anchor: "Reduce per-frame allocations = Reuse objects/arrays + Cache references",
    highlight_words: ["reduce unnecessary per-frame allocations", "Reusing existing objects/arrays", "caching references"],
    explanation: "Tái sử dụng mảng/object có sẵn và lưu cache tham chiếu thay vì cấp phát mới mỗi frame."
  },
  {
    id: "AGU_Q2_19",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "What is a practical downside of leaving \"Deep Profile\" enabled for extended, everyday testing sessions?",
    options: [
      "a. It permanently changes the project's build settings",
      "b. It only works with 2D projects",
      "c. It disables the ability to take memory snapshots",
      "d. The heavy per-call instrumentation overhead can distort timing results and slow the game down noticeably"
    ],
    correctIndex: 3,
    keyword_anchor: "Deep Profile downside = Heavy overhead distorts timing & slows game",
    highlight_words: ["Deep Profile", "downside", "instrumentation overhead", "slow the game down"],
    explanation: "Deep Profile ghi nhận mọi lời gọi hàm nên tạo overhead rất nặng, làm chậm game và sai lệch thời gian thực tế."
  },
  {
    id: "AGU_Q2_20",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Why is caching a component reference in Awake() or Start(), instead of calling GetComponent() every frame, considered good practice for code architecture?",
    options: [
      "a. It prevents the object from ever being destroyed",
      "b. It avoids repeating an expensive lookup every frame, improving CPU performance in hot code paths",
      "c. It is required for the script to compile correctly",
      "d. It automatically improves the game's visual quality"
    ],
    correctIndex: 1,
    keyword_anchor: "Cache in Awake/Start = Avoid expensive lookup in hot code paths",
    highlight_words: ["caching a component reference", "avoids repeating an expensive lookup", "hot code paths"],
    explanation: "Cache component một lần ở Awake/Start giúp tránh lặp lại thao tác tìm kiếm tốn CPU trong các vòng lặp chạy liên tục."
  },
  {
    id: "AGU_Q2_21",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Which scenario best illustrates a GPU-bound performance bottleneck rather than a CPU-bound one?",
    options: [
      "a. Frame time is dominated by a single script performing a slow search every frame, while rendering work is minimal",
      "b. Frame time is dominated by a large number of complex shaders and high-resolution overdraw, even though script execution time is low",
      "c. The game's build size is larger than expected",
      "d. The game runs slowly only while paused in the Editor"
    ],
    correctIndex: 1,
    keyword_anchor: "GPU-bound = Complex shaders + High-res overdraw (low script time)",
    highlight_words: ["GPU-bound", "complex shaders", "high-resolution overdraw"],
    explanation: "Nghẽn GPU xảy ra khi thời gian xử lý script thấp nhưng card đồ họa quá tải vì shader phức tạp và overdraw độ phân giải cao."
  },
  {
    id: "AGU_Q2_22",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Why is it useful to compare a \"before\" and \"after\" profiler capture when applying a performance optimization?",
    options: [
      "a. Because Unity requires two captures before it allows a build",
      "b. To verify with real data whether the change actually improved performance, rather than assuming it helped",
      "c. Because comparing captures automatically applies further optimizations",
      "d. Because a single capture cannot be viewed in the Profiler window"
    ],
    correctIndex: 1,
    keyword_anchor: "Compare before/after = Verify with real data, don't assume",
    highlight_words: ["before\" and \"after\"", "verify with real data", "actually improved performance"],
    explanation: "So sánh dữ liệu trước và sau khi sửa giúp kiểm chứng khách quan bằng số liệu thay vì đoán mò."
  },
  {
    id: "AGU_Q2_23",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Why should optimization generally be done after profiling rather than before?",
    options: [
      "a. Profiling automatically rewrites slow code for you",
      "b. Optimization is only relevant for mobile platforms",
      "c. Profiling first ensures effort is spent on the actual bottleneck instead of guessing where performance problems might be",
      "d. Optimization always has to be done before any code is written"
    ],
    correctIndex: 2,
    keyword_anchor: "Profile before optimize = Spend effort on actual bottleneck",
    highlight_words: ["after profiling", "actual bottleneck", "instead of guessing"],
    explanation: "Đo trước khi tối ưu giúp tập trung công sức đúng vào điểm nghẽn thật sự, tránh tối ưu mù quáng."
  },
  {
    id: "AGU_Q2_24",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "A developer notices frequent short freezes (\"hitches\") during gameplay that correlate with spikes in garbage collection. Which optimization approach is most directly relevant?",
    options: [
      "a. Increasing the resolution of the game's textures",
      "b. Adding more lights to the scene",
      "c. Switching the project from 3D to 2D",
      "d. Reducing per-frame heap allocations, for example by using object pooling and caching references"
    ],
    correctIndex: 3,
    keyword_anchor: "GC hitches -> Reduce per-frame heap allocations (pooling & caching)",
    highlight_words: ["hitches", "spikes in garbage collection", "Reducing per-frame heap allocations", "object pooling"],
    explanation: "Giật khựng do GC spike được khắc phục trực tiếp bằng cách giảm cấp phát heap mỗi frame (dùng Object Pooling, cache)."
  },
  {
    id: "AGU_Q2_25",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "If a game targets 60 frames per second, what is the approximate time budget available per frame?",
    options: [
      "a. About 100 milliseconds",
      "b. About 1 millisecond",
      "c. About 16.6 milliseconds",
      "d. About 33.3 milliseconds"
    ],
    correctIndex: 2,
    keyword_anchor: "60 FPS Budget = 1000ms / 60 = 16.6 ms",
    highlight_words: ["60 frames per second", "time budget", "16.6 milliseconds"],
    explanation: "1000 ms / 60 FPS ≈ 16.67 ms cho mỗi khung hình (30 FPS là 33.3 ms)."
  },
  {
    id: "AGU_Q2_26",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Which Unity tool lets a developer inspect the individual draw calls and rendering state for a single frame to diagnose GPU-side bottlenecks?",
    options: [
      "a. The Frame Debugger",
      "b. The Animator window",
      "c. The Tile Palette",
      "d. The Lighting window"
    ],
    correctIndex: 0,
    keyword_anchor: "Inspect individual draw calls in 1 frame = Frame Debugger",
    highlight_words: ["individual draw calls", "single frame", "Frame Debugger"],
    explanation: "Frame Debugger cho phép dừng 1 frame và soi từng Draw Call cùng trạng thái render để tìm lỗi phá batching/nghẽn GPU."
  },
  {
    id: "AGU_Q2_27",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "What does Unity's \"Deep Profile\" mode do in the Profiler window?",
    options: [
      "a. It automatically removes unused assets from the build",
      "b. It disables all rendering to speed up testing",
      "c. It profiles every function call in the project's scripts for more detailed data, at the cost of extra performance overhead",
      "d. It permanently reduces the game's memory usage"
    ],
    correctIndex: 2,
    keyword_anchor: "Deep Profile = Profiles EVERY function call (detailed, high overhead)",
    highlight_words: ["Deep Profile", "every function call", "extra performance overhead"],
    explanation: "Deep Profile đo từng lời gọi hàm C# để cho số liệu chi tiết nhất nhưng đổi lại tốn rất nhiều hiệu năng."
  },
  {
    id: "AGU_Q2_28",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Why is it important to profile a game on the actual target hardware (e.g. a specific console or mobile device) rather than only in the Unity Editor?",
    options: [
      "a. Profiling only works when connected to the internet",
      "b. Editor performance overhead and hardware capability differ from a real build running on the target device, so Editor timings can be misleading",
      "c. The Editor cannot show any performance information at all",
      "d. Target hardware always runs faster than the Editor"
    ],
    correctIndex: 1,
    keyword_anchor: "Editor vs Target device = Different overhead & hardware -> Editor timings misleading",
    highlight_words: ["actual target hardware", "Editor timings can be misleading"],
    explanation: "Máy tính chạy Editor có cấu hình và overhead khác xa thiết bị đích (điện thoại/console), nên số liệu trên Editor dễ gây hiểu nhầm."
  },
  {
    id: "AGU_Q2_29",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "Which of the following best distinguishes a CPU-bound bottleneck from a GPU-bound bottleneck?",
    options: [
      "a. CPU-bound means the game is using too much disk storage",
      "b. CPU-bound only happens on mobile devices, GPU-bound only happens on consoles",
      "c. CPU-bound and GPU-bound always mean the exact same thing",
      "d. CPU-bound means the frame time is limited mainly by script logic, physics, or game systems, while GPU-bound means it is limited mainly by rendering work"
    ],
    correctIndex: 3,
    keyword_anchor: "CPU-bound = Scripts/Physics; GPU-bound = Rendering work",
    highlight_words: ["CPU-bound", "script logic, physics", "GPU-bound", "rendering work"],
    explanation: "CPU-bound nghẽn ở logic script/vật lý/hệ thống, còn GPU-bound nghẽn ở khâu render đồ họa (shader, pixel, overdraw)."
  },
  {
    id: "AGU_Q2_30",
    subject: "FE AGU",
    module: "Quiz 2: Performance & Profiling",
    question: "What is the primary purpose of the Unity Memory Profiler package?",
    options: [
      "a. To generate performance reports for network latency",
      "b. To replace the standard Profiler window entirely",
      "c. To capture and analyze detailed memory snapshots, showing exactly how much memory different systems and objects are using",
      "d. To automatically compress all textures in the project"
    ],
    correctIndex: 2,
    keyword_anchor: "Memory Profiler package = Capture & analyze detailed memory snapshots",
    highlight_words: ["Memory Profiler package", "detailed memory snapshots", "how much memory"],
    explanation: "Memory Profiler package chuyên dùng để chụp và phân tích sâu các snapshot bộ nhớ của từng hệ thống và object."
  },

  // ================= QUIZ 3: UNITY NETCODE & MULTIPLAYER (30 QUESTIONS) =================
  {
    id: "AGU_Q3_1",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "In Unity Netcode for GameObjects, what does a \"Host\" represent?",
    options: [
      "a. A single instance that acts as both the server and a client at the same time",
      "b. A player with administrator rights over other players' accounts",
      "c. A tool used only for offline testing",
      "d. A dedicated machine that only relays network packets without running game logic"
    ],
    correctIndex: 0,
    keyword_anchor: "Host = Server + Client at the same time",
    highlight_words: ["Host", "both the server and a client"],
    explanation: "Host là một máy vừa đóng vai trò Server điều phối vừa là một Client tham gia chơi trực tiếp."
  },
  {
    id: "AGU_Q3_2",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "Which component must be attached to a GameObject to make it recognized and tracked by the networking system in Netcode for GameObjects?",
    options: [
      "a. Camera",
      "b. Rigidbody",
      "c. NetworkObject",
      "d. AudioSource"
    ],
    correctIndex: 2,
    keyword_anchor: "NGO tracked GameObject component = NetworkObject",
    highlight_words: ["recognized and tracked", "Netcode for GameObjects", "NetworkObject"],
    explanation: "Trong Netcode for GameObjects, mọi GameObject đồng bộ mạng đều phải gắn component NetworkObject."
  },
  {
    id: "AGU_Q3_3",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "What does \"ownership\" of a NetworkObject determine in Netcode for GameObjects?",
    options: [
      "a. Whether the object can be seen in the Unity Editor",
      "b. Which participant (a specific client or the server) has the authority to write or change certain networked data for that object",
      "c. Which player purchased the game first",
      "d. Which artist created the 3D model for that object"
    ],
    correctIndex: 1,
    keyword_anchor: "Ownership = Who has authority to write/change networked data",
    highlight_words: ["ownership", "authority to write or change", "networked data"],
    explanation: "Ownership xác định máy nào (client sở hữu hoặc server) có quyền ghi/thay đổi dữ liệu mạng của NetworkObject đó."
  },
  {
    id: "AGU_Q3_4",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "In a typical multiplayer client-server architecture, which side is generally considered the authoritative source of truth for game state?",
    options: [
      "a. The Unity Editor",
      "b. The server",
      "c. The player with the lowest network latency",
      "d. Every client equally"
    ],
    correctIndex: 1,
    keyword_anchor: "Authoritative source of truth = The server",
    highlight_words: ["authoritative source of truth", "The server"],
    explanation: "Trong mô hình Client-Server, Server luôn là nguồn chân lý tối cao (authoritative) quyết định trạng thái game."
  },
  {
    id: "AGU_Q3_5",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "What typically happens if a client (that is neither the owner nor the server) attempts to directly write to a NetworkVariable it does not have permission to modify?",
    options: [
      "a. The NetworkVariable is permanently deleted",
      "b. The write is not permitted and generally has no effect on the synchronized value, depending on the variable's configured write permissions",
      "c. The entire game session is instantly disconnected",
      "d. The value is always immediately and correctly applied for everyone"
    ],
    correctIndex: 1,
    keyword_anchor: "Unauthorized NetworkVariable write = Not permitted / No effect",
    highlight_words: ["does not have permission", "not permitted", "no effect on the synchronized value"],
    explanation: "Nếu không có quyền ghi (write permissions), thao tác ghi của client sẽ bị chặn và không ảnh hưởng tới giá trị đồng bộ."
  },
  {
    id: "AGU_Q3_6",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "What is a NetworkVariable in Netcode for GameObjects?",
    options: [
      "a. A special type of texture used for network diagnostics",
      "b. A local-only variable that cannot be modified after Start()",
      "c. A variable whose value is automatically synchronized across the network between the server/owner and clients",
      "d. A variable that only exists in the Unity Editor and never during runtime"
    ],
    correctIndex: 2,
    keyword_anchor: "NetworkVariable = Automatically synchronized variable across network",
    highlight_words: ["NetworkVariable", "automatically synchronized across the network"],
    explanation: "NetworkVariable là biến đặc biệt tự động đồng bộ giá trị qua mạng giữa server/owner và các client."
  },
  {
    id: "AGU_Q3_7",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "In Netcode for GameObjects, what best describes the \"single source of truth\" concept?",
    options: [
      "a. Each connected player's device stores a different, unrelated game world",
      "b. Every client independently decides its own version of the truth and never needs to agree with others",
      "c. The Unity Editor is always the single source of truth, even for a running build",
      "d. The server holds one authoritative version of the game state, which all clients replicate and display"
    ],
    correctIndex: 3,
    keyword_anchor: "Single source of truth = Server holds authoritative state, clients replicate",
    highlight_words: ["single source of truth", "server holds one authoritative version", "clients replicate"],
    explanation: "Server giữ một phiên bản trạng thái chuẩn duy nhất, tất cả client chỉ sao chép và hiển thị lại từ đó."
  },
  {
    id: "AGU_Q3_8",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "What best describes an RPC (Remote Procedure Call) in a networking context?",
    options: [
      "a. A type of file used to store network configuration settings",
      "b. A method invocation that is sent over the network to be executed on another machine, such as the server or a client",
      "c. A built-in Unity shader function",
      "d. A call that only executes locally and never leaves the machine"
    ],
    correctIndex: 1,
    keyword_anchor: "RPC = Method invocation sent over network to run on another machine",
    highlight_words: ["RPC", "method invocation", "sent over the network", "executed on another machine"],
    explanation: "RPC là lời gọi hàm được gửi qua mạng để thực thi trên một máy khác (từ client lên server hoặc ngược lại)."
  },
  {
    id: "AGU_Q3_9",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "Why do many real-time multiplayer games use client-side prediction?",
    options: [
      "a. To hide network latency by letting the local player see immediate feedback from their input before the server confirms it",
      "b. To reduce the size of texture assets",
      "c. To completely eliminate the need for a server",
      "d. To disable physics simulation on the client"
    ],
    correctIndex: 0,
    keyword_anchor: "Client-side prediction = Hide latency via immediate local feedback",
    highlight_words: ["client-side prediction", "hide network latency", "immediate feedback"],
    explanation: "Client-side prediction cho phép người chơi thấy phản hồi ngay lập tức khi bấm nút trước khi server kịp xác nhận, giúp giấu độ trễ mạng."
  },
  {
    id: "AGU_Q3_10",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "What must typically be configured in the NetworkManager so that a specific prefab can be spawned over the network at runtime?",
    options: [
      "a. The prefab must be added to the Network Prefabs list",
      "b. The prefab must be renamed to \"NetworkPrefab\"",
      "c. The prefab must be converted into a Texture2D asset",
      "d. The prefab must be deleted from the Project window after use"
    ],
    correctIndex: 0,
    keyword_anchor: "Spawn prefab over network = Add to Network Prefabs list",
    highlight_words: ["NetworkManager", "spawned over the network", "Network Prefabs list"],
    explanation: "Muốn spawn prefab qua mạng bằng NGO, prefab đó bắt buộc phải được đăng ký vào danh sách Network Prefabs trong NetworkManager."
  },
  {
    id: "AGU_Q3_11",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "Why is interpolation commonly applied to a networked object's movement (such as through NetworkTransform) on the receiving end?",
    options: [
      "a. To increase the object's network bandwidth usage without any visual benefit",
      "b. To disable physics for that object entirely",
      "c. To permanently change the object's actual authoritative position on the server",
      "d. To smooth out visual movement between infrequent network updates, rather than showing abrupt, jerky position changes"
    ],
    correctIndex: 3,
    keyword_anchor: "Interpolation = Smooth movement between network updates",
    highlight_words: ["interpolation", "NetworkTransform", "smooth out visual movement", "jerky"],
    explanation: "Interpolation nội suy chuyển động giữa các gói tin mạng rời rạc để nhân vật di chuyển mượt mà, không bị giật cục."
  },
  {
    id: "AGU_Q3_12",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "Why is it important to test a Netcode game using multiple actual running instances (e.g. multiple builds or Editor + build), rather than only Play Mode with a single instance?",
    options: [
      "a. Because a single instance always represents perfect real-world network conditions",
      "b. Because Play Mode cannot run any script code",
      "c. To observe real network behavior, timing, and synchronization issues that would not appear when testing with just one instance",
      "d. Because Unity requires at least three installed licenses to test"
    ],
    correctIndex: 2,
    keyword_anchor: "Test multiple instances = Observe real network timing & sync issues",
    highlight_words: ["multiple actual running instances", "real network behavior", "synchronization issues"],
    explanation: "Chạy nhiều instance thật (Editor + Build) mới lộ ra các lỗi đồng bộ, thứ tự spawn và độ trễ mạng mà chạy 1 máy không thấy."
  },
  {
    id: "AGU_Q3_13",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "Which of the following is a common cause of desynchronization (\"desync\") bugs in a networked game?",
    options: [
      "a. Testing the game with only one connected client",
      "b. Allowing client-only logic to change game state that should instead be determined authoritatively by the server",
      "c. Adding a NetworkObject component to a prefab",
      "d. Using a NetworkManager in the scene"
    ],
    correctIndex: 1,
    keyword_anchor: "Desync cause = Client-only logic changing server-authoritative state",
    highlight_words: ["desynchronization", "desync", "client-only logic", "authoritatively by the server"],
    explanation: "Desync thường xảy ra khi để client tự ý thay đổi trạng thái game lẽ ra phải do server quyết định và đồng bộ."
  },
  {
    id: "AGU_Q3_14",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "Which base class do scripts typically inherit from, instead of MonoBehaviour, in order to use Netcode features like RPCs and NetworkVariables?",
    options: [
      "a. EditorWindow",
      "b. ScriptableObject",
      "c. StateMachineBehaviour",
      "d. NetworkBehaviour"
    ],
    correctIndex: 3,
    keyword_anchor: "RPCs & NetworkVariables base class = NetworkBehaviour",
    highlight_words: ["inherit from", "RPCs and NetworkVariables", "NetworkBehaviour"],
    explanation: "Script muốn dùng RPC và NetworkVariable trong NGO phải kế thừa từ `NetworkBehaviour` thay vì `MonoBehaviour`."
  },
  {
    id: "AGU_Q3_15",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "What is a key trade-off between using a \"Host\" model versus a separate \"Dedicated Server\" model in Netcode for GameObjects?",
    options: [
      "a. A Host is simpler to set up since one instance handles both server and client roles, but that instance's own connection and performance directly affect all players; a Dedicated Server separates these concerns for better scalability",
      "b. A Host model never needs a NetworkManager, while a Dedicated Server always does",
      "c. A Host model always supports more players than a Dedicated Server",
      "d. A Dedicated Server cannot use NetworkVariables"
    ],
    correctIndex: 0,
    keyword_anchor: "Host = Simple, but host's lag affects all; Dedicated = Scalable",
    highlight_words: ["Host", "Dedicated Server", "simpler to set up", "better scalability"],
    explanation: "Host dễ dựng nhưng nếu máy host lag/thoát thì cả phòng bị ảnh hưởng; Dedicated Server tách biệt nên ổn định và mở rộng tốt hơn."
  },
  {
    id: "AGU_Q3_16",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "Which Netcode for GameObjects component automatically synchronizes a networked object's position and rotation across the network?",
    options: [
      "a. AudioListener",
      "b. NetworkTransform",
      "c. Light",
      "d. NetworkManager"
    ],
    correctIndex: 1,
    keyword_anchor: "Sync position & rotation = NetworkTransform",
    highlight_words: ["position and rotation", "NetworkTransform"],
    explanation: "Component NetworkTransform tự động đồng bộ vị trí, góc xoay (và scale) của đối tượng qua mạng."
  },
  {
    id: "AGU_Q3_17",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "What is the key difference between a ServerRpc and a ClientRpc in Netcode for GameObjects?",
    options: [
      "a. A ServerRpc is called by a client and executes on the server; a ClientRpc is called by the server and executes on clients",
      "b. They are functionally identical and can be used interchangeably",
      "c. ServerRpc only works in single-player mode",
      "d. ClientRpc can only be triggered by pressing a specific keyboard key"
    ],
    correctIndex: 0,
    keyword_anchor: "ServerRpc = Client calls, Server executes; ClientRpc = Server calls, Clients execute",
    highlight_words: ["ServerRpc", "ClientRpc", "called by a client and executes on the server", "called by the server and executes on clients"],
    explanation: "ServerRpc: Client gọi -> chạy trên Server. ClientRpc: Server gọi -> chạy trên các Client."
  },
  {
    id: "AGU_Q3_18",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "A multiplayer game shows player positions that occasionally \"snap\" or jump unexpectedly for other players. Which networking concept is most directly related to diagnosing and improving this?",
    options: [
      "a. Network synchronization and interpolation of networked transforms, such as through NetworkTransform settings and tick rate",
      "b. The Unity Editor's Scene view grid settings",
      "c. The number of Import Settings applied to textures",
      "d. The resolution setting of the Main Camera"
    ],
    correctIndex: 0,
    keyword_anchor: "Snapping/jumping positions -> Check NetworkTransform interpolation & tick rate",
    highlight_words: ["snap\" or jump", "interpolation", "NetworkTransform", "tick rate"],
    explanation: "Hiện tượng nhân vật bị giật/nhảy vị trí liên quan trực tiếp đến thiết lập đồng bộ, nội suy (interpolation) của NetworkTransform và tick rate."
  },
  {
    id: "AGU_Q3_19",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "What is Netcode for Entities primarily designed for, compared to Netcode for GameObjects?",
    options: [
      "a. Only single-player offline games",
      "b. Replacing the need for any server at all",
      "c. Rendering cutscenes and cinematics",
      "d. High-performance, large-scale simulations built on Unity's Data-Oriented Technology Stack (DOTS/ECS)"
    ],
    correctIndex: 3,
    keyword_anchor: "Netcode for Entities = High-performance large-scale DOTS/ECS",
    highlight_words: ["Netcode for Entities", "large-scale simulations", "DOTS/ECS"],
    explanation: "Netcode for Entities được thiết kế cho các game/mô phỏng quy mô rất lớn chạy trên nền DOTS/ECS."
  },
  {
    id: "AGU_Q3_20",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "What is the main responsibility of the NetworkManager component in a Netcode for GameObjects project?",
    options: [
      "a. Handling only local single-player input",
      "b. Managing the network connection lifecycle, such as starting a host, server, or client, and tracking connected players",
      "c. Compressing texture assets for smaller build sizes",
      "d. Rendering the game's 3D graphics"
    ],
    correctIndex: 1,
    keyword_anchor: "NetworkManager = Connection lifecycle (Start Host/Server/Client) & Players",
    highlight_words: ["NetworkManager", "connection lifecycle", "starting a host, server, or client"],
    explanation: "NetworkManager quản lý vòng đời kết nối mạng (StartHost, StartServer, StartClient) và theo dõi danh sách người chơi kết nối."
  },
  {
    id: "AGU_Q3_21",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "What does \"network tick rate\" generally refer to, and why does it matter?",
    options: [
      "a. The number of scenes in the build settings",
      "b. How frequently the server sends or processes network state updates per second, which affects the smoothness and responsiveness of synchronization",
      "c. The resolution of the game's textures",
      "d. The number of players allowed in a single match"
    ],
    correctIndex: 1,
    keyword_anchor: "Tick rate = Updates per second -> Smoothness & responsiveness",
    highlight_words: ["network tick rate", "frequently", "updates per second", "smoothness and responsiveness"],
    explanation: "Tick rate là tần suất server xử lý và gửi cập nhật trạng thái mạng mỗi giây, ảnh hưởng trực tiếp tới độ mượt và độ phản hồi."
  },
  {
    id: "AGU_Q3_22",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "Which type of component commonly serves as the low-level transport layer that Netcode for GameObjects uses to send and receive network data?",
    options: [
      "a. Unity Timeline",
      "b. Cinemachine",
      "c. TextMeshPro",
      "d. Unity Transport (UTP)"
    ],
    correctIndex: 3,
    keyword_anchor: "NGO low-level transport = Unity Transport (UTP)",
    highlight_words: ["low-level transport layer", "Unity Transport (UTP)"],
    explanation: "Unity Transport (UTP) là tầng truyền tải cấp thấp mặc định giúp NGO gửi và nhận gói tin mạng."
  },
  {
    id: "AGU_Q3_23",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "In which scenario would a developer most likely choose Netcode for Entities over Netcode for GameObjects?",
    options: [
      "a. A game that has no moving objects at all",
      "b. A large-scale multiplayer simulation with a very high number of networked entities, where CPU performance at scale is critical",
      "c. A simple two-player local co-op game with no network play",
      "d. A single-player puzzle game"
    ],
    correctIndex: 1,
    keyword_anchor: "Choose Netcode for Entities = Very high number of networked entities + CPU critical",
    highlight_words: ["Netcode for Entities", "large-scale multiplayer", "very high number of networked entities"],
    explanation: "Khi game có số lượng thực thể đồng bộ mạng cực lớn và hiệu năng CPU là yếu tố sống còn, ta chọn Netcode for Entities."
  },
  {
    id: "AGU_Q3_24",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "Which Netcode for GameObjects feature is most similar to a NetworkVariable, but designed specifically for synchronizing a list of items across the network?",
    options: [
      "a. NetworkTransform",
      "b. NetworkManager",
      "c. NetworkObject",
      "d. NetworkList"
    ],
    correctIndex: 3,
    keyword_anchor: "Sync a list of items = NetworkList",
    highlight_words: ["synchronizing a list of items", "NetworkList"],
    explanation: "NetworkList hoạt động tương tự NetworkVariable nhưng chuyên dùng để đồng bộ một danh sách (List) phần tử qua mạng."
  },
  {
    id: "AGU_Q3_25",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "What is the purpose of the OnNetworkSpawn() callback on a NetworkBehaviour?",
    options: [
      "a. It runs only once, the very first time Unity Editor is opened",
      "b. It runs when the object has been spawned across the network, allowing networked initialization logic to execute at the right time",
      "c. It permanently disables the object's Update() method",
      "d. It is called exclusively when the game is paused"
    ],
    correctIndex: 1,
    keyword_anchor: "OnNetworkSpawn() = Runs when spawned across network (safe init)",
    highlight_words: ["OnNetworkSpawn()", "spawned across the network", "networked initialization"],
    explanation: "OnNetworkSpawn() chạy đúng lúc đối tượng được spawn xong trên mạng, là nơi an toàn để khởi tạo dữ liệu mạng (thay cho Start)."
  },
  {
    id: "AGU_Q3_26",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "What is typically one of the first steps when setting up a brand-new Netcode for GameObjects project?",
    options: [
      "a. Write custom shader code before adding any networking",
      "b. Disable all physics in the project",
      "c. Delete the Main Camera from every scene",
      "d. Add a NetworkManager to the scene and configure its transport settings"
    ],
    correctIndex: 3,
    keyword_anchor: "First step NGO setup = Add NetworkManager + Configure transport",
    highlight_words: ["first steps", "Add a NetworkManager", "configure its transport"],
    explanation: "Bước đầu tiên khi dựng dự án NGO là thêm NetworkManager vào scene và cấu hình Unity Transport cho nó."
  },
  {
    id: "AGU_Q3_27",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "Who is typically allowed to invoke a ServerRpc method in Netcode for GameObjects?",
    options: [
      "a. A client (often the object's owner), sending a request that will actually execute on the server",
      "b. Only the Unity Editor itself, never a running build",
      "c. Only NPCs, never player-controlled objects",
      "d. Any random object in the scene, without restriction"
    ],
    correctIndex: 0,
    keyword_anchor: "Invoke ServerRpc = Client (owner) sends request -> Executes on Server",
    highlight_words: ["invoke a ServerRpc", "A client", "execute on the server"],
    explanation: "Client (thường là owner của object) gọi ServerRpc để gửi yêu cầu lên thực thi trên Server."
  },
  {
    id: "AGU_Q3_28",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "For a networked GameObject to appear correctly on all connected clients, what must generally happen first?",
    options: [
      "a. It must be manually duplicated in every client's scene file",
      "b. It must be tagged as \"Static\" in the Inspector",
      "c. It only needs a Rigidbody component",
      "d. It must be spawned (e.g. via NetworkObject.Spawn()) on the server/host, typically from a prefab registered with the NetworkManager"
    ],
    correctIndex: 3,
    keyword_anchor: "Appear on all clients = NetworkObject.Spawn() on Server/Host",
    highlight_words: ["appear correctly on all connected clients", "NetworkObject.Spawn()", "registered with the NetworkManager"],
    explanation: "Server/Host phải gọi `NetworkObject.Spawn()` từ một prefab đã đăng ký trong NetworkManager thì object mới xuất hiện đồng bộ ở mọi client."
  },
  {
    id: "AGU_Q3_29",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "What is \"network synchronization\" primarily concerned with in a multiplayer game?",
    options: [
      "a. Keeping the game state (such as positions, health, and actions) consistent across the server and all connected clients",
      "b. Compressing audio files for faster downloads",
      "c. Synchronizing the developer's local clock with an external time server",
      "d. Making sure every player has the same graphics settings"
    ],
    correctIndex: 0,
    keyword_anchor: "Network sync = Keep game state consistent across server & clients",
    highlight_words: ["network synchronization", "game state", "consistent across the server and all connected clients"],
    explanation: "Đồng bộ mạng nhằm giữ trạng thái game (vị trí, máu, hành động) nhất quán giữa server và tất cả client."
  },
  {
    id: "AGU_Q3_30",
    subject: "FE AGU",
    module: "Quiz 3: Unity Netcode & Multiplayer",
    question: "Why is it generally recommended that important gameplay decisions, such as damage calculations, be handled on the server rather than the client in an authoritative-server model?",
    options: [
      "a. Because clients are not capable of running any code",
      "b. Because Unity does not allow scripts to run on clients",
      "c. To reduce the risk of cheating and ensure there is a single consistent source of truth for game state",
      "d. Because servers always have better graphics hardware"
    ],
    correctIndex: 2,
    keyword_anchor: "Damage on server = Prevent cheating + Single source of truth",
    highlight_words: ["damage calculations", "handled on the server", "reduce the risk of cheating", "single consistent source of truth"],
    explanation: "Tính sát thương trên server giúp chống gian lận (hack client) và đảm bảo kết quả nhất quán cho toàn bộ người chơi."
  }
];
