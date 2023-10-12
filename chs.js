/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "1 ⭐ + 50% one of 🔥 🌊 🌱 🌪": "1 ⭐ + 50% 几率获得以下之一 🔥 🌊 🌱 🌪",
    "🔒 Reach level": "🔒达到等级",
    "🔒 Reach level 10 to unlock 🔒": "🔒达到10级即可解锁🔒",
    "Actions": "动作",
    "Ah, hello young elementalist.": "啊，你好，年轻的元素师。",
    "Code avaliable at:": "代码可在以下位置获取：",
    "Consider joining the discord:": "考虑加入discord：",
    "Export save": "导出存档",
    "Free": "免费",
    "https://discord.gg/7BZfa3QZc7": "https://discord.gg/7BZfa3QZc7",
    "https://github.com/incrementalrelic/incrementalrelic": "https://github.com/incrementalrelic/incrementalrelic",
    "I am a little busy right now so go take a quick walk around the temple while I am finishing, I am sure you will find something interesting.": "我现在有点忙，所以在我结束的时候去寺庙周围走走，我相信你会发现一些有趣的东西。",
    "Import save": "导入存档",
    "Level": "等级",
    "Ok": "好的",
    "Outdoor excursion": "户外游览",
    "Story": "故事",
    "The game automatically saves every 10 seconds to the browser storage.": "游戏每 10 秒自动保存到浏览器存储中。",
    "to unlock 🔒": "解锁🔒",
    "Training": "训练",
    "Welcome": "欢迎",
    "You can backup your save using the buttons below.": "您可以使用下面的按钮备份您的存档内容。",
    "Elemental rituals": "元素仪式",
    ". I'll teach you some basic rituals, try getting used to them.": "。 我会教你一些基本的仪式，试着习惯它们。",
    "and a little bit of gold": "和一点点金子",
    "Guided breathing session": "引导呼吸课程",
    "I see you gathered a few elements too": "我看到你也收集了一些元素",
    "Level up": "升级",
    "Oh, You are back already... Well I guess I can't delay it any longer.": "哦，你已经回来了……好吧，我想我不能再拖延了。",
    "Play with matches": "玩火柴",
    "Take a shower": "洗个淋浴",
    "Touch grass": "触摸草",
    "you collected, but at least you get some experience": "你收集了，但至少你获得了一些经验",
    "You have unlocked:": "您已解锁：",
    "You'll lose some of the elements": "你会失去一些元素",
    "/s": "/秒",
    "% boost for": "% 提升到",
    "Elemental transmutation rituals": "元素转化仪式",
    "-Artifacts": "-神器",
    "-Shop": "-商店",
    ", with each rarity giving different types of buffs.": "，每种稀有度都会提供不同类型的增益。",
    "actions": "动作",
    "ancient": "古老的",
    "and": "和",
    "artifact": "神器",
    "Artifact": "神器",
    "Artifacts": "神器",
    "artifacts and I am selling them for cheap.": "神器，我正在低价出售它们。",
    "Artifacts provide a variety of buffs like this one:": "神器提供了多种增益效果，如下所示：",
    "Attractive Crane Fly's Ring of Protection": "迷人鹤蝇的保护环",
    "blue": "蓝色",
    "Boiling water for tea time": "泡茶时用沸水冲泡",
    "Boosts": "提升",
    "Build a well": "建一口井",
    "Carp's Hand Flail": "鲤鱼手连枷",
    "Chupacabra's Ring of Intelligence": "卓柏卡布拉的智慧指环",
    "Clean the dust": "清洁灰尘",
    "Click to buy": "点击购买",
    "Collect condensation": "收集冷凝水",
    "Common": "普通",
    "Create a dust devil": "创造一个尘暴",
    "Earth Whip": "大地之鞭",
    "Enjoy a sauna session": "享受桑拿浴",
    "Epic": "史诗",
    "Gains": "收益",
    "Gather flint and steel": "收集打火石和钢铁",
    "Genie's Partisan": "精灵的党派",
    "green": "绿色",
    "grey": "灰色",
    "Hey kiddo, you are a elementalist right? I knew it! Well you have great luck! You see, I have acquired these brand new": "嘿小子，你是元素师吧？ 我就知道！ 那么你运气真好！ 你看，我已经买了这些全新的",
    "Hydromancer's Fury": "水术师之怒",
    "Iguana's Fearsome War Axe": "鬣蜥的可怕战斧",
    "Learn smoke communication": "学习烟雾通讯",
    "Legendary": "传说",
    "Make a water lens": "制作一个水透镜",
    "Manufacture obsidian": "制造黑曜石",
    "No, that one is not for sale, but I have other stuff, top notch quality too so make sure to look around!": "不，那个是非卖品，但我还有其他东西，质量也是一流的，所以一定要四处看看！",
    "of": "的",
    "Page": "页",
    "Precious Martian's Fire Shield": "珍贵火星人的火焰护盾",
    "Psssht": "嘘嘘",
    "Rare": "稀有",
    "red": "红色",
    "Refresh Shop": "刷新商店",
    "Relics": "遗物",
    "Shop": "商店",
    "Snowman's Dull Pike": "雪人的钝梭子鱼",
    "So go and master these new tools and next time try to learn the rituals by yourself instead of bothering me again!": "所以去掌握这些新工具吧，下次尝试自己学习仪式，不要再打扰我了！",
    "The Bison's Daggers": "野牛的匕首",
    "The Cheerful Hawk's Necklace of Lightning Bolts": "快乐鹰的闪电项链",
    "The colors of the artifact represent its elemental rewards": "神器的颜色代表其元素奖励",
    "The Glamorous Horseman's Fire Fearsome Sarissa": "魅力骑士之火可怕的萨里莎",
    "The Red Wolf's Sai": "红狼的萨伊",
    "The shopkeeper's heirloom": "店主的传家宝",
    "These rituals are a powerful tool to have in every elementalist toolbox. But more important than having learned something from someone is learning something by yourself.": "这些仪式是每个元素主义者工具箱中都拥有的强大工具。 但比从别人那里学到一些东西更重要的是自己学习一些东西。",
    "They also come in four different rarities": "它们也有四种不同的稀有度",
    "Undead's Jagged Blade": "亡灵的锯齿之刃",
    "Use a blower fan": "使用吹风机",
    "Water the plants": "植物浇水",
    "Well, I guess I could teach You elemental transmutation. Unlike the other rituals I tought You, these allow You to tranform elements of a given type into a different one": "好吧，我想我可以教你元素嬗变。 与我教给你的其他仪式不同，这些仪式允许你将给定类型的元素转变为不同的类型",
    "What!? You are here again? I am very busy as always...": "什么！？ 你又来了？ 我一如既往地很忙...",
    "You want to learn a new ritual? Hmmm, I see you already mastered the ones I taught you.": "你想学习一种新的仪式吗？ 嗯，我看到你已经掌握了我教你的那些。",
    "Zany Frankenstein's Chainmail Helm": "赞尼·弗兰肯斯坦的链甲头盔",
    "Practical elemental rituals": "实用的元素仪式",
    ", I specialize in practical elementalism and since You already seem to have a good understanding of the basics I can teach you a few tecniques": "，我专注于实用元素主义，既然你似乎已经对基础知识有了很好的理解，我可以教你一些技术",
    "? Ah yes he has been quite busy recently, if I am not mistaken he started watching ☠ one piece 👒.": "？ 啊，是的，他最近很忙，如果我没记错的话，他开始看☠一部👒。",
    "Annoyed Chipmunk's Amulet of Spell Resistance": "恼怒花栗鼠的法术抗力护身符",
    "Annoyed Cultist's Water Ring of Poison Resistance": "恼怒信徒的抗毒水环",
    "Are you the new student from master": "你是师父的新学员吗",
    "Chipmunk's Fire Dual Blades": "花栗鼠的火焰双刃",
    "Cricket's Fearsome Nunchaku": "蟋蟀可怕的双节棍",
    "Drakon's Fire Ring of Levitation": "龙的悬浮火环",
    "Energetic Dinosaur's Essence Amulet": "活力恐龙精华护身符",
    "Energy Necklace": "能量项链",
    "Experience Converter": "经验转换器",
    "Fire Ring of Time Control": "时间控制火环",
    "Fire Sai": "消防赛",
    "Frostwalker": "霜行者",
    "Gentle Cobra's Rusty Spiked Mace": "温和眼镜蛇的生锈尖刺狼牙棒",
    "Gold Amulet": "黄金护身符",
    "Hippopotamus's Swift Nunchaku": "河马的迅捷双截棍",
    "Jealous Ogopogo's Curved Maul": "嫉妒的奥戈波戈的弯槌",
    "Lazy Pirate's Water Essence Amulet": "懒惰海盗的水精华护身符",
    "Lilac": "紫丁香",
    "Manufacture fireworks": "制造烟花爆竹",
    "Minotaur's Great Sword": "牛头怪的大剑",
    "Misty Rooster's Ring of Cold Resistance": "迷雾公鸡的抗寒指环",
    "Orange": "橙子",
    "Putrid Dog's Whip": "腐烂的狗鞭",
    "QiGong Breathing": "气功呼吸法",
    "Search for minerals": "寻找矿物",
    "Soul Shop": "灵魂商店",
    "Take Swimming lessons": "参加游泳课程",
    "The Chipmunk's Water Chainmail Helm": "花栗鼠的水锁甲头盔",
    "The Confused Snail's Water Necklace of Ice Shards": "迷惑蜗牛的水冰碎片项链",
    "The Happy Orca's Earth Shuriken": "快乐虎鲸的大地手里剑",
    "The Margay's Ring of Magic Resistance": "虎猫的抗魔指环",
    "The Mule's Water Battle-worn Dual Blades": "骡子的水战双刃",
    "The Ninja's Battle Hammer": "忍者的战锤",
    "The Parrot's Earrings of Magic Detection": "魔法探测鹦鹉耳环",
    "The Pigeon's Damascus Trident Spear": "鸽子的大马士革三叉戟矛",
    "The Spider's Ring of Wisdom": "蜘蛛的智慧之戒",
    "The Splendid Bat's Water Gleaming Katana": "灿烂蝙蝠的水光武士刀",
    "The Vivacious Malificient's Earth Bloody War Machete": "活跃恶人的地球血战砍刀",
    "The Weary Gopher's Battle Flail": "疲惫地鼠的战斗连枷",
    "The Wide-eyed Reaper's Dusack": "睁大眼睛的死神杜萨克",
    "The Worried Swamp Thing's Strong Chakram": "忧心忡忡的沼泽怪物的强力飞轮",
    "Upgrade": "升级",
    "Water Essence Generator": "水精华生成器",
    "Well my name is": "嗯，我的名字是",
    "-Reincarnation": "-转世",
    "-Relics": "-遗物",
    ". Probably something to do with that": "。 可能与此有关",
    "% of current exp": "% 当前经验值比",
    "🔒 Reincarnate to unlock 🔒": "🔒 转世以解锁 🔒",
    "3 out of 10 of items I have on display are relics": "我展出的 10 件物品中有 3 件是遗物",
    "Aardvark's Water Hand Flail": "土豚的水手连枷",
    "Again, that one is not for sale. But I am sure you'll find quite a few relics in the shop next time, if I had to guess I would say that": "再说一次，那个是非卖品。 但我相信下次你会在商店里发现不少遗物，如果我不得不猜测的话我会这么说",
    "and I'm a speciallist on reincarnation.": "我是轮回方面的专家。",
    "Annoyed Black Widow Spider's Dirk": "恼怒的黑寡妇蜘蛛的匕首",
    "Applied if relic equipped during reincarnation:": "如果在转世期间装备了遗物，则适用：",
    "Aqua": "水色",
    "artifacts": "神器",
    "Attractive Dog's Hammer": "迷人的狗锤",
    "Bat's War Fan": "蝙蝠战扇",
    "Bird's War Sickle": "鸟的战镰",
    "can be used to further strengthen your relic or for some more other enhancements that I'll soon tell you about": "可用于进一步强化你的遗物或进行其他一些强化，我很快就会告诉你",
    "Catfish's Ring of Regeneration": "鲶鱼的再生之环",
    "Click this to reincarnate": "点击此转世",
    "Cobra's Beautiful Qiang": "眼镜蛇的美丽羌族",
    "Combative Black Widow Spider's Fire War Halberd": "好斗的黑寡妇蜘蛛的火战戟",
    "Dark Fox's Earth Choke": "黑狐的大地之锁",
    "dark ritual": "黑暗仪式",
    "darker colors": "较深的颜色",
    "Drab Seal's Battle Flail": "黄褐色海豹的战斗连枷",
    "Earth Earrings of Magic Disruption": "魔法破坏大地耳环",
    "Earth Elemental Staff": "土元素法杖",
    "Earth Javelin": "地球标枪",
    "Elegant Rook's Harpoon Gun": "优雅的鲁克的鱼叉枪",
    "Energy Pendant": "能量坠饰",
    "Fire Tomahawk": "火战斧",
    "Fish's Tomahawk": "鱼的战斧",
    "Fox's Bloody Net": "狐狸的血网",
    "Frail Typhon's Ring of Wisdom": "虚弱提丰的智慧指环",
    "Frost Meteor's Fury": "冰霜流星之怒",
    "Ghosts's War Fan With Blades": "鬼魂战扇带刃",
    "Ghoul's War Halberd": "食尸鬼战戟",
    "Gold anklet": "金色脚链",
    "Gold body chain": "金色身体链",
    "Hello again, I have got a new item supplier and he just sent me some relics.": "你好，我有了一个新的物品供应商，他刚刚给我寄了一些遗物。",
    "Hello elementalist, it seems it's finally time for You to learn about reincarnation! I'm professor": "你好元素师，看来你终于到了学习轮回的时候了！ 我是教授",
    "Horse's Sharp Halberd": "马锋戟",
    "Hydra's Ancient War Cleaver": "九头蛇的远古战刀",
    "I also have a relic in the display, but since I am not level": "我的显示器里也有一个遗物，但由于我水平不高",
    "I can't do anything with it:": "我不能用它做任何事：",
    "I mentioned.": "我提到。",
    "I would recommend on having at least an epic or ideally a legendary relic, but if you can't find one you can just go with the best rare you have": "我建议至少拥有一个史诗或理想的传奇遗物，但如果你找不到一个，你可以选择你拥有的最好的稀有物品",
    "If equiped on reincarnation gain:": "如果装备了转世增益：",
    "Itchy Snail's Earth Hammer": "痒痒蜗牛的大地锤",
    "known as reincarnation to get their power.": "称为轮回获得他们的力量。",
    "Kobold's Earth Sling": "狗头人的大地投石带",
    "Kobold's Fire Essence Earring": "狗头人的火焰精华耳环",
    "Level 20": "20级",
    "Lonely Baboon's War Spear": "孤独狒狒的战矛",
    "Mouse's War Halberd": "老鼠战戟",
    "Once you're ready to reincarnate, press the level indicator at the top of the page": "准备好转世后，请按页面顶部的级别指示器",
    "Ox's Chainmail Armor": "牛的链甲护甲",
    "Prickly Minotaur's Earth Flaming Long Sword": "多刺牛头怪的大地火焰长剑",
    "Reincarnate": "转世",
    "Reincarnation is a special ritual where you sacrifice your level, artifacts and unused relics in exchange for your equipped relic blessing and power. Additionally You will aquire some of the sacrificed artifacts' souls": "转世是一种特殊的仪式，你需要牺牲你的等级、神器和未使用的圣物来换取你装备的圣物祝福和力量。 此外，你还将获得一些被牺牲的神器的灵魂",
    "Relic": "遗物",
    "Snozzwangler's Fire Ring of Teleportation": "斯诺兹旺格勒的传送火环",
    "Successful Henchman's Rusty Battle Hammer": "成功的追随者生锈的战锤",
    "The Assassin's Deadly Dusack": "刺客的致命杜萨克",
    "The Bearded Dragon's Earth Dull Kusari-gama": "胡须龙的大地 暗暗的库萨里伽玛",
    "The Beaver's Curved Choke": "海狸的弧形扼流圈",
    "The Bishop's Water Gleaming Dual Blades": "主教的水光双刃",
    "The Blue Armadillo's Essence Amplifier": "蓝犰狳精华增幅器",
    "The Cheerful Banshee's Fire Bloody Trident": "欢快女妖的火焰血色三叉戟",
    "The Chimera's Beautiful Nunchaku": "奇美拉的美丽双节棍",
    "The Crab's War Glaive": "螃蟹的战刃",
    "The Dead Knight's Steel Longbow": "死亡骑士的钢长弓",
    "The Depressed Chimera's Amulet of Magic": "沮丧的奇美拉的魔法护身符",
    "The Enthusiastic Carp's Earth War Hammer": "热情鲤鱼的大地战锤",
    "The Expensive Basilisk's Earth Earrings of Magic Resistance": "昂贵的石化蜥蜴的魔力大地耳环",
    "The Fish's Rusty Crossbow": "鱼的生锈十字弓",
    "The Fragile Cultist's Earth Enchanted Long Sword": "脆弱教徒的大地附魔长剑",
    "The Gorilla's Brandistock": "大猩猩的布兰迪斯托克",
    "The Grotesque Sasquatch's Earth Essence Necklace": "怪诞大脚野人的大地精华项链",
    "The Guinea Pig's Sai": "豚鼠的赛",
    "The Handsome Boogeyman's Earth Gleaming Crossbow": "英俊妖怪的大地闪光十字弓",
    "The Horseman's Essence Amulet": "无头骑士的精华护身符",
    "The Ice Troll's Leather Helm": "冰雪巨魔的皮头盔",
    "The Impossible Donkey's Ring of Wisdom": "不可能的驴智慧指环",
    "The Leatherface's Earth Gleaming War Sickle": "皮面人的大地闪光战镰",
    "The Malificient's Bulawa": "恶毒者的布拉瓦",
    "The Ostrich's Trident Spear": "鸵鸟的三叉戟",
    "The Ox's Fire Staff": "公牛的消防法杖",
    "The Pleasant Demon's Fire Jagged Mancatcher": "喜人恶魔之火锯齿捕手",
    "The Rabbit's Chainmail Helm": "兔子的链甲头盔",
    "The Repulsive Fox's Water Daggers": "令人厌恶的狐狸的水匕首",
    "The Rich Armadillo's Ring of Intelligence": "富有的犰狳的智慧指环",
    "The Sloth's Strong Sickle": "树懒的强力镰刀",
    "The Sore Orc's Khopesh": "痛苦的兽人的科佩什",
    "The Spider's Necklace of Poison": "毒蜘蛛项链",
    "The Swamp Thing's Rusty Sickle Sword": "沼泽怪物的生锈镰刀剑",
    "The Thoughtful Cat's Ring of Protection": "体贴猫的保护戒指",
    "The Werewolf's Fire Essence Amulet": "狼人的火焰精华护身符",
    "The Whale's War Scythe": "鲸鱼的战镰",
    "The Wide-eyed Wolf's Water Razor-sharp Lance": "大眼狼的水锋利枪",
    "The Wombat's War Fan With Blades": "袋熊的带刀战扇",
    "These souls": "这些灵魂",
    "Ugly Canada Lynx's Earth Beautiful Mancatcher": "丑陋的加拿大山猫的地球美丽捕手",
    "Unlike artifacts, relics don't give buffs when equiped and instead you need to perform a": "与神器不同，遗物在装备时不会提供增益，而是需要执行",
    "Uptight Raccoon's War Hammer": "紧张浣熊的战锤",
    "Voldemort's Nunchaku": "伏地魔的双截棍",
    "Wandering Bigfoot's War Hammer": "流浪大脚的战锤",
    "Water Bo Staff": "水博法杖",
    "Weary Mountain Zebra's Sling": "疲倦山斑马弹弓",
    "Wild Coyote's Ancient Chakram": "野狼的远古环轮",
    "You can visually distinguish relics from artifacts by their": "您可以根据神器的外观从视觉上区分神器和遗物",
    "Blue Whale's Earrings of Magic Absorption": "蓝鲸的魔力吸收耳环",
    "Bobcat's Earth Essence Amplifier": "山猫的大地精华增幅器",
    "Cancel": "取消",
    "Centaur's Earth Spear": "半人马的大地之矛",
    "Confirm Prestige": "确认声望",
    "Experience Ring": "经验环",
    "Lost on reincarnate": "转世丢失",
    "New Relic": "新遗物",
    "Old Relic": "旧遗迹",
    "per level)": "每级）",
    "Polar bear's Essence Ring": "北极熊的精华戒指",
    "Relic changes and gains": "遗物的变化和收获",
    "Smoggy Succubus's Earth Vicious War Axe": "烟雾魅魔的大地恶毒战斧",
    "The Busy Hydra's Earrings of Magic Disruption": "忙碌九头蛇的魔法干扰耳环",
    "The Cute Leviathan's Essence Earring": "可爱利维坦的精华耳环",
    "The Rat's Earth Ring of Water Walking": "水上行走的鼠土环",
    "Tidal Axe": "潮汐斧",
    "-Soul Enhancement": "-灵魂强化",
    "Soul Enhancement": "灵魂强化",
    "-1 second for 1 🌌": "-1 秒 花费 1 🌌",
    "+1 luck for 1 🌌": "+1 幸运 花费 1 🌌",
    "% bonus to": "% 奖励到",
    "+5% for 1 🌌": "+5% 花费 1 🌌",
    "and she told me that after your first reincarnation, she arranged to grant you access to the soul enhancement in the Workshop.": "她告诉我，在你第一次转世之后，她就安排让你进入工坊进行灵魂强化。",
    "is still watching ☠ one piece 👒. He's still in the ☣️ punk hazard arc ☣️ so it should take a while for him to be available, in the meanwhile I'll teach you a few more practical elementalism tecniques.": "还在看☠一件👒。 他还处于☣️朋克危险弧☣️所以他应该需要一段时间才能上场，同时我会教你一些更实用的元素主义技术。",
    "upgrades": "升级",
    "You": "你",
    "Hey how have you been? Unfortunately master": "嘿，你过得怎么样？ 不幸的是大师",
    "Also, I have spoken with professor": "另外，我和教授谈过",
    "A few more practical elemental rituals": "一些更实用的元素仪式",
    "(ATK)": "(攻击)",
    "(HP)": "(生命值)",
    "(REG)": "(回复)",
    "(DEF)": "(防御)",
    "Workshop": "工坊",
    "Shop Artifact Luck:": "商店神器幸运：",
    "Shop cooldown:": "商店冷却：",
    "Shop Relic Luck:": "商店遗物幸运：",
    "Stats": "统计",
    "Stage": "阶段",
    "Sand Golem Summoning": "召唤沙魔像",
    "Inner Fire Breathing": "内心喷火",
    "Escort Merchant Ship": "护航商船",
    "Fight": "战斗",
    "Energy Converter": "能量转换",
    "Improve local windmill production": "提高当地风车生产",
    "Current odds for artifacts are": "目前神器的赔率是",
    "Current odds for relics are": "目前遗物的赔率是",
    "Battle": "战斗",
    "-Battle": "-战斗",
    "kills": "杀死",
    "Logs": "日志",
    "from": "来自",
    "from Actions": "来自 行动",
    "from Boosts": "来自 提升",
    "from Relic": "来自 遗物",
    "from Relic Bonus": "来自 遗物奖励",
    "from Artifacts": "来自 神器",
    "Skills": "技能",
    "Relic Transfusion": "遗物输血",
    "relics, but I am sure a day will come where it will work for": "遗物，但我确信有一天它会发挥作用",
    "It seems I underestimated the rarity of": "看来我低估了稀缺性关于",
    "relics too": "遗物也是",
    "relics. I'll let on in a secret then.": "遗物。 那我就透露一个秘密吧。",
    "mentioned that some new soul enhancements were available. Something to do with boosts to elemental gains.": "提到有一些新的灵魂增强可用。 与元素增益的提升有关。",
    "My goal is to shape you fine young men, into elementalist warriors capable of rivaling even the most vile of beasts. Come foward, battle awaits!": "我的目标是将你们这些优秀的年轻人塑造成能够与最邪恶的野兽相媲美的元素战士。 挺身而出，战斗等待着！",
    "item it changes the items bonuses, so it can be a good idea to get specific bonuses for the relic transfusion ritual.": "它会改变物品的奖励，因此为遗物输血仪式获得特定的奖励可能是个好主意。",
    "If You visit the workshop, you should be able to acess the item fusion station. In there you can fuse several artifacts and relics into higher rarirty ones.": "如果您访问工坊，您应该能够访问物品融合站。 在那里你可以将一些文物和遗物融合成更稀有的物品。",
    "I have heard rumors that if You use the station for a": "我听说有传言说如果你使用这个站台",
    "I guess I will teach you some skills and a few battle rituals. Altough i doubt any of that will make any difference!": "我想我会教你一些技能和一些战斗仪式。 尽管我怀疑其中任何一个都会产生任何影响！",
    "I mean, You are not even using skills. Did you fall asleep on the class where we covered them?": "我的意思是，你甚至没有使用技能。 你在我们报道它们的课堂上睡着了吗？",
    "I was just checking You performance on the battlefield and You should feel ashamed of yourself!": "我只是看看你在战场上的表现，你应该感到羞耻！",
    "Selected:": "已选择：",
    "Select items to merge": "选择要合并的物品",
    "Treasure Box": "宝箱",
    "Wooden box": "木盒",
    "Process Spiritual Pills": "加工灵丹",
    "Bone strengthening": "骨骼强化",
    "Cultivate Internal Energy": "修炼内功",
    "Absortion rate:": "吸收率：",
    "Item fusion": "物品融合",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "-Action: ": "-行动: ",
    "You heal for ": "你治疗了 ",
    "cooldown (Max:": "冷却 (最大:",
    "gained in reincarnation (Max:": "转世获得的收益（最大：",
    "luck (Max:": "幸运 (最大:",
    "Iron skin tampering - ": "铁皮篡改 - ",
    "Divine phoenix's sanction - ": "神凤制裁 - ",
    "Exploding fists - ": "拳头爆炸 - ",
    "Flowing river core - ": "流淌的河心 — ",
    "Natural poison resistance - ": "天然抗毒 - ",
    "Qi flowing enhancement - ": "气行增强 — ",
    "Rejuvenating meditation - ": "冥想恢复活力 — ",
    "Airflow Resistance - ": "气流阻力 - ",
    "% applied on reincarnation (Max:": "% 应用于转生（最大值：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Enemy (.+) heals for (.+).$/, '敌人 $1 治疗了 $2 生命值。'],
    [/^🔒 Level (.+) 🔒$/, '🔒 等级 $1 🔒'],
    [/^🔒 Reach level (.+) to unlock 🔒$/, '🔒 达到 $1 级解锁 🔒'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Buy for ([\d\.,]+)$/, '购买 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);