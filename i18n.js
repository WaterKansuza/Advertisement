/* ==========================================================================
   Bilingual Dictionary (Vietnamese / English)
   All OpenSleep figures match SleepDebtEngine.kt, sonar_engine.h,
   NightSoundClassifier.kt, AppDatabase.kt, and app/build.gradle.kts.
   ========================================================================== */

window.SITE_I18N = {
  vi: {
    'nav.process': 'NGUYÊN LÝ',
    'nav.output': 'MÔ PHỎNG',
    'nav.material': 'VẬT LIỆU',
    'nav.numbers': 'THÔNG SỐ',
    'nav.works': 'DỰ ÁN KHÁC',
    'nav.home': 'OPENSLEEP',
    'nav.cta': 'TẢI APK',

    'hero.kicker': 'OPENSLEEP · V0.4.0 · GPL-3.0 · ANDROID 8.0+',
    'hero.title': 'Đo trọn vẹn giấc ngủ mà <em>không gửi đi</em> một byte dữ liệu nào.',
    'hero.lede': 'Ứng dụng Android mã nguồn mở sử dụng sóng siêu âm 18.75 kHz xử lý ngay trên C++ NDK, kết hợp mô hình nợ ngủ suy giảm hàm mũ 14 ngày và nhận diện âm thanh ngoại tuyến bằng YAMNet.',
    'hero.btnPrimary': 'TẢI BẢN MỚI NHẤT (.APK)',
    'hero.btnSecondary': 'MÃ NGUỒN GITHUB',
    'hero.spec1k': 'SÓNG MANG SONAR',
    'hero.spec2k': 'CỬA SỔ NỢ NGỦ',
    'hero.spec3k': 'MÔ HÌNH ÂM THANH',
    'hero.spec4k': 'CƠ SỞ DỮ LIỆU',

    'arg.kicker': '01 · LẬP LUẬN THIẾT KẾ',
    'arg.title': 'Giấc ngủ không nên nằm sau <em>tường phí</em> hay máy chủ.',
    'arg.lede': 'Mỗi đêm theo dõi chỉ chạm vào bộ nhớ cục bộ của điện thoại. Thuật toán nợ ngủ, bộ lọc pha và mô hình âm thanh đều được giữ minh bạch để bạn tự đọc, tự kiểm chứng và tự sao lưu.',
    'arg.r1k': 'CỬA SỔ NỢ NGỦ 14 NGÀY',
    'arg.r1d': 'Tính sai lệch nhu cầu ngủ mỗi đêm với trọng số suy giảm hàm mũ w_k = e^(-0.085·k) và bất đối xứng phục hồi giới hạn 85%, tối đa 90 phút/ngày.',
    'arg.r1v': '14d · λ=0.085',
    'arg.r2k': 'GIẢI ĐIỀU CHẾ I/Q KHÔNG CHẠM',
    'arg.r2d': 'Phát sóng liên tục 18.75 kHz ở 48 kHz qua Google Oboe, hạ mẫu 480:1 xuống 100 Hz, triệt tiêu thành phần tĩnh và mở pha atan2 để tách nhịp thở 0.10–0.55 Hz.',
    'arg.r2v': '18,750 Hz',
    'arg.r3k': 'NHẬN DIỆN ÂM THANH TIẾT KIỆM PIN',
    'arg.r3d': 'Duy trì bộ đệm vòng trên RAM và chỉ đánh thức bộ suy luận YAMNet LiteRT (15,600 mẫu @ 16 kHz) khi âm thanh vượt ngưỡng nền phòng.',
    'arg.r3v': '521 classes',
    'arg.r4k': 'DỮ LIỆU NẰM TRONG SANDBOX',
    'arg.r4d': 'Không tài khoản, không đồng bộ đám mây; xuất và nhập toàn bộ lịch sử qua Storage Access Framework dạng tệp JSON cục bộ.',
    'arg.r4v': 'JSON / SAF',

    'demo.kicker': '02 · TRÌNH DIỄN ĐẦU RA',
    'demo.title': 'Tín hiệu thật tự <em>vẽ lại</em> đường đi của nó.',
    'demo.lede': 'Chọn một chế độ để chuyển đổi cùng một đường SVG giữa sóng pha nhịp thở Sonar, đường suy giảm nợ ngủ 14 ngày và đường cong nhịp sinh học Process C.',
    'demo.v1': '01 · PHA THỞ SONAR (18.75 KHZ)',
    'demo.v2': '02 · SUY GIẢM NỢ NGỦ 14 NGÀY',
    'demo.v3': '03 · ĐƯỜNG CONG NHỊP SINH HỌC',

    'mat.kicker': '03 · VẬT LIỆU KỸ THUẬT',
    'mat.title': 'Cấu trúc <em>thuần bản địa</em>, không phụ thuộc SDK quảng cáo.',
    'mat.lede': 'Toàn bộ ngăn xếp từ âm thanh C++ tầng thấp đến giao diện Jetpack Compose được khai báo tường minh trong mã nguồn mở GPL-3.0.',
    'mat.r1k': 'LÕI DSP C++17 & OBOE',
    'mat.r1d': 'Biên dịch bằng NDK + CMake 3.22.1 với cờ -O3 -ffast-math cho hai kiến trúc arm64-v8a và armeabi-v7a, chạy trực tiếp qua JNI.',
    'mat.r2k': 'PHÂN LOẠI ÂM THANH CỤC BỘ',
    'mat.r2d': 'Tệp yamnet.tflite không nén trong assets, chạy bằng LiteRT 2.3.0 trên 2 luồng để gắn nhãn ngáy, giọng nói, cử động và tạp âm phòng.',
    'mat.r3k': 'LƯỢC ĐỒ ROOM SQLITE',
    'mat.r3d': '10 bảng lưu phiên ngủ, epoch 30 giây, nhật ký mơ, sự kiện âm thanh, thói quen, báo thức và snapshot nợ ngủ hàng ngày; tắt auto-backup hệ thống.',
    'mat.r4k': 'PHẠM VI QUYỀN MẠNG',
    'mat.r4d': 'Dữ liệu giấc ngủ không bao giờ rời khỏi máy. Quyền INTERNET trong Manifest chỉ phục vụ kiểm tra và tải APK bản phát hành từ GitHub Releases.',

    'meas.kicker': '04 · BẢNG ĐO LƯỜNG XÁC MINH',
    'meas.title': 'Chỉ những con số đọc được từ <em>mã nguồn</em>.',
    'meas.lede': 'Mọi giá trị dưới đây khớp chính xác với hằng số trong SleepDebtEngine, sonar_engine.h, NightSoundClassifier và build.gradle.kts phiên bản 0.4.0.',
    'meas.m1k': 'TẦN SỐ SÓNG MANG',
    'meas.m1d': 'Tần số phát liên tục mặc định cho luồng Sonar Oboe (SonarEngine::start)',
    'meas.m2k': 'TỶ LỆ HẠ MẪU I/Q',
    'meas.m2d': 'Giảm tốc độ lấy mẫu từ đầu vào 48,000 Hz xuống baseband 100 Hz',
    'meas.m3k': 'BĂNG THÔNG NHỊP THỞ',
    'meas.m3d': 'Bộ lọc Biquad High-Pass & Low-Pass tách chuyển động lồng ngực',
    'meas.m4k': 'CHU KỲ TRƯỢT NỢ NGỦ',
    'meas.m4d': 'Số ngày trong cửa sổ tích lũy với hệ số suy giảm mặc định λ = 0.085',
    'meas.m4v': '14 ngày',
    'meas.m5k': 'MIỀN NHU CẦU SINH LÝ',
    'meas.m5d': 'Khoảng giới hạn nhu cầu ngủ cá nhân (6.5 đến 10.0 giờ)',
    'meas.m5v': '390 – 600 phút',
    'meas.m6k': 'HỆ SỐ HỒI PHỤC & NGỦ TRƯA',
    'meas.m6d': 'Trọng số quy đổi giấc ngủ trưa (≥15 phút) và trần trả nợ mỗi ngày',
    'meas.m6v': '85% / 90 phút',
    'meas.m7k': 'KHUNG MẪU YAMNET',
    'meas.m7d': 'Số mẫu float ở 16 kHz (0.975s) cho mỗi lần phân loại 521 lớp âm thanh',
    'meas.m7v': '15,600 mẫu',
    'meas.m8k': 'PHẠM VI ANDROID HỖ TRỢ',
    'meas.m8d': 'Từ Android 8.0 (minSdk 26 với AAudio) đến SDK mục tiêu 37',

    'close.kicker': '05 · PHÁT HÀNH & TÁC GIẢ',
    'close.title': 'Cài đặt trên máy bạn, <em>giữ trọn</em> trên máy bạn.',
    'close.fineprint': 'OpenSleep v0.4.0 được phát hành dưới giấy phép GPL-3.0 bởi WaterKansuza. Bạn cũng có thể xem thêm các dự án cá nhân khác như Eduhub và bộ macro tự động hóa.',
    'close.btnPrimary': 'TẢI BẢN MỚI NHẤT (.APK)',
    'close.btnSecondary': 'XEM DỰ ÁN KHÁC →',
    'footer.projects': 'EDUHUB & MACROS',

    // Projects page (projects.html)
    'proj.kicker': 'WATERKANSUZA · DANH MỤC DỰ ÁN CÁ NHÂN',
    'proj.title': 'Những công cụ nhỏ được viết để <em>tự dùng</em> và chia sẻ mở.',
    'proj.lede': 'Ngoài ứng dụng Android OpenSleep, đây là website học tập dành cho sinh viên và các macro tự động hóa trò chơi được lưu trữ công khai trên GitHub.',
    'proj.backBtn': '← QUAY LẠI OPENSLEEP',

    'proj.cat1': '01 · SẢN PHẨM CHỦ ĐẠO',
    'proj.os.meta': 'ANDROID NATIVE · C++ NDK',
    'proj.os.desc': 'Theo dõi giấc ngủ không chạm bằng sóng siêu âm 18.75 kHz, động cơ tính nợ ngủ 14 ngày và nhận diện âm thanh YAMNet cục bộ.',
    'proj.os.btnPage': 'XEM TRANG GIỚI THIỆU',
    'proj.os.btnApk': 'TẢI APK MỚI NHẤT',

    'proj.cat2': '02 · WEBSITE CHO HỌC SINH / SINH VIÊN',
    'proj.edu.meta': 'WEB APP · TRẮC NGHIỆM',
    'proj.edu.desc': 'Nền tảng hỗ trợ sinh viên UTT nói riêng và các trường khác nói chung tự tạo bài kiểm tra Multiple Choice cho bản thân hoặc luyện tập từ các mẫu có sẵn.',
    'proj.edu.note': 'Trạng thái: Giao diện đã triển khai trên GitHub Pages, phần kết nối cơ sở dữ liệu hiện đang bảo trì.',
    'proj.edu.btnLive': 'MỞ EDUHUB',
    'proj.edu.btnRepo': 'MÃ NGUỒN GITHUB',

    'proj.cat3': '03 · MACRO & TỰ ĐỘNG HÓA',
    'proj.m1.meta': 'ROBLOX · CRITICAL REVENGEANCE',
    'proj.m1.desc': 'Macro hỗ trợ tự động hóa thao tác trong minigame câu cá của trò chơi Critical Revengeance trên nền tảng Roblox.',
    'proj.m2.meta': 'ROBLOX · ARCANE LINEAGE',
    'proj.m2.desc': 'Macro hỗ trợ tự động farm vật phẩm trong trò chơi Arcane Lineage.',
    'proj.m3.meta': 'AFK UTILITY · AN AVERAGE CAMPAIGN',
    'proj.m3.desc': 'Công cụ hỗ trợ treo máy (AFK) để farm boon trong trò chơi An Average Campaign.',
    'proj.btnRepo': 'XEM REPOSITORY'
  },

  en: {
    'nav.process': 'PROCESS',
    'nav.output': 'OUTPUT',
    'nav.material': 'MATERIAL',
    'nav.numbers': 'NUMBERS',
    'nav.works': 'OTHER WORKS',
    'nav.home': 'OPENSLEEP',
    'nav.cta': 'DOWNLOAD APK',

    'hero.kicker': 'OPENSLEEP · V0.4.0 · GPL-3.0 · ANDROID 8.0+',
    'hero.title': 'Measure the night without <em>giving away</em> a single byte.',
    'hero.lede': 'An open-source Android sleep tracker pairing 18.75 kHz ultrasonic sonar in C++ NDK with a 14-day exponential sleep debt engine and on-device YAMNet sound classification.',
    'hero.btnPrimary': 'DOWNLOAD LATEST (.APK)',
    'hero.btnSecondary': 'SOURCE ON GITHUB',
    'hero.spec1k': 'SONAR CARRIER',
    'hero.spec2k': 'DEBT WINDOW',
    'hero.spec3k': 'SOUND MODEL',
    'hero.spec4k': 'LOCAL SCHEMA',

    'arg.kicker': '01 · THE ARGUMENT',
    'arg.title': 'Your sleep history belongs on <em>your device</em>, not behind a subscription.',
    'arg.lede': 'Every tracked session stays inside local Android storage. The sleep debt equations, baseband phase filters, and audio classifiers remain open to inspect, verify, and export.',
    'arg.r1k': '14-DAY SLEEP DEBT WINDOW',
    'arg.r1d': 'Computes nightly sleep deficit using exponential decay weights w_k = e^(-0.085·k) and asymmetric recovery weighted at 85%, capped at 90 minutes per day.',
    'arg.r1v': '14d · λ=0.085',
    'arg.r2k': 'CONTACTLESS I/Q SONAR',
    'arg.r2d': 'Emits an 18.75 kHz continuous wave at 48 kHz via Google Oboe, decimates 480:1 to 100 Hz, cancels static reflections, and unwraps atan2 phase for 0.10–0.55 Hz breathing.',
    'arg.r2v': '18,750 Hz',
    'arg.r3k': 'ENERGY-GATED AUDIO ML',
    'arg.r3d': 'Maintains a RAM ring buffer and wakes the YAMNet LiteRT interpreter (15,600 samples @ 16 kHz) only when acoustic energy crosses the adaptive noise floor.',
    'arg.r3v': '521 classes',
    'arg.r4k': 'SANDBOXED ARCHIVE',
    'arg.r4d': 'No account wall and no cloud sync; export or restore full history anytime via Android Storage Access Framework as local JSON.',
    'arg.r4v': 'JSON / SAF',

    'demo.kicker': '02 · LIVE OUTPUT PANEL',
    'demo.title': 'One signal path that <em>draws itself</em> on entry.',
    'demo.lede': 'Switch variants to redraw the same SVG path between contactless sonar respiration phase, 14-day sleep debt decay weights, and the Process C circadian alertness curve.',
    'demo.v1': '01 · SONAR PHASE (18.75 KHZ)',
    'demo.v2': '02 · 14-DAY DEBT DECAY',
    'demo.v3': '03 · CIRCADIAN PROCESS C',

    'mat.kicker': '03 · MATERIAL & STACK',
    'mat.title': 'Built from <em>native primitives</em>, free of ad-tech SDKs.',
    'mat.lede': 'Every layer—from low-latency C++ audio callbacks to Jetpack Compose dashboards—is declared openly under the GPL-3.0 repository.',
    'mat.r1k': 'C++17 DSP & GOOGLE OBOE',
    'mat.r1d': 'Compiled via Android NDK and CMake 3.22.1 with -O3 -ffast-math targeting arm64-v8a and armeabi-v7a over JNI.',
    'mat.r2k': 'ON-DEVICE AUDIO INFERENCE',
    'mat.r2d': 'Uncompressed yamnet.tflite asset executed with LiteRT 2.3.0 on two threads to label snoring, speech, movement, and ambient events.',
    'mat.r3k': 'ROOM SQLITE PERSISTENCE',
    'mat.r3d': '10 Room entities storing sleep sessions, 30-second epochs, dream journals, sound events, habit notes, alarms, and daily debt snapshots with allowBackup="false".',
    'mat.r4k': 'NETWORK PERMISSION SCOPE',
    'mat.r4d': 'Sleep logs never leave the device. INTERNET in AndroidManifest.xml is declared strictly for checking and downloading official GitHub Releases APKs.',

    'meas.kicker': '04 · VERIFIED MEASUREMENTS',
    'meas.title': 'Figures read directly from the <em>source tree</em>.',
    'meas.lede': 'Every measurement below matches the exact constants in SleepDebtEngine.kt, sonar_engine.h, NightSoundClassifier.kt, and build.gradle.kts for v0.4.0.',
    'meas.m1k': 'CARRIER FREQUENCY',
    'meas.m1d': 'Default continuous-wave ultrasonic tone in SonarEngine::start',
    'meas.m2k': 'I/Q DECIMATION RATIO',
    'meas.m2d': 'Downsamples 48,000 Hz raw audio input to 100 Hz baseband',
    'meas.m3k': 'RESPIRATION BANDPASS',
    'meas.m3d': 'Cascaded Biquad high-pass and low-pass isolating chest motion',
    'meas.m4k': 'DEBT ROLLING WINDOW',
    'meas.m4d': 'Days retained in cumulative calculation with default decay λ = 0.085',
    'meas.m4v': '14 days',
    'meas.m5k': 'PHYSIOLOGICAL NEED BOUNDS',
    'meas.m5d': 'Clamped personal sleep requirement range (6.5 to 10.0 hours)',
    'meas.m5v': '390 – 600 min',
    'meas.m6k': 'NAP & RECOVERY CAP',
    'meas.m6d': 'Efficiency multiplier on naps (≥15 min) and daily over-sleep recovery cap',
    'meas.m6v': '85% / 90 min',
    'meas.m7k': 'YAMNET FRAME SIZE',
    'meas.m7d': 'Float input samples at 16 kHz (0.975s) per 521-class inference pass',
    'meas.m7v': '15,600 samples',
    'meas.m8k': 'ANDROID SDK RANGE',
    'meas.m8d': 'Android 8.0 (minSdk 26 for AAudio) through targetSdk 37',

    'close.kicker': '05 · RELEASE & MAKER',
    'close.title': 'Built to run locally, <em>kept</em> on your own hardware.',
    'close.fineprint': 'OpenSleep v0.4.0 is published under GPL-3.0 by WaterKansuza. Explore Eduhub and standalone automation macros in the companion index.',
    'close.btnPrimary': 'DOWNLOAD LATEST (.APK)',
    'close.btnSecondary': 'OTHER WORKS →',
    'footer.projects': 'EDUHUB & MACROS',

    // Projects page (projects.html)
    'proj.kicker': 'WATERKANSUZA · MAKER INDEX',
    'proj.title': 'Small tools written for <em>everyday use</em> and published openly.',
    'proj.lede': 'Alongside OpenSleep for Android, this index catalogues the Eduhub student web platform and three game-automation macros hosted on GitHub.',
    'proj.backBtn': '← BACK TO OPENSLEEP',

    'proj.cat1': '01 · FLAGSHIP APPLICATION',
    'proj.os.meta': 'ANDROID NATIVE · C++ NDK',
    'proj.os.desc': 'Contactless 18.75 kHz sonar sleep tracking, 14-day exponential sleep debt math, and offline YAMNet acoustic classification.',
    'proj.os.btnPage': 'OPEN LANDING PAGE',
    'proj.os.btnApk': 'DOWNLOAD LATEST APK',

    'proj.cat2': '02 · STUDENT WEB PLATFORM',
    'proj.edu.meta': 'WEB APP · MULTIPLE CHOICE',
    'proj.edu.desc': 'Built for UTT students—and open to learners at other schools—to author custom Multiple Choice quizzes or practice from ready-made templates.',
    'proj.edu.note': 'Status: Frontend live on GitHub Pages; database connection is currently undergoing maintenance.',
    'proj.edu.btnLive': 'OPEN EDUHUB',
    'proj.edu.btnRepo': 'GITHUB REPO',

    'proj.cat3': '03 · MACROS & AUTOMATION',
    'proj.m1.meta': 'ROBLOX · CRITICAL REVENGEANCE',
    'proj.m1.desc': 'Automation macro assisting with the fishing minigame in Critical Revengeance on Roblox.',
    'proj.m2.meta': 'ROBLOX · ARCANE LINEAGE',
    'proj.m2.desc': 'Macro supporting automated item farming workflows in Arcane Lineage.',
    'proj.m3.meta': 'AFK UTILITY · AN AVERAGE CAMPAIGN',
    'proj.m3.desc': 'AFK helper designed for boon farming sessions in An Average Campaign.',
    'proj.btnRepo': 'VIEW REPOSITORY'
  }
};

