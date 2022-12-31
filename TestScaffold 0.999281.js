var scriptName = "TestScaffold";
var scriptVersion = 0.9;
var scriptAuthor = "mumy and yby360";

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
var Vec3 = Java.type("net.minecraft.util.Vec3");

var towerModule = moduleManager.getModule("Tower");
var speed = moduleManager.getModule("Speed");
var autowalk = moduleManager.getModule("AutoWalk");
var Strafe = moduleManager.getModule("Strafe");
var Blink = moduleManager.getModule("Blink");
var KillAura = moduleManager.getModule("KillAura");
var scaffoldModule = moduleManager.getModule("TestScaffold");

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
        mode: setting.list("Mode", ["Normal", "Rewinside", "Expand"], "Normal"),
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
        sprint: setting.boolean("Sprint", true),
		hirohikosprint: setting.boolean("HirohikoSprint", true),
        hypixelsprint: setting.boolean("HypixelSprint", true),
        hypixelsprintspeed: setting.float("HypixelSprintSpeed", 1.2, 1, 1.5), 
        swing: setting.boolean("Swing", true),
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
        keepLength: setting.integer("KeepRotationLength", 0, 0, 20),
        keepRotation: setting.boolean("KeepRotation", false),

        // Zitter
        zitter: setting.boolean("Zitter", false),
        zitterMode: setting.list("ZitterMode", ["Teleport", "Smooth"], "Teleport"),
        zitterSpeed: setting.float("ZitterSpeed", 0.13, 0.1, 0.3),
        zitterStrength: setting.float("ZitterStrength", 0.072, 0.05, 0.2),

        // Game
        timer: setting.float("Timer", 1, 0.1, 10),
        speedModifier: setting.float("SpeedModifier", 1, 0, 2),
		slow: setting.boolean("Slow", false),
		slowspeed: setting.float("SlowSpeed", 0.6, 0.2, 0.8),

        // Safety
        antihalf: setting.boolean("AntiHalf", false),
        bodyreverser: setting.boolean("BodyReverser", false),
		AntiFlag: setting.boolean("AntiFlag", false),
		AntiFlagActivation: setting.integer("AntiFlagActivation",20,1,100),
		AntiFlagStrength: setting.float("AntiFlagStrength",0.01,0.05,0.30),
        autowalk: setting.boolean("AutoWalk", false),
        autowalkmode: setting.list("AutoWalkMode", ["Test", "Bind"], "Test"),
        sameY: setting.boolean("SameY", false),
        safeWalk: setting.boolean("SafeWalk", true),
        airSafe: setting.boolean("AirSafe", false),
        buildHand: setting.boolean("BuildHand", false),
        tower: setting.boolean("Tower", false),
        towermode: setting.list("TowerMode", ["TestTower", "TestTower2", "BindTower", "AACTower", "MotionTp2"], "TestTower"),
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
        // Visuals
        counterDisplay: setting.boolean("Counter", true),
        fakesprint: setting.boolean("FakeSprint", false),
        smoothcamera: setting.boolean("SmoothCamera", false),
        skytime: setting.boolean("SkyTime", false),
        skyTimeAmount: setting.integer("SkyTimeAmount", 50, -100, 100),
        Heartbeat: setting.boolean("HeartBeat", false),
        Heartbeatset: setting.integer("HeartBeatSet", 90, 0, 360),
        mark: setting.boolean("Mark", false),
		scaffoldcircle: setting.boolean("ScaffoldCircle", false),
		speedmonitor: setting.boolean("SpeedMonitor", false),
		deathcoords: setting.boolean("DeathCoords", false),
		debugcam: setting.boolean("DeBugCam", false),
		mousesensitivity: setting.boolean("MouseSensitivity", false),
		mousesensitivityset: setting.float("MouseSensitivitySet", 0.5, 0.1, 1.5),
		memoryback: setting.boolean("MemoryBack", false),
		memorybacktime: setting.integer("MemoryBackTime", 3000, 1000, 100000),
		betterfps: setting.boolean("BetterFps", false),
		Snake: setting.boolean("Snake", false),
		NameTags: setting.boolean("NameTags", false),
		invis: setting.boolean("Invisible", false)
            
    };

    // Target block
    var targetPlace;

    // Launch position
    var launchY;

    // Rotation lock
    var lockRotation;

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

	// DrawHealth
	function drawHealth(entity) {
		var color = "0xFF" + healthColor(entity.getHealth(), entity.getMaxHealth())
		
		var location = toPercent(entity.getHealth(), entity.getMaxHealth())
		
		drawRect(50, -55, -50, -80, 0x7E000000);
		drawRect(-50+location, -55, -50, -57, color);
	}

	function draw2DESP(entity, x, y, z){
		var scale = (0.09 + mc.thePlayer.getDistance(entity.posX, entity.posY, entity.posZ) / 10000.0)
		GL11.glPushMatrix();
		GL11.glTranslatef(x, y, z);
		GL11.glNormal3f(0.0, 1.0, 0.0);
	
		GlStateManager.rotate(-mc.thePlayer.rotationYaw, 0.0, 1.0, 0.0);
		GL11.glScalef(-scale, -scale, scale);
		GL11.glDisable(2896);
		GL11.glDisable(2929);
		GL11.glEnable(3042);
		GL11.glBlendFunc(770, 771);
		GL11.glScaled(0.5, 0.5, 0.5);
		drawHealth(entity);
		var strname = entity.getDisplayName().getFormattedText()
		GL11.glScaled(0.9, 0.9, 0.9);
		mc.fontRendererObj.drawStringWithShadow(strname,-50,-83,0xFFFFFFFF);
		GL11.glScaled(0.7, 0.7, 0.7);
		mc.fontRendererObj.drawStringWithShadow("Health:"+parseInt(entity.getHealth()),-70.5,-102,0xFFFFFFFF);
		
		GL11.glDisable(3042);
		GL11.glEnable(2929);
		GL11.glEnable(2896);
		GL11.glColor4f(1.0, 1.0, 1.0, 1.0);
		GL11.glPopMatrix();
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
	
	// Snake_var
	var snake;
	var lastKey;
	var food;
	var score;
	var blockSize = 20;
	var fieldWidth = 400;
	var fieldHeight = 300;
	var snakeSpeed = 3;
	function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function setupGame() {
    snake = [
        {
            x: 0,
            y: 0
        }
    ];

    moveFood();

    lastKey = 208;
    score = 0;
}

function moveFood() {
    var foodX = getRandomInt(0, fieldWidth / blockSize);
    var foodY = getRandomInt(0, fieldHeight / blockSize);

    food = {
        x: foodX,
        y: foodY
    }
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
	this.onKey = function (event) {
        var key = event.getKey();

        if (key === 205 && lastKey !== 203 || key === 203 && lastKey !== 205
            || key === 200 && lastKey !== 208 || key === 208 && lastKey !== 200) {

            lastKey = key;
        }
    }
	setupGame();
	
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
    }
    this.onUpdate = function () {
        mc.timer.timerSpeed = settings.timer.get();

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

            // Smooth Zitter
            if (settings.zitter.get() && settings.zitterMode.get().toLowerCase() === "smooth") {
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
            if (settings.zitter.get() && settings.zitterMode.get().toLowerCase() === "teleport") {
                MovementUtils.strafe(settings.zitterSpeed.get());

                var yaw = Math.toRadians(mc.thePlayer.rotationYaw + (zitterDirection ? 90 : -90));
                mc.thePlayer.motionX -= Math.sin(yaw) * settings.zitterStrength.get();
                mc.thePlayer.motionZ += Math.cos(yaw) * settings.zitterStrength.get();
                zitterDirection = !zitterDirection;
            }
        } if (settings.sprint.get()) {
            mc.thePlayer.setSprinting(true);
        }else{
			mc.thePlayer.setSprinting(false);
			}
		// SpeedMonitor_XYZ		
		var SR = new ScaledResolution(mc)
		mcWidth=SR.getScaledWidth();
		mcHeight=SR.getScaledHeight();
        speedStr=(Math.sqrt(Math.pow(lastX-mc.thePlayer.posX,2)+Math.pow(lastZ-mc.thePlayer.posZ,2))*20).toFixed(2)+" blocks/s";
        lastX=mc.thePlayer.posX;
        lastZ=mc.thePlayer.posZ;
		
		// Snake_ticksExisted_key
		 if (mc.thePlayer.ticksExisted % snakeSpeed === 0) {
            if (snake[0].x === food.x && snake[0].y === food.y) {
                score += 1;
                moveFood();
                snake.push({
                    x: snake[0].x,
                    y: snake[0].y
                })
            }

            for (var i = snake.length - 1; i > 0; i--) {
                if (i - 1 >= 0) {
                    snake[i].x = snake[i - 1].x;
                    snake[i].y = snake[i - 1].y;
                }
            }

            switch (lastKey) {
                case 205: // Right
                    snake[0].x += 1;

                    break;

                case 203: // Left
                    snake[0].x -= 1

                    break;

                case 200: // Up
                    snake[0].y -= 1;

                    break;


                case 208: // Down
                    snake[0].y += 1;

                    break;
            }

            for (var i = 1; i < snake.length; i++) {
                if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
                    setupGame();
                }
            }
        }
		
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

// TestTower
if (settings.tower.get() && settings.towermode.get().toLowerCase() === "testtower") {
ticks = 0; mc.thePlayer.jump();
                ticks++;
                if (ticks == 9) {
                    mc.thePlayer.jump();
                }
            }

// AACTower
if (settings.tower.get() && settings.towermode.get().toLowerCase() === "aactower") {
if (mc.thePlayer.ticksExisted % 4 == 1) {
			mc.thePlayer.motionY = 0.4195464;
			mc.thePlayer.setPosition(mc.thePlayer.posX - 0.035, mc.thePlayer.posY, mc.thePlayer.posZ);	   
			
	} else {
				
			if (mc.thePlayer.ticksExisted % 4 == 0) {
				mc.thePlayer.motionY = -0.5;
				mc.thePlayer.setPosition(mc.thePlayer.posX + 0.035, mc.thePlayer.posY, mc.thePlayer.posZ);
			}
		}
	}

// TestTower2
if (settings.tower.get() && settings.towermode.get().toLowerCase() === "testtower2") {
mc.thePlayer.speedInAir = 0.03;
		mc.thePlayer.jumpMovementFactor = 0.016;
		mc.timer.timerSpeed = 0.6;
		if (mc.thePlayer.onGround = true) {
			mc.thePlayer.jump();
		}
	}
		
// MotionTp2	
if (settings.tower.get() && settings.towermode.get().toLowerCase() === "motiontp2") {
 if (mc.thePlayer.onGround) {
                    mc.thePlayer.motionY = 0.42;
                } else if (mc.thePlayer.motionY < 0.23) {
					mc.thePlayer.onGround = true;
					mc.thePlayer.motionY = 0.42;
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
if (settings.bodyreverser.get() && mc.gameSettings.keyBindForward.pressed && !settings.autowalk.get()) {
mc.gameSettings.keyBindBack.pressed = true;
mc.gameSettings.keyBindForward.pressed = false;
mc.thePlayer.rotationYaw += 180
    }

// HypixelSprint 
if (settings.hypixelsprint.get()) {
if (mc.gameSettings.keyBindForward.isKeyDown() && !mc.thePlayer.isSneaking()) {
mc.thePlayer.motionX *= settings.hypixelsprintspeed.get()
            mc.thePlayer.motionZ *= settings.hypixelsprintspeed.get()
}else{
		}
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

// TestAutoWalk
if (settings.autowalk.get() && settings.autowalkmode.get().toLowerCase() === "test") {
mc.gameSettings.keyBindForward.pressed = true;
}

// BindAutoWalk
if (settings.autowalk.get() && settings.autowalkmode.get().toLowerCase() === "bind") {
autowalk.setState(true)
}else{
autowalk.setState(false)
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

// FakeSprint
if (settings.fakesprint.get()) {
mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY + 0.0000013, mc.thePlayer.posZ);
    		mc.thePlayer.setSprinting(true);
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
if (settings.tower.get() && settings.towermode.get().toLowerCase() === "bindtower") {
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

            if (settings.swing.get()) {
                mc.thePlayer.swingItem();
            } else {
                mc.getNetHandler().addToSendQueue(new C0APacketAnimation());
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

        if (slot !== mc.thePlayer.inventory.currentItem) {
            mc.getNetHandler().addToSendQueue(new C09PacketHeldItemChange(mc.thePlayer.inventory.currentItem));
        }
    }

    this.onMove = function (event) {
        if (!settings.safeWalk.get() || shouldGoDown) {
            return;
        }
        if (settings.airSafe.get() || mc.thePlayer.onGround) {
            event.setSafeWalk(true);
        }
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
		
		// Snake
		if (settings.Snake.get()) {
		 var resolution = new ScaledResolution(mc);

        var width = resolution.getScaledWidth();
        var height = resolution.getScaledHeight();

        var startX = width / 2 - fieldWidth / 2;
        var startY = height / 2 - fieldHeight / 2;

        drawRect(startX, startY, startX + fieldWidth, startY + fieldHeight, 0x7E000000);

        for (var index in snake) {
            var snakeStartX = snake[index].x * blockSize + startX;
            var snakeStartY = snake[index].y * blockSize + startY;

            drawRect(snakeStartX, snakeStartY, snakeStartX + blockSize, snakeStartY + blockSize, (index == 0) ? 0xFF339960 : 0xFF3CB371);
        }

        // Snake out of bounds
        if (snake[0].x * blockSize + startX >= startX + fieldWidth || snake[0].x * blockSize + startX < startX || snake[0].y * blockSize + startY < startY || snake[0].y * blockSize + startY >= startY + fieldHeight) {
            setupGame();
        }

        var foodX = food.x * blockSize + startX;
        var foodY = food.y * blockSize + startY;

        drawRect(foodX, foodY, foodX + blockSize, foodY + blockSize, 0xFFDC143C);

        mc.fontRendererObj.drawStringWithShadow("分数: " + score, startX + 10, startY + 10, 10395294);
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
		
		if (settings.NameTags.get()) {
		for (var i in mc.theWorld.loadedEntityList){
			var entity = mc.theWorld.loadedEntityList[i]
			if (entity instanceof EntityPlayer && entity != mc.thePlayer  && (settings.invis.get() || !entity.isInvisible())){
				draw2DESP(entity, get3DPosX(entity), get3DPosY(entity), get3DPosZ(entity))
				}
			}
		}
    }
	
	function toPercent(num, total) { 
    return (Math.round(num / total * 10000) / 100 );
}

function healthColor(health, maxhealth){
	if (health > (maxhealth / 2)){
		var r = parseInt((maxhealth - health) * (255/maxhealth) * 2)
		r = ('0' + r.toString(16)).slice(-2)
	}else{
		var r = 255
		r = ('0' + r.toString(16)).slice(-2)
	}
	if (health < (maxhealth / 2)){
		var g = 255 - parseInt(((maxhealth / 2) - health) * (255/maxhealth) * 2)
		g =  ('0' + g.toString(16)).slice(-2)
	}else{
		var g = 255
		g =  ('0' + g.toString(16)).slice(-2)
	}
	var b = 0
	return  r + g + "00" 
}
function get3DPosX(entity){
	var x = (entity.lastTickPosX + (entity.posX - entity.lastTickPosX) * mc.timer.renderPartialTicks) - mc.getRenderManager().renderPosX;
	return x
}

function get3DPosY(entity){
	var y = (entity.lastTickPosY + (entity.posY - entity.lastTickPosY) * mc.timer.renderPartialTicks) - mc.getRenderManager().renderPosY;
	return y
}

function get3DPosZ(entity){
	var z = (entity.lastTickPosZ + (entity.posZ - entity.lastTickPosZ) * mc.timer.renderPartialTicks) - mc.getRenderManager().renderPosZ;
	return z
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
			chat.print("§8[§9§lDebug§8] RotationYaw:" + mc.thePlayer.rotationYaw + " | RotationPitch:" + mc.thePlayer.rotationPitch);
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
		panic: setting.boolean("Panic", false)
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
	}
	
	this.onMove = function() {
		if (mk) {
			Yals = mc.thePlayer.posY;
			mk = false;
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
	}
	
	this.addValues = function (values) {
		for (var i in settings) {
		    values.add(settings[i]);
			}
		}
	}

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
}

function onDisable() {
	moduleManager.unregisterModule(add2);
	moduleManager.unregisterModule(add);
    moduleManager.unregisterModule(TestScaffold);
}

