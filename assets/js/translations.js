// ===== TRANSLATIONS =====
// Two-language support (English / Japanese) driven by `data-i18n` attributes
// on the markup. Persists the choice in localStorage so the page does not
// flash the wrong language on subsequent visits.

const I18N = {
  en: {
    // ---- Page meta ----
    'meta.title': 'Naoya Higashitani | Data Engineer',

    // ---- Nav ----
    'nav.about':        'About',
    'nav.skills':       'Skills',
    'nav.experience':   'Experience',
    'nav.demo':         'Demo',
    'nav.architecture': 'Architecture',
    'nav.contact':      'Contact',
    'nav.toggle':       '日本語',
    'nav.toggle.aria':  'Switch to Japanese',

    // ---- Hero ----
    'hero.badge':         'Open to new opportunities',
    'hero.title':         'Industrial <span class="highlight">Data Engineer</span><br/>&amp; AI Solutions Builder',
    'hero.desc':          'I turn raw industrial sensor data into decisions that hold up on the production floor — building scalable data pipelines, predictive maintenance models, and AI-augmented dashboards for regulated, mission-critical industries.',
    'hero.cta_demo':      '&#9654; See the demo',
    'hero.cta_project':   'View GitHub project',
    'hero.cta_contact':   'Get in touch',
    'hero.stat1':         '4+',
    'hero.stat1_label':   'years in industrial data &amp; quality engineering',
    'hero.stat2':         'AI',
    'hero.stat2_label':   'predictive maintenance &amp; anomaly detection',
    'hero.stat3':         'Global',
    'hero.stat3_label':   'cross-border R&amp;D and stakeholder coordination',
    'hero.visual_label':  'Live project evidence',
    'hero.visual_title':  'CMAPSS RUL benchmark',
    'hero.proof_coverage': 'test coverage',
    'hero.proof_tests':    'tests passing',
    'hero.proof_cert':     'G-Test certified',

    // ---- About ----
    'about.label':       'About Me',
    'about.title':       'Turning Industrial Data<br/>into <span class="accent">Operational Intelligence</span>',
    'about.p1':          'I&apos;m an engineer working where data, AI, and product reliability meet — building and operating predictive maintenance, quality analytics, and design-verification workflows for globally deployed precision instruments in highly regulated industries.',
    'about.p2':          'At Hitachi High-Technologies I contribute to fleet-scale AI predictive maintenance projects in close collaboration with international R&amp;D partners, lead root-cause analytics on operational telemetry, and bridge equipment domain knowledge to the data-science teams that turn it into shippable models.',
    'about.p3':          'Closing the OT / IT gap in regulated, mission-critical industries is the work I find most meaningful. I do my best work when data engineering and hands-on domain expertise come together to move the needle on reliability and cost.',
    'about.tag1':        'Predictive Maintenance',
    'about.tag2':        'Industrial IoT',
    'about.tag3':        'Time-Series Analysis',
    'about.tag4':        'Anomaly Detection',
    'about.tag5':        'Quality Analytics',
    'about.tag6':        'Cross-border Collaboration',
    'about.tag7':        'AI / ML',
    'about.value_label': 'What I Bring',
    'about.v1_h':        'Domain Expertise',
    'about.v1_p':        'A working understanding of operational data from globally deployed precision instruments — failure modes, sensor characteristics, and the maintenance workflows used in the field.',
    'about.v2_h':        'Full-Stack Data Engineering',
    'about.v2_p':        'From raw sensor ingestion (REST / Kafka) through data modelling, cleansing, transformation, and visualisation — I own the full pipeline.',
    'about.v3_h':        'AI-Augmented Solutions',
    'about.v3_p':        'Not just dashboards: ML models and AI agents that turn data patterns into maintenance decisions a field engineer can act on.',
    'about.v4_h':        'Cloud &amp; DevOps Mindset',
    'about.v4_p':        'CI/CD-first development with Docker, GitHub Actions, and Azure — building solutions that survive the jump from pilot to production.',

    // ---- Skills ----
    'skills.label':       'Technical Skills',
    'skills.title':       'Stack &amp; Tooling',
    'skills.subtitle':    'Covering the full industrial data &amp; AI engineering lifecycle — from edge sensor to executive dashboard.',
    'skills.cat_lang':    'Languages',
    'skills.cat_data':    'Data &amp; ML',
    'skills.cat_cloud':   'Cloud &amp; Infrastructure',
    'skills.cat_viz':     'Data Visualization',
    'skills.cat_int':     'Integration &amp; APIs',
    'skills.cat_devops':  'DevOps &amp; Quality',

    // ---- Experience ----
    'exp.label':    'Experience',
    'exp.title':    'Career Timeline',
    'exp.subtitle': 'Building industrial intelligence through data engineering and predictive analytics.',
    'exp.date':     'April 2022 — Present',
    'exp.role':     'Application &amp; Quality Engineer — Industrial AI / Data Analytics',
    'exp.company':  'Hitachi High-Technologies Corporation · Tokyo, Japan',
    'exp.b1':       'Drove fleet-scale AI predictive maintenance development for globally deployed precision instruments. Partnered with an international R&amp;D collaborator on data-sharing governance, schema definition, and feature design — translating equipment domain knowledge into ML inputs and seeing the resulting models through to product-grade deployment.',
    'exp.b2':       'Owned operational telemetry analytics for a globally deployed product fleet. Combined statistical analysis (FTA, fishbone diagrams, multivariate inspection of ~50 quality channels) with on-site root-cause investigation, driving an order-of-magnitude reduction in the out-of-spec rate on a key process metric.',
    'exp.b3':       'Co-developed an automation robotics initiative for clinical-workflow tasks: facilitated cross-functional design reviews, designed and analysed a quantitative product-evaluation survey, and was named co-inventor on a filed patent covering human–robot collaboration.',
    'exp.b4':       'Led design verification across multiple parallel themes with international R&amp;D peers in Europe, running technical reviews in English. Contributed data, calculation tooling, and regulatory documentation to a manufacturing-transfer programme that launched ahead of schedule.',
    'exp.b5':       'Continuously deepen ML / AI skills outside of core work — Kaggle competitions, a graduate-school medical-AI programme, G-Test (JDLA Generalist) certification, and active participation in academic conferences on medical AI and computer vision.',

    // ---- Demo ----
    'demo.label':         'Featured Project',
    'demo.title':         'Predictive Maintenance on NASA CMAPSS',
    'demo.repo_label':    'Open-source implementation',
    'demo.repo_h':        'predictive-maintenance-cmapss',
    'demo.repo_p':        'An end-to-end Python pipeline on NASA&apos;s CMAPSS turbofan degradation dataset — a strict-schema data loader, feature engineering, baseline and gradient-boosted RUL regressors, and executed Jupyter notebooks that show every result.',
    'demo.stat_cov':      'test coverage',
    'demo.stat_tests':    'tests passing',
    'demo.stat_py':       'Python matrix CI',
    'demo.stat_lic':      'licensed',
    'demo.cta_github':    '&#128187; View on GitHub',
    'demo.cta_readme':    '&#128214; Read the README',
    'demo.results_label': 'Results from the executed notebooks',
    'demo.results_h':     'Real benchmarks on FD001',
    'demo.results_p':     'Every figure below is rendered straight from the corresponding executed notebook in the repo — click any card to open the full notebook on GitHub.',
    'demo.c1_h':          'EDA — trajectories aligned to failure',
    'demo.c1_p':          '25 training units, sensor 11 plotted against cycles before failure. The clean monotonic drift in the last ~80 cycles is what motivates the piecewise-linear RUL relabelling later on.',
    'demo.c2_h':          'RUL distribution — raw vs. clipped',
    'demo.c2_p':          'Capping the regression target at 125 cycles concentrates model capacity on the regime where degradation is actually observable. The Heimes (2008) convention.',
    'demo.c3_h':          'Ridge baseline — RMSE 18.27 / S-score 592.6',
    'demo.c3_p':          'Standard-scaled L2 regression on rolling features. Sets the floor any non-linear model must clearly beat to justify the added complexity.',
    'demo.c4_h':          'XGBoost head-to-head — RMSE 18.23 / S-score 814.8',
    'demo.c4_p':          'Tuned XGBoost edges out Ridge on RMSE but loses on the asymmetric S-score. The honest result: FD001&apos;s single regime is exactly where linear features compete with trees.',
    'demo.c5_h':          'Feature importance corroborates the EDA',
    'demo.c5_p':          'Rolling statistics on the high-pressure-compressor sensors dominate the ranking — the very channels whose drift was visible in the EDA notebook.',
    'demo.c6_label':      'Coming next',
    'demo.c6_h':          'FD002 / FD004 multi-regime evaluation',
    'demo.c6_p':          'Operating-regime clustering, regime-aware normalisation, and an LSTM sequence model over full trajectories — the setting where XGBoost is expected to clearly win.',
    'demo.c6_link':       'Track progress on GitHub →',
    'demo.preview_label': 'Interactive concept preview',
    'demo.preview_h':     'Synthetic dashboard — live in your browser',
    'demo.preview_p':     'A self-contained Plotly visualisation showing how the same pipeline would behave against a live sensor stream. The data is synthetic and the page is fully static — for the real benchmark numbers, see the cards above.',
    'demo.chart_sensors': 'Multi-sensor time series — degradation monitoring',
    'demo.chart_rul':     'RUL prediction — actual vs. predicted',
    'demo.chart_anomaly': 'Anomaly detection — operating-state classification',
    'demo.chart_gauge':   'Equipment health score (current)',
    'demo.summary_label': 'Concept summary',
    'demo.summary_k1':    'Sensors',
    'demo.summary_v1':    'Vibration, temperature, pressure',
    'demo.summary_k2':    'Cycles',
    'demo.summary_v2':    '300 operating cycles',
    'demo.summary_k3':    'Alert threshold',
    'demo.summary_v3':    'Health score &lt; 30%',
    'demo.summary_k4':    'Implementation',

    // ---- Architecture ----
    'arch.label':    'Architecture',
    'arch.title':    'Data Pipeline Design',
    'arch.subtitle': 'End-to-end industrial data flow aligned with Cognite Data Fusion&apos;s integration model.',
    'arch.row1':     '01 — Data Sources &amp; Ingestion',
    'arch.row2':     '02 — Processing &amp; Contextualization',
    'arch.row3':     '03 — AI / Intelligence Layer',
    'arch.row4':     '04 — CI/CD &amp; Operations',
    'arch.s_equipment':       'Equipment',
    'arch.s_equipment_t':     'Sensors / PLC / DCS',
    'arch.s_protocol':        'OPC-UA / MQTT',
    'arch.s_protocol_t':      'Edge Protocol',
    'arch.s_extractor':       'Custom Extractor',
    'arch.s_extractor_t':     'Python + Docker',
    'arch.s_stream':          'Kafka / REST',
    'arch.s_stream_t':        'Event Streaming',
    'arch.s_lake':            'Data Lake',
    'arch.s_lake_t':          'Azure ADLS Gen2',
    'arch.s_transform':       'Transformation',
    'arch.s_transform_t':     'Spark / Databricks',
    'arch.s_modeling':        'Data Modeling',
    'arch.s_modeling_t':      'Graph + Relational',
    'arch.s_cdf':             'CDF / Data Fusion',
    'arch.s_cdf_t':           'Contextualized Assets',
    'arch.s_ml':              'ML Models',
    'arch.s_ml_t':            'RUL / Anomaly Detection',
    'arch.s_agent':           'AI Agent',
    'arch.s_agent_t':         'GenAI + LLM',
    'arch.s_alert':           'Alert Engine',
    'arch.s_alert_t':         'Threshold + Rule-based',
    'arch.s_dashboard':       'Dashboard',
    'arch.s_dashboard_t':     'Plotly Dash / Grafana',
    'arch.s_ci':              'GitHub Actions',
    'arch.s_ci_t':            'CI/CD Pipeline',
    'arch.s_registry':        'Container Registry',
    'arch.s_registry_t':      'Azure ACR / Docker',
    'arch.s_monitor':         'Monitoring',
    'arch.s_monitor_t':       'Azure Monitor / Grafana',

    // ---- Contact ----
    'contact.label': 'Contact',
    'contact.title': "Let&apos;s build something<br/><span class=\"accent\">industrial and intelligent</span>",
    'contact.desc':  'Open to Data Engineer and Data Scientist roles working on industrial AI and IIoT platforms. Casual chats are welcome — feel free to reach out.',

    // ---- Footer ----
    'footer.text': '© 2026 Naoya Higashitani &nbsp;&middot;&nbsp; Data Engineer &nbsp;&middot;&nbsp; Industrial AI',
  },

  ja: {
    // ---- Page meta ----
    'meta.title': '東谷直哉 | データエンジニア',

    // ---- Nav ----
    'nav.about':        '自己紹介',
    'nav.skills':       'スキル',
    'nav.experience':   '経歴',
    'nav.demo':         'デモ',
    'nav.architecture': 'アーキテクチャ',
    'nav.contact':      'お問い合わせ',
    'nav.toggle':       'EN',
    'nav.toggle.aria':  '英語に切り替え',

    // ---- Hero ----
    'hero.badge':         '新しい機会を探しています',
    'hero.title':         '<span class="highlight">産業データエンジニア</span><br/>× AI ソリューション開発',
    'hero.desc':          '産業現場のセンサーデータを、製造ラインで実際に使われる意思決定につなげる。規制やミッションクリティカル性が問われる産業領域を対象に、スケーラブルなデータパイプライン、予知保全モデル、AIを活かしたダッシュボードを設計・実装しています。',
    'hero.cta_demo':      '&#9654; デモを見る',
    'hero.cta_project':   'GitHubプロジェクトを見る',
    'hero.cta_contact':   'お問い合わせ',
    'hero.stat1':         '4+',
    'hero.stat1_label':   '産業データ・品質エンジニアとしての実務年数',
    'hero.stat2':         'AI',
    'hero.stat2_label':   '予知保全と異常検知',
    'hero.stat3':         'Global',
    'hero.stat3_label':   '海外R&amp;Dとの協業と社内外の調整',
    'hero.visual_label':  '公開プロジェクト実績',
    'hero.visual_title':  'CMAPSS RULベンチマーク',
    'hero.proof_coverage': 'テストカバレッジ',
    'hero.proof_tests':    'テスト全通過',
    'hero.proof_cert':     'G検定取得',

    // ---- About ----
    'about.label':       '自己紹介',
    'about.title':       '産業データを<br/><span class="accent">現場で活きる知見</span>へ',
    'about.p1':          'データ・AI・プロダクト信頼性が交わる領域で働くエンジニアです。規制の厳しい業界で世界各地に展開されている精密機器を対象に、予知保全・品質分析・設計検証のワークフローを構築・運用しています。',
    'about.p2':          '日立ハイテクでは、海外R&amp;Dパートナーと密に連携しながら、世界中で稼働する機器を対象としたフリート規模のAI予知保全に取り組んでいます。運用データの根本原因分析を主導するとともに、現場のドメイン知識をデータサイエンスチームへ橋渡しし、製品レベルでのモデル実装まで支える役割を担っています。',
    'about.p3':          'OTとITをつなぐ仕事に、最もやりがいを感じます。データエンジニアリングと現場のドメイン知識が組み合わさり、信頼性とコストの両面で実利を生む — そういう仕事を大事にしてきました。',
    'about.tag1':        '予知保全',
    'about.tag2':        '産業向けIoT',
    'about.tag3':        '時系列分析',
    'about.tag4':        '異常検知',
    'about.tag5':        '品質データ分析',
    'about.tag6':        '海外協業',
    'about.tag7':        'AI / 機械学習',
    'about.value_label': '提供できる価値',
    'about.v1_h':        'ドメイン知識',
    'about.v1_p':        '世界各地で稼働する精密機器の運用データを、現場感覚を伴って理解できます。故障モード、センサー特性、エンドユーザーの保守オペレーションまで踏まえた議論が可能です。',
    'about.v2_h':        'フルスタックのデータエンジニアリング',
    'about.v2_p':        '生センサーデータの取り込み（REST / Kafka）から、モデリング、クレンジング、変換、可視化まで、パイプライン全体を一貫して担えます。',
    'about.v3_h':        'AIを活かしたソリューション',
    'about.v3_p':        'ダッシュボードを並べるだけでは終わりません。データから取り出したパターンを、現場のエンジニアが実際に動ける保守判断へとつなげるMLモデルとAIエージェントを構築します。',
    'about.v4_h':        'クラウド &amp; DevOps の実践',
    'about.v4_p':        'Docker、GitHub Actions、Azure を組み合わせたCI/CDファーストの開発で、PoCから本番運用までスケールに耐えるソリューションを作ります。',

    // ---- Skills ----
    'skills.label':       '技術スキル',
    'skills.title':       'スタック &amp; ツール',
    'skills.subtitle':    '産業データとAIのエンジニアリング・ライフサイクル全体をカバーします — 現場のセンサーから経営ダッシュボードまで。',
    'skills.cat_lang':    '言語',
    'skills.cat_data':    'データ &amp; 機械学習',
    'skills.cat_cloud':   'クラウド &amp; インフラ',
    'skills.cat_viz':     'データ可視化',
    'skills.cat_int':     'インテグレーション &amp; API',
    'skills.cat_devops':  'DevOps &amp; 品質',

    // ---- Experience ----
    'exp.label':    '経歴',
    'exp.title':    'キャリアタイムライン',
    'exp.subtitle': 'データエンジニアリングと予測分析を通じた、産業現場の知能化への取り組み。',
    'exp.date':     '2022年4月 — 現在',
    'exp.role':     'アプリケーション／品質エンジニア — 産業AI・データ分析',
    'exp.company':  '株式会社日立ハイテク · 東京',
    'exp.b1':       '世界中に展開される精密機器を対象とした、フリート規模のAI予知保全開発を推進。海外R&amp;Dパートナーと連携し、データ共有のガバナンス整備、スキーマ定義、特徴量設計を主導。装置のドメイン知識をMLの特徴量へ落とし込み、製品レベルでのモデル実装までを一気通貫で支援。',
    'exp.b2':       '世界中で稼働する製品群の運用データ分析を主担当として推進。約50項目の品質指標に対する統計分析（FTA、特性要因図、多変量解析）と、製造現場での根本原因調査を組み合わせ、重要工程の閾値超過率を一桁オーダーまで低減。',
    'exp.b3':       '医療現場の業務を対象とした自動化ロボティクス開発プロジェクトに参画。部門横断の設計レビューでファシリテーターを務め、定量的な製品評価アンケートの設計・分析を担当。人とロボットの協働に関する出願済み特許の共同発明者。',
    'exp.b4':       '欧州のR&amp;Dメンバーと連携し、複数テーマの設計検証をリード。英語で技術レビューを運営する一方、製造移管プログラムでは検証データ・計算ツール・規制対応文書を提供し、計画前倒しでの立ち上げに寄与。',
    'exp.b5':       '業務外でも継続的にML・AIの学びを続行 — Kaggleコンペへの参加、大学院医療AIプログラムの修了、G検定（JDLAジェネラリスト）取得、医療AI・コンピュータビジョン分野の学会への積極的な参加など。',

    // ---- Demo ----
    'demo.label':         '注目プロジェクト',
    'demo.title':         'NASA CMAPSS を用いた予知保全',
    'demo.repo_label':    'オープンソース実装',
    'demo.repo_h':        'predictive-maintenance-cmapss',
    'demo.repo_p':        'NASAが公開するCMAPSSターボファン劣化データセットを用いた、エンドツーエンドのPythonパイプライン。厳格なスキーマ検証付きのデータローダー、特徴量エンジニアリング、ベースライン回帰モデルと勾配ブースティング回帰モデル、そしてすべての結果を収録した実行済みノートブックを備えています。',
    'demo.stat_cov':      'テストカバレッジ',
    'demo.stat_tests':    'テスト全通過',
    'demo.stat_py':       'Python マトリクス CI',
    'demo.stat_lic':      'ライセンス',
    'demo.cta_github':    '&#128187; GitHub で見る',
    'demo.cta_readme':    '&#128214; README を読む',
    'demo.results_label': 'ノートブックの実行結果',
    'demo.results_h':     'FD001 での実ベンチマーク',
    'demo.results_p':     '以下の図はすべて、リポジトリ内の実行済みノートブックから直接生成したものです。カードをクリックすると、GitHub上で対応するノートブックを開けます。',
    'demo.c1_h':          'EDA — 故障時点に揃えた軌跡',
    'demo.c1_p':          '訓練データ25ユニットのセンサー11を、故障までの残りサイクル数で揃えてプロット。最後の約80サイクルで明確な単調ドリフトが見られ、区分線形RULラベルを採用する根拠になっている。',
    'demo.c2_h':          'RUL分布 — 元データ vs クリップ後',
    'demo.c2_p':          '回帰のターゲットを125サイクルで上限カットすることで、劣化が実際に観測できる領域にモデルの学習リソースを集中させる。Heimes (2008) 以来の定石。',
    'demo.c3_h':          'Ridgeベースライン — RMSE 18.27 / Sスコア 592.6',
    'demo.c3_p':          'ローリング特徴量に対する、標準化＋L2正則化線形回帰。「より複雑なモデルを採用するなら、これを明確に上回るべき」という基準値（フロア）を設定する役割。',
    'demo.c4_h':          'XGBoost直接対決 — RMSE 18.23 / Sスコア 814.8',
    'demo.c4_p':          'チューニング済みXGBoostはRMSEでわずかにRidgeを上回るが、非対称なSスコアでは劣る結果に。FD001は単一の運転レジームしか含まないため、線形特徴量とツリー系モデルが拮抗する典型例 — 結果は誇張せずそのまま示している。',
    'demo.c5_h':          '特徴量重要度がEDAを裏付け',
    'demo.c5_p':          '高圧コンプレッサー系センサーのローリング統計が重要度の上位を占める。EDAノートブックで明確なドリフトが見えていた、まさにそのチャネル。',
    'demo.c6_label':      '今後の予定',
    'demo.c6_h':          'FD002 / FD004 でのマルチレジーム評価',
    'demo.c6_p':          '運転レジームのクラスタリング、レジームを考慮した正規化、軌跡全体を入力するLSTMシーケンスモデル — XGBoostが本来の強みを発揮できると期待される領域。',
    'demo.c6_link':       'GitHubで進捗を見る →',
    'demo.preview_label': 'コンセプト・プレビュー',
    'demo.preview_h':     '合成データのダッシュボード — ブラウザ上で動作',
    'demo.preview_p':     '同じパイプラインがリアルタイムのセンサーデータに対してどう動くかを、Plotly による自己完結型の可視化でデモンストレーション。データは合成のためページ自体は静的ですが、実際のベンチマーク値は上のカードをご覧ください。',
    'demo.chart_sensors': 'マルチセンサー時系列 — 劣化モニタリング',
    'demo.chart_rul':     'RUL予測 — 実値 vs 予測値',
    'demo.chart_anomaly': '異常検知 — 運転状態の分類',
    'demo.chart_gauge':   '設備ヘルススコア（現在値）',
    'demo.summary_label': '設定の概要',
    'demo.summary_k1':    'センサー',
    'demo.summary_v1':    '振動、温度、圧力',
    'demo.summary_k2':    'サイクル数',
    'demo.summary_v2':    '300 サイクル',
    'demo.summary_k3':    'アラート閾値',
    'demo.summary_v3':    'ヘルススコア &lt; 30%',
    'demo.summary_k4':    '実装',

    // ---- Architecture ----
    'arch.label':    'アーキテクチャ',
    'arch.title':    'データパイプライン設計',
    'arch.subtitle': 'Cognite Data Fusionの統合モデルに沿った、エンドツーエンドの産業データフロー。',
    'arch.row1':     '01 — データソース &amp; 取り込み',
    'arch.row2':     '02 — 処理 &amp; コンテキスト付与',
    'arch.row3':     '03 — AI / インテリジェンス層',
    'arch.row4':     '04 — CI/CD &amp; 運用',
    'arch.s_equipment':       '装置',
    'arch.s_equipment_t':     'センサー / PLC / DCS',
    'arch.s_protocol':        'OPC-UA / MQTT',
    'arch.s_protocol_t':      'エッジプロトコル',
    'arch.s_extractor':       'カスタムエクストラクター',
    'arch.s_extractor_t':     'Python + Docker',
    'arch.s_stream':          'Kafka / REST',
    'arch.s_stream_t':        'イベントストリーミング',
    'arch.s_lake':            'データレイク',
    'arch.s_lake_t':          'Azure ADLS Gen2',
    'arch.s_transform':       'データ変換',
    'arch.s_transform_t':     'Spark / Databricks',
    'arch.s_modeling':        'データモデリング',
    'arch.s_modeling_t':      'グラフ + リレーショナル',
    'arch.s_cdf':             'CDF / Data Fusion',
    'arch.s_cdf_t':           'コンテキスト付き資産',
    'arch.s_ml':              'ML モデル',
    'arch.s_ml_t':            'RUL / 異常検知',
    'arch.s_agent':           'AI エージェント',
    'arch.s_agent_t':         'GenAI + LLM',
    'arch.s_alert':           'アラートエンジン',
    'arch.s_alert_t':         '閾値ベース + ルールベース',
    'arch.s_dashboard':       'ダッシュボード',
    'arch.s_dashboard_t':     'Plotly Dash / Grafana',
    'arch.s_ci':              'GitHub Actions',
    'arch.s_ci_t':            'CI/CD パイプライン',
    'arch.s_registry':        'コンテナレジストリ',
    'arch.s_registry_t':      'Azure ACR / Docker',
    'arch.s_monitor':         '監視・運用',
    'arch.s_monitor_t':       'Azure Monitor / Grafana',

    // ---- Contact ----
    'contact.label': 'お問い合わせ',
    'contact.title': '<span class="accent">産業×インテリジェンス</span>を<br/>一緒に形にしませんか？',
    'contact.desc':  '産業AIやIIoTプラットフォーム領域での、データエンジニア・データサイエンティストの機会に関心があります。カジュアル面談も歓迎ですので、お気軽にご連絡ください。',

    // ---- Footer ----
    'footer.text': '© 2026 東谷直哉 &nbsp;&middot;&nbsp; データエンジニア &nbsp;&middot;&nbsp; 産業AI',
  },
};

const STORAGE_KEY = 'portfolio.lang';

function detectInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && I18N[saved]) return saved;
  } catch {
    /* localStorage unavailable */
  }
  const nav = (navigator.language || 'en').toLowerCase();
  return nav.startsWith('ja') ? 'ja' : 'en';
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;

  document.documentElement.setAttribute('lang', lang);
  document.title = dict['meta.title'] || document.title;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (value === undefined) return;
    el.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    const value = dict[key];
    if (value !== undefined) el.setAttribute('aria-label', value);
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* localStorage unavailable */
  }
}

function toggleLang() {
  const current = document.documentElement.getAttribute('lang') === 'ja' ? 'ja' : 'en';
  applyLang(current === 'ja' ? 'en' : 'ja');
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang(detectInitialLang());
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.addEventListener('click', toggleLang);
});
