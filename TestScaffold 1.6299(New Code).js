///engine_flags=--language=es6
var scriptName = "TestScaffold";
var scriptVersion = 1.0;
var scriptAuthor = "mumy && yby360";

var Color = Java.type("java.awt.Color");
var Integer = Java.type("java.lang.Integer");
var Display = Java.type('org.lwjgl.opengl.Display');
var GL11 = Java.type('org.lwjgl.opengl.GL11');

var canPlace = false

var EntityPlayer = Java.type('net.minecraft.entity.player.EntityPlayer');
var AntiBot = Java.type("net.ccbluex.liquidbounce.features.module.modules.misc.AntiBot");
var LiquidBounce = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var Teams = Java.type("net.ccbluex.liquidbounce.features.module.modules.misc.Teams");
var EventState = Java.type("net.ccbluex.liquidbounce.event.EventState");
var Fonts = Java.type("net.ccbluex.liquidbounce.ui.font.Fonts");
var InventoryUtils = Java.type("net.ccbluex.liquidbounce.utils.InventoryUtils");
var MovementUtils = Java.type("net.ccbluex.liquidbounce.utils.MovementUtils");
var PlaceRotation = Java.type("net.ccbluex.liquidbounce.utils.PlaceRotation");
var Rotation = Java.type("net.ccbluex.liquidbounce.utils.Rotation");
var RotationUtils = Java.type("net.ccbluex.liquidbounce.utils.RotationUtils");
var BlockUtils = Java.type("net.ccbluex.liquidbounce.utils.block.BlockUtils");
var PlaceInfo = Java.type("net.ccbluex.liquidbounce.utils.block.PlaceInfo");
var RenderUtils = Java.type("net.ccbluex.liquidbounce.utils.render.RenderUtils");
var MSTimer = Java.type("net.ccbluex.liquidbounce.utils.timer.MSTimer");
var TimeUtils = Java.type("net.ccbluex.liquidbounce.utils.timer.TimeUtils");
var IntegerValue = Java.type("net.ccbluex.liquidbounce.value.IntegerValue");
var RandomUtils=Java.type('net.ccbluex.liquidbounce.utils.misc.RandomUtils');
var Gui = Java.type("net.minecraft.client.gui.Gui");

var Module = Java.type("net.ccbluex.liquidbounce.features.module.Module");
var md = Java.type("net.ccbluex.liquidbounce.LiquidBounce").moduleManager;
var ArrayList = Java.type("java.util.ArrayList");

var Runtime = Java.type("java.lang.Runtime").getRuntime();
var White = new Color(255, 255, 255).getRGB();
var timer = new MSTimer();

var C09PacketHeldItemChange = Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange");
var C0APacketAnimation = Java.type("net.minecraft.network.play.client.C0APacketAnimation");
var C0BPacketEntityAction = Java.type("net.minecraft.network.play.client.C0BPacketEntityAction");
var S12PacketEntityVelocity = Java.type('net.minecraft.network.play.server.S12PacketEntityVelocity');
var S03 = Java.type("net.minecraft.network.play.server.S03PacketTimeUpdate");
var C02PacketUseEntity = Java.type('net.minecraft.network.play.client.C02PacketUseEntity');
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition');
var C05PacketPlayerLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook');
var C06PacketPlayerPosLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook');
var C07PacketPlayerDigging = Java.type('net.minecraft.network.play.client.C07PacketPlayerDigging');
var C08PacketPlayerBlockPlacement = Java.type('net.minecraft.network.play.client.C08PacketPlayerBlockPlacement');
var S02PacketChat = Java.type('net.minecraft.network.play.server.S02PacketChat');

var C17PacketCustomPayload = Java.type("net.minecraft.network.play.client.C17PacketCustomPayload");
var C18PacketSpectate = Java.type ("net.minecraft.network.play.client.C18PacketSpectate");
var C00Handshake = Java.type ("net.minecraft.network.handshake.client.C00Handshake");
var S08PacketPlayerPosLook = Java.type ("net.minecraft.network.play.server.S08PacketPlayerPosLook");
var PacketBuffer = Java.type ("net.minecraft.network.PacketBuffer");

var C00PacketKeepAlive = Java.type("net.minecraft.network.play.client.C00PacketKeepAlive");
var C15PacketClientSettings = Java.type("net.minecraft.network.play.client.C15PacketClientSettings");

var S14RelMove = Java.type("net.minecraft.network.play.server.S14PacketEntity");
var S18EntityTeleport = Java.type("net.minecraft.network.play.server.S18PacketEntityTeleport");
var S19EntityStatus = Java.type("net.minecraft.network.play.server.S19PacketEntityStatus");
var S32ConfirmTransaction = Java.type("net.minecraft.network.play.server.S32PacketConfirmTransaction");

var RenderManager = Java.type("net.minecraft.client.renderer.entity.RenderManager");
var Framebuffer = Java.type("net.minecraft.client.shader.Framebuffer");
var EXTFramebufferObject = Java.type("org.lwjgl.opengl.EXTFramebufferObject");
var EXTPackedDepthStencil = Java.type("org.lwjgl.opengl.EXTPackedDepthStencil");
var OpenGlHelper = Java.type("net.minecraft.client.renderer.OpenGlHelper");
var Tessellator = Java.type("net.minecraft.client.renderer.Tessellator");
var ResourceLocation = Java.type("net.minecraft.util.ResourceLocation");
var WorldRenderer = Java.type("net.minecraft.client.renderer.WorldRenderer");
var TextureAtlasSprite = Java.type("net.minecraft.client.renderer.texture.TextureAtlasSprite");

var GlStateManager = Java.type("net.minecraft.client.renderer.GlStateManager");
var ScaledResolution = Java.type("net.minecraft.client.gui.ScaledResolution");
var Blocks = Java.type("net.minecraft.init.Blocks");
var ItemBlock = Java.type("net.minecraft.item.ItemBlock");
var GameSettings = Java.type("net.minecraft.client.settings.GameSettings");
var BlockPos = Java.type("net.minecraft.util.BlockPos");
var EnumFacing = Java.type("net.minecraft.util.EnumFacing");
var MathHelper = Java.type("net.minecraft.util.MathHelper");
var Material = Java.type("net.minecraft.block.material.Material");
var MovingObjectPosition = Java.type("net.minecraft.util.MovingObjectPosition");
var EntityItem = Java.type('net.minecraft.entity.item.EntityItem');
var EntityHorse = Java.type("net.minecraft.entity.passive.EntityHorse");
var Vec3 = Java.type("net.minecraft.util.Vec3");

var towerModule = moduleManager.getModule("Tower");
var speed = moduleManager.getModule("Speed");
var autowalk = moduleManager.getModule("AutoWalk");
var Strafe = moduleManager.getModule("Strafe");
var Blink = moduleManager.getModule("Blink");
var KillAura = moduleManager.getModule("KillAura");
var scaffoldModule = moduleManager.getModule("TestScaffold");
var freecamModule = moduleManager.getModule("Freecam");
var freezeModule = moduleManager.getModule("Freeze");
var pingSpoofModule = moduleManager.getModule("PingSpoof");

var BlockValue = Java.type("net.ccbluex.liquidbounce.value.BlockValue");
var BoolValue = Java.type("net.ccbluex.liquidbounce.value.BoolValue");
var FloatValue = Java.type("net.ccbluex.liquidbounce.value.FloatValue");
var IntegerValue = Java.type("net.ccbluex.liquidbounce.value.IntegerValue");
var ListValue = Java.type("net.ccbluex.liquidbounce.value.ListValue");
var TextValue = Java.type("net.ccbluex.liquidbounce.value.TextValue");

var FontValue = Java.type("net.ccbluex.liquidbounce.value.FontValue");

var LiquidBounce = Java.type("net.ccbluex.liquidbounce.LiquidBounce");

var ScriptModule = Java.type("net.ccbluex.liquidbounce.script.api.ScriptModule");
var Command = Java.type("net.ccbluex.liquidbounce.features.command.Command");

var GameFontRenderer = Java.type("net.ccbluex.liquidbounce.ui.font.GameFontRenderer");
var Fonts = Java.type("net.ccbluex.liquidbounce.ui.font.Fonts");
var BlockUtils = Java.type("net.ccbluex.liquidbounce.utils.block.BlockUtils");

var JavaBoolean = Java.type("java.lang.Boolean");
var JavaFloat = Java.type("java.lang.Float");
var JavaInteger = Java.type("java.lang.Integer");
var JavaString = Java.type("java.lang.String");

var StringSelection = Java.type("java.awt.datatransfer.StringSelection");
var System = Java.type("java.lang.System");

script.import("lib/minecraftUtils.js");
script.import("lib/glFunctions.js");
script.import("lib/systemFunctions.js")

Math.toDegrees = function (radians) {
    return radians / Math.PI * 180;
}

Math.toRadians = function (degrees) {
    return degrees / 180 * Math.PI;
}

Math.rad = function(deg){
	return deg*Math.PI/180;
}

