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
    'nav.contact':      'コンタクト',
    'nav.toggle':       'EN',
    'nav.toggle.aria':  '英語に切り替え',

    // ---- Hero ----
    'hero.badge':         '新たな機会を探しています',
    'hero.title':         '産業向け<span class="highlight">データエンジニア</span><br/>&amp; AI ソリューション開発',
    'hero.desc':          '産業センサーの生データを実用知へ橋渡しする — 重厚長大産業向けに、スケーラブルなデータパイプライン、予知保全モデル、AI を活用したダッシュボードを設計・開発しています。',
    'hero.cta_demo':      '&#9654; ライブデモを見る',
    'hero.cta_contact':   'お問い合わせ',
    'hero.stat1':         '4+',
    'hero.stat1_label':   '産業データ・品質エンジニアリングの経験年数',
    'hero.stat2':         'AI',
    'hero.stat2_label':   '予知保全 &amp; 異常検知',
    'hero.stat3':         'Global',
    'hero.stat3_label':   '国際 R&amp;D・ステークホルダー調整',

    // ---- About ----
    'about.label':       '自己紹介',
    'about.title':       '産業データを<br/><span class="accent">実用知</span>へ',
    'about.p1':          'データ・AI・プロダクト信頼性の交差点で働くエンジニアです。規制業界で世界展開される精密機器を対象に、予知保全、品質分析、設計検証のワークフローを構築・支援しています。',
    'about.p2':          '日立ハイテクでは、国際 R&amp;D パートナーと連携した大規模 AI 予知保全の開発、運用テレメトリの根本原因分析、そして装置のドメイン知識をデータサイエンスチームへ橋渡しする役割を担っています。',
    'about.p3':          '規制が厳しくミッションクリティカルな産業における OT / IT のギャップを埋めることに情熱を注いでいます。データエンジニアリングと現場のドメイン知識が組み合わさり、信頼性とコスト効果に直結する成果を生み出す環境で力を発揮します。',
    'about.tag1':        '予知保全',
    'about.tag2':        'インダストリアル IoT',
    'about.tag3':        '時系列分析',
    'about.tag4':        '異常検知',
    'about.tag5':        '品質分析',
    'about.tag6':        '国際協業',
    'about.tag7':        'AI / 機械学習',
    'about.value_label': '提供できる価値',
    'about.v1_h':        'ドメイン知識',
    'about.v1_p':        '世界展開される精密機器の運用データに対する実践的な理解 — 故障モード、センサー特性、エンドユーザーの保守ワークフロー。',
    'about.v2_h':        'フルスタックなデータエンジニアリング',
    'about.v2_p':        '生センサーデータの取り込み（REST / Kafka）から、データモデリング、クレンジング、変換、可視化まで、パイプライン全体を担います。',
    'about.v3_h':        'AI 強化型ソリューション',
    'about.v3_p':        '単なるダッシュボードではなく、データパターンを実行可能な保守判断へ落とし込む ML モデルと AI エージェントを構築します。',
    'about.v4_h':        'クラウド &amp; DevOps 思考',
    'about.v4_p':        'Docker、GitHub Actions、Azure を用いた CI/CD ファーストの開発 — 初期 PoC を超えてスケールするソリューションを構築します。',

    // ---- Skills ----
    'skills.label':       '技術スキル',
    'skills.title':       'スタック &amp; ツール',
    'skills.subtitle':    '産業データ・AI エンジニアリングのライフサイクルに沿って構成 — エッジセンサーから経営層ダッシュボードまで。',
    'skills.cat_lang':    '言語',
    'skills.cat_data':    'データ &amp; 機械学習',
    'skills.cat_cloud':   'クラウド &amp; インフラ',
    'skills.cat_viz':     'データ可視化',
    'skills.cat_int':     '統合 &amp; API',
    'skills.cat_devops':  'DevOps &amp; 品質',

    // ---- Experience ----
    'exp.label':    '経歴',
    'exp.title':    'キャリアタイムライン',
    'exp.subtitle': 'データエンジニアリングと予測分析を通じて、産業の知能化を推進。',
    'exp.date':     '2022年4月 — 現在',
    'exp.role':     'アプリケーション・品質エンジニア — 産業 AI / データ分析',
    'exp.company':  '株式会社日立ハイテク · 東京',
    'exp.b1':       '世界展開される精密機器を対象とした、フリート規模の AI 予知保全開発に従事。国際 R&amp;D 協業者と連携してデータ共有ガバナンス、スキーマ定義、特徴量設計を推進し、装置のドメイン知識を ML 入力に翻訳しつつ、得られたモデルの製品グレードでの実装まで支援。',
    'exp.b2':       '世界展開された製品群の運用テレメトリ分析をオーナーとして主導。約 50 項目の品質チャネルに対する統計分析（FTA、特性要因図、多変量検査）と現場での根本原因調査を組み合わせ、重要工程の閾値超過率を 1 桁オーダーで低減。',
    'exp.b3':       '臨床ワークフロー業務向け自動化ロボティクス開発に共同参画。部門横断の設計レビューのファシリテーション、定量的な製品評価アンケートの設計と分析を担当し、人とロボットの協働に関する出願済み特許の共同発明者に就任。',
    'exp.b4':       '欧州の国際 R&amp;D メンバーと連携し、複数テーマの設計検証をリード。英語で技術レビューを運営し、製造移管プログラムにおいてはデータ・計算ツール・規制対応文書を提供して、計画より前倒しでの立ち上げに貢献。',
    'exp.b5':       '業務外でも継続的に ML / AI スキルを深耕 — Kaggle コンペティション参加、大学院医療 AI プログラム修了、G 検定（JDLA ジェネラリスト）取得、医療 AI / コンピュータビジョン分野の学会への積極的参加。',

    // ---- Demo ----
    'demo.label':         '主要プロジェクト',
    'demo.title':         'NASA CMAPSS による予知保全',
    'demo.repo_label':    'オープンソース実装',
    'demo.repo_h':        'predictive-maintenance-cmapss',
    'demo.repo_p':        'NASA の CMAPSS ターボファン劣化データセットを用いた、エンドツーエンドの Python パイプライン — 厳格スキーマのデータローダー、特徴量エンジニアリング、ベースライン &amp; 勾配ブースティング RUL 回帰器、すべての結果を含む実行済み Jupyter ノートブック。',
    'demo.stat_cov':      'テストカバレッジ',
    'demo.stat_tests':    'テスト全通過',
    'demo.stat_py':       'Python マトリクス CI',
    'demo.stat_lic':      'ライセンス',
    'demo.cta_github':    '&#128187; GitHub で見る',
    'demo.cta_readme':    '&#128214; README を読む',
    'demo.results_label': '実行済みノートブックの結果',
    'demo.results_h':     'FD001 における実ベンチマーク',
    'demo.results_p':     '以下のすべての図は、リポジトリの実行済みノートブックから直接生成されています — カードをクリックすると GitHub で完全なノートブックが開きます。',
    'demo.c1_h':          'EDA — 故障時点に揃えた軌跡',
    'demo.c1_p':          '訓練データ 25 ユニットのセンサー 11 を、故障までのサイクル数で揃えてプロット。最後の約 80 サイクルで明確な単調ドリフトが観察され、これが区分線形 RUL ラベル付けの動機となる。',
    'demo.c2_h':          'RUL 分布 — 生 vs クリップ後',
    'demo.c2_p':          '回帰ターゲットを 125 サイクルで上限カットすることで、劣化が観測可能な領域にモデル容量を集中させる。Heimes (2008) の慣例。',
    'demo.c3_h':          'Ridge ベースライン — RMSE 18.27 / S スコア 592.6',
    'demo.c3_p':          'ローリング特徴量に対する標準スケーリング L2 回帰。複雑性を正当化するためには非線形モデルが明確に上回るべき、その基準を設定。',
    'demo.c4_h':          'XGBoost 直接対決 — RMSE 18.23 / S スコア 814.8',
    'demo.c4_p':          'チューニング済み XGBoost は RMSE で Ridge を僅差で上回るが、非対称な S スコアでは負ける。誠実な結果：FD001 の単一レジームはまさに線形特徴量がツリーと拮抗する領域。',
    'demo.c5_h':          '特徴量重要度が EDA を裏付け',
    'demo.c5_p':          '高圧コンプレッサー系センサーのローリング統計が上位を占める — まさに EDA ノートブックでドリフトが見えていたチャネル。',
    'demo.c6_label':      '次に予定',
    'demo.c6_h':          'FD002 / FD004 のマルチレジーム評価',
    'demo.c6_p':          '運用レジームのクラスタリング、レジームを考慮した正規化、軌跡全体に対する LSTM シーケンスモデル — XGBoost が明確に勝つと期待される設定。',
    'demo.c6_link':       'GitHub で進捗を追う →',
    'demo.preview_label': 'インタラクティブな概念プレビュー',
    'demo.preview_h':     '合成ダッシュボード — ブラウザでライブ表示',
    'demo.preview_p':     '同じパイプラインがリアルタイムセンサーストリームに対して動作する様子を、自己完結型の Plotly 可視化で示します。データは合成のためページは静的です — 実ベンチマーク数値は上のカードを参照してください。',
    'demo.chart_sensors': 'マルチセンサー時系列 — 劣化モニタリング',
    'demo.chart_rul':     'RUL 予測 — 実値 vs 予測値',
    'demo.chart_anomaly': '異常検知 — 運用状態の分類',
    'demo.chart_gauge':   '機器ヘルススコア（現在）',
    'demo.summary_label': '概念サマリー',
    'demo.summary_k1':    'センサー',
    'demo.summary_v1':    '振動、温度、圧力',
    'demo.summary_k2':    'サイクル数',
    'demo.summary_v2':    '300 運用サイクル',
    'demo.summary_k3':    'アラート閾値',
    'demo.summary_v3':    'ヘルススコア &lt; 30%',
    'demo.summary_k4':    '実装',

    // ---- Architecture ----
    'arch.label':    'アーキテクチャ',
    'arch.title':    'データパイプライン設計',
    'arch.subtitle': 'Cognite Data Fusion の統合モデルに整合した、エンドツーエンドの産業データフロー。',
    'arch.row1':     '01 — データソース &amp; 取り込み',
    'arch.row2':     '02 — 処理 &amp; コンテキスト化',
    'arch.row3':     '03 — AI / インテリジェンス層',
    'arch.row4':     '04 — CI/CD &amp; 運用',
    'arch.s_equipment':       '機器',
    'arch.s_equipment_t':     'センサー / PLC / DCS',
    'arch.s_protocol':        'OPC-UA / MQTT',
    'arch.s_protocol_t':      'エッジプロトコル',
    'arch.s_extractor':       'カスタム抽出器',
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
    'arch.s_cdf_t':           'コンテキスト化された資産',
    'arch.s_ml':              'ML モデル',
    'arch.s_ml_t':            'RUL / 異常検知',
    'arch.s_agent':           'AI エージェント',
    'arch.s_agent_t':         'GenAI + LLM',
    'arch.s_alert':           'アラートエンジン',
    'arch.s_alert_t':         '閾値 + ルールベース',
    'arch.s_dashboard':       'ダッシュボード',
    'arch.s_dashboard_t':     'Plotly Dash / Grafana',
    'arch.s_ci':              'GitHub Actions',
    'arch.s_ci_t':            'CI/CD パイプライン',
    'arch.s_registry':        'コンテナレジストリ',
    'arch.s_registry_t':      'Azure ACR / Docker',
    'arch.s_monitor':         '監視',
    'arch.s_monitor_t':       'Azure Monitor / Grafana',

    // ---- Contact ----
    'contact.label': 'コンタクト',
    'contact.title': '<span class="accent">産業 &amp; インテリジェント</span>な<br/>プロダクトを共に',
    'contact.desc':  '産業 AI / IIoT プラットフォームにおけるデータエンジニア / データサイエンティストのポジションに関心があります。お気軽にご連絡ください。',

    // ---- Footer ----
    'footer.text': '© 2026 東谷直哉 &nbsp;&middot;&nbsp; データエンジニア &nbsp;&middot;&nbsp; 産業 AI',
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
