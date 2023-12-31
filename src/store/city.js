import { ref } from "vue";

export const cities = ref([
    "基隆市", "台北市", "新北市", "桃園市", "新竹市", "新竹縣", "苗栗縣",
    "台中市", "彰化縣", "南投縣", "雲林縣", "嘉義市", "嘉義縣", "台南市",
    "高雄市", "屏東縣", "宜蘭縣", "花蓮縣", "台東縣", "澎湖縣", "金門縣",
    "連江縣"
]);
export const areasByCity = ref({
    "基隆市": ["中正區(基)", "七堵區", "暖暖區", "仁愛區", "安樂區", "信義區"],
    "台北市": ["中正區(北)", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"],
    "新北市": ["板橋區", "三重區", "中和區", "永和區", "新莊區", "新店區", "樹林區", "鶯歌區", "三峽區", "淡水區", "汐止區", "瑞芳區", "土城區", "蘆洲區", "五股區", "泰山區", "林口區", "深坑區", "石碇區", "坪林區", "三芝區", "石門區", "八里區", "平溪區", "雙溪區", "貢寮區", "金山區", "萬里區", "烏來區"],
    "桃園市": ["桃園區", "中壢區", "平鎮區", "八德區", "楊梅區", "大溪區", "蘆竹區", "龜山區", "龍潭區", "新屋區", "觀音區", "復興區","大園區"],
    "新竹市": ["東區(竹)", "北區(竹)", "香山區"],
    "新竹縣": ["竹北市", "湖口鄉", "新豐鄉", "新埔鎮", "關西鎮", "芎林鄉", "寶山鄉", "竹東鎮", "五峰鄉", "橫山鄉", "尖石鄉", "北埔鄉", "峨眉鄉"],
    "苗栗縣": ["苗栗市", "頭份市", "竹南鎮", "後龍鎮", "通霄鎮", "苑裡鎮", "卓蘭鎮", "造橋鄉", "西湖鄉", "頭屋鄉", "公館鄉", "銅鑼鄉", "三義鄉", "大湖鄉", "獅潭鄉", "泰安鄉"],
    "台中市": ["中區(中)", "東區(中)", "南區(中)", "西區(中)", "北區(中)", "北屯區", "西屯區", "南屯區", "太平區", "大里區", "霧峰區", "烏日區", "豐原區", "后里區", "石岡區", "東勢區", "和平區", "新社區", "潭子區", "大雅區", "神岡區", "大肚區", "沙鹿區", "龍井區", "梧棲區", "清水區", "大甲區", "外埔區", "大安區"],
    "彰化縣": ["彰化市", "員林市", "和美鎮", "鹿港鎮", "溪湖鎮", "二林鎮", "田中鎮", "北斗鎮", "花壇鄉", "芬園鄉", "大村鄉", "永靖鄉", "伸港鄉", "線西鄉", "福興鄉", "秀水鄉", "埔心鄉", "埔鹽鄉", "大城鄉", "芳苑鄉", "竹塘鄉", "社頭鄉", "二水鄉", "田尾鄉", "埤頭鄉", "溪州鄉"],
    "南投縣": ["南投市", "埔里鎮", "草屯鎮", "竹山鎮", "集集鎮", "名間鄉", "鹿谷鄉", "中寮鄉", "魚池鄉", "國姓鄉", "水里鄉", "信義鄉", "仁愛鄉"],
    "雲林縣": ["斗六市", "斗南鎮", "虎尾鎮", "西螺鎮", "土庫鎮", "北港鎮", "莿桐鄉", "林內鄉", "古坑鄉", "大埤鄉", "崙背鄉", "二崙鄉", "麥寮鄉", "台西鄉", "東勢鄉", "元長鄉", "四湖鄉", "口湖鄉", "水林鄉"],
    "嘉義市": ["東區(嘉)", "西區(嘉)"],
    "嘉義縣": ["太保市", "朴子市", "布袋鎮", "大林鎮", "民雄鄉", "溪口鄉", "新港鄉", "六腳鄉", "東石鄉", "義竹鄉", "鹿草鄉", "水上鄉", "中埔鄉", "竹崎鄉", "梅山鄉", "番路鄉", "大埔鄉", "阿里山鄉"],
    "台南市": ["中西區(南)", "東區(南)", "南區(南)", "北區(南)", "安平區", "安南區", "永康區", "歸仁區", "新化區", "左鎮區", "玉井區", "楠西區", "南化區", "仁德區", "關廟區", "龍崎區", "官田區", "麻豆區", "佳里區", "西港區", "七股區", "將軍區", "學甲區", "北門區", "新營區", "後壁區", "白河區", "東山區", "六甲區", "下營區", "柳營區", "鹽水區", "善化區", "大內區", "山上區", "新市區", "安定區"],
    "高雄市": ["楠梓區", "左營區", "鼓山區", "三民區", "鹽埕區", "前金區", "新興區", "苓雅區", "前鎮區", "旗津區", "小港區", "鳳山區", "大寮區", "鳥松區", "林園區", "仁武區", "大樹區", "大社區", "岡山區", "路竹區", "橋頭區", "梓官區", "彌陀區", "永安區", "燕巢區", "田寮區", "阿蓮區", "茄萣區", "湖內區", "旗山區", "美濃區", "內門區", "杉林區", "甲仙區", "六龜區", "茂林區", "桃源區", "那瑪夏區"],
    "屏東縣": ["屏東市", "潮州鎮", "東港鎮", "恆春鎮", "萬丹鄉", "長治鄉", "麟洛鄉", "九如鄉", "里港鄉", "鹽埔鄉", "高樹鄉", "萬巒鄉", "內埔鄉", "竹田鄉", "新埤鄉", "枋寮鄉", "新園鄉", "崁頂鄉", "林邊鄉", "南州鄉", "佳冬鄉", "琉球鄉", "車城鄉", "滿州鄉", "枋山鄉", "霧台鄉", "瑪家鄉", "泰武鄉", "來義鄉", "春日鄉", "獅子鄉", "牡丹鄉", "三地門鄉"],
    "宜蘭縣": ["宜蘭市", "頭城鎮", "礁溪鄉", "壯圍鄉", "員山鄉", "羅東鎮", "三星鄉", "大同鄉", "五結鄉", "冬山鄉", "蘇澳鎮", "南澳鄉", "釣魚台列嶼"],
    "花蓮縣": ["花蓮市", "鳳林鎮", "玉里鎮", "新城鄉", "吉安鄉", "壽豐鄉", "光復鄉", "豐濱鄉", "瑞穗鄉", "富里鄉", "秀林鄉", "卓溪鄉"],
    "台東縣": ["台東市", "成功鎮", "關山鎮", "長濱鄉", "海端鄉", "池上鄉", "東河鄉", "鹿野鄉", "延平鄉", "卑南鄉", "金峰鄉", "大武鄉", "達仁鄉", "綠島鄉", "蘭嶼鄉", "太麻里鄉"],
    "澎湖縣": ["馬公市", "湖西鄉", "白沙鄉", "西嶼鄉", "望安鄉", "七美鄉"],
    "金門縣": ["金沙鎮", "金湖鎮", "金寧鄉", "金城鎮", "烈嶼鄉", "烏坵鄉"],
    "連江縣": ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉"]
});

export const zipCodesByArea ={
    //宜蘭
    '宜蘭市': '260',
    '頭城鎮': '261',
    '礁溪鄉': '262',
    '壯圍鄉': '263',
    '員山鄉': '264',
    '羅東鎮': '265',
    '三星鄉': '266',
    '大同鄉': '267',
    '五結鄉': '268',
    '冬山鄉': '269',
    '蘇澳鎮': '270',
    '南澳鄉': '272',
    '釣魚台列嶼': '290',
    //北市
    '中正區(北)': '100',
    '大同區': '103',
    '中山區': '104',
    '松山區': '105',
    '大安區': '106',
    '萬華區': '108',
    '信義區': '110',
    '士林區': '111',
    '北投區': '112',
    '內湖區': '114',
    '南港區': '115',
    '文山區': '116',
    //新北
    '萬里區': '207',
    '金山區': '208',
    '板橋區': '220',
    '汐止區': '221',
    '深坑區': '222',
    '石碇區': '223',
    '瑞芳區': '224',
    '平溪區': '226',
    '雙溪區': '227',
    '貢寮區': '228',
    '新店區': '231',
    '坪林區': '232',
    '烏來區': '233',
    '永和區': '234',
    '中和區': '235',
    '土城區': '236',
    '三峽區': '237',
    '樹林區': '238',
    '鶯歌區': '239',
    '三重區': '241',
    '新莊區': '242',
    '泰山區': '243',
    '林口區': '244',
    '蘆洲區': '247',
    '五股區': '248',
    '八里區': '249',
    '淡水區': '251',
    '三芝區': '252',
    '石門區': '253',
    //基隆市
    '仁愛區': '200',
    '信義區': '201',
    '中正區(基)': '202',
    '中山區': '203',
    '安樂區': '204',
    '暖暖區': '205',
    '七堵區': '206',
    //桃園
    '中壢區': '320',
    '平鎮區': '324',
    '龍潭區': '325',
    '楊梅區': '326',
    '新屋區': '327',
    '觀音區': '328',
    '桃園區': '330',
    '龜山區': '333',
    '八德區': '334',
    '大溪區': '335',
    '復興區': '336',
    '大園區': '337',
    '蘆竹區': '338',
    //新竹
    '北區(竹)':'300',
    '東區(竹)':'300',
    '香山區':'300',
    '竹北市': '302',
    '湖口鄉': '303',
    '新豐鄉': '304',
    '新埔鎮': '305',
    '關西鎮': '306',
    '芎林鄉': '307',
    '寶山鄉': '308',
    '竹東鎮': '310',
    '五峰鄉': '311',
    '橫山鄉': '312',
    '尖石鄉': '313',
    '北埔鄉': '314',
    '峨眉鄉': '315',
    //苗栗
    '竹南鎮': '350',
    '頭份市': '351',
    '三灣鄉': '352',
    '南庄鄉': '353',
    '獅潭鄉': '354',
    '後龍鎮': '356',
    '通霄鎮': '357',
    '苑裡鎮': '358',
    '苗栗市': '360',
    '造橋鄉': '361',
    '頭屋鄉': '362',
    '公館鄉': '363',
    '大湖鄉': '364',
    '泰安鄉': '365',
    '銅鑼鄉': '366',
    '三義鄉': '367',
    '西湖鄉': '368',
    '卓蘭鎮': '369',
    //台中
    '中區(中)': '400',
    '東區(中)': '401',
    '南區(中)': '402',
    '西區(中)': '403',
    '北區(中)': '404',
    '北屯區': '406',
    '西屯區': '407',
    '南屯區': '408',
    '太平區': '411',
    '大里區': '412',
    '霧峰區': '413',
    '烏日區': '414',
    '豐原區': '420',
    '后里區': '421',
    '石岡區': '422',
    '東勢區': '423',
    '和平區': '424',
    '新社區': '426',
    '潭子區': '427',
    '大雅區': '428',
    '神岡區': '429',
    '大肚區': '432',
    '沙鹿區': '433',
    '龍井區': '434',
    '梧棲區': '435',
    '清水區': '436',
    '大甲區': '437',
    '外埔區': '438',
    '大安區': '439',
    //彰化
    '彰化市': '500',
    '芬園鄉': '502',
    '花壇鄉': '503',
    '秀水鄉': '504',
    '鹿港鎮': '505',
    '福興鄉': '506',
    '線西鄉': '507',
    '和美鎮': '508',
    '伸港鄉': '509',
    '員林市': '510',
    '社頭鄉': '511',
    '永靖鄉': '512',
    '埔心鄉': '513',
    '溪湖鎮': '514',
    '大村鄉': '515',
    '埔鹽鄉': '516',
    '田中鎮': '520',
    '北斗鎮': '521',
    '田尾鄉': '522',
    '埤頭鄉': '523',
    '溪州鄉': '524',
    '竹塘鄉': '525',
    '二林鎮': '526',
    '大城鄉': '527',
    '芳苑鄉': '528',
    '二水鄉': '530',
    //南投縣
    '南投市': '540',
    '中寮鄉': '541',
    '草屯鎮': '542',
    '國姓鄉': '544',
    '埔里鎮': '545',
    '仁愛鄉': '546',
    '名間鄉': '551',
    '集集鎮': '552',
    '水里鄉': '553',
    '魚池鄉': '555',
    '信義鄉': '556',
    '竹山鎮': '557',
    '鹿谷鄉': '558',
    //雲林
    '斗南鎮': '630',
    '大埤鄉': '631',
    '虎尾鎮': '632',
    '土庫鎮': '633',
    '褒忠鄉': '634',
    '東勢鄉': '635',
    '臺西鄉': '636',
    '崙背鄉': '637',
    '麥寮鄉': '638',
    '斗六市': '640',
    '林內鄉': '643',
    '古坑鄉': '646',
    '莿桐鄉': '647',
    '西螺鎮': '648',
    '二崙鄉': '649',
    '北港鎮': '651',
    '水林鄉': '652',
    '口湖鄉': '653',
    '四湖鄉': '654',
    '元長鄉': '655',
    //嘉義市
    '東區(嘉)': '600',
    '西區(嘉)': '600',
    //嘉義縣
    '番路鄉': '602',
    '梅山鄉': '603',
    '竹崎鄉': '604',
    '阿里山鄉': '605',
    '中埔鄉': '606',
    '大埔鄉': '607',
    '水上鄉': '608',
    '鹿草鄉': '611',
    '太保市': '612',
    '朴子市': '613',
    '東石鄉': '614',
    '六腳鄉': '615',
    '新港鄉': '616',
    '民雄鄉': '621',
    '大林鎮': '622',
    '溪口鄉': '623',
    '義竹鄉': '624',
    '布袋鎮': '625',
    //台南
    '中西區(南)': '700',
    '東區(南)': '701',
    '南區(南)': '702',
    '北區(南)': '704',
    '安平區': '708',
    '安南區': '709',
    '永康區': '710',
    '歸仁區': '711',
    '新化區': '712',
    '左鎮區': '713',
    '玉井區': '714',
    '楠西區': '715',
    '南化區': '716',
    '仁德區': '717',
    '關廟區': '718',
    '龍崎區': '719',
    '官田區': '720',
    '麻豆區': '721',
    '佳里區': '722',
    '西港區': '723',
    '七股區': '724',
    '將軍區': '725',
    '學甲區': '726',
    '北門區': '727',
    '新營區': '730',
    '後壁區': '731',
    '白河區': '732',
    '東山區': '733',
    '六甲區': '734',
    '下營區': '735',
    '柳營區': '736',
    '鹽水區': '737',
    '善化區': '741',
    '大內區': '742',
    '山上區': '743',
    '新市區': '744',
    '安定區': '745',
    //高雄
    '新興區': '800',
    '前金區': '801',
    '苓雅區': '802',
    '鹽埕區': '803',
    '鼓山區': '804',
    '旗津區': '805',
    '前鎮區': '806',
    '三民區': '807',
    '楠梓區': '811',
    '小港區': '812',
    '左營區': '813',
    '仁武區': '814',
    '大社區': '815',
    '岡山區': '820',
    '路竹區': '821',
    '阿蓮區': '822',
    '田寮區': '823',
    '燕巢區': '824',
    '橋頭區': '825',
    '梓官區': '826',
    '彌陀區': '827',
    '永安區': '828',
    '湖內區': '829',
    '鳳山區': '830',
    '大寮區': '831',
    '林園區': '832',
    '鳥松區': '833',
    '大樹區': '840',
    '旗山區': '842',
    '美濃區': '843',
    '六龜區': '844',
    '內門區': '845',
    '杉林區': '846',
    '甲仙區': '847',
    '桃源區': '848',
    '那瑪夏區': '849',
    '茂林區': '851',
    '茄萣區': '852',
    //南海島
    '東沙群島':'817',
    '南沙群島':'819',
    //澎湖縣
    '馬公市':'880',
    '湖西鄉':'885',
    '白沙鄉':'884',
    '西嶼鄉':'881',
    '望安鄉':'882',
    '七美鄉':'883',
    //金門縣
    '金城鎮':'893',
    '金湖鎮':'891',
    '金沙鎮':'890',
    '金寧鄉':'892',
    '烈嶼鄉':'894',
    '烏坵鄉':'896',
    //連江縣
    '南竿鄉':'209',
    '北竿鄉':'210',
    '莒光鄉':'211',
    '東引鄉':'212',
    //屏東
    '屏東市': '900',
    '三地門鄉': '901',
    '霧臺鄉': '902',
    '瑪家鄉': '903',
    '九如鄉': '904',
    '里港鄉': '905',
    '高樹鄉': '906',
    '鹽埔鄉': '907',
    '長治鄉': '908',
    '麟洛鄉': '909',
    '竹田鄉': '911',
    '內埔鄉': '912',
    '萬丹鄉': '913',
    '潮州鎮': '920',
    '泰武鄉': '921',
    '來義鄉': '922',
    '萬巒鄉': '923',
    '崁頂鄉': '924',
    '新埤鄉': '925',
    '南州鄉': '926',
    '林邊鄉': '927',
    '東港鎮': '928',
    '琉球鄉': '929',
    '佳冬鄉': '931',
    '新園鄉': '932',
    '枋寮鄉': '940',
    '枋山鄉': '941',
    '春日鄉': '942',
    '獅子鄉': '943',
    '車城鄉': '944',
    '牡丹鄉': '945',
    '恆春鎮': '946',
    '滿州鄉': '947',
    //台東縣
    '台東市': '950',
    '綠島鄉': '951',
    '蘭嶼鄉': '952',
    '延平鄉': '953',
    '卑南鄉': '954',
    '鹿野鄉': '955',
    '關山鎮': '956',
    '海端鄉': '957',
    '池上鄉': '958',
    '東河鄉': '959',
    '成功鎮': '961',
    '長濱鄉': '962',
    '太麻里鄉': '963',
    '金峰鄉': '964',
    '大武鄉': '965',
    '達仁鄉': '966',
    //花蓮
    '花蓮市': '970',
    '鳳林鎮': '975',
    '玉里鎮': '981',
    '新城鄉': '971',
    '吉安鄉': '973',
    '壽豐鄉': '974',
    '光復鄉': '976',
    '豐濱鄉': '977',
    '瑞穗鄉': '978',
    '富里鄉': '983',
    '秀林鄉': '972',
    '萬榮鄉': '979',
    '卓溪鄉': '982'
}