function TestScaffold() {
	
	var setting = {
		float: function (name, def, min, max) {
			return value.createFloat(name, def, min, max);
		},
		integer: function (name, def, min, max) {
			return value.createInteger(name, def, min, max);
		},
		boolean: function (name, def) {
			return value.createBoolean(name, def);
		},
		list: function (name, values, def) {
			return value.createList(name, values, def);
		}
	};

    var settings = {
        // Mode
        mode: setting.list("Mode", ["Normal", "Rewinside", "Expand", "MatrixTest"], "Normal"),
		rewinsidestrafe: setting.float("RewinsideStrafe", 0.2, 0.1, 0.5),
        rewinsidemotiony: setting.float("RewinsideMotionY", 0, 0, 0.5),

        // Delay
        maxDelay: new _AdaptedValue(new (Java.extend(IntegerValue, {
            onChanged: function (oldValue, newValue) {
                var i = settings.minDelay.get();
                if (i > newValue) {
                    settings.maxDelay.set(i);
                }
            }
        }))("MaxDelay", 0, 0, 1000)),
        minDelay: new _AdaptedValue(new (Java.extend(IntegerValue, {
            onChanged: function (oldValue, newValue) {
                var i = settings.maxDelay.get();
                if (i < newValue) {
                    settings.minDelay.set(i);
                }
            }
        }))("MinDelay", 0, 0, 1000)),
        placeableDelay: setting.boolean("PlaceableDelay", false),

        // AutoBlock
        autoBlock: setting.boolean("AutoBlock", true),
        stayAutoBlock: setting.boolean("StayAutoBlock", false),

        // Basic stuff
        sprint: setting.list("SprintMode", ["Off", "Normal", "Hypixel", "Fake"], "Off"),
		hypixelsprintspeed: setting.float("HypixelSprintSpeed", 1.2, 1, 1.5), 
		hirohikosprint: setting.boolean("HirohikoSprint", false),
        swing: setting.list("SwingMode", ["Off", "OffPacket", "Normal"], "Off"),
        search: setting.boolean("Search", true),
        down: setting.boolean("Down", true),
        placeMode: setting.list("PlaceTiming", ["Pre", "Post"], "Post"),

        // Eagle
        eagle: setting.boolean("Eagle", false),
        eagleSilent: setting.boolean("EagleSilent", false),
        blocksToEagle: setting.integer("BlocksToEagle", 0, 0, 10),

        // Expand
        expandLength: setting.integer("ExpandLength", 5, 1, 6),

        // Rotations
        rotations: setting.boolean("Rotations", true),
		rotationsadd: setting.boolean("TestRotations", true),
		horse: setting.boolean("IfHorse", true),
        keepLength: setting.integer("KeepRotationLength", 0, 0, 20),
        keepRotation: setting.boolean("KeepRotation", false),

        // Zitter
        zitterMode: setting.list("ZitterMode", ["Off", "Teleport", "Smooth"], "Teleport"),
        zitterSpeed: setting.float("ZitterSpeed", 0.13, 0.1, 0.3),
        zitterStrength: setting.float("ZitterStrength", 0.072, 0.05, 0.2),

        // Game
		timermode: setting.list("TimerMode", ["Normal", "Gradual"], "Normal"),
        timer: setting.float("NormalTimer", 1, 0.1, 10),
		startTimer: setting.float("GradualStartTimer", 1, 0.1, 10),
		endTimer: setting.float("GradualEndTimer", 1, 0.1, 10),
		Timerspeed: setting.integer("GradualTimerspeed",20,1,20),
		Timerdelay: setting.integer("GradualTimerdelay",20,1,20),
        speedModifier: setting.float("SpeedModifier", 1, 0, 2),
		slow: setting.boolean("Slow", false),
		slowspeed: setting.float("SlowSpeed", 0.6, 0.2, 0.8),

        // Safety
        antihalf: setting.boolean("AntiHalf", false),
        bodyreverser: setting.boolean("BodyReverser", false),
		AntiFlag: setting.boolean("AntiFlag", false),
		AntiFlagActivation: setting.integer("AntiFlagActivation",20,1,100),
		AntiFlagStrength: setting.float("AntiFlagStrength",0.01,0.05,0.30),
        autowalkmode: setting.list("AutoWalkMode", ["Off", "Test", "Bind"], "Test"),
        sameY: setting.boolean("SameY", false),
        safeWalk: setting.boolean("SafeWalk", true),
        airSafe: setting.boolean("AirSafe", false),
		maxfalldistance: setting.integer("AirSafeMaxFallDistance", 5, 0, 255),
		
		// Module+
        buildHand: setting.boolean("BuildHand", false),
        towermode: setting.list("TowerMode", ["Off", "TestTower", "TestTower2", "BindTower", "AACTower", "MotionTp2", "AAC4Tower", "VerusTower", "AAC4JumpTower", "Matrix6.9.2Tower", "UniversoCraftTower"], "TestTower"),
        motionground: setting.boolean("MotionGround", false),
		motiongroundset: setting.float("MotionGroundSet", 2.5, 0, 3),
        speed: setting.boolean("Speed", false),
        speedmode: setting.list("SpeedMode", ["AutoJump", "BindSpeed", "TestSpeed", "TestSpeed2", "TestHop", "AACTestSpeed", "AACTestSpeed2", "HClip", "CustomBHop", "MatrixHop", "Vulcan", "Ncp", "Verus", "KarhuLow", "BlocksMC", "Spartan", "NoRules", "Dev"], "AutoJump"),
        xzrjump: setting.boolean("XZRJump", false),
		xzrjumpset: setting.float("XZRJumpSet", 0, 0, 0.02), 
        vclipjump: setting.boolean("VClipJump", false),
        vclipjumpset: setting.float("VClipJumpSet", 0.1, 0.01, 1), 
		randomjump: setting.boolean("RandomJump", false),
		randomjumpmax: setting.float("RandomJumpMax", 0.84, 0.01, 1),
		randomjumpmin: setting.float("RandomJumpMin", 0.01, 0.01, 1),
		fusrodah: setting.boolean("FusRoDah", false),
		fusrodahset: setting.float("FusRoDahSet", 0.5, 0.1, 1.5),
		fusrodahhurtset: setting.integer("FusRoDahHurtSet", 0, 0, 20),
		blink: setting.boolean("Blink", false),
		customdisabler: setting.boolean("CustomDisabler", false),
		killauraswitch: setting.boolean("KillAuraSwitch", false),
		buildtargetstrafe: setting.boolean("BuildTargetStrafe", false),
		distance0: setting.float("Distance", 2.5, 1.0, 4.00),
		motionXZ: setting.float("MotionXZ" , 0.28, 0.01, 0.60),
		
		// RepairFix
		DisableHeldItemChange: setting.boolean("DisableHeldItemChange", false),
		
        // Visuals
        counterDisplay: setting.boolean("Counter", true),
        smoothcamera: setting.boolean("SmoothCamera", false),
        skytime: setting.boolean("SkyTime", false),
        skyTimeAmount: setting.integer("SkyTimeAmount", 50, -100, 100),
        Heartbeat: setting.boolean("HeartBeat", false),
        Heartbeatset: setting.integer("HeartBeatSet", 90, 0, 360),
        mark: setting.boolean("Mark", false),
		scaffoldcircle: setting.boolean("ScaffoldCircle", false),
		speedmonitor: setting.boolean("SpeedMonitor", false),
		
		// FunAdd
		deathcoords: setting.boolean("DeathCoords", false),
		debugcam: setting.boolean("DeBugCam", false),
		mousesensitivity: setting.boolean("MouseSensitivity", false),
		mousesensitivityset: setting.float("MouseSensitivitySet", 0.5, 0.1, 1.5),
		memoryback: setting.boolean("MemoryBack", false),
		memorybacktime: setting.integer("MemoryBackTime", 3000, 1000, 100000),
		betterfps: setting.boolean("BetterFps", false)
            
    };

    // Target block
    var targetPlace;

    // Launch position
    var launchY;

    // Rotation lock
    var lockRotation;
	let rotation = false;
    let playerYaw = 0;

    // Auto block slot
    var slot;

    // Zitter Smooth
    var zitterDirection;

    // Delay
    var delayTimer = new MSTimer();
    var zitterTimer = new MSTimer();
    var delay;

    // Eagle
    var placedBlocksWithoutEagle = 0;
    var eagleSneaking;

    // Down
    var shouldGoDown = false;
	
	// GradualTimer
	var ticks = 0;
	var currentTimer = 1;
		
	// Link
	this.links1 = function() {
      return settings.speed.get();
    }	
	this.links2 = function() {
      return settings.speedmode.get().toLowerCase() === "custombhop";
    }	
	this.links3 = function() {
      return settings.customdisabler.get();
    }
	this.links4 = function() {
      return settings.speedmode.get();
    }	
	this.links5 = function() {
      return settings.placeableDelay.get();
    }	
	this.links6 = function() {
      return settings.autoBlock.get();
    }	
	this.links7 = function() {
      return settings.stayAutoBlock.get();
    }	
	this.links8 = function() {
      return settings.sprint.get();
    }	
	this.links9 = function() {
      return settings.swing.get();
    }	
	this.links10 = function() {
      return settings.search.get();
    }	
	this.links11 = function() {
      return settings.down.get();
    }	
	this.links12 = function() {
      return settings.eagle.get();
    }
	this.links13 = function() {
      return settings.eagleSilent.get();
    }
	this.links14 = function() {
      return settings.rotations.get();
    }
	this.links15 = function() {
      return settings.keepRotation.get();
    }
	this.links16 = function() {
      return settings.zitterMode.get();
    }
	this.links17 = function() {
      return settings.slow.get();
    }
	this.links18 = function() {
      return settings.sameY.get();
    }
	this.links19 = function() {
      return settings.safeWalk.get();
    }
	this.links20 = function() {
      return settings.airSafe.get();
    }
	this.links21 = function() {
      return settings.counterDisplay.get();
    }
	this.links22 = function() {
      return settings.mark.get();
    }

	// BuildTargetStrafe
	function getClosestEntity() {
	var filteredEntites = []
	for (var i in mc.theWorld.loadedEntityList) {
		var entity = mc.theWorld.loadedEntityList[i]
		if (entity != mc.thePlayer) {
			filteredEntites.push(entity)
		}
	}
	filteredEntites.sort(function (a, b) {
		var distanceA = mc.thePlayer.getDistanceToEntity(a)
		var distanceB = mc.thePlayer.getDistanceToEntity(b)
		return distanceB < distanceA;
	})
	return filteredEntites[0];
		}
		var player;
	this.onAttack = function(e) {
		player = e.getTargetEntity();
	}
	
	// SpeedMonitor_blocks/s
	var lastX,lastZ,mcWidth,mcHeight,speedStr="0 blocks/s";
	
	// RandomJump
	function randomIntFrom(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
	}
	function randomFloatFrom(min,max){
	return Math.random()*(max-min)+min;
	}
	
	// HirohikoSprint_GetMoveYaw
	function getMoveYaw() {
    var moveYaw = mc.thePlayer.rotationYaw;
    if (mc.thePlayer.moveForward != 0 && mc.thePlayer.moveStrafing == 0) {
        moveYaw += mc.thePlayer.moveForward > 0 ? 0 : 180;
    } else if (mc.thePlayer.moveForward != 0 && mc.thePlayer.moveStrafing != 0) {
        if (mc.thePlayer.moveForward > 0)
            moveYaw += mc.thePlayer.moveStrafing > 0 ? -45 : 45;
        else
            moveYaw -= mc.thePlayer.moveStrafing > 0 ? -45 : 45;

        moveYaw += mc.thePlayer.moveForward > 0 ? 0 : 180;
    } else if (mc.thePlayer.moveStrafing != 0 && mc.thePlayer.moveForward == 0) {
        moveYaw += mc.thePlayer.moveStrafing > 0 ? -90 : 90;
    }
    return moveYaw;
	}
	
	// RotationMotion
	function RotationMotion(offset){
	var playerYaw = Math.rad(mc.thePlayer.rotationYaw);
	mc.thePlayer.setPosition(mc.thePlayer.posX-(Math.sin(playerYaw)*offset),mc.thePlayer.posY,mc.thePlayer.posZ+(Math.cos(playerYaw)*offset));
	}

	this.getName = function () {
        return "TestScaffold";
    }

    this.getDescription = function () {
        return "TestScaffold-Module, By yby360 and mumy";
    }

    this.getCategory = function () {
        return "Fun";
    }
	
	this.getTag = function () {
        return settings.mode.get();
    }

// BetterFps
this.onPacket = function () {
if (settings.betterfps.get()) {
for (var a in mc.theWorld.loadedEntityList) {
            var entities = mc.theWorld.loadedEntityList[a];
            if(entities instanceof EntityItem) {
                entities.renderDistanceWeight = 0.0;
					}
				}
			}else{
for (var a in mc.theWorld.loadedEntityList) {
            var entities = mc.theWorld.loadedEntityList[a];
            if(entities instanceof EntityItem) {
                entities.renderDistanceWeight = 1.0;
            }
        }       
    }				
}

// TestRotations
this.onPacket = function (event) {
	if (settings.rotationsadd.get()){
        const packet = event.getPacket();
        if (packet instanceof C03PacketPlayer) {
            const player = mc.thePlayer;
            if (packet.rotating) {
                playerYaw = packet.yaw;
                rotation = playerYaw !== player.rotationYaw;
            } if (!rotation) {
                return;
            }
            player.rotationYawHead = playerYaw;
            player.renderYawOffset = playerYaw;
            const ridingEntity = player.ridingEntity;
            if (settings.horse.get() && ridingEntity instanceof EntityHorse) {
                ridingEntity.rotationYawHead = playerYaw;
                ridingEntity.renderYawOffset = playerYaw;
            }
        } else if (packet instanceof S08PacketPlayerPosLook) {
            rotation = false;
            playerYaw = packet.yaw;
			}
		}
	}

// HirohikoSprint_GetOnJump
var stopSprint = false;
	var cancel = true;
    this.onEnable = function() {
        stopSprint = false;
		cancel = true
    }
	this.onJump = function(event) {
		if (cancel && mc.thePlayer.isSprinting() && settings.hirohikosprint.get()) {
            event.cancelEvent()
            cancel = false;
			this.yaw = mc.thePlayer.rotationYaw;
            mc.thePlayer.rotationYaw = getMoveYaw();
            mc.thePlayer.jump();
            mc.thePlayer.rotationYaw = this.yaw;
			cancel = true;
		}
	}

    this.onEnable = function () {
        if (mc.thePlayer == null) {
            return;
        }
        launchY = parseInt(mc.thePlayer.posY);
		
		// GradualEnable
		if (settings.timermode.get().toLowerCase() === "gradual") {
		currentTimer = settings.startTimer.get(); 
        ticks = 0;
        mc.thePlayer.motionY = 0.09;
		}

		// TestRotations
		rotation = false;
    }
	
    this.onUpdate = function () {
	switch (settings.timermode.get()) {
    case "Normal":
        mc.timer.timerSpeed = settings.timer.get();
        break;
    case "Gradual":
		ticks++;
        mc.timer.timerSpeed = currentTimer;
        if(currentTimer > settings.endTimer.get() && ticks == settings.Timerdelay.get()) {
            currentTimer -= 0.05 * settings.Timerspeed.get()
            ticks = 0;
        }
        break;
	}

        shouldGoDown = settings.down.get() && GameSettings.isKeyDown(mc.gameSettings.keyBindSneak) && getBlocksAmount() > 1;
        if (shouldGoDown) {
            mc.gameSettings.keyBindSneak.pressed = false;
        }
        if (mc.thePlayer.onGround) {
            var mode = settings.mode.get();

            // Rewinside scaffold mode
            if (mode.toLowerCase() === "rewinside") {
                MovementUtils.strafe(settings.rewinsidestrafe.get());
                mc.thePlayer.motionY = settings.rewinsidemotiony.get();
            }
			
            // Eagle
            if (settings.eagle.get() && !shouldGoDown) {
                if (placedBlocksWithoutEagle >= settings.blocksToEagle.get()) {
                    var shouldEagle = mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 1, mc.thePlayer.posZ)).getBlock() === Blocks.air;

                    if (settings.eagleSilent.get()) {
                        if (eagleSneaking !== shouldEagle) {
                            mc.getNetHandler().addToSendQueue(
                                new C0BPacketEntityAction(mc.thePlayer, shouldEagle ?
                                    C0BPacketEntityAction.Action.START_SNEAKING :
                                    C0BPacketEntityAction.Action.STOP_SNEAKING)
                            );
                        }

                        eagleSneaking = shouldEagle;
                    } else {
                        mc.gameSettings.keyBindSneak.pressed = shouldEagle;
                    }
                    placedBlocksWithoutEagle = 0;
                } else {
                    placedBlocksWithoutEagle++;
                }
            }

            // Zitter
			switch (settings.zitterMode.get()) {
			case "Off":
			break;
			case "Teleport":
			MovementUtils.strafe(settings.zitterSpeed.get());
                var yaw = Math.toRadians(mc.thePlayer.rotationYaw + (zitterDirection ? 90 : -90));
                mc.thePlayer.motionX -= Math.sin(yaw) * settings.zitterStrength.get();
                mc.thePlayer.motionZ += Math.cos(yaw) * settings.zitterStrength.get();
                zitterDirection = !zitterDirection;
			break;
			case "Smooth":
			    if (!GameSettings.isKeyDown(mc.gameSettings.keyBindRight)) {
                    mc.gameSettings.keyBindRight.pressed = false;
                }
                if (!GameSettings.isKeyDown(mc.gameSettings.keyBindLeft)) {
                    mc.gameSettings.keyBindLeft.pressed = false;
                }
                if (zitterTimer.hasTimePassed(100)) {
                    zitterDirection = !zitterDirection;
                    zitterTimer.reset();
                }
                if (zitterDirection) {
                    mc.gameSettings.keyBindRight.pressed = true;
                    mc.gameSettings.keyBindLeft.pressed = false;
                } else {
                    mc.gameSettings.keyBindRight.pressed = false;
                    mc.gameSettings.keyBindLeft.pressed = true;
                }
			break;	
			}
        }

		// Sprint
		switch (settings.sprint.get()) {
			case "Off":
				mc.thePlayer.setSprinting(false);
			break;
			case "Normal":
				mc.thePlayer.setSprinting(true);
			break;
			case "Hypixel":
			if (mc.gameSettings.keyBindForward.isKeyDown() && !mc.thePlayer.isSneaking()) {
				mc.thePlayer.motionX *= settings.hypixelsprintspeed.get()
				mc.thePlayer.motionZ *= settings.hypixelsprintspeed.get()			
				}
			break;
			case "Fake":
				mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.0000013, mc.thePlayer.posZ);
				mc.thePlayer.setSprinting(true);
			break;
			}
			
		// SpeedMonitor_XYZ		
		var SR = new ScaledResolution(mc)
		mcWidth=SR.getScaledWidth();
		mcHeight=SR.getScaledHeight();
        speedStr=(Math.sqrt(Math.pow(lastX-mc.thePlayer.posX,2)+Math.pow(lastZ-mc.thePlayer.posZ,2))*20).toFixed(2)+" blocks/s";
        lastX=mc.thePlayer.posX;
        lastZ=mc.thePlayer.posZ;
		
		if (settings.buildtargetstrafe.get()) {
		if(player == null) {
			if(0 == mc.thePlayer.ticksExisted % 20)
				chat.print("no get");
			return;
		}
		if(Math.sqrt(Math.pow(mc.thePlayer.posX - player.posX, 2) + Math.pow(mc.thePlayer.posZ - player.posZ, 2)) != 0) {
			var c1 = (mc.thePlayer.posX - player.posX)/(Math.sqrt(Math.pow(mc.thePlayer.posX - player.posX,2) + Math.pow(mc.thePlayer.posZ - player.posZ,2)))
			var s1 = (mc.thePlayer.posZ - player.posZ)/(Math.sqrt(Math.pow(mc.thePlayer.posX - player.posX,2) + Math.pow(mc.thePlayer.posZ - player.posZ,2)))
			if(Math.sqrt(Math.pow(mc.thePlayer.posX - player.posX,2) + Math.pow(mc.thePlayer.posZ - player.posZ,2)) <= settings.distance0.get()) {
				if(mc.gameSettings.keyBindLeft.pressed) {
					mc.thePlayer.motionX = -settings.motionXZ.get() * s1 - 0.18 * settings.motionXZ.get() * c1
					mc.thePlayer.motionZ = settings.motionXZ.get() * c1 - 0.18 * settings.motionXZ.get() * s1
				}else {
					mc.thePlayer.motionX = settings.motionXZ.get() * s1 - 0.18 * settings.motionXZ.get() * c1
					mc.thePlayer.motionZ = -settings.motionXZ.get() * c1 - 0.18 * settings.motionXZ.get() * s1
					}
				}
			}
		}
	}

    this.onMotion = function (event) {
        var eventState = event.getEventState();

// Tower
if (mc.gameSettings.keyBindJump.isKeyDown() && !mc.gameSettings.keyBindLeft.isKeyDown() && !mc.gameSettings.keyBindRight.isKeyDown() && !mc.gameSettings.keyBindForward.isKeyDown() && !mc.gameSettings.keyBindBack.isKeyDown()) {	
switch (settings.towermode.get()) {
	case "Off":
		break;
    case "TestTower":
ticks = 0; mc.thePlayer.jump();
                ticks++;
                if (ticks == 9) {
                    mc.thePlayer.jump();
                }
        break;
    case "AACTower":
if (mc.thePlayer.ticksExisted % 4 == 1) {
			mc.thePlayer.motionY = 0.4195464;
			mc.thePlayer.setPosition(mc.thePlayer.posX - 0.035, mc.thePlayer.posY, mc.thePlayer.posZ);	   
			
	} else {
				
			if (mc.thePlayer.ticksExisted % 4 == 0) {
				mc.thePlayer.motionY = -0.5;
				mc.thePlayer.setPosition(mc.thePlayer.posX + 0.035, mc.thePlayer.posY, mc.thePlayer.posZ);
			}
		}
        break;
	case "TestTower2":
mc.thePlayer.speedInAir = 0.03;
		mc.thePlayer.jumpMovementFactor = 0.016;
		mc.timer.timerSpeed = 0.6;
		if (mc.thePlayer.onGround = true) {
			mc.thePlayer.jump();
		}
		break;
	case "MotionTp2":
 if (mc.thePlayer.onGround) {
                    mc.thePlayer.motionY = 0.42;
                } else if (mc.thePlayer.motionY < 0.23) {
					mc.thePlayer.onGround = true;
					mc.thePlayer.motionY = 0.42;
                }
		break;
	case "AAC4Tower":
	var jumpGround = 0.0
if (mc.thePlayer.onGround) {
                    jumpGround = mc.thePlayer.posY
                    mc.thePlayer.motionY = 0.42
                }
                mc.thePlayer.motionX = 0.0
                mc.thePlayer.motionZ = -0.00000001
                mc.thePlayer.jumpMovementFactor = 0.000
                mc.timer.timerSpeed = 0.60
                if (mc.thePlayer.posY > jumpGround + 0.99) {
                    mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY - 0.001335979112146, mc.thePlayer.posZ)
                    mc.thePlayer.motionY = 0.42
                    jumpGround = mc.thePlayer.posY
                    mc.timer.timerSpeed = 0.75
                }
		break;
	case "VerusTower":	
		        mc.thePlayer.setPosition(mc.thePlayer.posX, (mc.thePlayer.posY * 2) / 2, mc.thePlayer.posZ)
                if (mc.thePlayer.ticksExisted % 2 == 0) {
                    mc.thePlayer.motionY = 0.5
                    mc.timer.timerSpeed = 0.8
                }else{
                    mc.timer.timerSpeed = 1.33
                    mc.thePlayer.motionY = 0.0
                    mc.thePlayer.onGround = true
                }
		break;
    case  "AAC4JumpTower":
		        mc.timer.timerSpeed = 0.97
                if (mc.thePlayer.onGround) {
                    mc.thePlayer.motionY = 0.387565
                    mc.timer.timerSpeed = 1.05
                }
		break;
	case	"Matrix6.9.2Tower":
	        if (mc.thePlayer.onGround) {
                    mc.thePlayer.motionY = 0.42
            } else if (mc.thePlayer.motionY < 0.19145141919180) {
                    mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ)
					mc.thePlayer.onGround = true
					mc.thePlayer.motionY = 0.481145141919180
            }
		break;
	case  "UniversoCraftTower":
			if (mc.thePlayer.onGround) {
                mc.thePlayer.motionY = 0.42
            } else if (mc.thePlayer.motionY < 0.19) {
                    mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ)
                    mc.thePlayer.onGround = true
                    mc.thePlayer.motionY = 0.42
            }
		break;
		}
	}
	
// AutoJump
if (settings.speed.get() && settings.speedmode.get().toLowerCase() === "autojump") {
mc.thePlayer.onGround && mc.thePlayer.jump();
	}

// Slow	
if (settings.slow.get()) {
			mc.thePlayer.motionX *= settings.slowspeed.get();
			mc.thePlayer.motionZ *= settings.slowspeed.get();
        }

// Matrix
if (settings.mode.get().toLowerCase() === "matrixtest") {		
mc.gameSettings.keyBindSneak.pressed = false
        RotationUtils.setTargetRotation(new Rotation(mc.thePlayer.rotationYaw, 90))
        if (mc.theWorld.getBlockState(underBlock = new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 1, mc.thePlayer.posZ)).getBlock().getMaterial().isReplaceable()) {
            [EnumFacing.NORTH, EnumFacing.SOUTH, EnumFacing.WEST, EnumFacing.EAST].forEach(function (face) {
                if (!mc.theWorld.getBlockState(underBlock.add(face.getDirectionVec())).getBlock().getMaterial().isReplaceable()) {
                    if (canPlace) {
                        canPlace = false
                        mc.playerController.onPlayerRightClick(mc.thePlayer, mc.theWorld, mc.thePlayer.getHeldItem(), underBlock.add(face.getDirectionVec()), face.getOpposite(), new Vec3(0.5, 0.5, 0.5))
                        mc.thePlayer.swingItem()
                    } else mc.gameSettings.keyBindSneak.pressed = canPlace = true
                }
            })
        }
	}		

// KillAuraSwitch
if (settings.killauraswitch.get()) {	
KillAura.setState(false);
		}

// AntiFlag
if(settings.AntiFlag.get()){
	if(mc.gameSettings.keyBindJump.pressed==false){
		if(mc.thePlayer.ticksExisted%settings.AntiFlagActivation.get()==0){
			var dir=Math.rad(mc.thePlayer.rotationYaw+180);
			mc.thePlayer.motionX+=-Math.sin(dir)*settings.AntiFlagStrength.get()
			mc.thePlayer.motionZ+=Math.cos(dir)*settings.AntiFlagStrength.get()
					}
				}
			}		

// FusRoDah
if (settings.fusrodah.get()) {	
			if(mc.thePlayer.hurtTime > settings.fusrodahhurtset.get()) {
			mc.thePlayer.motionX *= settings.fusrodahset.get();
			mc.thePlayer.motionZ *= settings.fusrodahset.get();
			mc.thePlayer.motionY *= settings.fusrodahset.get();
			}
}		

// RandomJump
if (settings.randomjump.get() && mc.thePlayer.onGround) {
	mc.thePlayer.motionY+=randomFloatFrom(settings.randomjumpmin.get(),settings.randomjumpmax.get());
		}

// DebugCam
if (settings.debugcam.get()) {			
mc.gameSettings.debugCamEnable=true;	
		}else{
mc.gameSettings.debugCamEnable=false;
		}
		
// MouseSensitivity
if (settings.mousesensitivity.get()) {
	mc.gameSettings.mouseSensitivity=settings.mousesensitivityset.get();
		}else{
	mc.gameSettings.mouseSensitivity=0.55;		
		}		

// MemoryBack
if (settings.memoryback.get()) {		
timer.hasTimePassed(settings.memorybacktime.get()) && (Runtime.gc(), timer.reset());
		}

// HirohikoSprint			
if (mc.thePlayer.isSprinting() && settings.hirohikosprint.get()) {
            if (mc.thePlayer.moveForward <= 0) {
                mc.thePlayer.sendQueue.addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.STOP_SPRINTING));
                stopSprint = true;
            } else if (stopSprint) {
                mc.thePlayer.sendQueue.addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.START_SPRINTING));
                stopSprint = false;
            }
        } else {
            stopSprint = false;
        }
					
// DeathCoords
var sentMessage = false;
if (settings.deathcoords.get()) {	
if (mc.thePlayer.getHealth() <= 0) {
            if (!sentMessage) {
                var posX = mc.thePlayer.posX.toFixed(0);
                var posY = mc.thePlayer.posY.toFixed(0);
                var posZ = mc.thePlayer.posZ.toFixed(0);

                var coords = posX + "/" + posY + "/" + posZ;

                Chat.print("§8[§9DeathCoords§8] §f" + coords);
                sentMessage = true;
            }
        } else {
            sentMessage = false;
        }
    }

