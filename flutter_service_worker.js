'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "404847368db7391fa8cd72043c3764f9",
".git/config": "212b97d582b6e838ffbfe5fd359f2ca2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "04801e2a1a09354bc9dc2ea4709c30e7",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e2256c6921cc20633a3e9fb10c388964",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0b90c05f562d0e058ea67d438561f415",
".git/logs/refs/heads/master": "0b90c05f562d0e058ea67d438561f415",
".git/logs/refs/remotes/origin/master": "8d9ecbc8761062cbfaaee0c5db4d491c",
".git/objects/01/43b67feacc8b2a407ccaea006c6b5eafbd7539": "0eed46fad76fc40945340c01b7d569c1",
".git/objects/03/5d2bf541675955afc970521560deaefc2532a3": "252b86bebb2d41fd8f88c8b2002069ce",
".git/objects/04/21eb894ef7c2ba9145ebfe45e3354339938a1c": "6217a0b7b8e8b1293e2b10042b72bc76",
".git/objects/04/7e5dc0323d45435036516bd1faf0aa627052b8": "6bab61247174c1b92c1129b1c795de50",
".git/objects/04/85f0c63e8d79b83d132e77439d5259734458bb": "9bbb9e846bb8ecb44aee9b9b0301db4e",
".git/objects/04/86fa596acc7a8009dfa8ba9740513ae2cec425": "e7dcbc54095d2dcfa5372bc903849515",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/4f621beeba52eee2701086440f47d0cbb4b33e": "99674ca6fda53dbda9732caac9365ccd",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/5824ff3f8b3d1756e6d61d657ee530384cc2d5": "c095f9e06cbc881c06fd4de5fc45da5e",
".git/objects/09/2ec7323605611592ecb833e07cf3b619975851": "ce49fa12835b2ae1d89af092827be105",
".git/objects/0a/a2dd919f8eced51b1230a58b2489ef908f93f9": "dca4ff16fa5c6dc933b1f14338da6547",
".git/objects/0b/b6711115843a503df7c1b963c438a6e54ea3a0": "db77f179369791750d5132eac11c7b81",
".git/objects/0c/8ec2a662d3425df45d7124fd3b79eff7755d6e": "03302deada7d0629b7d4373e1c2e10e0",
".git/objects/0f/719f3beeb3a1deaadcfd059f50f861ed09b50f": "0555881e21f82f363201760ffd14eff3",
".git/objects/10/3cc325c95cbc20d54c762d65928b3c4cff271f": "93b840b434cf1a110ebb5b406c3de35f",
".git/objects/12/7355017cb0aa9e44e4f4f22b912656badebc40": "4b1c404a74d1c905f049cb696d73d7e3",
".git/objects/13/89b3e48e88294c57919c2023d7c53cbcabd86d": "28fa3c9e226b96779df5fed3ba70e86a",
".git/objects/13/9b989e80513e3526d09e52b3aea2672d12fea5": "851e56aa07a29afee8e80d436000f6e2",
".git/objects/13/f5477c28a50bc51794369d2dab150222cd2696": "72a3c59b35655e82935537f2a3d1dfa7",
".git/objects/14/a7c037487f00384f966b95fe4624fc43d304aa": "50ff74d68c8cdec24f7665f7bec7830c",
".git/objects/15/a51b8e63a7b1289e49522be4983d73c59badf7": "a7b352bf5b718e61e6ec91264730a6ac",
".git/objects/16/2a249edd3af9d755a8cfbcf6e271af8f94ffc4": "466a6bbdf49fcf6967c4495416ed9405",
".git/objects/17/49bfea4c0f55d9f693733cc483e6497f93ab54": "ff4550004e1137a18c13acbb49ec3a06",
".git/objects/17/c8974f004839b5f649c961604ac412a25941e9": "1c7054e7408aa9a7a7f735a14c08cda8",
".git/objects/18/9870bf099d935ac24e8bcb728f315a1a714a14": "d36133d58c551b278449f8f6bd2a41b2",
".git/objects/19/24e7a0e92cf42773ed23fc5d763dcdd7220682": "787324f2e2402e8f23dd91dc83e372dc",
".git/objects/19/e56a58429969e5861cff587de5efeaea7ed4fc": "623f8200f00194357daf8d6a1a7ab5be",
".git/objects/1b/d5f284b47cbec1e8ca89120e3ab7c8f2367c8b": "9368d95f6de251c52256a173fed822a4",
".git/objects/1e/00568745f10a4252aa0eb89d49116a11565152": "29b670ba8f65af92b78b13c6204afbbc",
".git/objects/20/21b315b69150cb43164767fc9fe671104f128d": "6af16159b7e75513fe840df5af75a844",
".git/objects/21/2e3da517f38c82cdae170990f1b54a9be76811": "c0d20655bde1f2c4e0392894184fd304",
".git/objects/21/e9579802728f978eabea37a9b0133d22c1f73b": "9573bfb7f0f350e681020f92a8e3142d",
".git/objects/22/7a9a69cd40f428228c7e96d981d7d88b7cc89e": "127dac6c3d7d9082bd2167e91870a29f",
".git/objects/22/fb4bb1f06c2613a04a547383cd949d42a78cc9": "fbbfd2d1eeec550c8bd72945043fb146",
".git/objects/23/66fb9fcbb78b57cf067689e025bea8602075d1": "994510362e785ee3ec90726e7e3f3a52",
".git/objects/25/29ed2498f7e63c8015eca4eaf90162b6006387": "edeb6b778128beb9e5d6db069de478c2",
".git/objects/26/3a885dae9d15b1a4e775cb20fe1b407b6e8485": "a652a24a25b5093bc0f5dd58de0f770b",
".git/objects/27/4b33aecc64b547ab2584539bf9b335f89c6975": "681ba0649f0f90427126890b17e67ef8",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/16e9dbad0ab9285e385418e8f974c97b6ca23a": "dbe84563f1d4ed31072ba3c936c50a3a",
".git/objects/2a/cce4eedadf95b2baa86e62f32e6245eafe1086": "c988d502a4adc382a7e23aee050101e9",
".git/objects/2b/3c24c3fc2e92c0ce820216a9eba88e23bee0aa": "ee50fe6c62cbbeb06c6592d4c814e005",
".git/objects/2c/e8ac9997089baec26e7ac4a8cfd054070aab43": "9518a6145cce251b7bd1694ed413927c",
".git/objects/2d/4e0f7d619554e2599e06efa50ddc2c9373e27a": "b47bc876db4295fb14c3c4d673c68456",
".git/objects/2d/54b384c2a09c19f065d42d19c84a582aabdd1a": "4f26e0cfb5ef5531db879778aacef8b2",
".git/objects/2d/77be34327fb0c41aeeef86e17d7e0a0e83be9c": "a3f779939b0045a9f89f952bf6b6e14d",
".git/objects/2d/8d819cdd56d6a63cde3c36aca127ca81916722": "c358c84c1e6b44285aae415aefe42989",
".git/objects/2e/103eabd7260aeee4e2d66ccf75e6705e3bd695": "ec1aa48c7049e1c64d55623867f29fa1",
".git/objects/2e/41dafbd11f299dad64f5d63c4dc82a1aa24c54": "42798fd867a261872bd5995fd1e6de7f",
".git/objects/2e/b00d6e2eaaac3341b5e2a8e2f9907582400116": "e140dfc6bc903256e6d36cdeb6cef24c",
".git/objects/2f/612dc30ee74818df6b40bbb7666cbebd83cfe3": "b6f1aabe41d5257c84658070ab446206",
".git/objects/2f/c47a0b68190c926a0b197a08dca7284a7060ca": "d7f3fd3da9a3451813f5da342e12dc4f",
".git/objects/30/6fddc69d364e297d791b8cde2865a84c777fa3": "819de0e990387039e66f8716919ade60",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/b48d3bb10a492e9232e2b2a72aa7a891df66ff": "f90d5df3203ca5d9a9d981f673d6f7aa",
".git/objects/32/c36aa56bb421b2a58dfebd283a1b5ccdbe016d": "c82a313272d2e59f87778d4fd14d55fb",
".git/objects/36/6614da10eb739aa507f9265102e53903db53b8": "f00357aa2b17320361f0634c31dd8bb0",
".git/objects/38/386efdbe232a32bf05d216b51057b1e032bbe9": "32cb04fe9f8fc785174b48dd4f7b6957",
".git/objects/38/4ebf7ed6591ee1ddea48b0ad7f9185aa5dad2b": "9d3b57d26b1b7ff2008403767c061aaf",
".git/objects/38/9b7ceeeef92da9745940f8dea4de45d45145f9": "27e94d5d16d3b835d9f574aceb4334e3",
".git/objects/38/d9750d7021f932c47909dca4faabe6196cd921": "a60d7b00dabcbc1c6e0f099ffbfcddc6",
".git/objects/3a/3725b541d4f9e89bab339674a8d43a652a2735": "a52a01b0ab4ad2c6146525918c1695fa",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/aca3801407771539f77898140d5861f60172d7": "1dc57d8f26a6fd91d8b233bb57302687",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/d1d5f2be3048abca71405c8fea0e4dcbe20866": "2113564c2042cb215efc1591168784a0",
".git/objects/3b/c730ccc377f87b68715be451fd79aa42a2dd67": "be5fe619448bb1279438b39870c73cee",
".git/objects/3d/469a1912f8273084e7dbb2aacd4485b7e60686": "d9a27c9ffdb29471ac5d512108137f57",
".git/objects/3d/75a19fa6bdc09ca93a419b185453037d8ed874": "8f67ed2251d789e11ee4d3ec9ffa1afe",
".git/objects/3e/d643eb9b85d06396661359b49bd53af3249b93": "a75fcda68a8e5673286b81fde55b60d2",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/7e5e6b8abc4b6cc29c2d471e7df44d658287b5": "7b3dec545096d7b6889b5f9e0a95730d",
".git/objects/42/ef7f69450a830c1d786b1592f39e08a08e9546": "577f677df9121f4fc3a257cb909326ef",
".git/objects/43/3a24fd348b028569cf0bdd27a100a9efa522ed": "2d8d3d6e63177e2b694a616833ec7245",
".git/objects/43/eb15837864dd3a9481c242b6bbf179ecb6dd2d": "5ef87c2af98e412c060385545704b665",
".git/objects/44/311ac35343122029602efa40a98cf611f1bdff": "e5ae3d193b492666f413a25c0c621906",
".git/objects/44/868fdcfae27997b248a7749de5971770f8d374": "794b84f20d61906af4a86fef68af41be",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/62d8ebf111be2d2eb18621f2ba969844591ac6": "7490ff0914fcc9a1b8b22263722aa0b4",
".git/objects/49/2441575dc77323ce23e004b722065a855ee733": "b8ecec74f992545bd599f6502a3856a9",
".git/objects/49/8d3f0a8855dbb8446f3b196df653398536bd5d": "26c6de2f3305070f55f75b9561b14773",
".git/objects/4a/683fa5978279b36b7141706f469710bd363608": "b650ee7f5be0db0bc14e95b27ba5343c",
".git/objects/4a/d0930781e62f70dce8827cbd80ea36e41dbe24": "0a2ba4bfe4e3268254db3a2073895633",
".git/objects/4b/c2f9383c636bfdd6fb5da9628646b5d971d63f": "b2c6b393647e95a3e0cd9c23a2b00a68",
".git/objects/4b/fce431976893592cd0d7153ef35e51672023a6": "636d50419603ced02a828eca1fd0dbd3",
".git/objects/4c/12d492e8627997367aed5757da943f6c7d582b": "53bb10fc1c36e5bdefbae10ff2a1174c",
".git/objects/4c/3423f3e1a60af65cfcc3814fbe365943f6e43e": "7bf195d35d77adb5c78735124448c2e8",
".git/objects/4c/5f060706658ceac2d1feabf6941b7d2e13ebe3": "7f595933c5044fe2376d3b29074f317b",
".git/objects/4d/811d07778f85f0b4487e65b74a1e4a2ccfde06": "12a3196784451a168fa1267f804dded2",
".git/objects/4d/878381a7254a20775b88b762f105bf03781e9d": "f73bda0d036d1d662aff8beff5d42892",
".git/objects/4d/c1da3a71d141f951cc18e864f62eefec4110b8": "52f7ae3a79bb245ad9473516bf001db5",
".git/objects/4f/9ce3c7411c88a3fc66c22b23334afda9cdf581": "c05a5389fa0bbf1448c66a0b74cd1886",
".git/objects/54/3026c6dac192a74a6ce7deb78406b743fbdb64": "266974696c928b96d6ef6e9fb5ad18aa",
".git/objects/55/d2c7caad4aa5ca7ef4808240de8b7aa8a8f50e": "d5ed566f372438c2e1bffa08f1d2122a",
".git/objects/56/0465d98fb3d8f8794e1673ccf8fc8d7dad7b4a": "07cfb40a50fedc8b8ca82483ef6666ab",
".git/objects/58/48bbd9bb917d7b9bbd9c41a5f29b43d0772a19": "2215c90e476136f526b9e2764e47dcdf",
".git/objects/59/aabf7e652e8d2fdfb5a69636217265ba803223": "7969019a67389d6edcb21ffc2349f219",
".git/objects/5a/378a4230900a3ec76db614635cc8a72550ba20": "18c5647b72af7ed24e84e44cbab2e206",
".git/objects/5c/9f9038b80f59ca3f72114e12a677eb7c912f1c": "63e50985a9f920c943472d66d7423aef",
".git/objects/5d/7c325470badce09a99bb349a2ce8acf654b98f": "7dd1f32f9ffdfb9da9cf2d6dea269a84",
".git/objects/5e/2fc8b30889dd648eacbc0914ad37bdfb00dab6": "3eb00c8c6c80ead748f6fce2a30297f7",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5f/09a4d95f2592fe1e71212eb3e4bb490754d5dc": "307e1d4fdc24ae7c1fd138c64f00fa24",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/61/bde035b874994db7bee90f6850f404588315d5": "33932af1776946689704f300fe75da87",
".git/objects/63/0b51ddc630f9eedb81187d3bf4f2cf40532a1b": "1949481036f9f1b93c31f6e929f71f10",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/eca19b892dcbb73eadce425e7f7c9862292b2a": "5e00d6334f0853f8001916a938b44a00",
".git/objects/65/1d39d1d7facbc80670c2a1b80e4e1130aed486": "0c899b024774fb9717b2f8342fdc1aa0",
".git/objects/65/1eb49dab45c7b823a81c2a6fcd7c2a48ccf14a": "3e340c79600bb2414ce5b74e564f16ae",
".git/objects/65/f434b76385a87d5e64e77173be54a45b50ffe0": "cbcf569ccc3d703dcec1a0256cc61b67",
".git/objects/67/932dcb14c9b91f0896e67ebcbb77c436cf1122": "fd549d28dc57f94edc45d77a634cf207",
".git/objects/68/99bd01ad1779b7eb54a1ed01a726429869f4e6": "007283484cdd502e82a9dc8938d168b8",
".git/objects/69/a5a3308d9074049405faaf000b2d6e45f982f3": "99e45a638616cdea38342aba2aa64935",
".git/objects/6a/317f68f90f0936b74e996e10a76a19d4dad5aa": "e8db05e0cb367bd6262cdc21f16a2698",
".git/objects/6b/516bcea1020ce1d1c4c4bd7b42bc784fe99313": "75fa9950728198b0b725b2a042ab95e2",
".git/objects/6b/77d9050b1cd092260fd3aa0e7712d3fadc461c": "b6bc9fdb82ec3df9f78f3ad8a3792c02",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/0a2d1af8b5f445cd5339444b08b4ae90eb72dc": "0cadbc662b0c2a8b894dd9264579b80b",
".git/objects/6e/b23076d18fea061f87fad38ede5507603f0d5c": "99305f5c1ce51d83b7e5e6c02ba88603",
".git/objects/6f/0b599866f85234c7318ad60e1278829d92c8f2": "4ee0706fb252a79e2849a63c61b96130",
".git/objects/6f/142bb0aaf66b8d2eaf5fda09d6c57df0e679b1": "1e3eadbf603e12094c8fc4eb73a1890d",
".git/objects/6f/58b47bfe39a7acc039e1a15e52ac08b2d59ef0": "a153934f0b7639b73acd64e58264b5f2",
".git/objects/70/20d7e0e80244254ee380131b10e0ccfcb1b214": "0a60b9f12ad98149d9897beca30785f5",
".git/objects/71/a7b0549aac182f10c163cd6ad64aa8441e406f": "19e353a9640729e8f9e53e5538e78097",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/35f08f8e15422a24c7c90b3092e57d4aa86427": "2e8d4f15d015b0456c8b7519b27a771f",
".git/objects/76/7b567d279b9e4746c5de12b3a9053095225989": "3582b456317a04577bd12d2e22605c2a",
".git/objects/77/a8b21ec371e797d42444ca1242c37102937363": "f411399d755756afd311704b112b0bff",
".git/objects/79/3632dd0513ac78c0acee9983eae1f2be43579f": "0a96e10a4a0d8242c4ee0e0292a5d0d2",
".git/objects/79/573bead9b0a14e146b7cd0593ae0228515b264": "648eeb378d482d043acb61a71e4e6bc3",
".git/objects/7a/29a5306b906b225a419240a420ff504941216e": "80187daad094ca600c0467aff1c07f95",
".git/objects/7a/e8486336ca31ab11f9cf8f740560359e4be470": "3b6b51e28f3900591b788a2803892130",
".git/objects/7b/5ab88250878695460524859f0a22a571c259e7": "c1dd2e1795a73f6be56686ad4ee42e0f",
".git/objects/7b/5abf16749c7195f3e0a2f38b62a342cecb9539": "024800a0a48882082b1645b1f5e2be77",
".git/objects/7b/9c6b3869d2b7c394f4fed562d707e4a4b540ca": "97f47995f4f01ab9afc667909fe7d985",
".git/objects/7b/c4f30569c78a875c884419197c45703a0a82eb": "0c1ad81928051f85c6a6925d018e464b",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/dfe9807397c5d75bed4d1205990923ca322b78": "42405505894530624e6280a665d8303a",
".git/objects/7d/78fe9fedf727f4a25613cf5b8ff78c6a532269": "c3b8bd6d4008935b344e7e30d6e1420d",
".git/objects/7d/d3e0b1d127925558216de2d6d85b690bd7eb42": "6a9b84161284cf5ab4d6ab7bc20c1d69",
".git/objects/7e/20e102d53e6cbce21bc4ee02d69ccf822ac17d": "9d0d1e7f57d5e6e2c799a8b3c51657f2",
".git/objects/7e/56c5679f52763f07565fa957544dab061659dc": "304abcb9c5feab70846ab5b19a6f0387",
".git/objects/7e/866f23abddd4bb2e1edd2b8d7e1c39d81cf281": "8633da07c953a8ecfa26309e275bcda1",
".git/objects/7f/2917c5e168181986e7974a59fd76150b235312": "8f8810a56cd4852d63e9f501ab2b3b00",
".git/objects/7f/ab7b24f107e860201ddc22764b787838c47165": "52f1a158d0e31a9cd2d095837a4d7337",
".git/objects/80/0d252dd0ec042e8787d829a1dd1717b1f53880": "9a26345f881be4b2a6d6b9c41de7ca22",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/86/99afeb40c5dadcb5a1a0ec457b50953de829d4": "41a12173b6016240b00e84238300dc97",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/87/45809cc2d985123b5808ae3458f2cb188ab613": "97571b56fdad11ca2350d47b7cca2ee1",
".git/objects/87/ce5fb216021a6dcabff5e95179d13b2a89c569": "a3c702260308642063306295902af680",
".git/objects/87/dc234dbd75243ae81d0bace6b89f928f5096a6": "3cb48ee611309c42c4590f575faea4e1",
".git/objects/87/e7fec63d8831a88931eb279e7b552db741ef08": "d9ee79722b47b5f771aab85b4e4d0b99",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/febe5badecc18754cacea00f0287f0e03f4528": "c8617451fd10b5ff22ec271642e339d8",
".git/objects/89/98c2d9ea0b9685fa27a2d046b6fde922fc871e": "5d1b4c2e414bff40b6ac8c4b0dfff8cc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/14b9db7a24af8d4ab82343537a24a54f848c41": "9dd1d5fadd4bba30f7d4e1825f36f99f",
".git/objects/8b/b5b323fc8590aeeaaab6789f5834d5d714f1a3": "7899e33c4bf074e121578b8375076d1a",
".git/objects/8b/c6e038e117fa5871db70d8f3ae5d5b4cecda67": "c34d2194e3d29b834c95818320d9affc",
".git/objects/8b/e3b01360d8b227de577f38fb6a30f15fa803ac": "d876105508fe7df1517afc681adf7b6e",
".git/objects/8c/4440b9abed3ae3e0e7a4c310c71658cf521e0a": "a8021828a33858b6269c7eb3e6ccc150",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/df179f4761c11796531b90ab37a913c74f089b": "d056be9ab1703ae3e09705d2d785c035",
".git/objects/8d/d3cf9a0f2a73ef3111883f9616bdac1e467b7a": "a4e6666de7fcbc79a02d1f7f70d9e9de",
".git/objects/8e/f536129dfc96c3f51c73caed186bb552e9a83c": "42587a8f0639967cafa222e02eec8a4a",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/e03d20abb1b2d67ecea2e1e22e0b02ae8d389e": "860a3bb02e3ef25a2beaf197c2a768c7",
".git/objects/92/2f48a955a06cc10d1d0cb8ec53922c007d7218": "14e7cf1d236c742ffe2b66d5661eff04",
".git/objects/93/5b93fbfd57035f4df0cefa640c7345f54c2d00": "e14a6ddd8c793bfa5a164c03f29a15eb",
".git/objects/94/0e6766dd6b77916e5bf6610a0a7e8f00603f69": "1eae90cdc2e2dd510d3d1263ba800b5c",
".git/objects/94/34976cc87e6c61847d90e43db5854a94a184f7": "2948476190fc36f200728d362dfdf33b",
".git/objects/95/61e6428fcda4f4224450018bba5a35eed8a873": "eac680290b6b1b85ab476af390ccd298",
".git/objects/95/df3f1830f06529b70488916155b485537b6cb5": "f8724afd4d58cc2b859eb2e04cb0dec1",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/a755b5cd9fb73d315630fb949cadbbfeefc868": "d37f5e41353062f021da4ed6b738370d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/a8d4daa2dbb243690674d6b4a5f99efc7ba5a9": "430a7eab0a7251c476b30c53223198cf",
".git/objects/98/f21c8b5582ee9db8afb8a3cca9bc8bd2665dc3": "0b6c18407353f6fee235818bda1d7e39",
".git/objects/9d/018125142e6af42661b072a7443417b5ef1673": "d1caa367724271cfc0fa4067e2a13d85",
".git/objects/9d/9538f0293847ed0b922664da4ea17d45f5549b": "8ff7594faaa458e36cdaed43a220c6a7",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/9e/8b9f4f28f9d1edcb979af9d3fb556af50edcae": "f4ccedb65cbf0b59a5af35f908b31076",
".git/objects/a0/3968b14fd990cc665efa57cdc14a9130c9c973": "5972e812f650b32bc60ba4c0dfcbecdc",
".git/objects/a0/682ad56e609f89c3cbe483a4a616cbb62927be": "a8f0715878ce67c93cb4648d9e958a82",
".git/objects/a0/95ced56e59cb5a3127be50419c75b575ec2aff": "8798e6f6df5847689e0c3d602a3cece2",
".git/objects/a0/b05e6a6893c658b75b2f2ee859344665a5b1f0": "6035636f5af8a30140dd91c37f3faf10",
".git/objects/a1/fb97c9df5af556ce7883cf33953b709cb0e86a": "b1a2d1bdca66ca115a0652f6a9277035",
".git/objects/a2/e31b31d824e8b60eae20c10faf4b0919b4faeb": "8b794e781ce79ec3a922250846514119",
".git/objects/a3/58adbf7f8662cb615069486089d5852739f610": "ab9822a9ef2474e50c18ce359e3c553c",
".git/objects/a3/74692c767f0f7184b221155f91c387c3bf1238": "842294377003d56b17e7aae5b2905982",
".git/objects/a6/f0355faa194664bee707aca345a7a4f1963146": "20d1b4a37c10ec31936c0cee0ee62779",
".git/objects/a7/1087ab2a884b6dabc4b542d7469fc40505f28d": "2cf8b54a8dafa5452264ec9dab337d8e",
".git/objects/a7/f65e6792acaec35a439131cea702ff457c45e4": "f47a741bb39ab5a704a42f5a97e3994b",
".git/objects/aa/17811a916c8468ffed51cf661058f6d996b879": "74151959cea48771a4a6693c62ade16c",
".git/objects/aa/40cc28781fb9a15bcfd3fe7b09550f69f56500": "d4a51c410620fffcefbe05894c21fcd6",
".git/objects/aa/db71ce8f9ef19a3659f7142e6127b42703fa91": "a238c7c10e53463328534815c4de6d71",
".git/objects/ab/9bb7c82ad5860aa80d8c9d079722a84458064e": "b71f35666faa20f35a359f6a6930ceb4",
".git/objects/ab/a048a4b5edf5c3f130864bdf90098b6e4153ff": "2d0049c05df7a2e73f6284e3a82ecb53",
".git/objects/ac/37497667c1829f1dd975214fc411a40eb77824": "59479446470d12127ef1317e5f7bb005",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/0b46c9f7c25a3edd8b30fb1ce36184212e6ec8": "9d4deb8c0434747f7c38172e608b31ad",
".git/objects/b1/253a17b300dd3f3a5c69b8ef639cfc673da2bd": "555a4ff1d4b3241a252c0905b6bd0b2d",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/0ef49d130e646cce73648db9a5e5e9eb4d6832": "ca1223522a29cce6ad64297fe66eda9f",
".git/objects/b5/2fe9167d94237e4244e87004537878270e637d": "a157d9b92ddadaabb384f9a14b7252fb",
".git/objects/b5/87ca4bd0dc22212f1882ba839b747f939508ae": "dc3e98304eec2a3acf8725f153b605af",
".git/objects/b5/d8eedeeb6054c44df8886f1431fc5dc8db35d0": "583916517d4946594b4ec694c83d4500",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7014a04267b67670fbe0b905799a96fdb734cc": "b7ad24bd7b6d5d0c70cf4f37894fad5b",
".git/objects/b8/a6d1a12a6aea7d53d9a3f96550d564a815206e": "47bfb22bd35ba6eb566fbd94a657b0ef",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/812aaad21d62523aac03b66409ba681ca79890": "42b6bd249778b85ce86be2c0c6005813",
".git/objects/bc/3e542bf36761db2f62ca143772ef0a59e445b0": "bbb426122435ef7d6abc20ae7974d50e",
".git/objects/bc/7ab993804a92d88f4fe8df03036523187bf65c": "da13f2b4ad5c77f4c4116b42fc53104a",
".git/objects/bc/c90601a0ae15bde5227d8268ec046a5f20d6ed": "1d1bf75393b99bb9d1df65e70012f664",
".git/objects/bc/fa84f3dc6bae0459ec2102adac380a963a8c57": "1cf8e29dfb2861b7a3f9f05a08e56c5a",
".git/objects/bd/fc5cb03a86ee64cdb9baa209d7080a94f3e370": "5e34430833e9d645c844ec3ecbb729a5",
".git/objects/be/621b68e0e96e26e455f0101648c9a87542376c": "e15178868aa80190a2cffafc93293dc6",
".git/objects/bf/e04f9a5c0b55d76e2e034533f534af2ed6730b": "f748c832168287ab4a150d4195d6a19d",
".git/objects/c0/3f3202bf757bfc439c1ebb55f26ce7db7d2f29": "ce158f0f8a6f2aa67ccde47e7301d7e3",
".git/objects/c0/8072728bd081b9a4db7f9fe9d9d1e0e4abfaf7": "1d119c821743bb7c353a70ca3cb83f98",
".git/objects/c0/ac53467d839f7c971c673775f011b3a1e5e9ab": "2f26e921e129604d1a1e87cb8ae96dab",
".git/objects/c1/37c7137751b93a71d46fc63c3cf0b929353ba4": "6d9722f3a19b9b44c1af4cb7797cfb86",
".git/objects/c1/9174c4d6248042b37e07c4dda98c32de6777cc": "40b743d6d414e073915ccb3d13449fcd",
".git/objects/c2/66b92c5f432f4682bc9ff3978a41993ca209f7": "aa6db05fd2e5ddb87451f21ec488ff73",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/fa03604ad2c2b8113c6b1ddfacd0b8b44c4fbf": "7d0f322e33a6385464acd4c742f44d7d",
".git/objects/c3/fff724f6eec52e6646422c0dbbc023c3c014a4": "1a49977d8413486fb9fac47e96263aa2",
".git/objects/c4/459083d84a7e8d2160bb1f686b35dd2772a8d7": "ddabc575cd60ca8dd3080bb048caa102",
".git/objects/c5/3a2c0a7721002f83c186955caf3a6d7b639be7": "5f6ac4382ccacc4c262392f8cc6ed8a6",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/5691d57967edd4bd911e15f508b0dfd5a2a16e": "274f2d7c71eaeaafbb4f7b613b5c21fa",
".git/objects/c7/2cf838e325673083d6f80f7ec50f64efbd1525": "3735ab21559d02a180532be3e8a9bb56",
".git/objects/c7/6efc5e6da8103354b8e545661c13d954eaa9b6": "f60edc670eca1649ece07381078f1599",
".git/objects/c8/6ed9499aec87c3b7457c6daf37a485000d4ea9": "8d1cce5aa90168cc422d7699180dc6f8",
".git/objects/c8/90d5ebdcbc4b55a7d7a0d3bfa48e3c6bf0bd20": "5c4df4e6fd7e4ffd23912358c979b3fb",
".git/objects/c8/a6a55ecc554dfda760eb7de910ddd9fbc05446": "138047aef9436b617c359cac82f116e6",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/c5d25686dd2c07c12bdc11bd9eb9868a8030db": "b3cfc070fd04a5607217c2c3221ffd36",
".git/objects/cc/502cec7b6f0132edc075f33958018a4f6bcd81": "774db480b5d894d890b9f687fb81aa94",
".git/objects/cd/43a658670b275ed78bc095e56d57191ad65d35": "0b7b45cbfe679e8c542acbc195165ae0",
".git/objects/cf/7112312755d695267ea5f2580d4504f8a3e901": "193b73950be3f4a51701f10396ac6d64",
".git/objects/cf/b23fc8d7f7d501622afbb7813157c38c412a0d": "3a959f641df923f429c2132c5274e6a3",
".git/objects/d0/050fafa5719b65c112c409933cfa3e44fe9a42": "c0f05714b6244ce5a69eea7306dd1eb7",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/f126e15b1f3754cddf1b15faee74a21a2a17be": "2935d2e0c67289abccf9e126c6639907",
".git/objects/d1/5075970b0c2d9c0ca024bec2dbd57394981a55": "8a5cf5f8c2805ae813765b33e1b622f7",
".git/objects/d1/734da66ee4ce3d244f59f36a7e7ecea5dc07a6": "b43325b187981fa1932bd703cabe89f3",
".git/objects/d2/288029082e4ab50644c5d9350ecb54c57c5f2f": "a185eb74e70828656d8599c02fba97ad",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/7ec1467c7a15613e29181ed870d5e1dd93dee2": "ccd1324cd9b17feb307f81532dd16049",
".git/objects/d5/8f50a888853cde7a60012954e8fcf9d3f201ea": "b34abd441240da3a5b7ebf3f96ab66c6",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/b1f788fd4fac8aed18ebef873cd3cdfe73ab19": "6a6a5d9525a89df6f458a359149ce5c4",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/093bb0b28166f44e27f6ba9f9e9e0b6f6f5db1": "e5fa8c5117adb732e3edcb6f8b7bfa4d",
".git/objects/db/808be86d87baf7373d17afda60610e59f41a6b": "4e8f3121d87859563d3fc45560a351bd",
".git/objects/dc/6ad667bddc6e7ea10bcf4fda142cc4b8823ee4": "861f64cef7a65a9908e48d4a6ea23bfb",
".git/objects/dc/8a4a0228797071c0c565d377d8957415dbdf32": "e743be117a85da9f59810bade6c41d97",
".git/objects/dd/845f717f46691ca541192c92b1413a77b0e181": "fe4ec7a3e1a5d1b9952287e2c98bcc3a",
".git/objects/df/291f0f52f440fb474eaa81b300c2d0e779b09c": "4638aa09ffe06591986a6308239138e5",
".git/objects/e0/2768d896f3d006d426e4fb60044dea15008e46": "e466962d3b4ad48a5103ade06a63500f",
".git/objects/e0/5381b186dde6fa36a2d2ccee834f72c3d3fd39": "ac72ba0b6ddb3c7de5ae11ba02e2d94c",
".git/objects/e3/149cf2778a11af663af494b9cf185afdb96ddc": "71f94887797dc5b5148962480f14327c",
".git/objects/e4/2d310fa38949476eb87a9db3315804d2fa3944": "f0b273b75d42b478fc34807f7d44b968",
".git/objects/e6/dbf7878edc775cb691cc35a09b1b99d936be1d": "5858ee524febcdfdbcc67c11f05b756f",
".git/objects/e6/e652b38a5985e4766231108bc4a88b12edb434": "c99246265bc61476a96136a54ab6f595",
".git/objects/e9/a8ab882b52113e1e7c2381a319c36d80e8ea04": "40116582680f367e21e19d48b1ddbebe",
".git/objects/e9/dfc0f298ed21b00b78f965f5d88ebc4cf42ea5": "04c6adaf08244841564090ca0bbf586d",
".git/objects/ea/0b830e92bd5e4874c8c9576f4ee1299ae1dff5": "2d7ae1c466011de2b4643230669202d6",
".git/objects/eb/5dccf37dc1b531180a4771d04bfb84442ebe50": "ec77b10a895d79be03c5eabbdec2ada4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0e5a512e9fd997ab0f763df5310ee044827ab8": "b0b2b14c500fbcffc38ccc1114de7ec5",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/63d1514b066934e1c074da6b53ad7d9dbea3fb": "aed579153c7ec70595fde4599975106e",
".git/objects/ec/f46543e6eb367197972bad98873901e844486a": "35c95ab663b16d4e358941762f65ad8a",
".git/objects/ee/c15cbc3cdbff676408a89b5c7a74702455391d": "ad51ac1e623b104a2e89aaeaf7638535",
".git/objects/ee/d868344458ef52f2f395980cb326b2d7ecfe63": "46687e03479397cda1b06e7a4b379a49",
".git/objects/ef/dbbe1cb09814925440ae450e40716b0507edca": "98b8ec93b108af3a62a0200891e02a57",
".git/objects/f0/673092348a1e9bfd936bfaa2cacd29501a44d1": "a7f35228e83a3c05b005789c72119a29",
".git/objects/f0/b35f3f2d3ce1cb21fc5a52db3ea0a44dd71e7e": "dc3ccf811773faa36c0b62077c56a003",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/3aaf7e0c4e9ee23158efebb592d99d8d3708c4": "cd33cb8bf95a6d560a3b656c11ff1149",
".git/objects/f2/a92714f649fe54afe2fc7c2593f9e8a0dc58da": "b7f0e70979dee08bee16bd00eedafb74",
".git/objects/f4/0cadc4e1533e15931a0d7859422c571a5da4f8": "fcba6b8afe900d10f87abb1ff44ae7fb",
".git/objects/f4/ed8578d13e243d8e57952f36f7f4816be4035b": "ae90645e8f4b84c1b21fe7eade0bf9a6",
".git/objects/f6/a388c5f070438d46431625410bd4d56fdea6c7": "6c7428a179c183a83063af41bf206d09",
".git/objects/f6/a7ba78c280e3be3c906792b9bbd91cd5b88c17": "c94754e6c36fe21767f9c95e7d6ffa0a",
".git/objects/fa/b3f5336d05aedff6cb1768cdd81bf7e2cc627a": "a037fabfd51581c6a93804942b97a329",
".git/objects/fa/c94e07e67c26b2cc0d12cc5dc7136aee1c6f57": "0f16f4200c49bb4e6e8932d511962f7d",
".git/objects/fa/e72bc25dcc1af88a2caff9e59b1e3d2eec7a84": "08a79e65c3747ef235dc701b3ebe00a6",
".git/objects/fc/6fb24a48658b3de31e474d2a773bfaf0107879": "f642eef7df8e6e7416c89f566a6a814f",
".git/objects/fc/c5bb2e2338b8976df4b222c7cfd4bd54140e48": "92e800ae6f0ecc1f5b70ea5b20bddbdd",
".git/objects/fd/9b38d219ebafa3aaf815e3eb19303fd5e9bbf1": "21a1fd85b2d19b81f3b7f2b1da580af7",
".git/objects/fe/43ed4cf0d62c4356dc076365d723038f3a1ae8": "ff6688e0456a8d7f42d114c7409b51b5",
".git/objects/fe/58ecfb4efa9a8960df7b17b0ae6cb7bc0c8a89": "9ee9a36d54e26700ae8bc06350c2fe2e",
".git/ORIG_HEAD": "4fce0965eec36ee03d5dee1f73f16056",
".git/refs/heads/master": "60e294ee0d59a03206c09be39131ae8e",
".git/refs/remotes/origin/master": "60e294ee0d59a03206c09be39131ae8e",
"assets/AssetManifest.bin": "2262942a27cf6ab1e76e015414c0f981",
"assets/AssetManifest.bin.json": "50d14f96ebc39865143fc284297d742e",
"assets/AssetManifest.json": "5321b1cb7aabbd0106d63a5aadf96145",
"assets/assets/app-store.png": "3baa08d5e7a2e2e91443963623bbc333",
"assets/assets/ico.png": "71c69817596a0814f653b417eb84c014",
"assets/assets/image1.png": "48d67b553ff8cddb7af546a4b5da079e",
"assets/assets/image1_notext.png": "83ee27fcd2f496f6221eb4c4d0ebf1b4",
"assets/assets/image2.png": "6e66595b42340e0e55ad2cff333623c1",
"assets/assets/image3.png": "a333c46f9c228cc182d1b8da755a4b56",
"assets/assets/image4.png": "a1f0fec511c5d3211e79ced7a0ca17b2",
"assets/assets/legal/CGU.pdf": "a8807f15d278b2b35ff5e269400b84d6",
"assets/assets/legal/CGV.pdf": "d9e405c9057c19bd7a5df19755da25b2",
"assets/assets/login.png": "84a672b71924bcc0a9e9bae944112890",
"assets/assets/logo_purple_noBack_100px.png": "4f892631028f304555834b0f4bdb86ea",
"assets/assets/logo_purple_noBack_110px.png": "71e030aa8960568ef025f9de30205e76",
"assets/assets/logo_purple_noBack_128px.png": "f12786acc4e723995835c503fadb894f",
"assets/assets/logo_purple_noBack_256px.png": "9ee02ff0e29c7ab69fe11df553cb73ec",
"assets/assets/logo_purple_noBack_32px.png": "71c69817596a0814f653b417eb84c014",
"assets/assets/logo_purple_noBack_64px.png": "3f63cd1127b29233605a0082bd6fe6a9",
"assets/assets/logo_white_noBack_128px.png": "ae525529a829f767b226f062744701ca",
"assets/assets/logo_white_noBack_256px.png": "84702eb5c77951e06c7b29b48f660f0c",
"assets/assets/logo_white_noBack_32px.png": "9878accd4bb0009114637f941f4eac3e",
"assets/assets/logo_white_noBack_48px.png": "145d42e3a437333270e3c7081363d5b3",
"assets/assets/logo_white_noBack_64px.png": "02a1558aed253a4b5d447468777e5d75",
"assets/assets/map.png": "ac33649e7f3bef8a8c1294bc96fbae2b",
"assets/assets/map_wPins_1080.png": "16094e18c12a93a14770a76f694a8b11",
"assets/assets/map_wPins_720.png": "363f27d599c356ccec1c8b3cf30599b8",
"assets/assets/md/app_privacy.md": "58636eef41af48cd4c974051eddcdfba",
"assets/assets/md/privacy.md": "f4c87051dda2bfaa2d7ac50292ac0981",
"assets/assets/notif.png": "9384ebee4a2a79035249b26d4a1116df",
"assets/assets/package.png": "b0c622405014125a6d0c3b39aadf9916",
"assets/assets/pin_noborder_120px.png": "83f11022312d9bf78354b3b01204205c",
"assets/assets/pito.png": "cf4f9acbaff2d5f06cb02de457f956b3",
"assets/assets/play-store.png": "2229fcab45e5a81bf04839e20297511e",
"assets/assets/pointpito.png": "3ef4f4cfe19ec59b690fad31f1030a15",
"assets/assets/qr.png": "dbfee4a7eed096259e91a29748ae20a7",
"assets/assets/resa_inputs.png": "13c0a10d275c9eb45f7927028335720a",
"assets/assets/screen_cart.png": "88817f6fcd047d96383f0e8aa68dcc79",
"assets/assets/start.png": "5a8e6cc7fd86c4289360ffd9502784b6",
"assets/assets/trust.png": "60075a70606c113ad99ca6a31f529260",
"assets/assets/why.png": "e74dbe35cc69ddf3602ba5f2262b9271",
"assets/assets/yt.png": "af8eef592e217d59b54fe15075b88d8e",
"assets/assets/yt2.jpg": "c0aed0d90dd7b7c0391efbc90fa3eba9",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "5e64c6e506146afff0a7d71234ac0f3a",
"assets/google_fonts/MPLUSRounded1c-Black.ttf": "988787f5e9f48e6a950ac797c9cb5f28",
"assets/google_fonts/MPLUSRounded1c-Bold.ttf": "d4599c8dc8ba3353fd83af468838f1f8",
"assets/google_fonts/MPLUSRounded1c-ExtraBold.ttf": "fc7e42ded9e4dd88949f2d9be3919306",
"assets/google_fonts/MPLUSRounded1c-Light.ttf": "9c62a03e973fc7c73bfb935296a2b693",
"assets/google_fonts/MPLUSRounded1c-Medium.ttf": "428413a2d843a18cc400656f1b0c364f",
"assets/google_fonts/MPLUSRounded1c-Regular.ttf": "686088cf66e883b2d4c2e8c9cde6d32f",
"assets/google_fonts/MPLUSRounded1c-Thin.ttf": "ee0aa6a3dca41ea3f717cb1b3481f417",
"assets/google_fonts/OFL.txt": "f63c7614e3d3c61afd6176cfe0e0ba89",
"assets/google_fonts/Varela-Regular.ttf": "24ba6c180e414dc24bbf34fe4c895f41",
"assets/google_fonts/VarelaRound-Regular.ttf": "3c3c18c24b0bd85a303bc3f2581d53fc",
"assets/NOTICES": "61c648a1dc91072bc606a4a5def15f9c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"CNAME": "121d7e576b81df00f68e71f00e174efb",
"favicon.png": "2aed751ed2c66b14b5c655359a9605c5",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "a052a7183db5c43fa2457e49ef757819",
"icons/Icon-192.png": "02661c4ce466f401347b39c8b1a05dc9",
"icons/Icon-512.png": "5eb24e39bac397e0d01b1716298d647a",
"icons/Icon-maskable-192.png": "02661c4ce466f401347b39c8b1a05dc9",
"icons/Icon-maskable-512.png": "5eb24e39bac397e0d01b1716298d647a",
"index.html": "5259b7f7c7ee1dd9c7b06b34867e53fe",
"/": "5259b7f7c7ee1dd9c7b06b34867e53fe",
"main.dart.js": "81f54bf0c8b73692ec074aacc094b700",
"manifest.json": "2e94a28476e2d74147bce81682103e59",
"version.json": "07e46b299f44ef551bc77a719e75da12"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
