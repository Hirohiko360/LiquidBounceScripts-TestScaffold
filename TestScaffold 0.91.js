var scriptName = "TestScaffold";
var scriptVersion = 0.9;
var scriptAuthor = "mumy and yby360";

var Color = Java.type("java.awt.Color");
var Integer = Java.type("java.lang.Integer");
var Display = Java.type('org.lwjgl.opengl.Display');

var canPlace = false
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
var MovementUtils = Java.type('net.ccbluex.liquidbounce.utils.MovementUtils');
var RandomUtils=Java.type('net.ccbluex.liquidbounce.utils.misc.RandomUtils');
var Runtime = Java.type("java.lang.Runtime").getRuntime();
var timer = new MSTimer();

var C09PacketHeldItemChange = Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange");
var C0APacketAnimation = Java.type("net.minecraft.network.play.client.C0APacketAnimation");
var C0BPacketEntityAction = Java.type("net.minecraft.network.play.client.C0BPacketEntityAction");
var S12PacketEntityVelocity = Java.type('net.minecraft.network.play.server.S12PacketEntityVelocity');
var S03 = Java.type("net.minecraft.network.play.server.S03PacketTimeUpdate");

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
var scaffoldModule = moduleManager.getModule("TestScaffold");
script.import("lib/minecraftUtils.js");


Math.toDegrees = function (radians) {
    return radians / Math.PI * 180;
}