// BodyReverser
if (settings.bodyreverser.get() && mc.gameSettings.keyBindForward.pressed) {
mc.gameSettings.keyBindBack.pressed = true;
mc.gameSettings.keyBindForward.pressed = false;
mc.thePlayer.rotationYaw += 180
    }

// HClip
ticks++
        if (settings.speed.get() && settings.speedmode.get().toLowerCase() === "hclip") {
        if (mc.gameSettings.keyBindForward.isKeyDown() && !mc.thePlayer.isSneaking()) {
          mc.thePlayer.setSprinting(true);
          if(mc.thePlayer.onGround) {
            mc.thePlayer.jump();
          }
         if(ticks == 2 || ticks == 4 || ticks == 6 || ticks ==8 || ticks == 12 || ticks == 16 || ticks == 18 || ticks == 20) {
           hClip(1)
           mc.thePlayer.motionX = 0;
           mc.thePlayer.motionZ = 0;
         }else {
        }
        } else {
          mc.thePlayer.speedInAir = 0.025;
        }
       if(ticks == 20) {
         	ticks = 0;
       }
}

// SkyTime
if (settings.skytime.get()) {
mc.theWorld.setWorldTime(mc.theWorld.getWorldTime() + settings.skyTimeAmount.get())
}

// AntiHalf
if (settings.antihalf.get()) {
if (mc.thePlayer.onGround && mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ)).getBlock() instanceof SlabBlock) {
        mc.gameSettings.keyBindJump.pressed = true;
      }
}

// XZRJump
if (settings.xzrjump.get()) {
mc.thePlayer.motionX = mc.thePlayer.motionZ = settings.xzrjumpset.get();
}

// VClipJump
if (settings.vclipjump.get()) {
JumpCalnceler = true, mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY += settings.vclipjumpset.get(), mc.thePlayer.posZ);
}

// AutoWalk
switch (settings.autowalkmode.get()) {
	case "Off":
		autowalk.setState(false)
		break;
    case "Test":
		autowalk.setState(false)
		mc.gameSettings.keyBindForward.pressed = true;
        break;
	case "Bind":	
		autowalk.setState(true)
		break;
	}

// Blink
if (settings.blink.get() && mc.thePlayer.onGround && mc.thePlayer.jump) {	
Blink.setState(true)
}else{
Blink.setState(false)
	}

// BindSpeed
if (settings.speed.get() && settings.speedmode.get().toLowerCase() === "bindspeed") {
speed.setState(true)
}else{
speed.setState(false)
	}

// AACTestSpeed
if (settings.speed.get() && settings.speedmode.get().toLowerCase() === "aactestspeed") {
if(mc.thePlayer.moveForward>0){
if(mc.thePlayer.onGround){mc.thePlayer.jump();
mc.timer.timerSpeed=1.6105;
mc.thePlayer.motionX*=1.0708;
mc.thePlayer.motionZ*=1.0708;
}else if(mc.thePlayer.fallDistance>0){
mc.timer.timerSpeed=0.6;
		}
	}
}

// AACTestSpeed2
if (settings.speed.get() && settings.speedmode.get().toLowerCase() === "aactestspeed2") {
if (mc.gameSettings.keyBindForward.isKeyDown() && !mc.thePlayer.isSneaking()) {
            mc.thePlayer.setSprinting(true);
          if (mc.thePlayer.onGround){
            if(!mc.gameSettings.keyBindJump.isKeyDown()){
              mc.thePlayer.jump()
            }
            mc.thePlayer.motionZ *= 1.01;
            mc.thePlayer.motionX *= 1.01;
        }
        mc.thePlayer.motionY -= 0.014;
        }
}
	
// TestHop
if (settings.speed.get() && settings.speedmode.get().toLowerCase() === "testhop") {
if(mc.gameSettings.keyBindForward.isKeyDown() || mc.gameSettings.keyBindLeft.isKeyDown() || mc.gameSettings.keyBindRight.isKeyDown() || mc.gameSettings.keyBindBack.isKeyDown()) {
            mc.thePlayer.motionX *= 1.05;
			mc.thePlayer.motionZ *= 1.05;
			Strafe.setState(true);
			mc.timer.timerSpeed = 1.11
			if (mc.thePlayer.onGround) {
				mc.thePlayer.jump();
				mc.timer.timerSpeed = 1.11;
        } 
   } else {
			Strafe.setState(false);
			mc.thePlayer.motionX = 0.0;
			mc.thePlayer.motionZ = 0.0;
			mc.timer.timerSpeed = 1.0;
		}
}

// TestSpeed2
if (settings.speed.get() && settings.speedmode.get().toLowerCase() === "testspeed2") {
if (mc.thePlayer.onGround) {
            mc.gameSettings.keyBindJump.pressed = false;
            mc.thePlayer.jump();
        }
        if (!mc.thePlayer.onGround && mc.thePlayer.fallDistance <= 0.1) {
            mc.thePlayer.speedInAir = 0.02;
            mc.timer.timerSpeed = 1.5;
        }
        if (mc.thePlayer.fallDistance > 0.1 && mc.thePlayer.fallDistance < 1.3) {
            mc.thePlayer.speedInAir = 0.0205;
            mc.timer.timerSpeed = 0.7;
        }
        if (mc.thePlayer.fallDistance >= 1.3) {
            mc.timer.timerSpeed = 1;
            mc.thePlayer.speedInAir = 0.02;
        }
    }

// TestSpeed
if (settings.speed.get() && settings.speedmode.get().toLowerCase() === "testspeed") {
if(mc.thePlayer.onGround) mc.timer.timerSpeed =1.0;
		if(mc.thePlayer.onGround && MovementUtils.isMoving()) {
			mc.thePlayer.jump();
			mc.timer.timerSpeed =1.0;
			mc.thePlayer.motionY = 0.419973;
		};
		if(mc.thePlayer.motionY>0 && !mc.thePlayer.onGround) {
			mc.thePlayer.motionY -= 0.0007991;
			mc.thePlayer.jumpMovementFactor=0.0201465;
			mc.timer.timerSpeed =1.15;
		}else{
			mc.thePlayer.motionY -= 0.00074775;
			mc.thePlayer.jumpMovementFactor=0.0201519;
			mc.timer.timerSpeed =0.80;
		};
		if(mc.thePlayer.fallDistance>2) mc.timer.timerSpeed =1.0;
		if(!mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0,0.201,0).expand(0,0,0)).isEmpty()) {
			if(mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0,0.199,0).expand(0,0,0)).isEmpty()) {
				if(mc.thePlayer.onGround) mc.timer.timerSpeed = 2;
			}
		}
	}

// SmoothCamera
if (settings.smoothcamera.get()) {
mc.gameSettings.smoothCamera = true;
	}else{
mc.gameSettings.smoothCamera = false;
}

// Heartbeat   
var ticks = 0;
if (settings.Heartbeat.get()) {
mc.gameSettings.fovSetting = settings.Heartbeatset.get();
}else{
mc.gameSettings.fovSetting = 90;
}

//MotionGround
if (settings.motionground.get()) {
mc.thePlayer.onGround = settings.motiongroundset.get(); 
        mc.thePlayer.motionY = 0;
}

// BuildHand
if (settings.buildHand.get()) {
        mc.rightClickDelayTimer = 4;
		var itemStack = mc.thePlayer.inventory.getCurrentItem();
		var blockPos = mc.objectMouseOver.getBlockPos();
		var placeSide = mc.objectMouseOver.sideHit.getOpposite();
		var hitVec = mc.objectMouseOver.hitVec;
		if (mc.theWorld.getBlockState(blockPos).getBlock().getMaterial() != Material.air) {
			while (true) {
				if (!isBlockInReach(mc.thePlayer, blockPos)) {
					break;
				};
				if (mc.playerController.onPlayerRightClick(mc.thePlayer, mc.theWorld, itemStack, blockPos, placeSide, hitVec)) {
					mc.thePlayer.swingItem();
					break;
				};
				blockPos = blockPos.add(placeSide.getDirectionVec());
			};
		};
	};
        // Lock Rotation
        if (settings.rotations.get() && settings.keepRotation.get() && lockRotation != null) {
            RotationUtils.setTargetRotation(lockRotation);
        }
        // Place block
        if (settings.placeMode.get().toLowerCase() === eventState.getStateName().toLowerCase()) {
            place();
        }
        // Update and search for new block
        if (eventState === EventState.PRE) {
            update();
        }
        // Reset placeable delay
        if (targetPlace == null && settings.placeableDelay.get()) {
            delayTimer.reset();
        }
    }

    function update() {
        var isHeldItemBlock = mc.thePlayer.getHeldItem() != null && mc.thePlayer.getHeldItem().getItem() instanceof ItemBlock;
        if (settings.autoBlock.get() ? InventoryUtils.findAutoBlockBlock() === -1 && !isHeldItemBlock : !isHeldItemBlock) {
            return;
        }
        findBlock(settings.mode.get().toLowerCase() === "expand");

//BindTower
if (settings.towermode.get().toLowerCase() === "bindtower") {
if (mc.gameSettings.keyBindJump.isKeyDown() && !mc.gameSettings.keyBindLeft.isKeyDown() && !mc.gameSettings.keyBindRight.isKeyDown() && !mc.gameSettings.keyBindForward.isKeyDown() && !mc.gameSettings.keyBindBack.isKeyDown()) {
			    mc.thePlayer.motionX = 0;
                mc.thePlayer.motionZ = 0;
                mc.thePlayer.jumpMovementFactor = 0;
				mc.thePlayer.onGround = false;
				towerModule.setState(true)
				scaffoldModule.setState(false)
}else{
			    towerModule.setState(false)
				scaffoldModule.setState(true)
		}
	}
    }

    function findBlock(expand) {
        var blockPosition = shouldGoDown ?
            (mc.thePlayer.posY === parseInt(mc.thePlayer.posY) + 0.5 ?
                new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 0.6, mc.thePlayer.posZ) :
                new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 0.6, mc.thePlayer.posZ).down()) :
            (mc.thePlayer.posY === parseInt(mc.thePlayer.posY) + 0.5 ?
                new BlockPos(mc.thePlayer) :
                new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ).down());

        if (!expand && (!BlockUtils.isReplaceable(blockPosition) || search(blockPosition, !shouldGoDown))) {
            return;
        }
        if (expand) {
            for (var i = 0; i < settings.expandLength.get(); i++) {
                if (search(blockPosition.add(
                    Integer.valueOf(mc.thePlayer.getHorizontalFacing() === EnumFacing.WEST ? -i : mc.thePlayer.getHorizontalFacing() === EnumFacing.EAST ? i : 0).intValue(),
                    Integer.valueOf(0).intValue(),
                    Integer.valueOf(mc.thePlayer.getHorizontalFacing() === EnumFacing.NORTH ? -i : mc.thePlayer.getHorizontalFacing() === EnumFacing.SOUTH ? i : 0).intValue()
                ), false)) {
                    return;
                }
            }
        } else if (settings.search.get()) {
            for (var x = -1; x <= 1; x++) {
                for (var z = -1; z <= 1; z++) {
                    if (search(blockPosition.add(Integer.valueOf(x).intValue(), Integer.valueOf(0).intValue(), Integer.valueOf(z).intValue()), !shouldGoDown)) {
                        return;
                    }
                }
            }
        }
    }

    function place() {
        if (targetPlace == null) {
            if (settings.placeableDelay.get()) {
                delayTimer.reset();
            }
            return;
        }

        if (!delayTimer.hasTimePassed(delay) || (settings.sameY.get() && launchY - 1 !== parseInt(targetPlace.getVec3().yCoord))) {
            return;
        }

        var blockSlot = -1;
        var itemStack = mc.thePlayer.getHeldItem();

        if (mc.thePlayer.getHeldItem() == null || !(mc.thePlayer.getHeldItem().getItem() instanceof ItemBlock) || mc.thePlayer.getHeldItem().stackSize <= 0) {
            if (!settings.autoBlock.get()) {
                return;
            }
            blockSlot = InventoryUtils.findAutoBlockBlock();

            if (blockSlot === -1) {
                return;
            }
            mc.getNetHandler().addToSendQueue(new C09PacketHeldItemChange(blockSlot - 36));
            itemStack = mc.thePlayer.inventoryContainer.getSlot(blockSlot).getStack();
        }


        if (mc.playerController.onPlayerRightClick(mc.thePlayer, mc.theWorld, itemStack, targetPlace.getBlockPos(), targetPlace.getEnumFacing(), targetPlace.getVec3())) {
            delayTimer.reset();
            delay = TimeUtils.randomDelay(settings.minDelay.get(), settings.maxDelay.get());

            if (mc.thePlayer.onGround) {
                var modifier = settings.speedModifier.get();

                mc.thePlayer.motionX *= modifier;
                mc.thePlayer.motionZ *= modifier;
            }

            switch (settings.swing.get()) {
				case "Normal":
				mc.thePlayer.swingItem();
				break;
				case "OffPacket":
                mc.getNetHandler().addToSendQueue(new C0APacketAnimation());
				break;
				case "Off":
				break;	
            }
        }

        if (!settings.stayAutoBlock.get() && blockSlot >= 0) {
            mc.getNetHandler().addToSendQueue(new C09PacketHeldItemChange(mc.thePlayer.inventory.currentItem));
        }
        // Reset
        targetPlace = null;
    }

    this.onDisable = function () {
        if (mc.thePlayer == null) {
            return;
        }

        if (!GameSettings.isKeyDown(mc.gameSettings.keyBindSneak)) {
            mc.gameSettings.keyBindSneak.pressed = false;

            if (eagleSneaking) {
                mc.getNetHandler().addToSendQueue(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.STOP_SNEAKING));
            }
        }

        if (!GameSettings.isKeyDown(mc.gameSettings.keyBindRight)) {
            mc.gameSettings.keyBindRight.pressed = false;
        }
        if (!GameSettings.isKeyDown(mc.gameSettings.keyBindLeft)) {
            mc.gameSettings.keyBindLeft.pressed = false;
        }
        lockRotation = null;
        mc.timer.timerSpeed = 1;
        shouldGoDown = false;

        if (slot !== mc.thePlayer.inventory.currentItem && settings.DisableHeldItemChange.get()) {
            mc.getNetHandler().addToSendQueue(new C09PacketHeldItemChange(mc.thePlayer.inventory.currentItem));
        }
		
		// Autowalk_False
		autowalk.setState(false)
		mc.gameSettings.keyBindForward.pressed = false;
		
		// BodyReverser_False
		mc.gameSettings.keyBindBack.pressed = false;
    }

    this.onMove = function (event) {
        if (!settings.safeWalk.get() || shouldGoDown) {
            return;
        }
        if (settings.airSafe.get() || mc.thePlayer.onGround) {
            event.setSafeWalk(!isAboveGround());
        }
    }
	
	function isAboveGround() {
    for (i = 0, bp = new BlockPos(mc.thePlayer); i++ < settings.maxfalldistance.get();) if (!mc.theWorld.isAirBlock(bp.down(i))) return true
	}

    this.onRender2D = function (event) {
		// SpeedMonitor_Font
		if (settings.speedmonitor.get()) {
		Fonts.minecraftFont.drawString(speedStr,(mcWidth/2)-20,(mcHeight/2)+30,White);
		}
			
        if (settings.counterDisplay.get()) {
            GlStateManager.pushMatrix();

            var blockOverlay = moduleManager.getModule("BlockOverlay");
            if (blockOverlay.getState() && blockOverlay.getInfoValue().get() && blockOverlay.getCurrentBlock() != null) {
                GlStateManager.translate(0, 15, 0);
            }
            var info = "Blocks: §7" + getBlocksAmount();
            var scaledResolution = new ScaledResolution(mc);

            RenderUtils.drawBorderedRect(
                (scaledResolution.getScaledWidth() / 2) - 2,
                (scaledResolution.getScaledHeight() / 2) + 5,
                (scaledResolution.getScaledWidth() / 2) + Fonts.font40.getStringWidth(info) + 2,
                (scaledResolution.getScaledHeight() / 2) + 16, 3, Color.BLACK.getRGB(), Color.BLACK.getRGB());
            GlStateManager.resetColor();
            Fonts.font40.drawString(info, scaledResolution.getScaledWidth() / 2,
                scaledResolution.getScaledHeight() / 2 + 7, Color.WHITE.getRGB());

            GlStateManager.popMatrix();
        }
    }

    this.onRender3D = function (event) {
		if (settings.scaffoldcircle.get()) {
            var rangeValue = add.scaffoldcirclerange().toFixed(2)
            GL11.glPushMatrix();
            GL11.glTranslated(
                mc.thePlayer.lastTickPosX + (mc.thePlayer.posX - mc.thePlayer.lastTickPosX) * mc.timer.renderPartialTicks - mc.getRenderManager().renderPosX,
                mc.thePlayer.lastTickPosY + (mc.thePlayer.posY - mc.thePlayer.lastTickPosY) * mc.timer.renderPartialTicks - mc.getRenderManager().renderPosY,
                mc.thePlayer.lastTickPosZ + (mc.thePlayer.posZ - mc.thePlayer.lastTickPosZ) * mc.timer.renderPartialTicks - mc.getRenderManager().renderPosZ
            )
            GL11.glEnable(GL11.GL_BLEND);
            GL11.glEnable(GL11.GL_LINE_SMOOTH);
            GL11.glDisable(GL11.GL_TEXTURE_2D);
            GL11.glDisable(GL11.GL_DEPTH_TEST);
            GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA);
            
            GL11.glLineWidth(1);
            RenderUtils.glColor(new Color(add.scaffoldcircler(), add.scaffoldcircleg(), add.scaffoldcircleb(), add.scaffoldcircleal()));
            GL11.glRotatef(add.scaffoldcircleset1(), 1, add.scaffoldcircleset2(), add.scaffoldcircleset3());
            GL11.glBegin(GL11.GL_LINE_STRIP);
    
            for (i = 0; i <= add.scaffoldcircleset4(); i += 60) {
                GL11.glVertex2f(Math.cos(i * Math.PI / add.scaffoldcircleset5()) * rangeValue, (Math.sin(i * Math.PI / add.scaffoldcircleset6()) * rangeValue));
            }
    
            GL11.glEnd();
    
            GL11.glDisable(GL11.GL_BLEND);
            GL11.glEnable(GL11.GL_TEXTURE_2D);
            GL11.glEnable(GL11.GL_DEPTH_TEST);
            GL11.glDisable(GL11.GL_LINE_SMOOTH);
    
            GL11.glPopMatrix();
        }
		
        if (!settings.mark.get()) {
            return;
        }
        for (var i = 0; i < (settings.mode.get().toLowerCase() === "expand" ? settings.expandLength.get() + 1 : 2); i++) {
            var blockPos = new BlockPos(mc.thePlayer.posX + (mc.thePlayer.getHorizontalFacing() === EnumFacing.WEST ? -i : mc.thePlayer.getHorizontalFacing() === EnumFacing.EAST ? i : 0), mc.thePlayer.posY - (mc.thePlayer.posY === parseInt(mc.thePlayer.posY) + 0.5 ? 0 : 1.0) - (shouldGoDown ? 1 : 0), mc.thePlayer.posZ + (mc.thePlayer.getHorizontalFacing() === EnumFacing.NORTH ? -i : mc.thePlayer.getHorizontalFacing() === EnumFacing.SOUTH ? i : 0));
            var placeInfo = PlaceInfo.get(blockPos);

            if (BlockUtils.isReplaceable(blockPos) && placeInfo != null) {
                RenderUtils.drawBlockBox(blockPos, new Color(add.markcolorr(),add.markcolorg(),add.markcolorb(), add.markalpha()), false);
                break;
            }
        }
    }

    function search(blockPosition, checks) {
        if (!BlockUtils.isReplaceable(blockPosition)) {
            return false;
        }
        var eyesPos = new Vec3(mc.thePlayer.posX, mc.thePlayer.getEntityBoundingBox().minY + mc.thePlayer.getEyeHeight(), mc.thePlayer.posZ);

        var placeRotation = null;

        var values = EnumFacing.values();
        for (var i = 0; i < values.length; ++i) {
            var side = values[i];
            var neighbor = blockPosition.offset(side);

            if (!BlockUtils.canBeClicked(neighbor)) {
                continue;
            }
            var dirVec = new Vec3(side.getDirectionVec());

            for (var xSearch = 0.1; xSearch < 0.9; xSearch += 0.1) {
                for (var ySearch = 0.1; ySearch < 0.9; ySearch += 0.1) {
                    for (var zSearch = 0.1; zSearch < 0.9; zSearch += 0.1) {
                        var posVec = (new Vec3(blockPosition)).addVector(xSearch, ySearch, zSearch);
                        var distanceSqPosVec = eyesPos.squareDistanceTo(posVec);
                        var hitVec = posVec.add(new Vec3(dirVec.xCoord * 0.5, dirVec.yCoord * 0.5, dirVec.zCoord * 0.5));

                        if (checks && (eyesPos.squareDistanceTo(hitVec) > 18 || distanceSqPosVec > eyesPos.squareDistanceTo(posVec.add(dirVec)) || mc.theWorld.rayTraceBlocks(eyesPos, hitVec, false, true, false) != null)) {
                            continue;
                        }
                        // face block
                        var diffX = hitVec.xCoord - eyesPos.xCoord;
                        var diffY = hitVec.yCoord - eyesPos.yCoord;
                        var diffZ = hitVec.zCoord - eyesPos.zCoord;

                        var diffXZ = MathHelper.sqrt_double(diffX * diffX + diffZ * diffZ);

                        var rotation = new Rotation(
                            MathHelper.wrapAngleTo180_float(Math.toDegrees(Math.atan2(diffZ, diffX)) - 90),
                            MathHelper.wrapAngleTo180_float(-Math.toDegrees(Math.atan2(diffY, diffXZ)))
                        );

                        var rotationVector = RotationUtils.getVectorForRotation(rotation);
                        var vector = eyesPos.addVector(rotationVector.xCoord * 4, rotationVector.yCoord * 4, rotationVector.zCoord * 4);
                        var obj = mc.theWorld.rayTraceBlocks(eyesPos, vector, false, false, true);

                        if (!(obj.typeOfHit === MovingObjectPosition.MovingObjectType.BLOCK && obj.getBlockPos().equals(neighbor))) {
                            continue;
                        }
                        if (placeRotation == null || RotationUtils.getRotationDifference(rotation) < RotationUtils.getRotationDifference(placeRotation.getRotation())) {
                            placeRotation = new PlaceRotation(new PlaceInfo(neighbor, side.getOpposite(), hitVec), rotation);
                        }
                    }
                }
            }
        }

        if (placeRotation == null) {
            return false;
        }

        if (settings.rotations.get()) {
            RotationUtils.setTargetRotation(placeRotation.getRotation(), settings.keepLength.get());
            lockRotation = placeRotation.getRotation();
        }
        targetPlace = placeRotation.getPlaceInfo();
        return true;
    }

    function getBlocksAmount() {
        var amount = 0;

        for (var i = 36; i < 45; i++) {
            var itemStack = mc.thePlayer.inventoryContainer.getSlot(i).getStack();

            if (itemStack != null && itemStack.getItem() instanceof ItemBlock) {
                var block = itemStack.getItem().getBlock();
                if (mc.thePlayer.getHeldItem() === itemStack || !InventoryUtils.BLOCK_BLACKLIST.contains(block)) {
                    amount += itemStack.stackSize;
                }
            }
        }

        return amount;
    }

    this.addValues = function (values) {
		for (var i in settings) {
		    values.add(settings[i]);
        }
    }
	
}