window.DEMO_VARIANTS = {
  sonar: {
    strokeWidth: '2.2',
    d: 'M 0,130 C 30,130 45,58 75,58 C 105,58 120,202 150,202 C 180,202 195,62 225,62 C 255,62 270,198 300,198 C 330,198 345,54 375,54 C 405,54 420,206 450,206 C 480,206 495,66 525,66 C 555,66 570,194 600,194 C 630,194 645,58 675,58 C 705,58 720,202 750,202 C 780,202 795,64 825,64 C 855,64 870,150 900,130',
    vi: {
      metaTitle: 'C++17 · I/Q BASEBAND 100 HZ · BANDPASS 0.10–0.55 HZ',
      metaScale: 'KHOẢNG: 20.0 GIÂY (2,000 MẪU)',
      facts: [
        { label: 'DẢI THÔNG LỌC', value: '0.10 – 0.55 Hz Biquad' },
        { label: 'TỐC ĐỘ BASEBAND', value: '100 Hz (hạ mẫu 480:1)' },
        { label: 'CỬA SỔ ĐỆM THỞ', value: '2,000 mẫu (20 giây)' }
      ]
    },
    en: {
      metaTitle: 'C++17 · I/Q BASEBAND 100 HZ · BANDPASS 0.10–0.55 HZ',
      metaScale: 'SPAN: 20.0 S (2,000 SAMPLES)',
      facts: [
        { label: 'FILTER PASSBAND', value: '0.10 – 0.55 Hz Biquad' },
        { label: 'BASEBAND RATE', value: '100 Hz (480:1 decimated)' },
        { label: 'BREATH WINDOW', value: '2,000 samples (20s)' }
      ]
    }
  },
  debt: {
    strokeWidth: '2.6',
    d: 'M 0,218 L 64,218 L 64,174 L 128,174 L 128,136 L 192,136 L 192,102 L 256,102 L 256,74 L 320,74 C 365,74 395,112 450,118 C 505,124 545,152 600,164 C 660,178 725,196 790,206 L 900,216',
    vi: {
      metaTitle: 'SLEEPDEBTENGINE · CỬA SỔ TRƯỢT 14 NGÀY · w_k = e^(-0.085k)',
      metaScale: 'NGƯỠNG CẢNH BÁO: 2H / 5H / 8H',
      facts: [
        { label: 'HỆ SỐ SUY GIẢM', value: 'λ = 0.085 (14 ngày)' },
        { label: 'TRẦN PHỤC HỒI', value: '85% · tối đa 90 phút/ngày' },
        { label: 'MIỀN NHU CẦU', value: '390 – 600 phút (6.5–10h)' }
      ]
    },
    en: {
      metaTitle: 'SLEEPDEBTENGINE · 14-DAY WINDOW · w_k = e^(-0.085k)',
      metaScale: 'THRESHOLDS: 2H / 5H / 8H',
      facts: [
        { label: 'DECAY CONSTANT', value: 'λ = 0.085 (14 days)' },
        { label: 'RECOVERY CAP', value: '85% · max 90 min/day' },
        { label: 'NEED BOUNDS', value: '390 – 600 min (6.5–10h)' }
      ]
    }
  },
  circadian: {
    strokeWidth: '1.9',
    d: 'M 0,198 C 60,170 110,64 195,54 C 260,46 315,118 390,152 C 445,176 490,178 545,148 C 610,112 660,68 725,74 C 795,80 845,158 900,208',
    vi: {
      metaTitle: 'PROCESS C · DỰ BÁO NHỊP SINH HỌC THEO GIỜ THỨC TRUNG BÌNH',
      metaScale: 'ĐỈNH SÁNG (+2–4H) · TRŨNG TRƯA · MELATONIN',
      facts: [
        { label: 'ĐỈNH TỈNH TÁO', value: 'T_wake + 2h đến +4h' },
        { label: 'VÙNG TRŨNG NGỦ TRƯA', value: 'T_wake + 6.5h đến +8.5h' },
        { label: 'CỬA SỔ SMART WAKE', value: 'Thu hẹp 30 → 10 phút khi nợ ≥5h' }
      ]
    },
    en: {
      metaTitle: 'PROCESS C · CIRCADIAN FORECAST FROM MEAN WAKE TIME',
      metaScale: 'MORNING PEAK · AFTERNOON DIP · MELATONIN',
      facts: [
        { label: 'MORNING PEAK', value: 'T_wake + 2h to +4h' },
        { label: 'AFTERNOON DIP', value: 'T_wake + 6.5h to +8.5h' },
        { label: 'SMART WAKE WINDOW', value: 'Narrows 30 → 10 min at ≥5h debt' }
      ]
    }
  }
};