Math.toRadians = function (degrees) {
    return degrees / 180 * Math.PI;
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
        rotationYaw: setting.integer("RotationYaw", 0, -90, 90),

        // Zitter
        zitter: setting.boolean("Zitter", false),
        zitterMode: setting.list("ZitterMode", ["Teleport", "Smooth"], "Teleport"),
        zitterSpeed: setting.float("ZitterSpeed", 0.13, 0.1, 0.3),
        zitterStrength: setting.float("ZitterStrength", 0.072, 0.05, 0.2),

        // Game
        timer: setting.float("Timer", 1, 0.1, 10),
        speedModifier: setting.float("SpeedModifier", 1, 0, 2),

        // Safety
        antihalf: setting.boolean("AntiHalf", false),
        bodyreverser: setting.boolean("BodyReverser", false),
        autowalk: setting.boolean("AutoWalk", false),
        autowalkmode: setting.list("AutoWalkMode", ["Test", "Bind"], "Test"),
        sameY: setting.boolean("SameY", false),
        safeWalk: setting.boolean("SafeWalk", true),
        airSafe: setting.boolean("AirSafe", false),
        buildHand: setting.boolean("BuildHand", false),
        tower: setting.boolean("Tower", false),
        towermode: setting.list("TowerMode", ["TestTower", "TestTower2", "BindTower", "AACTower"], "TestTower"),
        motionground: setting.boolean("MotionGround", false),
        speed: setting.boolean("Speed", false),
        speedmode: setting.list("SpeedMode", ["AutoJump", "BindSpeed", "TestSpeed", "TestSpeed2", "TestHop", "AACTestSpeed", "AACTestSpeed2", "HClip"], "AutoJump"),
        xzrjump: setting.boolean("XZRJump", false),
        vclipjump: setting.boolean("VClipJump", false),
        vclipjumpset: setting.float("VClipJumpSet", 0.1, 0.01, 1), 
		randomjump: setting.boolean("RandomJump", false),
		fusrodah: setting.boolean("FusRoDah", false),
		fusrodahset: setting.float("FusRoDahSet", 0.5, 0.1, 1.5),
        // Visuals
        counterDisplay: setting.boolean("Counter", true),
        fakesprint: setting.boolean("FakeSprint", true),
        smoothcamera: setting.boolean("SmoothCamera", true),
        skytime: setting.boolean("SkyTime", false),
        skyTimeAmount: setting.integer("SkyTimeAmount", 50, -100, 100),
        Heartbeat: setting.boolean("HeartBeat", true),
        Heartbeatset: setting.integer("HeartBeatSet", 90, 0, 360),
        mark: setting.boolean("Mark", false),
        markcolorr: setting.integer("MarkColorR", 0, 0, 255),
        markcolorg: setting.integer("MarkColorG", 0, 0, 255),
        markcolorb: setting.integer("MarkColorB", 0, 0, 255),
        markalpha: setting.integer("MarkAlpha", 0, 0, 255),
		deathcoords: setting.boolean("DeathCoords", false),
		debugcam: setting.boolean("DeBugCam", false),
		mousesensitivity: setting.boolean("MouseSensitivity", false),
		mousesensitivityset: setting.float("MouseSensitivitySet", 0.5, 0.1, 1.5),
		panic: setting.boolean("Panic", false),
		memoryback: setting.boolean("MemoryBack", false),
		memorybacktime: setting.integer("MemoryBackTime", 3000, 1000, 100000),
		betterfps: setting.boolean("BetterFps", false),
		title: setting.boolean("Title", false),
        debug: setting.boolean("DeBug", false)
            
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

	this.getName = function () {
        return "TestScaffold";
    }

    this.getDescription = function () {
        return "TestScaffold-Module, By yby360 and mumy";
    }

    this.getCategory = function () {
        return "Misc";
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
		if (cancel && mc.thePlayer.isSprinting()) {
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
                MovementUtils.strafe(0.2);
                mc.thePlayer.motionY = 0;
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

// AutoJump
if (settings.speed.get() && settings.speedmode.get().toLowerCase() === "autojump") {
mc.thePlayer.onGround && mc.thePlayer.jump();
	}

// FusRoDah	
this.onMotion = function() {
	if (settings.fusrodah.get()) {
			if(mc.thePlayer.hurtTime > 0) {
			mc.thePlayer.motionX *= settings.fusrodahset.get();
			mc.thePlayer.motionZ *= settings.fusrodahset.get();
			mc.thePlayer.motionY *= settings.fusrodahset.get();
			}
	}else{
			}
}

// RandomJump
if (settings.randomjump.get() && mc.thePlayer.onGround) {
	mc.thePlayer.motionY+=randomFloatFrom(0.01,0.84);
		}

// DebugCam
if (settings.debugcam.get()) {			
mc.gameSettings.debugCamEnable=true;	
		}else{
mc.gameSettings.debugCamEnable=false;
		}
		
// Title
		if (settings.title.get()) {	
		Display.setTitle('丨TestScaffold | Developer Build Mode丨欢迎使用捏');
				}else{
		Display.setTitle('丨TestScaffold | Developer Build Mode丨你小子还想关我?');			
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
if (settings.hirohikosprint.get()) {			
if (mc.thePlayer.isSprinting()) {
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
    }else {
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
mc.thePlayer.motionX = mc.thePlayer.motionZ = 0;
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

// Panic
if (settings.panic.get()) {
chat.print("If you need to open TestScaffold, please close the panic first");
commandManager.executeCommand(".panic all");
}
	
//MotionGround
if (settings.motionground.get()) {
mc.thePlayer.onGround = 2.5; 
        mc.thePlayer.motionY = 0;
}

// Debug
if (settings.debug.get()) {
chat.print("§8[§9§lDebug§8] RotationYaw:" + mc.thePlayer.rotationYaw + " | RotationPitch:" + mc.thePlayer.rotationPitch);
}

//RotationYaw
     RotationUtils.setTargetRotation(new Rotation(mc.thePlayer.rotationYaw,settings.rotationYaw.get())) 
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
        if (!settings.mark.get()) {
            return;
        }
        for (var i = 0; i < (settings.mode.get().toLowerCase() === "expand" ? settings.expandLength.get() + 1 : 2); i++) {
            var blockPos = new BlockPos(mc.thePlayer.posX + (mc.thePlayer.getHorizontalFacing() === EnumFacing.WEST ? -i : mc.thePlayer.getHorizontalFacing() === EnumFacing.EAST ? i : 0), mc.thePlayer.posY - (mc.thePlayer.posY === parseInt(mc.thePlayer.posY) + 0.5 ? 0 : 1.0) - (shouldGoDown ? 1 : 0), mc.thePlayer.posZ + (mc.thePlayer.getHorizontalFacing() === EnumFacing.NORTH ? -i : mc.thePlayer.getHorizontalFacing() === EnumFacing.SOUTH ? i : 0));
            var placeInfo = PlaceInfo.get(blockPos);

            if (BlockUtils.isReplaceable(blockPos) && placeInfo != null) {
                RenderUtils.drawBlockBox(blockPos, new Color(settings.markcolorr.get(),settings.markcolorg.get(),settings.markcolorb.get(), settings.markalpha.get()), false);
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

function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(new TestScaffold());
}

function onDisable() {
    moduleManager.unregisterModule(client);
}