function add() {
	// Ticks
	var ticks;
	
	// Buffer
	let buffer = [];
	
	var setting = {
		float: function (name, def, min, max) {
			return value.createFloat(name, def, min, max);
		},
		integer: function (name, def, min, max) {
			return value.createInteger(name, def, min, max);
		},
		boolean: function (name, def) {
			return value.createBoolean(name, def);
		},
		list: function (name, values, def) {
			return value.createList(name, values, def);
		}
	};
		var settings = {
		markcolorr: setting.integer("MarkColorR", 0, 0, 255),
        markcolorg: setting.integer("MarkColorG", 0, 0, 255),
        markcolorb: setting.integer("MarkColorB", 0, 0, 255),
        markalpha: setting.integer("MarkAlpha", 0, 0, 255),
		scaffoldcirclerange: setting.float("ScaffoldCircleRange", 1, 0, 10),
		scaffoldcircler: setting.integer("ScaffoldCircleRed", 90, 0, 255),
		scaffoldcircleg: setting.integer("ScaffoldCircleGreen", 90, 0, 255),
		scaffoldcircleb: setting.integer("ScaffoldCircleBlue", 90, 0, 255),
		scaffoldcircleal: setting.integer("ScaffoldCircleAlpha", 90, 0, 255),
		scaffoldcircleset1: setting.integer("ScaffoldCircleSet1", 90, 0, 2160),
		scaffoldcircleset2: setting.integer("ScaffoldCircleSet2", 0, 0, 2160),
		scaffoldcircleset3: setting.integer("ScaffoldCircleSet3", 0, 0, 2160),
		scaffoldcircleset4: setting.integer("ScaffoldCircleSet4", 360, 0, 4320),
		scaffoldcircleset5: setting.integer("ScaffoldCircleSet5", 180, 0, 2160),
		scaffoldcircleset6: setting.integer("ScaffoldCircleSet6", 180, 0, 2160),
		rotationYaw: setting.boolean("RotationYaw", false),
        rotationYawset: setting.integer("RotationYawSet", 0, -90, 90),
		debug: setting.boolean("DeBug", false),
		mode: setting.list("DeBugCpsMode", ["Swing", "AttackEvent", "AttackPacket"], "Swing"),
        multiplier: setting.float("DeBugCpsMultiplier", 0, 0, 2, {
            onChanged: function (oldValue, newValue) {
                const multiplier = settings.multiplier;
                multiplier.set(Math.round(multiplier.get() * 2) / 2);
            }
        }),
		title: setting.boolean("Title", false),
		resetH: setting.boolean("resetH", false),
		resetY: setting.boolean("resetY", false),
		strafing: setting.boolean("strafing", false),
		jumpY: setting.float("jumpY", 0.42, 0, 1),
		vClipJumpY: setting.float("vClipJumpY", 0, 0, 1),
		jumpHType: setting.list("jumpHType", ["Add", "Set", "Times"], "Add"),
		jumpH: setting.float("jumpH", 0.2, -0.5, 5),
		jumpHClip: setting.float("jumpHClip", 0, -0.5, 5),
		upYType: setting.list("upYType", ["Add", "Set", "Times"], "Add"),
		upY: setting.float("upY", 0, -5, 5),
		upHType: setting.list("upHType", ["Add", "Set", "Times"], "Add"),
		upH: setting.float("upH",0 , -0.5, 5),
		upTimer: setting.float("upTimer", 1, 0.1, 10),
		upAirSpeed: setting.float("upAirSpeed", 0.02, -0.5, 5),
		downYType: setting.list("downYType", ["Add", "Set", "Times"], "Add"),
		downY: setting.float("downY", 0, -5, 5),
		downHType: setting.list("downHType", ["Add", "Set", "Times"], "Add"),
		downH: setting.float("downH", 0, -0.5, 5),
		downTimer: setting.float("downTimer", 1, 0.1, 10),
		downAirSpeed: setting.float("downAirSpeed", 0.02, -0.5, 5),
		beforeYType: setting.list("beforeYType", ["Add", "Set", "Times"], "Add"),
		beforeY: setting.float("beforeY", 0, -5, 5),
		beforeHType: setting.list("beforeHType", ["Add", "Set", "Times"], "Add"),
		beforeH: setting.float("beforeH",0 , -0.5, 5),
		beforeTimer: setting.float("beforeTimer", 1, 0.1, 10),
		beforeAirSpeed: setting.float("beforeAirSpeed", 0.02, -0.5, 5),
		ticksAction: setting.integer("ticksAction", 0, 0, 20),
		whenYType: setting.list("whenYType", ["Add", "Set", "Times"], "Add"),
		whenY: setting.float("whenY", 0, -5, 5),
		whenHType: setting.list("whenHType", ["Add", "Set", "Times"], "Add"),
		whenH: setting.float("whenH",0 , -0.5, 5),
		whenTimer: setting.float("whenTimer", 1, 0.1, 10),
		whenAirSpeed: setting.float("whenAirSpeed", 0.02, -0.5, 5),
		afterYType: setting.list("afterYType", ["Add", "Set", "Times"], "Add"),
		afterY: setting.float("afterY", 0, -5, 5),
		afterHType: setting.list("afterHType", ["Add", "Set", "Times"], "Add"),
		afterH: setting.float("afterH",0 , -0.5, 5),
		afterTimer: setting.float("afterTimer", 1, 0.1, 10),
		afterAirSpeed: setting.float("afterAirSpeed", 0.02, -0.5, 5),
		PacketCustomPayload: setting.boolean("PacketCustomPayload", false),
		PacketPlayerLook: setting.boolean("PacketPlayerLook", false),
		PacketPlayerPosLook: setting.boolean("PacketPlayerPosLook", false),
		PacketPlayerPosition: setting.boolean("PacketPlayerPosition", false),
		PacketSpectate: setting.boolean("PacketSpectate", false),
		Handshake: setting.boolean("Handshake", false),
		S08PacketPlayerPosLook: setting.boolean("S08PacketPlayerPosLook", false),
		C03PacketPlayer: setting.boolean("C03PacketPlayer", false),
		PacketBuffer: setting.boolean("PacketBuffer", false)
    };
    this.getName = function() {
        return "TestScaffoldAdd";
    };
    this.getDescription = function() {
        return "TestScaffoldAdd";
    };
    this.getCategory = function() {
        return "Fun";
	};
	this.onEnable = function() {
		 ticks = 0;
	}
	this.onUpdate = function() {
		 if(TestScaffold.links1() && TestScaffold.links2()){
				if ((mc.gameSettings.keyBindForward.isKeyDown() || mc.gameSettings.keyBindLeft.isKeyDown() || mc.gameSettings.keyBindRight.isKeyDown() || mc.gameSettings.keyBindBack.isKeyDown()) && !mc.thePlayer.isSneaking()) {
					mc.thePlayer.setSprinting(true);
					mc.gameSettings.keyBindJump.pressed = false;
          if(settings.strafing.get()){
					Strafe.setState(true);
          }
          if(mc.thePlayer.onGround){
            ticks=0;
            vClip(settings.vClipJumpY.get());
            hClip(settings.jumpHClip.get());
            mc.thePlayer.motionY = settings.jumpY.get();
            mXZ(settings.jumpHType.get(), settings.jumpH.get());
          }else{
            ticks++
            if(mc.thePlayer.motionY>0){
              mc.timer.timerSpeed = settings.upTimer.get();
              mY(settings.upYType.get(), settings.upY.get());
              mXZ(settings.upHType.get(), settings.upH.get());
              airSpeed(settings.upAirSpeed.get());
            }
            if(mc.thePlayer.motionY<0){
              mc.timer.timerSpeed = settings.downTimer.get();
              mY(settings.downYType.get(), settings.downY.get());
              mXZ(settings.downHType.get(), settings.downH.get());
              airSpeed(settings.downAirSpeed.get());
            }
            if(ticks<settings.ticksAction.get()){
              mc.timer.timerSpeed = settings.beforeTimer.get();
              mY(settings.beforeYType.get(), settings.beforeY.get());
              mXZ(settings.beforeHType.get(), settings.beforeH.get());
              airSpeed(settings.beforeAirSpeed.get());
            }
            if(ticks>settings.ticksAction.get()){
              mc.timer.timerSpeed = settings.afterTimer.get();
              mY(settings.afterYType.get(), settings.afterY.get());
              mXZ(settings.afterHType.get(), settings.afterH.get());
              airSpeed(settings.afterAirSpeed.get());
            }
            if(ticks==settings.ticksAction.get()){
              mc.timer.timerSpeed = settings.whenTimer.get();
              mY(settings.whenYType.get(), settings.whenY.get());
              mXZ(settings.whenHType.get(), settings.whenH.get());
              airSpeed(settings.whenAirSpeed.get());
            }
          }
        }else{
          mc.thePlayer.speedInAir = 0.02;
          mc.timer.timerSpeed = 1
          Strafe.setState(false);
			}
		}
		
		//RotationYaw
		if (settings.rotationYaw.get()) {
			RotationUtils.setTargetRotation(new Rotation(mc.thePlayer.rotationYaw,settings.rotationYawset.get()))
		}	

		// Debug
		if (settings.debug.get()) {
			const cps = computeCPS();
			chat.print("§8[§9§lDebug§8] RotationYaw:" + mc.thePlayer.rotationYaw + " | RotationPitch:" + mc.thePlayer.rotationPitch + " | CPS:" +  (cps < 10 ? " " + cps : cps));
		}	
		
		// Title
		if (settings.title.get()) {	
			Display.setTitle('丨TestScaffold | Developer Build Mode丨欢迎使用捏');
				}else{
			Display.setTitle('丨TestScaffold | Developer Build Mode丨你小子还想关我?');			
				}
	}
	
	this.onDisable = function() {
		 mc.thePlayer.speedInAir = 0.02;
      mc.timer.timerSpeed = 1
      Strafe.setState(false);
      if(settings.resetH.get()){
        mc.thePlayer.motionX = 0;
        mc.thePlayer.motionZ = 0;
      }
      if(settings.resetY.get() && mc.thePlayer.motionY > 0){
        mc.thePlayer.motionY = 0;
      }
	}
	
	this.markcolorr = function() {
       return settings.markcolorr.get();
    }
	
	this.markcolorg = function() {
       return settings.markcolorg.get();
    }
	
	this.markcolorb = function() {
       return settings.markcolorb.get();
    }
	
	this.markalpha = function() {
       return settings.markalpha.get();
    }
	
	this.scaffoldcirclerange = function() {
       return settings.scaffoldcirclerange.get();
    }
	
	this.scaffoldcircler = function() {
      return settings.scaffoldcircler.get();
    }
	
	this.scaffoldcircleg = function() {
      return settings.scaffoldcircleg.get();
    }
	
	this.scaffoldcircleb = function() {
      return settings.scaffoldcircleb.get();
    }
	
	this.scaffoldcircleal = function() {
      return settings.scaffoldcircleal.get();
    }
	
	this.scaffoldcircleset1 = function() {
      return settings.scaffoldcircleset1.get();
    }
	
	this.scaffoldcircleset2 = function() {
      return settings.scaffoldcircleset2.get();
    }
	
	this.scaffoldcircleset3 = function() {
      return settings.scaffoldcircleset3.get();
    }
	
	this.scaffoldcircleset4 = function() {
       return settings.scaffoldcircleset4.get();
    }
	
	this.scaffoldcircleset5 = function() {
      return settings.scaffoldcircleset5.get();
    }
	
	this.scaffoldcircleset6 = function() {
       return settings.scaffoldcircleset6.get();
    }
	
 Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
  };
   
  Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
  };
  
this.onPacket = function (event) {
		if(TestScaffold.links3()){
         packet = event.getPacket()
        if ((packet instanceof C17PacketCustomPayload && settings.PacketCustomPayload.get()) || (packet instanceof C03PacketPlayer.C05PacketPlayerLook && settings.PacketPlayerLook.get()) || (packet instanceof C03PacketPlayer.C06PacketPlayerPosLook && settings.PacketPlayerPosLook.get()) || (packet instanceof C03PacketPlayer.C04PacketPlayerPosition && settings.PacketPlayerPosition.get()) || (packet instanceof C18PacketSpectate && settings.PacketSpectate.get()) || (packet instanceof C00Handshake && settings.Handshake.get()) || (packet instanceof C03PacketPlayer && settings.C03PacketPlayer.get()) || (packet instanceof settings.S08PacketPlayerPosLook.get()) || (packet instanceof settings.PacketBuffer.get())) {
          event.cancelEvent()
				}
		}	
}

// Cps
this.onAttack = function (event) {
        if (settings.mode.get() === "AttackEvent") {
            buffer.push(System.currentTimeMillis());
        }
    }
	
this.onPacket = function (event) {
        const packet = event.getPacket();
        if (packet instanceof C0APacketAnimation && settings.mode.get() === "Swing") {
            buffer.push(System.currentTimeMillis());
        } else if (packet instanceof C02PacketUseEntity && packet.getAction() === C02PacketUseEntity.Action.ATTACK && settings.mode.get() === "AttackPacket") {
            buffer.push(System.currentTimeMillis());
        }
    }

function computeCPS() {
        const newBuffer = [];
        const minTimeMillis = System.currentTimeMillis() - 1000;
        for (let i = 0; i < buffer.length; ++i) {
            const timeMillis = buffer[i];
            if (timeMillis > minTimeMillis) {
                newBuffer.push(timeMillis);
            }
        }
        buffer = newBuffer;
        return Math.round(buffer.length * (settings.multiplier.get() === 0 ? mc.isIntegratedServerRunning() && settings.mode.get() !== "AttackEvent" ? 0.5 : 1 : settings.multiplier.get()));
    }	

function vClip(offset) {
    mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + offset, mc.thePlayer.posZ); 
}

function hClip(offset) {
    var playerYaw = Math.radians(mc.thePlayer.rotationYaw);
    mc.thePlayer.setPosition(mc.thePlayer.posX - (Math.sin(playerYaw) * offset), mc.thePlayer.posY, mc.thePlayer.posZ + (Math.cos(playerYaw) * offset));
}

function airSpeed(offset) {
    mc.thePlayer.speedInAir = offset;
}

