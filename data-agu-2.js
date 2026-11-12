window.AGU_PART2_DATA = [
  // ================= QUIZ 4: PHOTON PUN & THIRD-PARTY NETWORKING (30 QUESTIONS) =================
  {
    id: "AGU_Q4_1",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "What is the role of the \"Master Client\" in a Photon PUN room?",
    options: [
      "a. A single client given special authority, since Photon rooms don't have a dedicated server by default, often used to run logic that only one participant should control",
      "b. The player with the highest score in that match",
      "c. A moderator who can ban other players from the game entirely",
      "d. The only player allowed to see the chat window"
    ],
    correctIndex: 0,
    keyword_anchor: "Master Client = Special-authority client running room-wide logic",
    highlight_words: ["Master Client", "special authority", "don't have a dedicated server"],
    explanation: "Vì phòng Photon PUN mặc định không có dedicated server chạy logic game, một client được chọn làm Master Client để điều phối logic chung (như spawn quái, tính giờ)."
  },
  {
    id: "AGU_Q4_2",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "Which of these is a genuine advantage of a hosted third-party networking solution over building a fully custom multiplayer backend?",
    options: [
      "a. No need to ever test the multiplayer features",
      "b. Faster time-to-market thanks to built-in matchmaking, relay infrastructure, and cross-platform support",
      "c. Guaranteed zero cost regardless of how many players use it",
      "d. Automatic elimination of all possible network cheating"
    ],
    correctIndex: 1,
    keyword_anchor: "3rd-party advantage = Faster time-to-market (matchmaking + relay)",
    highlight_words: ["advantage", "Faster time-to-market", "matchmaking, relay infrastructure"],
    explanation: "Dùng dịch vụ bên thứ 3 (như Photon) giúp ra mắt nhanh hơn nhờ có sẵn hệ thống matchmaking, relay server và hỗ trợ đa nền tảng."
  },
  {
    id: "AGU_Q4_3",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "What is a potential downside of relying on a hosted third-party networking service like Photon, compared to self-managed Netcode servers?",
    options: [
      "a. It prevents the game from ever supporting more than two players",
      "b. It requires the game to be built exclusively for consoles",
      "c. It becomes impossible to add any gameplay features",
      "d. Ongoing subscription or usage costs, along with reduced control over the underlying server infrastructure"
    ],
    correctIndex: 3,
    keyword_anchor: "3rd-party downside = Ongoing costs + Reduced server control",
    highlight_words: ["potential downside", "Ongoing subscription or usage costs", "reduced control"],
    explanation: "Nhược điểm là tốn chi phí thuê bao/lưu lượng liên tục và bị giảm quyền kiểm soát hạ tầng server bên dưới."
  },
  {
    id: "AGU_Q4_4",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "What is a key architectural difference between Photon PUN's default model and Unity Netcode's dedicated/host server model?",
    options: [
      "a. PUN requires a completely different game engine than Unity",
      "b. PUN typically has no true authoritative dedicated server by default, often relying on a Master Client, while Netcode for GameObjects supports a proper authoritative host or server",
      "c. PUN can only be used for single-player games",
      "d. Netcode for GameObjects cannot support more than two players"
    ],
    correctIndex: 1,
    keyword_anchor: "PUN = Master Client (no authoritative server); NGO = Authoritative Host/Server",
    highlight_words: ["architectural difference", "relying on a Master Client", "authoritative host or server"],
    explanation: "PUN mặc định dựa vào Master Client (client-authoritative), còn NGO hỗ trợ mô hình server/host có thẩm quyền thực thụ."
  },
  {
    id: "AGU_Q4_5",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "Why is it generally considered bad practice to trust client-sent data as absolute truth in an online multiplayer game, even when using a third-party networking service?",
    options: [
      "a. Because only the Unity Editor can safely send data over a network",
      "b. Clients can potentially be modified or hacked, so unvalidated client data could be exploited to cheat",
      "c. Because third-party services never allow clients to send any data",
      "d. Because client data is always corrupted during transmission"
    ],
    correctIndex: 1,
    keyword_anchor: "Never trust client data = Clients can be hacked/modified to cheat",
    highlight_words: ["bad practice to trust client-sent data", "modified or hacked", "exploited to cheat"],
    explanation: "Máy client nằm trong tay người chơi nên có thể bị sửa đổi/hack; tin tuyệt đối dữ liệu từ client rất dễ bị gian lận."
  },
  {
    id: "AGU_Q4_6",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "In Photon PUN, which component is typically attached to a GameObject so its data can be synchronized over the network, playing a role similar to NetworkObject in Unity Netcode?",
    options: [
      "a. PhotonView",
      "b. Rigidbody",
      "c. Camera",
      "d. AudioSource"
    ],
    correctIndex: 0,
    keyword_anchor: "PUN equivalent of NetworkObject = PhotonView",
    highlight_words: ["Photon PUN", "similar to NetworkObject", "PhotonView"],
    explanation: "PhotonView là component định danh và đồng bộ GameObject qua mạng trong Photon PUN, tương đương NetworkObject của NGO."
  },
  {
    id: "AGU_Q4_7",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "When comparing concepts between Photon PUN and Unity Netcode for GameObjects, which PUN concept most closely corresponds to Netcode's NetworkObject?",
    options: [
      "a. PhotonView",
      "b. PhotonNetwork",
      "c. Lobby",
      "d. Master Client"
    ],
    correctIndex: 0,
    keyword_anchor: "NetworkObject (NGO) <-> PhotonView (PUN)",
    highlight_words: ["PhotonView", "corresponds to Netcode's NetworkObject"],
    explanation: "PhotonView trong PUN tương ứng trực tiếp với NetworkObject trong Unity Netcode."
  },
  {
    id: "AGU_Q4_8",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "What does \"matchmaking\" mean in the context of a third-party multiplayer networking service?",
    options: [
      "a. A tool for matching code style across a team's scripts",
      "b. A feature that automatically balances a game's difficulty",
      "c. The process of pairing 3D models with matching textures",
      "d. The process of automatically grouping players into game sessions or rooms based on criteria like region or room settings"
    ],
    correctIndex: 3,
    keyword_anchor: "Matchmaking = Auto-group players into rooms by region/criteria",
    highlight_words: ["matchmaking", "automatically grouping players", "sessions or rooms"],
    explanation: "Matchmaking là quá trình tự động ghép người chơi vào các phòng/trận đấu dựa trên khu vực, chế độ chơi hoặc tiêu chí phòng."
  },
  {
    id: "AGU_Q4_9",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "What is a common reason a development team might choose a third-party service like Photon PUN instead of building a fully custom multiplayer backend?",
    options: [
      "a. It is the only way to compile a Unity project",
      "b. It automatically converts a 2D game into a 3D game",
      "c. It removes the need for a game to have any gameplay logic",
      "d. It provides ready-made matchmaking, relay servers, and room management, reducing development time and effort"
    ],
    correctIndex: 3,
    keyword_anchor: "Choose PUN = Ready-made matchmaking, relay & rooms -> Save time",
    highlight_words: ["ready-made matchmaking, relay servers, and room management", "reducing development time"],
    explanation: "Photon cung cấp sẵn matchmaking, relay server và quản lý phòng, giúp giảm rất nhiều thời gian và công sức phát triển."
  },
  {
    id: "AGU_Q4_10",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "What is meant by a \"third-party networking solution\" for Unity multiplayer development?",
    options: [
      "a. A version of Unity Netcode that only works with three players at a time",
      "b. A tool used exclusively for offline single-player testing",
      "c. A networking SDK or service built by a company other than Unity, such as Photon or Mirror, used instead of or alongside Unity's own Netcode packages",
      "d. A solution that requires no internet connection at all"
    ],
    correctIndex: 2,
    keyword_anchor: "Third-party networking = SDK/service not built by Unity (Photon, Mirror)",
    highlight_words: ["third-party networking solution", "company other than Unity", "Photon or Mirror"],
    explanation: "Giải pháp mạng bên thứ 3 là SDK/dịch vụ do công ty khác ngoài Unity phát triển (ví dụ Photon, Mirror)."
  },
  {
    id: "AGU_Q4_11",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "Which interface can a custom script implement in Photon PUN to manually control exactly what data a PhotonView sends and receives during synchronization?",
    options: [
      "a. IComparable",
      "b. IPunObservable",
      "c. IDisposable",
      "d. IEnumerator"
    ],
    correctIndex: 1,
    keyword_anchor: "Manual PhotonView sync interface = IPunObservable",
    highlight_words: ["manually control", "PhotonView sends and receives", "IPunObservable"],
    explanation: "Implement interface `IPunObservable` (và hàm `OnPhotonSerializeView`) để tự kiểm soát chính xác dữ liệu nào được gửi/nhận."
  },
  {
    id: "AGU_Q4_12",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "How are remote procedure calls typically triggered in Photon PUN?",
    options: [
      "a. By marking a method with the [PunRPC] attribute and calling it through photonView.RPC()",
      "b. By writing the method name directly into the Inspector's Tag field",
      "c. By adding a NetworkTransform component to the object",
      "d. By renaming the script file to \"RPC.cs\""
    ],
    correctIndex: 0,
    keyword_anchor: "PUN RPC = [PunRPC] attribute + photonView.RPC()",
    highlight_words: ["remote procedure calls", "[PunRPC]", "photonView.RPC()"],
    explanation: "Trong Photon PUN, hàm RPC được gắn attribute `[PunRPC]` và gọi thông qua `photonView.RPC(...)`."
  },
  {
    id: "AGU_Q4_13",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "Which PUN method is commonly used to instantiate a networked GameObject so that it appears for every player currently in the room?",
    options: [
      "a. Resources.UnloadUnusedAssets()",
      "b. PhotonNetwork.Instantiate()",
      "c. SceneManager.LoadScene()",
      "d. GameObject.CreatePrimitive()"
    ],
    correctIndex: 1,
    keyword_anchor: "Spawn networked object in PUN = PhotonNetwork.Instantiate()",
    highlight_words: ["instantiate a networked GameObject", "PhotonNetwork.Instantiate()"],
    explanation: "Hàm `PhotonNetwork.Instantiate()` tạo một GameObject đồng bộ xuất hiện trên máy của tất cả người chơi trong phòng."
  },
  {
    id: "AGU_Q4_14",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "In Photon PUN, what determines which fields or components are automatically synchronized by a given PhotonView by default?",
    options: [
      "a. The \"Observed Components\" list assigned to that PhotonView, such as a Transform or a custom script implementing IPunObservable",
      "b. The name of the scene the object is placed in",
      "c. The order in which scripts appear in the Inspector",
      "d. The color of the GameObject in the Hierarchy window"
    ],
    correctIndex: 0,
    keyword_anchor: "PhotonView syncs = Observed Components list",
    highlight_words: ["automatically synchronized by a given PhotonView", "Observed Components"],
    explanation: "Danh sách `Observed Components` trên PhotonView quyết định component/script nào được tự động đồng bộ liên tục."
  },
  {
    id: "AGU_Q4_15",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "What happens in Photon PUN when the current Master Client disconnects from a room?",
    options: [
      "a. The game automatically restarts from the main menu for everyone",
      "b. Photon automatically promotes another connected client in the room to become the new Master Client",
      "c. The entire room is immediately and permanently deleted",
      "d. All other players are disconnected as well"
    ],
    correctIndex: 1,
    keyword_anchor: "Master Client disconnects = Photon auto-promotes another client",
    highlight_words: ["Master Client disconnects", "automatically promotes another connected client"],
    explanation: "Khi Master Client thoát phòng, Photon tự động chuyển quyền Master Client cho một người chơi khác còn lại trong phòng."
  },
  {
    id: "AGU_Q4_16",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "Why do many third-party networking solutions rely on relay servers instead of direct peer-to-peer connections between players?",
    options: [
      "a. To work around NAT and firewall restrictions between players' home networks, ensuring more reliable connectivity",
      "b. Because peer-to-peer connections are illegal in most countries",
      "c. Because relay servers are always cheaper to run than any other option",
      "d. Because Unity does not allow any direct connections between devices"
    ],
    correctIndex: 0,
    keyword_anchor: "Relay servers = Bypass NAT & firewall restrictions for reliable connection",
    highlight_words: ["relay servers", "NAT and firewall restrictions", "reliable connectivity"],
    explanation: "Relay server giúp vượt qua rào cản NAT và tường lửa mạng gia đình, đảm bảo kết nối ổn định hơn P2P trực tiếp."
  },
  {
    id: "AGU_Q4_17",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "Why might a competitive multiplayer game prefer a fully authoritative dedicated-server architecture over a Master-Client (client-authoritative) model like default PUN behavior?",
    options: [
      "a. Because Master-Client models cannot support more than one player",
      "b. To reduce the risk of cheating, since a client-controlled authority could potentially be exploited by a modified client",
      "c. Because dedicated servers are always free to run",
      "d. Because Unity does not allow Master-Client logic in build settings"
    ],
    correctIndex: 1,
    keyword_anchor: "Competitive game -> Dedicated server = Reduce cheating risk",
    highlight_words: ["competitive multiplayer", "dedicated-server", "reduce the risk of cheating"],
    explanation: "Game thi đấu đối kháng cần Dedicated Server để tránh việc máy Master Client bị hack và gian lận kết quả."
  },
  {
    id: "AGU_Q4_18",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "What is a \"Room\" in Photon PUN?",
    options: [
      "a. A folder used to store project scripts",
      "b. A setting that controls texture compression",
      "c. A 3D model asset used for level design",
      "d. A virtual space where a specific group of connected players play together in one multiplayer session"
    ],
    correctIndex: 3,
    keyword_anchor: "Photon Room = Virtual space for a group of players in 1 session",
    highlight_words: ["Room", "virtual space", "multiplayer session"],
    explanation: "Room là không gian ảo nơi một nhóm người chơi kết nối và chơi cùng nhau trong một phiên trận đấu."
  },
  {
    id: "AGU_Q4_19",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "Besides Photon, which of the following is commonly mentioned as another third-party networking framework option for Unity multiplayer games?",
    options: [
      "a. Cinemachine",
      "b. Addressables",
      "c. Mirror",
      "d. Timeline"
    ],
    correctIndex: 2,
    keyword_anchor: "Other 3rd-party networking framework = Mirror",
    highlight_words: ["another third-party networking framework", "Mirror"],
    explanation: "Mirror là một framework mạng bên thứ 3 rất phổ biến khác cho Unity (bên cạnh Photon)."
  },
  {
    id: "AGU_Q4_20",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "What is Photon PUN primarily used for in a Unity game?",
    options: [
      "a. Real-time synchronization of game objects and data between multiple connected players via Photon's cloud relay servers",
      "b. Generating 3D character models from text prompts",
      "c. Managing version control for a Unity project",
      "d. Compiling shaders for different graphics APIs"
    ],
    correctIndex: 0,
    keyword_anchor: "Photon PUN = Real-time sync of objects/data via Photon cloud relay",
    highlight_words: ["Photon PUN", "Real-time synchronization", "cloud relay servers"],
    explanation: "Photon PUN dùng để đồng bộ thời gian thực các đối tượng và dữ liệu giữa nhiều người chơi thông qua cloud relay của Photon."
  },
  {
    id: "AGU_Q4_21",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "What are Photon \"Lobbies\" generally used for?",
    options: [
      "a. Rendering cutscene animations",
      "b. Compiling scripts before a build",
      "c. Grouping and filtering available rooms before a player joins one, for example by game mode or region",
      "d. Storing 3D models used in the game's main menu"
    ],
    correctIndex: 2,
    keyword_anchor: "Photon Lobbies = Group & filter available rooms before joining",
    highlight_words: ["Lobbies", "Grouping and filtering available rooms", "before a player joins"],
    explanation: "Lobby dùng để gom nhóm và lọc danh sách các phòng hiện có (theo chế độ, khu vực) trước khi người chơi vào phòng."
  },
  {
    id: "AGU_Q4_22",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "Why is it important to test a game across an actual internet connection, rather than only on localhost, when using a third-party networking service?",
    options: [
      "a. Because localhost testing is not supported by any third-party SDK",
      "b. Because localhost testing always shows worse performance than the internet",
      "c. To evaluate the real latency, packet loss, and connection reliability introduced by regional relay servers and real internet conditions",
      "d. Because third-party services block all localhost connections by policy"
    ],
    correctIndex: 2,
    keyword_anchor: "Test real internet = Evaluate real latency, packet loss & relay reliability",
    highlight_words: ["actual internet connection", "real latency, packet loss", "regional relay servers"],
    explanation: "Test qua mạng Internet thật giúp đánh giá đúng độ trễ (latency), mất gói tin (packet loss) và độ ổn định khi đi qua relay server."
  },
  {
    id: "AGU_Q4_23",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "What common feature do most third-party multiplayer SDKs (such as Photon and Mirror) provide out of the box, saving developers from building it from scratch?",
    options: [
      "a. Automatic generation of 3D character models",
      "b. RPCs and automatic state synchronization for networked objects",
      "c. Automatic level design based on player feedback",
      "d. Built-in voice-to-text subtitle generation"
    ],
    correctIndex: 1,
    keyword_anchor: "SDK out-of-the-box = RPCs + Automatic state sync",
    highlight_words: ["out of the box", "RPCs", "automatic state synchronization"],
    explanation: "Các SDK như Photon hay Mirror đều tích hợp sẵn cơ chế RPC và đồng bộ trạng thái tự động cho object mạng."
  },
  {
    id: "AGU_Q4_24",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "What is a practical limitation of relying entirely on a single third-party networking vendor for a commercial game's multiplayer backend?",
    options: [
      "a. The developer will be legally unable to update the game",
      "b. The game can no longer use any Unity built-in features",
      "c. The game will be unable to run on any platform",
      "d. Vendor lock-in - pricing changes, service downtime, or discontinued support can directly affect the game"
    ],
    correctIndex: 3,
    keyword_anchor: "3rd-party limitation = Vendor lock-in (pricing/downtime/discontinued)",
    highlight_words: ["practical limitation", "Vendor lock-in", "pricing changes, service downtime"],
    explanation: "Rủi ro phụ thuộc nhà cung cấp (Vendor lock-in): nếu họ tăng giá, sập server hoặc ngừng hỗ trợ thì game sẽ bị ảnh hưởng trực tiếp."
  },
  {
    id: "AGU_Q4_25",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "A student team is building a small classroom multiplayer prototype with a tight deadline and no budget for dedicated server hosting. Which type of solution would most directly address their constraints?",
    options: [
      "a. A solution with no networking code at all",
      "b. A single-player-only game design",
      "c. A hosted third-party networking service with built-in relay and matchmaking, such as Photon PUN",
      "d. A fully custom dedicated server built entirely from scratch"
    ],
    correctIndex: 2,
    keyword_anchor: "Tight deadline + No server budget = Hosted 3rd-party (Photon PUN)",
    highlight_words: ["tight deadline", "no budget", "hosted third-party networking service", "Photon PUN"],
    explanation: "Với nhóm sinh viên gấp thời gian và không có tiền thuê server riêng, dịch vụ hosted như Photon PUN (có gói miễn phí, sẵn relay) là tối ưu nhất."
  },
  {
    id: "AGU_Q4_26",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "Why is it generally important to synchronize only the necessary data (not every field) over the network when using a third-party solution like PUN?",
    options: [
      "a. To reduce bandwidth usage and network latency/overhead",
      "b. Because PUN has a strict limit of exactly one synchronized value per object",
      "c. Because synchronized data cannot be compressed",
      "d. Because unnecessary data automatically corrupts save files"
    ],
    correctIndex: 0,
    keyword_anchor: "Sync only necessary data = Reduce bandwidth & latency/overhead",
    highlight_words: ["synchronize only the necessary data", "reduce bandwidth usage", "latency/overhead"],
    explanation: "Chỉ đồng bộ dữ liệu thực sự cần thiết giúp tiết kiệm băng thông, giảm độ trễ và tránh vượt hạn mức gói tin của dịch vụ."
  },
  {
    id: "AGU_Q4_27",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "Which of the following is generally NOT a typical concern when integrating a third-party networking SDK such as Photon into a Unity project?",
    options: [
      "a. Learning the SDK's specific API for synchronization and RPCs",
      "b. Rewriting Unity's built-in rendering pipeline from scratch",
      "c. Understanding the SDK's pricing/usage limits",
      "d. Testing behavior across real network conditions, not just localhost"
    ],
    correctIndex: 1,
    keyword_anchor: "NOT a concern with Photon = Rewriting rendering pipeline from scratch",
    highlight_words: ["NOT a typical concern", "Rewriting Unity's built-in rendering pipeline"],
    explanation: "Tích hợp SDK mạng không liên quan gì đến việc viết lại hệ thống đồ họa (rendering pipeline) của Unity."
  },
  {
    id: "AGU_Q4_28",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "Which factor is most relevant when deciding between Unity's built-in Netcode for GameObjects and a third-party solution like Photon PUN for a specific project?",
    options: [
      "a. The version number of the Unity Editor's Console window",
      "b. The number of colors used in the game's UI",
      "c. Whether the game uses 2D or 3D physics exclusively",
      "d. Project requirements such as team size, budget, need for dedicated servers, and desired level of control over networking code"
    ],
    correctIndex: 3,
    keyword_anchor: "Choose NGO vs PUN = Team size, budget, dedicated server need, control",
    highlight_words: ["deciding between", "team size, budget, need for dedicated servers"],
    explanation: "Quyết định chọn NGO hay Photon dựa trên quy mô nhóm, ngân sách, nhu cầu dedicated server và mức độ kiểm soát code mạng."
  },
  {
    id: "AGU_Q4_29",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "What is one reason a small student or indie team might prefer a hosted service like Photon over running and maintaining their own dedicated servers?",
    options: [
      "a. Photon automatically ports the game to every platform",
      "b. Photon guarantees their game will become commercially successful",
      "c. They avoid the cost and effort of managing their own server infrastructure, since Photon's cloud handles relaying and matchmaking",
      "d. Photon eliminates the need to write any gameplay code"
    ],
    correctIndex: 2,
    keyword_anchor: "Indie prefers Photon = Avoid managing server infrastructure",
    highlight_words: ["avoid the cost and effort of managing their own server infrastructure", "cloud handles relaying"],
    explanation: "Đội indie nhỏ chọn Photon để đỡ tốn công sức và chi phí vận hành, bảo trì hạ tầng server riêng."
  },
  {
    id: "AGU_Q4_30",
    subject: "FE AGU",
    module: "Quiz 4: Photon PUN & Third-Party Networking",
    question: "What does checking PhotonNetwork.IsMasterClient typically verify in a PUN script?",
    options: [
      "a. Whether the local device has an active internet connection",
      "b. Whether the player has purchased the full version of the game",
      "c. Whether the local client currently holds the Master Client role within its room",
      "d. Whether the current scene has finished loading"
    ],
    correctIndex: 2,
    keyword_anchor: "PhotonNetwork.IsMasterClient = Is local client the room's Master Client?",
    highlight_words: ["PhotonNetwork.IsMasterClient", "local client", "holds the Master Client role"],
    explanation: "`PhotonNetwork.IsMasterClient` kiểm tra xem máy hiện tại có đang giữ vai trò Master Client trong phòng hay không."
  },

  // ================= QUIZ 5: UNITY INFERENCE ENGINE / SENTIS (30 QUESTIONS) =================
  {
    id: "AGU_Q5_1",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "In Unity's Inference Engine, what is a \"Model\" asset?",
    options: [
      "a. An imported representation of a trained neural network that can be used to create a Worker for running inference",
      "b. A 3D mesh used for character animation",
      "c. A type of Unity package manifest file",
      "d. A saved scene file"
    ],
    correctIndex: 0,
    keyword_anchor: "Model asset = Imported trained neural network -> Create Worker",
    highlight_words: ["Model\" asset", "trained neural network", "create a Worker"],
    explanation: "Model asset là tệp mạng nơ-ron đã huấn luyện được import vào Unity để từ đó tạo ra Worker chạy suy luận."
  },
  {
    id: "AGU_Q5_2",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "What advantage do GPU-backed tensors and computation generally provide over CPU-backed ones when running larger models?",
    options: [
      "a. They completely remove the need for an input tensor",
      "b. They automatically convert the model into a smaller file size",
      "c. They eliminate the need for any model validation",
      "d. They allow computation to run in parallel on the GPU, which is typically much faster for large tensor operations"
    ],
    correctIndex: 3,
    keyword_anchor: "GPU backend = Parallel computation -> Much faster for large tensors",
    highlight_words: ["GPU-backed", "run in parallel", "much faster for large tensor operations"],
    explanation: "GPU tính toán song song rất mạnh nên xử lý các phép toán Tensor kích thước lớn nhanh hơn CPU nhiều."
  },
  {
    id: "AGU_Q5_3",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "Which of the following is an example of a task a model could be trained to perform for use inside a game, such as for NPC decision making?",
    options: [
      "a. Managing the project's build pipeline settings",
      "b. Rendering the game's UI layout",
      "c. Predicting the most likely next NPC action based on input game-state features",
      "d. Automatically writing the game's entire source code"
    ],
    correctIndex: 2,
    keyword_anchor: "In-game AI model task = Predict next NPC action from game-state",
    highlight_words: ["NPC decision making", "Predicting the most likely next NPC action", "game-state features"],
    explanation: "Model AI trong game thường dùng để dự đoán hành động tiếp theo của NPC dựa trên dữ liệu trạng thái game đầu vào."
  },
  {
    id: "AGU_Q5_4",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "What is a common reason to use a smaller, more optimized model instead of a very large one for a real-time game feature?",
    options: [
      "a. Because Unity does not allow models larger than one megabyte",
      "b. Because larger models are always less accurate",
      "c. Because smaller models automatically train themselves during gameplay",
      "d. To reduce inference time and memory usage so it fits within the game's frame time budget"
    ],
    correctIndex: 3,
    keyword_anchor: "Smaller model = Less inference time & memory -> Fits frame budget",
    highlight_words: ["smaller, more optimized model", "reduce inference time and memory usage", "frame time budget"],
    explanation: "Model nhỏ gọn giúp giảm thời gian suy luận và tốn ít RAM hơn để nằm gọn trong ngân sách thời gian mỗi frame (frame budget)."
  },
  {
    id: "AGU_Q5_5",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "What must generally match between the runtime input data and the trained model for inference to work correctly in the Inference Engine?",
    options: [
      "a. The input must always be exactly one pixel in size",
      "b. The Unity Editor version must exactly match the version used to train the model",
      "c. The input tensor's shape and data type must match what the model expects",
      "d. The input's file name must match the model's file name exactly"
    ],
    correctIndex: 2,
    keyword_anchor: "Input must match model = Tensor shape + Data type",
    highlight_words: ["input data", "trained model", "shape and data type must match"],
    explanation: "Kích thước chiều (shape) và kiểu dữ liệu (data type) của Tensor đầu vào phải khớp hoàn toàn với yêu cầu của model."
  },
  {
    id: "AGU_Q5_6",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "Which of the following correctly orders typical tensor-related steps in an Inference Engine workflow?",
    options: [
      "a. Read the output Tensor before executing the Worker",
      "b. Execute the Worker before the Model asset has been imported",
      "c. Dispose of the input Tensor before creating it",
      "d. Create/format an input Tensor, execute the Worker, read the output Tensor, then dispose of tensors that are no longer needed"
    ],
    correctIndex: 3,
    keyword_anchor: "Tensor workflow = Create input -> Execute Worker -> Read output -> Dispose",
    highlight_words: ["Create/format an input Tensor", "execute the Worker", "read the output Tensor", "dispose"],
    explanation: "Quy trình chuẩn: Tạo input Tensor -> Chạy Worker -> Đọc output Tensor -> Giải phóng (Dispose) các Tensor không dùng nữa."
  },
  {
    id: "AGU_Q5_7",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "What is \"model quantization\" typically used for, especially when targeting limited hardware such as mobile devices?",
    options: [
      "a. Adding more layers to a neural network automatically",
      "b. Increasing a model's file size for higher visual fidelity",
      "c. Converting a model into a 3D mesh",
      "d. Reducing model size and numerical precision, for example converting weights to lower-precision numbers, to run faster with less memory"
    ],
    correctIndex: 3,
    keyword_anchor: "Quantization = Lower numerical precision -> Smaller, faster, less memory",
    highlight_words: ["model quantization", "Reducing model size and numerical precision", "run faster with less memory"],
    explanation: "Quantization giảm độ chính xác số học của trọng số (ví dụ từ float32 xuống int8/float16) để model nhẹ hơn, chạy nhanh hơn trên mobile."
  },
  {
    id: "AGU_Q5_8",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "What information does a tensor's \"shape\" describe?",
    options: [
      "a. The tensor's assigned layer in the Unity physics system",
      "b. The tensor's file compression format",
      "c. The color palette used by the tensor's associated texture",
      "d. The size of each dimension of the multi-dimensional array, such as batch size, channels, height, and width"
    ],
    correctIndex: 3,
    keyword_anchor: "Tensor shape = Size of each dimension (batch, channels, H, W)",
    highlight_words: ["shape", "size of each dimension", "batch size, channels, height, and width"],
    explanation: "Shape mô tả kích thước từng chiều của mảng đa chiều Tensor (ví dụ: Batch, Channels, Height, Width)."
  },
  {
    id: "AGU_Q5_9",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "What is a common tensor data type used to store pixel data from a texture used as model input?",
    options: [
      "a. Boolean, since images only have two possible pixel states",
      "b. String, since pixel colors are stored as text",
      "c. Float, since image tensors are usually represented as normalized floating-point values",
      "d. AudioClip, since images and audio share the same data type"
    ],
    correctIndex: 2,
    keyword_anchor: "Image pixel tensor type = Float (normalized)",
    highlight_words: ["pixel data", "Float", "normalized floating-point values"],
    explanation: "Dữ liệu điểm ảnh đầu vào cho mạng nơ-ron thường được chuẩn hóa về dạng số thực `Float` (ví dụ từ 0.0 đến 1.0)."
  },
  {
    id: "AGU_Q5_10",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "Why is batch size an important consideration in a tensor's shape when running real-time inference in a game?",
    options: [
      "a. Processing a larger batch size than needed for real-time per-frame or per-entity inference can add unnecessary latency and memory overhead",
      "b. A larger batch size always makes the game render at a higher resolution",
      "c. Batch size has no effect on inference time or memory usage",
      "d. Batch size only matters when exporting the final build"
    ],
    correctIndex: 0,
    keyword_anchor: "Too large batch size = Unnecessary latency & memory overhead",
    highlight_words: ["batch size", "larger batch size than needed", "unnecessary latency and memory overhead"],
    explanation: "Dùng batch size lớn hơn mức cần thiết cho xử lý thời gian thực sẽ gây độ trễ và tốn bộ nhớ thừa."
  },
  {
    id: "AGU_Q5_11",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "What might a developer need to do if an imported model uses an operation that the Inference Engine does not support?",
    options: [
      "a. Ignore the issue, since unsupported operations are automatically skipped without consequence",
      "b. Modify or simplify the model, or find an alternative model architecture that avoids the unsupported operation",
      "c. Convert the entire project to a different game engine",
      "d. Delete the Inference Engine package entirely"
    ],
    correctIndex: 1,
    keyword_anchor: "Unsupported ONNX op = Modify/simplify model or change architecture",
    highlight_words: ["does not support", "Modify or simplify the model", "alternative model architecture"],
    explanation: "Nếu model chứa phép toán (operator) chưa được hỗ trợ, cần chỉnh sửa/đơn giản hóa model hoặc đổi kiến trúc khác."
  },
  {
    id: "AGU_Q5_12",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "What does \"inference\" mean in the context of a neural network model?",
    options: [
      "a. Compiling C# scripts into a native plugin",
      "b. Deleting unused variables from a script",
      "c. Using an already-trained model to produce predictions or outputs from new input data",
      "d. Training a model from an empty, untrained state"
    ],
    correctIndex: 2,
    keyword_anchor: "Inference = Use trained model to predict from new input",
    highlight_words: ["inference", "already-trained model", "produce predictions or outputs"],
    explanation: "Inference (suy luận) là bước dùng model đã huấn luyện sẵn để đưa ra dự đoán/kết quả từ dữ liệu đầu vào mới."
  },
  {
    id: "AGU_Q5_13",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "After running inference with a Worker, how does a developer typically access the model's prediction?",
    options: [
      "a. By checking the Animator Controller's current state",
      "b. By reading the values out of the output Tensor produced by the Worker",
      "c. By opening the Unity Console and reading a printed prediction automatically",
      "d. By inspecting the project's build settings"
    ],
    correctIndex: 1,
    keyword_anchor: "Access prediction = Read values from Worker's output Tensor",
    highlight_words: ["access the model's prediction", "output Tensor produced by the Worker"],
    explanation: "Sau khi Worker chạy xong, ta lấy kết quả dự đoán bằng cách đọc giá trị từ output Tensor của Worker."
  },
  {
    id: "AGU_Q5_14",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "What is typically the first step in the Inference Engine workflow?",
    options: [
      "a. Disable the Physics engine",
      "b. Import a trained model, commonly in ONNX format, as a Unity asset",
      "c. Write a custom shader for the model",
      "d. Bake all lightmaps in the scene"
    ],
    correctIndex: 1,
    keyword_anchor: "First step Inference Engine = Import trained ONNX model as Unity asset",
    highlight_words: ["first step", "Import a trained model", "ONNX format"],
    explanation: "Bước đầu tiên là import file model đã huấn luyện (thường là định dạng `.onnx`) vào dự án Unity."
  },
  {
    id: "AGU_Q5_15",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "Why is it important to validate a model's outputs after importing it into Unity's Inference Engine?",
    options: [
      "a. Because validation changes the model's file format to WAV",
      "b. Because validation automatically retrains the model to be more accurate",
      "c. To confirm the model was imported and configured correctly and produces results consistent with its original training framework",
      "d. Because Unity requires manual approval before any model can be deleted"
    ],
    correctIndex: 2,
    keyword_anchor: "Validate output = Confirm results match original training framework",
    highlight_words: ["validate a model's outputs", "results consistent with its original training framework"],
    explanation: "Cần kiểm chứng lại đầu ra sau khi import để chắc chắn model chạy trong Unity cho kết quả khớp với framework gốc (PyTorch/TF)."
  },
  {
    id: "AGU_Q5_16",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "What component actually executes a neural network model's computations within the Inference Engine?",
    options: [
      "a. The Unity Physics engine",
      "b. A Worker, running the model on a chosen backend such as CPU or GPU",
      "c. The Lighting settings window",
      "d. The Animator Controller"
    ],
    correctIndex: 1,
    keyword_anchor: "Executes model computations = Worker (on CPU or GPU backend)",
    highlight_words: ["executes", "computations", "A Worker", "CPU or GPU"],
    explanation: "Worker là thành phần trực tiếp thực thi các phép tính của model trên backend được chọn (CPU hoặc GPU)."
  },
  {
    id: "AGU_Q5_17",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "Before feeding raw data (such as an image or game state values) into a model, what must a developer typically do first?",
    options: [
      "a. Compile the data into a DLL",
      "b. Convert the data into a 3D animation clip",
      "c. Convert or format the raw data into a Tensor matching the model's expected input shape and data type",
      "d. Save the data as a scene file"
    ],
    correctIndex: 2,
    keyword_anchor: "Before feeding raw data = Convert to Tensor matching shape & data type",
    highlight_words: ["raw data", "Convert or format", "Tensor matching", "shape and data type"],
    explanation: "Dữ liệu thô (ảnh, số liệu game) phải được chuyển đổi sang đối tượng Tensor có đúng shape và kiểu dữ liệu mà model yêu cầu."
  },
  {
    id: "AGU_Q5_18",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "Which of the following is a plausible use case for the Inference Engine within a game?",
    options: [
      "a. Driving smart NPC behavior or generating procedural content using a trained model",
      "b. Rendering the game's final frame buffer to the screen",
      "c. Compiling the project for a different target platform",
      "d. Managing the project's Git repository"
    ],
    correctIndex: 0,
    keyword_anchor: "Inference Engine use case = Smart NPC behavior / Procedural content",
    highlight_words: ["plausible use case", "smart NPC behavior", "procedural content"],
    explanation: "Inference Engine dùng để chạy AI điều khiển NPC thông minh hoặc sinh nội dung tự động (procedural) ngay trong game."
  },
  {
    id: "AGU_Q5_19",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "Why might a developer need to manually reshape or transpose a tensor before passing it to a model?",
    options: [
      "a. Because the model may expect a specific dimension order or shape (e.g. channels-first vs channels-last) that differs from the raw source data's layout",
      "b. Because reshaping automatically increases model accuracy",
      "c. Because Unity requires all tensors to be converted into Vector3 objects",
      "d. Because tensors can only be one-dimensional in the Inference Engine"
    ],
    correctIndex: 0,
    keyword_anchor: "Reshape/transpose = Match channels-first vs channels-last layout",
    highlight_words: ["reshape or transpose", "dimension order or shape", "channels-first vs channels-last"],
    explanation: "Model có thể yêu cầu thứ tự chiều khác với dữ liệu gốc (ví dụ NCHW channels-first so với NHWC channels-last) nên cần reshape/transpose."
  },
  {
    id: "AGU_Q5_20",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "What is typically required before a model trained in a framework like PyTorch can be used in Unity's Inference Engine?",
    options: [
      "a. Deleting all of the model's trained weights",
      "b. Exporting or converting the trained model into ONNX format",
      "c. Rewriting the entire model directly in C#",
      "d. Converting the model into a texture asset"
    ],
    correctIndex: 1,
    keyword_anchor: "PyTorch -> Unity Inference Engine = Export to ONNX format",
    highlight_words: ["PyTorch", "Exporting or converting", "ONNX format"],
    explanation: "Model train từ PyTorch/TensorFlow cần được export sang định dạng chuẩn `.onnx` trước khi đưa vào Unity."
  },
  {
    id: "AGU_Q5_21",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "Why might not all operations or layers in an imported ONNX model be usable by Unity's Inference Engine?",
    options: [
      "a. Because operations are randomly removed during import for performance",
      "b. Because ONNX models never contain any operations",
      "c. The Inference Engine implements a specific supported subset of neural network operators, and unsupported operations may fail to import or run",
      "d. Because Unity blocks all imported models by default"
    ],
    correctIndex: 2,
    keyword_anchor: "Some ONNX ops fail = Inference Engine supports a specific subset",
    highlight_words: ["supported subset of neural network operators", "unsupported operations may fail"],
    explanation: "Inference Engine chỉ hỗ trợ một tập hợp nhất định các toán tử (operators) của mạng nơ-ron; toán tử ngoài danh sách sẽ lỗi."
  },
  {
    id: "AGU_Q5_22",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "What is the general purpose of Unity's Inference Engine (formerly known as Sentis)?",
    options: [
      "a. To manage version control for a Unity project",
      "b. To run pre-trained neural network models directly inside a Unity application for real-time inference",
      "c. To compress texture assets for smaller build sizes",
      "d. To train new neural network models from scratch inside the Unity Editor"
    ],
    correctIndex: 1,
    keyword_anchor: "Inference Engine (Sentis) = Run pre-trained models inside Unity in real-time",
    highlight_words: ["Sentis", "run pre-trained neural network models", "real-time inference"],
    explanation: "Inference Engine (trước đây là Sentis) cho phép chạy trực tiếp các model AI đã train sẵn bên trong ứng dụng Unity theo thời gian thực."
  },
  {
    id: "AGU_Q5_23",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "Why is it important to dispose of Tensors after they are no longer needed in Unity's Inference Engine?",
    options: [
      "a. Disposing tensors automatically improves a model's prediction accuracy",
      "b. Tensors are automatically deleted the moment a script compiles",
      "c. Tensors can allocate native or GPU memory, and failing to dispose of them can lead to memory leaks",
      "d. Undisposed tensors will corrupt the project's version control history"
    ],
    correctIndex: 2,
    keyword_anchor: "Dispose Tensors = Native/GPU memory -> Avoid memory leaks",
    highlight_words: ["dispose of Tensors", "native or GPU memory", "memory leaks"],
    explanation: "Tensor cấp phát bộ nhớ Native/GPU ngoài tầm kiểm soát của GC; không gọi `Dispose()` sẽ gây rò rỉ bộ nhớ (memory leak)."
  },
  {
    id: "AGU_Q5_24",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "What is a Tensor in the context of Unity's Inference Engine?",
    options: [
      "a. A multi-dimensional array of numerical data used as the input or output of a model",
      "b. A file format for storing audio clips",
      "c. A Unity Editor window for managing packages",
      "d. A type of 3D mesh renderer component"
    ],
    correctIndex: 0,
    keyword_anchor: "Tensor = Multi-dimensional array of numerical data (Input/Output)",
    highlight_words: ["Tensor", "multi-dimensional array of numerical data", "input or output"],
    explanation: "Tensor là mảng số đa chiều dùng làm dữ liệu đầu vào hoặc đầu ra cho mô hình AI."
  },
  {
    id: "AGU_Q5_25",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "Which of the following best describes the overall Inference Engine workflow order?",
    options: [
      "a. Compile the game, then create the model asset",
      "b. Import the model, create a Worker with a chosen backend, prepare an input tensor, execute the model, then read the output tensor",
      "c. Read the output tensor, then import the model afterward",
      "d. Delete the model asset, then run inference"
    ],
    correctIndex: 1,
    keyword_anchor: "Overall order = Import -> Worker -> Input Tensor -> Execute -> Output Tensor",
    highlight_words: ["Import the model", "create a Worker", "prepare an input tensor", "execute", "read the output tensor"],
    explanation: "Thứ tự tổng quát: Import model -> Tạo Worker -> Chuẩn bị input Tensor -> Thực thi model -> Đọc output Tensor."
  },
  {
    id: "AGU_Q5_26",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "What do a Model's \"input\" and \"output\" definitions describe?",
    options: [
      "a. The visual style of the model's generated 3D objects",
      "b. The expected shapes and data types of the data the model consumes and produces",
      "c. The audio format used for in-game sound effects",
      "d. The license terms for using the Unity Editor"
    ],
    correctIndex: 1,
    keyword_anchor: "Model input/output defs = Expected shapes & data types",
    highlight_words: ["input\" and \"output\" definitions", "expected shapes and data types"],
    explanation: "Định nghĩa input/output cho biết shape và kiểu dữ liệu mà model nhận vào và xuất ra."
  },
  {
    id: "AGU_Q5_27",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "Why does Unity's Inference Engine support the ONNX format specifically?",
    options: [
      "a. ONNX is the only file format Unity can read at all",
      "b. ONNX is a proprietary Unity-only format",
      "c. ONNX files cannot contain any numerical data",
      "d. ONNX is an open, widely supported standard that many popular machine learning frameworks can export models to"
    ],
    correctIndex: 3,
    keyword_anchor: "ONNX = Open, widely supported standard across ML frameworks",
    highlight_words: ["ONNX", "open, widely supported standard", "export models to"],
    explanation: "ONNX là chuẩn mở phổ biến rộng rãi, hầu hết các framework ML (PyTorch, TensorFlow, Keras...) đều export ra được."
  },
  {
    id: "AGU_Q5_28",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "Why might a developer choose a GPU backend over a CPU backend when running inference in a game?",
    options: [
      "a. GPU backends always use less memory than CPU backends",
      "b. GPU backends can execute large models faster through parallel computation, which helps maintain real-time performance",
      "c. GPU backends are required to import an ONNX file",
      "d. GPU backends automatically retrain the model"
    ],
    correctIndex: 1,
    keyword_anchor: "GPU > CPU = Parallel computation -> Maintain real-time FPS",
    highlight_words: ["GPU backend", "parallel computation", "real-time performance"],
    explanation: "GPU backend chạy song song nhanh hơn với các model lớn, giúp giữ vững tốc độ khung hình thời gian thực."
  },
  {
    id: "AGU_Q5_29",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "Why must inference often be spread across multiple frames or run asynchronously in a real-time game, rather than run instantly in one frame?",
    options: [
      "a. To avoid blocking the main thread and causing frame drops, since larger models can be computationally expensive",
      "b. Because ONNX files cannot be loaded during gameplay",
      "c. Because ordinary CPUs cannot perform any floating-point math",
      "d. Because the Inference Engine cannot run more than once per level"
    ],
    correctIndex: 0,
    keyword_anchor: "Spread across frames = Avoid blocking main thread & frame drops",
    highlight_words: ["spread across multiple frames", "avoid blocking the main thread", "causing frame drops"],
    explanation: "Chạy model lớn trong 1 frame sẽ làm treo main thread và tụt FPS, nên cần chia nhỏ qua nhiều frame (ScheduleIterable) hoặc chạy bất đồng bộ."
  },
  {
    id: "AGU_Q5_30",
    subject: "FE AGU",
    module: "Quiz 5: Unity Inference Engine (Sentis)",
    question: "Which model format is commonly imported into Unity's Inference Engine?",
    options: [
      "a. JSON only",
      "b. ONNX (Open Neural Network Exchange)",
      "c. WAV",
      "d. FBX"
    ],
    correctIndex: 1,
    keyword_anchor: "Inference Engine model format = ONNX",
    highlight_words: ["model format", "ONNX"],
    explanation: "Định dạng model tiêu chuẩn được import vào Unity Inference Engine là ONNX."
  },

  // ================= QUIZ 6: UNITY AI ASSISTANT MODES (30 QUESTIONS) =================
  {
    id: "AGU_Q6_1",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "Which permission levels can be configured to control how much autonomy Agent mode has in a project?",
    options: [
      "a. Read-only, Write scripts only, and Full autonomy",
      "b. Beginner, Intermediate, and Expert",
      "c. Debug, Release, and Development",
      "d. Silver, Gold, and Platinum"
    ],
    correctIndex: 0,
    keyword_anchor: "3 Agent permissions = Read-only, Write scripts only, Full autonomy",
    highlight_words: ["permission levels", "Read-only, Write scripts only, and Full autonomy"],
    explanation: "Agent mode có 3 mức quyền: Read-only (chỉ đọc), Write scripts only (chỉ sửa script), và Full autonomy (toàn quyền)."
  },
  {
    id: "AGU_Q6_2",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "Why might Plan mode be preferred over jumping straight into Agent mode for a large refactor across multiple scripts?",
    options: [
      "a. Plan mode disables the Console window during the refactor",
      "b. Plan mode automatically writes better code than Agent mode",
      "c. Plan mode shows the intended steps for review and approval before any code is changed, giving more control over the approach",
      "d. Plan mode is required before Unity will allow any script to compile"
    ],
    correctIndex: 2,
    keyword_anchor: "Plan mode = Shows steps for review/approval before changing code",
    highlight_words: ["Plan mode", "shows the intended steps", "before any code is changed"],
    explanation: "Plan mode liệt kê các bước dự kiến để lập trình viên duyệt trước khi sửa bất kỳ dòng code nào, giúp kiểm soát tốt các thay đổi lớn."
  },
  {
    id: "AGU_Q6_3",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "Is code or content generated by the AI Assistant guaranteed to be completely error-free and ready for production without any review?",
    options: [
      "a. Yes, but only for scripts, not for generated assets",
      "b. No - generated output should still be reviewed and verified by the developer before being relied upon",
      "c. No developer review process is ever necessary once Full autonomy is enabled",
      "d. Yes - AI Assistant output never needs to be checked"
    ],
    correctIndex: 1,
    keyword_anchor: "AI output = NOT guaranteed error-free -> Always review & verify",
    highlight_words: ["guaranteed to be completely error-free", "reviewed and verified by the developer"],
    explanation: "Code và nội dung do AI tạo ra luôn cần được lập trình viên kiểm tra và xác minh lại trước khi đưa vào sản phẩm."
  },
  {
    id: "AGU_Q6_4",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "What happens to changes made by the Assistant in Agent mode if a developer wants to reverse them?",
    options: [
      "a. The entire Unity project must be reinstalled to reverse them",
      "b. Reversing changes requires contacting Unity's support team directly",
      "c. They can never be undone under any circumstances",
      "d. They are reversible, so the developer can undo the applied steps"
    ],
    correctIndex: 3,
    keyword_anchor: "Agent changes = Reversible (can undo applied steps)",
    highlight_words: ["reverse them", "reversible", "undo the applied steps"],
    explanation: "Các thay đổi do Agent mode thực hiện đều có thể hoàn tác (reversible / undo)."
  },
  {
    id: "AGU_Q6_5",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "What kind of project data can a developer manually attach to a conversation with the Assistant to narrow its focus?",
    options: [
      "a. Only the Unity Editor's log file",
      "b. Only the developer's personal photos",
      "c. Only files located outside the Unity project folder",
      "d. A specific script, prefab, or set of assets"
    ],
    correctIndex: 3,
    keyword_anchor: "Attach context = Specific script, prefab, or set of assets",
    highlight_words: ["manually attach", "narrow its focus", "specific script, prefab, or set of assets"],
    explanation: "Bạn có thể đính kèm trực tiếp một script, prefab hoặc nhóm asset cụ thể vào cuộc hội thoại để AI tập trung đúng ngữ cảnh."
  },
  {
    id: "AGU_Q6_6",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "Which of these console-related tasks is Ask mode well-suited for?",
    options: [
      "a. Exporting console logs as a 3D model",
      "b. Automatically deleting all console error messages",
      "c. Disabling the Console window permanently",
      "d. Diagnosing a console error and suggesting a possible fix"
    ],
    correctIndex: 3,
    keyword_anchor: "Ask mode + Console = Diagnose error & suggest fix",
    highlight_words: ["Ask mode", "Diagnosing a console error", "suggesting a possible fix"],
    explanation: "Ask mode rất phù hợp để đọc lỗi Console, chẩn đoán nguyên nhân và đề xuất hướng sửa (mà không tự ý sửa file)."
  },
  {
    id: "AGU_Q6_7",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "Which Assistant mode is read-only and never modifies the project on its own?",
    options: [
      "a. Agent mode",
      "b. Plan mode",
      "c. Full autonomy mode",
      "d. Ask mode"
    ],
    correctIndex: 3,
    keyword_anchor: "Read-only & never modifies project = Ask mode",
    highlight_words: ["read-only", "never modifies the project", "Ask mode"],
    explanation: "Ask mode chỉ đọc và trả lời/giải thích, không bao giờ tự động chỉnh sửa dự án."
  },
  {
    id: "AGU_Q6_8",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "A student wants the Assistant to explain the difference between Update() and FixedUpdate() without changing any files. Which mode should they use?",
    options: [
      "a. Plan mode",
      "b. Ask mode",
      "c. Agent mode with Full autonomy",
      "d. Agent mode with Write scripts only"
    ],
    correctIndex: 1,
    keyword_anchor: "Explain concept without changing files = Ask mode",
    highlight_words: ["explain the difference", "without changing any files", "Ask mode"],
    explanation: "Hỏi đáp kiến thức và giải thích code mà không chỉnh sửa file -> dùng Ask mode."
  },
  {
    id: "AGU_Q6_9",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "Which of the following is a good use case for Plan mode?",
    options: [
      "a. Rendering a single frame of the game",
      "b. Simply asking what the current Unity version number is",
      "c. Checking the spelling of a variable name",
      "d. Refactoring an existing system across multiple scripts, where reviewing the approach first is valuable"
    ],
    correctIndex: 3,
    keyword_anchor: "Plan mode use case = Refactor across multiple scripts -> Review approach first",
    highlight_words: ["Plan mode", "Refactoring an existing system across multiple scripts", "reviewing the approach first"],
    explanation: "Plan mode thích hợp khi tái cấu trúc (refactor) nhiều script phức tạp, cần xem trước kế hoạch rồi mới làm."
  },
  {
    id: "AGU_Q6_10",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "Why would a developer choose Ask mode instead of Agent mode when simply investigating the cause of a bug?",
    options: [
      "a. Ask mode is the only mode capable of understanding C# scripts",
      "b. Agent mode cannot read console error messages at all",
      "c. Ask mode automatically fixes the bug without any review",
      "d. Ask mode only explains or diagnoses without risking any unintended changes to the project"
    ],
    correctIndex: 3,
    keyword_anchor: "Investigate bug -> Ask mode = No risk of unintended project changes",
    highlight_words: ["investigating the cause of a bug", "without risking any unintended changes"],
    explanation: "Khi mới tìm nguyên nhân lỗi, Ask mode giúp giải thích và chẩn đoán an toàn mà không sợ làm thay đổi ngoài ý muốn."
  },
  {
    id: "AGU_Q6_11",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "What is Unity's AI Assistant?",
    options: [
      "a. A separate standalone game engine unrelated to Unity",
      "b. A generative AI tool integrated into the Unity Editor to help create assets, automate workflows, and answer questions through natural-language prompts",
      "c. A tool used exclusively for compressing textures",
      "d. A plugin that only works outside the Unity Editor, in a web browser"
    ],
    correctIndex: 1,
    keyword_anchor: "Unity AI Assistant = In-editor generative AI for assets, workflows & Q&A",
    highlight_words: ["Unity's AI Assistant", "integrated into the Unity Editor", "natural-language prompts"],
    explanation: "Unity AI Assistant là công cụ AI tạo sinh tích hợp ngay trong Unity Editor để hỗ trợ tạo asset, tự động hóa và hỏi đáp."
  },
  {
    id: "AGU_Q6_12",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "Why is having \"live\" project context (rather than a one-time snapshot) important for the Assistant's usefulness?",
    options: [
      "a. It reads the current state of the project each time, so it can reason about what is actually happening, including issues that only appear at runtime",
      "b. Live context prevents the Assistant from ever answering general questions",
      "c. Live context means the Assistant re-downloads the entire Unity Editor each session",
      "d. Live context is only relevant for exporting builds"
    ],
    correctIndex: 0,
    keyword_anchor: "Live context = Reads current project state & runtime issues",
    highlight_words: ["live\" project context", "reads the current state", "issues that only appear at runtime"],
    explanation: "Ngữ cảnh trực tiếp (live context) giúp AI đọc đúng trạng thái hiện tại của scene, gói cài đặt và lỗi vừa phát sinh khi chạy."
  },
  {
    id: "AGU_Q6_13",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "From which menu in the Unity Editor is the AI Assistant typically opened?",
    options: [
      "a. The Physics menu",
      "b. The Animation menu",
      "c. The AI menu, via AI > Assistant",
      "d. The File menu only"
    ],
    correctIndex: 2,
    keyword_anchor: "Open AI Assistant = AI > Assistant",
    highlight_words: ["menu", "opened", "AI > Assistant"],
    explanation: "Mở AI Assistant trên thanh menu của Unity Editor qua đường dẫn `AI > Assistant`."
  },
  {
    id: "AGU_Q6_14",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "Which package name is added through the Package Manager to install the AI Assistant?",
    options: [
      "a. com.unity.render-pipelines.universal",
      "b. com.unity.netcode",
      "c. com.unity.timeline",
      "d. com.unity.ai.assistant"
    ],
    correctIndex: 3,
    keyword_anchor: "AI Assistant package = com.unity.ai.assistant",
    highlight_words: ["package name", "com.unity.ai.assistant"],
    explanation: "Tên gói của AI Assistant trong Unity Package Manager là `com.unity.ai.assistant`."
  },
  {
    id: "AGU_Q6_15",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "How are AI-generated assets identified within a Unity project?",
    options: [
      "a. They are stored in a completely separate, hidden project",
      "b. They are tagged with embedded metadata, which helps with identification and app store declarations",
      "c. They cannot be distinguished from any other asset in any way",
      "d. They are automatically renamed to \"AI_Generated_Final\""
    ],
    correctIndex: 1,
    keyword_anchor: "AI assets identification = Tagged with embedded metadata",
    highlight_words: ["AI-generated assets identified", "embedded metadata", "app store declarations"],
    explanation: "Tài nguyên do AI tạo ra được gắn metadata nhúng bên trong để nhận diện và phục vụ khai báo với các cửa hàng ứng dụng (Steam/App Store)."
  },
  {
    id: "AGU_Q6_16",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "Why is understanding installed packages and the target platform useful context for the Assistant when generating code?",
    options: [
      "a. Because this information has no effect on the code the Assistant generates",
      "b. Because target platform information is only used for marketing purposes",
      "c. Because installed packages determine the color scheme of the Unity Editor",
      "d. So the generated code and suggestions are compatible with the project's actual setup, rather than generic or potentially incompatible code"
    ],
    correctIndex: 3,
    keyword_anchor: "Know packages & platform = Generate compatible code (not generic)",
    highlight_words: ["installed packages and the target platform", "compatible with the project's actual setup"],
    explanation: "Biết các package đã cài và nền tảng đích giúp AI sinh ra code tương thích chính xác với dự án hiện tại."
  },
  {
    id: "AGU_Q6_17",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "According to Unity, what makes the in-editor AI Assistant different from a general-purpose external chat AI when helping with a Unity project?",
    options: [
      "a. It has live awareness of the actual project context, such as scene hierarchy, GameObjects, installed packages, platform, and console output",
      "b. It cannot answer any questions about Unity APIs",
      "c. It only works when the internet connection is completely disabled",
      "d. It requires the developer to manually retype the entire project's source code into the chat"
    ],
    correctIndex: 0,
    keyword_anchor: "In-editor AI vs External chat = Live awareness of project context",
    highlight_words: ["different from a general-purpose external chat AI", "live awareness", "scene hierarchy"],
    explanation: "Khác với chat AI bên ngoài, AI Assistant trong Editor nắm được trực tiếp Hierarchy, GameObjects, packages và Console của dự án."
  },
  {
    id: "AGU_Q6_18",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "How can a developer narrow the Assistant's focus to a specific script, prefab, or set of assets?",
    options: [
      "a. By renaming the item to start with the word \"Assistant\"",
      "b. By switching the Unity Editor to Safe Mode",
      "c. By deleting every other file in the project first",
      "d. By manually attaching that item as context using the attachment feature in the Assistant window"
    ],
    correctIndex: 3,
    keyword_anchor: "Narrow focus = Manually attach item via attachment feature",
    highlight_words: ["narrow the Assistant's focus", "attaching that item as context", "attachment feature"],
    explanation: "Dùng tính năng đính kèm (attachment) trong cửa sổ Assistant để chỉ định rõ file/prefab cần AI xử lý."
  },
  {
    id: "AGU_Q6_19",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "Why does Unity require explicit approval before an Agent mode action modifies the project?",
    options: [
      "a. Because approval automatically improves the game's frame rate",
      "b. To keep the developer in control and prevent unwanted or unreviewed changes to the project",
      "c. Because Unity legally requires a signature for every code change",
      "d. Because Agent mode cannot function without an internet connection at all"
    ],
    correctIndex: 1,
    keyword_anchor: "Explicit approval = Keep developer in control & prevent unwanted changes",
    highlight_words: ["explicit approval", "keep the developer in control", "prevent unwanted"],
    explanation: "Yêu cầu xác nhận giúp lập trình viên luôn nắm quyền kiểm soát và tránh những thay đổi ngoài ý muốn."
  },
  {
    id: "AGU_Q6_20",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "What does the \"Write scripts only\" permission level allow the Agent to do?",
    options: [
      "a. Create and edit C# scripts, without modifying scenes or other assets",
      "b. Only generate audio clips",
      "c. Modify scenes and assets, but never touch any script file",
      "d. Only read console error messages"
    ],
    correctIndex: 0,
    keyword_anchor: "Write scripts only = Create/edit C# scripts, NO scene/asset edits",
    highlight_words: ["Write scripts only", "Create and edit C# scripts", "without modifying scenes"],
    explanation: "Quyền `Write scripts only` chỉ cho phép Agent tạo và sửa file script C#, không được đụng vào scene hay các asset khác."
  },
  {
    id: "AGU_Q6_21",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "What appears in the conversation when the Agent performs actions, letting the developer review what happened?",
    options: [
      "a. Only a single overall percentage score",
      "b. Tool activity entries, which can be expanded to see parameters and results",
      "c. Nothing at all is shown about Agent actions",
      "d. A separate email sent to the developer's inbox"
    ],
    correctIndex: 1,
    keyword_anchor: "Review Agent actions = Expandable Tool activity entries",
    highlight_words: ["Agent performs actions", "Tool activity entries", "expanded to see parameters and results"],
    explanation: "Mọi hành động của Agent được ghi lại thành các mục Tool activity có thể bấm mở rộng để xem tham số và kết quả."
  },
  {
    id: "AGU_Q6_22",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "Which Assistant mode can directly perform actions in the project, such as creating assets or modifying GameObjects?",
    options: [
      "a. Agent mode",
      "b. Plan mode only, without ever taking action",
      "c. None of the modes can take any action",
      "d. Ask mode"
    ],
    correctIndex: 0,
    keyword_anchor: "Directly perform actions in project = Agent mode",
    highlight_words: ["directly perform actions", "creating assets or modifying GameObjects", "Agent mode"],
    explanation: "Agent mode là chế độ có khả năng thực thi hành động trực tiếp lên dự án (tạo asset, sửa GameObject, viết script)."
  },
  {
    id: "AGU_Q6_23",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "A student wants the Assistant to set up a new inventory system spanning several new and existing scripts, and wants to review the intended approach before anything is changed. Which mode fits best?",
    options: [
      "a. None of the modes, since this always requires manual coding only",
      "b. Plan mode",
      "c. Read-only permission with no other configuration",
      "d. Ask mode"
    ],
    correctIndex: 1,
    keyword_anchor: "Multi-script feature + Review approach before changing = Plan mode",
    highlight_words: ["spanning several new and existing scripts", "review the intended approach before anything is changed", "Plan mode"],
    explanation: "Muốn AI lên phương án cho hệ thống nhiều script và xem duyệt trước khi sửa -> chọn Plan mode."
  },
  {
    id: "AGU_Q6_24",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "What does the \"Read-only\" permission level allow the Agent to do?",
    options: [
      "a. Create new C# scripts automatically",
      "b. Modify scenes and assets, but not scripts",
      "c. Inspect the project, but not write or modify anything",
      "d. Delete any asset in the project without confirmation"
    ],
    correctIndex: 2,
    keyword_anchor: "Read-only permission = Inspect project, NO write/modify",
    highlight_words: ["Read-only", "Inspect the project", "not write or modify anything"],
    explanation: "Quyền `Read-only` chỉ cho phép Agent kiểm tra/đọc thông tin dự án chứ không được ghi hay sửa bất cứ thứ gì."
  },
  {
    id: "AGU_Q6_25",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "What kinds of information can the Assistant draw on to answer a question about a specific Unity component?",
    options: [
      "a. Only the developer's personal calendar",
      "b. Only information typed directly into the Console window",
      "c. Unity's documentation, runtime API references, and the current state of the project",
      "d. Only the names of files in the Recycle Bin"
    ],
    correctIndex: 2,
    keyword_anchor: "Assistant knowledge = Unity docs + Runtime API + Current project state",
    highlight_words: ["Unity's documentation", "runtime API references", "current state of the project"],
    explanation: "AI Assistant kết hợp tài liệu chính thức của Unity, API references và trạng thái hiện tại của dự án để trả lời."
  },
  {
    id: "AGU_Q6_26",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "How many main operating modes does Unity's AI Assistant provide?",
    options: [
      "a. Two modes, called Beginner and Expert",
      "b. Only one mode, with no options to choose from",
      "c. Five separate modes for each Generator tool",
      "d. Three: Ask, Plan, and Agent"
    ],
    correctIndex: 3,
    keyword_anchor: "3 Operating Modes = Ask, Plan, Agent",
    highlight_words: ["main operating modes", "Three: Ask, Plan, and Agent"],
    explanation: "Unity AI Assistant có 3 chế độ hoạt động chính: Ask, Plan và Agent."
  },
  {
    id: "AGU_Q6_27",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "In Agent mode, what generally must happen before the Assistant applies a modifying change to the project?",
    options: [
      "a. The developer must approve the action, respecting the configured permission settings",
      "b. The Unity Editor must be closed and reopened",
      "c. The change must first be manually written into a text file",
      "d. Nothing - Agent mode always applies changes immediately without any confirmation"
    ],
    correctIndex: 0,
    keyword_anchor: "Before Agent modifies = Developer approves (respecting permissions)",
    highlight_words: ["Agent mode", "before the Assistant applies", "developer must approve"],
    explanation: "Trước khi áp dụng thay đổi, người dùng cần bấm chấp thuận hành động (theo đúng mức quyền đã cấu hình)."
  },
  {
    id: "AGU_Q6_28",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "What does the \"Full autonomy\" permission level allow the Agent to do?",
    options: [
      "a. Only answer questions without taking any action",
      "b. Write scripts, modify scenes, create assets, and run Editor actions",
      "c. Only inspect the project's console output",
      "d. Only generate a step-by-step plan without ever executing it"
    ],
    correctIndex: 1,
    keyword_anchor: "Full autonomy = Scripts + Scenes + Assets + Editor actions",
    highlight_words: ["Full autonomy", "Write scripts, modify scenes, create assets, and run Editor actions"],
    explanation: "`Full autonomy` cho phép Agent thực hiện đầy đủ các thao tác: viết script, sửa scene, tạo asset và chạy các lệnh Editor."
  },
  {
    id: "AGU_Q6_29",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "Which Assistant mode produces a structured, step-by-step plan for a multi-step task, which the developer can review before anything happens in the project?",
    options: [
      "a. Write scripts only mode",
      "b. Ask mode",
      "c. Plan mode",
      "d. Read-only mode"
    ],
    correctIndex: 2,
    keyword_anchor: "Structured step-by-step plan = Plan mode",
    highlight_words: ["structured, step-by-step plan", "review before anything happens", "Plan mode"],
    explanation: "Plan mode tạo ra bản kế hoạch từng bước có cấu trúc để lập trình viên duyệt trước khi thực thi."
  },
  {
    id: "AGU_Q6_30",
    subject: "FE AGU",
    module: "Quiz 6: Unity AI Assistant Modes",
    question: "Which of the following is a good use case for Ask mode?",
    options: [
      "a. Automatically restructuring an entire project's folder layout without review",
      "b. Permanently deleting unused assets from the project",
      "c. Explaining a Unity API, diagnosing a console error, or answering a question about the current scene",
      "d. Publishing the finished game to an app store"
    ],
    correctIndex: 2,
    keyword_anchor: "Ask mode = Explain API, diagnose error, answer scene Qs",
    highlight_words: ["Ask mode", "Explaining a Unity API, diagnosing a console error"],
    explanation: "Ask mode dùng để giải thích API, chẩn đoán lỗi Console hoặc trả lời câu hỏi về scene hiện tại."
  },

  // ================= QUIZ 7: UNITY AI GENERATORS (30 QUESTIONS) =================
  {
    id: "AGU_Q7_1",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "If a developer needs a seamless, physically based surface material for a 3D object, which Generator should they use instead of the Texture2D Generator?",
    options: [
      "a. Terrain Layer Generator only",
      "b. Animation Generator",
      "c. Material Generator",
      "d. Sound Generator"
    ],
    correctIndex: 2,
    keyword_anchor: "Seamless PBR surface for 3D object = Material Generator",
    highlight_words: ["seamless, physically based surface material", "3D object", "Material Generator"],
    explanation: "Tạo vật liệu bề mặt PBR liền mạch cho đối tượng 3D là nhiệm vụ của Material Generator."
  },
  {
    id: "AGU_Q7_2",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Which two types of input can guide the Sprite Generator's output?",
    options: [
      "a. Text-based prompts and reference images",
      "b. Only 3D mesh files",
      "c. Only spreadsheet files",
      "d. Only audio recordings"
    ],
    correctIndex: 0,
    keyword_anchor: "Sprite Generator inputs = Text prompts + Reference images",
    highlight_words: ["Sprite Generator", "Text-based prompts and reference images"],
    explanation: "Sprite Generator nhận 2 loại đầu vào chính để định hướng kết quả: mô tả văn bản (prompt) và ảnh tham chiếu."
  },
  {
    id: "AGU_Q7_3",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Which of these is a good use case for the Texture2D Generator?",
    options: [
      "a. Generating a tileable dark stone background texture for a fantasy RPG UI panel",
      "b. Generating a networked multiplayer session's matchmaking logic",
      "c. Creating an animation clip for a jumping character",
      "d. Generating a short sound effect for a footstep"
    ],
    correctIndex: 0,
    keyword_anchor: "Texture2D use case = Tileable background / UI panel texture",
    highlight_words: ["Texture2D Generator", "tileable", "background texture", "UI panel"],
    explanation: "Texture2D Generator chuyên tạo ảnh 2D tổng quát như nền (background), tấm ốp UI panel hoặc texture lặp (tileable)."
  },
  {
    id: "AGU_Q7_4",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "What is one creative-flexibility benefit of using reference images together with a text prompt in the Sprite Generator?",
    options: [
      "a. It guarantees the generated sprite will be exactly identical to the reference image",
      "b. It prevents the Generator from producing any new content",
      "c. It removes the need to ever specify a text prompt",
      "d. It allows experimenting with different visual styles or variations without needing complex manual adjustments"
    ],
    correctIndex: 3,
    keyword_anchor: "Reference image + Prompt = Experiment with styles/variations easily",
    highlight_words: ["reference images together with a text prompt", "experimenting with different visual styles or variations"],
    explanation: "Kết hợp ảnh tham chiếu với prompt giúp thử nghiệm nhiều phong cách và biến thể hình ảnh mà không phải chỉnh sửa thủ công phức tạp."
  },
  {
    id: "AGU_Q7_5",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "What must generally be true of a Unity project before AI Generators, including the Texture2D Generator, can be used?",
    options: [
      "a. The project must contain no scripts at all",
      "b. The project must already contain at least one multiplayer scene",
      "c. The project must be on a supported Unity 6 version and have accepted the AI menu's terms and conditions",
      "d. The project must be built for a console platform only"
    ],
    correctIndex: 2,
    keyword_anchor: "Prereq for AI Generators = Supported Unity 6 + Accepted AI terms",
    highlight_words: ["before AI Generators", "supported Unity 6 version", "accepted the AI menu's terms"],
    explanation: "Dự án phải chạy trên phiên bản Unity 6 được hỗ trợ và người dùng đã đồng ý điều khoản sử dụng trong menu AI."
  },
  {
    id: "AGU_Q7_6",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "What is the Texture2D Generator primarily used for?",
    options: [
      "a. Compiling audio clips into a single archive",
      "b. Generating multiplayer networking code",
      "c. Generating general-purpose 2D image or texture assets, such as backgrounds, billboards, panel fills, or backdrops",
      "d. Managing a project's build version numbers"
    ],
    correctIndex: 2,
    keyword_anchor: "Texture2D Generator = General 2D images (backgrounds, billboards, backdrops)",
    highlight_words: ["Texture2D Generator", "general-purpose 2D image or texture", "backgrounds, billboards, panel fills"],
    explanation: "Texture2D Generator dùng để tạo các hình ảnh/texture 2D tổng quát như nền, billboard, panel UI."
  },
  {
    id: "AGU_Q7_7",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "What benefit does the \"Dynamic adaptation\" feature of Generators (as described for Unity's asset Generators) provide?",
    options: [
      "a. The ability to modify generated assets in real time to suit different game environments",
      "b. Automatic conversion of all assets into a single combined file",
      "c. Automatic deletion of unused assets from the project",
      "d. Permanent removal of the ability to edit a generated asset"
    ],
    correctIndex: 0,
    keyword_anchor: "Dynamic adaptation = Modify generated assets in real time for environments",
    highlight_words: ["Dynamic adaptation", "modify generated assets in real time", "different game environments"],
    explanation: "Dynamic adaptation cho phép điều chỉnh tài nguyên đã tạo theo thời gian thực để phù hợp với các bối cảnh game khác nhau."
  },
  {
    id: "AGU_Q7_8",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Which of these is a plausible use case for the Sound Generator?",
    options: [
      "a. Generating a seamless PBR material for a 3D object",
      "b. Setting up a NetworkManager for multiplayer testing",
      "c. Creating a set of UI icons for a HUD",
      "d. Quickly generating a placeholder footstep or UI click sound effect"
    ],
    correctIndex: 3,
    keyword_anchor: "Sound Generator use case = Placeholder footstep / UI click SFX",
    highlight_words: ["Sound Generator", "footstep or UI click sound effect"],
    explanation: "Sound Generator dùng để tạo nhanh các hiệu ứng âm thanh như tiếng bước chân, tiếng click UI."
  },
  {
    id: "AGU_Q7_9",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Which two kinds of input does the Texture2D Generator accept to guide its output, similar to the Sprite Generator?",
    options: [
      "a. Text-based prompts and reference images",
      "b. Only a numeric seed value",
      "c. Only pre-existing 3D animation clips",
      "d. Only voice recordings"
    ],
    correctIndex: 0,
    keyword_anchor: "Texture2D inputs = Text prompts + Reference images",
    highlight_words: ["Texture2D Generator", "Text-based prompts and reference images"],
    explanation: "Tương tự Sprite Generator, Texture2D Generator cũng nhận prompt văn bản và ảnh tham chiếu."
  },
  {
    id: "AGU_Q7_10",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Why might a UI prototyping workflow combine both the Sprite Generator and the Texture2D Generator?",
    options: [
      "a. Sprite Generator creates individual UI icons/graphics, while Texture2D Generator creates background panels or textures, together forming a full UI mockup",
      "b. Because the two tools produce identical results and using both is purely for backup",
      "c. Because only one of the two tools can be installed at a time",
      "d. Because combining them is required before the Unity Editor will open"
    ],
    correctIndex: 0,
    keyword_anchor: "Sprite = UI icons; Texture2D = Background panels -> Full UI mockup",
    highlight_words: ["combine both", "individual UI icons", "background panels", "full UI mockup"],
    explanation: "Sprite Generator tạo icon/nút riêng lẻ, còn Texture2D Generator tạo nền panel, kết hợp lại thành bản mockup UI hoàn chỉnh."
  },
  {
    id: "AGU_Q7_11",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Which of the following is a typical use case for the Sprite Generator?",
    options: [
      "a. Compiling shader variants for different platforms",
      "b. Generating a seamless, physically based surface material for a 3D object",
      "c. Creating a set of UI icons or character portraits for a game",
      "d. Generating background music for a level"
    ],
    correctIndex: 2,
    keyword_anchor: "Sprite Generator = UI icons or character portraits",
    highlight_words: ["Sprite Generator", "UI icons or character portraits"],
    explanation: "Sprite Generator chuyên tạo các sprite 2D độc lập như icon giao diện, vật phẩm hoặc chân dung nhân vật."
  },
  {
    id: "AGU_Q7_12",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Which of the following best describes a benefit of the \"Improved quality\" feature of Generators, as it applies to Texture2D Generator output?",
    options: [
      "a. Guaranteeing zero cost regardless of usage",
      "b. Removing the need to ever specify a text prompt",
      "c. Generating assets with consistent resolution, color schemes, and patterns, and upscaling low-resolution assets without losing quality",
      "d. Automatically fixing bugs in unrelated C# scripts"
    ],
    correctIndex: 2,
    keyword_anchor: "Improved quality = Consistent resolution/colors + Upscaling without quality loss",
    highlight_words: ["Improved quality", "consistent resolution, color schemes", "upscaling"],
    explanation: "Tính năng Improved quality giúp ảnh tạo ra đồng nhất về độ phân giải/màu sắc và hỗ trợ upscale không vỡ nét."
  },
  {
    id: "AGU_Q7_13",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "What is a benefit of using a reference audio clip as input to the Sound Generator?",
    options: [
      "a. It removes the need to ever specify any settings in the Generator window",
      "b. It converts the reference clip into a 3D animation",
      "c. It can help guide the style or character of the generated sound to match an existing audio direction",
      "d. It guarantees the output will be pixel-for-pixel identical to a 2D texture"
    ],
    correctIndex: 2,
    keyword_anchor: "Reference audio clip = Guide style/character to match audio direction",
    highlight_words: ["reference audio clip", "guide the style or character", "existing audio direction"],
    explanation: "File âm thanh tham chiếu giúp định hướng phong cách và chất âm của âm thanh mới sao cho khớp với tổng thể game."
  },
  {
    id: "AGU_Q7_14",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "What is a key difference between typical Sprite Generator output and typical Texture2D Generator output?",
    options: [
      "a. There is no meaningful difference between the two tools",
      "b. Texture2D Generator can only be used for 3D models, never 2D images",
      "c. Sprite Generator can only output audio, while Texture2D Generator can only output video",
      "d. Sprite Generator produces standalone assets like icons or characters, while Texture2D Generator produces general images/textures like backgrounds and surface fills"
    ],
    correctIndex: 3,
    keyword_anchor: "Sprite = Standalone icons/characters; Texture2D = Backgrounds/fills",
    highlight_words: ["key difference", "standalone assets like icons or characters", "backgrounds and surface fills"],
    explanation: "Sprite Generator xuất ra đối tượng tách nền riêng lẻ (icon, nhân vật), còn Texture2D xuất ảnh nền/bề mặt tổng quát."
  },
  {
    id: "AGU_Q7_15",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Which Unity feature helps a developer or team track how often AI Generators, including the Sound Generator, are being used across a project or organization?",
    options: [
      "a. The Unity Editor's Undo History window",
      "b. The Lighting window's baking settings",
      "c. The Animation window's timeline",
      "d. The Unity Dashboard's AI usage and point balance settings"
    ],
    correctIndex: 3,
    keyword_anchor: "Track AI usage & points = Unity Dashboard",
    highlight_words: ["track how often AI Generators", "Unity Dashboard's AI usage and point balance"],
    explanation: "Tần suất sử dụng AI và số dư điểm (point balance) của team được theo dõi trên Unity Dashboard."
  },
  {
    id: "AGU_Q7_16",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Why might a developer use the Sound Generator instead of manually sourcing sound effects from an external library?",
    options: [
      "a. To quickly generate game-ready custom audio without needing to search for or record separate sound assets",
      "b. Because manually sourced audio cannot be played through an AudioSource",
      "c. Because the Sound Generator is the only way to import any audio file into Unity",
      "d. Because external sound libraries are illegal to use in Unity projects"
    ],
    correctIndex: 0,
    keyword_anchor: "Sound Generator benefit = Quickly generate custom audio without searching/recording",
    highlight_words: ["instead of manually sourcing", "quickly generate game-ready custom audio"],
    explanation: "Dùng Sound Generator giúp tạo nhanh âm thanh tùy chỉnh ngay trong Editor mà không phải mất công tìm kiếm hay tự thu âm."
  },
  {
    id: "AGU_Q7_17",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Similar to Sprite and Texture2D Generator assets, where would a generated audio clip typically appear after creation for review?",
    options: [
      "a. Only as an attachment in an email",
      "b. In the Project window and the Generations panel of the Generator window",
      "c. Only inside the Unity Editor's Console window",
      "d. Only inside an external digital audio workstation"
    ],
    correctIndex: 1,
    keyword_anchor: "Generated assets appear in = Project window + Generations panel",
    highlight_words: ["appear after creation", "Project window", "Generations panel"],
    explanation: "Mọi asset sau khi tạo bằng Generator đều hiển thị trong cửa sổ Project và bảng Generations của cửa sổ Generator."
  },
  {
    id: "AGU_Q7_18",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "What is the Sprite Generator used for in Unity?",
    options: [
      "a. Generating high-quality standalone 2D sprite assets, such as icons, characters, items, decals, and portraits, from text prompts and reference images",
      "b. Recording real-time multiplayer network traffic",
      "c. Compiling C# scripts",
      "d. Managing version control branches for a project"
    ],
    correctIndex: 0,
    keyword_anchor: "Sprite Generator = Standalone 2D sprites (icons, items, portraits)",
    highlight_words: ["Sprite Generator used for", "standalone 2D sprite assets", "icons, characters, items"],
    explanation: "Sprite Generator tạo các sprite 2D độc lập chất lượng cao (icon, nhân vật, vật phẩm, chân dung) từ prompt và ảnh mẫu."
  },
  {
    id: "AGU_Q7_19",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "What is the Sound Generator used for in Unity?",
    options: [
      "a. Creating custom, game-ready audio clips using text-to-sound models or reference audio clips",
      "b. Compiling C# scripts",
      "c. Generating 3D terrain layers for outdoor environments",
      "d. Managing multiplayer room and lobby settings"
    ],
    correctIndex: 0,
    keyword_anchor: "Sound Generator = Custom audio clips via text-to-sound or reference audio",
    highlight_words: ["Sound Generator used for", "game-ready audio clips", "text-to-sound"],
    explanation: "Sound Generator dùng mô hình text-to-sound hoặc âm thanh tham chiếu để tạo clip âm thanh cho game."
  },
  {
    id: "AGU_Q7_20",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "If a game needs many short variations of a similar sound effect, such as different footstep sounds, how could the Sound Generator help speed up production?",
    options: [
      "a. By converting every footstep sound into a single looping music track",
      "b. By requiring a live actor to record each variation in a professional studio",
      "c. By quickly generating multiple game-ready audio clip variations from prompts instead of manually creating or recording each one",
      "d. By automatically deleting all but one footstep sound from the project"
    ],
    correctIndex: 2,
    keyword_anchor: "Footstep variations = Generate multiple audio variations from prompts",
    highlight_words: ["short variations", "footstep sounds", "multiple game-ready audio clip variations"],
    explanation: "Sound Generator dễ dàng sinh ra nhiều biến thể âm thanh ngắn khác nhau (như tiếng bước chân) chỉ từ prompt."
  },
  {
    id: "AGU_Q7_21",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Do assets generated by tools like the Sound Generator still need review before shipping in a finished game?",
    options: [
      "a. No review is needed only for audio, though it is needed for sprites and textures",
      "b. Review is only necessary if the audio is longer than one minute",
      "c. No - generated audio is always guaranteed to be production-ready with no review needed",
      "d. Yes - developers should review generated content for quality and appropriateness before using it in production"
    ],
    correctIndex: 3,
    keyword_anchor: "Generated assets = Always review for quality & appropriateness before shipping",
    highlight_words: ["still need review", "Yes", "quality and appropriateness"],
    explanation: "Tất cả tài nguyên (âm thanh, ảnh, vật liệu) do AI tạo ra đều cần được kiểm duyệt chất lượng và tính phù hợp trước khi phát hành."
  },
  {
    id: "AGU_Q7_22",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Compared to the Texture2D Generator, what kind of assets is the Sprite Generator generally NOT the best fit for?",
    options: [
      "a. Item or decal graphics",
      "b. Character portraits",
      "c. Individual UI icons",
      "d. General background or backdrop images, or seamless material surface textures"
    ],
    correctIndex: 3,
    keyword_anchor: "Sprite Generator NOT best for = Backgrounds / Seamless surface textures",
    highlight_words: ["NOT the best fit", "General background or backdrop images", "seamless material surface textures"],
    explanation: "Ảnh nền rộng hoặc texture bề mặt liền mạch là việc của Texture2D/Material Generator, không phải thế mạnh của Sprite Generator."
  },
  {
    id: "AGU_Q7_23",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Why might a developer open the standalone Generator window instead of staying in the Assistant chat for sprite creation?",
    options: [
      "a. Because the Generator window is required to save any Unity project at all",
      "b. Because the Assistant only works with 3D models, never 2D sprites",
      "c. Because the Assistant is incapable of understanding any image-related request",
      "d. To adjust model selection, resolution, output count, add reference images, or upscale a preview into a production-ready asset"
    ],
    correctIndex: 3,
    keyword_anchor: "Standalone Generator window = Fine control (model, res, count, upscale)",
    highlight_words: ["standalone Generator window", "adjust model selection, resolution, output count", "upscale"],
    explanation: "Cửa sổ Generator chuyên biệt cho phép tinh chỉnh sâu hơn: chọn model, độ phân giải, số lượng ảnh, thêm ảnh mẫu và upscale."
  },
  {
    id: "AGU_Q7_24",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Once created, do generated sprites function like any other sprite in Unity?",
    options: [
      "a. No - generated sprites can only be viewed, never used in a scene",
      "b. No - generated sprites must first be converted into 3D meshes",
      "c. No - generated sprites cannot be referenced from any script",
      "d. Yes - they can be assigned to Image components, used in Sprite Atlases, or referenced from code like any other sprite"
    ],
    correctIndex: 3,
    keyword_anchor: "Generated sprites = Work identically to normal Unity Sprites",
    highlight_words: ["function like any other sprite", "Yes", "Image components, used in Sprite Atlases"],
    explanation: "Sprite tạo ra là Sprite chuẩn của Unity, dùng bình thường với UI Image, Sprite Atlas hay gán qua code."
  },
  {
    id: "AGU_Q7_25",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Can a developer generate a sprite directly from a conversation with the Assistant, instead of always opening a separate Generator window first?",
    options: [
      "a. Yes, but only if the Generator window has already been permanently disabled",
      "b. No - the Assistant can only generate audio, never images",
      "c. No - sprites can only ever be created by manually opening the Generator window",
      "d. Yes - the Assistant can detect the requested asset type and use the matching Generator automatically"
    ],
    correctIndex: 3,
    keyword_anchor: "Generate via Assistant chat = Yes, auto-detects & calls matching Generator",
    highlight_words: ["directly from a conversation", "Yes", "detect the requested asset type", "matching Generator automatically"],
    explanation: "Có thể yêu cầu trực tiếp trong khung chat Assistant; nó sẽ tự nhận diện loại tài nguyên và gọi Generator tương ứng."
  },
  {
    id: "AGU_Q7_26",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Along with Sprite Generator and Texture2D Generator, which broader Unity AI toolset does the Sound Generator belong to?",
    options: [
      "a. Frame Debugger - the rendering diagnostics tool",
      "b. Generators - the set of AI asset-creation tools built into the Unity Editor",
      "c. NetworkManager - the multiplayer connection management system",
      "d. Inference Engine - the neural network runtime for pre-trained models"
    ],
    correctIndex: 1,
    keyword_anchor: "Sprite + Texture2D + Material + Sound = Generators toolset",
    highlight_words: ["broader Unity AI toolset", "Generators"],
    explanation: "Cả 4 công cụ tạo Sprite, Texture2D, Material và Sound đều thuộc bộ công cụ `Generators` tích hợp trong Unity Editor."
  },
  {
    id: "AGU_Q7_27",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Which two input approaches does the Sound Generator support for producing an audio clip?",
    options: [
      "a. Only a previously compiled build",
      "b. A text prompt describing the desired sound, or a reference audio clip",
      "c. Only a spreadsheet of numeric values",
      "d. Only a 3D model file"
    ],
    correctIndex: 1,
    keyword_anchor: "Sound Generator inputs = Text prompt OR Reference audio clip",
    highlight_words: ["Sound Generator support", "text prompt", "reference audio clip"],
    explanation: "Sound Generator hỗ trợ đầu vào bằng mô tả văn bản (text prompt) hoặc một đoạn âm thanh tham chiếu."
  },
  {
    id: "AGU_Q7_28",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Where can a developer preview, promote, or inspect an asset produced by the Sprite Generator after it's created?",
    options: [
      "a. Only inside a separate, non-Unity image editor",
      "b. Only in the Unity Asset Store listing page",
      "c. In the Project window and the Generations panel of the Generator window",
      "d. Only by exporting it to a spreadsheet"
    ],
    correctIndex: 2,
    keyword_anchor: "Preview/promote/inspect asset = Project window + Generations panel",
    highlight_words: ["preview, promote, or inspect", "Project window", "Generations panel"],
    explanation: "Sau khi tạo xong, bạn xem trước, nâng cấp (promote) hoặc kiểm tra asset tại Project window và Generations panel."
  },
  {
    id: "AGU_Q7_29",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "What benefit does \"upscaling\" provide when working with Generators such as the Texture2D Generator?",
    options: [
      "a. Automatically translating the asset's associated text prompt into another language",
      "b. Increasing a low-resolution generated asset's resolution/quality without losing quality",
      "c. Converting a 2D texture into a 3D mesh",
      "d. Reducing the asset's file size to zero"
    ],
    correctIndex: 1,
    keyword_anchor: "Upscaling = Increase resolution/quality of low-res preview",
    highlight_words: ["upscaling", "Increasing a low-resolution", "without losing quality"],
    explanation: "Upscaling giúp nâng độ phân giải của bản xem trước (preview) lên mức sắc nét dùng cho bản chính thức mà không bị mờ vỡ."
  },
  {
    id: "AGU_Q7_30",
    subject: "FE AGU",
    module: "Quiz 7: Unity AI Generators",
    question: "Where can a developer or team monitor AI usage and point balance when using Generators such as the Texture2D Generator across an organization?",
    options: [
      "a. The Console window's Clear button",
      "b. The Windows Task Manager",
      "c. The Unity Dashboard",
      "d. The Unity Asset Store reviews page"
    ],
    correctIndex: 2,
    keyword_anchor: "Monitor AI usage & point balance = The Unity Dashboard",
    highlight_words: ["monitor AI usage and point balance", "The Unity Dashboard"],
    explanation: "Việc theo dõi mức độ sử dụng AI và số điểm (point balance) của tổ chức được thực hiện trên Unity Dashboard."
  }
];
