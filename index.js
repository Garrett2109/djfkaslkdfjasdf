import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Controller from "./Controller/Controller.js";
import Text from "./Text/Text.js";
import Speech from "./Speech/Speech.js";
import Gauge from "./Gauge/Gauge.js";
import Cursor from "./Cursor/Cursor.js";
import Background from "./Background/Background.js";
import Ground from "./Ground/Ground.js";
import Gate from "./Gate/Gate.js";
import Sign from "./Sign/Sign.js";
import Letters from "./Letters/Letters.js";
import Stick from "./Stick/Stick.js";
import Trophy from "./Trophy/Trophy.js";
import Key from "./Key/Key.js";
import Arrow from "./Arrow/Arrow.js";
import Water from "./Water/Water.js";
import Puddle from "./Puddle/Puddle.js";
import Splash from "./Splash/Splash.js";
import Splash2 from "./Splash2/Splash2.js";
import Sparks from "./Sparks/Sparks.js";
import Settings from "./Settings/Settings.js";
import Settings2 from "./Settings2/Settings2.js";
import Checkbox from "./Checkbox/Checkbox.js";
import Barrel from "./Barrel/Barrel.js";
import Fly from "./Fly/Fly.js";
import Glitch from "./Glitch/Glitch.js";
import Maze from "./Maze/Maze.js";
import Goat from "./Goat/Goat.js";
import Squirrel from "./Squirrel/Squirrel.js";
import Frog from "./Frog/Frog.js";
import Hint from "./Hint/Hint.js";
import ButtonHitbox from "./ButtonHitbox/ButtonHitbox.js";
import Tongue from "./Tongue/Tongue.js";
import Pixelfire from "./Pixelfire/Pixelfire.js";
import Hexplode from "./Hexplode/Hexplode.js";
import Candle from "./Candle/Candle.js";
import Lock from "./Lock/Lock.js";
import Rays from "./Rays/Rays.js";
import Balloon from "./Balloon/Balloon.js";
import Sun from "./Sun/Sun.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Controller: new Controller({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 100,
    visible: true,
    layerOrder: 39,
  }),
  Text: new Text({
    x: 0,
    y: 112,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 45,
    size: 100,
    visible: false,
    layerOrder: 5,
  }),
  Speech: new Speech({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4,
  }),
  Gauge: new Gauge({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3,
  }),
  Cursor: new Cursor({
    x: -203,
    y: 180,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 8,
    size: 40,
    visible: false,
    layerOrder: 37,
  }),
  Background: new Background({
    x: -480,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  Ground: new Ground({
    x: -240,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 31,
  }),
  Gate: new Gate({
    x: 202,
    y: -60,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 17,
  }),
  Sign: new Sign({
    x: -300.7999999999999,
    y: -42.95113341427309,
    direction: 89.63518819928885,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 9,
    size: 40,
    visible: false,
    layerOrder: 12,
  }),
  Letters: new Letters({
    x: -308.2831580898537,
    y: -170,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 40,
    visible: false,
    layerOrder: 18,
  }),
  Stick: new Stick({
    x: -255,
    y: -75,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 16,
  }),
  Trophy: new Trophy({
    x: -65,
    y: -389,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 40,
    visible: true,
    layerOrder: 26,
  }),
  Key: new Key({
    x: 168,
    y: -237,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 27,
  }),
  Arrow: new Arrow({
    x: 240,
    y: -192,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 2,
  }),
  Water: new Water({
    x: 128,
    y: 184,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20,
  }),
  Puddle: new Puddle({
    x: 0,
    y: -120,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 29,
  }),
  Splash: new Splash({
    x: 128,
    y: -116,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 24,
  }),
  Splash2: new Splash2({
    x: 168.17570463519002,
    y: -66,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 23,
  }),
  Sparks: new Sparks({
    x: -240,
    y: -67.95113341427309,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 500,
    visible: false,
    layerOrder: 19,
  }),
  Settings: new Settings({
    x: -215,
    y: -150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 75,
    visible: true,
    layerOrder: 35,
  }),
  Settings2: new Settings2({
    x: 0,
    y: -30,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 36,
  }),
  Checkbox: new Checkbox({
    x: 0,
    y: -125,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 35,
    visible: false,
    layerOrder: 38,
  }),
  Barrel: new Barrel({
    x: 277,
    y: -77,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 7,
  }),
  Fly: new Fly({
    x: -160,
    y: 55,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 8,
    size: 75,
    visible: false,
    layerOrder: 6,
  }),
  Glitch: new Glitch({
    x: -214,
    y: -134,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.DONT_ROTATE,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 33,
  }),
  Maze: new Maze({
    x: -465,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 30,
  }),
  Goat: new Goat({
    x: 0,
    y: -87,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 21,
  }),
  Squirrel: new Squirrel({
    x: -180,
    y: -182,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 50,
    visible: false,
    layerOrder: 10,
  }),
  Frog: new Frog({
    x: -257,
    y: -155,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 80,
    visible: false,
    layerOrder: 13,
  }),
  Hint: new Hint({
    x: -30,
    y: -132,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 15,
  }),
  ButtonHitbox: new ButtonHitbox({
    x: 111,
    y: -100,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11,
  }),
  Tongue: new Tongue({
    x: -80,
    y: -142,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 14,
  }),
  Pixelfire: new Pixelfire({
    x: -249,
    y: -120,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 25,
  }),
  Hexplode: new Hexplode({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 200,
    visible: false,
    layerOrder: 8,
  }),
  Candle: new Candle({
    x: 257,
    y: -197,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9,
  }),
  Lock: new Lock({
    x: 326,
    y: -213,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 32,
  }),
  Rays: new Rays({
    x: 0,
    y: -100,
    direction: 85.954915028,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 34,
  }),
  Balloon: new Balloon({
    x: 382,
    y: -360,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 88.68082936205325,
    visible: false,
    layerOrder: 28,
  }),
  Sun: new Sun({
    x: 309,
    y: 249,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 94.99999999999963,
    visible: false,
    layerOrder: 22,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