function speedMultiply(offset) {
  mc.thePlayer.motionX *= offset;
  mc.thePlayer.motionZ *= offset;
}

function timer(offset){
  mc.timer.timerSpeed = offset;
}

function mY(type, offset){
        if(type.equals("Set")){
          mc.thePlayer.motionY = offset;
        }
        if(type.equals("Times")){
          mc.thePlayer.motionY *= offset;
        }
        if(type.equals("Add")){
          mc.thePlayer.motionY += offset;
        }
}

function mXZ(type, offset){
  var playerYaw = Math.radians(mc.thePlayer.rotationYaw);
        if(type.equals("Times")){
          mc.thePlayer.motionX *= offset;
          mc.thePlayer.motionZ *= offset;
        }
        if(type.equals("Add")){
          mc.thePlayer.motionX += Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset;
          mc.thePlayer.motionZ += Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset;
        }
        if(type.equals("Set")){
          mc.thePlayer.motionX = Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset;
          mc.thePlayer.motionZ = Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset;
        }
}
	
this.addValues = function (values) {
		for (var i in settings) {
		    values.add(settings[i]);
			}
		}		
	}
	
function add2() {
// CustomMove	
var ticks;
var y;
var once;	
	
// PacketDebug	
var tickCount = 0;
var clientPacketCount = 0;
var serverPacketCount = 0;
var maxClientPacketCount = 0;
var maxServerPacketCount = 0;	
	
// InvBlock	
var enventcanceler = false;

// TellyBridge	
var k = false;
var ti = 0;
var tt = false;
var tit = 1;
var LiquidBounce = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var mk = true;
var Yals = null;
var Yb = null;
var ScaffoldOn = false;

	// Nerbles
	var ticks = 0;
	var inCombat = false
	var combatticks;
	var hasSpeed;
	var doTimerBoost;
	var blocksmcTimerMode;

// Keystrokes
function getScaledWidth() {
    var scaledWidth = new ScaledResolution(mc).getScaledWidth();

    return scaledWidth;
}

function getScaledHeight() {
    var scaledHeight = new ScaledResolution(mc).getScaledHeight();

    return scaledHeight;
}

function drawRect(paramXStart, paramYStart, paramXEnd, paramYEnd, color) {
    var alpha = (color >> 24 & 0xFF) / 255;
    var red = (color >> 16 & 0xFF) / 255;
    var green = (color >> 8 & 0xFF) / 255;
    var blue = (color & 0xFF) / 255;

    GL11.glEnable(GL11.GL_BLEND);
    GL11.glDisable(GL11.GL_TEXTURE_2D);
    GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA);
    GL11.glEnable(GL11.GL_LINE_SMOOTH);

    GL11.glPushMatrix();
    GL11.glColor4f(red, green, blue, alpha);
    GL11.glBegin(GL11.GL_TRIANGLE_FAN);
    GL11.glVertex2d(paramXEnd, paramYStart);
    GL11.glVertex2d(paramXStart, paramYStart);
    GL11.glVertex2d(paramXStart, paramYEnd);
    GL11.glVertex2d(paramXEnd, paramYEnd);

    GL11.glEnd();
    GL11.glPopMatrix();

    GL11.glEnable(GL11.GL_TEXTURE_2D);
    GL11.glDisable(GL11.GL_BLEND);
    GL11.glDisable(GL11.GL_LINE_SMOOTH);

    GL11.glColor4f(1, 1, 1, 1);
}

function DrawKey(Key_X, Key_Y, Length_X, Length_Y, Text , Text_X, Text_Y, Color,BGAlpha,i) {
		drawRect(Key_X+Length_X, Key_Y+Length_Y, Key_X-Length_X, Key_Y-Length_Y, '0x'+ BGAlpha +'000000')
		mc.fontRendererObj.drawStringWithShadow(Text, Text_X, Text_Y, '0x' + Color)
		drawRect(Key_X + i, Key_Y + i*Length_Y/Length_X, Key_X - i, Key_Y - i*Length_Y/Length_X, 0x6Ef7f7f7)
}

function DrawBorder(PosX, PosY, Length_X, Length_Y, thickness, color) {
	drawRect(PosX - Length_X - thickness,PosY - Length_Y - thickness,PosX + Length_X + thickness,PosY - Length_Y,color)
	drawRect(PosX + Length_X + thickness,PosY + Length_Y + thickness,PosX - Length_X - thickness,PosY + Length_Y,color)
	drawRect(PosX - Length_X - thickness,PosY - Length_Y,PosX - Length_X,PosY + Length_Y , color)
	drawRect(PosX + Length_X + thickness,PosY + Length_Y,PosX + Length_X,PosY - Length_Y , color)
}

	var setting = {
		float: function (name, def, min, max) {
			return value.createFloat(name, def, min, max);
		},
		integer: function (name, def, min, max) {
			return value.createInteger(name, def, min, max);
		},
		boolean: function (name, def) {
			return value.createBoolean(name, def);
		},
		list: function (name, values, def) {
			return value.createList(name, values, def);
		}
	};

	var settings = {
		TellyBridge: setting.boolean("TellyBridge", false),
		RotationSprint: setting.boolean("RotationSprint", false),
		turnspeed: setting.integer("SprintTurnSpeed", 180, 1, 180),
		turnspeedset1: setting.integer("SprintTurnSpeedSet", 180, 1, 180),
		turnspeedset2: setting.integer("SprintTurnSpeedSet2", 30, 1, 180),
		Keystrokes: setting.boolean("Keystrokes", false),
		Border: setting.boolean("Border", true),
		Rainbow: setting.boolean("Rainbow", false),
		Motion: setting.boolean("Motion", true),
		Motion_Speed: setting.integer("Motion_Speed", 7, 1, 10),
		Color_R: setting.integer("Color_R", 0, 0, 255),
		Color_G: setting.integer("Color_G", 255, 0, 255),
		Color_B: setting.integer("Color_B", 255, 0, 255),
		Pos_X: setting.integer("Pos_X", 40, 0, getScaledWidth()),
		Pos_Y: setting.integer("Pos_Y", 120, 0, getScaledHeight()),
		Scale: setting.float("Scale", 1, 0.8, 3),
		BG_Alpha: setting.integer("BG_Alpha", 150, 0, 255),
		Rainbow_Speed: setting.integer("Rainbow_Speed", 20, 10, 500),
		timerBoost: setting.boolean("TimerBoost", false),
		matrixStrafe: setting.boolean("MatrixHop-CombatStrafe", false),
        bmcTimerMode: setting.list("BlocksMCTimerMode",["Infinite", "Fast", "Weird"], "Infinite"),
		VulcanGlide: setting.boolean("VulcanGlide", false),
		panic: setting.boolean("Panic", false),
		PacketDebug: setting.boolean("PacketDebug", false),
		debugClientPacket: setting.boolean("DebugClientPacket", false),
		debugServerPacket: setting.boolean("DebugServerPacket", false),
		invBlock: setting.boolean("InvBlock", false),
		MLGScaffold: setting.boolean("MLGScaffold", false),
		NoXZMotion: setting.boolean("NoXZMotion", false),
		NoXZMotionSet: setting.list("NoXZMotionSet", ["Off", "MotionZero", "NoKeyBoard", "BothAlgorism"], "Off"),
		CustomMove: setting.boolean("CustomMove", false),
		CustomMoveWater: setting.boolean("CustomMoveWater", false),
		spoofGround: setting.boolean("spoofGround", false),
		bTYType: setting.list("bTYType", ["Add", "Set", "Times"], "Add"),
		bTY: setting.float("bTY", 0, -5, 5),
		bTHType: setting.list("bTHType", ["Add", "Set", "Times"], "Add"),
		bTH: setting.float("bTH",0 , -0.5, 5),
		bTTimer: setting.float("bTTimer", 1, 0.1, 10),
		ticksAction: setting.integer("ticksAction", 0, 0, 20),
		wTYType: setting.list("wTYType", ["Add", "Set", "Times"], "Add"),
		wTY: setting.float("wTY", 0, -5, 5),
		wTHType: setting.list("wTHType", ["Add", "Set", "Times"], "Add"),
		wTH: setting.float("wTH",0 , -0.5, 5),
		wTTimer: setting.float("wTTimer", 1, 0.1, 10),
		aTYType: setting.list("aTYType", ["Add", "Set", "Times"], "Add"),
		aTY: setting.float("aTY", 0, -5, 5),
		aTHType: setting.list("aTHType", ["Add", "Set", "Times"], "Add"),
		aTH: setting.float("aTH",0 , -0.5, 5),
		aTTimer: setting.float("aTTimer", 1, 0.1, 10),
		bYYType: setting.list("bYYType", ["Add", "Set", "Times"], "Add"),
		bYY: setting.float("bYY", 0, -5, 5),
		bYHType: setting.list("bYHType", ["Add", "Set", "Times"], "Add"),
		bYH: setting.float("bYH",0 , -0.5, 5),
		bYTimer: setting.float("bYTimer", 1, 0.1, 10),
		posYAction: setting.float("posYAction", 0, 0, 2),
		aYYType: setting.list("aYYType", ["Add", "Set", "Times"], "Add"),
		aYY: setting.float("aYY", 0, -5, 5),
		aYHType: setting.list("aYHType", ["Add", "Set", "Times"], "Add"),
		aYH: setting.float("aYH",0 , -0.5, 5),
		aYTimer: setting.float("aYTimer", 1, 0.1, 10),
		FixBlinkAndFreecam: setting.boolean("FixBlinkAndFreecam BadPackets 3Y", false),
		FixPacketPlayer: setting.boolean("FixC03s BadPackets 3A", false),
		FixItemSwap: setting.boolean("FixItemSwap Scaffold 14D", false),
		FixPingSpoof: setting.boolean("FixPingSpoof BadPackets 3Q", false),
		FixGround: setting.boolean("FixGround Fly 4I", false),
		FixIdleFly: setting.boolean("FixIdleFly Fly 4C", false)
		 };

