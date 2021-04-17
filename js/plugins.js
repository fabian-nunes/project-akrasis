// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"TSR_Title","status":true,"description":"v2.3.6 Provide multiple options for customizing the Title Screen.","parameters":{"---Skip Title Screen---":"","Skip Title Screen":"false","Skip Title Mode":"New","Show FPS":"false","---Loading Sprite---":"","Loading Sprite File Name":"Loading","Loading Sprite X":"SceneManager._boxWidth / 2 - 200","Loading Sprite Y":"SceneManager._boxHeight / 2 - 50","-------------------------":"","---Exit Command---":"","Exit Command name":"Exit","Show in Title screen":"true","Show in Main menu":"true","---Credits Page---":"","Credits Command Name":"Credits","Credits Background Image":"","Credits Frame Image":"","Credits Music":"","Credits Text":"\"This is a \\\\C[27]credits text\\\\C example\\nWrite anything you want\\nIt will includes line breaks when hitting Enter\\nYou can use \\\\{\\\\{\\\\C[8]text code\\\\C\\\\}\\\\} too\"","---Pre Title Window---":"","Pre Title Text":"Press any key","Pre Title X":"0","Pre Title Y":"SceneManager._boxHeight / 2 + 100","Pre Title Width":"SceneManager._boxWidth","Pre Title Font Size":"30","Pre Title Text Color":"31","Pre Title Default Cursor":"false","Pre Title Blink":"false","Pre Title Blink Color":"23","Pre Title Text Effect":"accordeon","Pre Title Command":"Command Window","---Title Screen Window---":"","Window Command List":"New Game; Continue; Loads; Options; Credits; Exit","Window Menu Type":"horizontal","Window Background":"transparent","Window X":"SceneManager._boxWidth / 2","Window Y":"SceneManager._boxHeight / 2 + 100","Window Width":"240","Window Visible Rows":"1","Window Visible Cols":"3","Window Text Color":"31","Window Text Font":"TitleFont","Window Text Align":"center","Window Font Size":"25","---True Continue---":"","True Continue Name":"Continue","Enable True Continue":"true","---Default Cursor---":"","Enable Default Cursor":"false","Outline Opacity Blink":"false","Opacity Blink Color":"23","Selected Text Effect":"accordeon","---Custom Cursor---":"","Cursor File Name":"","Cursor X offset":"0","Cursor Y offset":"0","Cursor Smooth Move Speed":"0","Enable Cursor Blink":"false","Enable Cursor Tilt":"false","Enable Cursor Pulse":"false","---Title Window Icons---":"","Show Icons":"false","New Game Icon":"0","True Continue Icon":"0","Continue Icon":"0","Options Icon":"0","Exit Icon":"0","---Title Picture---":"","Picture File Name":"","Picture X":"SceneManager._boxWidth / 2","Picture Y":"SceneManager._boxHeight / 2","---Default Game Title---":"","Game Title X":"20","Game Title Y":"SceneManager._boxHeight / 4","Title Text Color":"0","Title Text Outline Color":"0","Title Text Outline Width":"8","Game Title Text Font":"TitleFont","Game Title Font Size":"72","Custom Title Text":"","---Custom Label---":"","Custom Label Text":"","Custom Label X":"SceneManager._boxWidth / 2","Custom Label Y":"SceneManager._boxHeight / 2","Custom Label Width":"240","Label Text Color":"0","Label Text Font":"GameFont","Label Font Size":"16","---Alternate Transition---":"","Transition Enable":"false","Music FadeOut":"false","---Auto Intro---":"","Enable Auto Intro":"false","Auto Intro Time Out":"900","Auto Intro Transfer":"","---Intro Movie---":"","Movie File Name":"","---Title2 Background---":"","Title2 X":"SceneManager._boxWidth / 2","Title2 Y":"SceneManager._boxHeight / 2","---Animated Sprites---":"","Custom Title1 Object":"\"{animation: false, \\nloop: false, \\nframeWidth: 0, \\nframeHeight: 0, \\nframeNumber: 0, \\nframeRate: 0, \\nmoveToX: false, \\nmoveToY: false, \\nmoveSpeedX: 0, \\nmoveSpeedY: 0, \\nmoveFrameRate: 0, \\nmoveLoopX: 0, \\nmoveLoopY: 0, \\nopacity: 0}\"","Custom Title2 Object":"\"{animation: false, \\nloop: false, \\nframeWidth: 0, \\nframeHeight: 0, \\nframeNumber: 0, \\nframeRate: 0, \\nmoveToX: false, \\nmoveToY: false, \\nmoveSpeedX: 0, \\nmoveSpeedY: 0, \\nmoveFrameRate: 0, \\nmoveLoopX: 0, \\nmoveLoopY: 0, \\nopacity: 0}\"","Custom Picture Object":"\"{animation: false, \\nloop: false, \\nframeWidth: 0, \\nframeHeight: 0, \\nframeNumber: 0, \\nframeRate: 0, \\nmoveToX: false, \\nmoveToY: false, \\nmoveSpeedX: 0, \\nmoveSpeedY: 0, \\nmoveFrameRate: 0, \\nmoveLoopX: 0, \\nmoveLoopY: 0, \\nopacity: 0}\"","Game Title Object":"\"{animation: false, \\nloop: false, \\nframeWidth: 0, \\nframeHeight: 0, \\nframeNumber: 0, \\nframeRate: 0, \\nmoveToX: false, \\nmoveToY: false, \\nmoveSpeedX: 0, \\nmoveSpeedY: 0, \\nmoveFrameRate: 0, \\nmoveLoopX: 0, \\nmoveLoopY: 0, \\nopacity: 0}\"","Custom Label Object":"\"{animation: false, \\nloop: false, \\nframeWidth: 0, \\nframeHeight: 0, \\nframeNumber: 0, \\nframeRate: 0, \\nmoveToX: false, \\nmoveToY: false, \\nmoveSpeedX: 0, \\nmoveSpeedY: 0, \\nmoveFrameRate: 0, \\nmoveLoopX: 0, \\nmoveLoopY: 0, \\nopacity: 0}\""}},
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"true","Custom Image":"MadeSP","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"Iavra Text Sound","status":true,"description":"Dynamically plays sound effects, while text messages are printed.\r\n<Iavra Text Sound>","parameters":{"Enable Text Sounds":"true","Sound Name":"keyS","Sound Pan":"0","Sound Pitch":"100","Sound Volume":"100","Interval":"1","Limit":"-1"}},
{"name":"SlotMachine","status":true,"description":"Slot Machine scene","parameters":{"Variable ID":"26","Help Text":"\\i[73] Apostar (10 Chips) \\i[74] Spin","Won Text":"Parabéns！Ganhaste Win Coin Chips!","Lost Text":"Perdeste! Tenta de novo!","Replay Text":"Queres tentar de novo？","CoinFull Text":"The number of coins has reached the limit.","Bet Text":"Aposta","Spin Text":"Spin","Yes Text":"Sim","No Text":"Não"}},
{"name":"KURAGE_Dice","status":true,"description":"Dice plugin","parameters":{"PicStart#":"1","DiceVar1":"28","DiceVar2":"29","DiceVar3":"30","DiceVar4":"31"}},
{"name":"----------------------------------","status":false,"description":"","parameters":{}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.32 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"25","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[23]","Name Box Auto Close":"false"}},
{"name":"RS_MessageAlign","status":true,"description":"(v1.0.16) This plugin allows you to align the text in the message system.","parameters":{}},
{"name":"YEP_RegionRestrictions","status":true,"description":"v1.04 Use regions to block out Events and/or the player from\nbeing able to venture into those spots.","parameters":{"Player Restrict":"250","Event Restrict":"0","All Restrict":"251","Player Allow":"0","Event Allow":"0","All Allow":"0"}},
{"name":"RED_SetRegionID","status":true,"description":"v1.02 A simple plug-in designed to allow the setting of Region ID's in-game","parameters":{}},
{"name":"----------------------------------","status":false,"description":"","parameters":{}},
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"SRD_HUDMaker","status":true,"description":"Allows developers to create their own map-based HUD through an in-game GUI window!","parameters":{"Active Updating":"false","Show During Events":"transparent","Map Global Condition":"","Battle Global Condition":"","Disable Delete Key":"true"}},
{"name":"SRD_GameOverCore","status":true,"description":"Gives more options for one's Game Over scene. Common Events can be called and a Retry function has been added.","parameters":{"Default Image":"gameover","== Command Window ==":"","Use Command Window":"true","Command Window Phase":"end","Allow Retry Command":"false","Command Window X":"(Graphics.boxWidth - this._commandWindow.width) / 2","Command Window Y":"(Graphics.boxHeight - this._commandWindow.height) / 2","== Command Texts ==":"","Retry Command Text":"Retry Battle","Load Command Text":"Load Game","Title Command Text":"Return to Title","== Command Events ==":"","Start Common Event":"0","Middle Common Event":"0","End Common Event":"0"}},
{"name":"----------------------------------","status":true,"description":"","parameters":{}},
{"name":"HIME_CustomPageConditions","status":true,"description":"v1.6 - Create your own page conditions for your events using\r\nregular eventing!","parameters":{}},
{"name":"HIME_SelfVariables","status":true,"description":"v1.4 - Allows you to create and manage self-variables for all\r\nof your events!","parameters":{}},
{"name":"----------------------------------","status":false,"description":"","parameters":{}},
{"name":"KhasCore","status":true,"description":"[2.0] Required by Khas plugins.","parameters":{}},
{"name":"KhasGraphics","status":true,"description":"[1.1] Required by Khas graphics plugins.","parameters":{}},
{"name":"KhasAdvancedLighting","status":true,"description":"[3.2] Adds lighting to your game.","parameters":{"Custom Blending":"ON","Transfer Reset":"OFF","Auto Battle Lighting":"ON"}},
{"name":"----------------------------------","status":false,"description":"","parameters":{}},
{"name":"OrangeMapshot","status":true,"description":"This plugin will save a picture of the entire map on a Mapshots folder when you press a key. <OrangeMapshot>","parameters":{"useMapName":"true","layerType":"0","drawAutoShadows":"false","drawEvents":"false","keyCode":"122","imageType":"png","imageQuality":"70","imagePath":"./Mapshots"}},
{"name":"----------------------------------","status":false,"description":"","parameters":{}},
{"name":"GALV_LayerGraphics","status":true,"description":"(v.2.0) Create graphic layers for parallax mapping, fog, etc. View the 'Help' document for plugin commands and info.","parameters":{"Tile Size":"48"}},
{"name":"GALV_TimedMessagePopups","status":true,"description":"(v.2.0) Display popup message boxes on screen that do not stop gameplay and auto close after a set time.","parameters":{"Y Offset":"-60","Default Windowskin":"Window","Use Arrows":"false","Windowskin Back Opacity":"255","Text Outline Width":"0"}},
{"name":"GALV_CamControl","status":true,"description":"Allows greater control over where the game camera is focused. View HELP for plugin commands.","parameters":{"Tile Size":"48"}},
{"name":"GALV_MapProjectiles","status":true,"description":"(v.1.8) Create projectiles that can interact with the map and map characters","parameters":{"Tile Size":"48","Fade Speed":"40","Disable Mouse Move":"false","Premade 1":"","Premade 2":"","Premade 3":"","Premade 4":"","Premade 5":"","Premade 6":"","Premade 7":"","Premade 8":"","Premade 9":"","Premade 10":"","Premade 11":"","Premade 12":"","Premade 13":"","Premade 14":"","Premade 15":"","Premade 16":"","Premade 17":"","Premade 18":"","Premade 19":"","Premade 20":""}},
{"name":"----------------------------------","status":false,"description":"","parameters":{}},
{"name":"hackingM","status":true,"description":"Code for the hacking minigame","parameters":{}},
{"name":"conversation","status":true,"description":"Code for conversation","parameters":{}},
{"name":"Prologue_Metro","status":true,"description":"Code for the events in metro","parameters":{}},
{"name":"SaveSystem","status":true,"description":"Code for the saving system","parameters":{}},
{"name":"Chapters","status":true,"description":"Code for getting the chapter information","parameters":{}},
{"name":"Load","status":true,"description":"to add load option in menu screen.","parameters":{}},
{"name":"Prologue_Metro","status":true,"description":"Code for the events in metro","parameters":{}},
{"name":"CustomizeOptions","status":true,"description":"","parameters":{}},
{"name":"GereSwitches","status":true,"description":"Code for taking care of switches","parameters":{}},
{"name":"ChangePlayerHue","status":true,"description":"Code for altering the palyer color","parameters":{}},
{"name":"ChangeValues","status":true,"description":"Code for altering the palyer color","parameters":{}},
{"name":"Prologue_Office","status":true,"description":"Code for the events in office","parameters":{}},
{"name":"WeatherTime","status":true,"description":"Code for altering the weather time","parameters":{}},
{"name":"Casino","status":true,"description":"Code for altering the palyer color","parameters":{}},
{"name":"weaponSelection","status":true,"description":"","parameters":{}},
{"name":"EnemyHealth","status":true,"description":"","parameters":{}},
{"name":"----------------------------------","status":false,"description":"","parameters":{}},
{"name":"OcRam_Audio_EX","status":true,"description":"v2.07 This plugin provides dynamic sound positioning and adds 2 'generic' BGS channels which will also play in battle. PLUGIN NAME MUST BE OcRam_Audio_EX.js","parameters":{"Default Distance (BGS/SE)":"20","Default Radius (BGS/SE)":"0","Default create new (BGS)":"false","Default fade (BGS)":"2","Default forced play (BGS)":"true","Default autopan (BGS/SE)":"true","Default fade (BGM)":"6","BGS2/3 volume control":"true","BGS2 option caption":"BGS2 Volume","BGS3 option caption":"BGS3 Volume","Use linear curve":"true","Debug mode":"false"}},
{"name":"YEP_KeyboardConfig","status":true,"description":"v1.04 Allows players to adjust their button configuration\nfor keyboards.","parameters":{"---General---":"","Command Name":"Keyboard Config","Button Events":"1 2 3","Button Events List":"[]","---Help Text---":"","Key Help":"Change the configuration of this key?","Default Layout":"Default Keyboard Layout","Default Help":"Reverts your keyboard setting to the default setup.","WASD Layout":"WASD Movement Layout","WASD Help":"Changes your keyboard to WASD movement.","Finish Config":"Finish Configuration","Finish Help":"Are you done configuring your keyboard?","Assigned Color":"21","Action Color":"4","Clear Text":"Clear","---Key Names---":"","OK Key":"OK","OK Text":"OK / Talk","Escape Key":"X","Escape Text":"Cancel / Menu","Cancel Key":"Cancel","Cancel Text":"Cancel","Menu Key":"Menu","Menu Text":"Menu","Shift Key":"Dash","Shift Text":"Dash","PageUp Key":"PgUp","PageUp Text":"Page Up","PageDown Key":"PgDn","PageDown Text":"Page Down","Left Key":"◄","Left Text":"Move ◄ Left","Up Key":"▲","Up Text":"Move ▲ Up","Right Key":"►","Right Text":"Move ► Right","Down Key":"▼","Down Text":"Move ▼ Down"}},
{"name":"MessageWindowPopup","status":true,"description":"Popup window plugin","parameters":{"FontSize":"22","Padding":"10","AutoPopup":"true","FaceScale":"75","WindowLinkage":"true","BetweenLines":"4","ThroughWindow":"false","FontSizeRange":"12","FontUpperLimit":"96","FontLowerLimit":"24","InnerScreen":"false","ShakeSpeed":"5","ShakeDuration":"60","NoUseTail":"false","MinWidthVariableId":"0","MinHeightVariableId":"0","lowerLimitX":"0","lowerLimitY":"0","upperLimitX":"0","upperLimitY":"0","tailImage":""}},
{"name":"SRD_TranslationEngine","status":true,"description":"Provides game developers with an in-game tool for building and managing translations/localizations for their game's text.","parameters":{"Source Language Name":"Portuguese","Languages":"[\"Portuguese\",\"English\"]","Default Language":"","Provide Option?":"true","Option Name":"Language","Allow Message Update?":"true"}}
];
