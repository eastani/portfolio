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
    'hero.badge':         'Available for new opportunities',
    'hero.title':         'Industrial <span class="highlight">Data Engineer</span><br/>&amp; AI Solutions Builder',
    'hero.desc':          'I bridge the gap between raw industrial sensor data and actionable intelligence — designing scalable data pipelines, predictive maintenance models, and AI-powered dashboards for heavy industries.',
    'hero.cta_demo':      '&#9654; View Live Demo',
    'hero.cta_contact':   'Get in Touch',
    'hero.stat1':         '4+',
    'hero.stat1_label':   'Years in Industrial Data &amp; Quality Engineering',
    'hero.stat2':         'AI',
    'hero.stat2_label':   'Predictive Maintenance &amp; Anomaly Detection',
    'hero.stat3':         'Global',
    'hero.stat3_label':   'Cross-border R&amp;D &amp; Stakeholder Coordination',

    // ---- About ----
    'about.label':       'About Me',
    'about.title':       'Turning Industrial Data<br/>into <span class="accent">Operational Intelligence</span>',
    'about.p1':          'I&apos;m an engineer working at the intersection of data, AI, and product reliability — building and supporting predictive maintenance, quality analytics, and design-verification workflows for globally deployed precision instruments in a regulated industry.',
    'about.p2':          'At Hitachi High-Technologies, I contribute to fleet-scale AI predictive maintenance development with international R&amp;D partners, drive root-cause analytics on operational telemetry, and act as the bridge between equipment domain knowledge and the data-science teams that turn it into models.',
    'about.p3':          'I&apos;m passionate about bridging the OT / IT gap in regulated, mission-critical industries, and I thrive in environments where data engineering and hands-on domain expertise combine to drive real-world reliability and cost outcomes.',
    'about.tag1':        'Predictive Maintenance',
    'about.tag2':        'Industrial IoT',
    'about.tag3':        'Time-Series Analysis',
    'about.tag4':        'Anomaly Detection',
    'about.tag5':        'Quality Analytics',
    'about.tag6':        'Cross-border Collaboration',
    'about.tag7':        'AI / ML',
    'about.value_label': 'What I Bring',
    'about.v1_h':        'Domain Expertise',
    'about.v1_p':        'Hands-on understanding of operational data from globally deployed precision instruments — failure modes, sensor characteristics, and end-user maintenance workflows.',
    'about.v2_h':        'Full-Stack Data Engineering',
    'about.v2_p':        'From raw sensor ingestion (REST/Kafka) to data modeling, cleansing, transformation, and visualization — I own the full pipeline.',
    'about.v3_h':        'AI-Augmented Solutions',
    'about.v3_p':        'Building ML models and AI agents that translate data patterns into actionable maintenance decisions, not just dashboards.',
    'about.v4_h':        'Cloud &amp; DevOps Mindset',
    'about.v4_p':        'CI/CD-first development with Docker, GitHub Actions, and Azure — building solutions that scale beyond the initial pilot.',

    // ---- Skills ----
    'skills.label':       'Technical Skills',
    'skills.title':       'Stack &amp; Tooling',
    'skills.subtitle':    'Built around the industrial data &amp; AI engineering lifecycle — from edge sensor to executive dashboard.',
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
    'exp.b1':       'Contributed to fleet-scale AI predictive maintenance development for globally deployed precision instruments, partnering with an international R&amp;D collaborator on data-sharing governance, schema definition, and feature design — translating equipment domain knowledge into ML inputs and supporting product-grade deployment of the resulting models.',
    'exp.b2':       'Owned operational telemetry analytics on a globally deployed product fleet, combining statistical analysis (FTA, fishbone, multivariate inspection of ~50 quality channels) with on-site root-cause investigation; drove an order-of-magnitude reduction in out-of-spec rate on a key process metric.',
    'exp.b3':       'Co-developed an automation robotics initiative for clinical-workflow tasks: facilitated cross-functional design reviews, designed and analysed a quantitative product-evaluation survey, and was named co-inventor on a filed patent on human–robot collaboration.',
    'exp.b4':       'Led design verification across multiple parallel themes in coordination with international R&amp;D peers in Europe, running technical reviews in English; contributed data, calculation tooling, and regulatory documentation to a manufacturing-transfer programme that launched ahead of schedule.',
    'exp.b5':       'Continuously deepen ML / AI skills outside core work — Kaggle competitions, completion of a graduate-school medical-AI programme, G-Test (JDLA Generalist) certification, and active engagement with academic conferences on medical AI and computer vision.',

    // ---- Demo ----
    'demo.label':         'Featured Project',
    'demo.title':         'Predictive Maintenance on NASA CMAPSS',
    'demo.repo_label':    'Open-source implementation',
    'demo.repo_h':        'predictive-maintenance-cmapss',
    'demo.repo_p':        'An end-to-end Python pipeline on NASA&apos;s CMAPSS turbofan degradation dataset — strict-schema data loader, feature engineering, baseline and gradient-boosted RUL regressors, with executed Jupyter notebooks showing every result.',
    'demo.stat_cov':      'test coverage',
    'demo.stat_tests':    'tests passing',
    'demo.stat_py':       'Python matrix CI',
    'demo.stat_lic':      'licensed',
    'demo.cta_github':    '&#128187; View on GitHub',
    'demo.cta_readme':    '&#128214; Read the README',
    'demo.results_label': 'Results from the executed notebooks',
    'demo.results_h':     'Real benchmarks on FD001',
    'demo.results_p':     'Every figure below is rendered straight from the executed notebook in the repository — click any card to open the full notebook on GitHub.',
    'demo.c1_h':          'EDA — trajectories aligned to failure',
    'demo.c1_p':          '25 training units, sensor 11 plotted vs. cycles before failure. Clean monotonic drift in the last ~80 cycles motivates the piecewise-linear RUL relabelling.',
    'demo.c2_h':          'RUL distribution — raw vs. clipped',
    'demo.c2_p':          'Capping the regression target at 125 cycles concentrates model capacity on the regime where degradation is observable. Heimes (2008) convention.',
    'demo.c3_h':          'Ridge baseline — RMSE 18.27 / S-score 592.6',
    'demo.c3_p':          'Standard-scaled L2 regression on rolling features. Sets the floor that any non-linear model must clearly beat to justify its complexity.',
    'demo.c4_h':          'XGBoost head-to-head — RMSE 18.23 / S-score 814.8',
    'demo.c4_p':          'Tuned XGBoost edges out Ridge on RMSE but loses on the asymmetric S-score. The honest result: FD001&apos;s single regime is exactly where linear features compete with trees.',
    'demo.c5_h':          'Feature importance corroborates the EDA',
    'demo.c5_p':          'Rolling statistics on high-pressure-compressor sensors dominate — exactly the channels whose drift was visible in the EDA notebook.',
    'demo.c6_label':      'Coming next',
    'demo.c6_h':          'FD002 / FD004 multi-regime evaluation',
    'demo.c6_p':          'Operating-regime clustering, regime-aware normalisation, and an LSTM sequence model over full trajectories — the setting where XGBoost is expected to clearly win.',
    'demo.c6_link':       'Track progress on GitHub →',
    'demo.preview_label': 'Interactive concept preview',
    'demo.preview_h':     'Synthetic dashboard — live in your browser',
    'demo.preview_p':     'A self-contained Plotly visualisation of what the same pipeline looks like running against real-time sensor streams. The data is synthetic so the page stays static — for the actual benchmark numbers, see the cards above.',
    'demo.chart_sensors': 'Multi-Sensor Time Series — Degradation Monitoring',
    'demo.chart_rul':     'RUL Prediction — Actual vs. Predicted',
    'demo.chart_anomaly': 'Anomaly Detection — Operating State Classification',
    'demo.chart_gauge':   'Equipment Health Score (Current)',
    'demo.summary_label': 'Concept summary',
    'demo.summary_k1':    'Sensors',
    'demo.summary_v1':    'Vibration, Temperature, Pressure',
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
    'contact.title': "Let&apos;s Build Something<br/><span class=\"accent\">Industrial &amp; Intelligent</span>",
    'contact.desc':  'Open to Data Engineer / Data Scientist opportunities in industrial AI and IIoT platforms. Let&apos;s connect.',

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
    'hero.badge':         '新しい挑戦の機会を探しています',
    'hero.title':         '産業データエンジニア<br/>&amp; <span class="highlight">AI ソリューション開発者</span>',
    'hero.desc':          '産業現場のセンサーデータから、現場で本当に役立つ意思決定情報を引き出す。重工業の現場向けに、スケーラブルなデータパイプライン、予知保全モデル、AIダッシュボードを設計・実装してきました。',
    'hero.cta_demo':      '&#9654; デモを見る',
    'hero.cta_contact':   'お問い合わせ',
    'hero.stat1':         '4+',
    'hero.stat1_label':   '産業データ・品質エンジニアとしての経験年数',
    'hero.stat2':         'AI',
    'hero.stat2_label':   '予知保全と異常検知',
    'hero.stat3':         'Global',
    'hero.stat3_label':   '海外R&amp;Dとの協業・ステークホルダー調整',

    // ---- About ----
    'about.label':       '自己紹介',
    'about.title':       '産業データを、<br/><span class="accent">現場で活きる知見</span>へ',
    'about.p1':          'データ、AI、そしてプロダクト信頼性が交わる領域で活動するエンジニアです。規制が厳しい業界において世界各地で稼働している精密機器を対象に、予知保全・品質分析・設計検証の各ワークフローを構築・運用してきました。',
    'about.p2':          '日立ハイテクでは、海外のR&amp;Dパートナーと連携してフリート規模のAI予知保全開発に従事しています。運用データの根本原因分析を主導するとともに、装置のドメイン知識をデータサイエンスチームに橋渡しする役割も担っています。',
    'about.p3':          'OTとITをつなぐ仕事に、強くやりがいを感じています。データエンジニアリングと現場のドメイン知識を掛け合わせることで、信頼性とコストの両面で実利のある成果を生み出す — そんな仕事を大切にしています。',
    'about.tag1':        '予知保全',
    'about.tag2':        '産業向けIoT',
    'about.tag3':        '時系列分析',
    'about.tag4':        '異常検知',
    'about.tag5':        '品質データ分析',
    'about.tag6':        '海外協業',
    'about.tag7':        'AI / 機械学習',
    'about.value_label': '提供できる価値',
    'about.v1_h':        'ドメイン知識',
    'about.v1_p':        '世界各地で稼働する精密機器の運用データに対する実践的な理解 — 故障モード、センサー特性、エンドユーザーの保守オペレーションまで把握しています。',
    'about.v2_h':        'フルスタックのデータエンジニアリング',
    'about.v2_p':        '生センサーデータの取り込み（REST / Kafka）から、データモデリング、クレンジング、変換、可視化まで、パイプライン全体を一貫して担えます。',
    'about.v3_h':        'AIを活かしたソリューション',
    'about.v3_p':        '単にダッシュボードを作るだけでなく、データの中のパターンを実際の保守判断へ落とし込めるMLモデルやAIエージェントを構築します。',
    'about.v4_h':        'クラウド &amp; DevOps の実践',
    'about.v4_p':        'Docker、GitHub Actions、Azure を活用したCI/CDファーストの開発で、PoC段階から本番運用まで耐えるソリューションを構築します。',

    // ---- Skills ----
    'skills.label':       '技術スキル',
    'skills.title':       'スタック &amp; ツール',
    'skills.subtitle':    '産業データとAIのエンジニアリング・ライフサイクル全体に沿った構成 — 現場のセンサーから経営層が見るダッシュボードまで。',
    'skills.cat_lang':    '言語',
    'skills.cat_data':    'データ &amp; 機械学習',
    'skills.cat_cloud':   'クラウド &amp; インフラ',
    'skills.cat_viz':     'データ可視化',
    'skills.cat_int':     'インテグレーション &amp; API',
    'skills.cat_devops':  'DevOps &amp; 品質',

    // ---- Experience ----
    'exp.label':    '経歴',
    'exp.title':    'キャリアタイムライン',
    'exp.subtitle': 'データエンジニアリングと予測分析の力で、産業現場のインテリジェンス化を推進。',
    'exp.date':     '2022年4月 — 現在',
    'exp.role':     'アプリケーション・品質エンジニア（産業AI / データ分析領域）',
    'exp.company':  '株式会社日立ハイテク · 東京',
    'exp.b1':       '海外で展開される精密機器を対象とした、フリート規模のAI予知保全開発に従事。海外のR&amp;Dパートナーと連携し、データ共有のガバナンス整備、スキーマ定義、特徴量設計を推進。装置のドメイン知識をMLの特徴量に落とし込み、得られたモデルの製品レベルでの実装までを支援しました。',
    'exp.b2':       '世界各地で稼働する製品群の運用データ分析を主担当として推進。約50項目の品質指標に対する統計分析（FTA、特性要因図、多変量解析）と、現場での根本原因調査を組み合わせ、重要工程の閾値超過率を1桁オーダーまで低減しました。',
    'exp.b3':       '医療現場の業務を対象とした自動化ロボティクスの開発プロジェクトに参画。部門横断の設計レビューでファシリテーターを務め、定量的な製品評価アンケートの設計・分析を担当。人とロボットの協働に関する出願済み特許の共同発明者となりました。',
    'exp.b4':       'ヨーロッパのR&amp;Dメンバーと連携し、複数テーマの設計検証をリード。英語で技術レビューを運営する一方、製造移管プログラムでは検証データ・計算ツール・規制対応文書を提供し、計画前倒しでの立ち上げに貢献しました。',
    'exp.b5':       '業務外でも継続的にML・AIの学びに取り組んでいます — Kaggle コンペへの参加、大学院医療AIプログラムの修了、G検定（JDLAジェネラリスト）取得、医療AIやコンピュータビジョン分野の学会への積極的な参加など。',

    // ---- Demo ----
    'demo.label':         '注目プロジェクト',
    'demo.title':         'NASA CMAPSS による予知保全',
    'demo.repo_label':    'オープンソース実装',
    'demo.repo_h':        'predictive-maintenance-cmapss',
    'demo.repo_p':        'NASA が公開する CMAPSS ターボファン劣化データセットを用いた、エンドツーエンドの Python パイプライン。厳格にスキーマ検証されたデータローダー、特徴量エンジニアリング、ベースラインと勾配ブースティングのRUL回帰モデル、そしてすべての結果が含まれた実行済みノートブックを備えています。',
    'demo.stat_cov':      'テストカバレッジ',
    'demo.stat_tests':    'テスト全通過',
    'demo.stat_py':       'Python マトリクス CI',
    'demo.stat_lic':      'ライセンス',
    'demo.cta_github':    '&#128187; GitHub で見る',
    'demo.cta_readme':    '&#128214; README を読む',
    'demo.results_label': 'ノートブックの実行結果',
    'demo.results_h':     'FD001 での実ベンチマーク',
    'demo.results_p':     '以下の図はすべて、リポジトリ内の実行済みノートブックから直接生成しています。カードをクリックすると GitHub 上で対応するノートブックを表示できます。',
    'demo.c1_h':          'EDA — 故障時点に揃えた軌跡',
    'demo.c1_p':          '訓練データ 25 ユニットのセンサー 11 を、故障までの残りサイクル数で揃えてプロット。最後の約 80 サイクルで明確な単調ドリフトが見られ、区分線形 RUL ラベルを採用する根拠となります。',
    'demo.c2_h':          'RUL分布 — 元データ vs クリップ後',
    'demo.c2_p':          '回帰のターゲットを 125 サイクルで上限カットすることで、劣化が実際に観測できる領域にモデルの学習リソースを集中させます。Heimes (2008) 以来の定石です。',
    'demo.c3_h':          'Ridge ベースライン — RMSE 18.27 / Sスコア 592.6',
    'demo.c3_p':          'ローリング特徴量に対する標準化＋L2正則化線形回帰。「これより複雑なモデルを採用するなら、明確に上回るべき」という基準値（フロア）を設定します。',
    'demo.c4_h':          'XGBoost 直接対決 — RMSE 18.23 / Sスコア 814.8',
    'demo.c4_p':          'チューニング済み XGBoost は RMSE では Ridge を僅差で上回りますが、非対称な S スコアでは負ける結果に。FD001 は単一の運転レジームしか含まないため、線形特徴量とツリー系モデルが拮抗する典型例です — 結果は誤魔化さずそのまま。',
    'demo.c5_h':          '特徴量重要度が EDA を裏付け',
    'demo.c5_p':          '高圧コンプレッサー系センサーのローリング統計が重要度の上位を占めました。EDA ノートブックで明確なドリフトが見えていた、まさにそのチャネルです。',
    'demo.c6_label':      '次の予定',
    'demo.c6_h':          'FD002 / FD004 のマルチレジーム評価',
    'demo.c6_p':          '運転レジームのクラスタリング、レジームを考慮した正規化、軌跡全体を入力する LSTM シーケンスモデル — XGBoost が本来の強みを発揮できると期待される領域です。',
    'demo.c6_link':       'GitHub で進捗を見る →',
    'demo.preview_label': 'コンセプト・プレビュー',
    'demo.preview_h':     '合成データのダッシュボード — ブラウザ上でライブ動作',
    'demo.preview_p':     '同じパイプラインがリアルタイム・センサーデータに対してどのように動くかを、Plotly による自己完結型の可視化でデモンストレーション。データは合成データのためページは静的に動きますが、実際のベンチマーク値は上のカードをご覧ください。',
    'demo.chart_sensors': 'マルチセンサー時系列 — 劣化モニタリング',
    'demo.chart_rul':     'RUL 予測 — 実値 vs 予測値',
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
    'arch.subtitle': 'Cognite Data Fusion の統合モデルに沿った、エンドツーエンドの産業データフロー。',
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
    'contact.title': '<span class="accent">産業×インテリジェンス</span>を、<br/>一緒に形にしませんか',
    'contact.desc':  '産業AIやIIoTプラットフォーム領域での、データエンジニア・データサイエンティストの機会に関心があります。ご相談・カジュアル面談も歓迎ですので、お気軽にご連絡ください。',

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