var LMB_i = 0
var RMB_i = 0
var W_i = 0
var A_i = 0
var S_i = 0
var D_i = 0
var Space_i = 0
var Color = '00ffff'		 
var MotionSpeed = 13 - settings.Motion_Speed.get()
var BGAlpha = ('0' + settings.BG_Alpha.get().toString(16)).slice(-2)
var Border_Color
var r
var g
var b
var c = 0
var PosX = settings.Pos_X.get()
var PosY = settings.Pos_Y.get()
var scale = settings.Scale.get()
var Length_WASD = 10*scale
var Length_Space = 32.8*scale
var Length_MB = 16*scale
var Height = 10*scale
var Height_WASD = Height
var Height_Space = 7*Height/10
var Height_MB = 7*Height/10
var LMB_X = PosX - 17.2*Length_MB/16
var LMB_Y = PosY + Height*1.95
var RMB_X = PosX + 17.2*Length_MB/16
var RMB_Y = PosY + Height*1.95
var W_X = PosX
var W_Y = PosY - Height*2.24
var A_X = PosX - 22.4*Length_WASD/10
var A_Y = PosY
var S_X = PosX
var S_Y = PosY
var D_X = PosX + 22.4*Length_WASD/10
var D_Y = PosY
var Space_X = PosX
var Space_Y = PosY + Height*3.6
	 
    this.getName = function() {
        return "TestScaffoldAdd2";
    };
	
    this.getDescription = function() {
        return "TestScaffoldAdd";
    };
	
    this.getCategory = function() {
        return "Fun";
	};
	
	this.onEnable = function() {
		if (settings.TellyBridge.get()) {
		LiquidBounce.commandManager.executeCommands(".FastPlace Speed 1");
		LiquidBounce.commandManager.executeCommands(".t Parkour on");
		LiquidBounce.commandManager.executeCommands(".t FastPlace on");
		}
		inCombat = false
        ticks = 0
		
		// Fix
		this.x = mc.thePlayer.posX;
        this.y = mc.thePlayer.posY;
        this.z = mc.thePlayer.posZ;
        this.jam = 0;
        this.prevSlot = -1;
		this.packetCount = 0;
		
		// Custom
		ticks = 0;
		once = true;
	}
	
	this.onUpdate = function() {
		if (settings.TellyBridge.get()) {
		if (tt) {
			ti += 1;
		}
		
		if (k != true && ti >= 5) {
			mc.thePlayer.rotationPitch = 57.03;
			mc.thePlayer.rotationYaw += 180;
			k = true;
			ti = 0;
			tt = false;
		}
		
		if (k) {
            mc.thePlayer.rotationPitch += 3.2;
				Yb = mc.thePlayer.posY;
			if (mc.thePlayer.onGround) {
				mc.thePlayer.motionX = 0;
				mc.thePlayer.motionZ = 0; 
				mc.thePlayer.rotationYaw -= 180;
				k = false;
				mk = true;
				}
			}
		}
		
		PosX = settings.Pos_X.get()
		PosY = settings.Pos_Y.get()
		scale = settings.Scale.get()
		Length_WASD = 10*scale
		Length_Space = 32.8*scale
		Length_MB = 15.7*scale
		Height = 10*scale
		Height_WASD = Height
		Height_Space = 7*Height/10
		Height_MB = 7*Height/10
		LMB_X = PosX - 17.2*Length_MB/16
		LMB_Y = PosY + Height*1.95
		RMB_X = PosX + 17.2*Length_MB/16
		RMB_Y = PosY + Height*1.95
		W_X = PosX
		W_Y = PosY - Height*2.24
		A_X = PosX - 22.4*Length_WASD/10
		A_Y = PosY
		S_X = PosX
		S_Y = PosY
		D_X = PosX + 22.4*Length_WASD/10
		D_Y = PosY
		Space_X = PosX
		Space_Y = PosY + Height*3.6
		MotionSpeed = 13 - settings.Motion_Speed.get()
		Border_Color = '0x' + 'FF' + Color
		if(mc.gameSettings.keyBindAttack.pressed){if(settings.Motion.get()){if(LMB_i<Length_MB-0.1){LMB_i+=Length_MB/MotionSpeed}else{LMB_i=Length_MB}}else{LMB_i=Length_MB}}else{LMB_i=0}
		if(mc.gameSettings.keyBindUseItem.pressed){if(settings.Motion.get()){if(RMB_i<Length_MB-0.1){RMB_i+=Length_MB/MotionSpeed}else{RMB_i=Length_MB}}else{RMB_i=Length_MB}}else{RMB_i=0}
		if(mc.gameSettings.keyBindForward.pressed){if(settings.Motion.get()){if(W_i<Length_WASD-0.1){W_i+=Length_WASD/MotionSpeed}else{W_i=Length_WASD}}else{W_i=Length_WASD}}else{W_i=0}
		if(mc.gameSettings.keyBindLeft.pressed){if(settings.Motion.get()){if(A_i<Length_WASD-0.1){A_i+=Length_WASD/MotionSpeed}else{A_i=Length_WASD}}else{A_i=Length_WASD}}else{A_i=0}
		if(mc.gameSettings.keyBindBack.pressed){if(settings.Motion.get()){if(S_i<Length_WASD-0.1){S_i+=Length_WASD/MotionSpeed}else{S_i=Length_WASD}}else{S_i=Length_WASD}}else{S_i=0}
		if(mc.gameSettings.keyBindRight.pressed){if(settings.Motion.get()){if(D_i<Length_WASD-0.1){D_i+=Length_WASD/MotionSpeed}else{D_i=Length_WASD}}else{D_i=Length_WASD}}else{D_i=0}
		if(mc.gameSettings.keyBindJump.pressed){if(settings.Motion.get()){if(Space_i<Length_Space-0.1){Space_i+=Length_Space/MotionSpeed}else{Space_i=Length_Space}}else{Space_i=Length_Space}}else{Space_i=0}
		if(settings.Rainbow.get()){
			r = parseInt((Math.sin(c + Math.PI) + 1) * 127.5);
			g = parseInt((Math.sin(c + (Math.PI / 2)) + 1) * 127.5);
			b = parseInt(((Math.sin(c) + 1) * 127.5));
			c = c + settings.Rainbow_Speed.get() / 500;
			Color = ('0' + r.toString(16)).slice(-2)  + ('0' + g.toString(16)).slice(-2)  + ('0' + b.toString(16)).slice(-2)
			if (44 < c){
				c = 0
			}
		}else{
			Color = ('0' + settings.Color_R.get().toString(16)).slice(-2)  + ('0' + settings.Color_G.get().toString(16)).slice(-2)  + ('0' + settings.Color_B.get().toString(16)).slice(-2)
		}
		BGAlpha = ('0' + settings.BG_Alpha.get().toString(16)).slice(-2)
		
		//MoreSpeed
		    if (mc.thePlayer.ticksExisted > combatticks) {
            inCombat = false
        }
        hasSpeed = mc.thePlayer.isPotionActive(1)
        doTimerBoost = settings.timerBoost.get()
        blocksmcTimerMode = settings.bmcTimerMode.get()
		if (TestScaffold.links1()) {
        switch (TestScaffold.links4()) {
            case "MatrixHop":
                if (MovementUtils.isMoving()) {
                    if (mc.thePlayer.onGround) {
                        mc.gameSettings.keyBindJump.pressed = false
                        mc.thePlayer.jump();
                        mc.timer.timerSpeed = 1.0
                        if (!inCombat) MovementUtils.strafe(MovementUtils.getSpeed() + 0.0005)
                    } else {
                        if (settings.matrixStrafe.get() && inCombat == true) {
                            MovementUtils.strafe(0.21)
                        }
                    }
                } else {
                    mc.timer.timerSpeed = 1.0
                    mc.thePlayer.motionX = 0.0
                    mc.thePlayer.motionZ = 0.0
                }
                if (mc.thePlayer.fallDistance > 0 < 1) {
                    if (doTimerBoost) mc.timer.timerSpeed = 1.1
                    mc.thePlayer.motionY -= 0.0034
                }
                if (mc.thePlayer.fallDistance > 1.3) {
                    mc.timer.timerSpeed = 1.0
                }
                if (doTimerBoost && !mc.thePlayer.onGround && !mc.thePlayer.fallDistance >= 0 <= 1) {
                    mc.timer.timerSpeed = 1.0
                } else {
                    mc.timer.timerSpeed = 1.0
                }
                break;
            case "Vulcan":
                if (MovementUtils.isMoving()) {
                    if (mc.thePlayer.onGround) {
                        mc.gameSettings.keyBindJump.pressed = false
                        mc.thePlayer.jump()
                        MovementUtils.strafe(MovementUtils.getSpeed() + 0.00187)
                        mc.timer.timerSpeed = 1.5
                        mc.timer.timerSpeed = 1.0
                    }

                    if (mc.thePlayer.fallDistance > 0) {
                        mc.thePlayer.motionY = -0.275
                        mc.timer.timerSpeed = 1.045
                    }
                } else {
                    mc.timer.timerSpeed = 1.0
                    mc.thePlayer.motionX = 0
                    mc.thePlayer.motionZ = 0
                }
                break;
            case "Ncp":
                if (MovementUtils.isMoving()) {
                    mc.gameSettings.keyBindJump.pressed = false;
                    if (mc.thePlayer.onGround) {
                        mc.thePlayer.jump();
                        mc.timer.timerSpeed = 0.9
                        MovementUtils.strafe(0.48);
                        mc.thePlayer.motionX *= 1.0021
                        mc.thePlayer.motionZ *= 1.0021
                    }
                    if (!mc.thePlayer.onGround) MovementUtils.strafe(MovementUtils.getSpeed() + 0.00125);
                    if (mc.thePlayer.fallDistance > 0) {
                        mc.timer.timerSpeed = 1.445
                        if (mc.thePlayer.fallDistance > 1.2) {
                            mc.timer.timerSpeed = 1.0
                        }
                    }
                }
                break;
            case "Verus":
                if (MovementUtils.isMoving) {
                    MovementUtils.strafe(0.33)
                    if (mc.thePlayer.onGround) {
                        mc.thePlayer.jump();
                        MovementUtils.strafe(0.425)
                    }
                }
                break;
            case "KarhuLow":
                        if (mc.thePlayer.onGround && MovementUtils.isMoving()) {
                            mc.gameSettings.keyBindJump.pressed = false
                            mc.thePlayer.jump()
                            mc.thePlayer.motionY = 0.3888
                        } else if (MovementUtils.isMoving()) {
                            mc.thePlayer.motionX *= 1.0037
                            mc.thePlayer.motionZ *= 1.0037
                            if (mc.thePlayer.fallDistance <= 1) mc.thePlayer.motionY += -0.00499
                        }
                        if (!MovementUtils.isMoving()) {
                            mc.thePlayer.motionX = 0.0
                            mc.thePlayer.motionZ = 0.0
                        }
                break;
            case "BlocksMC":
                if (MovementUtils.isMoving()) {
                    if (hasSpeed) {
                        if (mc.thePlayer.onGround) {
                            mc.gameSettings.keyBindJump.pressed = false
                            mc.thePlayer.jump()
                            MovementUtils.strafe(0.485)
                            mc.timer.timerSpeed = 1.0
                            if (doTimerBoost && blocksmcTimerMode == "Weird") mc.timer.timerSpeed = 0.9

                        } else {
                            MovementUtils.strafe(MovementUtils.getSpeed() + 0.0107)
                            if (mc.thePlayer.fallDistance > 0) {
                                mc.thePlayer.motionX *= 1.013
                                mc.thePlayer.motionZ *= 1.013
                                if (doTimerBoost && blocksmcTimerMode == "Infinite") mc.timer.timerSpeed = 1.1
                                if (doTimerBoost && blocksmcTimerMode == "Fast") mc.timer.timerSpeed = 1.23
                                if (doTimerBoost && blocksmcTimerMode == "Weird") mc.timer.timerSpeed = 1.5
                            }
                        }
                    } else {
                        if (mc.thePlayer.onGround) {
                            mc.gameSettings.keyBindJump.pressed = false
                            mc.thePlayer.jump()
                            MovementUtils.strafe(0.485)
                            mc.timer.timerSpeed = 1.0
                            if (doTimerBoost && blocksmcTimerMode == "Weird") mc.timer.timerSpeed = 0.9
                        } else {
                            if (mc.thePlayer.fallDistance < 1.4) {
                            MovementUtils.strafe(MovementUtils.getSpeed() + 0.0002)
                            } else mc.timer.timerSpeed = 1.0
                            if (mc.thePlayer.fallDistance > 0) {
                                mc.thePlayer.motionX *= 1.009
                                mc.thePlayer.motionZ *= 1.009
                                if (doTimerBoost && blocksmcTimerMode == "Infinite") mc.timer.timerSpeed = 1.1
                                if (doTimerBoost && blocksmcTimerMode == "Fast") mc.timer.timerSpeed = 1.23
                                if (doTimerBoost && blocksmcTimerMode == "Weird") mc.timer.timerSpeed = 1.55
                            }
                        }
                    }
                } else {
                    mc.timer.timerSpeed = 1.0
                    mc.thePlayer.motionX = 0
                    mc.thePlayer.motionZ = 0
                }
                break;
            case "Spartan":
                if (MovementUtils.isMoving()) {
                    if (mc.thePlayer.onGround) {
                        mc.gameSettings.keyBindJump.pressed = false
                        mc.thePlayer.jump()
                        MovementUtils.strafe(0.48)
                    } else {
                        if (mc.thePlayer.fallDistance > 0) {
                            if (mc.thePlayer.fallDistance < 1.1) {
                                mc.timer.timerSpeed = 1.0
                                mc.thePlayer.motionY -= 0.005
                                mc.thePlayer.motionX *= 1.005
                                mc.thePlayer.motionZ *= 1.005
                                MovementUtils.strafe(MovementUtils.getSpeed())
                            }
                        } else {
                            MovementUtils.strafe(MovementUtils.getSpeed())
                            mc.thePlayer.motionX *= 1.004
                            mc.thePlayer.motionZ *= 1.004
                        }
                    }
                } else {
                    mc.timer.timerSpeed = 1.0
                    mc.thePlayer.motionX = 0
                    mc.thePlayer.motionZ = 0
                }
                break;
            case "NoRules":
                if (MovementUtils.isMoving()) {
                    if (mc.thePlayer.fallDistance < 0.5) {
                        if (!mc.gameSettings.keyBindJump.pressed) {
                        MovementUtils.strafe(MovementUtils.getSpeed() + 0.022)
                        if (module.settings.timerBoostValue.get()) mc.timer.timerSpeed = 1.1
                    }
                    } else {
                        mc.timer.timerSpeed = 1.0
                    }
                    if (mc.thePlayer.onGround) {
                        if (mc.gameSettings.keyBindJump.pressed == false) {
                            mc.thePlayer.jump()
                            MovementUtils.strafe(0.66)
                            mc.timer.timerSpeed = 1.0
                        }
                    } else {
                        if (mc.thePlayer.fallDistance < 0.6 && mc.gameSettings.keyBindJump.pressed == false) mc.thePlayer.motionY -= 0.06
                    }
                }
                break;
            case "Dev":
                if (MovementUtils.isMoving()) {
                    if (mc.thePlayer.onGround) {
                        mc.gameSettings.keyBindJump.pressed = false
                        mc.thePlayer.jump()
                        MovementUtils.strafe(0.485)
                        mc.timer.timerSpeed = 1.0
                        mc.thePlayer.motionY *= 0.951

                    } else {
                        MovementUtils.strafe(MovementUtils.getSpeed() + 0.0002)
                        if (mc.thePlayer.fallDistance > 0 < 1) {
                            mc.timer.timerSpeed = 1.07
                        } else if (mc.thePlayer.fallDistance > 1.25) {
							mc.timer.timerSpeed = 1.0
							}
                    }

                } else {
                    mc.thePlayer.motionX = 0.0
                    mc.thePlayer.motionZ = 0.0
                }
                break
			}
		}
		
		// VulcanGlide
		if (!mc.thePlayer.onGround && mc.thePlayer.fallDistance > 0 && settings.VulcanGlide.get()) {
            if (mc.thePlayer.ticksExisted % 2 == 0) {
                mc.thePlayer.motionY = -0.155
                
            } else {
                mc.thePlayer.motionY = -0.1
            }
        }
		
		// Panic
		if (settings.panic.get()) {
		chat.print("If you need to open TestScaffold, please close the panic first");
		commandManager.executeCommand(".panic all");
		}
		
		// NoXZMotion
		if (settings.NoXZMotion.get()) {
		switch (settings.NoXZMotionSet.get()) {
            case "MotionZero":
              mc.thePlayer.motionX = mc.thePlayer.motionZ = 0;
              break;
            case "NoKeyBoard":
              mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindRight.pressed = mc.gameSettings.keyBindBack.pressed = false;
              break;
            case "BothAlgorism":
              mc.gameSettings.keyBindForward.pressed = mc.gameSettings.keyBindLeft.pressed = mc.gameSettings.keyBindRight.pressed = mc.gameSettings.keyBindBack.pressed = false;
              mc.thePlayer.motionX = mc.thePlayer.motionZ = 0;
              break;
			}
		}
		
		//Experimentalishation(InvBlock)
			if (settings.invBlock.get()) {
			if (mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY - 1, mc.thePlayer.posZ)).getBlock() instanceof Furnace) {
				mc.gameSettings.keyBindSneak.pressed = true;
				enventcanceler = true;
				} else {	  
			}
		}
		
		 //Experimentalishation(MLGScaffold)
        if (settings.MLGScaffold.get()) {
				mc.gameSettings.keyBindSneak.pressed = true;
          if (mc.thePlayer.onGround) {
				mc.gameSettings.keyBindJump.pressed = true
			}
		}
		
		// FixPingSpoof
		if (settings.FixPingSpoof.get() && pingSpoofModule.getState()) {
			pingSpoofModule.setState(false);
			chat.print("§8[§c§lPacket§aFixer§8] §c禁用PingSpoof以避免BadPackets被禁止 3Q");
		}
		
				
		// SprintTurespeed
		if (settings.RotationSprint.get()) {	
			limitedRotation = RotationUtils.limitAngleChange(RotationUtils.serverRotation, rotation = new Rotation(MovementUtils.getDirection() * settings.turnspeedset1.get() / Math.PI, mc.thePlayer.rotationPitch), settings.turnspeed.get());
			RotationUtils.setTargetRotation(limitedRotation);
			mc.thePlayer.setSprinting(RotationUtils.getRotationDifference(rotation) < settings.turnspeedset2.get());
		}				
		
		// PacketDebug
		tickCount += 1;
        if (tickCount >= 20) {
            if (clientPacketCount > maxClientPacketCount) {
                maxClientPacketCount = clientPacketCount;
            }
            if (serverPacketCount > maxServerPacketCount) {
                maxServerPacketCount = serverPacketCount;
            }
            clientPacketCount = 0;
            serverPacketCount = 0;

            tickCount = 0;
        }
		
		// CustomMove
		if (settings.CustomMove.get() || mc.thePlayer.isInWater() && settings.CustomMoveWater.get()) {
        if(once){
          y=mc.thePlayer.posY;
          once = false;
        }
        ticks++;
        if(settings.spoofGround.get()){
          mc.getNetHandler().addToSendQueue(new c03packetplayer.C04PacketPlayerPosition(true));
        }
        if(ticks<settings.ticksAction.get()){
          mc.timer.timerSpeed = settings.bTTimer.get();
          mY(settings.bTYType.get(), settings.bTY.get());
          mXZ(settings.bTHType.get(), settings.bTH.get());
        }
        if(ticks>settings.ticksAction.get()){
          mc.timer.timerSpeed = settings.aTTimer.get();
          mY(settings.aTYType.get(), settings.aTY.get());
          mXZ(settings.aTHType.get(), settings.aTH.get());
        }
        if(ticks==settings.ticksAction.get()){
          mc.timer.timerSpeed = settings.wTTimer.get();
          mY(settings.wTYType.get(), settings.wTY.get());
          mXZ(settings.wTHType.get(), settings.wTH.get());
        }
        if(y<mc.thePlayer.posY+settings.posYAction.get()){
          mc.timer.timerSpeed = settings.bTTimer.get();
          mY(settings.bYYType.get(), settings.bYY.get());
          mXZ(settings.bYHType.get(), settings.bYH.get());
        }
        if(y>mc.thePlayer.posY+settings.posYAction.get()){
          mc.timer.timerSpeed = settings.aYTimer.get();
          mY(settings.aYYType.get(), settings.aYY.get());
          mXZ(settings.aYHType.get(), settings.aYH.get());
        }
      }else{
			ticks=0;
			once = true;
			}
		}
	
	this.onDisable = function() {
		LiquidBounce.commandManager.executeCommands(".t Parkour off");
		LiquidBounce.commandManager.executeCommands(".t FastPlace off");
		k = false;
		ti = 0;
		tt = false;
		tit = 0;
		mk = true;
		Yals = null;
		Yb = null;
		ScaffoldOn = false;
		
		// MoreSpeed
		mc.timer.timerSpeed = 1.0
        inCombat = false
        ticks = 0
        mc.thePlayer.jumpMovementFactor = 0.2
        mc.thePlayer.speedInAir = 0.02
        if (TestScaffold.links4() == "Ncp" || "MatrixWeird" || "Vulcan") {
            mc.thePlayer.motionX = 0
            mc.thePlayer.motionZ = 0
        }
		
		// PacketDebug
		clientPacketCount = 0;
        serverPacketCount = 0;
        maxClientPacketCount = 0;
        maxServerPacketCount = 0;
		
		// Custom
		mc.thePlayer.speedInAir = 0.02;
		mc.timer.timerSpeed = 1
	}
	
	 this.onPacket = function(event) {
         packet = event.getPacket();
        if ((mc.theWorld != null && mc.thePlayer != null)) {
            if (settings.FixGround.get() && (packet instanceof C03PacketPlayer && !(packet instanceof C04PacketPlayerPosition) && !(packet instanceof C06PacketPlayerPosLook)) && (mc.thePlayer.motionY == 0 || (mc.thePlayer.onGround && mc.thePlayer.isCollidedVertically)) && !packet.onGround) {
                packet.onGround = true;
            }
            if (packet instanceof C04PacketPlayerPosition || packet instanceof C06PacketPlayerPosLook) {
                this.x = packet.x;
                this.y = packet.y;
                this.z = packet.z;
                this.jam = 0;
            }
            if (packet instanceof C06PacketPlayerPosLook || packet instanceof C05PacketPlayerLook) {
                this.yaw = packet.yaw;
                this.pitch = packet.pitch;
            }
            if (settings.FixPacketPlayer.get() && packet instanceof C03PacketPlayer && !(packet instanceof C04PacketPlayerPosition) && !(packet instanceof C06PacketPlayerPosLook)) {
                this.jam += 1;
                if (this.jam >= 21) {
                    this.jam = 0;
                    event.cancelEvent();
                    mc.thePlayer.sendQueue.addToSendQueue(new C06PacketPlayerPosLook(this.x, this.y, this.z, this.yaw, this.pitch, packet.isOnGround()));
                }
            }
            if (settings.FixItemSwap.get() && packet instanceof C09PacketHeldItemChange) {
                if (packet.getSlotId() == this.prevSlot) {
                    event.cancelEvent();
                } else {
                    this.prevSlot = packet.getSlotId();
                }
            }
            if (settings.FixIdleFly.get() && !(packet instanceof C04PacketPlayerPosition) && !(packet instanceof C06PacketPlayerPosLook) && packet instanceof C03PacketPlayer && !(packet instanceof C05PacketPlayerLook) && !packet.onGround) {
                this.packetCount += 1;
				if (this.packetCount >= 2){
				event.cancelEvent();
				}
            } else if (settings.FixIdleFly.get() && packet instanceof C03PacketPlayer) {
				this.packetCount = 0;
			}
            if (settings.FixBlinkAndFreecam.get() && (Blink.getState() || freecamModule.getState() || freezeModule.getState()) && packet instanceof C00PacketKeepAlive) {
                event.cancelEvent();
            }
        }
    }
	
	this.onPacket = function (eventData) {
        var packet = eventData.getPacket();

        var packetClassName = packet.class.simpleName;
        
        var isClientPacket = packetClassName.startsWith("C");

        isClientPacket ? clientPacketCount++ : serverPacketCount++;

        if (isClientPacket ? settings.debugClientPacket.get() : settings.debugServerPacket.get()) {
            Chat.print(packetClassName + " : " + Date.now());

            if (packet instanceof C03Player) {
                Chat.print(packet.getPositionX() + " : " + packet.getPositionY() + " : " + packet.getPositionZ() + " : " + packet.getYaw() + " : " + packet.getPitch());
            } else if (packet instanceof S14RelMove) {
                Chat.print(packet.func_149062_c() + " : " + packet.func_149061_d() + " : " + packet.func_149064_e() + " : " + packet.func_149066_f() + " : " + packet.func_149063_g());
            } else if (packet instanceof S18EntityTeleport) {
                Chat.print(packet.getX() + " : " + packet.getY() + " : " + packet.getZ() + " : " + packet.getYaw() + " : " + packet.getPitch());
            } else if (packet instanceof S32ConfirmTransaction) {
                Chat.print(packet.getWindowId() + " : " + packet.getActionNumber() + " : " + packet.func_148888_e());
            }
        }
    }
	
	this.onMove = function() {
		if (mk) {
			Yals = mc.thePlayer.posY;
			mk = false;
		}
    }
	
	Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
  };
   
	Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
  };
  
	function vClip(offset) {
    mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + offset, mc.thePlayer.posZ); 
	}

	function hClip(offset) {
    var playerYaw = Math.radians(mc.thePlayer.rotationYaw);
    mc.thePlayer.setPosition(mc.thePlayer.posX - (Math.sin(playerYaw) * offset), mc.thePlayer.posY, mc.thePlayer.posZ + (Math.cos(playerYaw) * offset));
	}

	function airSpeed(offset) {
    mc.thePlayer.speedInAir = offset;
	}

	function speedMultiply(offset) {
	mc.thePlayer.motionX *= offset;
	mc.thePlayer.motionZ *= offset;
	}

	function timer(offset){
	mc.timer.timerSpeed = offset;
	}

	function mY(type, offset){
        if(type.equals("Set")){
          mc.thePlayer.motionY = offset;
        }
        if(type.equals("Times")){
          mc.thePlayer.motionY *= offset;
        }
        if(type.equals("Add")){
          mc.thePlayer.motionY += offset;
        }
	}
	
	function mXZ(type, offset){
	var playerYaw = Math.radians(mc.thePlayer.rotationYaw);
        if(type.equals("Times")){
          mc.thePlayer.motionX *= offset;
          mc.thePlayer.motionZ *= offset;
        }
        if(type.equals("Add")){
          mc.thePlayer.motionX += Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset;
          mc.thePlayer.motionZ += Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset;
        }
        if(type.equals("Set")){
          mc.thePlayer.motionX = Math.cos(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset;
          mc.thePlayer.motionZ = Math.sin(Math.radians(mc.thePlayer.rotationYaw + 90.0)) * offset;
        }
	}
	
	this.onJump = function() {
		tt = true;
		switch (TestScaffold.links4()) {
            case "Vulcan":
                mc.thePlayer.motionY = -0.41
                mc.timer.timerSpeed = 1.25
                break;
            case "KarhuLow":
                break;
        }
    }
	
	this.onAttack = function(event) {
        inCombat = true
        combatticks = mc.thePlayer.ticksExisted
    }
	
	this.onClickBlock = function(e) {
    if (settings.invBlock.get()) {
      if (enventcanceler) {
        e.cancelEvent()
      }
    }
  }
	
	this.onRender2D = function() {
		if(settings.Keystrokes.get()){
		DrawKey(LMB_X,LMB_Y,Length_MB,Height_MB,'LMB',LMB_X-4.6,LMB_Y-3.6,Color,BGAlpha,LMB_i)
		DrawKey(RMB_X,RMB_Y,Length_MB,Height_MB,'RMB',RMB_X-4.6,RMB_Y-3.6,Color,BGAlpha,RMB_i)
		DrawKey(W_X,W_Y,Length_WASD,Height_WASD,'W',W_X-1.5,W_Y-3.6,Color,BGAlpha,W_i)
		DrawKey(A_X,A_Y,Length_WASD,Height_WASD,'A',A_X-1.5,A_Y-3.6,Color,BGAlpha,A_i)
		DrawKey(S_X,S_Y,Length_WASD,Height_WASD,'S',S_X-1.5,S_Y-3.6,Color,BGAlpha,S_i)
		DrawKey(D_X,D_Y,Length_WASD,Height_WASD,'D',D_X-1.5,D_Y-3.6,Color,BGAlpha,D_i)
		DrawKey(Space_X,Space_Y,Length_Space,Height_Space,'Space',Space_X-8.6,Space_Y-3.6,Color,BGAlpha,Space_i)

		if(settings.Border.get()){
			DrawBorder(LMB_X,LMB_Y,Length_MB,Height_MB,0.56*scale,Border_Color)
			DrawBorder(RMB_X,RMB_Y,Length_MB,Height_MB,0.56*scale,Border_Color)
			DrawBorder(W_X,W_Y,Length_WASD,Height_WASD,0.56*scale,Border_Color)
			DrawBorder(A_X,A_Y,Length_WASD,Height_WASD,0.56*scale,Border_Color)
			DrawBorder(S_X,S_Y,Length_WASD,Height_WASD,0.56*scale,Border_Color)
			DrawBorder(D_X,D_Y,Length_WASD,Height_WASD,0.56*scale,Border_Color)
			DrawBorder(Space_X,Space_Y,Length_Space,Height_Space,0.56*scale,Border_Color)
			}
		}
		
		if(settings.PacketDebug.get()){
		mc.ingameGUI.drawCenteredString(mc.fontRendererObj, "§3客户端§2§l " + clientPacketCount + " §e发包 §7(" + maxClientPacketCount + ")", mc.displayWidth / 4, mc.displayHeight / 2.5, -1);
        mc.ingameGUI.drawCenteredString(mc.fontRendererObj, "§3服务端§4§l " + serverPacketCount + " §e发包 §7(" + maxServerPacketCount + ")", mc.displayWidth / 4, (mc.displayHeight / 2.5) + 8, -1);
		}
	}
	
	this.addValues = function (values) {
		for (var i in settings) {
		    values.add(settings[i]);
			}
		}
	}
	
function add3() {
	// ArrayList
	var modules = new ArrayList(Module);
	var mdl = md.getModules();
	
	// textcolor
	var textcolor;
	var color5;
	var color6;
	var color7;
	var color8;
	var color9;
	var color10;
	var color11;
	var color12;
	var color13;
	var color14;
	var color15;
	var color16;
	var color17;
	var color18;
	var color19;
	var color20;
	var color21;
	var color22;
	var colora;
	var colorb;
    var colorc;
	var colord;
	var colore;
	var colorf;
	var colorg;
	var colorh;
	var colori;
	var colorj;
	var colork;
	var colorl;
	var colorm;
	var colorn;
	var coloro;
	var colorp;
	var colorq;
	var colorr;
	
	var setting = {
		float: function (name, def, min, max) {
			return value.createFloat(name, def, min, max);
		},
		integer: function (name, def, min, max) {
			return value.createInteger(name, def, min, max);
		},
		boolean: function (name, def) {
			return value.createBoolean(name, def);
		},
		list: function (name, values, def) {
			return value.createList(name, values, def);
		}
	};

	var settings = {
		txmode: setting.list("TextColor",["White","Red","Green","Blue","Purple","Yellow"],"White"),
		psx: setting.integer("PosX",0,-400,400),
		psy: setting.integer("PosY",0,-400,400),
		ArrayList: setting.boolean("ArrayList",false),
		ArrayListset1: setting.integer("ArrayListset1",255,0,255),
		ArrayListset2: setting.integer("ArrayListset2",255,0,255),
		ArrayListset3: setting.integer("ArrayListset3",255,0,255),
		ArrayListset4: setting.integer("ArrayListset4",0,0,255),
		ArrayListset5: setting.float("ArrayListset5",0,360,7200),
		ArrayListset6: setting.float("ArrayListset6",0,360,7200),
		ArrayListset7: setting.float("ArrayListset7",0,360,7200),
		ArrayListset8: setting.float("ArrayListset8",0,360,7200),
		ArrayListset9: setting.float("ArrayListset9",0.5,0.1,1),
		ArrayListset10: setting.float("ArrayListset10",0.6,0.1,1),
		ArrayListset11: setting.integer("ArrayListset11",109,0,1000),
		ArrayListset12: setting.integer("ArrayListset12",5,0,100),
		ArrayListset13: setting.integer("ArrayListset13",0,0,1000),
		CommandSystem: setting.boolean("CommandSystem",false),
		CommandSystemMode: setting.list("CommandSystemMode",["TestScaffold","TestScaffoldAdd","TestScaffoldAdd2","TestScaffoldAddGui"],"TestScaffold"),
		 };
		 
    this.getName = function() {
        return "TestScaffoldAddGui";
    };
	
    this.getDescription = function() {
        return "TestScaffoldAdd";
    };
	
    this.getCategory = function() {
        return "Fun";
	};
	
	this.onEnable = function() {
		switch(settings.txmode.get()) {
			case "White":
			textcolor = new Color(233,233,233).getRGB();
			break
			case "Red":
			textcolor = new Color(222,11,11).getRGB();
			break;
			case "Green":
			textcolor = new Color(11,222,11).getRGB();
			break;
			case "Blue":
			textcolor = new Color(11,11,222).getRGB();
			break;
			case "Purple":
			textcolor = new Color(222,11,222).getRGB();
			break;
			case "Yellow":
			textcolor = new Color(222,222,11).getRGB();
			break
		}
	}
	
	this.onUpdate = function() {
	if(TestScaffold.links5()){
			colora = "Enabled";
			color5 = new Color(29,200,29).getRGB();
		} else {
			colora = "Disabled";
			color5 = new Color(200,29,29).getRGB();
		}
	if(TestScaffold.links6()){
			colorb = "Enabled";
			color6 = new Color(29,200,29).getRGB();
	} else {
			colorb = "Disabled";
			color6 = new Color(200,29,29).getRGB();
	}
	if(TestScaffold.links7()){
			colorc = "Enabled";
			color7 = new Color(29,200,29).getRGB();
	} else {
			colorc = "Disabled";
			color7 = new Color(200,29,29).getRGB();
	}
	if(TestScaffold.links8().toLowerCase() !="off"){
			colord = "Enabled";
			color8 = new Color(29,200,29).getRGB();
	} else {
			colord = "Disabled";
			color8 = new Color(200,29,29).getRGB();
	}
	if(TestScaffold.links9().toLowerCase() !="off"){
			colore = "Enabled";
			color9 = new Color(29,200,29).getRGB();
	} else {
			colore = "Disabled";
			color9 = new Color(200,29,29).getRGB();
		}
	if(TestScaffold.links10()){
			colorf = "Enabled";
			color10 = new Color(29,200,29).getRGB();
		} else {
			colorf = "Disabled";
			color10 = new Color(200,29,29).getRGB();
		}
	if(TestScaffold.links11()){
			colorg = "Enabled";
			color11 = new Color(29,200,29).getRGB();
		} else {
			colorg = "Disabled";
			color11 = new Color(200,29,29).getRGB();
		}
	if(TestScaffold.links12()){
			colorh = "Enabled";
			color12 = new Color(29,200,29).getRGB();
		} else {
			colorh = "Disabled";
			color12 = new Color(200,29,29).getRGB();
		}
	if(TestScaffold.links13()){
			colori = "Enabled";
			color13 = new Color(29,200,29).getRGB();
		} else {
			colori = "Disabled";
			color13 = new Color(200,29,29).getRGB();
		}
	if(TestScaffold.links14()){
			colorj = "Enabled";
			color14 = new Color(29,200,29).getRGB();
		} else {
			colorj = "Disabled";
			color14 = new Color(200,29,29).getRGB();
		}
	if(TestScaffold.links15()){
			colork = "Enabled";
			color15 = new Color(29,200,29).getRGB();
		} else {
			colork = "Disabled";
			color15 = new Color(200,29,29).getRGB();
		}
	if(TestScaffold.links16().toLowerCase() !="off"){
			colorl = "Enabled";
			color16 = new Color(29,200,29).getRGB();
		} else {
			colorl = "Disabled";
			color16 = new Color(200,29,29).getRGB();
		}
	if(TestScaffold.links17()){
			colorm = "Enabled";
			color17 = new Color(29,200,29).getRGB();
		} else {
			colorm = "Disabled";
			color17 = new Color(200,29,29).getRGB();
		}
	if(TestScaffold.links18()){
			colorn = "Enabled";
			color18 = new Color(29,200,29).getRGB();
		} else {
			colorn = "Disabled";
			color18 = new Color(200,29,29).getRGB();
		}
	if(TestScaffold.links19()){
			coloro = "Enabled";
			color19 = new Color(29,200,29).getRGB();
		} else {
			coloro = "Disabled";
			color19 = new Color(200,29,29).getRGB();
		}
	if(TestScaffold.links20()){
			colorp = "Enabled";
			color20 = new Color(29,200,29).getRGB();
		} else {
			colorp = "Disabled";
			color20 = new Color(200,29,29).getRGB();
		}
	if(TestScaffold.links21()){
			colorq = "Enabled";
			color21 = new Color(29,200,29).getRGB();
		} else {
			colorq = "Disabled";
			color21 = new Color(200,29,29).getRGB();
		}
	if(TestScaffold.links22()){
			colorr = "Enabled";
			color22 = new Color(29,200,29).getRGB();
		} else {
			colorr = "Disabled";
			color22 = new Color(200,29,29).getRGB();
		}
    // CommandSystem
	if(settings.CommandSystem.get()){
		switch(settings.CommandSystemMode.get()){
            case "TestScaffold":
              commandManager.executeCommand(".commandsystem module testscaffold items");
              break;
            case "TestScaffoldAdd":
			commandManager.executeCommand(".commandsystem module testscaffoldadd items");
              break;
            case "TestScaffoldAdd2":
			commandManager.executeCommand(".commandsystem module testscaffoldadd2 items");
              break;
			 case "TestScaffoldAddGui": 
			 commandManager.executeCommand(".commandsystem module testscaffoldaddgui items");
			}
		}
	}
	
	this.onDisable = function() {
	}

	this.onRender2D = function(event) {
		var mcWidth = new ScaledResolution(mc).getScaledWidth();
		var mcHeight = new ScaledResolution(mc).getScaledHeight();
		GL11.glPushMatrix(); 
		Gui.drawRect(mcWidth/2/2+settings.psx.get()-2,mcHeight/2 - 22 + settings.psy.get(),mcWidth/2/2+settings.psx.get()+300,mcHeight/2 - 10 + settings.psy.get(),new Color(15,15,15,210).getRGB());
		Gui.drawRect(mcWidth/2/2+settings.psx.get()-2,mcHeight/2 - 22 + settings.psy.get(),mcWidth/2/2+settings.psx.get()+300,mcHeight/2 + 300 + settings.psy.get(),new Color(15,15,15,180).getRGB());
		GL11.glPopMatrix();
		Fonts.font40.drawStringWithShadow("TestScaffoldGui",mcWidth/2/2+settings.psx.get()+18, mcHeight/2 - 20 + settings.psy.get(),textcolor);
		
		Fonts.font40.drawStringWithShadow("PlaceableDelay",mcWidth/2/2+settings.psx.get(), mcHeight/2 - 9 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colora + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 - 9 + settings.psy.get(),color5);
		
		Fonts.font40.drawStringWithShadow("AutoBlock",mcWidth/2/2+settings.psx.get(), mcHeight/2 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colorb + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + settings.psy.get(),color6);
		
		Fonts.font40.drawStringWithShadow("StayAutoBlock",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 9 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colorc + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 9 + settings.psy.get(),color7);
		
		Fonts.font40.drawStringWithShadow("Sprint",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 18 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colord + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 18 + settings.psy.get(),color8);
		
		Fonts.font40.drawStringWithShadow("Swing",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 27 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colore + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 27 + settings.psy.get(),color9);
		
		Fonts.font40.drawStringWithShadow("Search",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 36 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colorf + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 36 + settings.psy.get(),color10);
		
		Fonts.font40.drawStringWithShadow("Down",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 45 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colorg + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 45 + settings.psy.get(),color11);
		
		Fonts.font40.drawStringWithShadow("Eagle",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 54 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colorh + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 54 + settings.psy.get(),color12);
		
		Fonts.font40.drawStringWithShadow("EagleSilent",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 63 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colori + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 63 + settings.psy.get(),color13);
		
		Fonts.font40.drawStringWithShadow("Rotations",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 72 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colorj + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 72 + settings.psy.get(),color14);
		
		Fonts.font40.drawStringWithShadow("KeepRotation",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 81 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colork + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 81 + settings.psy.get(),color15);
		
		Fonts.font40.drawStringWithShadow("Zitter",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 90 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colorl + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 90 + settings.psy.get(),color16);
		
		Fonts.font40.drawStringWithShadow("Slow",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 99 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colorm + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 99 + settings.psy.get(),color17);
		
		Fonts.font40.drawStringWithShadow("SameY",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 108 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colorn + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 108 + settings.psy.get(),color18);
		
		Fonts.font40.drawStringWithShadow("SafeWalk",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 117 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + coloro + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 117 + settings.psy.get(),color19);
		
		Fonts.font40.drawStringWithShadow("AirSafe",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 126 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colorp + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 126 + settings.psy.get(),color20);
		
		Fonts.font40.drawStringWithShadow("Counter",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 135 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colorq + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 135 + settings.psy.get(),color21);
		
		Fonts.font40.drawStringWithShadow("Mark",mcWidth/2/2+settings.psx.get(), mcHeight/2 + 144 + settings.psy.get(),textcolor);
		Fonts.font40.drawStringWithShadow("[" + colorr + "]",mcWidth/2/2+settings.psx.get()+70, mcHeight/2 + 144 + settings.psy.get(),color22);
		
		if (settings.ArrayList.get()){
		var sc = new ScaledResolution(mc);
		var font = mc.fontRendererObj;
		modules = new ArrayList(mdl);
		modules.removeIf(function (i){
			return !i.getState();
		});
		modules.sort(function (a, b){
			return Java.type("java.lang.Float").compare(font.getStringWidth(b.getTagName()), font.getStringWidth(a.getTagName()));
		});
		var y = settings.ArrayListset13.get();
		for (var i = 0; i < modules.size(); i++) {
			var m = modules.get(i);
			var pm = modules.get(i > 0 ? i - 1 : 0);
			var x = -font.getStringWidth(m.getTagName()) - 5 + sc.getScaledWidth();
			var pX = -font.getStringWidth(pm.getTagName()) - 4 + sc.getScaledWidth();
			var co = sk(i, 3, settings.ArrayListset10.get()).getRGB();
			RenderUtils.drawRect(x - 5, y - 5, x + sc.getScaledWidth(), y + font.FONT_HEIGHT + 2 - 5, new Color(settings.ArrayListset1.get(),settings.ArrayListset2.get(),settings.ArrayListset3.get(),settings.ArrayListset4.get()));
			RenderUtils.drawRect(x - 5, y - 5, x - 4, y + font.FONT_HEIGHT + 2 - 5, co);
			if(m != modules.get(0)){
				RenderUtils.drawRect(pX - 5, y - 5, x - 5, y - 2, co);
			}
			if(m == modules.get(modules.size() - 1)){
				RenderUtils.drawRect(x - 1, y + font.FONT_HEIGHT + 1 - 5, sc.getScaledWidth(), y + font.FONT_HEIGHT + 2 - 5, co)
			}
			font.drawString(m.getTagName(), parseInt(x + 1), parseInt(y - 7), co);
			y += font.FONT_HEIGHT - 1.5;
		}
		font.drawString("dmVyeSBleHBlY3RlZCBuZ2wgLSBPcmFuZ2VDYXQ", sc.getScaledWidth(), y);
		}
	}
	
	function sk(c, brightness, saturation) {
		var v1 = Java.type("java.lang.Math").ceil(Java.type("java.lang.System").currentTimeMillis() + (c * settings.ArrayListset11.get())) / settings.ArrayListset12.get();
		return Color.getHSBColor(((v1 %= settings.ArrayListset5.get()) / settings.ArrayListset6.get()) < settings.ArrayListset9.get() ? -(v1 / settings.ArrayListset7.get()) : v1 / settings.ArrayListset8.get(), saturation, brightness);
	}
	
	this.addValues = function (values) {
		for (var i in settings) {
		    values.add(settings[i]);
			}
		}
	}
	
function CommandSystem() {
	// CommandSystem
    const prefix = "§8[§9CommandSystem§8] §7";

    this.execute = function (args) {
        switch (args.length) {
            case 1:
                chat.print(prefix + "§3Syntax: §7.CommandSystem <module>");
                break;
            case 2:
                switch (args[1].toLowerCase()) {
                    case "module": {
                        chat.print(prefix + "§3Syntax: §7.CommandSystem module <module>");
                        break;
                    }
                    default:
                        chat.print(prefix + "§3Syntax: §7.CommandSystem <module>");
                        break;
                }
                break;
            case 3:
                switch (args[1].toLowerCase()) {
                    case "module": {
                        const moduleName = args[2].toLowerCase();
                        const module = LiquidBounce.moduleManager.getModule(moduleName);
                        if (module != null) {
                            chat.print(prefix + "§3Syntax: §7.CommandSystem module " + moduleName + " <items/value/state>");
                        } else {
                            chat.print(prefix + "§7Module §8" + moduleName + "§7 does not exist!");
                        }
                        break;
                    }
                    default:
                        chat.print(prefix + "§3Syntax: §7.CommandSystem <module>");
                        break;
                }
                break;
            case 4:
                switch (args[1].toLowerCase()) {
                    case "module": {
                        const moduleName = args[2].toLowerCase();
                        const module = LiquidBounce.moduleManager.getModule(moduleName);
                        if (module != null) {
                            switch (args[3].toLowerCase()) {
                                case "value": {
                                    const string = [prefix + "§3Syntax: §7.CommandSystem module " + moduleName + " value <"];
                                    const values = module.getValues();
                                    for (let i = 0; i < values.length; ++i) {
                                        string.push(values[i].getName().toLowerCase());
                                        if (i + 1 !== values.length) {
                                            string.push("/");
                                        }
                                    }
                                    string.push(">");
                                    chat.print(string.join(""));
                                    return;
                                }
                                case "items": {
                                    chat.print(prefix + "§7§l" + moduleName + " items");
                                    const values = module.getValues();
                                    for (let i = 0; i < values.length; ++i) {
                                        chat.print(prefix + valueToString(values[i]));
                                    }
                                    return;
                                }
                                case "state": {
                                    const state = module.getState();
                                    chat.print(prefix + "§7§l" + moduleName + "§7 state §8[§" + (state ? "a" : "7") + state + "§8]");
                                    return;
                                }
                            }
                        } else {
                            chat.print(prefix + "§7Module §8" + moduleName + "§7 does not exist!");
                        }
                        break;
                    }
                    default:
                        chat.print(prefix + "§3Syntax: §7.CommandSystem <module>");
                        break;
                }
                break;
            case 5:
                switch (args[1].toLowerCase()) {
                    case "module": {
                        const moduleName = args[2].toLowerCase();
                        const module = LiquidBounce.moduleManager.getModule(moduleName);
                        if (module != null) {
                            switch (args[3].toLowerCase()) {
                                case "value": {
                                    const valueName = args[4].toLowerCase();
                                    const value = module.getValue(valueName);
                                    if (value != null) {
                                        chat.print(prefix + "§7§l" + moduleName + "§7 " + valueToString(value));
                                    } else {
                                        const string = [prefix + "§3Syntax: §7.CommandSystem module " + moduleName + " <"];
                                        const values = module.getValues();
                                        for (let i = 0; i < values.length; ++i) {
                                            string.push(values[i].getName().toLowerCase());
                                            if (i + 1 !== values.length) {
                                                string.push("/");
                                            }
                                        }
                                        string.push(">");
                                        chat.print(string.join(""));
                                    }
                                    return;
                                }
                                case "state": {
                                    const state = args[4].toLowerCase();
                                    const set = state === "true";
                                    if (set || state === "false") {
                                        module.setState(set);
                                        chat.print(prefix + "§7§l" + moduleName + "§7 state §8[§" + (set ? "a" : "7") + set + "§8]");
                                    } else {
                                        chat.print(prefix + "§3Syntax: §7.CommandSystem module " + moduleName + "§7 state <boolean>");
                                    }
                                    return;
                                }
                            }
                        }
                        break;
                    }
                }
                break;
            case 6:
                switch (args[1].toLowerCase()) {
                    case "module": {
                        const moduleName = args[2].toLowerCase();
                        const module = LiquidBounce.moduleManager.getModule(moduleName);
                        if (module != null) {
                            switch (args[3].toLowerCase()) {
                                case "value": {
                                    const valueName = args[4].toLowerCase();
                                    const value = module.getValue(valueName);
                                    if (value != null) {
                                        let type = "Unknown";
                                        try {
                                            const set = args[5];
                                            if (value instanceof IntegerValue || value instanceof BlockValue) {
                                                type = "integer";
                                                value.changeValue(JavaInteger.valueOf(set));
                                            } else if (value instanceof FloatValue) {
                                                type = "float";
                                                value.changeValue(JavaFloat.valueOf(set));
                                            } else if (value instanceof BoolValue) {
                                                type = "boolean";
                                                value.changeValue(JavaBoolean.valueOf(set));
                                            } else if (value instanceof TextValue || value instanceof ListValue) {
                                                type = "string";
                                                value.changeValue(JavaString.valueOf(set));
                                            }
                                            chat.print(prefix + "§7§l" + moduleName + "§7 " + valueToString(value));
                                        } catch (e) {
                                            chat.print(prefix + "§3Syntax: §7.CommandSystem module " + moduleName + "§7 " + valueName + " <" + type + ">");
                                        }
                                    } else {
                                        const string = [prefix + "§3Syntax: §7.CommandSystem module " + moduleName + " <"];
                                        const values = module.getValues();
                                        for (let i = 0; i < values.length; ++i) {
                                            string.push(values[i].getName().toLowerCase());
                                            if (i + 1 !== values.length) {
                                                string.push("/");
                                            }
                                        }
                                        string.push(">");
                                        chat.print(string.join(""));
                                    }
                                    return;
                                }
                            }
                        }
                        break;
                    }
                }
                break;
            default:
                chat.print(prefix + "§3Syntax: §7.CommandSystem <module>");
                break;
        }
    }

    this.tabComplete = function (args) {
        switch (args.length) {
            case 1:
                return ["module"];
            case 2:
                switch (args[0].toLowerCase()) {
                    case "module": {
                        const list = [];
                        const moduleName = args[1].toLowerCase();
                        const modules = LiquidBounce.moduleManager.getModules();
                        for (const iterator = modules.iterator(); iterator.hasNext();) {
                            const module = iterator.next();
                            const name = module.getName().toLowerCase();
                            if (name.startsWith(moduleName)) {
                                list.push(name);
                            }
                        }
                        return list;
                    }
                }
                break;
            case 3:
                switch (args[0].toLowerCase()) {
                    case "module": {
                        const moduleName = args[1].toLowerCase();
                        const module = LiquidBounce.moduleManager.getModule(moduleName);
                        if (module != null) {
                            const itemName = args[2].toLowerCase();
                            const items = ["items", "value", "state"];
                            const list = [];
                            for (let i = 0; i < items.length; ++i) {
                                const item = items[i].toLowerCase();
                                if (item.startsWith(itemName)) {
                                    list.push(item);
                                }
                            }
                            return list;
                        }
                        break;
                    }
                }
                break;
            case 4:
                switch (args[0].toLowerCase()) {
                    case "module": {
                        const moduleName = args[1].toLowerCase();
                        const module = LiquidBounce.moduleManager.getModule(moduleName);
                        if (module != null) {
                            switch (args[2].toLowerCase()) {
                                case "value": {
                                    const list = [];
                                    const valueName = args[3].toLowerCase();
                                    const values = module.getValues();
                                    for (let i = 0; i < values.length; ++i) {
                                        const value = values[i];
                                        const name = value.getName().toLowerCase();
                                        if (name.startsWith(valueName)) {
                                            list.push(name);
                                        }
                                    }
                                    return list;
                                }
                                case "state": {
                                    const itemName = args[3].toLowerCase();
                                    const items = ["true", "false"];
                                    const list = [];
                                    for (let i = 0; i < items.length; ++i) {
                                        const item = items[i].toLowerCase();
                                        if (item.startsWith(itemName)) {
                                            list.push(item);
                                        }
                                    }
                                    return list;
                                }
                            }
                        }
                        break;
                    }
                }
                break;
            case 5:
                switch (args[0].toLowerCase()) {
                    case "module": {
                        const moduleName = args[1].toLowerCase();
                        const module = LiquidBounce.moduleManager.getModule(moduleName);
                        if (module != null) {
                            switch (args[2].toLowerCase()) {
                                case "value": {
                                    const valueName = args[3].toLowerCase();
                                    const value = module.getValue(valueName);
                                    if (value != null) {
                                        let items = [];
                                        let number = false;
                                        switch (true) {
                                            case value instanceof IntegerValue: {
                                                const minimum = value.getMinimum();
                                                const maximum = value.getMaximum();
                                                const size = Math.min(maximum, 11);
                                                for (let i = 0; i < size; ++i) {
                                                    items.push(Math.floor(minimum + (maximum - minimum) * i / 10).toString());
                                                }
                                                number = true;
                                                break;
                                            }
                                            case value instanceof FloatValue: {
                                                const minimum = value.getMinimum();
                                                const maximum = value.getMaximum();
                                                for (let i = 0; i < 11; ++i) {
                                                    items.push((minimum + (maximum - minimum) * (i / 10)).toFixed(2));
                                                }
                                                number = true;
                                                break;
                                            }
                                            case value instanceof ListValue:
                                                items = value.getValues();
                                                break;
                                            case value instanceof BoolValue:
                                                items = ["true", "false"];
                                                break;
                                            default:
                                                return [];
                                        }
                                        const itemName = args[4].toLowerCase();
                                        const list = [];
                                        for (let i = 0; i < items.length; ++i) {
                                            const item = items[i].toLowerCase();
                                            if (itemName.length === 0 || (number ? item === itemName : item.startsWith(itemName))) {
                                                list.push(item);
                                            }
                                        }
                                        return list;
                                    }
                                }
                            }
                        }
                        break;
                    }
                }
                break;
        }
        return [];
    }

    function valueToString(value) {
        const string = [];
        switch (true) {
            case value instanceof IntegerValue: {
                const minimum = value.getMinimum();
                const maximum = value.getMaximum();
                const current = value.get();
                let state = 0;
                if (current !== current) {
                    state = 2;
                } if (current < minimum || current > maximum) {
                    state = 1;
                }
                const statePrefix = "§" + (state !== 0 ? state === 1 ? "e" : "c" : "7");
                string.push(statePrefix + "§l" + value.getName() + " §8[§" + (state !== 0 ? state === 1 ? "e" : "c" : "a"));
                let size = (current - minimum) / (maximum - minimum) * 20;
                size = Math.round(size > 0 && size < 20 ? Math.max(1, Math.min(19, size)) : size);
                if (size !== size) {
                    size = 20;
                } for (let i = 0; i < 20; ++i) {
                    if (i === size) {
                        string.push("§7");
                    }
                    string.push("|");
                }
                string.push("§8][§" + (state !== 0 ? state === 1 ? "e" : "c" : "a") + (value instanceof BlockValue ? BlockUtils.getBlockName(current) + "(" + current + ")" : current) + "§8]§7(" + minimum + "~" + maximum + ")");
                return string.join("");
            }
            case value instanceof FloatValue: {
                const minimum = value.getMinimum();
                const maximum = value.getMaximum();
                const current = value.get();
                let state = 0;
                if (current !== current) {
                    state = 2;
                } if (current < minimum || current > maximum) {
                    state = 1;
                }
                const statePrefix = "§" + (state !== 0 ? state === 1 ? "e" : "c" : "7");
                string.push(statePrefix + "§l" + value.getName() + " §8[§" + (state !== 0 ? state === 1 ? "e" : "c" : "a"));
                let size = (current - minimum) / (maximum - minimum) * 20;
                size = Math.round(size > 0 && size < 20 ? Math.max(1, Math.min(19, size)) : size);
                if (size !== size) {
                    size = 20;
                } for (let i = 0; i < 20; ++i) {
                    if (i === size) {
                        string.push("§7");
                    }
                    string.push("|");
                }
                string.push("§8][§" + (state !== 0 ? state === 1 ? "e" : "c" : "a") + current.toFixed(2) + "§8]§7(" + minimum.toFixed(2) + "~" + maximum.toFixed(2) + ")");
                return string.join("");
            }
            case value instanceof ListValue: {
                const values = value.getValues();
                const current = value.get();
                let state = 0;
                if (!value.contains(current)) {
                    state = 1;
                }
                string.push("§" + (state === 0 ? "7" : "c") + "§l" + value.getName() + " §8[§" + (state === 0 ? "a" : "c") + current + "§8]§7(");
                for (let i = 0; i < values.length; ++i) {
                    string.push(values[i]);
                    if (i + 1 !== values.length) {
                        string.push(",");
                    }
                }
                string.push(")");
                return string.join("");
            }
            case value instanceof BoolValue: {
                const current = value.get();
                string.push("§7§l" + value.getName() + " §8[§" + (current ? "a" : "7") + current + "§8]§7(true,false)");
                return string.join("");
            }
            case value instanceof TextValue: {
                const current = value.get();
                string.push("§7§l" + value.getName() + " §8[§a" + current + "§8]§7(string)");
                return string.join("");
            }
            case value instanceof FontValue: {
                const current = value.get();
                let fontName = "Unknown";
                if (current instanceof GameFontRenderer) {
                    const font = liquidFontRenderer.getDefaultFont().getFont();
                    fontName = "Font:" + font.getName() + " - " + font.getSize();
                } else if (current === Fonts.minecraftFont) {
                    fontName = "Font:Minecraft";
                }
                string.push("§7§l" + value.getName() + " §8[§a" + fontName + "§8]§7(font)");
                return string.join("");
            }
        }
    }

    const command = new (Java.extend(Command, {
        execute: this.execute,
        tabComplete: this.tabComplete
    }))("commandsystem", []);

    this.register = function () {
        LiquidBounce.commandManager.getCommands().add(command);
    }

    this.unregister = function () {
        LiquidBounce.commandManager.getCommands().remove(command);
    }
	}
	
function add4() {
	// packet
	var packet;
	function randomIntFrom(min,max)
	{
    return Math.floor(Math.random()*(max-min+1)+min);
	}
	
	var setting = {
		float: function (name, def, min, max) {
			return value.createFloat(name, def, min, max);
		},
		integer: function (name, def, min, max) {
			return value.createInteger(name, def, min, max);
		},
		boolean: function (name, def) {
			return value.createBoolean(name, def);
		},
		list: function (name, values, def) {
			return value.createList(name, values, def);
		}
	};

	var settings = {
		Mode: setting.list("Mode", ["Basic", "YPort", "YPort2", "VClip", "PacketJump", "OldNCP", "Old", "New", "New2", "Sigma", "Hypixel"], "Basic"),
		OnlyOnGround: setting.boolean("OnlyOnGround", true),
		dmg: setting.integer("DamageAmount", 1, 1, 20),
		offset: setting.float("YOffset", 0.62, 0.01, 1.0),
		 };
    this.getName = function() {
        return "TestScaffoldAdd3";
    };
	
    this.getDescription = function() {
        return "TestScaffoldAdd";
    };
	
    this.getCategory = function() {
        return "Fun";
	};
	
	this.onEnable = function() {
				if (!mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb && !mc.thePlayer.isInWater() && !mc.thePlayer.isInLava() && mc.thePlayer.ridingEntity == null && (mc.thePlayer.onGround || !settings.OnlyOnGround.get())){
        switch (settings.Mode.get()) {
        case "Basic":
            if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 0.278, 0).expand(0, 0, 0)).isEmpty()) {
                for (var i = 0; i <= 10; ++i) {
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.278, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false));
                    if (i == 10)
                        mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, true));
                }
            } else {
                chat.print("§cNot enough space (0.278 blocks min distance between you and the block above you)")
            }
            break;
        case "YPort":
            if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 0.42, 0).expand(0, 0, 0)).isEmpty()) {
                for (var i = 0; i <= 7; ++i) {
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.41999998688698, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false));
                    if (i == 7)
                        mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, true));
                }
            } else {
                chat.print("§cNot enough space (0.42 blocks min distance between you and the block above you)")
            }
            break;
        case "YPort2":
            if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 1.00133597911214, 0).expand(0, 0, 0)).isEmpty()) {
                for (var i = 0; i <= 2; ++i) {
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.41999998688698, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.7531999805212, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.00133597911214, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false));
                    if (i == 2)
                        mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, true));
                }
            } else {
                chat.print("§cNot enough space (1 block min distance between you and the block above you)")
            }
            break;
        case "VClip":
            if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 3.45, 0).expand(0, 0, 0)).isEmpty()) {
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 3.45, mc.thePlayer.posZ, false));
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false));
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, true));
            } else {
                chat.print("§cNot enough space (you need to have a 2 blocks tall empty box 3.45 blocks above you)")
            }
            break;
        case "PacketJump":
            if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 1.2, 0).expand(0, 0, 0)).isEmpty()) {
                for (var i = 0; i <= 2; ++i) {
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.41999998688698, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.7531999805212, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.00133597911214, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.16610926093821, mc.thePlayer.posZ, false));
                    if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 1.24918707874468, 0).expand(0, 0, 0)).isEmpty()) {
                        mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.24918707874468, mc.thePlayer.posZ, false));
                    } else {
                        mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.2, mc.thePlayer.posZ, false));
                    }
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.1707870772188, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 1.0155550727022, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.78502770378924, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.4807108763317, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.10408037809304, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, i == 2));
                }
            } else {
                chat.print("§cNot enough space (1.2 blocks min distance between you and the block above you)")
            }
            break;
        case "OldNCP":
            if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 0.0625, 0).expand(0, 0, 0)).isEmpty()) {
                for (var i = 0; i <= 48; ++i) {
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.0625, mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false));
                    if (i == 48)
                        mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, true));
                }
            } else {
                chat.print("§cNot enough space (0.0625 blocks min distance between you and the block above you)")
            }
            break;
			case "Old":
            for(var i = 0; i < 80 + 20 * (settings.dmg.get() -  1); i++){
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.mc.thePlayer.posX, mc.thePlayer.mc.thePlayer.posY + 0.049, mc.thePlayer.mc.thePlayer.posZ, false));
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.mc.thePlayer.posX, mc.thePlayer.mc.thePlayer.posY, mc.thePlayer.mc.thePlayer.posZ, false));
            }
            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.mc.thePlayer.posX, mc.thePlayer.mc.thePlayer.posY, mc.thePlayer.mc.thePlayer.posZ, true));
			break;
			case "New":
			 for(var i = 0; i < 70; ++i) {
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.06, mc.thePlayer.posZ, false));
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false));
            }
            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.1, mc.thePlayer.posZ, false));
			break;
			case "New2":
			for(var i = 0; i < 65 * settings.dmg.get(); ++i) {
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.049, mc.thePlayer.posZ, false));
                mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, false));
            }

            mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, true));
			break;
			case "Sigma":
                for (var i = 0; i <= ((3 + settings.dmg.get()) / settings.offset.get()); i++) {
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX,mc.thePlayer.posY + settings.offset.get(), mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX,mc.thePlayer.posY, mc.thePlayer.posZ, (i == ((3 + settings.dmg.get()) / settings.offset.get()))));
                }
			break;
			case "Hypixel":
                for (var i = 0; i <= ((3 + settings.dmg.get()) / settings.offset.get()); i++) {
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX,mc.thePlayer.posY + settings.offset.get(), mc.thePlayer.posZ, false));
                    mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX,mc.thePlayer.posY, mc.thePlayer.posZ, (i == ((3 + settings.dmg.get()) / settings.offset.get()))));
                }
				mc.thePlayer.motionY = 0.42;
			break;
			}
		}
	}
	
	this.onUpdate = function() {
		var autoDisableModule = moduleManager.getModule("TestScaffoldAdd3");
        autoDisableModule.setState(false);
	}
	
	this.onDisable = function() {
	}
	
	
	
	this.addValues = function (values) {
		for (var i in settings) {
		    values.add(settings[i]);
			}
		}
	}	

const CommandSystemInstance = new CommandSystem();

var add4 = new add4();
var add4;

var add3 = new add3();
var add3;		

var add2 = new add2();
var add2;
	
var add = new add();
var add;

var TestScaffold = new TestScaffold();
var TestScaffold;

function onLoad() {}

function onEnable() {
    TestScaffoldclient = moduleManager.registerModule(TestScaffold);
	addclient = moduleManager.registerModule(add);
	add2client = moduleManager.registerModule(add2);
	add3client = moduleManager.registerModule(add3);
	add4client = moduleManager.registerModule(add4);
	CommandSystemInstance.register();
}

function onDisable() {
	CommandSystemInstance.unregister();
	moduleManager.unregisterModule(add4);
	moduleManager.unregisterModule(add3);
	moduleManager.unregisterModule(add2);
	moduleManager.unregisterModule(add);
    moduleManager.unregisterModule(TestScaffold);
}

